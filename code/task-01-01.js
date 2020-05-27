// 3.结合ES6新语法，用最简单的方式找出数字中的最小值
var arr = [12, 34, 32, 89, 4];
const res = Math.min(...arr);
console.log(res);

// 9.将下面异步代码使用Promise改进？
setTimeout(function () {
  var a = "hello";
  setTimeout(function () {
    var b = "lagou";
    setTimeout(function () {
      var c = "I LOVE U";
      console.log(a + b + c);
    }, 10);
  }, 10);
}, 10);

new Promise((resolve, reject) => {
  setTimeout(() => resolve("hello"), 10);
})
  .then((a) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(a + "lagou"), 10);
    });
  })
  .then((b) => {
    setTimeout(() => {
      console.log(b + "I love U");
    }, 10);
  });
