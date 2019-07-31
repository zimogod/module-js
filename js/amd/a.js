define(['./c'],function(c){
    c.c();
    function test(){
        console.log('我是AMD定义的---A---模块')
    }
    return {
        a:test
    }
});