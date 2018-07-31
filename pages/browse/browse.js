// pages/browse/browse.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mode: "scaleToFill",
    arr: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWDo9X3sHhw_G5JIbx7CIV3WCOG8hR_K8-SB7PXixf7GJ5v7dfHQ", "https://img-aws.ehowcdn.com/340x221p/photos.demandstudios.com/getty/article/171/62/87733314.jpg"],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.navigateTo({
    //   url: '../index/index',
    // })
    let page = this;
    // Get api data
    console.log(options)
    wx.request({
      url: `http://localhost:3000/api/v1/posts?query=${options.value}`,
      method: 'get',
      success: function (res) {
        console.log(res)
        const posts = res.data;
        page.setData(posts)
        console.log(posts)
        // wx.redirectTo({
        //   url: `../browse/browse?value=${e.detail.value.course}`
        // });
      }
    })
    // wx.request({
    //   url: "http://localhost:3000/api/v1/posts",
    //   method: 'GET',
    //   success(res) {
    //     const posts = res.data.posts;

    //     // Update local data
    //     page.setData({
    //       posts: posts
    //     });
    //     console.log(posts)
    //     wx.hideToast();
    //   }
    // });
    // var array = this.data.arr
    // for (let i = 1; i < 1; i++) {
    //   array.push("img/" + i + ".jpg")
    // }
    // this.setData({ arr: array })
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
})