// pages/show/show.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  editRestaurant: function (e) {
    const id = e.currentTarget.dataset.id
    
    wx.navigateTo({
      url: `/pages/edit/edit?id=${id}`,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {

    let that = this;
    console.log(options.id)
    // Get api data
    wx.request({
      url: `http://localhost:3000/api/v1/posts/${options.id}`,
      method: 'GET',
      success(pos) {
        const post = pos.data.posts;
        console.log(24, post);

        // Update local data
        that.setData(
          post
          );

        wx.hideToast();
      }
    });
  },

  // deleteRestaurant: function (e) {
  //   let page = this
  //   const id = e.currentTarget.dataset.id
  //   console.log(id)
  //   wx.request({
  //     url: `http://localhost:3000/api/v1/posts/${id}`,
  //     method: 'DELETE',
  //   })
  // },



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