const path = require('node:path');

// 1. base name 返回给定路径的最后一部分
console.log("base name ",path.basename('/foo/bar/base/asd/jsd.html'));

// windows 默认是反斜杠,兼容正斜杠的写法
// posix 处理不了 windows 的路径

console.log(path.win32.basename("\\foo\\bar\\xjka.html"));

// 2. dirname 返回除了名字外目录名字
console.log("dir name ",path.dirname('/foo/bar/base/asd/jsd.html'));

// 3. extname 返回扩展名
// 如果没. 则返回空字符串
// 如果有多个. 则返回最后一个
console.log("ext name",path.extname('/foor/djkae/jda.js'));

// 4. join 拼接路径
// 支持 ../ 命令
console.log("join",path.join('w','s','c','../'))

// 5. resolve 将相对路径解析返回绝对路径
// 传入多个绝对路径，返回最后一个
// 传入绝对路径+ 相对路径 返回拼接后
console.log("resolve ",path.resolve("./index.js"));
console.log("resolve ",path.resolve(__dirname,"./indes.js"));
console.log("__file name ",__filename);

// 6. parse 解析路径并返回一个对象 format 解析对象返回路径
console.log("parse",path.parse(__filename));
console.log("format",path.format(
	 {
	  root: '/',
	  dir: '/home/xm130812/.nb/study/node',
	  base: 'path.js',
	  ext: '.js',
	  name: 'path'
	}
));
