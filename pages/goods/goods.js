// pages/goods/goods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    editFlag: false,
    editMes: '编辑',
    showSite: false,
    siteCache: '',
    site: '成都市',
    checkAll: false,
    siteArr: ['ueueyeyyeyy', '四川省邻水县', 2, 3, 4, 5, 6, 6, 6, 7, 4, 3, 2, 14, 5, 24],
    allPrice: 855,
    goods: [{
        type: '1',
        goodsId: '255',
        price: '52',
        title: '怡宝 饮用水 纯净水350*24 整项庄',
        size: 'huehehh',
        number: 1,
        checked: false
      },
      {
        type: '1',
        goodsId: '256',
        price: '52',
        title: '怡宝 饮用水 纯净水350*24 整项庄',
        size: 'huehehh',
        number: 1,
        checked: false
      },
      {
        type: '1',
        goodsId: '257',
        price: '52',
        title: '怡宝 饮用水 纯净水350*24 整项庄',
        size: 'huehehh',
        number: 1,
        checked: true
      },
      {
        type: '1',
        goodsId: '258',
        price: '52',
        title: '怡宝 饮用水 纯净水350*24 整项庄',
        size: 'huehehh',
        number: 1,
        checked: false
      },
      {
        type: '1',
        goodsId: '259',
        price: '52',
        title: '怡宝 饮用水 纯净水350*24 整项庄',
        size: 'huehehh',
        number: 1,
        checked: true
      }
    ]
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
  /**/
  checkChange: function (e) {
    let value = e.detail.value
    e.detail.value.length == this.data.goods.length ?
      this.setData({
        checkAll: true
      }) :
      this.setData({
        checkAll: false
      })
    for (let j = 0; j < this.data.goods.length; j++) {
      this.data.goods[j].checked = false
    }
    for (let i = 0; i < value.length; i++) {
      for (let j = 0; j < this.data.goods.length; j++) {
        if (value[i] == this.data.goods[j].goodsId) {
          this.data.goods[j].checked = true
          break
        }
      }
    }
    this.addPrice()
  },
  selectAll: function () {
    if (!this.data.checkAll) {
      this.setData({checkAll: !this.data.checkAll})
      for (let i = 0; i < this.data.goods.length; i++) {
        let checkTrue = "goods[" + i + "].checked"
        this.setData({
          [checkTrue]: true
        })
      }
    } else {
      this.setData({checkAll: !this.data.checkAll})
      for (let i = 0; i < this.data.goods.length; i++) {
        let checkFalse = "goods[" + i + "].checked"
        this.setData({
          [checkFalse]: false
        })
      }
    }
    this.addPrice()
  },
  addPrice: function () {
    var num = 0
    for (let i = 0; i < this.data.goods.length; i++) {
      if (this.data.goods[i].checked == true) {
        num = num + (parseFloat(this.data.goods[i].price) * parseInt(this.data.goods[i].number))
      }
    }
    this.setData({
      allPrice: num
    })
  },
  changeGoodsNum: function (e) {
    let id = e.target.id
    for (let i = 0; i < this.data.goods.length; i++) {
      if (id == this.data.goods[i].goodsId) {
        let number = "goods[" + i + "].number"
        if (e.detail.value) {
          this.setData({
            [number]: e.detail.value
          })
        } else {
          this.setData({
            [number]: 1
          })
        }
        break
      }
    }
    this.addPrice()
  },
  cutGoodsNum: function (e) {
    let id = e.target.id.substring(3)
    for (let i = 0; i < this.data.goods.length; i++) {
      if (id == this.data.goods[i].goodsId) {
        let number = "goods[" + i + "].number"
        if (this.data.goods[i].number != 1) {
          this.setData({
            [number]: --this.data.goods[i].number
          })
        } else {
          this.setData({
            [number]: 1
          })
        }
      }
    }
    this.addPrice()
  },
  addGoodsNum: function (e) {
    let id = e.target.id.substring(3)
    for (let i = 0; i < this.data.goods.length; i++) {
      if (id == this.data.goods[i].goodsId) {
        let number = "goods[" + i + "].number"
        this.setData({
          [number]: ++this.data.goods[i].number
        })
      }
    }
    this.addPrice()
  },
  edit: function(){
    if(!this.data.editFlag){
      this.setData({editFlag: true})
      this.setData({editMes: '完成'})
    }else{
      this.setData({editFlag: false})
      this.setData({editMes: '编辑'})
    }
  },
  removeGoods: function(){
    for(let i = 0; i < this.data.goods.length; i++){
      if(this.data.goods[i].checked == true){
        this.data.goods.splice(i, 1)
      }
    }
    this.setData({goods: this.data.goods})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.addPrice()
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