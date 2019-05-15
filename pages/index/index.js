//index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../icon/000.jpg',
      '../../icon/001.jpg',
      '../../icon/002.jpg'
    ],
    indicatorDots: true,
    autoplay: true,    
    interval: 5000,
    duration: 1000,
    vertical: true,
    "count": 20,
    "start": 0,
    "total": 14,

  },

  /**
   * 生命周期函数--监听页面加载
   */
   onLoad: function (options) {
  //   console.log("ok");
    var that = this;
    wx.request({
      url: 'https://wabxq.github.io/index.json',
      success: function (res) {
        that.setData({
          subjects: res.data.subjects
        })
      }
    })
  }
})