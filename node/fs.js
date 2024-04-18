import fs from 'node:fs';
import fs2 from 'node:fs/promises';

// 读取文件
// 异步 同步 promise

fs.readFile('./test.sh',
    {
        encoding: 'utf-8',
        flag: 'r',
    },
    (err, data) => {
        if (err) {
            throw err;
        }
        console.log("🚀 ~ data:", data)
    }
)

// 同步 阻塞代码
let result = fs.readFileSync('test.sh');// buffer
console.log("🚀 ~ result:", result.toString());
console.log("test")

// promise
fs2.readFile('./test1.sh').then((res) => {
    console.log("🚀 ~ fs2.readFile ~ res:", res.toString())
}).catch((err) => {
    console.log("🚀 ~ fs2.readFile ~ err:", err.toString())
})

//  可读流
// 处理大文件时使用
const readStream = fs.createReadStream('./test.sh');

readStream.on('data', (chunk) => {
    console.log("🚀 ~ readStream.on ~ chunk:", chunk.toString())
})
readStream.on('end', () => {
    console.log("end")
})


// 创建文件夹 
// 一般使用同步方式

// fs.mkdirSync("./mhl")

// 递归创建
fs.mkdirSync("./mhl/xyz", {
    recursive: true
});

// 删除文件
fs.rmSync('./mhl', {
    recursive: true
});

// 重命名文件
// fs.renameSync('./index.js', 'rename.js')

// 监听文件变化
fs.watch('./test.sh', (event, filename) => {
    console.log("🚀 ~ fs.watch ~ event:", event)
    console.log("🚀 ~ fs.watch ~ filename:", filename)
})

console.log('after watch')