// process 是Nodejs操作当前进程和控制当前进程的API，并且是挂载到globalThis下面的全局API

console.log("process cwd", process.cwd());

// 获取执行进程后的参数
console.log("process argv", process.argv);
const [node, path, ...argv] = process.argv;
console.log("🚀 ~ argv:", argv)
console.log("🚀 ~ path:", path)
console.log("🚀 ~ node:", node)
// 第一个参数
console.log("process argv0", process.argv0);

// 当前进程的内存使用情况
console.log("memoryUsage", process.memoryUsage());

// exit 退出 kill 杀死
setTimeout(() => {
    console.log("5s")
}, 5000);

setTimeout(() => {
    console.log("2s")
    // process.exit();
}, 2000);

setTimeout(() => {
    console.log("3s")
    process.kill(process.pid);
    // [1]    2491 terminated  node process.js
}, 3000);

process.on('exit', () => {
    console.log("process exit")
})

// 查询或修改系统的所有环境变量
/**
 *  cross-env 是 跨平台设置和使用环境变量 
 *  不论是在Windows系统还是POSIX系统。
 *  同时，它提供了一个设置环境变量的脚本，
 *  使得您可以在脚本中以unix方式设置环境变量，然后在Windows上也能兼容运行
 *  cross-env NODE_ENV=dev
 */
process.env.SHLVL = "some thing wrong"
console.log("process env", process.env);