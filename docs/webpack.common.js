const iCrushLoaderPlugin = require('icrush-loader-plug');
const fs = require('fs');

const pkg = JSON.parse(fs.readFileSync('./package.json'));

module.exports = {
    entry: ['./src/entry.js'],
    output: {
        path: __dirname,
        filename: 'dist/clunch-doc@v' + pkg.version + '.js',
        chunkFilename: 'dist/clunch-doc@v' + pkg.version + '-bundle[name].js'
    },
    resolve: {
        alias: {
            'clunch': require('path').resolve('../dist/clunch-template.js')
        }
    },
    module: {
        rules: [{
            test: /\.clunch$/,
            exclude: /node_modules/,
            loader: ['../loader.js']
        }, {
            test: /\.iCrush$/,
            loader: ['icrush-loader'],
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: ['icrush-style-loader', 'css-loader', 'postcss-loader']
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.(png|jpg|jpeg|gif|bmp)$/,
            loader: [{
                loader: "url-loader",
                options: {
                    name: "dist/[name].[ext]",
                    context: "src/asset",
                    limit: 5000
                }
            }]
        }]
    },
    plugins: [
        new iCrushLoaderPlugin()
    ]
};
