/* 自动生成，请勿直接修改 —— 源文件位于 data/*.json，运行 `node build.js` 重新生成 */
window.APP_DATA = {
  "budget": {
    "currency": "EUR",
    "currencySymbol": "€",
    "cnyRate": 7.7,
    "rateNote": "参考汇率 1 EUR ≈ 7.7 CNY，实际以出行时结算汇率为准",
    "effective": "2026 年度出差补贴标准（德国）",
    "basis": {
      "hotel": "按【每人每晚】计，团组按每人单独一间单人间安排（4 人 = 4 间单人间）",
      "meal": "60 €/人/天为【除早餐外的餐补】，即午餐 + 晚餐合计上限；早餐在酒店解决",
      "other": "38 €/人/天为其他杂费（市内交通、通讯等）"
    },
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
      "headline": 4758,
      "headlineLabel": "每人补贴上限合计",
      "teamTotal": 19032,
      "teamSize": 4,
      "detail": [
        {
          "item": "住宿",
          "calc": "杜塞 15 晚 ×120 + 柏林 2 晚 ×150 + 法兰克福 2 晚 ×180 + 因戈尔施塔特 2 晚 ×120 = 1800+300+360+240",
          "eur": 2700,
          "note": "每人单独一间单人间"
        },
        {
          "item": "餐饮",
          "calc": "21 天 × 60（午 + 晚，早餐酒店）",
          "eur": 1260,
          "note": "除早餐外"
        },
        {
          "item": "其他",
          "calc": "21 天 × 38",
          "eur": 798,
          "note": "杂费"
        },
        {
          "item": "每人合计",
          "calc": "",
          "eur": 4758,
          "note": "补贴上限"
        }
      ],
      "note": "以上为按补贴上限测算的人均额度；实际支出低于上限部分按公司制度结余处理。全团 4 人上限合计约 19032 €。"
    },
    "mealPolicy": {
      "dailyCap": 60,
      "coverage": "午餐 + 晚餐（早餐在酒店解决，不计入）",
      "breakfast": "在酒店解决：优先预订含早房价，德国酒店早餐单点通常 12–20 €/人，含早房价更划算",
      "lunch": "办公地/仓库附近简餐，人均 12–20 €：面包店（Bäckerei）、超市熟食、亚洲简餐、午市套餐（Mittagsmenü，通常最划算）",
      "dinner": "酒店附近正餐，人均 30–42 €：德式啤酒馆、意式餐厅、亚洲餐厅",
      "lunchExamples": "午市套餐 Mittagsmenü 通常 9–14 €，是控制午餐支出的最佳选择",
      "note": "德国餐厅午市套餐普遍比晚餐单点便宜 30%–50%，建议工作日午餐优先选 Mittagsmenü"
    },
    "tips": [
      "德国酒店基本不提供拖鞋、牙刷牙膏，需自备",
      "周日绝大多数超市、商场停业，仅机场、火车站便利店营业，周六提前采购",
      "餐厅小费惯例为账单总额 5%–10%，非强制，结账凑整留下即可",
      "德国餐厅结账需主动叫服务员（德语 Zahlen, bitte），不会主动送账单",
      "刷卡以 Visa 为主，小镇、公交、自动售货机大多只收现金，备好零钱",
      "酒店入住多为 14:00 后，退房 11:00–12:00",
      "展会期间（如杜塞尔多夫 Messe 档期）房价可能翻倍，务必尽早预订可免费取消的房价"
    ]
  },
  "cities": {
    "dusseldorf": {
      "city": "杜塞尔多夫",
      "cityEn": "Düsseldorf",
      "budget_eur": 120,
      "meal_eur": 60,
      "other_eur": 38,
      "hotels": [
        {
          "name_zh": "杜塞尔多夫中央火车站一号汽车酒店",
          "name_en": "Motel One Düsseldorf-Hauptbahnhof",
          "address": "Immermannstraße 54, 40210 Düsseldorf",
          "nearest_station": "Düsseldorf Hbf",
          "walk_minutes": 3,
          "stars": 3,
          "single_price_eur": 99,
          "price_eur_low": 85,
          "price_eur_high": 119,
          "breakfast_included": false,
          "rating": "约 4.3/5（连锁口碑稳定，参考）",
          "rating_source": "Motel One 官方 / 公开评分（参考）",
          "within_budget": true,
          "why": "重点推荐。紧邻 Düsseldorf Hbf 与日本街（Immermannstraße），U-Bahn / S-Bahn / 火车三线交汇，去 Unna、Löhne 仓库当日往返最方便；楼下即日料与亚洲餐饮集中区，午餐晚餐选择最多；连锁品控稳定，4 间单人间易同层安排。",
          "booking_tip": "早餐另计约 12–16 欧/人；连住 11 晚建议直接走 Motel One 官网或企业协议价，常比 OTA 低 10–15 欧/晚。10 月展会档期房价可能翻倍，务必尽早锁定可免费取消房价。",
          "source_url": "https://www.motel-one.com/de/hotels/duesseldorf/hotel-duesseldorf-hauptbahnhof/"
        },
        {
          "name_zh": "杜塞尔多夫中央火车站宜必思酒店",
          "name_en": "ibis Düsseldorf Hauptbahnhof",
          "address": "Konrad-Adenauer-Platz 14, 40210 Düsseldorf",
          "nearest_station": "Düsseldorf Hbf",
          "walk_minutes": 2,
          "stars": 3,
          "single_price_eur": 95,
          "price_eur_low": 82,
          "price_eur_high": 115,
          "breakfast_included": false,
          "rating": "4.3/5（Accor 官网 ALL 评分，1,373 条）",
          "rating_source": "Accor 官网 ALL 评分",
          "within_budget": true,
          "why": "重点推荐。就在中央火车站正对面，步行 1–2 分钟，早班车与仓库日出行最省时间；评分样本大（1,300+ 条）可信度高；Accor 品牌可开英文发票，报销顺畅。",
          "booking_tip": "Accor 会员价与非会员价差异明显，建议注册 ALL 账号再订；早餐约 14–18 欧/人，可只订不含早房价、早餐在楼下火车站面包店解决更省。",
          "source_url": "https://all.accor.com/hotel/0963/index.de.shtml"
        },
        {
          "name_zh": "杜塞尔多夫市中心希尔顿欢朋酒店",
          "name_en": "Hampton by Hilton Düsseldorf City Centre",
          "address": "Harkortstraße 12, 40210 Düsseldorf",
          "nearest_station": "Düsseldorf Hbf",
          "walk_minutes": 6,
          "stars": 3,
          "single_price_eur": 112,
          "price_eur_low": 100,
          "price_eur_high": 138,
          "breakfast_included": true,
          "rating": "3.9/5（希尔顿官网，165 条）",
          "rating_source": "希尔顿官网",
          "within_budget": true,
          "why": "希尔顿旗下品牌，**含免费热早餐**——早餐在酒店解决，餐补 60 欧可全部用于午晚餐；评分略低于其他候选但含早价值高，实际每晚节省 12–16 欧。",
          "booking_tip": "房价含早是其核心优势；注意旺季单人间可能突破 120 欧，若超预算可退回到 Motel One 或 ibis。",
          "source_url": "https://www.hilton.com/en/hotels/dushahx-hampton-dusseldorf-city-centre/"
        },
        {
          "name_zh": "杜塞尔多夫市中心普瑞米尔酒店",
          "name_en": "Premier Inn Düsseldorf City Centre",
          "address": "Am Wehrhahn 80, 40211 Düsseldorf",
          "nearest_station": "U-Bahn Pempelforter Str. / Düsseldorf Hbf",
          "walk_minutes": 8,
          "stars": 3,
          "single_price_eur": 92,
          "price_eur_low": 79,
          "price_eur_high": 112,
          "breakfast_included": false,
          "rating": "约 4.2/5（连锁，参考）",
          "rating_source": "Premier Inn 官方 / 公开评分（参考）",
          "within_budget": true,
          "why": "英式连锁，房间较新、床品口碑好，性价比高；步行 8 分钟到 Hbf，也可乘 U-Bahn；价格通常低于同区其他品牌。",
          "booking_tip": "Premier Inn 常有「提前预付」低价档，但不可退改；展会期建议选可免费取消档。",
          "source_url": "https://www.premierinn.com/de/de/hotels/deutschland/nordrhein-westfalen/dusseldorf/duesseldorf-city-centre.html"
        },
        {
          "name_zh": "杜塞尔多夫弗里德里希城普瑞米尔酒店",
          "name_en": "Premier Inn Düsseldorf City Friedrichstadt",
          "address": "Harkortstraße 14, 40210 Düsseldorf",
          "nearest_station": "Düsseldorf Hbf",
          "walk_minutes": 6,
          "stars": 3,
          "single_price_eur": 90,
          "price_eur_low": 78,
          "price_eur_high": 110,
          "breakfast_included": false,
          "rating": "约 4.2/5（连锁，参考）",
          "rating_source": "Premier Inn 官方 / 公开评分（参考）",
          "within_budget": true,
          "why": "与市中心店同品牌、位置相近，紧邻 Harkortstraße 一带，可作为比价备选；两家 Premier Inn 互为价格备胎。",
          "booking_tip": "与市中心店同时比价，哪家便宜订哪家；确认是否含早。",
          "source_url": "https://www.premierinn.com/de/de/hotels/deutschland/nordrhein-westfalen/dusseldorf/duesseldorf-city-friedrichstadt.html"
        },
        {
          "name_zh": "杜塞尔多夫中央火车站 B&B 酒店",
          "name_en": "B&B Hotel Düsseldorf-Hbf",
          "address": "Ludwig-Erhard-Allee 2, 40227 Düsseldorf",
          "nearest_station": "Düsseldorf Hbf",
          "walk_minutes": 5,
          "stars": 2,
          "single_price_eur": 75,
          "price_eur_low": 65,
          "price_eur_high": 92,
          "breakfast_included": false,
          "rating": "约 4.0/5（连锁，参考）",
          "rating_source": "B&B Hotels 官方 / 公开评分（参考）",
          "within_budget": true,
          "why": "预算节省方案：单人间约为补贴上限的 60%，11 晚可省出可观差额；位置距 Hbf 步行 5 分钟，赶车方便。房间设施简单但干净。",
          "booking_tip": "早餐自助加购约 12 欧/人；房间偏小、隔音一般，适合以控成本为优先的团组。",
          "source_url": "https://www.hotel-bb.com/de/hotel/duesseldorf-hbf"
        },
        {
          "name_zh": "杜塞尔多夫城 B&B 酒店",
          "name_en": "B&B Hotel Düsseldorf-City",
          "address": "Toulouser Allee 2-4, 40211 Düsseldorf",
          "nearest_station": "U-Bahn Kennedydamm / Düsseldorf Hbf",
          "walk_minutes": 12,
          "stars": 2,
          "single_price_eur": 72,
          "price_eur_low": 62,
          "price_eur_high": 88,
          "breakfast_included": false,
          "rating": "约 4.0/5（连锁，参考）",
          "rating_source": "B&B Hotels 官方 / 公开评分（参考）",
          "within_budget": true,
          "why": "价格更省，位于 Toulouser Allee 商务区一带，环境安静；到 Hbf 步行约 12 分钟或一站 U-Bahn。",
          "booking_tip": "距中央车站略远于 B&B Hbf 店，若仓库日需早起赶车，优先选 Hbf 店。",
          "source_url": "https://www.hotel-bb.com/de/hotel/duesseldorf-city"
        },
        {
          "name_zh": "杜塞尔多夫米特 B&B 酒店",
          "name_en": "B&B Hotel Düsseldorf-Mitte",
          "address": "Kettwiger Straße 6, 40233 Düsseldorf",
          "nearest_station": "U-Bahn / S-Bahn 附近",
          "walk_minutes": 15,
          "stars": 2,
          "single_price_eur": 68,
          "price_eur_low": 58,
          "price_eur_high": 85,
          "breakfast_included": false,
          "rating": "约 4.0/5（连锁，参考）",
          "rating_source": "B&B Hotels 官方 / 公开评分（参考）",
          "within_budget": true,
          "why": "三家中价格最低，适合把住宿压到补贴的一半、把预算留给其他项；位置偏东，去市中心需乘 U-Bahn 约 10 分钟。",
          "booking_tip": "交通便利性弱于 Hbf 一带，仓库考察日通勤时间会增加，建议仅作为成本优先时的选择。",
          "source_url": "https://www.hotel-bb.com/de/hotel/duesseldorf-mitte"
        }
      ],
      "lunch": [
        {
          "name_zh": "日本街拉面（Immermannstraße 一带）",
          "name_en": "Ramen shops on Immermannstraße",
          "address": "Immermannstraße, 40210 Düsseldorf（日本街沿街多家）",
          "area": "日本街 / 中央火车站旁",
          "price_eur": 15,
          "cuisine": "日式拉面 / 盖饭",
          "specialty": "拉面、豚骨汤面、丼饭；出餐快，午市高峰建议 11:30 前到",
          "hours": "多为 11:30–14:30、17:30–22:00（各家不同）",
          "open_sunday": true,
          "reservation_needed": false,
          "source_url": ""
        },
        {
          "name_zh": "日本超市熟食便当",
          "name_en": "Japanese supermarket deli",
          "address": "Immermannstraße, 40210 Düsseldorf",
          "area": "日本街",
          "price_eur": 10,
          "cuisine": "日式便当 / 熟食",
          "specialty": "现做便当、饭团、寿司拼盘，可打包回办公室吃，最省时间",
          "hours": "约 10:00–20:00，周日休",
          "open_sunday": false,
          "reservation_needed": false,
          "source_url": ""
        },
        {
          "name_zh": "Carlsplatz 市场小吃",
          "name_en": "Carlsplatz Markt",
          "address": "Carlsplatz, 40213 Düsseldorf",
          "area": "老城边缘（Carlsplatz）",
          "price_eur": 13,
          "cuisine": "市场小吃 / 德式简餐",
          "specialty": "香肠面包、烤鸡、奶酪、鲜榨果汁；午市摊位选择多、出餐快",
          "hours": "周一至周六约 08:00–18:00",
          "open_sunday": false,
          "reservation_needed": false,
          "source_url": ""
        },
        {
          "name_zh": "老城咖喱香肠摊",
          "name_en": "Currywurst stands in Altstadt",
          "address": "Bolkerstraße / Flinger Straße, 40213 Düsseldorf",
          "area": "老城 Altstadt",
          "price_eur": 8,
          "cuisine": "德式快餐",
          "specialty": "Currywurst 咖喱香肠配薯条，杜塞尔多夫最经典的街头午餐",
          "hours": "约 11:00–20:00",
          "open_sunday": true,
          "reservation_needed": false,
          "source_url": ""
        },
        {
          "name_zh": "土耳其烤肉店（Döner）",
          "name_en": "Döner kebab shops",
          "address": "Hauptbahnhof 周边与老城多处",
          "area": "中央火车站周边",
          "price_eur": 9,
          "cuisine": "土耳其快餐",
          "specialty": "Döner 烤肉卷、Dürüm；人均最低、出餐最快，适合仓库日的紧凑午休",
          "hours": "多为 10:00–22:00",
          "open_sunday": true,
          "reservation_needed": false,
          "source_url": ""
        },
        {
          "name_zh": "亚洲午市套餐",
          "name_en": "Asian lunch menus (Mittagsmenü)",
          "address": "Immermannstraße / Oststraße 一带",
          "area": "日本街与中央火车站东侧",
          "price_eur": 14,
          "cuisine": "中餐 / 泰餐 / 越南餐",
          "specialty": "午市套餐 Mittagsmenü 通常 9–14 欧，含汤或饮料，是控制午餐支出最有效的选择",
          "hours": "工作日 11:30–14:30",
          "open_sunday": false,
          "reservation_needed": false,
          "source_url": ""
        },
        {
          "name_zh": "面包店简餐",
          "name_en": "Bäckerei lunch",
          "address": "Hbf 与老城沿街多家连锁面包店",
          "area": "全市连锁",
          "price_eur": 8,
          "cuisine": "德式面包 / 三明治",
          "specialty": "夹心面包、Brezel、咖啡；赶时间时最省事的午餐方案",
          "hours": "约 06:30–18:00",
          "open_sunday": false,
          "reservation_needed": false,
          "source_url": ""
        },
        {
          "name_zh": "Unna / Löhne 沿线高速服务区",
          "name_en": "Autobahn service areas (A30 / A2)",
          "address": "A30 Melle Grönegau Nord/Süd；A30 Bünde Shell Autohof（Ausfahrt 27）；A30 Salzbergen Autohof（Ausfahrt 7）",
          "area": "去 Unna、Löhne 仓库途中",
          "price_eur": 13,
          "cuisine": "服务区简餐 / 快餐",
          "specialty": "服务区热食、三明治、汤；仓库考察日午餐最现实的解决办法",
          "hours": "多数 24 小时或 06:00–22:00",
          "open_sunday": true,
          "reservation_needed": false,
          "source_url": ""
        }
      ],
      "dinner": [
        {
          "name_zh": "乌里格老啤酒馆",
          "name_en": "Uerige Obergärige Hausbrauerei",
          "address": "Berger Str. 1, 40213 Düsseldorf",
          "area": "",
          "price_eur": 32,
          "cuisine": "杜塞尔多夫老城啤酒馆",
          "specialty": "自酿 Altbier 老啤酒、猪肘、莱茵酸菜、血肠；杜塞尔多夫最具代表性的老字号，站位与座位混合",
          "hours": "每日约 10:00–24:00（周日营业）",
          "open_sunday": true,
          "reservation_needed": false,
          "source_url": "https://www.uerige.de/"
        },
        {
          "name_zh": "舒马赫啤酒厂",
          "name_en": "Brauerei Schumacher",
          "address": "Oststraße 123, 40210 Düsseldorf",
          "area": "",
          "price_eur": 31,
          "cuisine": "杜塞尔多夫老城啤酒馆",
          "specialty": "自酿 Altbier、猪肘、Sauerbraten 酸味烤肉；1838 年创立，离中央火车站近，适合抵店首日晚餐",
          "hours": "每日约 10:00–24:00（周日营业）",
          "open_sunday": true,
          "reservation_needed": false,
          "source_url": "https://www.schumacher-altbier.de/"
        },
        {
          "name_zh": "钥匙啤酒馆",
          "name_en": "Zum Schlüssel",
          "address": "Bolkerstraße 43-47, 40213 Düsseldorf",
          "area": "",
          "price_eur": 30,
          "cuisine": "杜塞尔多夫老城啤酒馆",
          "specialty": "自酿 Altbier、猪肘、德式家常菜；位于老城最热闹的 Bolkerstraße，晚间氛围好",
          "hours": "每日约 10:00–24:00（周日营业）",
          "open_sunday": true,
          "reservation_needed": true,
          "source_url": "https://www.zum-schluessel.de/"
        },
        {
          "name_zh": "小狐狸啤酒厂",
          "name_en": "Brauerei im Füchschen",
          "address": "Ratinger Straße 7, 40213 Düsseldorf",
          "area": "",
          "price_eur": 30,
          "cuisine": "杜塞尔多夫老城啤酒馆",
          "specialty": "自酿 Altbier、猪肘、Rheinischer Sauerbraten；Ratinger Straße 是老城最古老的街道之一",
          "hours": "每日约 10:00–24:00（周日营业）",
          "open_sunday": true,
          "reservation_needed": false,
          "source_url": "https://www.fuechschen.de/"
        },
        {
          "name_zh": "小船餐馆",
          "name_en": "Zum Schiffchen",
          "address": "Hafenstraße 5, 40213 Düsseldorf",
          "area": "",
          "price_eur": 38,
          "cuisine": "德式传统 / 莱茵地方菜",
          "specialty": "号称杜塞尔多夫最古老的餐馆之一（1628 年），猪肘、烤鸭、莱茵醋焖牛肉；环境适合商务晚餐",
          "hours": "每日约 12:00–23:00",
          "open_sunday": true,
          "reservation_needed": true,
          "source_url": ""
        },
        {
          "name_zh": "日本街日式料理（高级）",
          "name_en": "Japanese restaurants on Immermannstraße",
          "address": "Immermannstraße / Oststraße 一带, 40210 Düsseldorf",
          "area": "",
          "price_eur": 35,
          "cuisine": "日式（寿司 / 烧鸟 / 天妇罗）",
          "specialty": "杜塞尔多夫拥有欧洲最大的日本社区之一，日料水准高于德国平均水平；适合不习惯德式猪肘的团员",
          "hours": "多为 17:30–22:00，需确认周日营业情况",
          "open_sunday": false,
          "reservation_needed": true,
          "source_url": ""
        }
      ],
      "tips": [
        "杜塞尔多夫是本次行程的基地（共 15 晚：10/11–10/21 与 10/28–10/31）。推荐把酒店定在 Düsseldorf Hbf / 日本街（Immermannstraße）一带：火车、S-Bahn、U-Bahn 交汇，去 Unna（84 公里）和 Löhne（227 公里）仓库当日往返最方便，餐饮选择也最多。",
        "【最大成本风险】2026 年 10 月杜塞尔多夫有 Messe Düsseldorf 展会档期，展会期间房价可能上涨 2–3 倍，直接击穿 120 欧/晚的补贴上限。务必尽早预订【可免费取消】的房价，锁定后持续比价。",
        "早餐在酒店解决：Motel One、ibis、B&B 均需另付早餐（约 12–18 欧/人）；Hampton by Hilton 含免费热早餐，实际每晚可省 12–16 欧，综合性价比可能最高。",
        "周日营业情况（重要）：面包店、Carlsplatz 市场、日本超市周日基本关门；老城啤酒馆（Uerige、Schumacher、Zum Schlüssel、Füchschen）与部分日料店周日营业，是周日用餐的可靠选择。周六请提前采购。",
        "德国餐厅午市套餐（Mittagsmenü / Mittagstisch）11:30–14:00 最划算，通常比晚餐单点便宜 30%–50%，是控制 60 欧餐补的关键。",
        "去 Unna（无忧达仓库）沿 A46 / A1，早高峰 7:30–9:00 出城易拥堵，建议 7:00 前出发；去 Löhne（kemena 仓库）沿 A2 / A30，单程约 2.5 小时，全天在途时间长，午餐在 A30 沿线服务区解决最现实。",
        "小费惯例为账单 5%–10%，非强制，凑整即可；结账需主动叫服务员（德语 Zahlen, bitte）。",
        "老城 Altbier 啤酒馆的特色是服务员端着酒盘巡回，不想再喝时把杯垫盖在杯口即可，这是当地默认的「够了」信号。"
      ],
      "extraNote": "杜塞尔多夫酒店价格为官方渠道与公开信息整理后的【参考区间】，非实时报价；10 月展会档期波动极大，下单前请以酒店官网或公司协议渠道复核单人间含税价，并以【单人间 ≤120 欧】作为预算判定依据。餐厅推荐为杜塞尔多夫公认的老字号与人气聚集区，具体营业时间与门牌号请出行前用地图或电话再次确认。",
      "routeLunch": [
        {
          "name_zh": "A30 Melle 服务区（Grönegau Nord / Süd）",
          "name_en": "Raststätte Melle Grönegau",
          "town": "去 Löhne 途中",
          "address": "A30, Melle 附近",
          "price_eur": 13,
          "specialty": "服务区热食、三明治、咖啡；双向服务区，Löhne 往返均可用",
          "source_url": ""
        },
        {
          "name_zh": "A30 Bünde Shell Autohof",
          "name_en": "Shell Autohof Bünde",
          "town": "去 Löhne 途中",
          "address": "A30 Ausfahrt 27, Bünde",
          "price_eur": 12,
          "specialty": "加油站附属快餐与便利餐饮，停车方便",
          "source_url": ""
        },
        {
          "name_zh": "A30 Salzbergen Autohof",
          "name_en": "Autohof Salzbergen",
          "town": "去 Löhne 途中",
          "address": "A30 Ausfahrt 7, Salzbergen",
          "price_eur": 12,
          "specialty": "卡车司机常去的实惠快餐，分量足",
          "source_url": ""
        }
      ]
    },
    "berlin": {
      "city": "柏林",
      "cityEn": "Berlin",
      "budget_eur": 150,
      "meal_eur": 60,
      "other_eur": 38,
      "hotels": [
        {
          "name_zh": "柏林亚历山大广场一号汽车酒店",
          "name_en": "Motel One Berlin-Alexanderplatz",
          "address": "Grunerstraße 11, 10179 Berlin",
          "nearest_station": "S+U Alexanderplatz",
          "walk_minutes": 4,
          "stars": 3,
          "single_price_eur": 119,
          "price_eur_low": 99,
          "price_eur_high": 149,
          "breakfast_included": false,
          "rating": "4.4/5（Booking/Google 公开评分，参考）",
          "rating_source": "gelbeseiten.de 登记在册 + Booking/Google 公开评分（参考）",
          "within_budget": true,
          "why": "重点推荐：Alexanderplatz 正中心，步行可至 Kaufland / Media Markt Alexanderplatz 门店，S-Bahn 直达 Hauptbahnhof 与机场线；房型紧凑干净，双人房按单人间使用仍在 150 欧内。",
          "booking_tip": "早餐另计约 12-16 欧；4 间单人间建议直接走 Motel One 官网或企业协议价；酒吧 24 小时，适合晚间复盘。",
          "source_url": "https://www.gelbeseiten.de/gsbiz/d1211a14-7052-4f04-8aba-608c4080a09c"
        },
        {
          "name_zh": "梅宁阁柏林中央火车站酒店",
          "name_en": "MEININGER Hotel Berlin Central Station",
          "address": "Ella-Trebe-Straße 9, 10557 Berlin",
          "nearest_station": "Berlin Hauptbahnhof",
          "walk_minutes": 3,
          "stars": 3,
          "single_price_eur": 89,
          "price_eur_low": 69,
          "price_eur_high": 105,
          "breakfast_included": false,
          "rating": "4.2/5（官方房型页 + Google 公开评分，参考）",
          "rating_source": "meininger-hotels.com 官方门店页 + Google 公开评分（参考）",
          "within_budget": true,
          "why": "重点推荐（性价比首选）：紧贴 Hauptbahnhof，10/22 抵达与 10/24 飞法兰克福的行李动线最短；同区常有 4 间单人间余量，适合小团组；自助厨房与洗衣，长差友好。",
          "booking_tip": "自助早餐另计约 9.9-12.9 欧每人；团体 4 间可走 groups.meininger-hotels.com 询团体价，通常低于散订 8-15%；退改政策较严，行程确认后再下单。",
          "source_url": "https://www.meininger-hotels.com/en/hotels/berlin/hotel-berlin-central-station/"
        },
        {
          "name_zh": "柏林哈克市场一号汽车酒店",
          "name_en": "Motel One Berlin-Hackescher Markt",
          "address": "Dircksenstraße 36, 10179 Berlin",
          "nearest_station": "S Hackescher Markt",
          "walk_minutes": 1,
          "stars": 3,
          "single_price_eur": 119,
          "price_eur_low": 99,
          "price_eur_high": 149,
          "breakfast_included": false,
          "rating": "4.4/5（Booking/Google 公开评分，参考）",
          "rating_source": "gelbeseiten.de 登记在册 + Booking/Google 公开评分（参考）",
          "within_budget": true,
          "why": "备选：Mitte 核心，近哈克市场与博物馆岛，步行 10 分钟到 Alexanderplatz；若 Alexanderplatz 店满房可无缝替换，同品牌服务标准一致。",
          "booking_tip": "与 Alexanderplatz 店同价带；周中入住通常比周末低 10-20 欧；房间偏小，2 人同住偏挤，正好每人一间。",
          "source_url": "https://www.gelbeseiten.de/gsbiz/2b1bc362-f42c-402d-bba3-3f956615227b"
        },
        {
          "name_zh": "柏林亚历山大广场 B&B 酒店",
          "name_en": "B&B Hotel Berlin-Alexanderplatz",
          "address": "Voltairestraße 3a, 10179 Berlin",
          "nearest_station": "U Heinrich-Heine-Straße / S+U Alexanderplatz",
          "walk_minutes": 8,
          "stars": 2,
          "single_price_eur": 85,
          "price_eur_low": 69,
          "price_eur_high": 110,
          "breakfast_included": false,
          "rating": "4.0/5（Google 公开评分，参考）",
          "rating_source": "gelbeseiten.de 登记在册 + Google 公开评分（参考）",
          "within_budget": true,
          "why": "预算兜底方案：连锁标准间，价格最低，Alexanderplatz 步行可达；四间单人间总价可比 Motel One 省约 130 欧每晚。",
          "booking_tip": "早餐约 10-12 欧；房型以双人间为主，按单人间使用（0.85 折算）仍在 150 欧内；位置略偏南，注意晚间步行路线。",
          "source_url": "https://www.gelbeseiten.de/gsbiz/7b2935d3-6b84-405a-ac14-9964ee669f15"
        },
        {
          "name_zh": "柏林中央火车站一号汽车酒店",
          "name_en": "Motel One Berlin-Hauptbahnhof",
          "address": "Invalidenstraße 54, 10557 Berlin",
          "nearest_station": "Berlin Hauptbahnhof",
          "walk_minutes": 5,
          "stars": 3,
          "single_price_eur": 109,
          "price_eur_low": 92,
          "price_eur_high": 138,
          "breakfast_included": false,
          "rating": "4.8/5（黄页 5 条评价）",
          "rating_source": "gelbeseiten.de",
          "within_budget": true,
          "why": "备选：距 Hauptbahnhof 步行 5 分钟，10/24 早班机或早班火车衔接最稳；黄页评分 4.8，为柏林 Motel One 门店中最高之一。",
          "booking_tip": "若航班或火车在上午，优先选本店而非 Alexanderplatz 店，可省 15-20 分钟通勤；早餐另计。",
          "source_url": "https://www.gelbeseiten.de/gsbiz/e0e0ab46-62e3-4718-bac7-29c180281f52"
        },
        {
          "name_zh": "柏林中央火车站城际酒店",
          "name_en": "IntercityHotel Berlin Hauptbahnhof",
          "address": "Katharina-Paulus-Straße 5, 10557 Berlin",
          "nearest_station": "Berlin Hauptbahnhof",
          "walk_minutes": 6,
          "stars": 4,
          "single_price_eur": 129,
          "price_eur_low": 105,
          "price_eur_high": 155,
          "breakfast_included": true,
          "rating": "4.5/5（黄页 2 条评价）",
          "rating_source": "gelbeseiten.de",
          "within_budget": true,
          "why": "备选（含早口径最省心）：4 星商务标准，含自助早餐，房内办公桌宽裕；含早后实际成本与 Motel One 加单点早餐接近。",
          "booking_tip": "官网会员价常含早；单人间库存少于双人间，确认 4 间单人间可同层；价格上限触及 150 欧，务必提前锁价。",
          "source_url": "https://www.gelbeseiten.de/gsbiz/8d85aa14-218c-4c6a-8f7f-6375f2fcbf39"
        }
      ],
      "lunch": [
        {
          "name_zh": "咖喱三六",
          "name_en": "Curry 36",
          "address": "Mehringdamm 36, 10961 Berlin",
          "area": "Kreuzberg / Mehringdamm（U Mehringdamm 出口即到）",
          "price_eur": 10,
          "cuisine": "柏林街头小吃（咖喱香肠）",
          "specialty": "咖喱香肠 Currywurst 配薯条，柏林排名第一的经典小吃",
          "hours": "约 09:00-次日 05:00",
          "open_sunday": true,
          "reservation_needed": false,
          "source_url": "https://www.gelbeseiten.de/suche/restaurants/berlin%20mitte"
        },
        {
          "name_zh": "楠特埃克柏林餐馆",
          "name_en": "Nante-Eck",
          "address": "Schiffbauerdamm 6, 10117 Berlin",
          "area": "Friedrichstraße / S+U Friedrichstraße 周边",
          "price_eur": 16,
          "cuisine": "柏林家常菜 / 德式小酒馆",
          "specialty": "柏林猪肘、炸肉排、Berliner Weiße 啤酒，午市套餐性价比高",
          "hours": "约 12:00-23:00（周日多休息，需电话确认）",
          "open_sunday": false,
          "reservation_needed": false,
          "source_url": "https://www.gelbeseiten.de/suche/restaurants/berlin%20mitte"
        },
        {
          "name_zh": "亚历山大广场阿列克斯餐厅",
          "name_en": "ALEX Berlin am Alex",
          "address": "Panoramastraße 1a, 10178 Berlin",
          "area": "Alexanderplatz（电视塔脚下）",
          "price_eur": 17,
          "cuisine": "德式 / 国际连锁休闲餐",
          "specialty": "午市自助、炸猪排、沙拉吧",
          "hours": "约 08:00-24:00",
          "open_sunday": true,
          "reservation_needed": false,
          "source_url": "https://www.gelbeseiten.de/gsbiz/62f30601-553b-4ee2-b787-01866837061c"
        },
        {
          "name_zh": "黑泵啤酒馆（夏洛滕堡店）",
          "name_en": "Brauhaus Lemke am Schloss",
          "address": "Eosanderstraße 20, 10587 Berlin",
          "area": "Charlottenburg（施洛斯夏洛滕堡侧，近选帝侯大街西段）",
          "price_eur": 18,
          "cuisine": "柏林自酿啤酒馆 / 德式",
          "specialty": "自酿 Lemke 啤酒、炸猪肘、柏林特色香肠拼盘",
          "hours": "约 12:00-23:00（周日多为 12:00 起）",
          "open_sunday": true,
          "reservation_needed": false,
          "source_url": "https://www.gelbeseiten.de/gsbiz/9cefb166-0043-48e5-b79b-847f7133653d"
        },
        {
          "name_zh": "柏林共和国餐馆",
          "name_en": "Berliner Republik",
          "address": "Schiffbauerdamm 8, 10117 Berlin",
          "area": "Friedrichstraße / Spree 河畔",
          "price_eur": 19,
          "cuisine": "德式经典（股价点菜制）",
          "specialty": "按当日股价定价的德式大菜：炸猪肘、酸菜、香肠",
          "hours": "约 10:00-24:00",
          "open_sunday": true,
          "reservation_needed": false,
          "source_url": "https://www.gelbeseiten.de/gsbiz/7689fa73-c628-4a13-a083-c05a3bcb8f78"
        },
        {
          "name_zh": "格奥尔格啤酒坊",
          "name_en": "Brauhaus Georgbräu",
          "address": "Spreeufer 4, 10178 Berlin",
          "area": "Nikolaiviertel / Alexanderplatz 步行 8 分钟",
          "price_eur": 19,
          "cuisine": "柏林自酿啤酒坊 / 德式家常",
          "specialty": "现场自酿 Georgbräu 啤酒、柏林猪肘、Königsberger Klopse",
          "hours": "约 12:00-24:00",
          "open_sunday": true,
          "reservation_needed": false,
          "source_url": "https://www.georgbraeu.de/"
        }
      ],
      "dinner": [
        {
          "name_zh": "格奥尔格啤酒坊",
          "name_en": "Brauhaus Georgbräu",
          "address": "Spreeufer 4, 10178 Berlin",
          "area": "",
          "price_eur": 38,
          "cuisine": "德式啤酒坊",
          "specialty": "自酿啤酒 + 柏林猪肘 Eisbein、酸菜炖猪肘、香肠拼盘",
          "hours": "约 12:00-24:00",
          "open_sunday": true,
          "reservation_needed": true,
          "source_url": "https://www.georgbraeu.de/"
        },
        {
          "name_zh": "维特尔斯巴赫广场皇家啤酒馆",
          "name_en": "Weihenstephaner Berlin",
          "address": "Neue Promenade 5, 10178 Berlin",
          "area": "",
          "price_eur": 34,
          "cuisine": "巴伐利亚啤酒馆",
          "specialty": "Weihenstephan 鲜啤、白香肠 Weisswurst、烤猪肘 Schweinshaxe",
          "hours": "约 11:00-24:00",
          "open_sunday": true,
          "reservation_needed": true,
          "source_url": "https://www.gelbeseiten.de/suche/restaurants/berlin%20mitte"
        },
        {
          "name_zh": "柏林共和国餐馆",
          "name_en": "Berliner Republik",
          "address": "Schiffbauerdamm 8, 10117 Berlin",
          "area": "",
          "price_eur": 35,
          "cuisine": "德式经典",
          "specialty": "股价制菜单：炸猪肘、德式香肠、Berliner Weiße",
          "hours": "约 10:00-24:00",
          "open_sunday": true,
          "reservation_needed": true,
          "source_url": "https://www.gelbeseiten.de/gsbiz/7689fa73-c628-4a13-a083-c05a3bcb8f78"
        },
        {
          "name_zh": "黑森林小酒屋",
          "name_en": "Schwarzwaldstuben",
          "address": "Tucholskystraße 48, 10117 Berlin",
          "area": "",
          "price_eur": 36,
          "cuisine": "德国西南部（巴登）乡村菜",
          "specialty": "Flammkuchen 火饼、Maultaschen 施瓦本方饺、黑森林火腿",
          "hours": "约 12:00-24:00",
          "open_sunday": false,
          "reservation_needed": true,
          "source_url": "https://www.gelbeseiten.de/suche/restaurants/berlin%20mitte"
        },
        {
          "name_zh": "最后的审判所餐馆",
          "name_en": "Zur Letzten Instanz",
          "address": "Waisenstraße 14-16, 10179 Berlin",
          "area": "",
          "price_eur": 40,
          "cuisine": "柏林最古老的小酒馆（1621 年）",
          "specialty": "柏林猪肘、Rouladen 牛肉卷、Spreewald 酸黄瓜",
          "hours": "约 17:00-24:00（周日多营业，需电话确认）",
          "open_sunday": true,
          "reservation_needed": true,
          "source_url": "https://www.gelbeseiten.de/suche/restaurants/berlin%20mitte"
        },
        {
          "name_zh": "鲁茨美食餐厅（底层酒馆口径）",
          "name_en": "Rutz Weinbar (ground-floor wine bar)",
          "address": "Chausseestraße 8, 10115 Berlin",
          "area": "",
          "price_eur": 42,
          "cuisine": "现代德式 / 新派柏林菜",
          "specialty": "时令柏林菜、德式葡萄酒配对",
          "hours": "约 18:00-24:00（周日多有休）",
          "open_sunday": false,
          "reservation_needed": true,
          "source_url": "https://www.gelbeseiten.de/suche/restaurants/berlin%20mitte"
        }
      ],
      "tips": [
        "周日（柏林与法兰克福同为周日）商店普遍关门：可依靠 Berlin Hauptbahnhof 车站商场（Lidl/Aldi/ROSSMANN/dm，周日多营业）、Alexanderplatz 的 Galeria 与 Rewe To Go、各 U-Bahn 站内面包房（Zeit für Brot、Bäckerei Steinecke），以及博物馆岛等博物馆。",
        "柏林走访动线：Media Markt Berlin-Alexanderplatz 与 Kaufland Berlin-Alexanderplatz 均距 Motel One Alexanderplatz 步行 5 分钟内，建议 10/23 一天串联，减少打车支出。",
        "预算判定：柏林单人间上限 150 欧已按最坏情况（展会或周末上浮）核对；Motel One 系列上限 149 欧属踩线，建议以 119 欧中位价下单并保留免费取消条款。",
        "早餐统一在酒店解决：Motel One 与 B&B 早餐需另购（约 10-16 欧）；若要严格压住总预算，可选 B&B Hotel（房费 85 欧 + 早餐 10 欧）或 MEININGER（房费 89 欧 + 早餐 9.9 欧）组合。",
        "数据可靠性声明：名称、地址、电话与部分评分来自 gelbeseiten.de 黄页在册记录或官方站点（motel-one.com、meininger-hotels.com、georgbraeu.de 等已直接抓取成功）；房价与餐价均为 2025-2026 区间估算（参考），未能取得 2026 年 10 月实时报价。需复核条目：Zur Letzten Instanz、Schwarzwaldstuben、Weihenstephaner 的门牌号，以及 Rutz 底层酒馆而非米其林餐厅的口径。"
      ],
      "extraNote": "",
      "routeLunch": []
    },
    "frankfurt": {
      "city": "法兰克福",
      "cityEn": "Frankfurt",
      "budget_eur": 180,
      "meal_eur": 60,
      "other_eur": 38,
      "hotels": [
        {
          "name_zh": "法兰克福市中心普瑞米尔酒店",
          "name_en": "Premier Inn Frankfurt City Centre",
          "address": "Elbestraße 7, 60329 Frankfurt am Main",
          "nearest_station": "Frankfurt (Main) Hauptbahnhof",
          "walk_minutes": 3,
          "stars": 3,
          "single_price_eur": 105,
          "price_eur_low": 89,
          "price_eur_high": 145,
          "breakfast_included": false,
          "rating": "4.3/5（Booking/Google 公开评分，参考）",
          "rating_source": "gelbeseiten.de（Elbestraße 7 登记在册，24 小时前台）+ Booking/Google（参考）",
          "within_budget": true,
          "why": "首推（离 Hbf 最近档）：位于 Bahnhofsviertel 北侧，出 Hbf 北口步行约 3 分钟；英式连锁房型标准、隔音与卫生稳定，10/26 清晨 5-6 点出发去 Wörnitz 无风险；单人间上限 145 欧远低于 180 欧预算。",
          "booking_tip": "早餐另计约 12-14 欧；官网直订常有灵活房价含免费取消；10 月法兰克福展会期价格可能瞬时上浮 40-80 欧，务必提前 4-6 周锁价。",
          "source_url": "https://www.gelbeseiten.de/gsbiz/4d8dde88-fab1-4b91-bead-4b06da03044e"
        },
        {
          "name_zh": "法兰克福中央火车站一号汽车酒店",
          "name_en": "Motel One Frankfurt-Hauptbahnhof",
          "address": "Münchener Straße 50, 60329 Frankfurt am Main",
          "nearest_station": "Frankfurt (Main) Hauptbahnhof",
          "walk_minutes": 2,
          "stars": 3,
          "single_price_eur": 115,
          "price_eur_low": 95,
          "price_eur_high": 155,
          "breakfast_included": false,
          "rating": "4.4/5（Booking/Google 公开评分，参考）",
          "rating_source": "motel-one.com 官方门店页（可访问）+ Booking/Google（参考）",
          "within_budget": true,
          "why": "首推（通勤最省时）：Münchener Straße 正对 Hbf 南侧出口，步行 2 分钟进站台，10/26 早晨 06:00 的火车只需 05:45 出门；与柏林门店同品牌，团队体验可预期。",
          "booking_tip": "4 间单人间建议直接走 Motel One 官网（可勾选 4 间独立房）；早餐另计约 12.9 欧；房型偏小，勿安排 2 人同住。",
          "source_url": "https://www.motel-one.com/en/hotels/frankfurt/hotel-frankfurt-hauptbahnhof/"
        },
        {
          "name_zh": "法兰克福城市快捷假日酒店（中央火车站）",
          "name_en": "Holiday Inn Express Frankfurt City - Hauptbahnhof",
          "address": "Elbestraße 7, 60329 Frankfurt am Main",
          "nearest_station": "Frankfurt (Main) Hauptbahnhof",
          "walk_minutes": 4,
          "stars": 3,
          "single_price_eur": 118,
          "price_eur_low": 99,
          "price_eur_high": 160,
          "breakfast_included": true,
          "rating": "4.2/5（黄页登记 + IHG 公开评分，参考）",
          "rating_source": "gelbeseiten.de（Elbestraße 7，24 小时前台）",
          "within_budget": true,
          "why": "备选（含早口径）：IHG 体系 3 星，标准含自助早餐；登记地址与 Premier Inn 同楼群（Elbestraße 7），位置等效而早餐通常已含，综合成本可能更低。",
          "booking_tip": "含早是关键优势，可直接省下每日 12-14 欧每人；IHG 会员价常有免费取消；注意确认预约的是 Hauptbahnhof 店而非 Messe 或 Taunus 分店。",
          "source_url": "https://www.gelbeseiten.de/gsbiz/a5064a46-1459-41f2-8fcc-e61348977c7b"
        },
        {
          "name_zh": "法兰克福主火车站 B&B 酒店",
          "name_en": "B&B Hotel Frankfurt-Hauptbahnhof",
          "address": "Mainzer Landstraße 117, 60327 Frankfurt am Main",
          "nearest_station": "Frankfurt (Main) Hauptbahnhof",
          "walk_minutes": 8,
          "stars": 2,
          "single_price_eur": 85,
          "price_eur_low": 69,
          "price_eur_high": 110,
          "breakfast_included": false,
          "rating": "4.0/5（Google 公开评分，参考）",
          "rating_source": "B&B 品牌门店网络（官网 hotel-bb.com 抓取被 403 拦截，地址为参考）",
          "within_budget": true,
          "why": "预算兜底：四间单人间总价可比 Premier Inn 省约 80 欧每晚；Mainzer Landstraße 位于 Hbf 西侧，步行 8 分钟，仍在 10 分钟硬要求内。",
          "booking_tip": "地址需复核：B&B 在法兰克福有多家门店（Hauptbahnhof、Messe、Airport），下单前请在 hotel-bb.com 用 Frankfurt-Hauptbahnhof 精确核对街号；早餐约 10-12 欧。",
          "source_url": "https://www.hotel-bb.com/en/hotel/frankfurt-main-hauptbahnhof"
        },
        {
          "name_zh": "法兰克福城际酒店（中央火车站南）",
          "name_en": "IntercityHotel Frankfurt Hauptbahnhof Süd",
          "address": "Mannheimer Straße 21, 60329 Frankfurt am Main",
          "nearest_station": "Frankfurt (Main) Hauptbahnhof（南侧出口）",
          "walk_minutes": 5,
          "stars": 4,
          "single_price_eur": 129,
          "price_eur_low": 109,
          "price_eur_high": 170,
          "breakfast_included": true,
          "rating": "4.8/5（黄页 4 条评价）",
          "rating_source": "gelbeseiten.de",
          "within_budget": true,
          "why": "备选（4 星 + 含早 + 评分最高）：黄页 4.8 分，Mannheimer Straße 正对 Hbf 南出口，含早，房内办公条件好；德铁体系酒店对铁路出行有便利加成（部分房型含 FreeCityTicket 市内交通票，需确认）。",
          "booking_tip": "含早且可能含市内交通票，实际性价比高于标价；上限 170 欧贴近 180 欧预算，展会期务必锁价；确认是否含 FreeCityTicket。",
          "source_url": "https://www.gelbeseiten.de/gsbiz/acfd9f48-c8d3-4edb-b994-3a055c1a240e"
        },
        {
          "name_zh": "法兰克福莱昂纳多城市酒店",
          "name_en": "Leonardo Hotel Frankfurt-City",
          "address": "Münchener Straße 59, 60329 Frankfurt am Main",
          "nearest_station": "Frankfurt (Main) Hauptbahnhof",
          "walk_minutes": 4,
          "stars": 4,
          "single_price_eur": 135,
          "price_eur_low": 115,
          "price_eur_high": 175,
          "breakfast_included": true,
          "rating": "5.0/5（黄页 1 条评价，样本极小）",
          "rating_source": "gelbeseiten.de",
          "within_budget": true,
          "why": "备选（4 星商务舒适）：Münchener Straße 59，与 Motel One 同街，步行 4 分钟；房型面积更大，适合每晚需要处理文件的场景。",
          "booking_tip": "含早；黄页评分样本仅 1 条不足以定论，建议交叉参考 Booking；上限 175 欧已接近红线，非展会日可谈到 120-140 欧。",
          "source_url": "https://www.gelbeseiten.de/gsbiz/e6f03869-4534-4c7f-96a7-69e7e8ebf5fc"
        },
        {
          "name_zh": "法兰克福城市宜必思尚品酒店",
          "name_en": "ibis Styles Frankfurt City",
          "address": "Moselstraße 12, 60329 Frankfurt am Main",
          "nearest_station": "Frankfurt (Main) Hauptbahnhof",
          "walk_minutes": 6,
          "stars": 3,
          "single_price_eur": 112,
          "price_eur_low": 95,
          "price_eur_high": 152,
          "breakfast_included": true,
          "rating": "4.5/5（黄页 2 条评价）",
          "rating_source": "gelbeseiten.de",
          "within_budget": true,
          "why": "备选：Moselstraße 12，步行 6 分钟；ibis Styles 设计型 3 星，通常含早，是 Motel One 或 Premier Inn 满房时的可靠替换。",
          "booking_tip": "含早；all.accor.com 房态页当前抓取受限（404 或 JS 墙），请在 Accor 官方 App 或电话 069 25 61 10 确认 4 间单人间。",
          "source_url": "https://www.gelbeseiten.de/gsbiz/17217395-862a-4f6d-b31a-8c353c95efeb"
        }
      ],
      "lunch": [
        {
          "name_zh": "克莱因市场大厅（美食摊位群）",
          "name_en": "Kleinmarkthalle (food stalls)",
          "address": "Hasengasse 5-7, 60311 Frankfurt am Main",
          "area": "Altstadt / Zeil 步行 3 分钟",
          "price_eur": 14,
          "cuisine": "市场熟食：香肠、奶酪、土耳其与亚洲小吃、鲜榨果汁",
          "specialty": "法兰克福香肠摊、Handkäs mit Musik、现做三明治与沙拉",
          "hours": "周一至周五 08:00-18:00，周六 08:00-16:00，周日休息",
          "open_sunday": false,
          "reservation_needed": false,
          "source_url": "https://www.kleinmarkthalle.de/"
        },
        {
          "name_zh": "鱼弗兰克",
          "name_en": "Fisch Franke",
          "address": "Domstraße 9-11, 60311 Frankfurt am Main",
          "area": "Altstadt（Römer 与 Dom 之间）",
          "price_eur": 18,
          "cuisine": "鱼类专门店 / 海鲜快餐与熟食",
          "specialty": "炸鱼排、腌鲱鱼、鱼汤；1929 年老店",
          "hours": "约 09:00 起（黄页显示 09:00 开门）",
          "open_sunday": false,
          "reservation_needed": false,
          "source_url": "https://www.gelbeseiten.de/gsbiz/263aab3a-c8e4-4e56-a9df-cae6c5cd9a38"
        },
        {
          "name_zh": "黑星之家",
          "name_en": "Zum Schwarzen Stern",
          "address": "Römerberg 6, 60311 Frankfurt am Main",
          "area": "Römerberg 广场 / Altstadt",
          "price_eur": 18,
          "cuisine": "法兰克福市民菜（bürgerlich）",
          "specialty": "法兰克福香肠拼盘、炸猪排、绿酱配土豆",
          "hours": "约 11:30-23:00",
          "open_sunday": false,
          "reservation_needed": false,
          "source_url": "https://www.gelbeseiten.de/gsbiz/cd33ce8e-c242-4e4c-8fbb-2d2324643cce"
        },
        {
          "name_zh": "汉斯我的快乐（Braubachstraße 店）",
          "name_en": "HANS IM GLÜCK - Frankfurt Braubachstraße",
          "address": "Braubachstraße 1, 60311 Frankfurt am Main",
          "area": "Altstadt / 近 Römer 与 Zeil",
          "price_eur": 15,
          "cuisine": "德式连锁汉堡（牛肉、素食、有机可选）",
          "specialty": "火烤汉堡配手工柠檬水，出餐快",
          "hours": "约 11:00-23:00（黄页显示周日 12:00 起亦有）",
          "open_sunday": true,
          "reservation_needed": false,
          "source_url": "https://www.gelbeseiten.de/gsbiz/aac972e6-6206-42f9-be80-7dfc50c8fee1"
        },
        {
          "name_zh": "梅迪纳牛排与更多",
          "name_en": "Medina Steaks & More",
          "address": "Berliner Straße 10, 60311 Frankfurt am Main",
          "area": "Altstadt / 近 Konstablerwache 与 Zeil 东端",
          "price_eur": 19,
          "cuisine": "牛排 / 烧烤简餐",
          "specialty": "午市牛排套餐、烤肉拼盘",
          "hours": "黄页显示 15:00 开门，午市需电话确认 069 21 00 66 35",
          "open_sunday": false,
          "reservation_needed": false,
          "source_url": "https://www.gelbeseiten.de/gsbiz/2f6e6ea3-45dc-4b15-af5f-169b508a1a35"
        },
        {
          "name_zh": "撒丁岛餐厅",
          "name_en": "Ristorante Sardegna",
          "address": "Fahrgasse 84, 60311 Frankfurt am Main",
          "area": "Altstadt（近 Mainkai 河岸）",
          "price_eur": 17,
          "cuisine": "意大利（撒丁岛）",
          "specialty": "手工意面、午市套餐、撒丁岛特色前菜",
          "hours": "约 11:30-23:00",
          "open_sunday": false,
          "reservation_needed": false,
          "source_url": "https://www.gelbeseiten.de/gsbiz/9943ac6f-82d4-4abd-818e-70172c52e4b0"
        },
        {
          "name_zh": "法兰克福中央火车站快餐带（Hbf 地下层与 Kaiserstraße）",
          "name_en": "Frankfurt Hbf food court & Kaiserstraße quick bites",
          "address": "Am Hauptbahnhof 1, 60329 Frankfurt am Main（Hbf 地下层餐饮区）",
          "area": "Frankfurt Hbf 步行 0-2 分钟",
          "price_eur": 13,
          "cuisine": "快餐 / 面包房 / 亚洲面档",
          "specialty": "Ditsch 碱水面包、亚洲面档、土耳其烤肉（Kaiserstraße 沿线）",
          "hours": "多数 06:00-22:00，含周日",
          "open_sunday": true,
          "reservation_needed": false,
          "source_url": "https://www.gelbeseiten.de/suche/gastst%C3%A4tten/frankfurt%20am%20main"
        }
      ],
      "dinner": [
        {
          "name_zh": "画屋苹果酒馆",
          "name_en": "Zum Gemalten Haus",
          "address": "Schweizer Straße 67, 60594 Frankfurt am Main (Sachsenhausen)",
          "area": "",
          "price_eur": 35,
          "cuisine": "法兰克福传统苹果酒馆（Apfelweinwirtschaft）",
          "specialty": "招牌 Rippchen mit Kraut 酸菜猪肋排、获奖 Grüne Soße 绿酱配土豆与水煮蛋、Handkäs mit Musik、自酿 Apfelwein",
          "hours": "约 12:00-24:00（周三多休息，务必电话确认 069 61 26 76）",
          "open_sunday": true,
          "reservation_needed": true,
          "source_url": "https://www.zumgemaltenhaus.de/"
        },
        {
          "name_zh": "萨克斯豪森苹果酒馆群（绿酱专题）",
          "name_en": "Sachsenhausen Apfelwein taverns (Grüne Soße specialty)",
          "address": "Große Rittergasse 83-85, 60594 Frankfurt am Main (Sachsenhausen)",
          "area": "",
          "price_eur": 32,
          "cuisine": "法兰克福地方菜，绿酱 Grüne Soße 专题",
          "specialty": "招牌 Grüne Soße（七种香草冷酱）配煮土豆与硬煮蛋、Frankfurter Schnitzel 绿酱炸猪排",
          "hours": "约 12:00-23:00（各店不同）",
          "open_sunday": true,
          "reservation_needed": false,
          "source_url": "https://www.gelbeseiten.de/gsbiz/4d72b881-0ebe-4337-ad2e-194582646492"
        },
        {
          "name_zh": "法兰克福香肠专场（Best Worscht in Town 等）",
          "name_en": "Frankfurter Wurst houses (Best Worscht in Town)",
          "address": "Schweizer Straße 30, 60594 Frankfurt am Main (Sachsenhausen)",
          "area": "",
          "price_eur": 18,
          "cuisine": "法兰克福香肠 / 小食（Rindswurst、Bratwurst）",
          "specialty": "招牌 Frankfurter Rindswurst 牛肉香肠、Bratwurst 配面包与芥末，辣度分级著称",
          "hours": "约 11:00-22:00",
          "open_sunday": false,
          "reservation_needed": false,
          "source_url": "https://www.gelbeseiten.de/gsbiz/baccc8b6-11d6-4dae-b149-debee0de5ba7"
        },
        {
          "name_zh": "瓦格纳苹果酒馆",
          "name_en": "Apfelwein Wagner",
          "address": "Schweizer Straße 71, 60594 Frankfurt am Main (Sachsenhausen)",
          "area": "",
          "price_eur": 33,
          "cuisine": "法兰克福苹果酒馆",
          "specialty": "Handkäs mit Musik、Rippchen、Apfelwein；与画屋同街区",
          "hours": "约 11:00-24:00",
          "open_sunday": true,
          "reservation_needed": true,
          "source_url": "https://www.gelbeseiten.de/suche/restaurants/frankfurt%20am%20main%20sachsenhausen"
        },
        {
          "name_zh": "老城德式正餐（Römerberg 一带）",
          "name_en": "Altstadt German dinner houses (Römerberg area)",
          "address": "Römerberg 6, 60311 Frankfurt am Main",
          "area": "",
          "price_eur": 36,
          "cuisine": "德式 / 法兰克福市民菜正餐",
          "specialty": "法兰克福猪肘、炸猪排配绿酱、法兰克福香肠拼盘、本地葡萄酒",
          "hours": "约 11:30-23:00（周日多休息）",
          "open_sunday": false,
          "reservation_needed": true,
          "source_url": "https://www.gelbeseiten.de/gsbiz/cd33ce8e-c242-4e4c-8fbb-2d2324643cce"
        },
        {
          "name_zh": "采尔大街东端现代餐酒馆群",
          "name_en": "Modern brasserie & wine bar cluster near Zeil / Konstablerwache",
          "address": "Berliner Straße 10 / Braubachstraße 1, 60311 Frankfurt am Main",
          "area": "",
          "price_eur": 34,
          "cuisine": "现代欧式餐酒馆（牛排、地中海、汉堡升级版）",
          "specialty": "牛排套餐、地中海小吃拼盘、本地 Riesling 配餐",
          "hours": "约 17:00-24:00",
          "open_sunday": true,
          "reservation_needed": true,
          "source_url": "https://www.gelbeseiten.de/gsbiz/cb77e897-5e58-4453-a02b-19ccbaa02b25"
        }
      ],
      "tips": [
        "硬性提示（10/26 早班火车去 Wörnitz，约 194 公里）：务必住 Bahnhofsviertel（Elbestraße、Münchener Straße、Mannheimer Straße），首选 Premier Inn Frankfurt City Centre（Elbestraße 7）与 Motel One Frankfurt-Hauptbahnhof（Münchener Straße 50），步行 2-3 分钟进站；至 Wörnitz 方向通常需在 Ansbach 或 Treuchtlingen 一带换乘，请提前在 DB App 确认 06:00-07:30 班次与换乘时间。",
        "10/25 周日法兰克福：商店关门，但 Frankfurt Hbf 车站商场（含超市、药妆、面包房）、Zeil 沿线餐厅照常营业；Kleinmarkthalle 周日休市需避开；Städel、Liebieghaus、MMK 等博物馆与美因河游船周日开放，适合安排非零售类行程。",
        "展会风险：10 月为法兰克福展会旺季（Buchmesse 通常 10 月中下旬，另有各类工业展），Hbf 周边酒店可能出现 2-3 倍溢价或满房。请在 9 月初即启动预订，选择免费取消票价并每两周复查一次价格。",
        "预算结构建议（4 人 2 晚）：法兰克福住宿约 4 × 2 × 105-135 欧 = 840-1080 欧；柏林住宿约 4 × 2 × 89-119 欧 = 712-952 欧；餐饮 4 人 4 天 × 60 欧 = 960 欧，午晚餐各按 12-20 欧与 30-42 欧两档控制即可稳定不超支。",
        "数据可靠性声明：所有酒店与餐厅的名称、地址、电话与部分评分来自 gelbeseiten.de 黄页在册记录或官方站点（zumgemaltenhaus.de、kleinmarkthalle.de、motel-one.com 等已直接抓取成功）；房价与餐价均为 2025-2026 区间估算（参考），因 booking.com、tripadvisor、all.accor.com、hotel-bb.com 等被 403 或 JS 墙拦截，未能取得 2026 年 10 月实时报价。需复核条目：B&B Hotel Frankfurt-Hauptbahnhof 门牌、Apfelwein Wagner 门牌、Medina 午市时段。"
      ],
      "extraNote": "",
      "routeLunch": []
    },
    "ingolstadt": {
      "city": "因戈尔施塔特",
      "cityEn": "Ingolstadt",
      "budget_eur": 120,
      "meal_eur": 60,
      "other_eur": 38,
      "hotels": [
        {
          "name_zh": "因戈尔施塔特城际酒店",
          "name_en": "IntercityHotel Ingolstadt",
          "address": "Bahnhofstr. 6, 85051 Ingolstadt",
          "nearest_station": "Ingolstadt Hbf",
          "walk_minutes": 2,
          "stars": 4,
          "single_price_eur": 105,
          "price_eur_low": 89,
          "price_eur_high": 125,
          "breakfast_included": false,
          "rating": "5.0/5（黄页 4 条）",
          "rating_source": "gelbeseiten.de",
          "within_budget": true,
          "why": "距 Ingolstadt Hbf 仅约 100 米，10/28 早 08:00 赶火车零风险；连锁商务标准，4 间单人间易同层安排；24 小时前台，适合晚到入住。",
          "booking_tip": "务必订 Standard Single 并确认 10/26–10/28 两晚连住；官网/协议价常与前台价差 10–15 欧，抵店前让前台打印含税明细以便报销。早餐另计约 14–18 欧/人。",
          "source_url": "https://www.gelbeseiten.de/gsbiz/206a0e1d-17dc-4fcb-9630-7273cab00098"
        },
        {
          "name_zh": "NH 因戈尔施塔特大使酒店",
          "name_en": "NH Hotel Ambassador Ingolstadt",
          "address": "Goethestr. 153, 85055 Ingolstadt",
          "nearest_station": "Ingolstadt Nord",
          "walk_minutes": 18,
          "stars": 4,
          "single_price_eur": 99,
          "price_eur_low": 85,
          "price_eur_high": 119,
          "breakfast_included": true,
          "rating": "5.0/5（黄页 1 条，样本小）",
          "rating_source": "gelbeseiten.de",
          "within_budget": true,
          "why": "NH 商务品牌，位于北部工业区方向，10/27 去 IMTron（Media-Saturn-Str. 1）车程最短；含早房型常见，早餐在店解决最省。",
          "booking_tip": "选含早房型（with breakfast）；公交到 Hbf 约 12 分钟，10/28 赶车需预留 25 分钟，建议提前一晚约出租车。",
          "source_url": "https://www.gelbeseiten.de/gsbiz/66c20f13-42b6-4dff-a3df-d576bf103b78"
        },
        {
          "name_zh": "玛里蒂姆因戈尔施塔特酒店",
          "name_en": "Maritim Hotel Ingolstadt",
          "address": "Schloßlände 24, 85049 Ingolstadt",
          "nearest_station": "Ingolstadt Hbf",
          "walk_minutes": 12,
          "stars": 4,
          "single_price_eur": 115,
          "price_eur_low": 99,
          "price_eur_high": 145,
          "breakfast_included": true,
          "rating": "四星连锁（黄页无评分）",
          "rating_source": "gelbeseiten.de",
          "within_budget": true,
          "why": "多瑙河畔、紧邻老城与城堡，晚餐步行即达 Weisses Bräuhaus / Herrnbräu 一带；四星会议型酒店，接待标准高，适合商务团组。",
          "booking_tip": "10 月旺季单人间易破 120 欧，须锁定预付价；务必确认房价是否含早，不含早则早餐另计约 22–26 欧/人。",
          "source_url": "https://www.gelbeseiten.de/gsbiz/adda07ed-17ec-44c2-a583-841c4849a7e6"
        },
        {
          "name_zh": "安克酒店",
          "name_en": "Hotel Zum Anker",
          "address": "Tränktorstr. 1, 85049 Ingolstadt",
          "nearest_station": "Ingolstadt Hbf",
          "walk_minutes": 15,
          "stars": 3,
          "single_price_eur": 95,
          "price_eur_low": 85,
          "price_eur_high": 115,
          "breakfast_included": true,
          "rating": "5.0/5（黄页 1 条，样本小）",
          "rating_source": "gelbeseiten.de",
          "within_budget": true,
          "why": "老城多瑙河畔小型家族酒店，房间少、安静，含传统德式早餐；性价比优于连锁，步行可达老城晚餐区。",
          "booking_tip": "房间数量很少，4 间单人间需尽早直接电话/邮件向酒店预订（0841 30050），不要依赖 OTA；老城停车不便。",
          "source_url": "https://www.gelbeseiten.de/gsbiz/2aa65139-f6db-4e61-bf31-693de5f16fbc"
        },
        {
          "name_zh": "恩索酒店",
          "name_en": "enso Hotel",
          "address": "Bei der Arena 1, 85053 Ingolstadt",
          "nearest_station": "Ingolstadt Hbf（建议打车）",
          "walk_minutes": 20,
          "stars": 3,
          "single_price_eur": 89,
          "price_eur_low": 79,
          "price_eur_high": 109,
          "breakfast_included": true,
          "rating": "5.0/5（黄页 2 条，样本小）",
          "rating_source": "gelbeseiten.de",
          "within_budget": true,
          "why": "紧邻 Audi Sportpark 球场与 Saturn 场馆区，即 MediaMarktSaturn / IMTron 一带，10/27 拜访客户最方便；现代设计型酒店。",
          "booking_tip": "奥迪球场主场赛事日房价会明显上涨，须避开或提前锁价；到 Hbf 打车约 8 分钟。",
          "source_url": "https://www.gelbeseiten.de/gsbiz/853cfdcb-7f0f-4279-a1eb-ba21a2b75eeb"
        },
        {
          "name_zh": "B&B 因戈尔施塔特酒店",
          "name_en": "B&B Hotel Ingolstadt",
          "address": "Schollstraße 4, 85055 Ingolstadt",
          "nearest_station": "Ingolstadt Hbf（需公交/出租）",
          "walk_minutes": 45,
          "stars": 2,
          "single_price_eur": 69,
          "price_eur_low": 59,
          "price_eur_high": 85,
          "breakfast_included": false,
          "rating": "5.0/5（黄页 1 条，样本小）",
          "rating_source": "gelbeseiten.de",
          "within_budget": true,
          "why": "价格最省（约为补贴上限的 55%），位于 A9 高速与北部工业区，10/27 拜访 IMTron 极近；作为预算后备方案。",
          "booking_tip": "距 Hbf 约 5 公里，10/28 赶 08:00 火车必须打车（约 15 欧/车）或提前约车；早餐自助加购约 12 欧/人。",
          "source_url": "https://www.gelbeseiten.de/gsbiz/b174dd6e-8e95-41f2-9c27-72177cf95d80"
        }
      ],
      "lunch": [
        {
          "name_zh": "香港小吃",
          "name_en": "Hong Kong Imbiss",
          "address": "Dollstr. 2, 85049 Ingolstadt",
          "area": "老城市中心",
          "price_eur": 13,
          "cuisine": "中式 / 亚洲快餐",
          "specialty": "炒面、炒饭、盖饭，出餐快，中国团组接受度最高",
          "hours": "周一至周六 11:00–20:00（参考）",
          "open_sunday": false,
          "reservation_needed": false,
          "source_url": "https://www.gelbeseiten.de/gsbiz/91e615f2-6e8a-44c2-986b-82ed76c085c3"
        },
        {
          "name_zh": "巴西小屋小吃店",
          "name_en": "Lanchonete da Lu Brasil Imbiss",
          "address": "Schulstr. 2, 85049 Ingolstadt",
          "area": "老城市中心",
          "price_eur": 13,
          "cuisine": "巴西 / 南美快餐",
          "specialty": "巴西烤肉饭、Pastel、鲜榨果汁",
          "hours": "周一至周六 11:00–20:00（参考）",
          "open_sunday": false,
          "reservation_needed": false,
          "source_url": "https://www.gelbeseiten.de/gsbiz/99eaf312-9b2d-4879-87ab-c35c04f3bb81"
        },
        {
          "name_zh": "汉斯我的幸福汉堡",
          "name_en": "HANS IM GLÜCK Ingolstadt Ludwigstraße",
          "address": "Ludwigstraße 10, 85049 Ingolstadt",
          "area": "老城步行街",
          "price_eur": 18,
          "cuisine": "德式汉堡 / 轻食",
          "specialty": "手工牛肉汉堡、素食汉堡、沙拉碗",
          "hours": "每日 11:00–22:00（参考）",
          "open_sunday": true,
          "reservation_needed": false,
          "source_url": "https://www.gelbeseiten.de/gsbiz/25087ca2-7d5e-439e-b857-734db8097f90"
        },
        {
          "name_zh": "小世界披萨店",
          "name_en": "Pizzeria Piccolo Mondo",
          "address": "Milchstr. 23A, 85049 Ingolstadt",
          "area": "老城市中心",
          "price_eur": 15,
          "cuisine": "意大利",
          "specialty": "午餐披萨 / 意面套餐，午市最划算",
          "hours": "周一至周六 11:30–14:00、17:00–22:00（参考）",
          "open_sunday": false,
          "reservation_needed": false,
          "source_url": "https://www.gelbeseiten.de/gsbiz/e46fefb0-59c3-434c-bcba-3104bf0f0bac"
        },
        {
          "name_zh": "埃菲小吃烤肉",
          "name_en": "Efe's Imbiss, Döner & More",
          "address": "Haunwöhrer Str. 75, 85051 Ingolstadt",
          "area": "西北居住区（近 Nord 工业方向）",
          "price_eur": 12,
          "cuisine": "土耳其烤肉快餐",
          "specialty": "Döner、烤肉卷、披萨片，人均最低",
          "hours": "周一至周六 10:00–21:00（参考）",
          "open_sunday": false,
          "reservation_needed": false,
          "source_url": "https://www.gelbeseiten.de/suche/restaurant/ingolstadt%20donau"
        },
        {
          "name_zh": "西吉小吃",
          "name_en": "Sigi's Imbiss",
          "address": "Keltenstr. 14, 85053 Ingolstadt",
          "area": "南部 / 工业区方向",
          "price_eur": 12,
          "cuisine": "德式小吃、香肠快餐",
          "specialty": "咖喱香肠 Currywurst、烤肠面包、薯条",
          "hours": "工作日 10:00–18:00（参考）",
          "open_sunday": false,
          "reservation_needed": false,
          "source_url": "https://www.gelbeseiten.de/suche/restaurant/ingolstadt%20donau"
        }
      ],
      "dinner": [
        {
          "name_zh": "达尼尔巴伐利亚餐馆",
          "name_en": "Daniel",
          "address": "Roseneckstr. 1, 85049 Ingolstadt",
          "area": "",
          "price_eur": 35,
          "cuisine": "巴伐利亚地方菜",
          "specialty": "Schweinshaxe 烤猪肘、Knödel 面团丸子、时令野味",
          "hours": "周一至周六 09:00–23:00（参考）",
          "open_sunday": false,
          "reservation_needed": true,
          "source_url": "https://www.gelbeseiten.de/gsbiz/820ed2ad-64ec-4b00-9e4d-8210b26fb1a7"
        },
        {
          "name_zh": "白香肠啤酒馆",
          "name_en": "Weisses Bräuhaus Ingolstadt",
          "address": "Dollstraße 3, 85049 Ingolstadt（门牌为参考，建议电话 0841 32890 核实）",
          "area": "",
          "price_eur": 33,
          "cuisine": "巴伐利亚啤酒馆",
          "specialty": "Herrnbräu 啤酒、烤猪肘。注意：白香肠传统只供应到中午，晚餐以猪肘 / 烤鸭为主",
          "hours": "每日 10:00–24:00（参考，须电话确认）",
          "open_sunday": true,
          "reservation_needed": true,
          "source_url": "https://www.gelbeseiten.de/suche/restaurant/ingolstadt%20donau"
        },
        {
          "name_zh": "黑尔恩布罗伊啤酒馆",
          "name_en": "Herrnbräu Gaststätte",
          "address": "85049 Ingolstadt（本地啤酒厂 Herrnbräu 旗下餐厅，门牌须电话确认 0841 32890）",
          "area": "",
          "price_eur": 34,
          "cuisine": "巴伐利亚 / 市民菜",
          "specialty": "Herrnbräu 自酿啤酒、猪肘、Schweinebraten 烤猪肉、白香肠",
          "hours": "周一至周六 09:00–23:00（参考）",
          "open_sunday": false,
          "reservation_needed": true,
          "source_url": "https://www.gelbeseiten.de/suche/herrnbraeu/ingolstadt"
        },
        {
          "name_zh": "申策牛排馆",
          "name_en": "Steakhouse Schanzer",
          "address": "Kupferstr. 22, 85049 Ingolstadt",
          "area": "",
          "price_eur": 38,
          "cuisine": "牛排 / 西式",
          "specialty": "牛排、汉堡、烤肉，适合不习惯猪肘的团员",
          "hours": "周一至周六 11:00–23:00（参考）",
          "open_sunday": false,
          "reservation_needed": true,
          "source_url": "https://www.gelbeseiten.de/gsbiz/321f8b16-1ab3-4621-81cd-7c18bec05dd2"
        },
        {
          "name_zh": "帕帕乔",
          "name_en": "Papa Joe's",
          "address": "Harderstr. 12, 85049 Ingolstadt",
          "area": "",
          "price_eur": 32,
          "cuisine": "美式 / 国际酒吧餐厅",
          "specialty": "肋排、汉堡、鸡尾酒，营业到较晚，适合当天晚归",
          "hours": "周一至周六 12:00–次日 01:00（参考）",
          "open_sunday": false,
          "reservation_needed": false,
          "source_url": "https://www.gelbeseiten.de/suche/restaurant/ingolstadt%20donau"
        },
        {
          "name_zh": "序曲餐厅",
          "name_en": "Restaurant Ouvertüre",
          "address": "Haunwöhrer Str. 97, 85051 Ingolstadt",
          "area": "",
          "price_eur": 36,
          "cuisine": "德式 / 欧陆点菜",
          "specialty": "时令菜单、鱼类与肉类主菜，环境安静适合商务晚餐",
          "hours": "周一至周六 11:00–14:00、17:30–22:00（参考）",
          "open_sunday": false,
          "reservation_needed": true,
          "source_url": "https://www.gelbeseiten.de/suche/restaurant/ingolstadt%20donau"
        }
      ],
      "tips": [
        "【重要】客户 IMTron 就在因戈尔施塔特本地：Imtron GmbH, Media-Saturn-Str. 1, 85053 Ingolstadt，是 MediaMarktSaturn 零售集团全资子公司（自有品牌 KOENIC / PEAQ / ok. / ISY）。行程表上的「156 公里 / 2 小时车程」应理解为从 10/26 所在地沃尔尼茨出发的里程；10/27 当天从因戈尔施塔特市区酒店到客户处仅 10–20 分钟车程。",
        "城市结构：老城 + 主火车站（Hbf）在南，Audi 总部与 Audi Forum 在东北，IMTron / MediaMarktSaturn 在北部（Saturn Arena / Media-Saturn-Str. 1, 85053）与 Gaimersheim 工业区。选酒店按用途：去 IMTron 优先 Nord 区（NH Ambassador / enso / B&B），赶火车优先 Hbf 旁（IntercityHotel / Maritim）。",
        "10/28 赶 08:00 火车回杜塞尔多夫（约 537 公里 / 6 小时，须在 Ingolstadt Hbf 上车）：推荐住 IntercityHotel（步行 2 分钟）或 Maritim（步行 12 分钟）；若住 Nord 区酒店，请提前一晚让前台预约出租车，早高峰 07:00–07:40 打不到车风险高。",
        "Ingolstadt Hbf 到杜塞尔多夫通常需在 Nürnberg 或 Frankfurt 换乘 ICE，直达班次少；建议提前在 bahn.de 购买 Sparpreis 并预订座位，4 人同行务必订连座。",
        "市内公交由 INVG / VGI 运营，单程约 2.8–3.5 欧，日票约 6–7 欧；工业区（Media-Saturn-Str.、Gaimersheim）公交班次稀疏，拜访客户建议直接打车。出租车市区内约 10–15 欧，无 Uber / Bolt 竞争。",
        "10 月底巴伐利亚天气：日间约 8–13 ℃，夜间 2–6 ℃，多阴雨与晨雾，10 月底可能已有初霜；务必带防风防水外套与保暖内层。",
        "因戈尔施塔特老城多数店铺周日关门，但餐厅 / 啤酒馆通常营业；Wörnitz 等小镇周日几乎全城关门。",
        "德国餐厅工作日午市套餐（Mittagsmenü / Mittagstisch）11:30–14:00 最划算，通常 12–18 欧；晚餐 18:00 后点菜，人均 30–42 欧（含 1–2 杯啤酒）在补贴内。",
        "订房硬提示：酒店价格为德国黄页目录可查地址与该档次公开常见价位的【参考】区间；下单前请用酒店官网或公司协议渠道复核单人间含税价，以【单人间】价格判断是否 ≤120 欧。",
        "请为出租车司机准备酒店德文地址打印件（Bahnhofstr. 6 与 Schloßlände 24 易混淆）；4 间单人间要求同楼层，便于次日集体出发。",
        "另有因戈尔施塔特人气猪肘名店 Brauhaus Zeughaus 与 Weisses Rössl，本次未能核实门牌地址故未列入名单，可抵店后请酒店前台代为确认订位。"
      ],
      "extraNote": "",
      "routeLunch": [],
      "woernitz": {
        "note": "经德国黄页实查：Wörnitz（91637）本地住宿收录几乎为零，0 公里半径内无酒店条目；搜索半径扩大后相关住宿仅 2 条（Schnelldorf 的 Hotel Anna、Insingen 的 Schwarzer Adler），均为乡村旅馆 / 民宿级别，房间少。结论：Wörnitz 本地住宿极少，强烈建议住 Dinkelsbühl（约 13 公里，中世纪古镇，酒店选择最多）或 Rothenburg ob der Tauber（约 30 公里，旅游名城），两地均有 120 欧/晚预算内的单人间可选。",
        "hotels": [
          {
            "name_zh": "海策尔霍夫酒店",
            "name_en": "Hezelhof Hotel",
            "address": "Segringer Str. 7, 91550 Dinkelsbühl",
            "nearest_station": "Dinkelsbühl 镇内",
            "walk_minutes": 5,
            "stars": 4,
            "single_price_eur": 105,
            "price_eur_low": 89,
            "price_eur_high": 135,
            "breakfast_included": true,
            "rating": "5.0/5（黄页 1 条，样本小）",
            "rating_source": "gelbeseiten.de",
            "within_budget": true,
            "why": "Dinkelsbühl 古镇内品质最好的选择之一，步行可达 Weinmarkt 与老城，含早；距 Wörnitz 约 13 公里（车程 15 分钟）。",
            "booking_tip": "10 月为古镇旅游旺季，建议提前预订；确认单人间含税价。",
            "source_url": "https://www.gelbeseiten.de/gsbiz/91e99f4b-179b-4950-8d1c-d0344ee295fe"
          },
          {
            "name_zh": "迈泽酒店与餐厅",
            "name_en": "Meiser's Hotel & Restaurant",
            "address": "Weinmarkt 10, 91550 Dinkelsbühl",
            "nearest_station": "Dinkelsbühl 镇内",
            "walk_minutes": 3,
            "stars": 3,
            "single_price_eur": 95,
            "price_eur_low": 85,
            "price_eur_high": 125,
            "breakfast_included": true,
            "rating": "4.0/5（黄页 1 条，样本小）",
            "rating_source": "gelbeseiten.de",
            "within_budget": true,
            "why": "位于古镇核心 Weinmarkt 广场，自带餐厅，晚餐可在店解决；含早。",
            "booking_tip": "自带餐厅口碑好，建议同时预订晚餐；确认单人间含税价。",
            "source_url": "https://www.gelbeseiten.de/gsbiz/5c8886f4-3e8c-4f4a-a21e-f22760eef2f3"
          },
          {
            "name_zh": "艾森克鲁格酒店",
            "name_en": "Eisenkrug Hotel",
            "address": "Dr.-Martin-Luther-Str. 1, 91550 Dinkelsbühl",
            "nearest_station": "Dinkelsbühl 镇内",
            "walk_minutes": 6,
            "stars": 3,
            "single_price_eur": 89,
            "price_eur_low": 79,
            "price_eur_high": 119,
            "breakfast_included": true,
            "rating": "5.0/5（黄页 3 条，样本小）",
            "rating_source": "gelbeseiten.de",
            "within_budget": true,
            "why": "价格更省的三星选择，含早，位于古镇边缘，停车相对方便（自驾更合适）。",
            "booking_tip": "如自驾往返 Wörnitz 仓库，此家停车条件优于镇中心酒店。",
            "source_url": "https://www.gelbeseiten.de/gsbiz/cde9f14d-8d85-453f-993b-de2ba154c3ee"
          },
          {
            "name_zh": "安娜酒店餐厅",
            "name_en": "Hotel Anna Restaurant",
            "address": "Am Birkenberg 1, 91625 Schnelldorf（距 Wörnitz 约 7.6 公里）",
            "nearest_station": "Schnelldorf",
            "walk_minutes": 10,
            "stars": 3,
            "single_price_eur": 75,
            "price_eur_low": 65,
            "price_eur_high": 95,
            "breakfast_included": true,
            "rating": "1.0/5（黄页仅 1 条评价，样本极小，参考价值有限）",
            "rating_source": "gelbeseiten.de",
            "within_budget": true,
            "why": "距 Wörnitz 最近的住宿选项之一，含早、价格最低；适合只想就近过夜的方案。",
            "booking_tip": "评分样本极小不可作为决策依据，务必电话确认房间条件与 4 间单人间是否可同时提供。",
            "source_url": "https://www.gelbeseiten.de/gsbiz/a223260d-ed91-4b2c-b7ae-a551cb4db584"
          },
          {
            "name_zh": "黑鹰旅馆",
            "name_en": "Krieg Karl Schwarzer Adler Pension",
            "address": "Hauptstr. 22, 91610 Insingen（距 Wörnitz 约 7.8 公里）",
            "nearest_station": "Insingen 村内",
            "walk_minutes": 3,
            "stars": 2,
            "single_price_eur": 65,
            "price_eur_low": 55,
            "price_eur_high": 85,
            "breakfast_included": true,
            "rating": "乡村旅馆 / 民宿（黄页无评分，房间极少）",
            "rating_source": "gelbeseiten.de",
            "within_budget": true,
            "why": "乡村民宿，价格最低，距 Wörnitz 约 7.8 公里；适合临时就近过夜。",
            "booking_tip": "房间极少，4 间单人间基本无法保证，务必提前电话确认。",
            "source_url": "https://www.gelbeseiten.de/gsbiz/c9ca982c-715f-4988-89fb-8c2dba133a14"
          }
        ],
        "lunch": [
          {
            "name_zh": "阿德勒客栈",
            "name_en": "Adler Gasthof",
            "address": "Am Markt 8, 91583 Schillingsfürst（距 Wörnitz 约 3.7 公里）",
            "area": "Schillingsfürst 镇中心",
            "price_eur": 15,
            "cuisine": "德式乡村菜",
            "specialty": "烤猪肉、时令菜；11:30 开门，适合 10/26 先午餐再进仓库",
            "hours": "参考 11:30 起",
            "open_sunday": false,
            "reservation_needed": false,
            "source_url": "https://www.gelbeseiten.de/gsbiz/f8ffaa44-98f4-4de5-bd5f-3f62c14773c4"
          },
          {
            "name_zh": "霍夫曼客栈",
            "name_en": "Hofmann Ernst Gasthof",
            "address": "Herrenstr. 1, 91625 Schnelldorf (Wildenholz)（距 Wörnitz 约 4.8 公里）",
            "area": "Schnelldorf-Wildenholz",
            "price_eur": 14,
            "cuisine": "乡镇 Gasthof 家常菜",
            "specialty": "午市套餐 Mittagstisch、当地啤酒",
            "hours": "参考午市时段",
            "open_sunday": false,
            "reservation_needed": false,
            "source_url": "https://www.gelbeseiten.de/gsbiz/21b97c1b-40aa-4e82-9efd-b1d6ac4030b7"
          },
          {
            "name_zh": "菩提树客栈",
            "name_en": "Gasthaus zur Linde",
            "address": "Bortenberg 4, 91601 Dombühl (Bortenberg)（距 Wörnitz 约 5.4 公里）",
            "area": "Dombühl-Bortenberg",
            "price_eur": 14,
            "cuisine": "弗兰肯乡村菜",
            "specialty": "烤猪肩、Schnitzel；家庭经营，建议前一天电话确认（09868 412）",
            "hours": "参考午市时段",
            "open_sunday": false,
            "reservation_needed": false,
            "source_url": "https://www.gelbeseiten.de/gsbiz/5138622b-31c9-43fd-b1d9-ede69e90a8d9"
          },
          {
            "name_zh": "贝尼趣味披萨店",
            "name_en": "Bernie's Fun-Pizzeria Zur Schlossschänke",
            "address": "Am Wall 6, 91583 Schillingsfürst（距 Wörnitz 约 4 公里）",
            "area": "Schillingsfürst",
            "price_eur": 16,
            "cuisine": "意大利",
            "specialty": "披萨、意面；17:00 才开门，只适合晚餐，不适合午餐",
            "hours": "17:00 起（参考）",
            "open_sunday": false,
            "reservation_needed": false,
            "source_url": "https://www.gelbeseiten.de/gsbiz/9ef50808-df60-4fde-aa86-6df87689306d"
          }
        ],
        "tips": [
          "Wörnitz（91637）是巴伐利亚中弗兰肯极小乡镇，无 Uber、无 Bolt；黄页可查的唯一连锁快餐是 Burger King（Bastenauer Str. 10-12, 91637 Wörnitz，距中心约 715 米），约 10:00 起营业——是 10/26 最保险的午餐保底选项。",
          "Wörnitz 本地没有收录酒店；如坚持就近住，只能选 Schnelldorf 的 Hotel Anna（7.6 公里）或 Insingen 的 Schwarzer Adler（7.8 公里），均为乡村旅馆、房间少、评分样本极小，4 间单人间不一定能同时提供，请务必提前电话确认。",
          "强烈建议住 Dinkelsbühl：距 Wörnitz 约 13 公里（车程 15 分钟），中世纪古镇，酒店数量与品质明显更好，单人间多在 85–135 欧区间；晚餐选择也远多于 Wörnitz。若想顺路看 Rothenburg ob der Tauber（罗滕堡），其距 Wörnitz 约 30 公里，10 月为旅游旺季须提前订房。",
          "周日与节假日：Wörnitz 及周边小镇（Insingen、Dombühl 等）周日几乎全城关门，包括面包店、超市与多数 Gasthof；如遇周日作业请自备饮水与干粮，午餐提前在 Ansbach 或 Dinkelsbühl 采购。",
          "10/26 从法兰克福乘火车到 Wörnitz：该站为支线小站，法兰克福过去通常需在 Nürnberg 或 Ansbach 换乘，全程约 3.5–4 小时，且常需再打车 / 租车到仓库；强烈建议提前在 bahn.de 查当日实际班次，并由仓库方安排车站接送最稳妥。",
          "乡村 Gasthof 在 12:00–13:00 易满座，4 人建议 11:30 前到店或提前电话点好 Mittagstisch。",
          "10 月底该区域天气比因戈尔施塔特更冷：日间 7–12 ℃，清晨常 0–4 ℃ 并有雾，乡道路面湿滑，租车请确认冬季胎 / 四季胎与雾灯。",
          "付账与报销：乡村 Gasthof 普遍只收现金（Girocard 未必可用），请备足欧元现金；餐饮发票请索取含 MwSt. 明细的 Rechnung 以便入账。"
        ]
      }
    }
  },
  "immigration": {
    "alerts": [
      {
        "level": "warn",
        "title": "申根区出入境系统（EES）已分阶段启用",
        "text": "欧盟入境/出境系统（Entry/Exit System, EES）自 2025 年 10 月起分阶段上线，逐步以生物识别（指纹+人脸）登记取代护照盖章，过渡期预计持续至 2026 年 4 月左右。首次入境者需在口岸自助终端采集指纹与面部照片，排队时间可能明显延长。具体执行进度与是否需提前在线登记，请出行前通过欧盟官方渠道或德国驻华使领馆确认。"
      },
      {
        "level": "warn",
        "title": "ETIAS 尚未对中国公民生效，届时需核实",
        "text": "欧盟旅行授权系统（ETIAS）针对免签入境申根区的第三国公民，中国公民赴德需申根签证，ETIAS 与签证的关系及是否需另行申请，请以欧盟官方与德国使领馆最新公告为准；截至目前对中国护照持有人无强制 ETIAS 要求，出行前务必再次核实，避免因规则变化影响登机。"
      },
      {
        "level": "good",
        "title": "商务出行必备材料清单",
        "text": "随身携带：有效护照（回程后仍有 6 个月以上有效期）、申根签证、往返机票行程单、全程 21 晚酒店预订单、德方邀请函（含公司盖章与联系人）、旅行医疗保险保单（保额不低于 3 万欧元）、公司派遣函。建议同时准备纸质件与电子件，边检可能要求出示行程与住宿证明。"
      },
      {
        "level": "danger",
        "title": "现金与物品申报红线",
        "text": "入境/出境欧盟携带现金或等值可转让票据（含旅行支票、不记名债券）达到或超过 10,000 欧元必须主动申报；中国海关规定携带外币现钞等值 5,000 美元以上、人民币 2 万元以上需申报。违规可能面临扣留、罚款乃至刑事追责，团队分散携带现金也无法规避。"
      },
      {
        "level": "warn",
        "title": "药品与食品携带限制",
        "text": "处方药须携带医生处方（建议英文或德文）并保持原包装，个人自用合理数量；含麻醉、精神药品成分的药品须提前确认德国药品法要求，必要时办理许可。肉类、蛋奶制品、新鲜果蔬禁止入境欧盟。假冒商品（仿牌箱包、服饰、手表）严禁携带入境，可能被没收并处罚款。"
      },
      {
        "level": "info",
        "title": "回程值机与退税衔接",
        "text": "CA432 由法兰克福 FRA 起飞，建议至少提前 3 小时抵达机场。购物退税须在办理托运前先到海关（Zoll）窗口查验商品与单据并盖章，再前往退税柜台（Global Blue / Planet）办理；商品须在购买后 3 个月内出境，单据与实物一致。"
      }
    ],
    "euCustoms": [
      {
        "item": "现金与可转让票据",
        "rule": "入境或出境欧盟时，携带现金及等值可转让票据（旅行支票、不记名债券等）达到或超过 10,000 欧元（或等值外币）必须向海关申报，填写申报单并走红色通道。未申报可被处以罚款，资金来源不明的可能被扣押调查。",
        "level": "warn"
      },
      {
        "item": "香烟与烟草制品",
        "rule": "自非欧盟国家入境，个人免税携带香烟 200 支（或雪茄 50 支、或小雪茄 100 支、或烟草 250 克，可组合但按比例折算）。仅限个人自用，超量需申报并缴税；携带大量同一品牌香烟易被认定为商业用途。",
        "level": "warn"
      },
      {
        "item": "酒类",
        "rule": "免税限量：酒精含量超过 22% 的烈酒 1 升，或酒精含量不超过 22% 的酒类 2 升，外加无气泡葡萄酒 4 升、啤酒 16 升。超量须申报缴税。每人限个人自用，团队集中携带会被合并计算。",
        "level": "info"
      },
      {
        "item": "药品",
        "rule": "个人自用合理数量的非处方药可携带；处方药须持医生处方（建议附德文或英文说明），保持原包装。含麻醉品、精神类药物成分的药品受德国《麻醉品法》严格管制，须事先向德国联邦药品与医疗器械研究所（BfArM）或使领馆确认，未经许可携带可能构成刑事犯罪。",
        "level": "danger"
      },
      {
        "item": "假冒商品",
        "rule": "欧盟严禁携带假冒品牌商品入境，海关可依《欧盟海关执法条例》没收并销毁，情节严重者面临罚款甚至刑事处罚。仿牌箱包、手表、服饰、电子配件均在查处范围，商务礼品中避免使用仿牌。",
        "level": "danger"
      },
      {
        "item": "食品与动植物产品",
        "rule": "禁止携带肉类、肉制品、蛋奶制品、新鲜果蔬入境欧盟（个人行李同样适用）；鱼类制品、蜂蜜等有严格限量。违反者物品将被销毁并可能被罚款，建议不携带任何中国食品入境。",
        "level": "danger"
      },
      {
        "item": "电子产品与专业设备",
        "rule": "个人自用的笔记本电脑、相机、手机免税；携带大量同类设备、样品或专业器材可能被认定为商业货物，须办理 ATA 单证册或临时进口手续，建议随行携带公司说明函。",
        "level": "info"
      },
      {
        "item": "免税额度与增值税退税",
        "rule": "自非欧盟国家入境，随身物品总值不超过 430 欧元可免税（航空/海运旅客）。非欧盟居民在欧盟购物，单店单日消费满 50.01 欧元可申请增值税（VAT，德国标准税率 19%）退税，需在出境时经海关查验盖章。",
        "level": "good"
      }
    ],
    "euNote": "以上为欧盟统一关税与入境规则的通行规定，各成员国执行细节可能略有差异。德国海关（Zoll）对超量、商业用途物品查缉较严，执行以现场关员判断为准。建议出行前查阅德国海关官网 zoll.de 与欧盟官方 Travel 页面最新公告，并在口岸如实申报、保留购物发票。商务团组如携带样品、展品或专业设备，请提前准备公司说明函与 ATA 单证册。",
    "chinaCustoms": [
      {
        "item": "外币现钞",
        "rule": "入境携带外币现钞等值 5,000 美元以上（含）须向海关书面申报；出境携带外币现钞等值 5,000 美元以上须凭银行或外汇管理部门签发的《携带外汇出境许可证》验放。未申报可能被罚款或没收。",
        "level": "warn"
      },
      {
        "item": "人民币现钞",
        "rule": "入境携带人民币现钞超过 20,000 元须向海关申报；原则上出入境携带人民币现钞不得超过 20,000 元。超额部分须申报并按海关规定处理。",
        "level": "warn"
      },
      {
        "item": "入境物品免税额度",
        "rule": "居民旅客从境外携带入境的个人自用物品，价值在 5,000 元人民币以内（含）予以免税；超出部分仅对超出金额征税。自 2024 年起，进境居民旅客在口岸进境免税店购买的商品可与 5,000 元额度合并计算，连同免税店购物总额不超过 8,000 元人民币。",
        "level": "info"
      },
      {
        "item": "肉类、蛋奶与新鲜果蔬",
        "rule": "（生或熟）肉类（含脏器类）及其制品、蛋类及蛋制品、乳制品（含鲜奶、酸奶、奶酪）、新鲜水果与蔬菜、燕窝（罐装燕窝除外）、活动物等禁止携带、邮寄进境。违反者物品将被截留销毁，并可能被处以罚款，情节严重者追究法律责任。",
        "level": "danger"
      },
      {
        "item": "超额物品征税",
        "rule": "进境物品超出免税额度部分，按《进境物品进口税税率表》征税，税率依品类分为 13%、20%、50% 不等（如化妆品、酒类、高档手表税率较高）。烟草制品、酒精饮料另有限量：香烟 400 支、雪茄 100 支、烟丝 500 克；酒精含量 12% 以上酒类 1,500 毫升。",
        "level": "warn"
      },
      {
        "item": "电子产品与奢侈品",
        "rule": "自用的手机、电脑、相机等按自用合理数量认定；携带多台同类新品、名表名包等高价物品，海关可能认定为应税物品甚至商业货物，须主动申报并提供购买凭证，否则可能被补税、罚款，情节严重者按走私处理。",
        "level": "warn"
      },
      {
        "item": "禁止入境物品",
        "rule": "各种武器、仿真武器、弹药及爆炸物品；伪造货币及有价证券；对中国政治、经济、文化、道德有害的印刷品、影音资料、存储介质；毒品、剧毒物品；濒危动植物及其制品等禁止入境。",
        "level": "danger"
      }
    ],
    "chinaNote": "以上为中国海关对进境旅客的通行规定，实际执行以《中华人民共和国海关法》及现场关员裁量为准，政策可能随年度调整。建议出行前通过海关总署官网（customs.gov.cn）或 12360 海关服务热线核实最新额度与禁止清单；保留境外购物发票与退税单据，如实填写《申报单》，避免因未申报而被处罚。商务团组携带样品、设备回国时，建议提前咨询报关代理。",
    "ees": {
      "status": "待核实",
      "note": "欧盟入境/出境系统（EES）自 2025 年 10 月 12 日起分阶段启用，计划在约 180 天过渡期内逐步在所有申根外部边境口岸上线，全面强制实施时间点及对中国公民的具体操作要求（是否需现场自助登记、指纹采集频次、过渡期是否仍盖章）请以欧盟官方（travel-europe.europa.eu）与德国驻华使领馆在出行前的最新公告为准。本文件不作生效日期断言，务必出行前通过官方渠道核实。"
    },
    "etias": {
      "status": "待核实",
      "note": "ETIAS（欧洲旅行信息与授权系统）面向免签入境申根区的第三国公民，中国公民赴德通常需要申根签证，因此 ETIAS 是否适用于持申根签证者、是否需额外申请以及生效时间，均须以欧盟官方与德国驻华使领馆的最新说明为准。本文件不编造生效日期；出行前必须核实，避免因规则变化导致登机或入境受阻。"
    },
    "security": [
      {
        "title": "手提液体 100ml 规则",
        "text": "国际航班随身行李中的液体、凝胶、气雾剂（LAG）单件容器不得超过 100ml，须装入容量不超过 1 升的可重复封口透明塑料袋内，每人限 1 袋；超出部分须托运。药品与婴儿食品可携带必要用量，但需向安检说明并可能需要提供证明。部分机场已配备新一代 CT 安检设备，可能放宽限制，但以现场指示为准，建议仍按 100ml 规则准备。"
      },
      {
        "title": "充电宝（含中国民航局 3C 新规）",
        "text": "充电宝必须随身携带，严禁放入托运行李。额定能量不超过 100Wh 可直接携带；100–160Wh 须经航空公司批准且每人限 2 个；超过 160Wh 禁止携带。充电宝须有清晰的产品标识（容量、额定能量、生产厂商），标识不清或无标识的禁止携带，飞行途中不得使用充电宝为设备充电。特别提示：中国民航局自 2025 年 6 月 28 日起禁止旅客携带无 3C 标识、3C 标识不清晰或已被召回的充电宝乘坐中国境内航班，乘坐 CA431/CA432 等国内段航班时务必确认充电宝有清晰 3C 标志。"
      },
      {
        "title": "锂电池与备用电池",
        "text": "笔记本电脑、手机、相机等设备中的锂电池可随身或托运（建议随身），备用锂电池（含相机电池、无人机电池）必须随身携带并做好绝缘保护（原包装、电极贴胶带或独立塑料袋），防止短路。额定能量超过 100Wh 的锂电池设备须经航空公司批准；受损、鼓包、发热的电池严禁携带。"
      },
      {
        "title": "刀具、瑞士军刀与指甲刀",
        "text": "各类刀具、剪刀（刀刃长度超标）、瑞士军刀、美工刀严禁随身携带，须放入托运行李；指甲刀、修眉刀等小型刀具通常可随身，但各国安检尺度存在差异，建议统一放入托运。商务礼品中若含刀具（如纪念军刀）务必托运，且不得带入机舱。"
      },
      {
        "title": "打火机与电子烟",
        "text": "中国及多数国家禁止旅客随身携带打火机、火柴通过安检（部分国家允许随身携带 1 个打火机但禁止托运）；电子烟、电子雾化器允许随身携带但严禁托运，且机上全程禁止使用与充电。德国等国对电子烟销售与使用有专门规定，室内公共场所与公共交通工具普遍禁烟（含电子烟），违者可能被罚款。"
      },
      {
        "title": "无人机",
        "text": "无人机须随身携带（锂电池规则），严禁托运。在德国飞行须遵守欧盟无人机法规：重量 250g 以上需注册并取得操作者编号（e-ID），在机身标注编号，多数机型需持远程操控员证书（A1/A3 或 A2）；机场周边、市中心、人群上空、工业厂区、军事设施等为禁飞区，最高飞行高度限 120 米，且须保持视距内飞行。企业内部厂区拍摄必须事先取得书面许可。"
      }
    ],
    "flights": [
      {
        "flight": "CA431",
        "route": "成都天府 TFU → 法兰克福 FRA",
        "duration": "约 11 小时 00 分",
        "aircraft": "以实际执飞机型为准",
        "baggage": "国际航线通常为经济舱 1 件托运行李（23kg，长宽高之和不超过 158cm）+ 1 件随身行李（不超过 5kg，尺寸约 20×40×55cm）；公务舱 2 件托运（每件 23kg 或 32kg，依舱位与航司政策而定）+ 2 件随身行李。实际以出票舱位对应的国航行李规定为准，充电宝与备用锂电池必须随身。"
      },
      {
        "flight": "CA432",
        "route": "法兰克福 FRA → 成都天府 TFU",
        "duration": "约 10 小时 25 分",
        "aircraft": "以实际执飞机型为准",
        "baggage": "国际航线通常为经济舱 1 件托运行李（23kg，长宽高之和不超过 158cm）+ 1 件随身行李（不超过 5kg，尺寸约 20×40×55cm）；公务舱 2 件托运（每件 23kg 或 32kg，依舱位与航司政策而定）+ 2 件随身行李。超标行李按航司标准收取逾重费，建议出发前在国航官网或客服确认所持机票的免费行李额。"
      }
    ],
    "emergency": [
      {
        "name": "欧盟通用紧急电话",
        "number": "112",
        "note": "全欧盟通用，免费拨打，可叫警察、消防、救护车。支持英语，接线员会询问地点与情况；在德国也可用于所有紧急类型的统一求助。"
      },
      {
        "name": "德国非急诊医疗咨询与值班医生",
        "number": "116117",
        "note": "德国法定医保体系下的医疗值班服务（Ärztlicher Bereitschaftsdienst），适用于非危及生命的疾病与夜间/周末需要看医生的情况；可协助找到值班诊所或安排上门。危及生命时请拨 112。"
      },
      {
        "name": "德国警察",
        "number": "110",
        "note": "发生盗窃、抢劫、诈骗、交通事故或人身威胁时拨打，免费。报警后务必索取案件编号与书面记录（Anzeige/Bestätigung），用于保险理赔与护照补办。"
      },
      {
        "name": "德国火警与急救",
        "number": "112",
        "note": "火灾、爆炸、重伤、昏迷等危及生命情况拨打。通话要点：发生地点（街道+门牌号/最近地标）、伤者人数与状况、自己的姓名与联系电话，并在对方挂断后再挂机。"
      },
      {
        "name": "中国外交部全球领事保护与服务应急热线",
        "number": "+86-10-12308",
        "note": "24 小时值守，中国公民在国外遇到紧急情况（人身安全受威胁、护照遗失、被拘留、重大事故等）可拨打；亦可拨打备用号码 +86-10-59913991。从德国拨打需加中国区号 +86。"
      },
      {
        "name": "中国驻德国大使馆领事保护与协助电话",
        "number": "+49-30-27588572",
        "note": "中国驻德国大使馆（柏林）领事保护与协助值班电话，处理领区内中国公民的领事保护事务；领事保护与协助咨询邮箱为中国驻德使领馆统一渠道，具体号码与领区划分（柏林、汉堡、法兰克福、慕尼黑总领馆）请以使领馆官网最新公布为准。"
      },
      {
        "name": "中国驻法兰克福总领馆",
        "number": "+49-69-75085545",
        "note": "领区覆盖黑森州、莱茵兰-普法尔茨州、巴登-符腾堡州、萨尔州等。法兰克福为本次行程枢纽城市，如在该领区发生证件遗失、被窃等事件可联系该馆；具体值班号码以领事馆官网最新公告为准。"
      },
      {
        "name": "旅行保险紧急救援热线",
        "number": "以保单载明为准",
        "note": "出行前将所购旅行医疗保险（保额建议不低于 3 万欧元，申根签证要求）的 24 小时全球紧急救援电话存入每人手机，并在事故发生第一时间联系救援中心，按其指引就医；未事先联系的自行就医可能影响理赔比例。"
      }
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
        "duration": "约 11 小时 00 分（按公布时刻与时差计算）"
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
        "duration": "约 10 小时 25 分（按公布时刻与时差计算）"
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
        "costCny": 150,
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
        "costCny": 9000,
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
        "costCny": 0,
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
        "costCny": 0,
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
        "costCny": 0,
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
        "costCny": 0,
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
        "costCny": 0,
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
        "costCny": 0,
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
        "costCny": 0,
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
        "costCny": 0,
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
        "costCny": 0,
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
        "costCny": 0,
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
        "costCny": 2000,
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
        "costCny": 0,
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
        "costCny": 2000,
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
        "costCny": 0,
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
        "costCny": 1000,
        "detail": "乘火车前往沃尔尼茨 Wörnitz，查看 GBL 仓库。该地为巴伐利亚中弗兰肯小镇，火车站为支线小站，法兰克福方向通常需在纽伦堡或安斯巴赫换乘，全程约 3.5–4 小时；末段到仓库建议由仓库方安排接送。",
        "tags": [
          "仓库盘点",
          "火车",
          "194 公里"
        ],
        "insight": "Wörnitz 本地住宿极少，且无 Uber/Bolt；若当日晚需就近过夜，建议住 Dinkelsbühl（约 13 公里）或罗滕堡（约 30 公里）。",
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
        "costCny": 1000,
        "detail": "16:00 起程前往因戈尔施塔特；拜访 OEM 客户 IMTron（Imtron GmbH，Media-Saturn-Str. 1, 85053 Ingolstadt）。注意：IMTron 就在因戈尔施塔特本地（MediaMarktSaturn 集团全资子公司，自有品牌 KOENIC/PEAQ/ok./ISY），自酒店前往仅 10–20 分钟车程；行程表所注「156 公里 / 2 小时」系从沃尔尼茨出发的里程。",
        "tags": [
          "客户拜访",
          "IMTron",
          "156 公里"
        ],
        "insight": "客户位于因戈尔施塔特北部 MediaMarktSaturn / Saturn Arena 一带，与 10/22–10/24 走访的零售渠道属同一集团体系，可合并核对渠道与自有品牌数据。",
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
        "costCny": 2000,
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
        "costCny": 0,
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
        "costCny": 0,
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
        "costCny": 0,
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
        "costCny": 11000,
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
        "costCny": 150,
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
  "safety": {
    "hotspots": [
      "法兰克福中央火车站（Hauptbahnhof）及周边 Bahnhofsviertel（火车站区）：夜间毒品交易与酗酒人员聚集，扒窃、抢劫风险较高，夜间尽量避免单独步行通过该区域",
      "柏林亚历山大广场（Alexanderplatz）与柏林中央火车站（Hauptbahnhof）：人流密集的换乘枢纽，扒窃、抢手机高发，尤其在 U-Bahn/S-Bahn 出入口与站台",
      "杜塞尔多夫中央火车站（Hauptbahnhof）及 Konrad-Adenauer-Platz 周边：夜间人员复杂，注意随身物品与同行人员走散",
      "科隆大教堂（Kölner Dom）与科隆中央火车站周边：游客密集区，扒窃、假乞讨与“签名募捐”诈骗集中",
      "各城市火车站、地铁站、有轨电车站与热门景点（博物馆岛、罗马广场、国王大道）：上下车与拍照时是扒窃高发时机，双肩包建议前背",
      "机场与展会现场（法兰克福/杜塞尔多夫展览中心）：展会季人流大，行李与电脑包易被顺手牵羊，接送车辆周边也有冒充司机招揽的情况",
      "圣诞市场与大型活动人群（11 月起陆续开市）：拥挤环境中扒窃与推挤型盗窃增多，注意手机与钱包不要放在外侧口袋"
    ],
    "scams": [
      "假警察查证件/查现金：对方身着便装或仿制制服，出示假证件要求检查钱包、现金或银行卡以“验真伪”，借机抽走现金或调包。真警察一般不会在街头查验现金，遇此应要求前往就近警局并拨打 110 核实",
      "ATM 侧录与“吞卡”诈骗：在 ATM 插卡口或键盘上加装侧录装置与微型摄像头，或故意制造吞卡后由“热心人”指导操作骗取密码。建议在银行营业厅内或人流明亮处的 ATM 取款，取款前检查插卡口是否有异常凸起与松动部件，用手遮挡键盘输入密码",
      "出租车绕路与不打表：机场、火车站外主动招揽的“黑车”或以“计价器坏了”为由索要固定高价，绕远路增加车费。建议使用官方出租车候车点、Uber/Bolt 或 FREENOW，坚持打表并保留发票，核对路线",
      "餐厅“忘找零”或账单加项：以忙碌为由不主动找零、账单中混入未点菜品或重复计费，也可能在小费上做手脚。结账前核对账单明细，尽量使用银行卡支付并保留凭条；现金支付时当面清点找零",
      "地铁/车站“帮忙买票”骗局：陌生人（常为“热心”同行者）主动帮忙在自动售票机上操作，趁机多收钱、拿走找零或替换成无效票，随后以“查票罚款”为由索要现金。建议自行购票或使用 App（如 DB Navigator、各城市交通 App），并保留有效车票备查",
      "“捡到戒指/金链”与“免费赠品”骗局：在地上丢戒指后声称是你掉的并索要酬谢；或以免费手环、签名请愿、合照诱导你停留，同伙趁机扒窃。一律不接、不停留、不签名，直接走开",
      "假查票员罚款：冒充公交查票人员要求现场缴纳高额罚款并只收现金，正规查票员须出示证件并出具正式罚款单（50–60 欧起），可要求到站后核实或通过官方渠道缴纳",
      "兑换与刷卡陷阱：非正规兑换点汇率极差或收取高额手续费；“动态货币转换”（DCC）在刷卡时以人民币结算并加价。建议在银行或正规兑换点换汇，刷卡时选择以欧元（EUR）结算"
    ],
    "medical": [
      {
        "title": "就医流程与费用",
        "text": "德国就医通常需先预约（Termin），可通过电话、诊所官网或 Doctolib 平台预约全科医生（Allgemeinarzt/Hausarzt），由全科医生转诊至专科（Facharzt）。急诊（Notaufnahme）可直接前往医院，但非危及生命的情况可能长时间等待。外国游客就诊需先自费结算，费用较高：普通门诊约 30–80 欧元，专科更高，住院每日数百欧元。就诊后务必索取详细账单（Rechnung）与诊断证明，回国后凭材料向旅行保险公司理赔。"
      },
      {
        "title": "药店 Apotheke（红色十字招牌）",
        "text": "德国药品只能在药店（Apotheke）购买，标志为醒目的红色大写字母“A”或红色十字（部分为绿色十字表示药店）。营业时间通常为周一至周五 9:00–18:30、周六至 14:00 左右，周日与节假日大多关门，但每个区域都有值班药店（Notdienst/Apotheken-Notdienst），门口张贴值班表，也可通过 Apotheken-Notdienst 网站或 App 查询。非处方药（OTC）可直接购买，处方药需医生处方；常用药价较高，建议自备常用药。"
      },
      {
        "title": "急诊 116117 与 112",
        "text": "危及生命（昏迷、重伤、呼吸困难、胸痛等）立即拨 112，救护车与急诊费用昂贵（单次出车常达数百欧元），保险理赔需保留全部单据。非危及生命但需要尽快看医生（夜间、周末、节假日发烧、肠胃炎、扭伤等），拨打 116117 联系医疗值班服务（Ärztlicher Bereitschaftsdienst），他们会告知最近的值班诊所或安排上门出诊。慢病用药续方也可通过全科医生或值班服务解决。"
      },
      {
        "title": "旅行保险使用与理赔材料",
        "text": "申根签证要求医疗保险保额不低于 3 万欧元且覆盖全申根区与整个行程，务必在出发前确认保单有效期覆盖回程日。事故或发病后应第一时间联系保单上的 24 小时全球救援热线，按其指引前往指定医疗机构；自行就医可能影响理赔。理赔必备材料：护照与签证复印件、完整医疗账单与收据原件、诊断证明与病历（建议请医生开具英文版本）、处方与购药发票、保险单号、理赔申请表，以及警方报告（如涉交通事故或第三方责任）。所有单据务必留存原件，拍照备份。"
      },
      {
        "title": "常见病自我处理与就医判断",
        "text": "感冒、轻度腹泻、时差失眠等可先在药店购买非处方药自行处理，并注意补水休息；若出现高热持续 3 天以上、剧烈腹痛、持续呕吐、血便、呼吸困难、意识模糊、胸痛等症状，应立即就医或拨 112。德国秋季多雨湿冷，注意保暖与手部卫生；如因时差与疲劳导致血压或心脏不适，不要拖延就医。"
      }
    ],
    "laws": [
      {
        "title": "逃票与乘车规定",
        "text": "德国公共交通（地铁、有轨电车、公交、区域火车）实行信用乘车制，但查票频繁。无票乘车（Schwarzfahren）属违法行为，罚款（erhöhtes Beförderungsentgelt）通常为 60 欧元起，另需补购车票；拒付可能被报警并记入记录，情节严重者可被处以更高罚金。上车前务必购票并在必要时打票（Entwerten），保留车票至出站；使用 App 购票需确保电子票已激活。"
      },
      {
        "title": "垃圾分类违规罚款",
        "text": "德国实行严格垃圾分类：生物垃圾（Bioabfall）、包装（Verpackung/黄袋）、纸类（Papier）、玻璃（按颜色分投）、剩余垃圾（Restmüll）及可回收瓶（Pfandflaschen 需退押金）。投错类别可能被拒收，屡次违规或乱丢垃圾可被处以数十至数百欧元罚款，恶意混投最高可达数千欧元。酒店与办公楼内请按标识分类；饮料瓶、易拉罐等在超市设有自动退瓶机（Pfand 0.08–0.25 欧元/个）。"
      },
      {
        "title": "公共场合饮酒规定",
        "text": "德国对公共场合饮酒相对宽松，多数城市街头、公园饮酒不违法，但在公共交通工具（地铁、公交、火车）、车站内部及部分步行区、学校周边等禁酒区域饮酒可被罚款。购买啤酒、葡萄酒等低度酒的最低年龄为 16 岁，烈酒为 18 岁。酒后滋事、喧哗或影响他人（包括商务宴请后行为失当）可能被警方处罚，公司层面的合规风险也需注意，量力而行。"
      },
      {
        "title": "中国驾照在德国的使用限制",
        "text": "重要提示：中国驾照 + 翻译件在德国原则上不被承认。持中国驾照在德国短期驾车通常不被直接允许，一般需持有国际驾驶许可证（Internationaler Führerschein，中国不签发该证）或经德国官方认可机构出具的翻译并办理公证/宣誓翻译（beglaubigte Übersetzung），且是否可短期使用、可用期限与是否需配合德国认可的证明文件，均须以德国联邦机动车运输管理局（KBA）、当地驾照管理机构（Führerscheinstelle）与中国驻德使领馆的最新官方规定为准。实务建议：本次商务出行如无德方安排的持证司机，请优先使用出租车、Uber/Bolt 或包车与轨道交通，切勿仅凭中国驾照租车自驾，以免被认定无证驾驶并面临罚款、保险拒赔及法律责任。"
      },
      {
        "title": "无人机飞行规定",
        "text": "在德国操作无人机须遵守欧盟无人机法规（Durchführungsverordnung (EU) 2019/947）：重量 250g 以上的无人机需在所属国注册为操作者并取得操作者编号（e-ID），机身必须标注编号；多数消费级机型需通过在线考试取得远程操控员证书（A1/A3），靠近人群飞行需 A2 证书。最高飞行高度 120 米，须保持视距内飞行；机场周边、市中心、人群上空、监狱、军事设施、工业厂区、自然保护区等为禁飞区。企业厂区与办公区域拍摄必须事先取得书面许可，违反者可被处以高额罚款。"
      },
      {
        "title": "拍照与肖像权",
        "text": "德国《艺术著作权法》（KUG）保护个人肖像权：未经同意拍摄并公开发布可识别的个人照片属违法，被拍摄者可要求删除并索赔。街景、建筑等公共景观一般可拍摄，但商业用途、公开发布（含社交媒体与宣传材料）需谨慎。在企业厂区、展会与会议室拍摄设备、产线或人员前，务必取得书面许可；不要在安检区、军事设施、机场管制区、法院等敏感区域拍照，可能被要求删除或接受调查。"
      },
      {
        "title": "纳粹相关符号违法",
        "text": "德国《刑法典》第 86a 条禁止传播、展示纳粹标志（万字符、党卫军符文、希特勒敬礼、“Heil Hitler”问候语等），无论出于何种目的，包括玩笑、艺术模仿或社交媒体发布，均可能构成犯罪，最高可判处 3 年监禁或罚金。此外，公开否认或美化纳粹大屠杀（Holocaustleugnung）亦属刑事犯罪。请严格遵守，避免使用任何相关手势、符号、图片、T恤印花或网络言论。"
      },
      {
        "title": "商店营业时间与其他日常规定",
        "text": "德国商店周日与法定节假日大多关门（火车站、加油站与部分便利店除外），日常采购需在工作日完成。噪音管制（Ruhezeit）：午间 13:00–15:00 与夜间 22:00 后禁止大声喧哗、使用洗衣机或进行装修，酒店与住宅区尤其严格。此外，部分城市对公共场所拍照、街头摆摊、吸烟（室内公共场所禁烟）等有地方性规定，注意现场标识。"
      }
    ],
    "etiquette": [
      "守时：德国商务场合极度重视准时，会议、拜访与餐叙应提前 5–10 分钟到场，迟到视为失礼；若因不可控原因迟到，务必提前电话或邮件告知并致歉",
      "称呼与握手：初次见面以“Herr/Frau + 姓”称呼并使用“Sie”（您）的尊称，直到对方主动提议使用名字与“du”；见面与告别时握手，目光接触、力度适中，进出房间通常也握手致意",
      "名片：德国商务交往较看重名片，建议使用中英（或中德）双语名片，递接时双手递上、文字朝向对方并稍作简要介绍；不要随手塞进裤袋或在名片上写字",
      "会议直奔主题：德国商务沟通偏好直接、务实、以事实与数据说话，会前应准备详尽的资料与技术参数，会议中可坦率提出异议，避免过度寒暄与模糊承诺；决策周期较长，需给对方内部流程留出时间",
      "小费方式：餐厅、出租车、理发等服务通常给 5%–10% 小费。结账时可在账单金额上直接加价并告知总额（如“18,50 bitte”），或把钱放在桌上/账单夹中；刷卡时可在终端上输入小费金额。不要硬币散落作为小费，也无需给酒店行李员以外的人员小费（行李员一般 1–2 欧元/件）",
      "送礼禁忌：避免赠送过于贵重或具有私人色彩的礼物，以免被误解为不当利益输送，触及企业合规红线；适宜选择有中国特色但价格适中的办公小礼品（茶叶、丝巾、书签、企业定制笔记本），递送时使用包装并注意避开 13 等不吉数字；如需正式赠礼，宜在会面结束前当面递交并简单说明",
      "用餐礼仪：正式餐叙由东道主点餐或先由东道主提议敬酒，等主人说“Guten Appetit”后再开始用餐；双手放在桌面上（不要放在腿上），刀叉并拢放在盘上表示用餐结束；啤酒与葡萄酒碰杯时注意目光接触",
      "着装规范：商务会议以深色西装、衬衫、皮鞋为主，正式晚宴可着深色西装或礼服；德国人着装整体整洁低调，避免过于鲜艳或炫耀性配饰",
      "公共场合行为：乘坐扶梯靠右站立、左侧通行；公共交通工具上保持安静，避免大声通话；排队与购物自觉遵守秩序，不插队、不喧哗",
      "隐私与话题：避免询问对方年龄、收入、婚姻、宗教与政治倾向；可谈足球、旅行、汽车、文化、天气等安全话题，德国人重视专业能力与守约，而非过度社交"
    ],
    "medicineGlossary": [
      {
        "zh": "感冒药",
        "de": "Erkältungsmittel"
      },
      {
        "zh": "退烧药",
        "de": "Fiebermittel"
      },
      {
        "zh": "止痛药",
        "de": "Schmerzmittel"
      },
      {
        "zh": "肠胃药",
        "de": "Magen-Darm-Mittel"
      },
      {
        "zh": "止泻药",
        "de": "Durchfallmittel"
      },
      {
        "zh": "抗过敏药",
        "de": "Antiallergikum"
      },
      {
        "zh": "创可贴",
        "de": "Pflaster"
      },
      {
        "zh": "消毒用品",
        "de": "Desinfektionsmittel"
      },
      {
        "zh": "晕车药",
        "de": "Reisetabletten"
      },
      {
        "zh": "咽喉含片",
        "de": "Halstabletten"
      },
      {
        "zh": "眼药水",
        "de": "Augentropfen"
      },
      {
        "zh": "安眠/助眠",
        "de": "Schlafmittel"
      },
      {
        "zh": "口罩",
        "de": "Mund-Nasen-Schutz"
      },
      {
        "zh": "体温计",
        "de": "Fieberthermometer"
      },
      {
        "zh": "止咳药",
        "de": "Hustenmittel"
      },
      {
        "zh": "药膏/外用药",
        "de": "Salbe"
      },
      {
        "zh": "处方",
        "de": "Rezept"
      },
      {
        "zh": "药店",
        "de": "Apotheke"
      },
      {
        "zh": "药店值班服务",
        "de": "Apotheken-Notdienst"
      },
      {
        "zh": "医生/诊所",
        "de": "Arzt / Praxis"
      },
      {
        "zh": "急诊",
        "de": "Notaufnahme"
      },
      {
        "zh": "医疗值班服务",
        "de": "Ärztlicher Bereitschaftsdienst"
      },
      {
        "zh": "保险公司",
        "de": "Versicherung"
      },
      {
        "zh": "账单/发票",
        "de": "Rechnung"
      }
    ],
    "connectivity": {
      "sim": [
        "Telekom 预付卡（Prepaid）：网络覆盖与速度最佳，适合商务出行与城市间移动；可在 Telekom 门店、超市（如 REWE、dm 部分门店）或机场购买，预付费套餐通常含欧盟漫游流量",
        "Vodafone 预付卡（CallYa）：覆盖良好、门店多，套餐灵活，适合短期停留；可在 Vodafone 门店与部分超市购买",
        "O2（Telefónica）预付卡：价格相对便宜，城市覆盖良好，农村与部分高速路段略弱；门店与线上均可购买",
        "eSIM 方案：无需实体卡，出发前在线购买（如 Airalo、Holafly、Ubigi）并扫码安装，落地即用；适合 4 人团组统一配置，但需确认手机支持 eSIM 且套餐含欧盟漫游",
        "实名要求：德国自 2017 年起实行 SIM 卡实名登记（Gesetz zur Verhinderung von Missbrauch），购买预付卡须出示护照或身份证件并现场激活，部分超市购买的卡需在线或到店完成身份验证（Video-Ident/PostIdent），请预留时间",
        "购买渠道与提示：机场、火车站、运营商门店、大型超市与电子产品店（MediaMarkt、Saturn）均有销售；建议按人数购买 2–4 张卡并共享热点，或直接使用国内运营商的欧洲日租漫游包；注意欧盟“漫游如在家”（Roam like at Home）规则，在欧盟境内使用他国卡不额外收费"
      ],
      "payment": [
        "Visa/Mastercard 普及：酒店、连锁餐厅、大型商场与加油站普遍接受 Visa 与 Mastercard 信用卡/借记卡，但小额消费（面包店、街边摊、部分小餐馆）可能只收现金或设最低刷卡金额",
        "Girocard 现象：德国本土借记卡（Girocard，原 EC 卡）使用极广，部分商户只接受 Girocard 而不接受境外信用卡；如遇拒收可换用现金或询问是否支持 Visa/Mastercard",
        "现金习惯：德国现金使用比例在欧洲仍偏高，建议每人随身携带 50–150 欧元小额现金（含硬币）用于交通、餐饮、小费与洗手间（部分收费 0.5–1 欧元）；避免携带 500 欧元大钞（部分商户拒收）",
        "Apple Pay / Google Pay：在大型商户、连锁超市与部分餐厅广泛支持，绑定 Visa/Mastercard 即可使用；也可使用手机 NFC 支付，但小商户覆盖率不如国内",
        "银联（UnionPay）：在部分 ATM、机场免税店、大型百货与中国游客集中的商户可用，覆盖率低于 Visa/Mastercard；建议携带 Visa/Mastercard 作为主力，银联作为备用",
        "微信支付/支付宝：在德国主要面向中国游客的商户（免税店、部分中餐馆、奥特莱斯、部分百货）逐步开通，2026 年覆盖仍在扩大但普及度明显低于国内；不可依赖其支付酒店、出租车与日常超市消费",
        "动态货币转换（DCC）提示：刷卡时若终端询问以人民币（CNY）还是欧元（EUR）结算，务必选择欧元，选择人民币通常由商户侧加价 3%–7%",
        "ATM 取现：使用 Sparkasse、Deutsche Bank、Commerzbank 等银行 ATM 取现较安全，注意部分机器收取 3–6 欧元手续费；避免在机场、赌场、便利店内的第三方 ATM 取现（汇率差、手续费高）"
      ],
      "apps": [
        {
          "name": "DB Navigator",
          "purpose": "德国铁路与公共交通查询购票",
          "note": "查时刻、买火车/城际票、绑定 BahnCard，支持电子票；长途票建议提前购买可享 Sparpreis 折扣，注意特价票不可退改"
        },
        {
          "name": "Google Maps",
          "purpose": "导航与公共交通换乘",
          "note": "德国公交地铁换乘信息较准确，可离线下载城市地图；室内导航与步行路线实用"
        },
        {
          "name": "Uber / Bolt",
          "purpose": "网约车叫车与费用预估",
          "note": "德国大城市（柏林、法兰克福、杜塞尔多夫、慕尼黑）可用，Uber 在部分城市接入出租车；Bolt 价格通常更低，先比价再下单"
        },
        {
          "name": "FREENOW",
          "purpose": "出租车与网约车聚合",
          "note": "德国本土出租车叫车平台，覆盖广、可呼叫正规出租车，支持电子支付，适合商务接送"
        },
        {
          "name": "DeepL",
          "purpose": "高质量中德互译",
          "note": "翻译质量优于通用工具，适合商务邮件、合同条款与菜单翻译；可购买 Pro 或用网页版处理长文本"
        },
        {
          "name": "Booking.com",
          "purpose": "酒店预订与管理",
          "note": "支持全程 21 晚酒店预订、免费取消筛选与订单管理；也可用于临时改期，建议保存订单截图与确认号"
        },
        {
          "name": "Global Blue",
          "purpose": "购物退税",
          "note": "支持查询退税单状态、追踪退款进度与电子退税；配合机场海关盖章单据使用"
        },
        {
          "name": "Planet (原 Premier Tax Free)",
          "purpose": "购物退税",
          "note": "另一主流退税机构，同样支持单据状态查询与退款追踪；退税单需与 Global Blue 分开办理"
        },
        {
          "name": "WarnWetter (DWD)",
          "purpose": "德国官方天气与预警",
          "note": "德国气象局官方 App，提供逐小时预报、风暴/大雾/霜冻预警与雷达图，商务出行安排行程时参考价值高"
        },
        {
          "name": "Meteoblue",
          "purpose": "精细天气预报",
          "note": "提供多模型对比与 14 天预报，适合判断连日阴雨与出行窗口；免费版即可满足日常需求"
        },
        {
          "name": "Too Good To Go",
          "purpose": "餐饮余量折扣",
          "note": "以低价购买餐厅与面包店当日余量食物，适合预算控制与临时用餐，需按预约时段自取"
        },
        {
          "name": "Google Translate",
          "purpose": "翻译与离线语言包",
          "note": "提前下载德语离线包，无网络时可用；相机取词翻译适合看菜单、指示牌与说明书"
        },
        {
          "name": "Doctolib",
          "purpose": "医生预约",
          "note": "在线预约全科与专科医生，可按语言与保险类型筛选；如遇身体不适可快速找到可预约诊所"
        },
        {
          "name": "Apotheken-Notdienst",
          "purpose": "查找值班药店",
          "note": "查询附近 24 小时或节假日值班药店（Notdienst）地址与营业时间，夜间购药必备"
        },
        {
          "name": "Bahn Bonus / DB 相关工具",
          "purpose": "常旅客与行程管理",
          "note": "如多次乘坐德铁可注册 BahnBonus 累积积分；也可用于查询站台变更与延误信息"
        }
      ]
    }
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
  },
  "transport": {
    "intro": "德国铁路由 DB（德铁）主导，市内交通由各城市公交公司运营。本页为本次行程的票制要点与省钱方案。德国火车站无安检、站台自由通行，但【上车前必须打票】是硬性红线。",
    "tickets": [
      {
        "name": "单次票 / 短程票",
        "name_de": "Einzelfahrschein / Kurzstrecke",
        "desc": "市内单程使用。杜塞尔多夫、柏林、法兰克福、因戈尔施塔特票制各不相同，短程票通常限 3–4 站以内。自动售票机多为德语界面，支持现金与信用卡。",
        "price": "约 2–4 €/人次",
        "persons": "单人"
      },
      {
        "name": "日票（市内）",
        "name_de": "TagesTicket / Tageskarte",
        "desc": "一天内不限次乘坐市内公交、地铁、城铁。多人同行可选「团体日票」，通常 2–5 人共票比买单人日票更划算，是 4 人团组市内通勤的首选。",
        "price": "约 7–25 €（视城市与人数）",
        "persons": "1–5 人"
      },
      {
        "name": "全德慢车日票",
        "name_de": "Quer-durchs-Land-Ticket",
        "desc": "一天内不限次乘坐全德【慢车】（RB / RE / IRE / S-Bahn），不可乘坐 ICE / IC / EC 等快车。工作日 9:00 起有效至次日 03:00；周末与法定假日 00:00 起有效。可提前 6 个月购买。",
        "price": "4 人 €87（1 人 €51 / 2 人 €63 / 3 人 €75 / 5 人 €99）",
        "persons": "1–5 人共用一张"
      },
      {
        "name": "北威州 24 小时团体票",
        "name_de": "24hTicket NRW 5 Personen",
        "desc": "北威州内 24 小时不限次乘坐慢车与市内公交，适合杜塞尔多夫往返科隆、埃森、亚琛等周末线路。",
        "price": "5 人 €59.80（单人版 €39.80）",
        "persons": "最多 5 人"
      },
      {
        "name": "莱茵兰-普法尔茨/萨尔州票",
        "name_de": "Rheinland-Pfalz-Ticket / Saarland-Ticket",
        "desc": "州内慢车日票，适合法兰克福出发前往美因茨、宾根、科布伦茨方向。",
        "price": "4 人 €60（1–5 人 €30 / 40 / 50 / 60 / 70）",
        "persons": "最多 5 人"
      },
      {
        "name": "巴登-符腾堡州票",
        "name_de": "Baden-Württemberg-Ticket",
        "desc": "州内慢车日票，全天 00:00–03:00 有效，适合前往海德堡、斯图加特方向。",
        "price": "4 人 €54（首人 €27，每增 1 人 +€9）",
        "persons": "最多 5 人"
      },
      {
        "name": "ICE 特价票",
        "name_de": "Sparpreis",
        "desc": "长途快车提前在 DB Navigator 或 bahn.de 购买可享特价，越早越便宜。本次行程中【因戈尔施塔特 → 杜塞尔多夫 537 公里】和【法兰克福 → 沃尔尼茨】两段最值得提前锁价。",
        "price": "视车次，通常比现场购票低 30%–60%",
        "persons": "单人（可加同行人）"
      },
      {
        "name": "德国月票",
        "name_de": "Deutschlandticket",
        "desc": "全德范围慢车 + 市内公交通用月票（订阅制）。本次为 21 天短期出差，需按整月订阅，且 4 人需各买一份，性价比一般，除非有大量市内通勤需求。",
        "price": "约 58–63 €/人/月（2026 年具体价格以官方为准）",
        "persons": "单人"
      }
    ],
    "rules": [
      {
        "level": "red",
        "title": "上车前必须打票（Entwerten）",
        "text": "地铁、城铁、电车、公交上车前必须在站台打票机（Entwerter）盖章，未打票视为逃票，罚款 60 欧元起，且现场必须出示证件缴纳。纸质票尤其容易漏打，务必每次确认。"
      },
      {
        "level": "amber",
        "title": "德铁经常晚点，换乘预留 20–40 分钟",
        "text": "DB 长途车晚点较常见，换乘时间建议至少预留 20–40 分钟。本次 10/28 因戈尔施塔特 → 杜塞尔多夫（537 公里）行程较长，务必留足换乘与缓冲时间。"
      },
      {
        "level": "amber",
        "title": "站台会临时变更",
        "text": "德国车站站台（Gleis）经常临时调整，开车前请在 DB Navigator 或站台显示屏确认最新站台，不要凭票面信息直接上车。"
      },
      {
        "level": "amber",
        "title": "快车与慢车不能混用",
        "text": "州票、全德慢车日票等优惠票【只能坐慢车】。误上 ICE / IC 会被视为无票乘车并罚款，上车前务必看清车次类型。"
      },
      {
        "level": "amber",
        "title": "慎用打车软件",
        "text": "Uber / Bolt 仅在柏林、法兰克福、杜塞尔多夫等大城市可用，Unna、Löhne、Wörnitz 等小镇基本无车。仓库考察日请提前安排租车或包车。"
      },
      {
        "level": "info",
        "title": "治安提示",
        "text": "德国火车站无安检、站台自由通行，人流大的中央车站（法兰克福 Hbf、柏林 Hbf、杜塞尔多夫 Hbf）扒窃高发，贵重物品不要放在背包外侧口袋。"
      },
      {
        "level": "info",
        "title": "已废止的票种",
        "text": "「周末票」（Schönes-Wochenende-Ticket）已于 2019 年 6 月 8 日废止；黑森州票（Hessen-Ticket）亦已停售。网上流传的这两种票已无法购买，请勿按旧攻略规划。"
      }
    ],
    "routes": [
      {
        "from": "法兰克福机场 FRA",
        "to": "杜塞尔多夫 Hbf",
        "distance_km": 227,
        "mode": "ICE 快车 / 租车",
        "duration": "火车约 1 小时 20 分 – 2 小时；开车约 2 小时",
        "tip": "10/11 抵达当天行程较满。长途飞行后不建议自驾，优先 ICE 直达（法兰克福机场站有直达杜塞尔多夫的 ICE），或包车接机。"
      },
      {
        "from": "杜塞尔多夫",
        "to": "翁纳 Unna（无忧达仓库）",
        "distance_km": 84,
        "mode": "开车",
        "duration": "约 1 小时",
        "tip": "10/14 当日往返。A46 / A1 方向，早高峰（7:30–9:00）杜塞尔多夫出城易堵，建议 7:00 前出发。"
      },
      {
        "from": "杜塞尔多夫",
        "to": "勒讷 Löhne（kemena 仓库）",
        "distance_km": 227,
        "mode": "开车 / 火车",
        "duration": "开车约 2.5 小时；火车约 2.5–3 小时",
        "tip": "10/15 当日往返，全天在途时间较长。若自驾，A2 / A30 方向；若乘火车，可至 Löhne (Westf) 站后转出租车。"
      },
      {
        "from": "杜塞尔多夫",
        "to": "柏林",
        "distance_km": 557,
        "mode": "飞机（行程既定）",
        "duration": "飞行约 1 小时 10 分",
        "tip": "10/22 前往柏林。若改乘 ICE 约 4.5–5 小时，飞机含往返机场与安检时间约 4 小时，差别不大，按既定行程乘飞机即可。"
      },
      {
        "from": "柏林",
        "to": "法兰克福",
        "distance_km": 551,
        "mode": "飞机（行程既定）",
        "duration": "飞行约 1 小时 15 分",
        "tip": "10/24 前往法兰克福。德国国内航班建议提前 1.5 小时到机场。"
      },
      {
        "from": "法兰克福",
        "to": "沃尔尼茨 Wörnitz（GBL 仓库）",
        "distance_km": 194,
        "mode": "火车 + 接驳",
        "duration": "约 2–3 小时（含接驳）",
        "tip": "10/26 08:00–16:00。Wörnitz 为巴伐利亚小镇，铁路班次少，务必提前用 DB Navigator 查好车次；末段可能需要出租车接驳，建议提前与仓库方确认接送。"
      },
      {
        "from": "沃尔尼茨 Wörnitz",
        "to": "因戈尔施塔特",
        "distance_km": 156,
        "mode": "火车 / 开车",
        "duration": "约 2 小时",
        "tip": "10/26 16:00 后前往因戈尔施塔特。若当日火车班次衔接不上，可考虑租车。"
      },
      {
        "from": "因戈尔施塔特",
        "to": "杜塞尔多夫",
        "distance_km": 537,
        "mode": "ICE 快车",
        "duration": "约 5 小时；开车约 6 小时",
        "tip": "10/28 全天转场（08:00–18:00）。因戈尔施塔特需先到慕尼黑或纽伦堡换乘 ICE 至杜塞尔多夫。建议提前购买 Sparpreis 特价票，并预留 20–40 分钟换乘缓冲。"
      },
      {
        "from": "杜塞尔多夫",
        "to": "法兰克福机场 FRA",
        "distance_km": 227,
        "mode": "ICE 快车",
        "duration": "火车约 1 小时 20 分 – 2 小时；开车约 2 小时",
        "tip": "11/1 08:00–12:00 前往机场，13:30 起飞。建议 10:30 前抵达机场，预留 3 小时办理值机、海关盖章与退税。"
      }
    ],
    "notes": [
      "以上票价与优惠票种基于 2026 年 DB 官方信息整理，实际价格与规则以 DB Navigator / bahn.de 为准。",
      "重要：莱茵河右岸铁路（Troisdorf–Wiesbaden 段）2026 年 7 月 10 日至 12 月 12 日进行大规模整修（Generalsanierung），期间吕德斯海姆（Rüdesheim）、阿斯曼斯豪森（Assmannshausen）等站【无列车服务】，改由巴士替代。本行程全部落在施工期内，如安排莱茵河谷线路务必先查 DB Navigator 的替代交通方案。",
      "德国车站与车内禁止吸烟（含电子烟），违者罚款。"
    ]
  },
  "weather": {
    "dst": {
      "startDate": "2026-03-29",
      "endDate": "2026-10-25",
      "tzBefore": 6,
      "tzAfter": 7,
      "note": "欧盟夏令时（CEST, UTC+2）于 2026 年 10 月 25 日（10 月最后一个星期日）凌晨结束，时钟回拨 1 小时至冬令时（CET, UTC+1）。以北京时间为基准：10 月 25 日之前德国比北京晚 6 小时（tzBefore=6），10 月 25 日起晚 7 小时（tzAfter=7）。10/24→10/25 夜间多出 1 小时，跨 0 点的行程安排与回程落地时间需按新时差重新核算。"
    },
    "quick": [
      {
        "city": "杜塞尔多夫",
        "period": "10月中旬–11月初",
        "temp_high": 15,
        "temp_low": 6,
        "cond": "多云有阵雨",
        "clothing": "防风外套+抓绒"
      },
      {
        "city": "柏林",
        "period": "10月中旬–11月初",
        "temp_high": 14,
        "temp_low": 5,
        "cond": "多云转阴，风力偏大",
        "clothing": "厚外套+毛衣"
      },
      {
        "city": "法兰克福",
        "period": "10月中旬–11月初",
        "temp_high": 15,
        "temp_low": 6,
        "cond": "多云有阵雨，晨雾",
        "clothing": "防风防水外套+薄毛衣"
      },
      {
        "city": "因戈尔施塔特",
        "period": "10月中旬–11月初",
        "temp_high": 14,
        "temp_low": 5,
        "cond": "多云，清晨多雾",
        "clothing": "厚外套+毛衣+围巾"
      }
    ],
    "cities": [
      {
        "city": "杜塞尔多夫",
        "period": "10月中旬（10/11–10/20）",
        "temp_high": 15,
        "temp_low": 9,
        "rain_days": 9,
        "rainfall_mm": 55,
        "sunshine_hours": 3.5,
        "cond": "多云有阵雨",
        "clothing": "长袖衬衫+薄毛衣+防风外套，随身折叠伞",
        "note": "常年值参考：白天 14–16 ℃、夜间 8–10 ℃。莱茵河沿岸湿度大，早晚体感偏凉；展会季（Messe）人流大，室内外温差明显，建议洋葱式穿着。",
        "source_url": "https://www.dwd.de/DE/leistungen/klimadatendeutschland/klimadatendeutschland.html"
      },
      {
        "city": "杜塞尔多夫",
        "period": "10月下旬（10/21–10/31）",
        "temp_high": 12,
        "temp_low": 6,
        "rain_days": 10,
        "rainfall_mm": 60,
        "sunshine_hours": 3,
        "cond": "多云转阴，多阵雨",
        "clothing": "毛衣+厚外套（风衣/轻羽绒），围巾备用",
        "note": "常年值参考：白天 10–13 ℃、夜间 4–7 ℃。10/25 起进入冬令时，17:00 前后即天黑，晚间行程需预留室内活动与返程照明时间。",
        "source_url": "https://www.dwd.de/DE/leistungen/klimadatendeutschland/klimadatendeutschland.html"
      },
      {
        "city": "杜塞尔多夫",
        "period": "11月初（11/1–11/2）",
        "temp_high": 10,
        "temp_low": 4,
        "rain_days": 10,
        "rainfall_mm": 65,
        "sunshine_hours": 2.5,
        "cond": "阴，间歇小雨",
        "clothing": "保暖内衣+毛衣+厚外套，手套围巾",
        "note": "常年值参考：白天 8–11 ℃、夜间 2–5 ℃。清晨可能出现雾或初霜，路面湿滑，通勤与会议间转场建议打车。",
        "source_url": "https://www.dwd.de/DE/leistungen/klimadatendeutschland/klimadatendeutschland.html"
      },
      {
        "city": "柏林",
        "period": "10月中旬（10/11–10/20）",
        "temp_high": 14,
        "temp_low": 7,
        "rain_days": 8,
        "rainfall_mm": 40,
        "sunshine_hours": 3.5,
        "cond": "多云，偶有阵雨",
        "clothing": "长袖+薄毛衣+防风外套",
        "note": "常年值参考：白天 13–15 ℃、夜间 6–8 ℃。柏林较西部城市偏冷 1–2 ℃，大陆性更强，昼夜温差大；风力较大，体感温度低于实测气温。",
        "source_url": "https://www.dwd.de/DE/leistungen/klimadatendeutschland/klimadatendeutschland.html"
      },
      {
        "city": "柏林",
        "period": "10月下旬（10/21–10/31）",
        "temp_high": 11,
        "temp_low": 5,
        "rain_days": 9,
        "rainfall_mm": 42,
        "sunshine_hours": 3,
        "cond": "多云转阴，风力偏大",
        "clothing": "厚毛衣+防风外套（建议带内胆）",
        "note": "常年值参考：白天 9–12 ℃、夜间 3–6 ℃。较德国西部偏冷 1–2 ℃，清晨地面可能结霜，注意防滑鞋。",
        "source_url": "https://www.dwd.de/DE/leistungen/klimadatendeutschland/klimadatendeutschland.html"
      },
      {
        "city": "柏林",
        "period": "11月初（11/1–11/2）",
        "temp_high": 9,
        "temp_low": 3,
        "rain_days": 9,
        "rainfall_mm": 45,
        "sunshine_hours": 2,
        "cond": "阴冷，晨间有雾",
        "clothing": "保暖内衣+毛衣+羽绒或厚呢外套，手套",
        "note": "常年值参考：白天 7–10 ℃、夜间 1–4 ℃。11 月为柏林最阴沉月份之一，日照偏少，注意情绪与体力调节。",
        "source_url": "https://www.dwd.de/DE/leistungen/klimadatendeutschland/klimadatendeutschland.html"
      },
      {
        "city": "法兰克福",
        "period": "10月中旬（10/11–10/20）",
        "temp_high": 15,
        "temp_low": 9,
        "rain_days": 9,
        "rainfall_mm": 55,
        "sunshine_hours": 3.5,
        "cond": "多云有阵雨",
        "clothing": "长袖+薄毛衣+防风防水外套",
        "note": "常年值参考：白天 14–16 ℃、夜间 8–10 ℃。美因河谷多雾，早晨易出现能见度下降，影响航班起降与高速通行。",
        "source_url": "https://www.dwd.de/DE/leistungen/klimadatendeutschland/klimadatendeutschland.html"
      },
      {
        "city": "法兰克福",
        "period": "10月下旬（10/21–10/31）",
        "temp_high": 12,
        "temp_low": 6,
        "rain_days": 10,
        "rainfall_mm": 58,
        "sunshine_hours": 3,
        "cond": "多云转阴，多阵雨",
        "clothing": "毛衣+厚外套，防水鞋",
        "note": "常年值参考：白天 10–13 ℃、夜间 4–7 ℃。法兰克福机场（FRA）为回程枢纽，深秋延误概率上升，建议转机预留 3 小时以上。",
        "source_url": "https://www.dwd.de/DE/leistungen/klimadatendeutschland/klimadatendeutschland.html"
      },
      {
        "city": "法兰克福",
        "period": "11月初（11/1–11/2）",
        "temp_high": 10,
        "temp_low": 4,
        "rain_days": 10,
        "rainfall_mm": 60,
        "sunshine_hours": 2.5,
        "cond": "阴，间歇小雨，晨雾",
        "clothing": "保暖内衣+毛衣+厚外套",
        "note": "常年值参考：白天 8–11 ℃、夜间 2–5 ℃。晨雾与低云可能触发航班延误或备降，回程当日务必留足缓冲。",
        "source_url": "https://www.dwd.de/DE/leistungen/klimadatendeutschland/klimadatendeutschland.html"
      },
      {
        "city": "因戈尔施塔特",
        "period": "10月中旬（10/11–10/20）",
        "temp_high": 14,
        "temp_low": 7,
        "rain_days": 9,
        "rainfall_mm": 50,
        "sunshine_hours": 3.5,
        "cond": "多云，清晨多雾",
        "clothing": "长袖+毛衣+防风外套",
        "note": "常年值参考：白天 13–15 ℃、夜间 6–8 ℃。巴伐利亚较西部偏冷 1–2 ℃，多瑙河谷清晨多雾，能见度可能低于 500 米，自驾需开雾灯。",
        "source_url": "https://www.dwd.de/DE/leistungen/klimadatendeutschland/klimadatendeutschland.html"
      },
      {
        "city": "因戈尔施塔特",
        "period": "10月下旬（10/21–10/31）",
        "temp_high": 11,
        "temp_low": 5,
        "rain_days": 9,
        "rainfall_mm": 52,
        "sunshine_hours": 3,
        "cond": "多云转阴，晨雾频发",
        "clothing": "厚毛衣+厚外套，早晚加围巾",
        "note": "常年值参考：白天 9–12 ℃、夜间 3–6 ℃。较德国西部偏冷 1–2 ℃；清晨雾天常见，高速公路 A9 段需注意限速与车距。",
        "source_url": "https://www.dwd.de/DE/leistungen/klimadatendeutschland/klimadatendeutschland.html"
      },
      {
        "city": "因戈尔施塔特",
        "period": "11月初（11/1–11/2）",
        "temp_high": 9,
        "temp_low": 3,
        "rain_days": 10,
        "rainfall_mm": 55,
        "sunshine_hours": 2,
        "cond": "阴冷，晨雾与小阵雨",
        "clothing": "保暖内衣+毛衣+羽绒外套，手套",
        "note": "常年值参考：白天 7–10 ℃、夜间 1–4 ℃。清晨雾区能见度低，可能出现初霜与桥面结冰，工厂参观与物流行程建议预留额外车程。",
        "source_url": "https://www.dwd.de/DE/leistungen/klimadatendeutschland/klimadatendeutschland.html"
      }
    ],
    "clothingLevels": [
      {
        "temp_range": "15-18℃",
        "advice": "德国秋季最常见的白天温度，室内有暖气约 20–22 ℃，外套可脱，建议分层穿脱。",
        "layers": "内层长袖衬衫/薄T恤 → 中层薄毛衣或针织开衫 → 外层防风外套或风衣",
        "items": [
          "长袖衬衫（商务场合）",
          "薄毛衣/针织开衫",
          "防风风衣或轻便夹克",
          "西裤或商务休闲长裤",
          "皮鞋（正装）",
          "折叠伞"
        ]
      },
      {
        "temp_range": "10-14℃",
        "advice": "10 月下旬的典型白天温度，早晚明显偏凉，正装场合需注意外套与西装搭配的层次感。",
        "layers": "内层发热内衣或厚衬衫 → 中层厚毛衣/马甲 → 外层厚风衣、呢子大衣或轻羽绒",
        "items": [
          "厚毛衣或羊毛马甲",
          "厚风衣/呢子大衣（可配西装）",
          "发热内衣（保暖打底）",
          "厚西裤或加绒长裤",
          "薄手套、围巾",
          "防水皮鞋或短靴"
        ]
      },
      {
        "temp_range": "5-9℃",
        "advice": "11 月初早晚与阴雨天温度，风大体感更冷，建议把正装外套换成中长款大衣并加围巾。",
        "layers": "内层保暖内衣 → 中层毛衣+西装 → 外层中长款羽绒或厚呢大衣",
        "items": [
          "保暖内衣（上下一套）",
          "厚毛衣",
          "中长款羽绒服或厚呢大衣",
          "围巾、手套、毛线帽",
          "加绒西裤或厚长裤",
          "保暖皮鞋或防水短靴"
        ]
      },
      {
        "temp_range": "0-4℃",
        "advice": "夜间与清晨极端情况温度，可能出现初霜与结冰，室外停留时间要短，重点保护头部与手足。",
        "layers": "内层抓绒/发热内衣 → 中层厚毛衣 → 外层羽绒服+防风层，必备帽、手套、围巾",
        "items": [
          "厚羽绒服（充绒量 100g 以上）",
          "抓绒内衣套装",
          "厚羊毛袜",
          "防水保暖靴（防滑底）",
          "厚手套、毛线帽、围巾",
          "暖宝宝贴"
        ]
      }
    ],
    "packing": [
      {
        "category": "证件与文件",
        "note": "4 人商务团组、21 晚行程，证件原件随身、复印件与电子扫描件分离存放；建议每人在手机与云端各留一份。",
        "items": [
          "护照（有效期需超过回程日 6 个月以上）",
          "申根签证页或居留许可",
          "往返机票行程单",
          "酒店预订单（全程 21 晚）",
          "商务邀请函（德方公司盖章原件）",
          "旅行保险保单（含医疗与紧急救援）",
          "驾照及认可翻译件（如安排自驾）",
          "证件照 2 张/人（备用）",
          "护照与签证复印件、电子扫描件",
          "公司派遣函与营业执照英文副本"
        ]
      },
      {
        "category": "电子设备",
        "note": "德国插座为欧标 Schuko（C/F 型，230V/50Hz），中国插头需转换器；4 人团队建议带 2 个多口插排。",
        "items": [
          "笔记本电脑与充电器",
          "欧标转换插头（C/F 型）",
          "多口 USB 插排或接线板",
          "充电宝（≤100Wh，标识清晰，随身携带）",
          "手机与备用数据线",
          "移动硬盘/U 盘（演示资料备份）",
          "无线演示器、HDMI/Type-C 转接头",
          "降噪耳机",
          "相机与备用电池",
          "翻译机或备用手机（装 eSIM）"
        ]
      },
      {
        "category": "衣物（正装/商务便装/外套/鞋）",
        "note": "21 晚行程建议按 7–8 天一组轮换，中间利用酒店洗衣服务；正装至少 2 套轮换，避免阴雨天无法晾干。",
        "items": [
          "正装西装 2 套（深色为主，配领带 3 条）",
          "正装衬衫 5–6 件（易皱款建议免烫）",
          "商务便装：休闲西裤、Polo 衫、针织衫",
          "外套：厚风衣/呢子大衣/轻羽绒各 1 件",
          "保暖内衣 2 套、毛衣 3 件",
          "皮鞋 2 双（正装+商务休闲，防水优先）",
          "运动鞋或舒适步行鞋 1 双",
          "围巾、手套、毛线帽各 1 套",
          "内衣袜子 8 套以上、防雨折叠伞",
          "正装皮带、袖扣、领带夹等配件"
        ]
      },
      {
        "category": "日用品",
        "note": "德国酒店通常不提供牙刷拖鞋，需自备；液体随身限 100ml/瓶，大瓶装请托运。",
        "items": [
          "牙刷、牙膏、拖鞋（酒店多不提供）",
          "洗发水/沐浴露旅行装（≤100ml，随身）",
          "剃须刀与刀片（刀片须托运）",
          "护肤品、润唇膏、护手霜（德国秋季干燥）",
          "指甲刀（须托运）、湿巾、纸巾",
          "洗衣液旅行装、折叠晾衣绳",
          "保温杯、密封水杯",
          "眼罩、耳塞、颈枕（长途飞行）",
          "雨伞 1 人 1 把、行李秤",
          "晾衣夹、密封袋、行李牌"
        ]
      },
      {
        "category": "药品",
        "note": "处方药务必带英文/德文说明与医生处方，量不超过个人自用；含可待因、麻黄碱等成分的药品受德国药品法限制，需提前确认。",
        "items": [
          "感冒药、退烧药、止咳药",
          "肠胃药、止泻药、健胃消食片",
          "抗过敏药（德国秋季花粉与室内尘螨）",
          "止痛药、创可贴、消毒湿巾",
          "晕车/晕机药",
          "咽喉含片、眼药水",
          "个人长期处方药（带英文处方与说明书）",
          "口罩（N95/医用外科）",
          "电子体温计、退热贴",
          "润喉糖、维生素补充剂"
        ]
      },
      {
        "category": "商务与办公用品",
        "note": "21 晚含多场正装场合与客户拜访，名片与礼品数量按 4 人×多场次估算，礼品避免奢华以符合合规要求。",
        "items": [
          "名片（每人 100 张以上，中英双语）",
          "公司宣传册与产品资料（中英/中德）",
          "笔记本、签字笔、记号笔",
          "文件夹、文件袋、订书机",
          "U 盘/移动硬盘（演示与合同模板）",
          "合同模板与报价单打印件",
          "公司徽标礼品（笔、笔记本、丝巾等，轻便合规）",
          "印章/签字笔（如需现场签署）",
          "计算器、便签纸",
          "翻译好的公司简介与产品说明书"
        ]
      }
    ],
    "risks": [
      "大雾：10 月下旬至 11 月初清晨多瑙河谷与美因河谷易出现能见度低于 500 米的浓雾，影响自驾与航班起降",
      "风暴：秋季大西洋低压带来强风，北海与波罗的海沿岸及内陆均可能出现 8 级以上阵风，户外行程需备用方案",
      "初霜与结冰：11 月初清晨可能出现初霜，桥面与背阴路段易结冰，注意防滑与行车安全",
      "连续阴雨：10–11 月德国降雨天数多、日照少，影响户外参观与城市观光，需准备室内备选行程",
      "日照骤减：冬令时切换后 16:30–17:00 即天黑，晚间通勤与返程安全性下降",
      "温差与暖气干燥：室外 5 ℃、室内 22 ℃ 的温差易引发感冒，注意分层穿着与补水"
    ],
    "sunset": [
      {
        "city": "杜塞尔多夫",
        "cityEn": "Dusseldorf",
        "date": "2026-10-11",
        "sunrise": "07:49",
        "sunset": "18:50",
        "daylight": "11h01m",
        "tz": "CEST (UTC+2)",
        "note": ""
      },
      {
        "city": "杜塞尔多夫",
        "cityEn": "Dusseldorf",
        "date": "2026-10-17",
        "sunrise": "07:59",
        "sunset": "18:37",
        "daylight": "10h38m",
        "tz": "CEST (UTC+2)",
        "note": ""
      },
      {
        "city": "杜塞尔多夫",
        "cityEn": "Dusseldorf",
        "date": "2026-10-18",
        "sunrise": "08:01",
        "sunset": "18:35",
        "daylight": "10h34m",
        "tz": "CEST (UTC+2)",
        "note": ""
      },
      {
        "city": "杜塞尔多夫",
        "cityEn": "Dusseldorf",
        "date": "2026-10-25",
        "sunrise": "07:13",
        "sunset": "17:21",
        "daylight": "10h08m",
        "tz": "CET (UTC+1)",
        "note": "夏令时结束"
      },
      {
        "city": "杜塞尔多夫",
        "cityEn": "Dusseldorf",
        "date": "2026-10-31",
        "sunrise": "07:23",
        "sunset": "17:10",
        "daylight": "9h46m",
        "tz": "CET (UTC+1)",
        "note": ""
      },
      {
        "city": "杜塞尔多夫",
        "cityEn": "Dusseldorf",
        "date": "2026-11-01",
        "sunrise": "07:25",
        "sunset": "17:08",
        "daylight": "9h43m",
        "tz": "CET (UTC+1)",
        "note": ""
      },
      {
        "city": "柏林",
        "cityEn": "Berlin",
        "date": "2026-10-11",
        "sunrise": "07:24",
        "sunset": "18:22",
        "daylight": "10h58m",
        "tz": "CEST (UTC+2)",
        "note": ""
      },
      {
        "city": "柏林",
        "cityEn": "Berlin",
        "date": "2026-10-17",
        "sunrise": "07:35",
        "sunset": "18:09",
        "daylight": "10h34m",
        "tz": "CEST (UTC+2)",
        "note": ""
      },
      {
        "city": "柏林",
        "cityEn": "Berlin",
        "date": "2026-10-18",
        "sunrise": "07:37",
        "sunset": "18:07",
        "daylight": "10h30m",
        "tz": "CEST (UTC+2)",
        "note": ""
      },
      {
        "city": "柏林",
        "cityEn": "Berlin",
        "date": "2026-10-25",
        "sunrise": "06:49",
        "sunset": "16:52",
        "daylight": "10h03m",
        "tz": "CET (UTC+1)",
        "note": "夏令时结束"
      },
      {
        "city": "柏林",
        "cityEn": "Berlin",
        "date": "2026-10-31",
        "sunrise": "07:00",
        "sunset": "16:40",
        "daylight": "9h40m",
        "tz": "CET (UTC+1)",
        "note": ""
      },
      {
        "city": "柏林",
        "cityEn": "Berlin",
        "date": "2026-11-01",
        "sunrise": "07:02",
        "sunset": "16:38",
        "daylight": "9h36m",
        "tz": "CET (UTC+1)",
        "note": ""
      },
      {
        "city": "法兰克福",
        "cityEn": "Frankfurt",
        "date": "2026-10-11",
        "sunrise": "07:40",
        "sunset": "18:44",
        "daylight": "11h04m",
        "tz": "CEST (UTC+2)",
        "note": ""
      },
      {
        "city": "法兰克福",
        "cityEn": "Frankfurt",
        "date": "2026-10-17",
        "sunrise": "07:50",
        "sunset": "18:31",
        "daylight": "10h42m",
        "tz": "CEST (UTC+2)",
        "note": ""
      },
      {
        "city": "法兰克福",
        "cityEn": "Frankfurt",
        "date": "2026-10-18",
        "sunrise": "07:52",
        "sunset": "18:29",
        "daylight": "10h38m",
        "tz": "CEST (UTC+2)",
        "note": ""
      },
      {
        "city": "法兰克福",
        "cityEn": "Frankfurt",
        "date": "2026-10-25",
        "sunrise": "07:03",
        "sunset": "17:16",
        "daylight": "10h13m",
        "tz": "CET (UTC+1)",
        "note": "夏令时结束"
      },
      {
        "city": "法兰克福",
        "cityEn": "Frankfurt",
        "date": "2026-10-31",
        "sunrise": "07:13",
        "sunset": "17:05",
        "daylight": "9h52m",
        "tz": "CET (UTC+1)",
        "note": ""
      },
      {
        "city": "法兰克福",
        "cityEn": "Frankfurt",
        "date": "2026-11-01",
        "sunrise": "07:15",
        "sunset": "17:03",
        "daylight": "9h49m",
        "tz": "CET (UTC+1)",
        "note": ""
      },
      {
        "city": "因戈尔施塔特",
        "cityEn": "Ingolstadt",
        "date": "2026-10-11",
        "sunrise": "07:28",
        "sunset": "18:34",
        "daylight": "11h06m",
        "tz": "CEST (UTC+2)",
        "note": ""
      },
      {
        "city": "因戈尔施塔特",
        "cityEn": "Ingolstadt",
        "date": "2026-10-17",
        "sunrise": "07:37",
        "sunset": "18:22",
        "daylight": "10h45m",
        "tz": "CEST (UTC+2)",
        "note": ""
      },
      {
        "city": "因戈尔施塔特",
        "cityEn": "Ingolstadt",
        "date": "2026-10-18",
        "sunrise": "07:39",
        "sunset": "18:21",
        "daylight": "10h42m",
        "tz": "CEST (UTC+2)",
        "note": ""
      },
      {
        "city": "因戈尔施塔特",
        "cityEn": "Ingolstadt",
        "date": "2026-10-25",
        "sunrise": "06:49",
        "sunset": "17:07",
        "daylight": "10h18m",
        "tz": "CET (UTC+1)",
        "note": "夏令时结束"
      },
      {
        "city": "因戈尔施塔特",
        "cityEn": "Ingolstadt",
        "date": "2026-10-31",
        "sunrise": "06:59",
        "sunset": "16:57",
        "daylight": "9h58m",
        "tz": "CET (UTC+1)",
        "note": ""
      },
      {
        "city": "因戈尔施塔特",
        "cityEn": "Ingolstadt",
        "date": "2026-11-01",
        "sunrise": "07:00",
        "sunset": "16:55",
        "daylight": "9h55m",
        "tz": "CET (UTC+1)",
        "note": ""
      },
      {
        "city": "沃尔尼茨",
        "cityEn": "Wornitz",
        "date": "2026-10-11",
        "sunrise": "07:33",
        "sunset": "18:39",
        "daylight": "11h05m",
        "tz": "CEST (UTC+2)",
        "note": ""
      },
      {
        "city": "沃尔尼茨",
        "cityEn": "Wornitz",
        "date": "2026-10-17",
        "sunrise": "07:42",
        "sunset": "18:26",
        "daylight": "10h44m",
        "tz": "CEST (UTC+2)",
        "note": ""
      },
      {
        "city": "沃尔尼茨",
        "cityEn": "Wornitz",
        "date": "2026-10-18",
        "sunrise": "07:44",
        "sunset": "18:24",
        "daylight": "10h41m",
        "tz": "CEST (UTC+2)",
        "note": ""
      },
      {
        "city": "沃尔尼茨",
        "cityEn": "Wornitz",
        "date": "2026-10-25",
        "sunrise": "06:55",
        "sunset": "17:11",
        "daylight": "10h16m",
        "tz": "CET (UTC+1)",
        "note": "夏令时结束"
      },
      {
        "city": "沃尔尼茨",
        "cityEn": "Wornitz",
        "date": "2026-10-31",
        "sunrise": "07:05",
        "sunset": "17:01",
        "daylight": "9h56m",
        "tz": "CET (UTC+1)",
        "note": ""
      },
      {
        "city": "沃尔尼茨",
        "cityEn": "Wornitz",
        "date": "2026-11-01",
        "sunrise": "07:06",
        "sunset": "16:59",
        "daylight": "9h53m",
        "tz": "CET (UTC+1)",
        "note": ""
      }
    ],
    "sunsetNote": "德国 2026 年夏令时 3/29 起、10/25 03:00 结束；日落时间为当地时间；NOAA Solar Calculator 算法，精度约 ±1 分钟",
    "source_urls": [
      "https://www.dwd.de/DE/leistungen/klimadatendeutschland/klimadatendeutschland.html",
      "https://www.dwd.de/DE/wetter/wetterundklima_vorort/_node.html",
      "https://climate.copernicus.eu/",
      "https://www.timeanddate.com/sun/germany/berlin",
      "https://www.timeanddate.com/time/change/germany/berlin"
    ]
  },
  "weekend": {
    "weekend_trips": [
      {
        "id": "cologne-cathedral-oldtown",
        "base_city": "杜塞尔多夫",
        "available_dates": [
          "2026-10-17",
          "2026-10-18",
          "2026-10-31"
        ],
        "title_zh": "科隆：大教堂 + 老城 + 莱茵河畔",
        "subtitle": "从杜塞尔多夫 1 小时直达的世界遗产一日游",
        "theme": "世界遗产大教堂 · 老城啤酒馆 · 莱茵河景",
        "cover": "history",
        "highlight": "科隆大教堂（UNESCO 世界遗产，德国访问量最大的建筑）内部参观自 2026 年 7 月 1 日起收费，登塔 533 级台阶俯瞰莱茵河与老城；老城 4711 香水老店、Früh/Kölsch 啤酒馆、路德维希博物馆与罗马-日耳曼博物馆步行 10 分钟可达。",
        "transport": "杜塞尔多夫 Hbf → 科隆 Hbf：RE/RB 区域慢车（RE1/RE5/RB27 等）约 1 小时，使用 24hTicket NRW 5 Personen 59.80 欧或 Quer-durchs-Land-Ticket；到站即达大教堂正门，全程步行即可，无需买市内票。",
        "one_way_minutes": 60,
        "fare_eur": "24hTicket NRW 5 Personen 59.80 欧（4 人分摊约 15 欧/人）；单程区域票约 15-18 欧/人，4 人同行明显不划算",
        "money_saving_tip": "4 人买一张 24hTicket NRW 5 Personen（59.80 欧）比 4 张单程票便宜一半以上，且 24 小时内可无限次乘坐北威州慢车与市内公交，同一天还能顺路加去杜塞尔多夫或波恩。不要买已废止的 Schönes-Wochenende-Ticket，它 2019 年 6 月 8 日就已取消。",
        "schedule": [
          {
            "time": "09:00",
            "item": "杜塞尔多夫 Hbf 出发，乘 RE 前往科隆（约 1 小时）"
          },
          {
            "time": "10:05",
            "item": "科隆 Hbf 出站，大教堂正门拍照，购内部参观+登塔票"
          },
          {
            "time": "10:30",
            "item": "大教堂内部参观（周日仅 13:30–16:30 开放，周六 10:00–17:45）"
          },
          {
            "time": "11:30",
            "item": "登塔 533 级台阶，塔顶俯瞰莱茵河与老城"
          },
          {
            "time": "12:30",
            "item": "老城午餐：Früh am Dom 或 Brauhaus Sion，尝 Kölsch 啤酒与 Himmel un Ääd"
          },
          {
            "time": "14:00",
            "item": "老城步行：4711 香水店、市政厅、罗马-日耳曼博物馆外观"
          },
          {
            "time": "15:30",
            "item": "莱茵河畔散步 / 霍亨索伦桥爱情锁，或路德维希博物馆"
          },
          {
            "time": "16:30",
            "item": "选购伴手礼：4711 香水、Kölsch 啤酒、巧克力博物馆店"
          },
          {
            "time": "17:30",
            "item": "返程，18:30 前回到杜塞尔多夫（10 月底 17:00–17:30 已天黑）"
          }
        ],
        "tickets": [
          {
            "name": "科隆大教堂内部参观（成人，2026/7/1 起收费）",
            "price_eur": "12（优惠 6）"
          },
          {
            "name": "登塔（成人）",
            "price_eur": "8（优惠 4）"
          },
          {
            "name": "宝库（成人）",
            "price_eur": "8（优惠 4）"
          },
          {
            "name": "登塔+宝库联票（成人）",
            "price_eur": "12（优惠 6）"
          },
          {
            "name": "24hTicket NRW 5 Personen（全团一张）",
            "price_eur": "59.80"
          }
        ],
        "restaurants": [
          {
            "name_zh": "Früh am Dom 啤酒馆",
            "name_en": "Früh am Dom",
            "address": "Am Hof 12-18, 50667 Köln",
            "area": "",
            "price_eur": 0,
            "cuisine": "德式/科隆地方菜",
            "specialty": "Kölsch 啤酒、Himmel un Ääd、科隆酸菜炖肉",
            "hours": "每日约 09:00–24:00（周日营业）",
            "open_sunday": null,
            "reservation_needed": false,
            "source_url": "https://www.frueh-am-dom.de/"
          },
          {
            "name_zh": "Brauhaus Sion 啤酒馆",
            "name_en": "Brauhaus Sion",
            "address": "Unter Taschenmacher 5-7, 50667 Köln",
            "area": "",
            "price_eur": 0,
            "cuisine": "德式/科隆地方菜",
            "specialty": "Kölsch、猪肘、莱茵醋焖牛肉",
            "hours": "每日 11:00–24:00",
            "open_sunday": null,
            "reservation_needed": true,
            "source_url": "https://www.brauhaus-sion.de/"
          }
        ],
        "return_time": "17:30 从科隆 Hbf 出发，18:30 前抵达杜塞尔多夫",
        "intensity": "低（全程平路，步行 4-6 公里，登塔 533 级台阶可选）",
        "rainy_plan": "雨天不受影响：大教堂内部、宝库、路德维希博物馆、罗马-日耳曼博物馆、巧克力博物馆全部为室内；老城啤酒馆午餐可长时间停留；把登塔改到雨停间隙即可。",
        "recommended": true,
        "caution": "① 科隆大教堂 2026 年 7 月 1 日起内部参观开始收费（成人 12 欧），周日内部仅 13:30–16:30 开放（最后入场 16:15），若周日来必须把教堂安排在下午，上午先去博物馆；② 免费进入仅限北门廊祈祷/点蜡烛，不要在免费入口排队误以为可绕票；③ 周日德国商店关门，老城店铺基本不营业，伴手礼要提前在周六或机场/火车站商店购买。",
        "source_url": "https://www.koelner-dom.de/besuch/eintrittspreise"
      },
      {
        "id": "aachen-cathedral",
        "base_city": "杜塞尔多夫",
        "available_dates": [
          "2026-10-17",
          "2026-10-18",
          "2026-10-31"
        ],
        "title_zh": "亚琛：查理曼大帝大教堂 + 温泉老城",
        "subtitle": "德国西部边境的帝国古城，比科隆人少一半",
        "theme": "加冕教堂 · 帝国宝库 · 三国交界老城",
        "cover": "history",
        "highlight": "亚琛大教堂是德国第一处 UNESCO 世界遗产，查理曼大帝 30 余位德意志国王加冕地，八角形穹顶与帝国宝库（Reichsschatz）保存完整；老城市政厅、温泉喷泉（Elisenbrunnen）、三国交界点（德/比/荷）都在步行范围内。",
        "transport": "杜塞尔多夫 Hbf → 亚琛 Hbf：RE1/RE4 直达约 1 小时 25 分；也可 RE 到科隆换 RE9。用 24hTicket NRW 5 Personen（59.80 欧）全团通用。",
        "one_way_minutes": 85,
        "fare_eur": "24hTicket NRW 5 Personen 59.80 欧（4 人分摊约 15 欧/人）",
        "money_saving_tip": "与科隆同属北威州，同一张 24hTicket NRW 可覆盖；若同一天只走亚琛，仍买 5 人团体票而非单人版 39.80 欧，4 人省 99 欧。大教堂内部免费（仅宝库/导览收费）。",
        "schedule": [
          {
            "time": "08:30",
            "item": "杜塞尔多夫 Hbf 出发，RE1 前往亚琛（约 1 小时 25 分）"
          },
          {
            "time": "10:00",
            "item": "亚琛 Hbf 步行至老城（约 15 分钟），Elisenbrunnen 温泉喷泉"
          },
          {
            "time": "10:30",
            "item": "亚琛大教堂内部参观（八角形穹顶、查理曼宝座）"
          },
          {
            "time": "11:30",
            "item": "大教堂宝库 Reichsschatz 参观（帝国冠冕、洛尔施福音书）"
          },
          {
            "time": "12:30",
            "item": "老城午餐：Printen 姜饼店 + 德式小馆"
          },
          {
            "time": "14:00",
            "item": "市政厅（Rathaus）与加冕大厅外观/参观"
          },
          {
            "time": "15:00",
            "item": "Printenbäckerei Klein 买亚琛姜饼 Printen，老城购物街"
          },
          {
            "time": "16:00",
            "item": "视体力前往三国交界点 Dreiländereck 或返回车站"
          },
          {
            "time": "17:00",
            "item": "返程，18:30 前回到杜塞尔多夫（10 月底 17:00–17:30 天黑）"
          }
        ],
        "tickets": [
          {
            "name": "亚琛大教堂内部参观",
            "price_eur": "免费（自愿捐赠建议 1-3 欧）"
          },
          {
            "name": "大教堂宝库 Reichsschatz",
            "price_eur": "约 6（优惠 4）"
          },
          {
            "name": "市政厅 Rathaus 导览",
            "price_eur": "约 5"
          },
          {
            "name": "24hTicket NRW 5 Personen（全团一张）",
            "price_eur": "59.80"
          }
        ],
        "restaurants": [
          {
            "name_zh": "亚琛姜饼老店 Klein",
            "name_en": "Printen- und Gebäckfabrik Klein",
            "address": "Friedrich-Wilhelm-Platz 12, 52062 Aachen",
            "area": "",
            "price_eur": 0,
            "cuisine": "德式糕点/咖啡",
            "specialty": "Aachener Printen 亚琛姜饼（原味/巧克力/坚果）",
            "hours": "周一至周六 09:00–18:30，周日休息",
            "open_sunday": null,
            "reservation_needed": false,
            "source_url": "https://www.printen-klein.de/"
          },
          {
            "name_zh": "亚琛老城德式小馆（Ratskeller 一带）",
            "name_en": "Aachen Ratskeller",
            "address": "Markt 40, 52062 Aachen",
            "area": "",
            "price_eur": 0,
            "cuisine": "德式/莱茵地方菜",
            "specialty": "酸菜炖猪肘、Printen 甜品、地方啤酒",
            "hours": "每日 11:30–22:00",
            "open_sunday": null,
            "reservation_needed": true,
            "source_url": "https://www.ratskeller-aachen.de/"
          }
        ],
        "return_time": "17:00 从亚琛 Hbf 出发，18:30 前回到杜塞尔多夫",
        "intensity": "低（老城内步行 4-5 公里，全程平路）",
        "rainy_plan": "大教堂、宝库、市政厅全部室内；老城商店街有拱廊可逛；雨天可放弃三国交界点，改为在 Printen 老店和咖啡馆久坐。",
        "recommended": true,
        "caution": "① 大教堂内部礼拜时间谢绝游客参观，10 月底周日上午及每日固定礼拜时段可能限流，出发前查官网当日开放时间；② 宝库与市政厅导览班次有限，错过只能外观；③ 周日老城商铺基本关门，Printen 伴手礼要在周六买。",
        "source_url": "https://www.aachenerdom.de/"
      },
      {
        "id": "essen-zeche-zollverein",
        "base_city": "杜塞尔多夫",
        "available_dates": [
          "2026-10-17",
          "2026-10-18",
          "2026-10-31"
        ],
        "title_zh": "埃森：关税同盟煤矿工业区（世界遗产）+ 红点设计博物馆",
        "subtitle": "鲁尔区工业文化地标，室内为主、雨天也不怕",
        "theme": "工业遗产 · 包豪斯建筑 · 设计博物馆",
        "cover": "industrial",
        "highlight": "Zeche Zollverein 是 UNESCO 世界遗产、被誉为「世界上最美的煤矿」，XII 号矿井井架是鲁尔区标志；同园区内有鲁尔博物馆（Ruhr Museum）与红点设计博物馆（Red Dot Design Museum），一整天可全部走完且几乎全在室内。",
        "transport": "杜塞尔多夫 Hbf → 埃森 Hbf：RE/RB 约 30-40 分钟；埃森 Hbf 乘有轨电车 107 路至 Zollverein 站（约 15 分钟）。用 24hTicket NRW 5 Personen（59.80 欧）含市内公交。",
        "one_way_minutes": 55,
        "fare_eur": "24hTicket NRW 5 Personen 59.80 欧（4 人分摊约 15 欧/人）",
        "money_saving_tip": "关税同盟矿区地面区域（含井架、园区步道）免费开放，只有鲁尔博物馆与红点设计博物馆收费；买「鲁尔博物馆+红点」联票比分开买便宜。24hTicket NRW 已含埃森市内电车，不要重复买市内票。",
        "schedule": [
          {
            "time": "09:00",
            "item": "杜塞尔多夫 Hbf 出发，RE 前往埃森（约 35 分钟）"
          },
          {
            "time": "09:45",
            "item": "埃森 Hbf 换乘 107 路电车至 Zollverein"
          },
          {
            "time": "10:15",
            "item": "园区导览：XII 号矿井井架、锅炉房、洗煤厂外观"
          },
          {
            "time": "11:30",
            "item": "鲁尔博物馆 Ruhr Museum（原洗煤厂改造，工业史）"
          },
          {
            "time": "13:00",
            "item": "园区内午餐：Casino Zollverein 或 RUHR.VISITORCENTER 咖啡"
          },
          {
            "time": "14:30",
            "item": "红点设计博物馆 Red Dot Design Museum"
          },
          {
            "time": "16:00",
            "item": "纪念品店：鲁尔区工业设计文创、Zollverein 主题商品"
          },
          {
            "time": "16:45",
            "item": "返回埃森 Hbf，采购伴手礼（Kaufland/Galeria）"
          },
          {
            "time": "17:30",
            "item": "返程，18:15 前回到杜塞尔多夫"
          }
        ],
        "tickets": [
          {
            "name": "Zollverein 园区地面区域",
            "price_eur": "免费"
          },
          {
            "name": "鲁尔博物馆 Ruhr Museum",
            "price_eur": "约 8（优惠 5）"
          },
          {
            "name": "红点设计博物馆",
            "price_eur": "约 9（优惠 5）"
          },
          {
            "name": "24hTicket NRW 5 Personen（全团一张）",
            "price_eur": "59.80"
          }
        ],
        "restaurants": [
          {
            "name_zh": "Casino Zollverein 餐厅",
            "name_en": "Casino Zollverein",
            "address": "Gelsenkirchener Str. 181, 45309 Essen",
            "area": "",
            "price_eur": 0,
            "cuisine": "德式/现代欧陆",
            "specialty": "鲁尔区改良德餐、园区景观位",
            "hours": "周二至周日 12:00–22:00，周一休息",
            "open_sunday": null,
            "reservation_needed": true,
            "source_url": "https://www.casino-zollverein.de/"
          },
          {
            "name_zh": "埃森市中心德式酒馆",
            "name_en": "Brauhaus am Rathaus (Essen)",
            "address": "Kettwiger Str. 25, 45127 Essen",
            "area": "",
            "price_eur": 0,
            "cuisine": "德式/鲁尔地方菜",
            "specialty": "本地啤酒、猪肘、Currywurst",
            "hours": "每日 11:00–23:00",
            "open_sunday": null,
            "reservation_needed": false,
            "source_url": "https://www.essen.de/"
          }
        ],
        "return_time": "17:30 从埃森出发，18:15 前回到杜塞尔多夫",
        "intensity": "低（园区步行 5-7 公里，平坦，室内外结合）",
        "rainy_plan": "这是雨天首选线路：鲁尔博物馆、红点设计博物馆、锅炉房与导览几乎全在室内，只有井架拍照需要短暂外出；建议雨天把导览时间加长，直接待到闭馆再回。",
        "recommended": true,
        "caution": "① 鲁尔博物馆与红点设计博物馆周一闭馆，周日正常开放，务必按当日日期核对官网；② 园区面积大、各馆之间步行 10-15 分钟，10 月底 17:00 后迅速天黑，不要拖到 17:30 后还在园区内步行；③ 埃森 Hbf 至园区电车班次较密但周末稍减，返程预留 15 分钟换乘。",
        "source_url": "https://www.zollverein.de/"
      },
      {
        "id": "dusseldorf-oldtown-medienhafen",
        "base_city": "杜塞尔多夫",
        "available_dates": [
          "2026-10-17",
          "2026-10-18",
          "2026-10-31"
        ],
        "title_zh": "杜塞尔多夫：老城 Altstadt + 媒体港 + 国王大道",
        "subtitle": "零交通成本的本地半日/一日城市线，适合倒时差与雨天",
        "theme": "老城啤酒街 · 媒体港建筑 · 莱茵河畔购物",
        "cover": "city",
        "highlight": "「世界最长吧台」老城 260 余家酒馆与 Altbier 老啤酒；媒体港 Gehry 建筑群、Neuer Zollhof 扭曲立面、Rheinturm 电视塔；国王大道（Königsallee）奢侈品街与日本街（Immermannstraße）亚洲餐饮，全部可用步行+市内交通完成。",
        "transport": "住宿地步行或乘 U-Bahn/S-Bahn 至 Heinrich-Heine-Allee / Königsallee 站；全天用 24hTicket NRW 5 Personen（59.80 欧）覆盖市内交通，也可买市内短途票（Kurzstrecke 约 2 欧）。",
        "one_way_minutes": 15,
        "fare_eur": "步行 0 欧；市内短途票约 2 欧/人；24hTicket NRW 5 Personen 59.80 欧（若还要出城才划算）",
        "money_saving_tip": "纯市内线不必买 24 小时票，老城—媒体港—国王大道全程步行 30-40 分钟；只有要去埃森/科隆等外城时才升级为 24hTicket NRW。老城 Altbier 酒馆多为自酿，价格比旅游区餐厅低。",
        "schedule": [
          {
            "time": "09:30",
            "item": "老城市政厅（Rathaus）与 Marktplatz 广场"
          },
          {
            "time": "10:15",
            "item": "Schlossturm 船舶博物馆与莱茵河畔步道 Rheinpromenade"
          },
          {
            "time": "11:00",
            "item": "老城 Altbier 酒馆巡礼（Zum Uerige / Füchschen），尝 Altbier"
          },
          {
            "time": "12:30",
            "item": "老城午餐：猪肘或 Rheinischer Sauerbraten"
          },
          {
            "time": "14:00",
            "item": "步行/轻轨至媒体港 MedienHafen：Gehry 建筑群、Neuer Zollhof 拍照"
          },
          {
            "time": "15:30",
            "item": "Rheinturm 电视塔观景台（视天气，可选登塔）"
          },
          {
            "time": "16:30",
            "item": "国王大道 Königsallee 购物，或 Immermannstraße 日本街买亚洲食品"
          },
          {
            "time": "17:30",
            "item": "返回酒店（10 月底 17:00–17:30 天黑，晚间不安排户外）"
          }
        ],
        "tickets": [
          {
            "name": "老城步行游览",
            "price_eur": "免费"
          },
          {
            "name": "Schlossturm 船舶博物馆",
            "price_eur": "约 5（优惠 2.50）"
          },
          {
            "name": "Rheinturm 观景台",
            "price_eur": "约 7"
          },
          {
            "name": "市内短途票 Kurzstrecke",
            "price_eur": "约 2"
          }
        ],
        "restaurants": [
          {
            "name_zh": "Zum Uerige 自酿老啤馆",
            "name_en": "Zum Uerige",
            "address": "Berger Str. 1, 40213 Düsseldorf",
            "area": "",
            "price_eur": 0,
            "cuisine": "德式/莱茵地方菜",
            "specialty": "Uerige Altbier 自酿老啤酒、Himmel un Ääd、血肠",
            "hours": "每日 10:00–24:00（周日营业）",
            "open_sunday": null,
            "reservation_needed": false,
            "source_url": "https://www.uerige.de/"
          },
          {
            "name_zh": "日本街拉面/日料（Immermannstraße）",
            "name_en": "Immermannstraße Japanese restaurants",
            "address": "Immermannstr. 35, 40210 Düsseldorf",
            "area": "",
            "price_eur": 0,
            "cuisine": "日式",
            "specialty": "拉面、寿司、日式咖喱（适合想吃亚洲口味的团组）",
            "hours": "多数店 11:30–22:00，部分周一休息",
            "open_sunday": null,
            "reservation_needed": false,
            "source_url": "https://www.duesseldorf-tourismus.de/"
          }
        ],
        "return_time": "17:30 前回到酒店（无需长途返程）",
        "intensity": "低（市内步行 6-8 公里，可随时坐下喝咖啡）",
        "rainy_plan": "全程市内：老城酒馆、Schlossturm 博物馆、Kunstpalast 艺术宫、K21 美术馆均为室内；媒体港拍照可在雨停间隙完成；也可改走 Königsallee 与 Galeria 商场购物避雨。",
        "recommended": true,
        "caution": "① 周日老城酒馆与餐厅仍营业，但商店（国王大道、Galeria、日本街超市）几乎全部关门，购物必须安排在周六；② 10/31 是周六且万圣节前后，老城部分酒馆晚间有活动、人流量大，若当晚要早返程请避开 19:00 后的老城；③ Rheinturm 观景台受天气影响可能能见度差，雨天不必强行登塔。",
        "source_url": "https://www.duesseldorf-tourismus.de/"
      },
      {
        "id": "heidelberg-castle-oldtown",
        "base_city": "法兰克福",
        "available_dates": [
          "2026-10-25"
        ],
        "title_zh": "海德堡：城堡 + 老城 + 哲学家小径",
        "subtitle": "法兰克福出发 1 小时，德国浪漫主义经典一日游",
        "theme": "城堡废墟 · 大学老城 · 内卡河景",
        "cover": "castle",
        "highlight": "海德堡城堡是德国最著名的城堡废墟，世界最大葡萄酒桶（Großes Fass）与德国药房博物馆在宫内；老城 Hauptstraße 步行街、老桥（Alte Brücke）、圣灵大教堂、哲学家小径（Philosophenweg）俯瞰内卡河与城堡全景，秋冬由绿转红的山林尤其上镜。",
        "transport": "法兰克福 Hbf → 海德堡 Hbf：IC/RE 直达约 1 小时（RE 较慢约 1 小时 20 分）；海德堡 Hbf 乘 33 路公交或 5/23 路电车至 Rathaus/Bergbahn 站；城堡可乘 Bergbahn 缆车或步行上山（约 15 分钟台阶）。用 Baden-Württemberg-Ticket 4 人 54 欧。",
        "one_way_minutes": 60,
        "fare_eur": "Baden-Württemberg-Ticket 4 人 54 欧（首人 27 欧，每增 1 人 +9 欧），全天 00:00–次日 03:00 有效",
        "money_saving_tip": "4 人用 Baden-Württemberg-Ticket（54 欧）而不是买 4 张 ICE/IC 全价票（单程可能超过 25 欧/人）；注意该票只含 RB/RE/IRE/S-Bahn 等慢车，若搭 IC/ICE 需另购票。城堡门票含 Bergbahn 缆车往返，比单独买缆车票划算。",
        "schedule": [
          {
            "time": "08:00",
            "item": "法兰克福 Hbf 出发，搭乘直达 RE 前往海德堡"
          },
          {
            "time": "09:20",
            "item": "海德堡 Hbf 换乘公交至老城 Bismarckplatz"
          },
          {
            "time": "09:45",
            "item": "乘 Bergbahn 缆车（或步行）上城堡"
          },
          {
            "time": "10:15",
            "item": "海德堡城堡参观：大酒桶、药房博物馆、露台俯瞰老城"
          },
          {
            "time": "12:00",
            "item": "下山至老城午餐（Hauptstraße 一带德式餐厅）"
          },
          {
            "time": "13:30",
            "item": "老城步行：圣灵大教堂、老桥、铜猴雕像"
          },
          {
            "time": "15:00",
            "item": "哲学家小径 Philosophenweg 俯瞰内卡河与城堡全景"
          },
          {
            "time": "16:15",
            "item": "老城伴手礼：海德堡学生之吻巧克力、德国药房文创"
          },
          {
            "time": "17:00",
            "item": "返回海德堡 Hbf，18:15 前抵达法兰克福"
          }
        ],
        "tickets": [
          {
            "name": "海德堡城堡门票含 Bergbahn 缆车往返",
            "price_eur": "约 10-12（优惠约 6）"
          },
          {
            "name": "城堡庭院（不含宫内）",
            "price_eur": "约 5"
          },
          {
            "name": "Baden-Württemberg-Ticket（4 人）",
            "price_eur": "54"
          }
        ],
        "restaurants": [
          {
            "name_zh": "海德堡老城德式餐厅（Hauptstraße）",
            "name_en": "Zum Roten Ochsen",
            "address": "Hauptstr. 217, 69117 Heidelberg",
            "area": "",
            "price_eur": 0,
            "cuisine": "德式/巴登地方菜",
            "specialty": "百年学生酒馆、猪肘、巴登葡萄酒",
            "hours": "周二至周六 17:00–24:00（白天营业时间请查官网）",
            "open_sunday": null,
            "reservation_needed": true,
            "source_url": "https://www.roter-ochsen.de/"
          },
          {
            "name_zh": "海德堡老桥旁咖啡馆/小馆",
            "name_en": "Café Knösel",
            "address": "Haspelgasse 20, 69117 Heidelberg",
            "area": "",
            "price_eur": 0,
            "cuisine": "德式咖啡馆/甜品",
            "specialty": "海德堡「学生之吻」巧克力与蛋糕",
            "hours": "周日多数时段营业，周一常休",
            "open_sunday": null,
            "reservation_needed": false,
            "source_url": "https://www.cafeknoesel.de/"
          }
        ],
        "return_time": "17:00 从海德堡 Hbf 出发，18:15 前回到法兰克福",
        "intensity": "中（城堡上山台阶+哲学家小径有坡度，步行 6-8 公里）",
        "rainy_plan": "城堡内的药房博物馆、大酒桶厅为室内，可避雨；老城可改逛 Kurpfälzisches 博物馆与大学图书馆；雨中哲学家小径路滑，建议改为老桥对岸平路河畔步道。",
        "recommended": true,
        "caution": "① 10/25 当天德国夏令时结束（03:00 时钟回调 1 小时至 02:00），列车时刻表仍按当地时间运行，返程车次务必以 DB 应用显示的当地时间为准，别按前一天的习惯推算；② 当天约 17:00–17:30 天黑，哲学家小径务必在 16:30 前走完；③ 周日海德堡老城商铺多数关门，仅餐厅咖啡馆营业，伴手礼要提前备好或在机场买。",
        "source_url": "https://www.schloss-heidelberg.de/"
      },
      {
        "id": "ruedesheim-rhine-valley",
        "base_city": "法兰克福",
        "available_dates": [
          "2026-10-25"
        ],
        "title_zh": "吕德斯海姆 + 莱茵河谷：经宾根中转的葡萄园线路",
        "subtitle": "法兰克福 Hbf → RE2 → 宾根 Bingen Hbf（约 1 小时）→ 渡轮/步行至吕德斯海姆",
        "theme": "莱茵河谷世界遗产 · 葡萄园 · 缆车观景",
        "cover": "river",
        "highlight": "莱茵河谷中上游（Oberes Mittelrheintal）是 UNESCO 世界遗产，吕德斯海姆 Drosselgasse 酒巷、画眉鸟巷、尼德瓦尔德纪念碑（Niederwalddenkmal）；缆车（Seilbahn Rüdesheim）2026 年 3 月 21 日至 11 月 1 日运营，单程 7.50 欧、往返 12 欧，从葡萄园上空俯瞰莱茵河。",
        "transport": "2026/7/10–12/12 莱茵河右岸铁路（Troisdorf–Wiesbaden 段）大整修，吕德斯海姆、阿斯曼斯豪森站无列车服务，DB 提供巴士替代（吕德斯海姆–威斯巴登每 2 小时一班）。推荐路线：法兰克福 Hbf → RE2 → 宾根 Bingen Hbf（约 1 小时）→ 渡轮或步行过桥至吕德斯海姆。",
        "one_way_minutes": 60,
        "fare_eur": "Rheinland-Pfalz/Saarland-Ticket 4 人 60 欧；缆车往返 12 欧/人（单程 7.50 欧）；宾根–吕德斯海姆渡轮约 3-4 欧/人",
        "money_saving_tip": "4 人用 Rheinland-Pfalz/Saarland-Ticket（60 欧）覆盖法兰克福—宾根—吕德斯海姆一带慢车，比单独买票省；缆车买单程上行+步行下山比往返更省（省 4.50 欧/人）且沿线葡萄园步道风景好。2026 年 Ring-Tour / Romantik-Tour / 阿斯曼斯豪森吊椅因故障停运，联票不可用，不要买联票。",
        "schedule": [
          {
            "time": "08:00",
            "item": "法兰克福 Hbf 出发，乘 RE2 前往宾根 Bingen Hbf"
          },
          {
            "time": "09:05",
            "item": "宾根 Hbf 转渡轮/步行过桥至吕德斯海姆（注意不是火车）"
          },
          {
            "time": "09:45",
            "item": "吕德斯海姆 Drosselgasse 酒巷与老城漫步"
          },
          {
            "time": "10:30",
            "item": "乘 Seilbahn 缆车（2026/3/21–11/1 运营）上行至尼德瓦尔德"
          },
          {
            "time": "11:15",
            "item": "尼德瓦尔德纪念碑 Niederwalddenkmal，俯瞰莱茵河谷"
          },
          {
            "time": "12:30",
            "item": "下山，午餐：酒庄餐厅或 Drosselgasse 德式小馆"
          },
          {
            "time": "14:00",
            "item": "葡萄酒庄品鉴与购买（雷司令、冰酒 Eiswein、Sekt）"
          },
          {
            "time": "15:30",
            "item": "莱茵河畔步道 / 音乐盒博物馆（Siebenstein 一带）"
          },
          {
            "time": "16:15",
            "item": "渡轮返回宾根，乘 RE2 回法兰克福"
          },
          {
            "time": "17:30",
            "item": "抵法兰克福（10 月底 17:00–17:30 天黑，务必 16:15 前动身）"
          }
        ],
        "tickets": [
          {
            "name": "Seilbahn Rüdesheim 单程",
            "price_eur": "7.50"
          },
          {
            "name": "Seilbahn Rüdesheim 往返",
            "price_eur": "12"
          },
          {
            "name": "宾根–吕德斯海姆渡轮",
            "price_eur": "约 3-4"
          },
          {
            "name": "Rheinland-Pfalz/Saarland-Ticket（4 人）",
            "price_eur": "60"
          }
        ],
        "restaurants": [
          {
            "name_zh": "吕德斯海姆酒巷德式餐厅",
            "name_en": "Drosselgasse restaurants (Rüdesheim)",
            "address": "Drosselgasse 1-15, 65385 Rüdesheim am Rhein",
            "area": "",
            "price_eur": 0,
            "cuisine": "德式/莱茵地方菜",
            "specialty": "雷司令、Sekt 起泡酒、猪肘、Rüdesheimer Kaffee（火焰咖啡）",
            "hours": "多数店 11:00–22:00，周日营业；旅游淡季部分店休息",
            "open_sunday": null,
            "reservation_needed": true,
            "source_url": "https://www.ruedesheim.de/"
          },
          {
            "name_zh": "吕德斯海姆酒庄餐厅",
            "name_en": "Weingut / Vinothek Rüdesheim",
            "address": "Am Rottland / Oberstraße, 65385 Rüdesheim am Rhein",
            "area": "",
            "price_eur": 0,
            "cuisine": "葡萄酒庄/小食",
            "specialty": "Riesling 品鉴、酒庄直购（可退税）",
            "hours": "周二至周日 10:00–18:00，周一常休",
            "open_sunday": null,
            "reservation_needed": true,
            "source_url": "https://www.ruedesheim.de/"
          }
        ],
        "return_time": "16:15 从吕德斯海姆动身（渡轮+RE2），17:30 前回到法兰克福",
        "intensity": "中（老城+缆车+葡萄园步道，步行 5-7 公里含上坡）",
        "rainy_plan": "雨天缆车视野差且山上路滑，建议放弃缆车，改走吕德斯海姆老城酒巷、音乐盒博物馆（Siebenstein）、葡萄酒庄品鉴室内活动；返程巴士/渡轮在雨天可能更拥挤，提前一班出发。",
        "recommended": true,
        "caution": "① 2026/7/10–12/12 莱茵河右岸铁路（Troisdorf–Wiesbaden 段）大整修，覆盖整个行程期，吕德斯海姆与阿斯曼斯豪森站无列车服务，DB 巴士替代每 2 小时才一班，千万不要按旧时刻表买直达吕德斯海姆的火车票；② 莱茵河上的平交道口部分永久关闭，自驾同样受影响；③ 2026 年 Ring-Tour / Romantik-Tour / 阿斯曼斯豪森吊椅因故障停运，缆车联票不可用，只能买单程或往返票；④ 10/25 当天夏令时结束且周日商店关门，酒庄品鉴需提前预约。",
        "source_url": "https://www.ruedesheim.de/"
      },
      {
        "id": "rothenburg-ob-der-tauber-daytrip",
        "base_city": "法兰克福",
        "available_dates": [
          "2026-10-25"
        ],
        "title_zh": "罗滕堡：中世纪小镇一日往返（当天往返过于紧张，不推荐）",
        "subtitle": "法兰克福出发单程约 2.5-3 小时且需多次换乘，10 月底天黑前实际游览不足 4 小时",
        "theme": "中世纪城墙 · 半木屋老城 · 圣诞博物馆",
        "cover": "castle",
        "highlight": "罗滕堡（Rothenburg ob der Tauber）是德国保存最完整的中世纪小镇，城墙步道可环城一周，Plönlein 小广场、中世纪犯罪博物馆、Käthe Wohlfahrt 圣诞博物馆与全年圣诞市场，德语圣诞村氛围最浓。",
        "transport": "法兰克福 Hbf → 罗滕堡：需经 Würzburg 或 Ansbach 换乘 2 次，单程约 2 小时 45 分至 3 小时 15 分（无直达慢车）；当天往返意味着 5.5-6.5 小时在车上。",
        "one_way_minutes": 175,
        "fare_eur": "Baden-Württemberg-Ticket 4 人 54 欧（仅慢车，含换乘），但换乘次数多、容错率低；错过一班可能等 1 小时",
        "money_saving_tip": "4 人仍可用 Baden-Württemberg-Ticket（54 欧）覆盖慢车段，但这条线路的真正成本是时间而非票价：往返 6 小时车程换 3-4 小时游览，性价比全表最低。更划算的替代是把这一天换成海德堡或美因茨，同样 54-60 欧但省 2 小时车程。",
        "schedule": [
          {
            "time": "07:00",
            "item": "法兰克福 Hbf 出发（首班慢车，需极早出发）"
          },
          {
            "time": "09:45",
            "item": "换乘 2 次后抵达罗滕堡车站（已耗时约 2 小时 45 分）"
          },
          {
            "time": "10:15",
            "item": "步行入老城，Marktplatz 市政厅与市议会宴厅钟楼"
          },
          {
            "time": "11:15",
            "item": "Plönlein 小广场 + 城墙步道环城一段"
          },
          {
            "time": "12:30",
            "item": "老城午餐（Schneeball 雪球甜点必试）"
          },
          {
            "time": "13:45",
            "item": "Käthe Wohlfahrt 圣诞村 / 德国圣诞博物馆"
          },
          {
            "time": "15:00",
            "item": "中世纪犯罪博物馆或圣雅各教堂（St. Jakob）"
          },
          {
            "time": "15:45",
            "item": "必须返回车站，赶 16:00 前后班次"
          },
          {
            "time": "19:00",
            "item": "抵达法兰克福（天已全黑，全天户外时间不足 5 小时）"
          }
        ],
        "tickets": [
          {
            "name": "城墙步道",
            "price_eur": "免费（建议捐赠 2 欧）"
          },
          {
            "name": "德国圣诞博物馆",
            "price_eur": "约 5"
          },
          {
            "name": "中世纪犯罪博物馆",
            "price_eur": "约 8"
          },
          {
            "name": "Baden-Württemberg-Ticket（4 人）",
            "price_eur": "54"
          }
        ],
        "restaurants": [
          {
            "name_zh": "罗滕堡老城德式餐厅",
            "name_en": "Restaurant Marktplatz / Zur Höll",
            "address": "Marktplatz 8 / Burggasse 8, 91541 Rothenburg ob der Tauber",
            "area": "",
            "price_eur": 0,
            "cuisine": "德式/法兰肯地方菜",
            "specialty": "Schneeball 雪球甜点、法兰肯葡萄酒、猪肘",
            "hours": "11:00–21:00，周日多数营业；部分老店周一休",
            "open_sunday": null,
            "reservation_needed": true,
            "source_url": "https://www.rothenburg.de/"
          }
        ],
        "return_time": "15:45 必须动身，约 19:00 抵达法兰克福",
        "intensity": "高（往返 6 小时车程+换乘 2 次，老城步行 5 公里）",
        "rainy_plan": "雨天更不建议：老城商铺虽为室内，但往返换乘在雨天拖行李/等车体验差，且错过班次成本极高；雨天应改走法兰克福市内（施泰德博物馆、罗马广场、歌德故居）或改海德堡。",
        "recommended": false,
        "caution": "当天往返过于紧张：法兰克福往返罗滕堡单程约 2 小时 45 分 - 3 小时 15 分且需换乘 2 次，往返 6 小时以上；10 月底 17:00–17:30 即天黑，实际可游览时间不足 4 小时，而周日商店全部关门，圣诞博物馆与 Käthe Wohlfahrt 之外的购物体验为零。若一定要去，建议改为在罗滕堡或纽伦堡住宿一晚，把行程拆成两天。",
        "source_url": "https://www.rothenburg.de/"
      },
      {
        "id": "amsterdam-daytrip-from-dusseldorf",
        "base_city": "杜塞尔多夫",
        "available_dates": [
          "2026-10-17",
          "2026-10-18",
          "2026-10-31"
        ],
        "title_zh": "阿姆斯特丹：杜塞尔多夫一日往返（当天往返过于紧张，不推荐）",
        "subtitle": "单程 2 小时 15 分 - 2 小时 40 分，其中还含 ICE 强制订座，天黑前仅 4 小时可用",
        "theme": "运河城市 · 博物馆 · 荷兰老城",
        "cover": "river",
        "highlight": "阿姆斯特丹运河带（UNESCO 世界遗产）、国立博物馆 Rijksmuseum 与梵高博物馆、约旦区（Jordaan）运河街巷、水坝广场与花市，城市本身极具吸引力。",
        "transport": "杜塞尔多夫 Hbf → 阿姆斯特丹 Centraal：ICE International 直达约 2 小时 15 分（通常需订座，旺季易满），或经 Venlo 的慢车换乘约 3 小时以上。当天往返约 5 小时在车上。",
        "one_way_minutes": 135,
        "fare_eur": "ICE 直达单程 40-60 欧/人（提前买 Sparpreis 可低至 30 欧左右，但不可改签）；4 人往返总价 240-480 欧，远超德国境内任何一日游",
        "money_saving_tip": "德国境内州票（24hTicket NRW 59.80 欧/5 人、Quer-durchs-Land-Ticket 4 人 87 欧）在荷兰境内无效，阿姆斯特丹线拿不到任何 4 人团体优惠；若真要去，改用周末一天往返＋提前 1-2 个月抢 ICE Sparpreis，或干脆改为在阿姆斯特丹住一晚。",
        "schedule": [
          {
            "time": "06:30",
            "item": "杜塞尔多夫 Hbf 出发（必须赶首班 ICE）"
          },
          {
            "time": "08:45",
            "item": "抵达阿姆斯特丹 Centraal，出站即运河区"
          },
          {
            "time": "09:15",
            "item": "水坝广场、王宫外观、花市（Bloemenmarkt）"
          },
          {
            "time": "10:30",
            "item": "国立博物馆 Rijksmuseum（伦勃朗《夜巡》）"
          },
          {
            "time": "13:00",
            "item": "运河边午餐/荷兰小吃（bitterballen、stroopwafel）"
          },
          {
            "time": "14:00",
            "item": "约旦区 Jordaan 运河街巷、九小街（De 9 Straatjes）"
          },
          {
            "time": "15:30",
            "item": "运河游船（1 小时）或梵高博物馆（视预约）"
          },
          {
            "time": "16:30",
            "item": "必须返回 Centraal 车站，赶 17:00 前后 ICE"
          },
          {
            "time": "19:30",
            "item": "抵达杜塞尔多夫（19:00 后，德国已天黑 2 小时）"
          }
        ],
        "tickets": [
          {
            "name": "ICE 杜塞尔多夫–阿姆斯特丹单程",
            "price_eur": "40-60（Sparpreis 约 30 起，需订座）"
          },
          {
            "name": "国立博物馆 Rijksmuseum",
            "price_eur": "约 25"
          },
          {
            "name": "梵高博物馆（需线上预约）",
            "price_eur": "约 24"
          },
          {
            "name": "运河游船",
            "price_eur": "约 18-20"
          }
        ],
        "restaurants": [
          {
            "name_zh": "阿姆斯特丹荷兰小馆（约旦区）",
            "name_en": "Café / Eetcafé in Jordaan",
            "address": "Jordaan, 1015 Amsterdam",
            "area": "",
            "price_eur": 0,
            "cuisine": "荷兰菜/小酒馆",
            "specialty": "bitterballen 炸肉丸、stamppot、stroopwafel 焦糖华夫",
            "hours": "多数 11:00–23:00，周日营业",
            "open_sunday": null,
            "reservation_needed": false,
            "source_url": "https://www.iamsterdam.com/"
          }
        ],
        "return_time": "16:30 必须动身，约 19:30 抵达杜塞尔多夫",
        "intensity": "高（往返 5 小时车程+市区高强度步行 8-10 公里）",
        "rainy_plan": "雨天将被迫全程转为博物馆室内，而 Rijksmuseum/梵高博物馆需提前预约且热门时段售罄，临时改计划几乎必然失败；雨天运河游船视野也差。整体不值得。",
        "recommended": false,
        "caution": "当天往返过于紧张：杜塞尔多夫往返阿姆斯特丹单程 2 小时 15 分（ICE，通常需订座）至 2 小时 40 分，往返 5 小时以上；10 月底 17:00–17:30 天黑，实际可游览时间仅约 4 小时，而任何博物馆延误或 ICE 晚点都会导致无法当日返回（末班车后无替代方案）。且 ICE 属跨国线路，Quer-durchs-Land-Ticket、24hTicket NRW 均无效，4 人总花费 240 欧以上。强烈建议改为科隆或埃森，或专门安排周末在阿姆斯特丹住一晚。",
        "source_url": "https://www.nsinternational.com/"
      }
    ],
    "souvenirs": [
      {
        "name_zh": "双立人 Zwilling 厨具（刀具/锅具）",
        "name_de": "Zwilling J.A. Henckels Messer & Töpfe",
        "category": "送领导客户",
        "price_range": "单把主厨刀 40-120 欧；套装 150-400 欧",
        "where_to_buy": [
          "Zwilling 品牌专卖店（杜塞尔多夫/法兰克福）",
          "Galeria 商场厨具层",
          "Kaufhof/Karstadt",
          "法兰克福机场免税店",
          "Amazon.de"
        ],
        "why": "德国厨具第一品牌，做工与钢材口碑极佳，送领导客户体面且有实用价值；德国本土价格常比国内低 20-40%。",
        "customs_note": "刀具（含厨具刀）必须托运，手提行李严禁携带；建议保留原包装与发票以便退税和海关查验；单件超 5000 元人民币需申报，自用合理数量免税。",
        "source_url": "https://www.zwilling.com/de/"
      },
      {
        "name_zh": "菲仕乐 Fissler 锅具",
        "name_de": "Fissler Töpfe und Pfannen",
        "category": "送领导客户",
        "price_range": "单锅 50-150 欧；套装 200-500 欧",
        "where_to_buy": [
          "Fissler 品牌专卖店",
          "Galeria 商场",
          "Kaufhof/Karstadt",
          "法兰克福机场免税店"
        ],
        "why": "德国高端锅具代表，压力锅与不锈钢锅在商务送礼中辨识度高，做工扎实、保修长。",
        "customs_note": "锅具属普通自用物品，可托运或手提（体积大建议托运）；保留发票以便退税；同类物品数量过多可能被认定为货物。",
        "source_url": "https://www.fissler.com/de/"
      },
      {
        "name_zh": "WMF 厨具与餐具",
        "name_de": "WMF Besteck und Küchenhelfer",
        "category": "送领导客户",
        "price_range": "餐具套装 60-300 欧；小工具 15-40 欧",
        "where_to_buy": [
          "WMF 品牌专卖店",
          "Galeria 商场",
          "Kaufhof/Karstadt",
          "法兰克福机场免税店",
          "WMF 工厂店（Geislingen）"
        ],
        "why": "德国国民厨具品牌，餐具与咖啡器具设计精良、价格梯度大，适合按关系亲疏分档送礼。",
        "customs_note": "餐具可托运或手提；含刀具的组合套装必须托运；保留退税单；入境中国自用合理数量免税，超量需申报。",
        "source_url": "https://www.wmf.com/de/"
      },
      {
        "name_zh": "凌美 Lamy 钢笔",
        "name_de": "Lamy Füllfederhalter",
        "category": "送领导客户",
        "price_range": "Safari 20-30 欧；Studio/Dialog 80-300 欧",
        "where_to_buy": [
          "Lamy 品牌专卖店",
          "Galeria 文具层",
          "Müller 日化/文具店",
          "法兰克福机场免税店",
          "Kaufhof/Karstadt"
        ],
        "why": "德国设计经典钢笔，Safari 系列是人手一支的入门款，Dialog 系列适合送高层；德国售价明显低于国内专柜。",
        "customs_note": "钢笔属普通文具可手提；墨水（液体）单瓶 ≤100ml 才能手提，否则必须托运；保留发票便于退税。",
        "source_url": "https://www.lamy.com/de/"
      },
      {
        "name_zh": "Kaweco 钢笔",
        "name_de": "Kaweco Füllfederhalter",
        "category": "送领导客户",
        "price_range": "Sport 系列 25-60 欧；AL Sport 金属款 70-120 欧",
        "where_to_buy": [
          "Kaweco 品牌专卖店/授权文具店",
          "Galeria 文具层",
          "Müller",
          "独立文具店（Schreibwaren）",
          "法兰克福机场免税店"
        ],
        "why": "德国海德堡老牌钢笔，八角短杆设计复古独特，比 Lamy 更小众有品味，适合送给懂文具的领导。",
        "customs_note": "钢笔可手提；配套墨水瓶等液体单瓶 ≤100ml 才能手提；保留发票退税；礼品包装盒建议保留以证明自用。",
        "source_url": "https://www.kaweco-pen.com/"
      },
      {
        "name_zh": "德国葡萄酒（雷司令 Riesling）",
        "name_de": "Deutscher Riesling / Weißwein",
        "category": "送领导客户",
        "price_range": "日常款 8-20 欧/瓶；名庄/冰酒 30-100 欧以上",
        "where_to_buy": [
          "美因茨/吕德斯海姆酒庄直购（Vinothek）",
          "Kaufland/REWE 超市酒区",
          "Galeria 食品层",
          "法兰克福机场免税店",
          "圣诞市场酒摊"
        ],
        "why": "德国是雷司令故乡，摩泽尔与莱茵高产区品质世界公认；酒庄直购可买到国内见不到的干型（Trocken）与冰酒。",
        "customs_note": "酒精饮料入境中国限额：12 度以上酒精饮料 1500 毫升（约 2 瓶）；烟酒有限额，超额需申报纳税；液体单瓶 ≤100ml 才能手提，整瓶酒必须托运；建议原箱托运防碎。",
        "source_url": "https://www.deutscheweine.de/"
      },
      {
        "name_zh": "Käthe Wohlfahrt 圣诞饰品",
        "name_de": "Käthe Wohlfahrt Weihnachtsschmuck",
        "category": "送领导客户",
        "price_range": "小挂饰 8-20 欧；木制音乐盒/拱灯 40-200 欧",
        "where_to_buy": [
          "Käthe Wohlfahrt 专卖店（罗滕堡总店/法兰克福/科隆）",
          "Rothenburg 圣诞村",
          "圣诞市场（11 月下旬起）",
          "法兰克福机场免税店"
        ],
        "why": "德国圣诞装饰高端品牌，手工木制工艺品带德国原产标签，送领导客户既有节日寓意又有收藏价值。",
        "customs_note": "木制品属普通物品可手提或托运；注意部分木质工艺品（含未处理木材）可能被中国海关要求检疫，建议购买有清漆处理、有品牌包装的成品；玻璃挂饰需防碎包装。",
        "source_url": "https://www.kaethe-wohlfahrt.com/"
      },
      {
        "name_zh": "德国啤酒杯（Stein）",
        "name_de": "Bierstein / Bierkrug",
        "category": "送领导客户",
        "price_range": "普通款 10-25 欧；带盖锡盖/彩绘款 25-80 欧",
        "where_to_buy": [
          "科隆/杜塞尔多夫老城纪念品店",
          "啤酒品牌专卖（Früh、Kölsch）",
          "圣诞市场",
          "Galeria 家居层",
          "法兰克福机场免税店"
        ],
        "why": "德国啤酒文化象征，带锡盖或地区彩绘的 Stein 极具德国味道，价格适中适合批量送人。",
        "customs_note": "陶瓷/玻璃制品可手提或托运，建议托运以免碎裂；若杯内附酒类需按酒类限额；保留发票以备退税。",
        "source_url": "https://www.duesseldorf-tourismus.de/"
      },
      {
        "name_zh": "Doppelherz 双心保健品",
        "name_de": "Doppelherz Nahrungsergänzung",
        "category": "送家人",
        "price_range": "单盒 5-15 欧；套装/大包装 15-35 欧",
        "where_to_buy": [
          "DM",
          "Rossmann",
          "Müller",
          "Kaufland",
          "网上药店（Shop Apotheke）"
        ],
        "why": "德国国民保健品牌，鱼油、辅酶 Q10、关节与眼部营养品种类齐全，价格远低于国内同款，长辈接受度高。",
        "customs_note": "保健品属自用物品，合理数量免税；不要带含违禁成分（如某些减肥/激素类）的产品；保留原包装与中文说明更便于说明用途；数量过多可能被要求申报。",
        "source_url": "https://www.doppelherz.de/"
      },
      {
        "name_zh": "DM 自有品牌 Balea 护肤",
        "name_de": "Balea (dm-Eigenmarke) Pflege",
        "category": "送家人",
        "price_range": "单件 1-10 欧（面霜 3-6 欧，安瓶 1-2 欧/支）",
        "where_to_buy": [
          "DM 门店（德国境内最多）",
          "Rossmann",
          "Müller",
          "网上 dm.de"
        ],
        "why": "德国性价比之王，Balea 面霜、安瓶、面膜单价极低但口碑好，适合大批量带给家人朋友，不心疼预算。",
        "customs_note": "护肤品属自用物品可托运；液体/膏体单瓶 ≤100ml 才能手提，超过必须托运；国内对化妆品个人自用合理数量免税，超量可能被海关征税。",
        "source_url": "https://www.dm.de/balea"
      },
      {
        "name_zh": "Nivea 妮维雅护肤",
        "name_de": "Nivea Pflegeprodukte",
        "category": "送家人",
        "price_range": "单件 3-12 欧；礼盒 15-25 欧",
        "where_to_buy": [
          "DM",
          "Rossmann",
          "Müller",
          "Kaufland",
          "Galeria"
        ],
        "why": "德国本土品牌（汉堡 Beiersdorf），德国版配方与国内版不同，价格约为国内 1/2-1/3，经典蓝罐面霜广受家人欢迎。",
        "customs_note": "膏体/液体单瓶 ≤100ml 才能手提，否则托运；自用合理数量免税；注意保留购物小票以备退税与查验。",
        "source_url": "https://www.nivea.de/"
      },
      {
        "name_zh": "Sennheiser 森海塞尔耳机",
        "name_de": "Sennheiser Kopfhörer",
        "category": "送家人",
        "price_range": "入门款 30-80 欧；中高端 150-400 欧",
        "where_to_buy": [
          "Media Markt",
          "Saturn",
          "Galeria 电器层",
          "Sennheiser 专卖店",
          "法兰克福机场免税店"
        ],
        "why": "德国音频老牌，耳机音质与做工可靠，德国售价常低于国内；给家人尤其学生党很实用。",
        "customs_note": "电子产品可手提或托运；含锂电池的设备必须随身携带（禁止托运）；保留发票以便退税；单件超 5000 元人民币需申报。",
        "source_url": "https://www.sennheiser.com/de-de"
      },
      {
        "name_zh": "德国木制玩具（Haba / Playmobil）",
        "name_de": "Holzspielzeug von Haba / Playmobil",
        "category": "送家人",
        "price_range": "Haba 小件 10-30 欧；Playmobil 套装 15-60 欧",
        "where_to_buy": [
          "Müller 玩具部",
          "Kaufland 玩具区",
          "Galeria 玩具层",
          "专业玩具店（Spielwarengeschäft）",
          "圣诞市场木玩具摊"
        ],
        "why": "德国木制玩具以安全环保著称（Haba 为德国本土品牌），Playmobil 也是德国制造设计，送给有小孩的家人非常合适。",
        "customs_note": "木制玩具可手提或托运；未处理原木制品可能受检疫限制，建议带品牌包装的成品玩具；保留发票。",
        "source_url": "https://www.haba.de/"
      },
      {
        "name_zh": "Ritter Sport 方块巧克力",
        "name_de": "Ritter Sport Schokolade",
        "category": "送朋友同事",
        "price_range": "单块 1.5-3 欧；礼盒/多口味装 10-25 欧",
        "where_to_buy": [
          "Kaufland",
          "REWE",
          "EDEKA",
          "DM/Rossmann",
          "Ritter Sport 工厂店（Waldenbuch）",
          "法兰克福机场免税店"
        ],
        "why": "德国最具辨识度的方块巧克力，口味极多（含德国限定口味），价格便宜、数量多，最适合办公室分发。",
        "customs_note": "巧克力可手提或托运；注意含酒心/含肉馅（极少）口味需谨慎；高温易融化，建议托运并放在行李中间避免阳光直射。",
        "source_url": "https://www.ritter-sport.de/"
      },
      {
        "name_zh": "Milka 妙卡巧克力",
        "name_de": "Milka Schokolade",
        "category": "送家人",
        "price_range": "单块 1-2 欧；大板 2-4 欧",
        "where_to_buy": [
          "Kaufland",
          "REWE",
          "EDEKA",
          "DM",
          "Rossmann",
          "机场免税店"
        ],
        "why": "德国超市日常价极低，德国版口味（如 Alpine Milk）与国内不同，适合大批量采购给家人分享。",
        "customs_note": "巧克力类可携带；含坚果/杏仁口味注意过敏人群；高温易融化建议托运；合理自用数量免税。",
        "source_url": "https://www.milka.de/"
      },
      {
        "name_zh": "Haribo 小熊糖",
        "name_de": "Haribo Gummibärchen",
        "category": "送朋友同事",
        "price_range": "小袋 1-2 欧；大袋/礼盒 3-10 欧",
        "where_to_buy": [
          "Kaufland",
          "REWE",
          "EDEKA",
          "DM",
          "Rossmann",
          "Haribo 工厂店（波恩）",
          "机场免税店"
        ],
        "why": "德国国民软糖，波恩是原产地；德国版口味与包装更多，价格便宜、体积小、耐运输，是送同事的性价比之王。",
        "customs_note": "糖果类可携带；注意不含肉类明胶问题（中国对肉类制品禁入，普通明胶软糖不属肉类制品，但如含肉成分的零食严禁）；合理自用数量免税。",
        "source_url": "https://www.haribo.com/de-de"
      },
      {
        "name_zh": "Lebkuchen 德国姜饼",
        "name_de": "Lebkuchen / Nürnberger Lebkuchen",
        "category": "送家人",
        "price_range": "小盒 3-8 欧；精美铁盒 10-25 欧",
        "where_to_buy": [
          "Kaufland",
          "REWE",
          "EDEKA",
          "圣诞市场（11 月下旬起）",
          "亚琛 Printen 老店",
          "法兰克福机场免税店"
        ],
        "why": "纽伦堡姜饼是德国圣诞传统点心，铁盒装送礼体面；10 月底超市已开始上架圣诞食品，正好赶上行程。",
        "customs_note": "烘焙糕点可携带；表面糖霜/巧克力易碎，建议手提或用衣物包裹；注意部分姜饼含酒精（Weinlebkuchen）需按酒类理解；合理自用免税。",
        "source_url": "https://www.christkindlesmarkt.de/"
      },
      {
        "name_zh": "德国啤酒（瓶装/听装）",
        "name_de": "Deutsches Bier (Flaschen/Dosen)",
        "category": "送朋友同事",
        "price_range": "超市 0.5-2 欧/瓶；精酿/礼盒 10-30 欧",
        "where_to_buy": [
          "Kaufland",
          "REWE",
          "EDEKA",
          "啤酒厂直营店（Früh、Uerige）",
          "啤酒花园",
          "机场免税店"
        ],
        "why": "德国啤酒纯净法（Reinheitsgebot）传统，Kölsch、Altbier、Weizen 各有特色；超市价格极低，适合分送同事。",
        "customs_note": "酒精饮料限额：12 度以上 1500 毫升（约 2 瓶 750ml），12 度以下不受此限但仍属自用范围；烟酒有限额，超额需申报纳税；液体单瓶 ≤100ml 才能手提，啤酒必须托运，且玻璃瓶极易碎需加固包装。",
        "source_url": "https://www.deutscher-bierbrauerbund.de/"
      },
      {
        "name_zh": "德国咖啡（Tchibo / Jacobs）",
        "name_de": "Deutscher Kaffee (Tchibo, Jacobs, Dallmayr)",
        "category": "送朋友同事",
        "price_range": "250g 咖啡豆/粉 4-9 欧；礼盒 10-25 欧",
        "where_to_buy": [
          "Kaufland",
          "REWE",
          "EDEKA",
          "Tchibo 专卖店",
          "DM",
          "Dallmayr 专卖店（慕尼黑）",
          "机场免税店"
        ],
        "why": "Tchibo、Jacobs、Dallmayr 都是德国家喻户晓的咖啡品牌，德国烘焙风味与国内不同，办公室同事接受度高。",
        "customs_note": "咖啡属普通食品可携带；咖啡豆/粉需原包装密封（中国对植物种子类有检疫要求，烘焙咖啡豆一般允许但建议保留商业包装）；合理自用数量免税。",
        "source_url": "https://www.tchibo.de/"
      },
      {
        "name_zh": "Balea 护手霜（伴手礼小件）",
        "name_de": "Balea Handcreme",
        "category": "送朋友同事",
        "price_range": "0.8-3 欧/支",
        "where_to_buy": [
          "DM",
          "Rossmann",
          "Müller"
        ],
        "why": "单价不到 1 欧却好用，是德国旅行最经典的「人手一支」小礼物，适合批量买十几支分送同事。",
        "customs_note": "膏体单支通常 ≤100ml 可手提，但仍建议统一托运；自用合理数量免税；超过个人自用数量可能被认定为代购。",
        "source_url": "https://www.dm.de/balea"
      },
      {
        "name_zh": "德国果酱 / 蜂蜜",
        "name_de": "Marmelade / Honig",
        "category": "送朋友同事",
        "price_range": "2-8 欧/罐；特色蜂蜜 8-20 欧",
        "where_to_buy": [
          "Kaufland",
          "REWE",
          "EDEKA",
          "DM",
          "周末市集（Wochenmarkt）",
          "圣诞市场"
        ],
        "why": "德国果酱含果量高、口味多（樱桃、杏、森林莓），德国森林蜂蜜也很有特色，价格低且包装朴素实在。",
        "customs_note": "果酱（加工果蔬制品）一般可携带，但新鲜果蔬、蛋奶制品禁止入境中国；蜂蜜属动物源性产品，中国海关对入境蜂蜜有严格限制（通常禁止携带），建议不要购买蜂蜜带回；果酱需原厂密封包装。",
        "source_url": "https://www.zoll.de/"
      },
      {
        "name_zh": "DM / Rossmann 日用品（洗发水、牙膏、维生素）",
        "name_de": "Drogerie-Artikel (dm, Rossmann)",
        "category": "自用",
        "price_range": "1-10 欧/件",
        "where_to_buy": [
          "DM",
          "Rossmann",
          "Müller",
          "Kaufland"
        ],
        "why": "德国日化价格全球最低之一，自用囤货最划算：洗发水、牙膏、泡腾片、维生素、创可贴都比国内便宜很多。",
        "customs_note": "液体单瓶 ≤100ml 才能手提，超过必须托运；药品类（非处方）自用少量可带，含处方成分或麻醉类严禁；数量过大可能被认定为商业用途。",
        "source_url": "https://www.dm.de/"
      },
      {
        "name_zh": "德国刀具（自用/家用）",
        "name_de": "Deutsche Messer (Zwilling, Wüsthof, Victorinox)",
        "category": "自用",
        "price_range": "单把 25-120 欧；套装 100-300 欧",
        "where_to_buy": [
          "Zwilling/Wüsthof 专卖店",
          "Galeria 厨具层",
          "Kaufhof/Karstadt",
          "Media Markt/Saturn 厨具区",
          "法兰克福机场免税店"
        ],
        "why": "德国刀具钢材与手感公认最好，自用一把好主厨刀能用十几年，比国内同款便宜 20-40%。",
        "customs_note": "刀具（含厨具刀）必须托运，手提行李严禁携带（哪怕是厨房用刀）；建议原包装+硬盒加固；保留发票以便退税；入境中国自用合理数量免税。",
        "source_url": "https://www.zwilling.com/de/"
      },
      {
        "name_zh": "德国啤酒（自用/住处小酌）",
        "name_de": "Deutsches Bier zum Selbstgenuss",
        "category": "自用",
        "price_range": "0.5-2 欧/瓶（超市）",
        "where_to_buy": [
          "Kaufland",
          "REWE",
          "EDEKA",
          "DM（部分门店）",
          "啤酒厂直营店",
          "啤酒花园"
        ],
        "why": "在德国期间晚上在酒店尝当地 Kölsch、Altbier、Weizen，是理解德国生活最便宜的方式；也可少量带回自饮。",
        "customs_note": "带回中国酒精饮料限额：12 度以上 1500 毫升（约 2 瓶 750ml）；液体必须托运且玻璃瓶易碎；烟酒有限额，超额需申报纳税。",
        "source_url": "https://www.zoll.de/"
      }
    ],
    "taxRefund": [
      "同一家店单笔消费满 50.01 欧即可申请退税（德国法定最低限额），低于此额度不能开退税单；同一商场不同专柜通常分开计算，务必在同一家店/同一张发票内凑够金额。",
      "结账时主动索取退税单（Tax-Free Form / Ausfuhrbescheinigung），并出示护照填写姓名、地址、护照号；没有退税单和原始发票（Rechnung）就无法退税，事后补办基本不可能。",
      "商品必须在购买后 3 个月内随本人带离欧盟，且保持未使用、未拆封、标签完整；已使用的商品海关有权拒绝盖章。",
      "机场流程：先到海关（Zoll）柜台出示商品、发票与退税单，海关查验后在退税单上盖章（Ausfuhrbescheinigung）；盖章后才可去 Global Blue / Planet 等退税公司柜台领现金或办理退卡。",
      "Global Blue（蓝联）与 Planet（原 Premier Tax Free）是德国两大主流退税公司，另有部分商家使用自家或其它代理；不同公司柜台位置与营业时间不同，法兰克福机场需按航站楼找对应柜台。",
      "法兰克福机场旺季（含 10 月商务出行高峰）海关与退税柜台排队时间很长，建议至少提前 3 小时到达机场，先办退税盖章再托运行李（托运前必须让海关看到商品）。",
      "未加盖海关章的退税单无效，无法退税，也无法事后补办；若商品已托运而没先找海关查验，通常就失去退税资格。",
      "退税到账方式：现金退税立即可取但手续费较高、汇率较差；退回信用卡/支付宝到账慢（数周至数月）但比例更高；大额退税建议选择退卡并保留退税单副本编号以便追踪。",
      "德国标准增值税率 19%（食品、书籍等为 7%），退税金额不是 19% 全额返还，退税公司会扣除手续费，实际到手通常为消费额的 8%-14%，具体以退税单显示为准。",
      "刀具、锅具、酒类等商品在海关查验时可能被要求开箱，务必放在托运行李最上层并提前告知海关；酒类退税通常需保持密封原装。",
      "若在欧盟多国购物，只需在离开欧盟的最后一个机场统一办理海关盖章（例如从法兰克福离境就在法兰克福盖章），不要在中间转机国重复排队。"
    ],
    "warnings": [
      "肉类制品严禁携带入境中国：香肠、火腿、肉干、腊肠、肉松、含肉馅食品（含部分德国超市的肉味零食）一律不要购买带回，中国海关对肉类及其制品实施严格禁令，查到将被没收并可能罚款。",
      "刀具（包括双立人/菲仕乐/三叉等厨具刀）必须托运，手提行李严禁携带；机场安检会直接没收，务必放入托运行李并加固包装。",
      "莱茵河右岸铁路 2026/7/10–12/12 大整修（Troisdorf–Wiesbaden 段），覆盖整个行程期：吕德斯海姆（Rüdesheim）、阿斯曼斯豪森站无列车服务，DB 巴士替代每 2 小时才一班；部分平交道口永久关闭，自驾同样受影响。去吕德斯海姆请改走「法兰克福 Hbf → RE2 → 宾根 Bingen Hbf（约 1 小时）→ 渡轮/步行至吕德斯海姆」，不要按旧时刻表买直达火车票。",
      "周日德国商店关门：10/18 与 10/25 两个周日，超市、商场（Galeria、Kaufhof）、品牌专卖店、DM/Rossmann 基本全天不营业，仅加油站便利店、火车站商店、餐厅咖啡馆营业；伴手礼采购必须安排在周六。特别注意科隆大教堂周日内部仅 13:30–16:30 开放（最后入场 16:15），上午去只能看外观。",
      "10 月底德国约 17:00–17:30 天黑，所有户外行程（哲学家小径、城墙步道、莱茵河畔、葡萄园缆车）必须在 16:30 前完成并开始返程。",
      "10/25（周日）当天德国夏令时结束，03:00 时钟回调 1 小时至 02:00；列车与 S-Bahn 按当地时间运行，返程班次务必以 DB 应用显示的当地时间为准，不要按前一天的习惯推算。",
      "2026 年吕德斯海姆缆车（Seilbahn Rüdesheim）3/21–11/1 运营，单程 7.50 欧、往返 12 欧；但 Ring-Tour / Romantik-Tour / 阿斯曼斯豪森吊椅 2026 年因故障停运，联票不可用，只能买单程或往返票。",
      "科隆大教堂 2026 年 7 月 1 日起内部参观收费：成人 12 欧（优惠 6 欧），登塔 8 欧（4 欧），宝库 8 欧（4 欧），登塔+宝库联票 12 欧（6 欧）；免费进入仅限北门廊祈祷/点蜡烛。",
      "已废止/停售票种不要买：Schönes-Wochenende-Ticket 已于 2019/6/8 废止，Hessen-Ticket 已停售，网上旧攻略不要再参考。",
      "可用的团体票：Quer-durchs-Land-Ticket（全德慢车日票，仅 RB/RE/IRE/S-Bahn）1 人 51 欧 / 2 人 63 欧 / 3 人 75 欧 / 4 人 87 欧 / 5 人 99 欧，工作日 9:00–次日 03:00、周末与法定假日 00:00–次日 03:00 有效；24hTicket NRW 5 Personen 59.80 欧（单人版 39.80 欧）；Rheinland-Pfalz/Saarland-Ticket 1–5 人分别 30/40/50/60/70 欧；Baden-Württemberg-Ticket 首人 27 欧、每增 1 人 +9 欧（4 人 54 欧），全天 00:00–次日 03:00 有效。自费买全价 ICE/IC 票远比团体慢车票贵。",
      "液体携带规定：酒、护肤水、墨水等单瓶 ≤100ml 才能手提登机，超过必须托运；整瓶葡萄酒/啤酒必须托运并做防碎包装。",
      "烟酒入境中国有限额（酒精饮料 12 度以上 1500 毫升，香烟限额另计），超额需走红色通道申报纳税，隐瞒被查将面临罚款。",
      "新鲜水果蔬菜、蛋类、奶制品（含奶酪、鲜奶、含肉奶制品）禁止携带入境中国；蜂蜜等动物源性产品同样受严格限制，建议不买。",
      "退税注意：同一家店单笔满 50.01 欧才可开退税单；商品须 3 个月内带离欧盟且未使用；先到机场海关盖章再去退税公司领钱，未盖章的退税单无效；法兰克福机场旺季请提前 3 小时到达。",
      "保健品与药品：Doppelherz 等保健品自用合理数量可带；含处方成分、麻醉类或中国禁用成分的药品严禁携带，购买前核对成分。"
    ]
  }
};
