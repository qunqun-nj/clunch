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
