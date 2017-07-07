//
//整个流程四级搜索：行政区域---》特定行政下的商圈-----》特定商圈下的楼盘-----》特定楼盘下的具体房源
//方法：暂定POST
//
//1.获取各个行政区域下的房源数据概况
//传给你的参数以及含义
var paraObj = {
    type: "all", //返回房源类型  "all":去全部， //这个现在房源类型单一，我就都传all,后面再根据实际调整
    dataType: "area",  //返回房源在什么尺度下  "area":行政区域下 ，“district”：商圈 , "community":楼栋
    priceClass: [1,3], //价格区间  [3,5],[5,8],[8,10],[10,20],[30,""]
    sizeClass: [0,100], //面积区间 [100,200],[200,300],[300,500],[500,1000],[1000,2000],[2000,3000],[3000,""]
    featureType: 1, // 特色搜索 1.地铁周边 2.互联网+ 3.金融精英 4.健康空气 5LEED 6新楼 7地标建筑 8创意园区 9名企开发商 10知名物业 115A写字楼 12纳什空间
    zoom: 12,  //这个是附带给你的，前端要用，传给你什么你就返回什么
    searchKeyword:"天赐良缘" //搜索过滤关键字
}

//返回的數據：各个行政区域下面的 总的房源数据
var result = {
    "houses": [
        {
            "countNumber": 9498,    //该区域下的总的房源数目
            "title": "朝阳",        //区域名称
            "point": "116.49674|39.93258", //区域的经纬度（经度|纬度）
            "id": "6"  //用于标识该行政区的id(这个你后台可能也用，用于身份标识)
        },
        {
            "countNumber": 5243,
            "title": "海淀",
            "point": "116.32949|39.99316",
            "id": "5"
        }

    ],
    "zoom": "12" //这个是我前端传给你的，你再直接返回即可
};

//2.获取某一个被点击的行政区域下面的商圈的房源数据（点击某个行政区域时请求）
//传给你的参数
var paraObj = {
    type: "all", //返回房源类型  "all":去全部， //这个现在房源类型单一，我就都传all,后面再根据实际调整
    dataType: "district",  //返回房源在什么尺度下  "area":行政区域下 ，“district”：商圈 , "community":楼栋
    priceClass: [1,3], //价格区间  [3,5],[5,8],[8,10],[10,20],[30,""]
    sizeClass: [0,100], //面积区间 [100,200],[200,300],[300,500],[500,1000],[1000,2000],[2000,3000],[3000,""]
    featureType: 1, // 特色搜索 1.地铁周边 2.互联网+ 3.金融精英 4.健康空气 5LEED 6新楼 7地标建筑 8创意园区 9名企开发商 10知名物业 115A写字楼 12纳什空间
    zoom: 15,  //这个是附带给你的，前端要用，传给你什么你就返回什么
    areaId:8, //该区域的id
    searchKeyword:"天赐良缘" //搜索过滤关键字
}

//返回的數據:被点击的行政区域下的各个商圈的房源数据
var result ={
    "houses": [
        {
            "countNumber": 36,    //该商圈下的总的房源数目
            "title": "老山",       //该商圈下的名称
            "point": "116.2253|39.916211", //该商圈下的经纬度（经度|纬度）
            "id": "37010"  //该商圈下的特征id
        }
    ],
    "zoom": 15//需要返回数据时携带的地图级别数字
};


//3.获取某一个被点击的商圈下面的各个楼栋的房源数据（点击某个商圈时请求）
//传给你的参数
var paraObj = {
    type: "all", //返回房源类型  "all":去全部， //这个现在房源类型单一，我就都传all,后面再根据实际调整
    dataType: "community",  //返回房源在什么尺度下  "area":行政区域下 ，“district”：商圈 , "community":楼栋
    priceClass: [1,3], //价格区间  [3,5],[5,8],[8,10],[10,20],[30,""]
    sizeClass: [0,100], //面积区间 [100,200],[200,300],[300,500],[500,1000],[1000,2000],[2000,3000],[3000,""]
    featureType: 1, // 特色搜索 1.地铁周边 2.互联网+ 3.金融精英 4.健康空气 5LEED 6新楼 7地标建筑 8创意园区 9名企开发商 10知名物业 115A写字楼 12纳什空间
    zoom: 17,  //这个是附带给你的，前端要用，传给你什么你就返回什么
    districtId:8, //该商圈的id
    searchKeyword:"天赐良缘" //搜索过滤关键字
}

//返回的數據:某一个商圈下的各个楼栋情况
var result ={
    "houses": [
        {
            "countNumber": 36,    //该商圈下的总的房源数目
            "title": "芙蓉小区",       //该商圈下的名称
            "point": "116.2253|39.916211", //该商圈下的经纬度（经度|纬度）
            "id": "37010"  //该楼栋的特征id
        }
    ],
    "zoom": "17"
};

//4.获取某一个被点击的楼栋房源数据（点击某个楼盘时请求）
//传给你的参数
var paraObj = {
    type: "all", //返回房源类型  "all":去全部， //这个现在房源类型单一，我就都传all,后面再根据实际调整
    dataType: "premises",  //返回房源在什么尺度下  "area":行政区域下 ，“district”：商圈 , "community":楼盘， premises:房源
    priceClass: [1,3], //价格区间  [3,5],[5,8],[8,10],[10,20],[30,""]
    sizeClass: [0,100], //面积区间 [100,200],[200,300],[300,500],[500,1000],[1000,2000],[2000,3000],[3000,""]
    featureType: 1, // 特色搜索 1.地铁周边 2.互联网+ 3.金融精英 4.健康空气 5LEED 6新楼 7地标建筑 8创意园区 9名企开发商 10知名物业 115A写字楼 12纳什空间
    communityId:8, ////楼盘的id
    searchKeyword:"天赐良缘" //搜索过滤关键字
}

//返回的數據:某一个楼栋下的具体房源
var result ={
    address:"石景山古城地铁站东南口向东100米", //楼栋地址
        title:"长安家园", //楼栋名称
        area:"石景山", //楼栋所屬行政區域
        pic :".../themes/new2015/common/images/mapcity/bj.jpg", //楼栋封面图片
        houses:[
        {
            houseId:333, //房源Id
            img:"http://image.5i5j.com/picture/slpic/l/house/3766/37666120/shinei/cjgpedmfafb53cce.JPG.jpg?1a98033375ade15eb8b596d36ab21aef", //房源圖片
            perPrice:"6.5", //每日价格
            priceArea:"5.3~9.8", //每日价格范围
            size:"56", //房源面积 56平
            decoration :"精装修" //装修水平
        }
    ]
};