---
outline: deep
---


###### 闭包


> + 定义 : 允许访问另一个函数中的变量

``` js

function foo() {
    let i = 1;
    return function run() {
       return i++;
    }
}

let a = foo()

console.log(a() == 1 && a() == 2 && a() == 3) // true

```