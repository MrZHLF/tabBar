Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [
      {
        pagePath: "/pages/index/index",
        text: "首页",
        iconPath: "/images/home.png",
        selectedIconPath: "/images/home_b.png"
      },
      {
        pagePath: "/pages/indexcate/indexcate",
        text: "发现",
        iconPath: "/images/more2.png",
        selectedIconPath: "/images/more2_b.png"
      },
      {
        pagePath: "/pages/mycenter/mycenter",
        text: "我的",
        iconPath: "/images/my.png",
        selectedIconPath: "/images/my_b.png"
      }
    ]
  },
  methods: {
    switchTab(e) {
      console.log(e)
      let data = e.currentTarget.dataset
      let url = data.path
      wx.switchTab({
        url
      })
      this.setData({
        selected: data.index
      })
      console.log(url, this.data.selected, '111')

    }
  }
})