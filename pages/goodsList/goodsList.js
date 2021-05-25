// pages/goodsList/goodsList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navigationHeight: '',
    statusBarHeight: '',
    goods: [{title: '怡宝 饮用水纯净水350ml*24整装箱', nowPrice: 30.90, comment: '2万+条评论 99%好评', keyWords: ['2L以上', '365日', '整箱装'], shopName: "拉梅拉怡宝", tag: ['自营', '京东超市']},
    {title: '怡宝 饮用水纯净水350ml*24整装箱', nowPrice: 30.90, comment: '2万+条评论 99%好评', keyWords: ['2L以上', '365日', '整箱装'], shopName: "拉梅拉怡宝", tag: ['自营', '京东超市']},{title: '怡宝 饮用水纯净水350ml*24整装箱', nowPrice: 30.90, comment: '2万+条评论 99%好评', keyWords: ['2L以上', '365日', '整箱装'], shopName: "拉梅拉怡宝", tag: ['自营', '京东超市']},
    {title: '怡宝 饮用水纯净水350ml*24整装箱', nowPrice: 30.90, comment: '2万+条评论 99%好评', keyWords: ['2L以上', '365日', '整箱装'], shopName: "拉梅拉怡宝", tag: ['自营', '京东超市']},
    {title: '怡宝 饮用水纯净水350ml*24整装箱', nowPrice: 30.90, comment: '2万+条评论 99%好评', keyWords: ['2L以上', '365日', '整箱装'], shopName: "拉梅拉怡宝", tag: ['自营', '京东超市']}],
  },

  bindTap: function(){
    console.log(22)
    wx.navigateTo({
      url: '/pages/detailGoods/detailGoods',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      success: (result) => {
        console.log(result)
        this.setData({
          statusBarHeight: result.statusBarHeight
        })
      },
    })
    let menuMes = wx.getMenuButtonBoundingClientRect()
    console.log(menuMes)
    let menuHeight = menuMes.height + 2*(menuMes.top - this.data.statusBarHeight)
    this.setData({
      navigationHeight: menuHeight
    })
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