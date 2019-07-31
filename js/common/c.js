function test(){
    console.log('我是commonJS的C模块');
}
// 1、暴露
// exports.ss = 10;
// exports.test = test;
// 2、暴露
module.exports = {
    c:test
}






















