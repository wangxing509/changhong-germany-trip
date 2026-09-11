"""
计算德国各城市在行程关键日期的日出/日落时刻（当地时间）
算法：NOAA Solar Calculator（通用太阳位置算法），精度约 ±1 分钟。

用法：python scripts/sun.py
"""

import math
from datetime import date

# 行程涉及的城市（纬度, 经度）
CITIES = [
    ("杜塞尔多夫", "Dusseldorf", 51.2277, 6.7735),
    ("柏林", "Berlin", 52.5200, 13.4050),
    ("法兰克福", "Frankfurt", 50.1109, 8.6821),
    ("因戈尔施塔特", "Ingolstadt", 48.7665, 11.4258),
    ("沃尔尼茨", "Wornitz", 49.2500, 10.2500),
]

DATES = [
    date(2026, 10, 11),
    date(2026, 10, 17),
    date(2026, 10, 18),
    date(2026, 10, 25),
    date(2026, 10, 31),
    date(2026, 11, 1),
]

# 2026 年欧盟夏令时：3/29 起 CEST(UTC+2)，10/25 03:00 起 CET(UTC+1)
DST_END = date(2026, 10, 25)


def tz_offset(d: date) -> int:
    return 2 if d < DST_END else 1


def _jd(d: date) -> float:
    """公历日期 → 儒略日（当日 00:00 UT）"""
    y, m = d.year, d.month
    if m <= 2:
        y -= 1
        m += 12
    a = y // 100
    b = 2 - a + a // 4
    return math.floor(365.25 * (y + 4716)) + math.floor(30.6001 * (m + 1)) + d.day + b - 1524.5


def solar_noon_jd(d: date, lon: float) -> float:
    """
    NOAA：计算太阳正午的儒略日（不含时差修正）
    返回该日太阳正午对应的 UT 儒略日
    """
    jd = _jd(d)
    # 儒略世纪数
    t = (jd - 2451545.0) / 36525.0
    # 几何平均太阳黄经
    l0 = (280.46646 + t * (36000.76983 + t * 0.0003032)) % 360
    # 几何平均太阳平近点角
    m = 357.52911 + t * (35999.05029 - 0.0001537 * t)
    # 太阳中心差
    c = (math.sin(math.radians(m)) * (1.914602 - t * (0.004817 + 0.000014 * t))
         + math.sin(math.radians(2 * m)) * (0.019993 - 0.000101 * t)
         + math.sin(math.radians(3 * m)) * 0.000289)
    # 真黄经
    true_long = l0 + c
    # 视黄经
    omega = 125.04 - 1934.136 * t
    app_long = true_long - 0.00569 - 0.00478 * math.sin(math.radians(omega))
    # 黄赤交角
    eps0 = (23 + (26 + ((21.448 - t * (46.815 + t * (0.00059 - t * 0.001813)))) / 60) / 60)
    eps = eps0 + 0.00256 * math.cos(math.radians(omega))
    # 太阳赤纬
    decl = math.degrees(math.asin(math.sin(math.radians(eps)) * math.sin(math.radians(app_long))))
    # 均时差（分钟）
    y = math.tan(math.radians(eps / 2)) ** 2
    eot = 4 * math.degrees(
        y * math.sin(2 * math.radians(l0))
        - 2 * 0.016708634 * math.sin(math.radians(m))
        + 4 * 0.016708634 * y * math.sin(math.radians(m)) * math.cos(2 * math.radians(l0))
        - 0.5 * y * y * math.sin(4 * math.radians(l0))
        - 1.25 * 0.016708634 ** 2 * math.sin(2 * math.radians(m))
    )
    # 太阳正午（当地真太阳时 12:00 = 当地平太阳时 12:00 - EoT；换算到 UT 需减经度时差）
    return jd + 0.5 - lon / 360.0 - eot / 1440.0, decl


def sun_times(d: date, lat: float, lon: float):
    """返回 (日出, 日落) 的当地小时数；极昼/极夜返回 None"""
    noon_jd, decl = solar_noon_jd(d, lon)
    # 时角（考虑 -0.833° 折射与太阳视半径）
    cos_ha = ((math.sin(math.radians(-0.833)) - math.sin(math.radians(lat)) * math.sin(math.radians(decl)))
              / (math.cos(math.radians(lat)) * math.cos(math.radians(decl))))
    if cos_ha > 1 or cos_ha < -1:
        return None, None
    ha = math.degrees(math.acos(cos_ha)) / 360.0  # 转换为天
    off = tz_offset(d) / 24.0
    rise = (noon_jd - ha + off + 0.5) % 1.0 * 24
    sset = (noon_jd + ha + off + 0.5) % 1.0 * 24
    return rise, sset


def hm(h: float) -> str:
    if h is None:
        return "--:--"
    h = h % 24
    mm = int(round((h - int(h)) * 60))
    hh = int(h)
    if mm == 60:
        hh, mm = hh + 1, 0
    return "%02d:%02d" % (hh % 24, mm)


def main():
    lines = []
    lines.append("德国行程关键日期 日出 / 日落（当地时间，含夏令时切换）")
    lines.append("=" * 76)
    sunset_json = []
    for zh, en, lat, lon in CITIES:
        lines.append("")
        lines.append(f"【{zh} {en}】 纬度 {lat:.2f}N 经度 {lon:.2f}E")
        lines.append(f"  {'日期':<12}{'日出':<8}{'日落':<8}{'白昼':<9}{'时区':<12}备注")
        for d in DATES:
            r, s = sun_times(d, lat, lon)
            dl = (s - r) if (r is not None and s is not None) else 0
            tz = "CEST UTC+2" if d < DST_END else "CET UTC+1"
            note = "夏令时结束" if d == DST_END else ""
            lines.append(f"  {d.isoformat():<12}{hm(r):<8}{hm(s):<8}"
                         f"{int(dl)}h{int(round((dl % 1) * 60)):02d}m    {tz:<12}{note}")
            sunset_json.append({
                "city": zh,
                "cityEn": en,
                "date": d.isoformat(),
                "sunrise": hm(r),
                "sunset": hm(s),
                "daylight": f"{int(dl)}h{int(round((dl % 1) * 60)):02d}m",
                "tz": "CEST (UTC+2)" if d < DST_END else "CET (UTC+1)",
                "note": note
            })
    text = "\n".join(lines)
    print(text)

    import json
    import os
    os.makedirs("data/_staging", exist_ok=True)
    with open("data/_staging/_sun.json", "w", encoding="utf-8") as f:
        json.dump({
            "generator": "NOAA Solar Calculator 算法，精度约 ±1 分钟",
            "note": "德国 2026 年夏令时 3/29 起、10/25 03:00 结束；日落时间为当地时间",
            "sunset": sunset_json
        }, f, ensure_ascii=False, indent=2)
    print("\n已写出 data/_staging/_sun.json")


if __name__ == "__main__":
    main()
