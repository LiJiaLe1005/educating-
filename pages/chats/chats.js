Page({
  data: {
    usersList: [
      { name: "清茶薄暮", src: "../../images/toux.jpg", time: "12:00" },
      { name: "冬至暖", src: "../../images/toux1.jpg", time: "15:30" }
      ]
  },
  chat: function () {
    wx.navigateTo({ url: "../chat/chat" })
  }
})
