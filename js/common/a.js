var c = require('./c');
c.c();
function test(){
    console.log('我是commonJS的A模块');
}
var k = 100;
module.exports = {
    a:test,
    k:k
}