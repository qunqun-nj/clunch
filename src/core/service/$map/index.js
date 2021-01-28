
import { initConfig } from '../../../tool/config';

// 投影算法
import eoap from './eoap';

export default function (_config) {

    let config = initConfig({

        // 默认使用「等角斜方位投影」
        type: 'eoap',

        // 缩放比例
        scale: 1,

        // 投影中心经纬度
        center: [107, 36]

    }, _config);

    let map = function (longitude, latitude) {

        if (config.type == 'eoap') {
            return eoap(config, longitude, latitude);
        } else {
            throw new Error('Map type configuration error!');
        }

    };

    // 修改配置
    map.config = function (_config) {
        config = initConfig(config, _config);
        return map;
    };

    return map;

};
