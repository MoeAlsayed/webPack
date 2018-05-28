const path = require("path");
const webpack = require('webpack');
module.exports = {
    // The main file for our js 
    entry: "./src/index.js",
    //The output  files
    output: {
        //The name for our main file 
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist/assets')
},
    module: {
    rules: [
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }
    ]
},
devServer: {
    contentBase: "./dist/assets/",
    hot: true
},
plugins: [
    new webpack.HotModuleReplacementPlugin()
],
      };