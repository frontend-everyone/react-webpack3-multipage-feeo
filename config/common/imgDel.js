let fs = require('fs');
let join = require('path').join;

/**
 *
 * @param startPath  起始目录文件夹路径
 * @returns {Array}
 */
function findSync(startPath) {
    let result = [];

    function finder(path) {
        let files = fs.readdirSync(path);
        files.forEach((val, index) => {
            let fPath = join(path, val);
            let stats = fs.statSync(fPath);
            if (stats.isDirectory()) finder(fPath);
            if(val.indexOf('png') !==-1 ||val.indexOf('gif') !==-1 || val.indexOf('jpg') !==-1){
                if (stats.isFile()) result.push(val.substring(0,val.length - 12));
            }
        });

    }

    finder(startPath);
    return result;
}

let fileNames = findSync('pc/resource/');
console.log(fileNames);