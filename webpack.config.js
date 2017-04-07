// https://webpack.js.org/configuration/
require('webpack');
let webpack = require('webpack');
let path = require('path');
let pkg = require("./package.json");
const minimize = process.env.MIN ? true : false;
let banner =
    '\n' +
    pkg.name + ' -  ' + pkg.version + '\n' +
    pkg.author + '\n' +
    pkg.homepage + '\n' +
    'Under ' + pkg.license + ' license \n' +
    '\n';
let fileName = pkg.name + ".js";
let plugins = [
    new webpack.BannerPlugin(banner),
    new webpack.DefinePlugin({
        __VERSION__: JSON.stringify(pkg.version)
    })
];
if (minimize) {
    plugins.push(new webpack.optimize.UglifyJsPlugin());
    fileName = pkg.name + ".min.js";
}
module.exports = {
    entry: "./es6/init.js", // string | object | array
    output: {
        library: "pDate",
        libraryTarget: "umd2",
        path: path.resolve(__dirname, "dist"), // string
        filename: fileName // string
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, "./es6")
                ],
                exclude: [
                    path.resolve(__dirname, "./node_module")
                ],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            }
        ]
    },
    plugins: plugins
}