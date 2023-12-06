---
outline: deep
---



### css的盒模型(Box Modle)

::: details 详情 {open}

> *盒子模型(Box Modle)可以用来对元素布局，包括内边距，边框，外边距，和实际内容*

**盒子模型分为两种:**
- 第一种是 W3C 标准的盒子模型(标准盒模型)
- 第二种是 IE 标准的盒子模型(怪异盒模型)

**标准盒模型与怪异盒模型的表现效果的区别之处:**

1. 标准盒模型中 
   - ``width`` 指的是内容区域 ``content`` 的宽度
   - ``height``指的是内容区域 ``content`` 的高度
   - 标准盒模型下盒子的大小 = content + border + padding + margin
   <img src="./images/w3cBoxModle.jpg"  style="width:600px; height:300px" />

2. 怪异盒模型中
   
   - ``width`` 指的是内容，边框，内边距总的宽度(content + border + padding)
   - ``height``指的是内容，边框，内边距总的高度
   - 怪异盒模型下盒子的大小 = width (content + border + padding) + margin
     <img src="./images/ieBoxModle.jpg"  style="width:600px; height:300px" />

- 还可以通过 ``box-sizing`` 设置盒子模型的解析方式
   
  - ``content-box``:默认值，``border``和``padding``不算到 ``width``范围内w3c标准模型(default)
      
      - 总宽 = width + padding + border + margin  
  - ``border-box``: ``border``和``padding``归划到``width``范围内ie怪异模型
      
      - 总宽 = width + margin 
:::

### 如何解决盒子塌陷问题

::: details 详情 {open}

```css
/*第一种方法*/
    .father {
        overflow: hidden;
    }
/*第二种方法*/
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

::: details 详情 {open}
- 方法1(定位)
```css
.parent {
    /*...*/
    position: relative;
}

.child {
    /*...*/
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -50px;
    margin-left: -50px;
}
```
- 方法2(定位 ``margin:auto``)
```css
.parent {
    /*...*/
    position: relative;
}

.child {
    /*...*/
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
```

- 方法3(``dispaly:tabel-cell``)

```css
.parent {
    /*...*/
    display: table-cell;
    /* 
    vertical-align 指定行内元素，行内块元素或者表格单元格元素的垂直对齐方式 
    也可以用于垂直对齐一行文本内的图片 <img />
    */
    vertical-align: center; 
    text-align: center;
}

.child {
    /*...*/
    display: inline-block;
}
```

- 方法4(``display:flex``)
```css
.parent {
    /*...*/
    display: flex;
    justify-content: center;    
    align-items: center;
}

.child {
    /*...*/
}
```



:::

### 在css中使用变量

::: details 详情 {open}

```css

/*基本用法*/
/*声明自定义属性，属性名需要以两个减号(--)开始*/
/*自定义属性也是写在规则集之内，规则集所指定的选择器定义自定义属性的可见作用域*/
/*通常定义在根伪类:root下*/
:root {
    /* --main-color: red;   使用 color: var(--main-color)*/
    --main-color: red;
    --test:blue;
}

element {
    /*var() 函数可以定义多个参数*/
    /*var() 函数的第一参数是自定义值，当第一个参数为定义时则第二个参数生效*/
    color: var(--main-color, skyblue);
    color: var(--main-color,--test,pink);
    color: var(--main-color,var(--test,skyblue));
}
```
- 自定义属性(css变量或者级联变量)由自己定义
- 而自定义属性是区分大写小的 ``--my-color`` 和 ``--My-color`` 是两种不同的自定义属性


:::


