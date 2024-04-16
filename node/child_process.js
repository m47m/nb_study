<<<<<<< HEAD
// NODE 创建子线程共7个API SYNC 同步
// 同步，Sync
// 异步，一般会有一个回调函数
/**
 * spawn 执行命令
 * exec 执行命令 返回buffer 可以执行shell命令 或者和软件交互
 * execFile 执行可执行文件
 * fork 创建node子进程
 * execSync 执行命令 同步执行
 * execFileSync 执行可执行文件 同步执行
 * spawnSync 执行命令 同步执行
 */
const { exec, execSync, spawn, spawnSync, execFile, execFileSync, fork } = require('child_process');
const path = require('path');
const { stderr } = require('process');
//exec
//execSync
//执行较小的shell命令，想要马上拿到结果的 execSync 字节上限 200kb 
// child_process.exec(command,[options],callback)
exec('node -v', (err, stdout, stderr) => {
    if (err) {
        return err;
    }
    console.log(stdout.toString())
})

const npmVersion = execSync('npm -v');//buffer
console.log("npmVersion", npmVersion);
console.log("npmVersion toString", npmVersion.toString());

// execSync("mkdir test_execFile");

// execSync("open https://juejin.cn/post/7274072375964254269")
// options 配置项
// cwd <string> 子进程的当前工作目录。
// env <Object> 环境变量键值对。
// encoding <string> 默认为 'utf8'。
// shell <string> 用于执行命令的 shell。 在 UNIX 上默认为 '/bin/sh'，在 Windows 上默认为 process.env.ComSpec。 详见 Shell Requirements 与 Default Windows Shell。
// timeout <number> 默认为 0。
// maxBuffer <number> stdout 或 stderr 允许的最大字节数。 默认为 200*1024。 如果超过限制，则子进程会被终止。 查看警告： maxBuffer and Unicode。
// killSignal <string> | <integer> 默认为 'SIGTERM'。
// uid <number> 设置该进程的用户标识。（详见 setuid(2)）
// gid <number> 设置该进程的组标识。（详见 setgid(2)）



//spawn 没有字节上限 实时返回一个流
//spawnSync

// 传递参数需要使用数组传递
// const { stdout } = spawn('netstat', ['-a']);

// stdout.on('data', (msg) => {
//     console.log('msg toString', msg.toString())
// })
// stdout.on('close', (msg) => {
//     console.log('netstat end')
// })

console.log("some thing tag")

//execFile 运行文件
console.log(path.resolve(__dirname, './test.sh'));
execFile('/Users/xm130812/.nb/study/node/test.sh')
execFile(path.resolve(__dirname, './test.sh'), null, (err, stdout, stderr) => {
    console.log("🚀 ~ execFile ~ err:", err.toString())
    console.log("🚀 ~ execFile ~ stdout:", stdout.toString())
    console.log("🚀 ~ execFile ~ stderr:", stderr.toString())
})
=======
console.log("test code sometion")

>>>>>>> d4c45d5 ([nb] Sync)
