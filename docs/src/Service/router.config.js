const pages = {

    /**
     * 首页
     */

    "guide": {
        "content": () => import('../pages/guide.paper')
    },

    /**
     * 文档
     */

    "api": {
        "content": () => import('../pages/api/index.paper'),

        // 基础

        "object": {
            "content": () => import('../pages/api/basic/object.paper')
        },
        "series": {
            "content": () => import('../pages/api/basic/series.paper')
        },
        "painter": {
            "content": () => import('../pages/api/basic/painter.paper')
        },
        "directive": {
            "content": () => import('../pages/api/basic/directive.paper')
        },
        "service": {
            "content": () => import('../pages/api/basic/service.paper')
        },

        // 组件

        "series-list": {
            "content": () => import('../pages/api/series/list.paper')
        },
        "series-reuse": {
            "content": () => import('../pages/api/series/reuse.paper')
        },

        // 进阶
        "enhance-platform": {
            "content": () => import('../pages/api/enhance/platform.paper')
        },

        "_default_": "object"

    },

    /**
     * 教程
     */

    "course": {
        "content": () => import('../pages/course/index.paper'),
        "author": {
            "content": () => import('../pages/course/author.paper')
        },
        "install": {
            "content": () => import('../pages/course/install.paper')
        },
        "introduce": {
            "content": () => import('../pages/course/introduce.paper')
        },
        "event": {
            "content": () => import('../pages/course/event.paper')
        },
        "series": {
            "content": () => import('../pages/course/series.paper')
        },
        "_default_": "introduce"
    },

    /**
     * 常见问题
     */

    "qa": {
        "content": () => import('../pages/qa/index.paper')
    },

    /**
     * 用例
     */

    "examples": {
        "content": () => import('../pages/examples/index.paper'),
        "menu": {
            "content": () => import('../pages/examples/menu.paper')
        },
        "page1": {
            "content": () => import('../pages/examples/page1/index.paper')
        },
        "page2": {
            "content": () => import('../pages/examples/page2/index.paper')
        },
        "page3": {
            "content": () => import('../pages/examples/page3/index.paper')
        },
        "page4": {
            "content": () => import('../pages/examples/page4/index.paper')
        },
        "page5": {
            "content": () => import('../pages/examples/page5/index.paper')
        },
        "page6": {
            "content": () => import('../pages/examples/page6/index.paper')
        },
        "page7": {
            "content": () => import('../pages/examples/page7/index.paper')
        },
        "_default_": "menu"
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
