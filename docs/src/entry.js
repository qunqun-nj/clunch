import QuickPaper from 'quick-paper';

// 兼容文件
import '@hai2007/polyfill/Promise.js';

// 引入启动界面
import App from './App.paper';

// 引入基础样式
import '@hai2007/style/normalize.css';

// 引入公共样式
import './style/style.css';
import './style/doc.css';
import './style/menu.css';
import './style/code-view.css';

// 安装路由
import { loadRouter, goRouter } from './Service/router.config.js';
QuickPaper.prototype.loadRouter = loadRouter; QuickPaper.prototype.goRouter = goRouter;

// 引入指令
import './directives/ui-active';

//根对象
window.quickPaper = new QuickPaper({

    //挂载点
    el: document.getElementById('root'),

    // 启动iCrush
    render: createElement => createElement(App)
});
