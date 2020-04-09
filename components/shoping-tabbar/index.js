// components/shoping-tabbar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    selected: {
      type: Number,
      default:0
    }
  },  

  /**
   * 组件的初始数据
   */
  data: {
    selected:0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [
      {
        pagePath: "/shoping/index/index",
        text: "首页",
        iconPath: "/static/images/tabbar/icon-1.png",
        selectedIconPath: "/static/images/tabbar/icon-1-active.png"
      },
      {
        pagePath: "/shoping/shop/caregory/index",
        text: "分类",
        iconPath: "/static/images/tabbar/icon-2.png",
        selectedIconPath: "/static/images/tabbar/icon-2-active.png"
      },
      {
        pagePath: "/shoping/member/cart/index",
        text: "购物车",
        iconPath: "/static/images/tabbar/icon-4.png",
        selectedIconPath: "/static/images/tabbar/icon-4-active.png"
      },
      {
        pagePath: "/shoping/member/index/index",
        text: "会员中心",
        iconPath: "/static/images/tabbar/icon-5.png",
        selectedIconPath: "/static/images/tabbar/icon-5-active.png"
      }
    ]
  },


  /**
   * 组件的方法列表
   */
  methods: {
    switchTab(e) {
      let data = e.currentTarget.dataset
      let url = data.path
      wx.redirectTo({
        url
      })
    }
  }
})
