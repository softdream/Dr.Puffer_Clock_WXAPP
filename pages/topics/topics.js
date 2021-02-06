// pages/topics/topics.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    modalHidden:true,

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

  },

  buttonClick1:function(e){
    console.log( "button1" );
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