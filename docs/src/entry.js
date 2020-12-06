import iCrush from 'icrush';

// 兼容文件
import 'promise-polyfill/src/polyfill';

// 引入启动界面
import App from './App.iCrush';

// 引入基础样式
import '@hai2007/style/normalize.css';

// 引入公共样式
import './style/style.css';
import './style/doc.css';
import './style/menu.css';
import './style/code-view.css';

// 安装路由
import { loadRouter, goRouter } from './Service/router.config.js';
iCrush.prototype.loadRouter = loadRouter; iCrush.prototype.goRouter = goRouter;

// 引入指令
import './directives/ui-code';
import './directives/ui-active';

//根对象
window.icrush = new iCrush({

    //挂载点
    el: document.getElementById('root'),

    // 启动iCrush
    render: createElement => createElement(App)
});
