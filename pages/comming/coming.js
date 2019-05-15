var num=0;
Page({
  /** 
   * 页面的初始数据 
   */
  data: {
    viewco:'#000',
    orientationList: [
      { id: "01", region: "公开课" },
      { id: "02", region: "零基础" },
      { id: "03", region: "入门" },
      { id: "04", region: "进阶" },
      { id: "05", region: "精英" },
      { id: "06", region: "其他" }
    ],
    act_addList: [
      {
        id: "01", region: "公开课",
        city: [
          {
            "rating": {
              "max": 10,
              "average": 8.5,
              "stars": "45",
              "min": 0
            },
            "genres": [
              "PHP"
            ],
            "title": "PHP基础教学",
            "word": "PHP是一种通用开源脚本语言",
            "collect_count": 12520,
            "images": {
              "medium": "../../icon/007.jpg"
            },
          },
          {
            "rating": {
              "max": 10,
              "average": 5,
              "stars": "25",
              "min": 0
            },
            "genres": [
              "Node.js"
            ],
            "title": "Node.js教学",
            "word": "Node.js是一个Javascript运行环境",
            "collect_count": 1520,
            "images": {
              "medium": "../../icon/008.jpg"
            },
          },
          {
            "rating": {
              "max": 10,
              "average": 5.8,
              "stars": "30",
              "min": 0
            },
            "genres": [
              "Java"
            ],
            "title": "Java进阶案例教程",
            "word": "深入讲解Java技术的高级特性",
            "collect_count": 122554,
            "images": {
              "medium": "../../icon/009.jpg"
            },
          },
          {
            "rating": {
              "max": 10,
              "average": 7,
              "stars": "35",
              "min": 0
            },
            "genres": [
              "Java Web",
            ],
            "title": "Java Web入门",
            "word": "Java Web是用Java技术来解决相关web互联网领域的技术总和",
            "collect_count": 4168,
            "images": {
              "medium": "../../icon/010.jpg"
            },
          },
          {
            "rating": {
              "max": 10,
              "average": 7,
              "stars": "35",
              "min": 0
            },
            "genres": [
              "Javascript",
            ],
            "title": "Javascript进阶",
            "word": "JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言",
            "collect_count": 4168,
            "images": {
              "medium": "../../icon/019.jpg"
            },
          },
          {
            "rating": {
              "max": 10,
              "average": 6,
              "stars": "30",
              "min": 0
            },
            "genres": [
              "综合",
            ],
            "title": "语言之间的综合教学",
            "word": "语言与语言之间有许多的共性与不同",
            "collect_count": 43456,
            "images": {
              "medium": "../../icon/012.png"
            },
          },
        ]
      },
      {
        id: "02", region: "零基础",
        city: [{
          "rating": {
            "max": 10,
            "average": 8.5,
            "stars": "45",
            "min": 0
          },
          "genres": [
            "PHP"
          ],
          "title": "PHP基础教学",
          "word": "PHP是一种通用开源脚本语言",
          "collect_count": 12520,
          "images": {
            "medium": "../../icon/007.jpg"
          },
        },
        {
          "rating": {
            "max": 10,
            "average": 5,
            "stars": "25",
            "min": 0
          },
          "genres": [
            "Node.js"
          ],
          "title": "Node.js教学",
          "word": "Node.js是一个Javascript运行环境",
          "collect_count": 1520,
          "images": {
            "medium": "../../icon/008.jpg"
          },
        },
        {
          "rating": {
            "max": 10,
            "average": 5.8,
            "stars": "30",
            "min": 0
          },
          "genres": [
            "Java"
          ],
          "title": "Java进阶案例教程",
          "word": "深入讲解Java技术的高级特性",
          "collect_count": 122554,
          "images": {
            "medium": "../../icon/009.jpg"
          },
        },
        {
          "rating": {
            "max": 10,
            "average": 7,
            "stars": "35",
            "min": 0
          },
          "genres": [
            "Java Web",
          ],
          "title": "Java Web入门",
          "word": "Java Web是用Java技术来解决相关web互联网领域的技术总和",
          "collect_count": 4168,
          "images": {
            "medium": "../../icon/010.jpg"
          },
        },
        {
          "rating": {
            "max": 10,
            "average": 7,
            "stars": "35",
            "min": 0
          },
          "genres": [
            "Javascript",
          ],
          "title": "Javascript进阶",
          "word": "JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言",
          "collect_count": 4168,
          "images": {
            "medium": "../../icon/019.jpg"
          },
        },
        {
          "rating": {
            "max": 10,
            "average": 6,
            "stars": "30",
            "min": 0
          },
          "genres": [
            "综合",
          ],
          "title": "语言之间的综合教学",
          "word": "语言与语言之间有许多的共性与不同",
          "collect_count": 43456,
          "images": {
            "medium": "../../icon/012.png"
          },
        },
        ]
      },
      {
        id: "03", region: "入门",
        city: [{
          "rating": {
            "max": 10,
            "average": 8.5,
            "stars": "45",
            "min": 0
          },
          "genres": [
            "PHP"
          ],
          "title": "PHP基础教学",
          "word": "PHP是一种通用开源脚本语言",
          "collect_count": 12520,
          "images": {
            "medium": "../../icon/007.jpg"
          },
        },
        {
          "rating": {
            "max": 10,
            "average": 5,
            "stars": "25",
            "min": 0
          },
          "genres": [
            "Node.js"
          ],
          "title": "Node.js教学",
          "word": "Node.js是一个Javascript运行环境",
          "collect_count": 1520,
          "images": {
            "medium": "../../icon/008.jpg"
          },
        },
        {
          "rating": {
            "max": 10,
            "average": 5.8,
            "stars": "30",
            "min": 0
          },
          "genres": [
            "Java"
          ],
          "title": "Java进阶案例教程",
          "word": "深入讲解Java技术的高级特性",
          "collect_count": 122554,
          "images": {
            "medium": "../../icon/009.jpg"
          },
        },
        {
          "rating": {
            "max": 10,
            "average": 7,
            "stars": "35",
            "min": 0
          },
          "genres": [
            "Java Web",
          ],
          "title": "Java Web入门",
          "word": "Java Web是用Java技术来解决相关web互联网领域的技术总和",
          "collect_count": 4168,
          "images": {
            "medium": "../../icon/010.jpg"
          },
        },
        {
          "rating": {
            "max": 10,
            "average": 7,
            "stars": "35",
            "min": 0
          },
          "genres": [
            "Javascript",
          ],
          "title": "Javascript进阶",
          "word": "JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言",
          "collect_count": 4168,
          "images": {
            "medium": "../../icon/019.jpg"
          },
        },
        {
          "rating": {
            "max": 10,
            "average": 6,
            "stars": "30",
            "min": 0
          },
          "genres": [
            "综合",
          ],
          "title": "语言之间的综合教学",
          "word": "语言与语言之间有许多的共性与不同",
          "collect_count": 43456,
          "images": {
            "medium": "../../icon/012.png"
          },
        },]
      },
      {
        id: "04", region: "进阶",
        city: [
          {
            "rating": {
              "max": 10,
              "average": 8.5,
              "stars": "45",
              "min": 0
            },
            "genres": [
              "PHP"
            ],
            "title": "PHP基础教学",
            "word": "PHP是一种通用开源脚本语言",
            "collect_count": 12520,
            "images": {
              "medium": "../../icon/007.jpg"
            },
          },
          {
            "rating": {
              "max": 10,
              "average": 5,
              "stars": "25",
              "min": 0
            },
            "genres": [
              "Node.js"
            ],
            "title": "Node.js教学",
            "word": "Node.js是一个Javascript运行环境",
            "collect_count": 1520,
            "images": {
              "medium": "../../icon/008.jpg"
            },
          },
          {
            "rating": {
              "max": 10,
              "average": 5.8,
              "stars": "30",
              "min": 0
            },
            "genres": [
              "Java"
            ],
            "title": "Java进阶案例教程",
            "word": "深入讲解Java技术的高级特性",
            "collect_count": 122554,
            "images": {
              "medium": "../../icon/009.jpg"
            },
          },
          {
            "rating": {
              "max": 10,
              "average": 7,
              "stars": "35",
              "min": 0
            },
            "genres": [
              "Java Web",
            ],
            "title": "Java Web入门",
            "word": "Java Web是用Java技术来解决相关web互联网领域的技术总和",
            "collect_count": 4168,
            "images": {
              "medium": "../../icon/010.jpg"
            },
          },
          {
            "rating": {
              "max": 10,
              "average": 7,
              "stars": "35",
              "min": 0
            },
            "genres": [
              "Javascript",
            ],
            "title": "Javascript进阶",
            "word": "JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言",
            "collect_count": 4168,
            "images": {
              "medium": "../../icon/019.jpg"
            },
          },
          {
            "rating": {
              "max": 10,
              "average": 6,
              "stars": "30",
              "min": 0
            },
            "genres": [
              "综合",
            ],
            "title": "语言之间的综合教学",
            "word": "语言与语言之间有许多的共性与不同",
            "collect_count": 43456,
            "images": {
              "medium": "../../icon/012.png"
            },
          },
        ]
      },
      {
        id: "05", region: "精英",
        city: [{
          "rating": {
            "max": 10,
            "average": 8.5,
            "stars": "45",
            "min": 0
          },
          "genres": [
            "PHP"
          ],
          "title": "PHP基础教学",
          "word": "PHP是一种通用开源脚本语言",
          "collect_count": 12520,
          "images": {
            "medium": "../../icon/007.jpg"
          },
        },
        {
          "rating": {
            "max": 10,
            "average": 5,
            "stars": "25",
            "min": 0
          },
          "genres": [
            "Node.js"
          ],
          "title": "Node.js教学",
          "word": "Node.js是一个Javascript运行环境",
          "collect_count": 1520,
          "images": {
            "medium": "../../icon/008.jpg"
          },
        },
        {
          "rating": {
            "max": 10,
            "average": 5.8,
            "stars": "30",
            "min": 0
          },
          "genres": [
            "Java"
          ],
          "title": "Java进阶案例教程",
          "word": "深入讲解Java技术的高级特性",
          "collect_count": 122554,
          "images": {
            "medium": "../../icon/009.jpg"
          },
        },
        {
          "rating": {
            "max": 10,
            "average": 7,
            "stars": "35",
            "min": 0
          },
          "genres": [
            "Java Web",
          ],
          "title": "Java Web入门",
          "word": "Java Web是用Java技术来解决相关web互联网领域的技术总和",
          "collect_count": 4168,
          "images": {
            "medium": "../../icon/010.jpg"
          },
        },
        {
          "rating": {
            "max": 10,
            "average": 7,
            "stars": "35",
            "min": 0
          },
          "genres": [
            "Javascript",
          ],
          "title": "Javascript进阶",
          "word": "JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言",
          "collect_count": 4168,
          "images": {
            "medium": "../../icon/019.jpg"
          },
        },
        {
          "rating": {
            "max": 10,
            "average": 6,
            "stars": "30",
            "min": 0
          },
          "genres": [
            "综合",
          ],
          "title": "语言之间的综合教学",
          "word": "语言与语言之间有许多的共性与不同",
          "collect_count": 43456,
          "images": {
            "medium": "../../icon/012.png"
          },
        },]
      },
      {
        id: "06", region: "其他",
        city: [{
          "rating": {
            "max": 10,
            "average": 8.5,
            "stars": "45",
            "min": 0
          },
          "genres": [
            "PHP"
          ],
          "title": "PHP基础教学",
          "word": "PHP是一种通用开源脚本语言",
          "collect_count": 12520,
          "images": {
            "medium": "../../icon/007.jpg"
          },
        },
        {
          "rating": {
            "max": 10,
            "average": 5,
            "stars": "25",
            "min": 0
          },
          "genres": [
            "Node.js"
          ],
          "title": "Node.js教学",
          "word": "Node.js是一个Javascript运行环境",
          "collect_count": 1520,
          "images": {
            "medium": "../../icon/008.jpg"
          },
        },
        {
          "rating": {
            "max": 10,
            "average": 5.8,
            "stars": "30",
            "min": 0
          },
          "genres": [
            "Java"
          ],
          "title": "Java进阶案例教程",
          "word": "深入讲解Java技术的高级特性",
          "collect_count": 122554,
          "images": {
            "medium": "../../icon/009.jpg"
          },
        },
        {
          "rating": {
            "max": 10,
            "average": 7,
            "stars": "35",
            "min": 0
          },
          "genres": [
            "Java Web",
          ],
          "title": "Java Web入门",
          "word": "Java Web是用Java技术来解决相关web互联网领域的技术总和",
          "collect_count": 4168,
          "images": {
            "medium": "../../icon/010.jpg"
          },
        },
        {
          "rating": {
            "max": 10,
            "average": 7,
            "stars": "35",
            "min": 0
          },
          "genres": [
            "Javascript",
          ],
          "title": "Javascript进阶",
          "word": "JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言",
          "collect_count": 4168,
          "images": {
            "medium": "../../icon/019.jpg"
          },
        },
        {
          "rating": {
            "max": 10,
            "average": 6,
            "stars": "30",
            "min": 0
          },
          "genres": [
            "综合",
          ],
          "title": "语言之间的综合教学",
          "word": "语言与语言之间有许多的共性与不同",
          "collect_count": 43456,
          "images": {
            "medium": "../../icon/012.png"
          },
        },]
      },
    ],
    toView: 'inToView01',
  },
  scrollToViewFn: function (e) {
    var _id = e.target.dataset.id;
    this.setData({
      toView: 'inToView' + _id
    })



    console.log(this.data.toView)
  },

  onLoad: function (options) {
  }
}) 