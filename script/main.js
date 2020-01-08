     /*点击跳转到公司简介*/
        function clickCompanyDescrib(){
            alert("darkcyan");
            api.openFrame({
            name: 'login',
            url: '../html/login.html',
            bounces: true,
            rect: {
                x: 0,
                y: 0,
                w: 'auto',
                h: 'auto'
            }
        });
        }
        /*点击跳转到工程案例*/
        function clickProgramType(){
            api.openFrame({
            name: 'regist',
            url: '../html/regist.html',
            bounces: true,
            rect: {
                x: 0,
                y: 0,
                w: 'auto',
                h: 'auto'
                }
            });
        }
         /*点击跳转到x86报修*/
        function offsetX86(){
            api.openFrame({
            name: 'x86',
            url: '../html/x86.html',
            bounces: true,
            rect: {
                x: 0,
                y: 0,
                w: 'auto',
                h: 'auto'
                }
            });
        }
         /*点击跳转到小型机报修*/
        function offsetSmall(){
            api.openFrame({
            name: 'small',
            url: '../html/small.html',
            bounces: true,
            rect: {
                x: 0,
                y: 0,
                w: 'auto',
                h: 'auto'
                }
            });
        }
         /*点击跳转到存储器报修*/
        function offsetCunChu(){
            api.openFrame({
            name: 'cunCun',
            url: '../html/cunCun.html',
            bounces: true,
            rect: {
                x: 0,
                y: 0,
                w: 'auto',
                h: 'auto'
                }
            });
        }
         /*点击跳转到数据库报修*/
        function offsetDatabase(){
            api.openFrame({
            name: 'database',
            url: '../html/database.html',
            bounces: true,
            rect: {
                x: 0,
                y: 0,
                w: 'auto',
                h: 'auto'
                }
            });
        }
         /*点击跳转到其他报修*/
        function offsetOthers(){
            api.openFrame({
            name: 'other',
            url: '../html/other.html',
            bounces: true,
            rect: {
                x: 0,
                y: 0,
                w: 'auto',
                h: 'auto'
                }
            });
        }


apiready = function(){

}