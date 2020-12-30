const pages = {

    /**
     * 首页
     */

    "guide": {
        "content": () => import('../pages/guide.iCrush')
    },

    /**
     * 文档
     */

    "api": {
        "content": () => import('../pages/api/index.iCrush'),

        // 基础

        "object": {
            "content": () => import('../pages/api/basic/object.iCrush')
        },
        "series": {
            "content": () => import('../pages/api/basic/series.iCrush')
        },
        "painter": {
            "content": () => import('../pages/api/basic/painter.iCrush')
        },
        "directive": {
            "content": () => import('../pages/api/basic/directive.iCrush')
        },
        "service": {
            "content": () => import('../pages/api/basic/service.iCrush')
        },

        // 组件

        "series-list": {
            "content": () => import('../pages/api/series/list.iCrush')
        },

        "_default_": "object"

    },

    /**
     * 教程
     */

    "course": {
        "content": () => import('../pages/course/index.iCrush'),
        "author": {
            "content": () => import('../pages/course/author.iCrush')
        },
        "install": {
            "content": () => import('../pages/course/install.iCrush')
        },
        "introduce": {
            "content": () => import('../pages/course/introduce.iCrush')
        },
        "_default_": "introduce"
    },

    /**
     * 用例
     */

    "examples": {
        "content": () => import('../pages/examples/index.iCrush'),
        "menu": {
            "content": () => import('../pages/examples/menu.iCrush')
        },
        "page1": {
            "content": () => import('../pages/examples/page1/index.iCrush')
        },
        "page2": {
            "content": () => import('../pages/examples/page2/index.iCrush')
        },
        "page3": {
            "content": () => import('../pages/examples/page3/index.iCrush')
        },
        "page4": {
            "content": () => import('../pages/examples/page4/index.iCrush')
        },
        "page5": {
            "content": () => import('../pages/examples/page5/index.iCrush')
        },
        "page6": {
            "content": () => import('../pages/examples/page6/index.iCrush')
        },
        "page7": {
            "content": () => import('../pages/examples/page7/index.iCrush')
        },
        "_default_": "menu"
    },

    /**
    * 更多平台支持
    */

    "polyfill": {
        "content": () => import('../pages/polyfill.iCrush')
    },

    "_default_": "guide"

};


export function loadRouter(doback, deep) {

    let routers = (window.location.href + "#").split("#")[1].replace(/\?.{0,}$/, '').replace(/^\//, '').replace(/\/$/, '').split('/'), page = pages;
    for (let i = 0; i < deep; i++) {
        page = page[routers[i]] || page[page['_default_']];
    }
    page.content().then(function (data) {
        doback(data.default);
    });

};

export function goRouter(doback, keyArray) {

    let page = pages, router = "#";
    for (let i = 0; i < keyArray.length; i++) {
        page = page[keyArray[i]] || page[page['_default_']];
        router += "/" + keyArray[i];
    }

    page.content().then(function (data) {
        doback(data.default);
    });

    window.location.href = router;

};
