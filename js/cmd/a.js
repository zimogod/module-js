// CMD规范
define(function(require,exports,module){
    function num1(){
        console.log('我是CMD规范的---num1---')
    }
    var c = require('./c');
    var s = c.n3;
    module.exports = {
        n1:num1,
        n4:s
    }
})