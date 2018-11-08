require.config({
    baseUrl: "/resoult/libs/",
    paths: {
        "zepto": "../js/zepto",
        "css": "../js/css.min",
        "icon": "../js/iconfont"
    }
})
require(["css!../css/index.css", "css!../css/iconfont.css"]);