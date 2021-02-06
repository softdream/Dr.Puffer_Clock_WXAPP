// pages/wifi/wifi.js
Page({
  /**
   * 页面的初始数据
   */
  udpSocket:null,
  data: {
    login_pwd:'',

    dialogShow: false,

    msg:'',
    MsgType:'',
  },
  login_pwd:function(e){
    this.setData({
      login_pwd: e.detail.value,
      wifi_password:this.login_pwd,
    })
    console.log(this.data.login_pwd);
  },
  login:function(e){
    var login_pwd = this.data.login_pwd;
    var that = this;
    if( login_pwd != '12345678' ){
      this.setData({
        MsgType: 'false',
        msg:'登陆密码错误'
      })
    }
    else {
      console.log('开始连接wifi');
      wx.startWifi({
        success: (res) => {
          console.log('初始化 wifi模块');
          wx.getConnectedWifi({
            success:function(e){
              console.log(e);
              var wifi_name = e.wifi.SSID;
              var frequency = e.wifi.frequency;
              if( frequency > 5000 ){
                that.setData({
                  MsgType:'false',
                  msg:'请连接时钟热点'
                })
              }
              else{
                wx.showLoading({
                  title:'请稍等',
                  mask:true,
                  success:(res)=>{
                    wx.navigateTo({
                      url: '../../pages/wifi_setting/wifi_setting',
                    })
                    wx.hideLoading({});
                  },
                })
              }
            },
            fail:function(e){
              console.log(e.errMsg+"："+e.errCode);
              if(e.errCode == 12005){
                that.setData({
                  MsgType:'false',
                  msg:'请打开wifi开关'
                })
              }
            }
          })
        },
        fail:function(e){
          console.log(e.errMsg+": "+e.errCode);
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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