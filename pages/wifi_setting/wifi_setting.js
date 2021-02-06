// pages/wifi_setting/wifi_setting.js
const app = getApp()
var that = this
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dialogShow: false,

    msg:'',
    MsgType:'',

    wifi_name:'',
    wifi_pwd:'',
  },

  wifi_name:function(e){
    this.setData({
      wifi_name:e.detail.value
    })
    console.log(this.data.wifi_name);
  },

  wifi_pwd:function(e){
    this.setData({
      wifi_pwd:e.detail.value
    })
    console.log(this.data.wifi_pwd);
  },

  contectedwifi:function(e){
    var that = this;
    wx.connectWifi({
      SSID: 'Dr.Puffer',
      password: '12345678',
      success(res){
        console.log("wifi连接成功", res);
        that.setData({
          MsgType:'success',
          msg:'wifi配置成功'
        })
        that.initUdpSocket();
        setTimeout(function(){
          wx.redirectTo({
            url: '../../pages/wifi/wifi',
          })
        }, 3000);
      },
      fail(res){
        console.log("wifi连接失败",res);
        that.setData({
          MsgType:'false',
          msg:'wifi配置失败'
        })
      }
    })
  },

  initUdpSocket(){
    console.log('init udp socket');
    let udpSocket = wx.createUDPSocket();
    if(udpSocket === null){
      console.log('暂不支持');
      return;
    }
    udpSocket.bind();
    udpSocket.send({
      address:'192.168.4.1',
      port:'2333',
      message:{wifi_password}
    });
    that.setData({
      MsgType:'success',
      msg:'发送成功'
    })
    console.log('发送消息', {
      "ssid: ":this.data.wifi_name,
      "psd: ":this.data.wifi_pwd,
      "from: ": "ipd"
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.wifi_name);
    var that = this;
    that.setData({
      wifi_name:options.wifi_name
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