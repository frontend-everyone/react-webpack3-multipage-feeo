const fs = require("fs");
const path = require("path");
const entry = require('./entry');
const nodeCommon = require('../common/nodeCommon');

const entryBuildPath = path.resolve(__dirname, '../../entryBuild');
nodeCommon.deleteFile(entryBuildPath);
fs.mkdirSync(entryBuildPath);

const entryContent = (data) => {
    return(
`import React from 'react';
import ReactDOM from 'react-dom';
import Index from '../app/component/${data.path}';
import Header from '../app/component/common/Header';
import Footer from '../app/component/common/Footer';
ReactDOM.render([<Header key="Header"/>,<Index key="Index"/>,<Footer key="Footer"/>],document.getElementById('app'));`
    )
};
/*生成webpack entry 入口文件*/
entry.map((data) => {
    fs.writeFile(entryBuildPath + '/' + data.name + '.js', entryContent(data), 'utf8', function (err) {
        if (err) {
            return console.log(err);
        }
    });
});
