function getRandomColor() {
  let rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}

Page({
  data: {
    /**
        * 页面配置
        */
    winWidth: 0,
    winHeight: 0,
    // tab切换
    currentTab: 0,             url:'https://ugcydzd.qq.com/uwMRJfz-r5jAYaQXGdGnC2_ppdhgmrDlPaRvaV7F2Ic/h056607xye8.m701.mp4?vkey=B280B6E180179CC9575910CA606A7EA4F56B32C3CC129867A2AD815AD66F68843CBA99E5187BC952E01C31BF8A878B8E0EFC420DC9FE771115CDE1367C6A2884F903DC0173D4034B654EA7223EE166F6EB98976DC4BA9F1ACB4B803E63C487471F522EDF69778B79'
  },
  onLoad: function (options) {
     var that = this;
    this.list = [{
      'praise': '收藏',
      'hasChange': false
    }]

    this.setData({
      list: this.list
    })
    var url = 'https://imgcache.qq.com/tencentvideo_v1/playerv3/TPout.swf?max_age=86400&v=20161117&vid=a0337qdn408&auto=0'
    if (url.includes("vid=")) {
      var vid = takeParam(url, "vid");
    }
    function takeParam(url, key) {

      var a = url;
      var b = key;
      try {
        var reg = new RegExp(b + "=[0-9a-zA-z-_]{0,}");
        return reg.exec(a).toString().split("=")[1];
      } catch (e) {
        console.log(e);
        console.log("正则表达式取参数值错误" + key);
      }
      return "";
    }
    wx.request({
      url: "https://vv.video.qq.com/getinfo?vid=" + vid + "&platform=101001&charge=0&otype=json",
      method: 'get',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {

        var dataJson = res.data.replace(/QZOutputJson=/, '') + "qwe";
        var dataJson1 = dataJson.replace(/;qwe/, '');
        var data = JSON.parse(dataJson1);
        var url = data.vl.vi[0].ul.ui[0].url
        var url2 = url.replace(/http/, "https"); //把'http'替换为https
        var fu = data.vl.vi[0].fn
        var fvkey = data.vl.vi[0].fvkey
        var a = url2 + fu + '?vkey=' + fvkey
        that.setData({
          url: a
        })
        console.log(a)
      }
    })
  

    /**
     * 获取系统信息
     */
    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    });
  },
  praiseThis: function (e) {
    var index = e.currentTarget.dataset.curindex;
    if (this.list[index]) {
      var hasChange = this.list[index].hasChange;
      if (hasChange !== undefined) {
        var onum = this.list[index].praise;
        if (hasChange) {
          this.list[index].praise = '收藏';
          this.list[index].hasChange = false;
        } else {
          this.list[index].praise = '收藏';
          this.list[index].hasChange = true;
        }
        this.setData({
          list: this.list
        })
      }
    }
  },
  /**
     * 滑动切换tab
     */
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },
  /**
   * 点击tab切换
   */
  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  onReady: function (res) {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  inputValue: '',
  data: {
    src: '',
    danmuList: [
      {
        text: '第一',
        color: '#ff0000',
        time: 1
      },
      {
        text: '老师真棒，讲的很详细',
        color: '#ff00ff',
        time: 3
      }
    ]
  },
  bindInputBlur: function (e) {
    this.inputValue = e.detail.value
  },
  bindButtonTap: function () {  //视频下载
    var that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front', 'back'],
      success: function (res) {
        that.setData({
          src: res.tempFilePath
        })
      }
    })
  },
  bindSendDanmu: function () {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor(),
    })
  },
  videoErrorCallback: function (e) {
    console.log('视频错误信息:');
    console.log(e.detail.errMsg);
  }
})