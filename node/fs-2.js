import fs from 'node:fs'

// 写入文件

// 默认覆盖内容
// fs.writeFileSync('./java.pdf','java之父余胜军');
// flag a append 追加
// fs.writeFileSync('./java.pdf','some',{
// 	flag:'a'
// });


// 追加

// fs.appendFileSync('./java.pdf','append');

// 可写流

let writeStream = fs.createWriteStream('./java.pdf');

let verse = [
	"待到秋来九月八",
	"我花开后百花杀",
	"冲天香阵透长安",
	"满城尽带黄金甲"
]

verse.forEach((item)=>{
	writeStream.write(item+'\n');
})

//关闭
writeStream.end(); 

//结束事件
writeStream.on('finish',()=>{
	console.log("write finish")
})

// 硬链接 共享文件 备份文件
// fs.linkSync("./java.pdf",'./java2.pdf');

// 软连接 像是windows 快捷方式 需要管理员权限

// fs.symlinkSync('./java.pdf','./java3.pdf');




