# clunch - 🎨 渐进的前端交互式图形框架

<p align="center"><a href="https://hai2007.gitee.io/clunch/" target="_blank">
<img width="400" src="https://hai2007.gitee.io/clunch/src/assets/clunch.png" alt="clunch logo"></a></p>

<p>
  <a href="https://hai2007.gitee.io/npm-downloads?interval=7&packages=clunch"><img src="https://img.shields.io/npm/dm/clunch.svg" alt="downloads"></a>
  <a href="https://packagephobia.now.sh/result?p=clunch"><img src="https://packagephobia.now.sh/badge?p=clunch" alt="install size"></a>
  <a href="https://www.jsdelivr.com/package/npm/clunch"><img src="https://data.jsdelivr.com/v1/package/npm/clunch/badge" alt="CDN"></a>
  <a href="https://www.npmjs.com/package/clunch"><img src="https://img.shields.io/npm/v/clunch.svg" alt="Version"></a>
  <a href="https://github.com/hai2007/clunch/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/clunch.svg" alt="License"></a>
</p>

- 你可以查看[在线文档](https://hai2007.gitee.io/clunch/)学习或查看文档进行使用！

## Issues
使用的时候遇到任何问题或有好的建议，请点击进入[issue](https://github.com/hai2007/clunch/issues)，欢迎参与维护！

## 如何使用？

首先，你需要安装clunch.js，有两种方式，我们这里推荐使用npm的方式：

```
npm install --save clunch
```

安装好了以后，你还需要修改webpack.config.js中的配置项（虽然clunch.js并不依赖webpack，因为我们主要用于这种环境，因此拿他举例子）：

```js
{
    test: /\.clunch$/,
    loader: ['clunch/loader.js']
}
```

到这里，环境就准备好了，我们先准备一个.clunch文件（比如叫：demo.clunch），内容如下:

```html
<path>
    <move-to x='250' y='100'></move-to>
    <line-to c-for='value in datalist' c-bind:x='value.x' c-bind:y='value.y'></line-to>
</path>
```

上面是绘制一条折线的例子，我们还需要准备一个画布：

```html
<!-- 特别注意：作为画布的宽高是必须设置的，当然，使用vm,rem等作为尺寸单位都可以，只是必须设置 -->
<div id='root' style='width:700px;height:700px;'></div>
```

最后，我们创建clunch对象启动绘图：

```js
import Clunch from 'clunch';
import demo from 'demo.clunch';

new Clunch({

    el: document.getElementById('root'),
    render:demo,
    data() {
        return {
            datalist: [{
                    x:  100,
                    y: 40
                },
                {
                    x:  200,
                    y: 400
                },
                {
                    x:  500,
                    y: 500
                }
            ]
        };
    }
});
```

从上面的例子可以看出来，我们采用的是数据驱动绘图，你需要通过业务来改变数据，绘制会自动完成，其次：

- 通过c-for,c-if和c-on等指令，优化交互，提高开发效率
- 数据绑定和画布监听等，帮助你不需要关注绘图细节，就和开发一个普通的html页面一样简单

具体的请查看[在线文档](https://hai2007.gitee.io/clunch/)了解详情！

## 更多平台兼容

默认情况下，我们只支持普通的Web端，如果想兼容更多的平台可以查询下面对应的说明，我们会不断的新增对更多平台的支持，有什么不清楚的或者想法可以进入[issue](https://github.com/hai2007/clunch/issues)反馈给我们！

- [uni-app](https://hai2007.gitee.io/clunch/#/polyfill?fixed=uni-app)

## 联系我们

- QQ: 2501482523
- Email: 2501482523@qq.com

开源协议
---------------------------------------
[MIT](https://github.com/hai2007/clunch/blob/master/LICENSE)

Copyright (c) 2020-2021 [hai2007](https://hai2007.gitee.io/sweethome/) 走一步，再走一步。
