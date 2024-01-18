---
outline: deep
---

# 闭包

> #### 定义

- 允许访问另一个函数中的变量

```js
function foo() {
  let i = 1;
  return function run() {
    return i++;
  };
}

let a = foo();

console.log(a() == 1 && a() == 2 && a() == 3); // true
```

> #### 使用场景

- 创建私有变量
- 延长变量的生命周期

> ###### 模块化代码
```js
let myModule = (function () {
  let private = "我是私有变量...";
  return {
    publicMethod: function () {
      console.log("访问私有变量: " + private);
    },
  };
})();

myModule.publicMethod(); // 输出 '访问私有变量: 我是私有变量...'
```

> ###### 封装函数和私有化变量
```js
function encapsulation() {
  let privateVariable = "我是一个变量...";
  return {
    privateOne: function () {
      privateVariable += "1";
    },
    privateTwo: function () {
      return privateVariable;
    },
  };
}

const MyEncapsulation = encapsulation();
MyEncapsulation.privateOne();
console.log(MyEncapsulation.privateTwo()); // 我是一个变量...1
```
