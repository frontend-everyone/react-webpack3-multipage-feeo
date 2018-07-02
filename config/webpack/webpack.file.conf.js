const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

function cleanFun(arr) {
    return (new CleanWebpackPlugin(arr, {root: path.resolve(__dirname, '../../'), verbose: true, dry: false}))
}

let copyObj = [
    /*{from: './app/public/plugin', to: './plugin'},
    {from: './app/public/versionTips', to: './versionTips'},
    {from: './app/public/file', to: './resource'},
    {from: './app/public/img/favicon.ico', to: './'},*/
];

let copyArr = [];
copyObj.map((data) => {
    copyArr.push(
        new CopyWebpackPlugin([{from: data.from, to: data.to, ignore: ['.*']}])
    )
});


module.exports = {
    devDirectory: 'build', /*开发目录*/
    proDirectory: 'pc', /*发布目录*/
    resource: 'resource', /*静态资源*/
    resourcePrefix: '/static/pc/', /*线上静态资源前缀*/
    cleanFun: cleanFun,
    copyArr: copyArr,
    copyObj: copyObj
};
