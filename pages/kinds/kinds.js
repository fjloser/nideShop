// pages/kinds/kinds.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    typeId: 1,
    showData: [],
    kind: [],
    type: [
      {
        typeId: 3,
        title: '美妆护肤'
      },
      {
        typeId: 4,
        title: '个护清洁'
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
  /*构建树形结构*/
  createTree(arr) { 
    var newTreeArr = [],
      nullObj = {},
      children = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].parent_id == 0) {
        nullObj = { ...arr[i] };
        let sonArr = this.findSon(arr[i].good_type_id, arr);
        if (sonArr.length != 0) {
          nullObj.children = sonArr;
        }
        newTreeArr[newTreeArr.length] = nullObj;
      }
    }
    return newTreeArr;
  },
  findSon(id, arr) {
    let sonArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].parent_id == id) {
        let nullObj = {};
        nullObj = { ...arr[i] };
        let sonCacheArr = this.findSon(arr[i].good_type_id, arr);
        if (sonCacheArr.length != 0) {
          nullObj.children = sonCacheArr;
        }
        sonArr[sonArr.length] = nullObj;
      }
    }
    return sonArr;
  },
  getMyKinds(arr){
    var newArr = []
    for(let i = 0; i < arr.length; i++){
      if(arr[i].type_name.substring(0, 2) == 'fj'){
        newArr.push(arr[i])
      }
    }
    return newArr
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      method: 'POST',
      url: 'http://api_devs.wanxikeji.cn/api/goodType',
      success: res => {
        this.data.kind = this.getMyKinds(res.data.data)
        this.setData({
          showData: this.createTree(this.data.kind)
        })
        this.setData({
          typeId: this.data.showData[0].good_type_id
        })
        console.log(this.data.showData)
      }
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