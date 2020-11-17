let Clunch = undefined;

// 测试打包设计
import Matrix4 from '@hai2007/tool/Matrix4.js';
Clunch.Matrix4 = Matrix4;

// 对外暴露调用接口

if (module && module.exports) {
    module.exports = Clunch;
} else {
    window.Clunch = Clunch;
}
