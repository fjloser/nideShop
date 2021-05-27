// pages/detailGoods/detailGoods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showGoods: {},
    goodId: '',
    selectSize: '',
    selectSku: [],
    sku: [],
    form: {

    },

    title: '',

    siteCache: '',
    site: '成都市',
    selectSizeFlag: false,
    selectSiteFlag: false,
    swiper1: [],
    curSwiper: 1,
    goodsNum: 1,
    goodsNumCache: '',
    goods: {
      price: 888,
      tag: [{
          name: '京东超市',
          title: '一站式囤生活好物'
        },
        {
          name: '自营',
          title: '怡宝 饮用水 纯净水350*24 整项庄'
        }
      ]
    },
    goodsCar: [],
    siteArr: ['ueueyeyyeyy', '四川省邻水县', 2, 3, 4, 5, 6, 6, 6, 7, 4, 3, 2, 14, 5, 24]
  },
  showSize: function () {
    this.setData({
      selectSizeFlag: !this.data.selectSizeFlag
    })
    this.setData({
      goodsNumCache: this.data.goodsNum
    })
  },
  swiperChange(e) {
    this.setData({
      curSwiper: e.detail.current + 1
    })
  },
  /*输入数量*/
  listenGoodsNum: function (e) {
    if (e.detail.value) {
      this.setData({
        goodsNumCache: e.detail.value
      })
    } else {
      this.setData({
        goodsNumCache: this.data.goodsNumCache
      })
    }
  },
  /*数量改变*/
  addGoodsNum: function () {
    this.setData({
      goodsNumCache: ++this.data.goodsNumCache
    })
  },
  cutGoodsNum: function () {
    this.setData({
      goodsNumCache: --this.data.goodsNumCache
    })
  },
  changeGoodsNum: function () {
    this.setData({
      goodsNum: this.data.goodsNumCache,
      selectSizeFlag: !this.data.selectSizeFlag
    })
  },
  /*改变数量并加入购物车*/
  numAndGoodsCar: function () {
    this.changeGoodsNum()
    this.addGoodsCar()
  },
  showSite: function () {
    this.setData({
      selectSiteFlag: !this.data.selectSiteFlag
    })
  },
  radioChange: function (e) {
    console.log(e)
    console.log(8888)
    this.setData({
      siteCache: e.detail.value
    })
  },
  changeSite: function () {
    this.setData({
      selectSiteFlag: !this.data.selectSiteFlag
    })
    this.setData({
      site: this.data.siteCache
    })
  },
  selectSku(e) {
    console.log(e)
    let type = e.currentTarget.dataset.type
    let index = e.currentTarget.dataset.index
    console.log(type, index)
    let push = 'selectSku[' + type + ']'
    console.log(this.data.sku[type].sku_size[index].size)
    // if()
    this.setData({
      [push]: this.data.sku[type].sku_size[index].size
    })
    console.log(this.data.selectSku)
  },
  /*add to goodsCar*/
  getForm() {
    let goodId = "form.goodId"
    let num = 'form.size'
    let site = 'form.site'
    let price = 'form.price'
    let allPrice = 'form.allPrice'
    let sku = 'form.sku'
    this.setData({
      [goodId]: this.data.goodId,
      [num]: this.data.goodsNum,
      [site]: this.data.site,
      [price]: this.data.showGoods.price,
      [allPrice]: this.data.goodsNum * this.data.showGoods.price,
      [sku]: this.data.sku
    })
  },
  addGoodsCar: function () {
    console.log(this.data.goodsNum * this.data.showGoods.price)
    wx.request({
      method: 'post',
      url: 'http://api_devs.wanxikeji.cn/api/shoppingCarAddModify',
      data: {
        token: wx.getStorageSync('token'),
        good_id: parseInt(this.data.goodId),
        num: this.data.goodsNum,
        price: this.data.showGoods.price,
        money: this.data.goodsNum * this.data.showGoods.price,
        sku: JSON.stringify(this.data.selectSku),
      },
      success: res => {
        wx.showToast({
          title: '成功加入购物车',
          icon: 'success',
          duration: 1500
        })
        wx.request({
          method: 'post',
          url: 'http://api_devs.wanxikeji.cn/api/shoppingCarList',
          /*购物车列表*/
          data: {
            token: wx.getStorageSync('token')
          },
          success: res => {
            this.setData({
              goodsCar: res.data.data.data
            })
          }
        })
        // alert('添加成功')
      }
    })
    console.log(1)
  },
  bindTap: function () {
    wx.navigateTo({
      url: '/pages/order/order',
    })
  },
  navtoGoods: function () {
    wx.switchTab({
      url: '/pages/goods/goods'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      goodId: options.goodId
    })
    wx.request({
      method: 'post',
      url: 'http://api_devs.wanxikeji.cn/api/goodInfo',
      data: {
        good_id: this.data.goodId
      },
      success: res => {
        console.log(res.data.data)
        this.setData({
          showGoods: res.data.data,
        })
        console.log(JSON.parse(this.data.showGoods.info[0].edition))
        this.setData({
          swiper1: JSON.parse(this.data.showGoods.info[0].imgs),
          title: JSON.parse(this.data.showGoods.info[0].info),
          sku: JSON.parse(JSON.parse(this.data.showGoods.info[0].edition))
        })
        for (let i = 0; i < this.data.sku.length; i++) {
          let index = 'selectSku[' + i + ']'
          this.setData({
            [index]: this.data.sku[i].sku_size[0].size
          })
        }
      }
    })
    // wx.request({
    //   method: 'post',
    //   url: 'http://api_devs.wanxikeji.cn/api/shoppingCarList',
    //   data: {
    //     token: ''
    //   },
    // })

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
    wx.request({
      method: 'post',
      url: 'http://api_devs.wanxikeji.cn/api/shoppingCarList',
      /*购物车列表*/
      data: {
        token: wx.getStorageSync('token')
      },
      success: res => {
        this.setData({
          goodsCar: res.data.data.data
        })
      }
    })
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