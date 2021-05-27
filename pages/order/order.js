// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    price: '',
    showSite: false,
    shoppingCarArr: [],
    siteCache: '',
    site: {name: 'fj', phone: 12333, detailed: 'jeheeyheu'},
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
    console.log(e)
    let index = +e.detail.value
    this.setData({
      siteCache: this.data.siteArr[index]
    })
  },
  weiXinPay(){
    // for(let i = 0; i < this.data.goods.length; i++){
    //   this.data.shoppingCarArr.push(this.data.)
    // }
    this.data.goods.forEach((ele, index) => {
      console.log(ele.shopping_car_id)
      this.data.shoppingCarArr.push(ele.shopping_car_id)
    });
    console.log( typeof this.data.site.address_id)
    wx.request({
      method: 'post',
      url: 'http://api_devs.wanxikeji.cn/api/generateOrder',
      data: {
        token:  wx.getStorageSync('token'),
        address_id: this.data.site.address_id,
        money: this.data.price,
        shopping_car_ids: this.data.shoppingCarArr,
      },
      success: res => {
        console.log(res, '生成订单')
        wx.requestPayment({
          nonceStr: res.data.data.nonce_str,
          package: 'prepay_id=' + res.data.data.prepay_id,
          paySign: res.data.data.paySign,
          signType: 'MD5',
          timeStamp: res.data.data.timeStamp,
          success: res => {
            wx.redirectTo({
              url: '/pages/complete/complete',
            })
          },
          fail: res => {
            console.log(res, '失败')
          }
        })
      }
    })


  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.request({
    //   method: 'post',
    //   url: 'http://api_devs.wanxikeji.cn/api/userAddressAddModify',
    //   data: {
    //     token: wx.getStorageSync('token'),
    //     phone: '15082671712',
    //     procince: '四川省',
    //     city: '广安市',
    //     area: '邻水县',
    //     name: 'fj',
    //     detailed: '四川省邻水县天黑黑浑噩'
    //   },
    //   success: res => {
    //     console.log(res)
    //   }
    // })

    wx.request({
      method: 'POST',
      url: 'http://api_devs.wanxikeji.cn/api/userAddressList',
      data: {
        token: wx.getStorageSync('token')
      },
      success: res => {
        console.log(res)
        this.setData({
          siteArr: res.data.data,
          site: res.data.data[0]
        })
      }
    })
    wx.request({
      method: 'post',
      url: 'http://api_devs.wanxikeji.cn/api/orderList',
      data: {
        token: wx.getStorageSync('token')
      },
      success: res => {
        console.log(res, 'yyyyyeyeyey')
      }
    })
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