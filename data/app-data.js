/* 自动生成，请勿直接修改 —— 源文件位于 data/*.json，运行 `node build.js` 重新生成 */
window.APP_DATA = {
  "budget": {
    "currency": "EUR",
    "currencySymbol": "€",
    "cnyRate": 7.7,
    "rateNote": "参考汇率 1 EUR ≈ 7.7 CNY，实际以出行时结算汇率为准",
    "effective": "2026 年度出差补贴标准（德国）",
    "standards": [
      {
        "key": "berlin_hamburg",
        "cities": "柏林、汉堡",
        "citiesEn": "Berlin, Hamburg",
        "currency": "欧元 EUR",
        "hotel": 150,
        "meal": 60,
        "other": 38,
        "total": 248
      },
      {
        "key": "munich",
        "cities": "慕尼黑",
        "citiesEn": "München",
        "currency": "欧元 EUR",
        "hotel": 170,
        "meal": 60,
        "other": 38,
        "total": 268
      },
      {
        "key": "frankfurt",
        "cities": "法兰克福",
        "citiesEn": "Frankfurt",
        "currency": "欧元 EUR",
        "hotel": 180,
        "meal": 60,
        "other": 38,
        "total": 278
      },
      {
        "key": "other",
        "cities": "其他城市",
        "citiesEn": "Other cities",
        "currency": "欧元 EUR",
        "hotel": 120,
        "meal": 60,
        "other": 38,
        "total": 218
      }
    ],
    "columns": [
      "住宿",
      "餐饮",
      "其他"
    ],
    "appliedCities": [
      {
        "city": "杜塞尔多夫",
        "standardKey": "other",
        "hotel": 120,
        "meal": 60,
        "other": 38,
        "nights": 15
      },
      {
        "city": "柏林",
        "standardKey": "berlin_hamburg",
        "hotel": 150,
        "meal": 60,
        "other": 38,
        "nights": 2
      },
      {
        "city": "法兰克福",
        "standardKey": "frankfurt",
        "hotel": 180,
        "meal": 60,
        "other": 38,
        "nights": 2
      },
      {
        "city": "因戈尔施塔特",
        "standardKey": "other",
        "hotel": 120,
        "meal": 60,
        "other": 38,
        "nights": 2
      }
    ],
    "estimates": {
      "hotelTotal": 2900,
      "mealTotal": 1260,
      "otherTotal": 798,
      "grandTotal": 4958,
      "note": "按 21 晚 × 对应城市住宿标准 + 21 天 × 餐饮 60 + 21 天 × 其他 38 测算（住宿部分按城市实际晚数加权）",
      "detail": [
        {
          "item": "住宿",
          "calc": "杜塞尔多夫 15 晚 × 120 + 柏林 2 晚 × 150 + 法兰克福 2 晚 × 180 + 因戈尔施塔特 2 晚 × 120",
          "eur": 2640
        },
        {
          "item": "餐饮",
          "calc": "21 天 × 60",
          "eur": 1260
        },
        {
          "item": "其他",
          "calc": "21 天 × 38",
          "eur": 798
        },
        {
          "item": "合计",
          "calc": "",
          "eur": 4698
        }
      ]
    },
    "mealPolicy": {
      "breakfast": "在酒店解决（优先选含早房价，多数德国酒店早餐 12–20 欧/人，含早房价通常更划算）",
      "lunch": "办公地/仓库附近简餐，人均 10–15 欧；工作日午间多为快餐、面包店、亚洲简餐",
      "dinner": "酒店附近正餐，人均 20–30 欧",
      "dailyCap": "全天餐饮合计控制在 60 欧/人/天以内"
    },
    "tips": [
      "德国酒店基本不提供拖鞋、牙刷牙膏，需自备",
      "周日绝大多数超市、商场停业，仅机场、火车站便利店营业，周六提前采购",
      "餐厅小费惯例为账单总额 5%–10%，非强制，结账凑整留下即可",
      "德国餐厅结账需主动叫服务员（德语 Zahlen, bitte），不会主动送账单",
      "刷卡以 Visa 为主，小镇、公交、自动售货机大多只收现金，备好零钱",
      "酒店入住多为 14:00 后，退房 11:00–12:00"
    ]
  },
  "itinerary": {
    "meta": {
      "title": "德国长虹审计商务出行",
      "subtitle": "Changhong Germany Audit Mission",
      "team": "一行四人 · 审计工作组",
      "outbound": {
        "date": "2026-10-11",
        "airline": "中国国航 Air China",
        "flight": "CA431",
        "from": "成都天府国际机场 TFU",
        "to": "法兰克福国际机场 FRA",
        "depart": "01:45",
        "departTz": "北京时间",
        "arrive": "06:45",
        "arriveTz": "德国时间",
        "duration": "约 10 小时 55 分（含时差）"
      },
      "inbound": {
        "date": "2026-11-01",
        "airline": "中国国航 Air China",
        "flight": "CA432",
        "from": "法兰克福国际机场 FRA",
        "to": "成都天府国际机场 TFU",
        "depart": "13:30",
        "departTz": "德国时间",
        "arrive": "06:55",
        "arriveDate": "2026-11-02",
        "arriveTz": "北京时间",
        "duration": "约 10 小时 25 分（含时差）"
      },
      "startDate": "2026-10-10",
      "endDate": "2026-11-02",
      "totalNights": 21,
      "note": "10月25日德国夏令时结束，时差由 6 小时变为 7 小时"
    },
    "days": [
      {
        "id": "d20261010",
        "date": "2026-10-10",
        "weekday": "周六",
        "city": "绵阳",
        "stayCity": "绵阳 → 成都天府",
        "type": "travel",
        "timeBlock": "全天",
        "title": "绵阳 → 成都天府",
        "titleEn": "Mianyang → Chengdu Tianfu",
        "transport": "汽车",
        "cost": 150,
        "detail": "国内段集结，前往成都天府国际机场，行李整理与出境材料复核。",
        "tags": [
          "国内段"
        ],
        "highlight": false
      },
      {
        "id": "d20261011",
        "date": "2026-10-11",
        "weekday": "周日",
        "city": "杜塞尔多夫",
        "stayCity": "杜塞尔多夫",
        "type": "travel",
        "timeBlock": "01:45 - 18:00",
        "title": "CA431 成都天府 → 法兰克福 → 杜塞尔多夫",
        "titleEn": "CA431 Chengdu – Frankfurt – Düsseldorf",
        "transport": "飞机",
        "cost": 9000,
        "detail": "01:45 成都天府起飞，06:45（德国时间）抵达法兰克福；转乘前往杜塞尔多夫（约 227 公里，中转开车 2 小时 / 火车 2 小时）。",
        "tags": [
          "国际航班",
          "入境日",
          "中转"
        ],
        "highlight": true,
        "segments": [
          {
            "time": "01:45",
            "text": "CA431 成都天府 TFU 起飞",
            "tz": "北京"
          },
          {
            "time": "06:45",
            "text": "抵达法兰克福 FRA，办理入境",
            "tz": "德国"
          },
          {
            "time": "08:00",
            "text": "法兰克福 → 杜塞尔多夫（中转 227 公里）",
            "tz": "德国"
          },
          {
            "time": "18:00",
            "text": "抵达杜塞尔多夫，入住酒店休整",
            "tz": "德国"
          }
        ]
      },
      {
        "id": "d20261012",
        "date": "2026-10-12",
        "weekday": "周一",
        "city": "杜塞尔多夫",
        "stayCity": "杜塞尔多夫",
        "type": "work",
        "timeBlock": "08:00 - 18:00",
        "title": "杜塞尔多夫现场办公",
        "titleEn": "Düsseldorf · On-site Office",
        "transport": "—",
        "cost": 0,
        "detail": "现场办公，审计工作启动会、资料交接与工作底稿准备。",
        "tags": [
          "现场办公"
        ],
        "highlight": false
      },
      {
        "id": "d20261013",
        "date": "2026-10-13",
        "weekday": "周二",
        "city": "杜塞尔多夫",
        "stayCity": "杜塞尔多夫",
        "type": "work",
        "timeBlock": "08:00 - 18:00",
        "title": "杜塞尔多夫现场办公",
        "titleEn": "Düsseldorf · On-site Office",
        "transport": "—",
        "cost": 0,
        "detail": "现场办公，凭证抽查与访谈。",
        "tags": [
          "现场办公"
        ],
        "highlight": false
      },
      {
        "id": "d20261014",
        "date": "2026-10-14",
        "weekday": "周三",
        "city": "杜塞尔多夫 / 翁纳",
        "stayCity": "杜塞尔多夫",
        "type": "field",
        "timeBlock": "08:00 - 18:00",
        "title": "查看无忧达仓库（Unna）",
        "titleEn": "Warehouse Inspection · Unna",
        "transport": "开车",
        "cost": 0,
        "detail": "杜塞尔多夫 → 翁纳 Unna，单程约 84 公里，实地查看无忧达仓库存货与出入库管理。",
        "tags": [
          "仓库盘点",
          "84 公里"
        ],
        "highlight": false
      },
      {
        "id": "d20261015",
        "date": "2026-10-15",
        "weekday": "周四",
        "city": "杜塞尔多夫 / 勒讷",
        "stayCity": "杜塞尔多夫",
        "type": "field",
        "timeBlock": "08:00 - 18:00",
        "title": "查看 kemena 仓库（Löhne）",
        "titleEn": "Warehouse Inspection · Löhne",
        "transport": "开车",
        "cost": 0,
        "detail": "杜塞尔多夫 → 勒讷 Löhne，单程约 227 公里，实地查看 kemena 仓库。",
        "tags": [
          "仓库盘点",
          "227 公里"
        ],
        "highlight": false
      },
      {
        "id": "d20261016",
        "date": "2026-10-16",
        "weekday": "周五",
        "city": "杜塞尔多夫",
        "stayCity": "杜塞尔多夫",
        "type": "work",
        "timeBlock": "08:00 - 18:00",
        "title": "杜塞尔多夫现场办公",
        "titleEn": "Düsseldorf · On-site Office",
        "transport": "—",
        "cost": 0,
        "detail": "现场办公，仓库盘点结果汇总。",
        "tags": [
          "现场办公"
        ],
        "highlight": false
      },
      {
        "id": "d20261017",
        "date": "2026-10-17",
        "weekday": "周六",
        "city": "杜塞尔多夫",
        "stayCity": "杜塞尔多夫",
        "type": "weekend",
        "timeBlock": "自由安排",
        "title": "周末自助出行（推荐：科隆 / 莱茵河）",
        "titleEn": "Weekend Trip",
        "transport": "火车",
        "cost": 0,
        "detail": "首个周末，力荐科隆大教堂 + 莱茵河畔，或杜塞尔多夫老城 + 媒体港城市漫游。详见「周末出行」。",
        "tags": [
          "周末",
          "自助旅游"
        ],
        "highlight": true
      },
      {
        "id": "d20261018",
        "date": "2026-10-18",
        "weekday": "周日",
        "city": "杜塞尔多夫",
        "stayCity": "杜塞尔多夫",
        "type": "weekend",
        "timeBlock": "自由安排",
        "title": "周末自助出行（推荐：亚琛 / 埃森工业遗产）",
        "titleEn": "Weekend Trip",
        "transport": "火车",
        "cost": 0,
        "detail": "周日商店停业，适合人文历史线路：亚琛大教堂（世界遗产）或埃森关税同盟煤矿（世界遗产）。",
        "tags": [
          "周末",
          "自助旅游",
          "周日"
        ],
        "highlight": true
      },
      {
        "id": "d20261019",
        "date": "2026-10-19",
        "weekday": "周一",
        "city": "杜塞尔多夫",
        "stayCity": "杜塞尔多夫",
        "type": "work",
        "timeBlock": "08:00 - 18:00",
        "title": "杜塞尔多夫现场办公",
        "titleEn": "Düsseldorf · On-site Office",
        "transport": "—",
        "cost": 0,
        "detail": "现场办公。",
        "tags": [
          "现场办公"
        ],
        "highlight": false
      },
      {
        "id": "d20261020",
        "date": "2026-10-20",
        "weekday": "周二",
        "city": "杜塞尔多夫",
        "stayCity": "杜塞尔多夫",
        "type": "work",
        "timeBlock": "08:00 - 18:00",
        "title": "杜塞尔多夫现场办公",
        "titleEn": "Düsseldorf · On-site Office",
        "transport": "—",
        "cost": 0,
        "detail": "现场办公。",
        "tags": [
          "现场办公"
        ],
        "highlight": false
      },
      {
        "id": "d20261021",
        "date": "2026-10-21",
        "weekday": "周三",
        "city": "杜塞尔多夫",
        "stayCity": "杜塞尔多夫",
        "type": "work",
        "timeBlock": "08:00 - 18:00",
        "title": "杜塞尔多夫现场办公（第一阶段收尾）",
        "titleEn": "Düsseldorf · On-site Office",
        "transport": "—",
        "cost": 0,
        "detail": "第一阶段现场工作收尾，赴柏林前资料整理。",
        "tags": [
          "现场办公",
          "阶段收尾"
        ],
        "highlight": false
      },
      {
        "id": "d20261022",
        "date": "2026-10-22",
        "weekday": "周四",
        "city": "柏林",
        "stayCity": "柏林",
        "type": "field",
        "timeBlock": "08:00 - 18:00",
        "title": "杜塞尔多夫 → 柏林，走访零售渠道",
        "titleEn": "Düsseldorf → Berlin · Retail Channel Visit",
        "transport": "飞机",
        "cost": 2000,
        "detail": "飞抵柏林（约 557 公里），走访零售渠道及大型商超，如 Media Markt、Kaufland。",
        "tags": [
          "渠道走访",
          "飞行",
          "557 公里"
        ],
        "highlight": true
      },
      {
        "id": "d20261023",
        "date": "2026-10-23",
        "weekday": "周五",
        "city": "柏林",
        "stayCity": "柏林",
        "type": "field",
        "timeBlock": "08:00 - 18:00",
        "title": "柏林走访零售渠道及大型商超",
        "titleEn": "Berlin · Retail Channel Visit",
        "transport": "—",
        "cost": 0,
        "detail": "继续走访 Media Markt、Kaufland 等连锁渠道，了解终端陈列与库存。",
        "tags": [
          "渠道走访"
        ],
        "highlight": false
      },
      {
        "id": "d20261024",
        "date": "2026-10-24",
        "weekday": "周六",
        "city": "法兰克福",
        "stayCity": "法兰克福",
        "type": "field",
        "timeBlock": "08:00 - 18:00",
        "title": "柏林 → 法兰克福，走访零售渠道",
        "titleEn": "Berlin → Frankfurt · Retail Channel Visit",
        "transport": "飞机",
        "cost": 2000,
        "detail": "飞抵法兰克福（约 551 公里），继续走访零售渠道及大型商超。",
        "tags": [
          "渠道走访",
          "飞行",
          "551 公里"
        ],
        "highlight": true
      },
      {
        "id": "d20261025",
        "date": "2026-10-25",
        "weekday": "周日",
        "city": "法兰克福",
        "stayCity": "法兰克福",
        "type": "weekend",
        "timeBlock": "自由安排",
        "title": "周末自助出行（推荐：海德堡 / 莱茵河谷）",
        "titleEn": "Weekend Trip",
        "transport": "火车",
        "cost": 0,
        "detail": "今日德国夏令时结束（03:00 回调为 02:00），时差变为 7 小时。推荐海德堡古堡或吕德斯海姆 + 莱茵河谷世界遗产。",
        "tags": [
          "周末",
          "自助旅游",
          "夏令时结束"
        ],
        "highlight": true
      },
      {
        "id": "d20261026",
        "date": "2026-10-26",
        "weekday": "周一",
        "city": "因戈尔施塔特",
        "stayCity": "因戈尔施塔特",
        "type": "field",
        "timeBlock": "08:00 - 16:00",
        "title": "法兰克福 → 沃尔尼茨，查看 GBL 仓库",
        "titleEn": "Frankfurt → Wörnitz · GBL Warehouse",
        "transport": "火车",
        "cost": 1000,
        "detail": "乘火车前往沃尔尼茨 Wörnitz，查看 GBL 仓库（当地车程约 2 小时，194 公里）。",
        "tags": [
          "仓库盘点",
          "火车",
          "194 公里"
        ],
        "highlight": true
      },
      {
        "id": "d20261027",
        "date": "2026-10-27",
        "weekday": "周二",
        "city": "因戈尔施塔特",
        "stayCity": "因戈尔施塔特",
        "type": "field",
        "timeBlock": "16:00 - 18:00",
        "title": "沃尔尼茨 → 因戈尔施塔特，拜访 OEM 客户 IMTRON",
        "titleEn": "Wörnitz → Ingolstadt · OEM Customer IMTRON",
        "transport": "火车",
        "cost": 1000,
        "detail": "16:00 起程前往因戈尔施塔特；拜访 OEM 客户 IMTRON（车程约 2 小时，156 公里）。",
        "tags": [
          "客户拜访",
          "火车",
          "156 公里"
        ],
        "highlight": true
      },
      {
        "id": "d20261028",
        "date": "2026-10-28",
        "weekday": "周三",
        "city": "杜塞尔多夫",
        "stayCity": "杜塞尔多夫",
        "type": "travel",
        "timeBlock": "08:00 - 18:00",
        "title": "因戈尔施塔特 → 杜塞尔多夫，返回办公场所",
        "titleEn": "Ingolstadt → Düsseldorf",
        "transport": "火车",
        "cost": 2000,
        "detail": "乘火车返回杜塞尔多夫办公场所，全程约 537 公里（开车约 6 小时，ICE 约 5 小时）。",
        "tags": [
          "长途转场",
          "火车",
          "537 公里"
        ],
        "highlight": true
      },
      {
        "id": "d20261029",
        "date": "2026-10-29",
        "weekday": "周四",
        "city": "杜塞尔多夫",
        "stayCity": "杜塞尔多夫",
        "type": "work",
        "timeBlock": "08:00 - 18:00",
        "title": "杜塞尔多夫现场办公",
        "titleEn": "Düsseldorf · On-site Office",
        "transport": "—",
        "cost": 0,
        "detail": "返回现场办公，第二阶段审计工作推进。",
        "tags": [
          "现场办公"
        ],
        "highlight": false
      },
      {
        "id": "d20261030",
        "date": "2026-10-30",
        "weekday": "周五",
        "city": "杜塞尔多夫",
        "stayCity": "杜塞尔多夫",
        "type": "work",
        "timeBlock": "08:00 - 18:00",
        "title": "杜塞尔多夫现场办公",
        "titleEn": "Düsseldorf · On-site Office",
        "transport": "—",
        "cost": 0,
        "detail": "现场办公，问题清单沟通与确认。",
        "tags": [
          "现场办公"
        ],
        "highlight": false
      },
      {
        "id": "d20261031",
        "date": "2026-10-31",
        "weekday": "周六",
        "city": "杜塞尔多夫",
        "stayCity": "杜塞尔多夫",
        "type": "work",
        "timeBlock": "08:00 - 18:00",
        "title": "杜塞尔多夫现场办公（末段）",
        "titleEn": "Düsseldorf · On-site Office",
        "transport": "—",
        "cost": 0,
        "detail": "末段现场办公与离场交接；如工作提前完成，可安排半日周边短途（科隆 / 波恩）。",
        "tags": [
          "现场办公"
        ],
        "highlight": false
      },
      {
        "id": "d20261101",
        "date": "2026-11-01",
        "weekday": "周日",
        "city": "返程",
        "stayCity": "返程",
        "type": "travel",
        "timeBlock": "08:00 - 13:30",
        "title": "杜塞尔多夫 → 法兰克福 → CA432 飞成都",
        "titleEn": "Düsseldorf → Frankfurt · CA432 to Chengdu",
        "transport": "飞机",
        "cost": 11000,
        "detail": "08:00–12:00 杜塞尔多夫前往法兰克福（约 227 公里，开车 2 小时 / 火车 2 小时）；13:30 CA432 起飞。务必预留 3 小时办理值机、海关盖章与退税。",
        "tags": [
          "国际航班",
          "退税",
          "返程"
        ],
        "highlight": true,
        "segments": [
          {
            "time": "08:00",
            "text": "杜塞尔多夫出发前往法兰克福机场",
            "tz": "德国"
          },
          {
            "time": "10:30",
            "text": "抵达 FRA，办理值机、海关盖章与退税",
            "tz": "德国"
          },
          {
            "time": "13:30",
            "text": "CA432 法兰克福起飞",
            "tz": "德国"
          },
          {
            "time": "06:55",
            "text": "11月2日 抵达成都天府 TFU",
            "tz": "北京"
          }
        ]
      },
      {
        "id": "d20261102",
        "date": "2026-11-02",
        "weekday": "周一",
        "city": "绵阳",
        "stayCity": "返程",
        "type": "travel",
        "timeBlock": "06:55 - 08:00",
        "title": "成都天府 → 绵阳，行程结束",
        "titleEn": "Chengdu Tianfu → Mianyang",
        "transport": "汽车",
        "cost": 150,
        "detail": "06:55 抵达成都天府，入境后返回绵阳，全程结束。",
        "tags": [
          "入境",
          "国内段"
        ],
        "highlight": false
      }
    ],
    "accommodation": [
      {
        "city": "杜塞尔多夫",
        "cityEn": "Düsseldorf",
        "nights": 11,
        "checkIn": "2026-10-11",
        "checkOut": "2026-10-22",
        "budgetKey": "other",
        "budgetEur": 120,
        "reason": "10/12–10/21 现场办公，兼赴 Unna、Löhne 仓库"
      },
      {
        "city": "柏林",
        "cityEn": "Berlin",
        "nights": 2,
        "checkIn": "2026-10-22",
        "checkOut": "2026-10-24",
        "budgetKey": "berlin_hamburg",
        "budgetEur": 150,
        "reason": "走访零售渠道及大型商超"
      },
      {
        "city": "法兰克福",
        "cityEn": "Frankfurt",
        "nights": 2,
        "checkIn": "2026-10-24",
        "checkOut": "2026-10-26",
        "budgetKey": "frankfurt",
        "budgetEur": 180,
        "reason": "走访零售渠道；临近法兰克福主火车站便于赴巴伐利亚"
      },
      {
        "city": "因戈尔施塔特",
        "cityEn": "Ingolstadt",
        "nights": 2,
        "checkIn": "2026-10-26",
        "checkOut": "2026-10-28",
        "budgetKey": "other",
        "budgetEur": 120,
        "reason": "拜访 OEM 客户 IMTRON，次日火车返程"
      },
      {
        "city": "杜塞尔多夫",
        "cityEn": "Düsseldorf",
        "nights": 4,
        "checkIn": "2026-10-28",
        "checkOut": "2026-11-01",
        "budgetKey": "other",
        "budgetEur": 120,
        "reason": "10/29–10/31 现场办公收尾"
      }
    ]
  },
  "tips": {
    "source": "《出国注意事项-德国篇》(2026-09-09) 核心提炼 + 2026 出行补充",
    "sections": [
      {
        "id": "documents",
        "icon": "id",
        "title": "证件类",
        "subtitle": "原件随身携带 · 禁止托运 · 务必备份",
        "level": "must",
        "items": [
          {
            "text": "护照（有效期需覆盖行程后 3 个月以上，至少 2 页空白页）"
          },
          {
            "text": "申根签证贴纸页（核对签证有效期、停留天数、入境次数）"
          },
          {
            "text": "往返机票英文行程单"
          },
          {
            "text": "境外旅行保险英文保单（保额建议 ≥ 3 万欧元医疗）"
          },
          {
            "text": "公务出访材料：邀请函原件或电子版、笔、纸"
          },
          {
            "text": "身份证"
          },
          {
            "text": "证件备份：护照/签证/保单复印 2 份 + 手机云端各存 1 份，与原件分开放置",
            "added": true
          }
        ]
      },
      {
        "id": "essentials",
        "icon": "bag",
        "title": "必备物资",
        "subtitle": "缺少会严重影响出行 · 必须携带",
        "level": "must",
        "items": [
          {
            "text": "德标 Type-F 转换插头（两圆脚），建议搭配小型插排，多设备充电"
          },
          {
            "text": "手机开通国际漫游，或提前网购德国本地电话卡 / eSIM"
          },
          {
            "text": "充电宝额定容量 ≤100Wh，随身携带，严禁托运，保留外包装"
          },
          {
            "text": "欧元现金 300–500 欧元（备零钱，小镇与公交多为现金支付）"
          },
          {
            "text": "Visa 信用卡，不建议单纯依靠银联卡"
          },
          {
            "text": "牙刷、牙膏、拖鞋（德国酒店基本不提供）"
          },
          {
            "text": "雨伞，应对突发性阵雨"
          },
          {
            "text": "口罩自备（无强制规定，公交、医院可按需佩戴）"
          },
          {
            "text": "旅行枕 / 眼罩，长途飞行使用"
          }
        ]
      },
      {
        "id": "recommended",
        "icon": "sparkle",
        "title": "推荐携带",
        "subtitle": "非硬性必备 · 大幅提升舒适度",
        "level": "good",
        "items": [
          {
            "text": "洗漱用品（分装瓶 ≤100ml，符合手提液体规则）"
          },
          {
            "text": "小包装纸巾、消毒湿巾（部分公共卫生间收费且无纸巾）"
          },
          {
            "text": "保温杯（德国公共场所很难找到免费热水，咖啡店热水大多收费）"
          },
          {
            "text": "可折叠购物袋（超市塑料袋收费）"
          },
          {
            "text": "保湿用品（当地空气干燥，紫外线不强）"
          }
        ]
      },
      {
        "id": "forbidden",
        "icon": "ban",
        "title": "禁止携带",
        "subtitle": "查获没收并罚款 · 海关处罚风险重点",
        "level": "danger",
        "items": [
          {
            "text": "所有肉类制品：新鲜熟食、腊肉、香肠、肉干、蛋黄类食品"
          },
          {
            "text": "新鲜水果、生鲜蔬菜、种子、活体植物"
          },
          {
            "text": "毒品、管制药品；防狼喷雾属于管制物品，严禁携带"
          },
          {
            "text": "手提行李内任何刀具；托运行李不建议携带刀具"
          },
          {
            "text": "盗版光碟、侵权商品（含假冒品牌箱包、手表）"
          }
        ]
      },
      {
        "id": "restricted",
        "icon": "alert",
        "title": "限制携带",
        "subtitle": "需遵守规则 · 超标必须申报",
        "level": "warn",
        "items": [
          {
            "text": "药品：普通感冒药、肠胃药可携带短期自用量；含麻黄碱、可待因、吗啡的止咳水、复方感冒药尽量不带。保留原厂包装，不要大批量携带。慢性病处方药建议备好英文医嘱。"
          },
          {
            "text": "烟草限额：200 支香烟，超出限额需要征税"
          },
          {
            "text": "现金：总额 ≥10000 欧元须主动向海关申报，隐瞒不报会罚款"
          },
          {
            "text": "少量茶叶、蜂蜜可以自用；块状根茎类中草药尽量不要携带，容易被扣留"
          },
          {
            "text": "允许携带：独立包装饼干、糖果、无肉无蛋坚果干货",
            "level": "good"
          }
        ]
      },
      {
        "id": "clothing",
        "icon": "shirt",
        "title": "衣物穿搭",
        "subtitle": "10 月初至 11 月初 · 昼夜温差巨大",
        "level": "info",
        "items": [
          {
            "text": "分层穿搭：长袖打底 + 薄毛衣/抓绒 + 防风防水外套"
          },
          {
            "text": "以长裤为主，准备薄围巾；鞋子选择防滑防水款式"
          },
          {
            "text": "室内尚未供暖，酒店早晚温度偏低（建议带一双室内保暖袜）"
          },
          {
            "text": "商务场合正装：建议 1–2 套西装/正装衬衫，配正装皮鞋；其余为商务便装"
          },
          {
            "text": "10 月底日落提前至 17:00 左右，早晚出行体感更冷，外套务必带上"
          }
        ]
      },
      {
        "id": "dining",
        "icon": "food",
        "title": "饮食",
        "subtitle": "预算 60 欧/人/天",
        "level": "info",
        "items": [
          {
            "text": "自来水可以直接饮用，不用煮沸"
          },
          {
            "text": "餐厅小费惯例为账单总额 5%–10%，非强制，结账凑整留下即可"
          },
          {
            "text": "酒店早餐多为冷自助；中餐数量少、价格偏高"
          },
          {
            "text": "周日绝大多数超市、商场停业，仅机场、火车站便利店营业，周六提前采购物资"
          },
          {
            "text": "点餐实用德语：Tagesmenü（今日套餐）、Mittagsmenü（午市套餐，通常最划算）、Zahlen bitte（买单）、Leitungswasser（自来水，多数餐厅收费）"
          }
        ]
      },
      {
        "id": "hotel",
        "icon": "bed",
        "title": "住宿",
        "subtitle": "入住 14:00 后 · 退房 11:00–12:00",
        "level": "info",
        "items": [
          {
            "text": "酒店一般不配备拖鞋、牙刷牙膏，部分酒店仅提供沐浴用品"
          },
          {
            "text": "入住时间多为 14 点后，退房 11–12 点"
          },
          {
            "text": "垃圾严格分类，禁止混投，违规可能罚款"
          },
          {
            "text": "酒店极少配备电热水壶，如需热水自备保温杯"
          },
          {
            "text": "check-in 常用德语：Ich habe eine Reservierung（我有预订）、Frühstück inklusive?（含早餐吗）"
          }
        ]
      },
      {
        "id": "transport",
        "icon": "train",
        "title": "交通出行",
        "subtitle": "打票是红线 · 逃票罚款 60 欧起",
        "level": "warn",
        "items": [
          {
            "text": "地铁、城铁、电车上车前必须主动打票检票，逃票罚款 60 欧元起"
          },
          {
            "text": "站台自动售票机多为德语界面，支持现金与信用卡，可购买单次票、日票"
          },
          {
            "text": "德国火车站无安检，站台自由通行；车站人流量大，警惕扒窃"
          },
          {
            "text": "德铁（DB）经常晚点，换乘建议至少预留 20–40 分钟"
          },
          {
            "text": "打车费用高昂，优先公共交通；长途 ICE 高铁提前线上购票价格更优惠"
          },
          {
            "text": "扶梯靠右站立，左侧快速通行；严格遵守红绿灯，禁止横穿马路"
          },
          {
            "text": "多人同行省钱：周末可用 Quer-durchs-Land-Ticket（全德慢车日票），单州可用 Länder-Ticket，详情见「周末出行」"
          }
        ]
      },
      {
        "id": "comm",
        "icon": "wifi",
        "title": "通讯与导航",
        "subtitle": "落地即用 · 提前离线",
        "level": "info",
        "items": [
          {
            "text": "国内漫游流量资费高，优先购买德国本地电话卡或 eSIM"
          },
          {
            "text": "导航推荐 Google Maps，落地后使用，提前下载离线地图"
          },
          {
            "text": "酒店、咖啡馆提供免费 Wi-Fi，部分需要注册"
          },
          {
            "text": "仓库与工业区（Unna、Löhne、Wörnitz、Gaimersheim）信号与导航漂移较多，建议提前保存地址坐标"
          }
        ]
      },
      {
        "id": "taxrefund",
        "icon": "tax",
        "title": "退税",
        "subtitle": "同一店单笔满 50.01 欧",
        "level": "good",
        "items": [
          {
            "text": "在同一家店单笔消费满 50.01 欧元可申请退税"
          },
          {
            "text": "购物时向店家索要退税单（Tax-Free Form），核对护照信息填写正确"
          },
          {
            "text": "商品须在购买后 3 个月内带离欧盟，且保持未使用原状"
          },
          {
            "text": "在机场离境时办理海关盖章和退税手续；法兰克福机场旺季排队较长，务必提前 3 小时到达"
          },
          {
            "text": "退税单须在海关盖章后再投递或柜台办理，未盖章无法退税"
          }
        ]
      },
      {
        "id": "payment",
        "icon": "card",
        "title": "支付方式",
        "subtitle": "现金仍是刚需",
        "level": "info",
        "items": [
          {
            "text": "大城市商场支持银联；小镇、小店、公交、自动售货机大多只收现金，备好零钱"
          },
          {
            "text": "刷卡以 Visa 为主，刷卡经常需要输入密码"
          },
          {
            "text": "微信、支付宝仅少数华人店铺可用，不可作为主要支付手段"
          },
          {
            "text": "德国部分商户仍只接受 Girocard（德国本地借记卡），境外信用卡可能被拒，随身带现金兜底"
          }
        ]
      },
      {
        "id": "medical",
        "icon": "medical",
        "title": "医疗与紧急联络",
        "subtitle": "112 全欧通用 · 免费拨打",
        "level": "danger",
        "items": [
          {
            "text": "公立医院等候时间长、费用昂贵，务必随身携带旅行保险单"
          },
          {
            "text": "小病前往药店（Apotheke，红色十字招牌），可咨询药剂师购药"
          },
          {
            "text": "通用紧急电话：112（警察、救护车、消防，免费拨打）"
          },
          {
            "text": "非急诊医疗咨询：116117（德国法定保险医师值班服务）"
          },
          {
            "text": "中国驻德国使领馆领事保护：外交部全球领事保护与服务应急热线 +86-10-12308"
          }
        ]
      },
      {
        "id": "apps",
        "icon": "app",
        "title": "常用 APP",
        "subtitle": "出发前装好",
        "level": "good",
        "items": [
          {
            "text": "德国高铁：DB Navigator（查车次、买票、站台信息、晚点实时通知）"
          },
          {
            "text": "酒店预订类：Booking、Agoda"
          },
          {
            "text": "地图：Google Maps（可下载离线地图）"
          },
          {
            "text": "打车：Uber / Bolt（小镇基本无车，仅大城市可用）"
          },
          {
            "text": "退税：Global Blue / Planet"
          },
          {
            "text": "翻译类：DeepL（德译中质量优于通用翻译）"
          },
          {
            "text": "天气：WarnWetter（德国气象局官方）、Meteoblue"
          }
        ]
      },
      {
        "id": "cold",
        "icon": "snow",
        "title": "容易遗漏的冷门提醒",
        "subtitle": "首次出访高频踩坑点",
        "level": "warn",
        "items": [
          {
            "text": "时差：10/11–10/24 德国比北京时间晚 6 小时；10/25 夏令时结束后变为晚 7 小时。国内中午 12 点 = 德国早 5 点（10/25 起）"
          },
          {
            "text": "手提行李液体规则：单瓶容积 ≤100ml，全部装入透明密封袋，超额只能托运"
          },
          {
            "text": "护照丢失第一时间报警，联系中国使领馆办理旅行证"
          },
          {
            "text": "当地紫外线不强，空气干燥，备好保湿用品"
          },
          {
            "text": "公务出行严禁携带涉密纸质材料、涉密 U 盘出境，电子工作文档提前脱敏"
          },
          {
            "text": "贵重物品不要放置背包外侧口袋，景点、火车站盗窃高发"
          },
          {
            "text": "酒店极少配备电热水壶，如需热水自备保温杯，咖啡店热水大多收费"
          }
        ]
      }
    ],
    "checklist": [
      {
        "group": "证件",
        "items": [
          "护照",
          "签证",
          "保险单",
          "往返机票",
          "全部酒店订单",
          "邀请函",
          "证件备份"
        ]
      },
      {
        "group": "电子类",
        "items": [
          "德标转换插头",
          "插排",
          "充电宝（随身携带）",
          "数据线",
          "备用眼镜"
        ]
      },
      {
        "group": "日用品",
        "items": [
          "牙刷+牙膏",
          "拖鞋",
          "分装洗漱瓶",
          "折叠雨伞雨衣",
          "购物袋",
          "纸巾湿巾",
          "保温杯"
        ]
      },
      {
        "group": "药品",
        "items": [
          "肠胃药",
          "感冒药",
          "创可贴",
          "个人慢性病处方药（附英文医嘱更佳）"
        ]
      },
      {
        "group": "衣物",
        "items": [
          "防风防水外套",
          "薄毛衣/抓绒",
          "长袖 T 恤",
          "长裤",
          "防滑防水鞋",
          "薄围巾",
          "正装一套"
        ]
      },
      {
        "group": "资金",
        "items": [
          "欧元现金零钱",
          "Visa 信用卡"
        ]
      },
      {
        "group": "禁止打包自查",
        "items": [
          "腊肉肉干",
          "熟食",
          "新鲜果蔬",
          "管制药品",
          "手提行李刀具"
        ]
      }
    ]
  }
};
