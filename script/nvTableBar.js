 apiready = function(){    
//底部导航栏
var NVTabBar = api.require('NVTabBar');
NVTabBar.open({
    styles: {
        bg: '#333',
        //bg:"widget://image/NVTabBar/tabbar_bg.png",
        h: 45,
        dividingLine: {
            width: 0,
            color: '#FFEFD5'
        },
        badge: {
            bgColor: '#FFEFD5',
            numColor: '#fff',
            size: 6.0,
            centerX: 40,
            centerY: 6
        }
    },
    items: [{
        w: api.winWidth / 3.0,
        bg: {
            marginB: 0,
            image: 'rgba(255, 255, 255,0.8)'
        },
        iconRect: {
            w: 30.0,
            h: 30.0,
        },
        icon: {
            normal: 'widget://image/q10.png',
            highlight: 'widget://image/q10.png',
            selected: 'widget://image/q10.png'
        },
        title: {
            text: '动态',
            size: 12.0,
            normal: '#696969',
            selected: '#eb4f38',
            marginB: 6.0
        }
    },{
        w: api.winWidth / 3.0,
        bg: {
            marginB: 0,
             image: 'rgba(255, 255, 255,0.8)'
        },
        iconRect: {
            w: 30.0,
            h: 30.0,
        },
        icon: {
            normal: 'widget://image/q4.png',
            highlight: 'widget://image/q4.png',
            selected: 'widget://image/q4.png'
        },
        title: {
            text: '主页',
            size: 12.0,
            normal: '#696969',
            selected: '#eb4f38',
            marginB: 6.0
        }
    }, {
        w: api.winWidth / 3.0,
        bg: {
            marginB: 0,
             image: 'rgba(255, 255, 255,0.8)'
        },
        iconRect: {
            w: 30.0,
            h: 30.0,
        },
        icon: {
            normal: 'widget://image/q9.png',
            highlight: 'widget://image/q9.png',
            selected: 'widget://image/q9.png'
        },
        title: {
            text: '我的',
            size: 12.0,
            normal: '#696969',
            selected: '#eb4f38',
            marginB: 6.0
        }
    }],
    selectedIndex: 0
}, function(ret, err) {
     if (ret) {
         if (ret.index == 0 && ret.eventType=='click') {
            //产品
             api.openFrame({
            name: 'product',
            url: '../html/product.html',
            bounces: true,
            rect: {
                x: 0,
                y: 0,
                w: 'auto',
                h: 'auto'
                }
            });

         }else if ( ret.index == 1 && ret.eventType=='click') {
          //首页
           api.openFrame({
            name: 'main',
            url: '../html/main.html',
            bounces: true,
            rect: {
                x: 0,
                y: 0,
                w: 'auto',
                h: 'auto'
                }
            });
         }else if (ret.index == 2 && ret.eventType=='click') {
            //我的
            api.openFrame({
            name: 'person',
            url: '../html/person.html',
            bounces: true,
            rect: {
                x: 0,
                y: 0,
                w: 'auto',
                h: 'auto'
                }
            });
         }else{
            //alert('点击跳转事件错误');
         }
          
       // alert(JSON.stringify(ret));
    } else {
        
    }
});
}