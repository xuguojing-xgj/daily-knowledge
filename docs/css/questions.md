---
outline: deep
---



### 盒子模型是由哪些部分组成

::: details 详情 {open}

```css
   body {
        box-sizing: border-box; // 默认值 content-box 
    }   
```

**1. 内容区 ``content``**
- 主要呈现, 文本图片或是一个视频播放器等多种类型... 
- ``box-sizing``为默认值时,可以通过``width`` ``min-width`` ``max-width`` ``height`` ``min-height``           ``max-height`` ``overflow`` 控制

**2. 内边距 ``padding``**

**3. 边框 ``border``**
- 边框属性有: ``border-style`` ``border-width`` ``border-color``; 简写:``border``


**4.外边距 ``margin``**
:::


### 如何解决盒子塌陷问题

::: details 详情 {open}

```css
// 第一种方法
    .father {
        overflow: hidden;
    }
// 第二种方法
    .father {
        width: 300px;
        height: 300px;
    }
    .father::after{
        content: '';
        display: block;
        clear: both;
    }
```

嵌套的块级元素,同时设置了外边距或者父元素未设置高度子元素浮动导致盒子塌陷

- 解决方法:  

1. 为父元素添加 ``overflow:hidden``
2. 为父元素添加高度和清除浮动
:::


### 如何使一个盒子垂直水平居中


### 在css中使用变量

::: details 详情 {open}


:::


