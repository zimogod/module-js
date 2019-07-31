function test(){
    console.log('我是commonJS的B模块');
}
// exports.test = test;
module.exports = {
    b:test
}