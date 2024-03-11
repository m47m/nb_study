const path = require('node:path');

// 1. base name 返回给定路径的最后一部分
console.log("base name :",path.basename('/foo/bar/base/asd/jsd.html'));

// windows 默认是反斜杠,兼容正斜杠的写法
// posix 处理不了 windows 的路径

console.log(path.win32.basename("\\foo\\bar\\xjka.html"));

// 2. dirname 返回除了名字外目录名字
console.log("dir name :",path.dirname('/foo/bar/base/asd/jsd.html'));
