var path = require('path');
var ROOT_APP = path.resolve(__dirname);
var SRC_DIR = path.resolve(ROOT_APP, 'src');
var OUT_DIR = path.resolve(ROOT_APP, 'dist');

var config = {
    //context: path.join(__dirname, 'src'),
    entry: [
        path.resolve(SRC_DIR, 'index.js'),
    ],
    output: {
        path: OUT_DIR,
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: SRC_DIR,
                loader: "babel!babel-loader",
                exclude: path.resolve(ROOT_APP, 'node_modules')
            },
            {
                test: /\.css$/,
                include: path.resolve(ROOT_APP, 'node_modules','react-tab-panel'),
                loader: "style!css"
            }
        ],
    },
    // resolveLoader: {
    //     root: [
    //         path.join(ROOT_APP, 'node_modules'),
    //     ],
    // },
    resolve: {
        // root: [
        //     SRC_DIR,
        // ],
        extensions: ['', '.js', '.jsx', 'css'],
        modulesDirectories: ["node_modules"]
    },
};
module.exports = config;