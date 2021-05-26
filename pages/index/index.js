// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: '点击头像登录',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  bindViewTap() {
    wx.getUserProfile({
      desc: '获取用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        wx.login({
          success: res => {
            let code = res.code
            if (code) {
              // 发起网络请求
              wx.request({
                method: 'POST',
                url: 'http://api_devs.wanxikeji.cn/api/codeExchangeOpenid',
                data: {
                  code: code
                },
                success: res => {
                  if (!res.data.data.info) {
                    wx.request({
                      method: 'POST',
                      url: 'http://api_devs.wanxikeji.cn/api/register',
                      data: {
                        openid: res.data.data.openid,
                        nick_name: this.data.userInfo.nickName,
                        icon: this.data.userInfo.avatarUrl
                      },
                      success: res => {
                        wx.request({
                          method: 'POST',
                          url: 'http://api_devs.wanxikeji.cn/api/codeExchangeOpenid',
                          data: {
                            code: code
                          },
                          success: res => {
                            wx.setStorage({
                              token: res.data.data.info.token
                            })
                            wx.switchTab({
                              url: '/pages/home/home',
                            })
                          }
                        })
                      }
                    })
                  }else{
                    console.log(typeof res.data.data.info.token)
                    wx.setStorageSync(
                      'token', res.data.data.info.token
                    )
                    wx.switchTab({
                      url: '/pages/home/home',
                    })
                  }
                }
              })
            } else {
              console.log('登录失败！' + res.errMsg)
            }
          }
        })
      }
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
})