// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    price: '',
    showSite: false,
    siteCache: '',
    site: '成都市',
    siteArr: ['ueueyeyyeyy', '四川省邻水县', 2, 3, 4, 5, 6, 6, 6, 7, 4, 3, 2, 14, 5, 24],
    goods: [{title: '怡宝 饮用水纯净水350ml*24整装箱ytttttt就ttttt就', price: 8888, size: 'jeuyhdhh+siueiueu', number: 1}]
  },
  /*site*/
  openSite: function () {
    this.setData({
      showSite: true
    })
  },
  closeSite: function () {
    this.setData({
      showSite: false
    })
  },
  selectSite: function () {
    this.setData({
      showSite: false
    })
    this.setData({
      site: this.data.siteCache
    })
  },
  radioChange: function (e) {
    this.setData({
      siteCache: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      goods: JSON.parse(options.shoppingCar),
      price: options.allPrice
    })
    // this.data.goods = JSON.parse(options.shoppingCar)
    console.log(this.data.goods)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})