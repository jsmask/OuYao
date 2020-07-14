function Queue(data){
    this.list = [];
    this.add = obj => {
        this.list.push(obj);
        return this;
    }
};

let queue = new Queue();

queue.add({
    pic:
      "http://static.gamemm.com/upload/avatar/201912/30/16201_1577688838.jpg",
    title: "圆环倒计时",
    desc: "svg css js",
    path: "/circle"
})
.add({
    pic:
      "http://static.gamemm.com/upload/avatar/202004/29/90730_1588098209.jpg",
    title: "聚光灯效果",
    desc: "css",
    path: "/spotlight"
})
.add({
    pic:
      "http://static.gamemm.com/upload/avatar/201909/16/124469_1568632555.jpg",
    title: "翻牌效果",
    desc: "css",
    path: "/turncard"
})
.add({
    pic:
      "http://static.gamemm.com/upload/avatar/202003/24/31496_1585013160.jpg",
    title: "滚动计数器",
    desc: "css js",
    path: "/counter"
})
.add({
    pic:
      "http://static.gamemm.com/upload/avatar/201908/22/87756_1566450714.jpg",
    title: "打勾效果",
    desc: "svg css",
    path: "/tick"
})
.add({
    pic:
      "http://static.gamemm.com/upload/avatar/201909/4/111789_1567573757.jpg",
    title: "食物卡片",
    desc: "css js",
    path: "/foodcard"
})
.add({
    pic:
      "http://static.gamemm.com/upload/avatar/201908/25/83815_1566712590.jpg",
    title: "折线动画",
    desc: "svg css js",
    path: "/brokenline"
})
.add({
    pic:
      "http://static.gamemm.com/upload/avatar/201908/22/113157_1566462721.jpg",
    title: "柴犬动画",
    desc: "css",
    path: "/dog"
})
.add({
    pic:
      "http://static.gamemm.com/upload/avatar/201905/16/78664_1557969786.jpg",
    title: "发光的404",
    desc: "css",
    path: "/notfount"
})
.add({
    pic:
      "http://static.gamemm.com/upload/avatar/202003/3/193807_1583172948.jpg",
    title: "伪3D研究员",
    desc: "canvas",
    path: "/researcher"
})



export default queue.list;
