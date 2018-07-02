// js/app.js：指定确切的文件名。
//	js/*.js：某个目录所有后缀名为js的文件。
//	js/**/*.js：某个目录及其所有子目录中的所有后缀名为js的文件。
//	!js/app.js：除了js/app.js以外的所有文件。
//	*.+(js|css)：匹配项目根目录下，所有后缀名为js或css的文件。

//流 stream   管道 pipe 管道
//如果想在读取流和写入流的时候做完全的控制，可以使用数据事件。但对于单纯的文件复制来说读取流和写入流可以通过管道来传输数据。
/*
 * 复制目录中的所有文件包括子目录
 * @src param{ String } 需要复制的目录   例 images 或者 ./images/
 * @dst param{ String } 复制到指定的目录    例 images images/
 */
const fs = require("fs");
const path = require("path");
//获取当前目录绝对路径，这里resolve()不传入参数
const filePath = path.resolve();

const copy = function(src,dst){

    //判断文件需要时间，则必须同步
    if(fs.existsSync(src)){
        fs.readdir(src,function(err,files){
            if(err){console.log(err);return;}
            files.forEach(function(filename){

                //url+"/"+filename不能用/直接连接，Unix系统是”/“，Windows系统是”\“
                var url = path.join(src,filename),
                    dest = path.join(dst,filename);
                console.log(url);
                console.log(dest);
                fs.stat(path.join(src,filename),function(err, stats){
                    if (err) throw err;

                    //是文件
                    if(stats.isFile()){

                        //创建读取流
                        readable = fs.createReadStream(url);
                        //创建写入流
                        writable = fs.createWriteStream(dest,{ encoding: "utf8" });
                        // 通过管道来传输流
                        readable.pipe(writable);

                        //如果是目录
                    }else if(stats.isDirectory()){
                        exists( url, dest, copy );
                    }
                });
            });
        });
    }else{
        console.log("给定的目录不存，读取不到文件");
        return;
    }
};

function exists(url,dest,callback){
    fs.exists(dest,function(exists){
        if(exists){
            callback && callback(url,dest);
        }else{
            //第二个参数目录权限 ，默认0777(读写权限)
            fs.mkdir(dest,0777,function(err){
                if (err) throw err;
                callback && callback(url,dest);
            });
        }
    });
}
module.exports = copy;