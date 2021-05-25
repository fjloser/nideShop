// pages/kinds/kinds.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    typeId: 1,
    type: [{
      typeId: 1,
      title: '食品酒水'
    },
      {
        typeId: 2,
        title: '生鲜果蔬'
      },
      {
        typeId: 3,
        title: '美妆护肤'
      },
      {
        typeId: 4,
        title: '个护清洁'
      },
      {
        typeId: 5,
        title: '精品男装'
      },
      {
        typeId: 6,
        title: '精品女装'
      }
    ],
    kinds: [{
        kind: '休闲食品1',
        detailKind: [{
          name: '休闲食品',
          img: 155
        }, {
          name: '膨化食品',
          img: 155
        }, {
          name: '坚果炒货',
          img: 155
        }, {
          name: '肉干熟食',
          img: 155
        }]
      },
      {
        kind: '休闲食品2',
        detailKind: [{
          name: '休闲食品',
          img: 155
        }, {
          name: '膨化食品',
          img: 155
        }, {
          name: '坚果炒货',
          img: 155
        }, {
          name: '肉干熟食',
          img: 155
        }]
      },
      {
        kind: '休闲食品3',
        detailKind: [{
          name: '休闲食品',
          img: 155
        }, {
          name: '膨化食品',
          img: 155
        }, {
          name: '坚果炒货',
          img: 155
        }, {
          name: '肉干熟食',
          img: 155
        }]
      },
    ]
  },
  addCur: function (e) {
    let curid = e.currentTarget.dataset.curid
    this.setData({
      typeId: curid
    })
  },
  bindTap: function(e){
    wx.redirectTo({
      url: '../goodsList/goodsList?typeId=1',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

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