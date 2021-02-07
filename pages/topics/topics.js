// pages/topics/topics.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    modalHidden:true,

    msg:'',
    MsgType:'',

    udp:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("页面加载完成");
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("页面渲染完成");
    // 新建udp实例
    this.udp = wx.createUDPSocket();

    // udp绑定本机
    this.udp.bind();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log( "页面显示" );
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("页面隐藏");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("页面卸载");
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

  },

  buttonClick1:function(e){
    console.log( "button1" );

    this.udp.send({
      address:'192.168.0.193',
      //address:'255.255.255.255',
      port:'2333',
      message:"hello word!"
    });
    console.log( "send data" );
  },

  buttonClick2:function(e){
    console.log( "button2" );
  },

  buttonClick3:function(e){
    console.log( "button3" );
  },
  
  buttonClick4:function(e){
    console.log( "button4" );
  },

  showModal1:function(e){
    console.log( "show modal 1" );
    this.setData({
      modalHidden:!this.data.modalHidden
    })
  },
  closeModal1:function(e){
    console.log('取消弹窗');
    this.setData({
      modalHidden:!this.data.modalHidden
    })
  }

})