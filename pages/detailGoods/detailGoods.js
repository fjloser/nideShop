// pages/detailGoods/detailGoods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    siteCache: '',
    site: '成都市',
    selectSizeFlag: false,
    selectSiteFlag: false,
    swiper1: [1,2,3],
    goodsNum: 1,
    goodsNumCache: '',
    goods: {price: 888,
      tag: [{name: '京东超市', title: '一站式囤生活好物'},
      {name: '自营', title: '怡宝 饮用水 纯净水350*24 整项庄'}
    ]},
    goodsCar: [1, 2, 3, 4, 5, 6],
    siteArr: ['ueueyeyyeyy', '四川省邻水县', 2, 3, 4, 5, 6,6,6, 7,4,3,2,14,5,24]
  },
  showSize: function(){
    this.setData({
      selectSizeFlag: !this.data.selectSizeFlag
    })
    this.setData({
      goodsNumCache: this.data.goodsNum
    })
  },
  listenGoodsNum: function(e){
    if(e.detail.value){
      this.setData({
        goodsNumCache: e.detail.value
      })
    }else{
      this.setData({
        goodsNumCache: this.data.goodsNumCache
      })
    }
  },
  addGoodsNum: function(){
    this.setData({
      goodsNumCache: ++this.data.goodsNumCache
    })
  },
  cutGoodsNum: function(){
    this.setData({
      goodsNumCache: --this.data.goodsNumCache
    })
  },
  changeGoodsNum: function(){
    this.setData({
      goodsNum: this.data.goodsNumCache,
      selectSizeFlag: !this.data.selectSizeFlag
    })
  },
  numAndGoodsCar: function(){
    this.changeGoodsNum()
    this.addGoodsCar()
  },
  showSite: function(){
    this.setData({
      selectSiteFlag: !this.data.selectSiteFlag
    })
  },
  radioChange: function(e){
    console.log(e)
    console.log(8888)
    this.setData({
      siteCache: e.detail.value
    })
  },
  changeSite: function(){
    this.setData({
      selectSiteFlag: !this.data.selectSiteFlag
    })
    this.setData({
      site: this.data.siteCache
    })
  },
  /*add to goodsCar*/
  addGoodsCar: function(){
    console.log(1)
  },
  bindTap: function(){
    wx.navigateTo({
      url: '/pages/order/order',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      goodsNumCache: this.data.goodsNum
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