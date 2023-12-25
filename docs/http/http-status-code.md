---
outline: deep
---

<script setup>

import StatusCodeComponent from './component/StatusCode.vue'


</script>


### http 状态码

> _状态码类别：_

|     |           类别            |                   原因短语 |
| --- | :-----------------------: | :-------------------------: |
| 1XX | Informational(信息状态码) |         接受的请求正在处理 |
| 2XX |     Success(请求成功)     |           请求正常处理完毕 |
| 3XX | Redirection(重定向状态码) | 需要进行附加操作已完成请求 |
| 4XX | Client Error(客户端错误)  |         服务器无法处理请求 |
| 5XX | Server Error(服务器错误 ) |         服务器处理请求出错 |

> ###### **1XX 临时响应**

::: tip 详情

<StatusCodeComponent title='100(Continue): 表示目前为止请求都很正常,客户端应该继续请求,如果已完成则忽略此信息。'/>

<StatusCodeComponent title='101(Switching Protocols)：服务器已理解客户端的请求,并将通过Upgrade消息头通知客户端采用不同的协议完成这个请求。在发送完这个响应最后的空行后,服务器将会切换到Upgrade消息头中定义那些协议。
' />

<StatusCodeComponent title='102(Processing (WebDAV)):由WebDAV（RFC 2518）扩展的状态码,表示服务器已经接收并正在处理请求,但无响应可用。' />

<StatusCodeComponent title='103(Early Hints):主要用于与Link链接头一起使用,允许服务器在最终的HTTP/2.0响应前发送一些性能提示。' />


:::


> ###### **2XX 成功**
::: tip 详情
 

<StatusCodeComponent title='200(ok): 请求已成功。' />

<StatusCodeComponent text='表示从客户端发来的请求在服务器端被正常处理了。' :isTitle="false" /> 

<StatusCodeComponent title="201(Created): 请求已成功,并因此创建了一个新的资源。"  />

<StatusCodeComponent text='这通常是在POST请求或者是某些PUT请求之后返回的响应。' :isTitle="false" />

<StatusCodeComponent title="202(Accepted): 请求已被接受,但还未处理。"  />

<StatusCodeComponent text='实际情况会因情况而异,可能是在处理请求时发现了一个错误,但不想让客户端重新发送请求,或者在处理之前需要等待另一个进程完成操作。' :isTitle="false" />

<StatusCodeComponent title="203(Non-Authoritative Information): 服务器已成功处理请求,但返回了可能来自另一来源的信息(返回信息可能不正确)"  />

<StatusCodeComponent title="204(No Content)：服务器成功处理了请求,但没有返回任何内容。"  />

<StatusCodeComponent text='该状态码代表服务器接受的请求已成功处理，但在返回的响应报文中不含实体的主体部分(也不允许返回任何实体的主体)，从浏览器发送请求处理后，返回响应204，浏览器显示的页面不会发生更新,也可以通过此代码告知浏览器继续访问上次的页面。' :isTitle="false" />


<StatusCodeComponent title="205(Reset Content): 服务器成功处理了请求,但没有返回任何内容。"  />

<StatusCodeComponent text='与204响应不同(此响应要求请求者进行重置操作)' :isTitle="false" />
    
<StatusCodeComponent title="206(Partial Content)请求范围，该状态码表示客户端只进行了范围请求(GET)"  />

<StatusCodeComponent text=' 而服务器成功执行了这部分的GET请求。响应报文中包含由Content-Range指定范围的实体内容。' :isTitle="false" />

:::

> ###### **3XX 重定向**
::: info 详情


<StatusCodeComponent title="301(Moved Permanently)永久重定向。"  />

<StatusCodeComponent text='该状态码表示请求的资源已被分配了新的URL。' :isTitle="false" />

<StatusCodeComponent title="302(Found)临时重定向，该状态码表示请求的资源已被分配了新的URL，希望用户(本次)能使用新的URL访问。"  />

<StatusCodeComponent text=' 在用户访问新的URL时302(Found)状态码并没有明确规定客户端在后续的请求中必须使用GET方法，大多数现代浏览器在处理 302(Found)响应时会将POST请求转换为GET请求，尽管这并不符合http/1.0标准' :isTitle="false" />

<StatusCodeComponent text='但是在后续的http/1.1中引入了303(See Other)和307(Temporary Redirect)状态码得到了改进' :isTitle="false" />

<StatusCodeComponent title="303(See Other)另见，这也是一种重定性状态码，通常用于将客户端重定向到不同的URL上。
"  />

<StatusCodeComponent text='303状态码和302(Found)状态码有着相同的功能，但是303状态码明确表示客户端明确表示客户端应当采用GET方法获取资源 (http/1.1)' :isTitle="false" />
    

<StatusCodeComponent title="304(No Modified)资源已找到，但为符合条件请求..."  />
    
<StatusCodeComponent text='该状态码表示客户端发送附带条件的请求时，服务器端允许请求访问资源，但因发生请求未满足条件的情况后，直接返回304(No Modified)。304虽然被划分在3XX类别中，但是和重定性没有关系' :isTitle="false" />

    
<StatusCodeComponent text='附带条件的请求是指采用GET方法的请求报文中包含 If-Macth, If-Modified-Since, If-None-Match,If-Range, If-Unmodified-Since 中任一首部' :isTitle="false" />
   
<StatusCodeComponent title="307(Temporary Redirect)临时重定性。"  />

<StatusCodeComponent text='该状态码与302(Found)有着相同的含义，在http/1.0标准中禁止POST变换成GET，307会遵照浏览器标准，不会从POST变成GET，但是对与处理响应时的行为，每种浏览器有可能出现不同的情况' :isTitle="false" />

::: 


> ###### **4XX 客户端错误** 

::: warning 详情

<StatusCodeComponent title="400(Bad Request)该状态码表示请求报文中语法存在错误。"  />

<StatusCodeComponent title="401(Unauthorized)该状态码表示发送的请求需要有通过http认证(BASIC认证,DIGEST认证) 的认证信息，若之前已经进行过1次请求，则表示用户认证失败"  />

<StatusCodeComponent title="403(Forbidden)该状态码表明对请求资源的访问被服务器拒绝了"  />

<StatusCodeComponent title="404(Not Found)服务器上没有请求的资源"  />

:::

> ###### **5XX 服务器错误** 

::: danger 详情

<StatusCodeComponent title="500(Internal Server Error)服务器内部资源出错，服务器端在执行请求时发生了故障"  />

<StatusCodeComponent title="503(Service Unavailable)服务器暂时处于超负载或正在进行停机维护"  />

:::