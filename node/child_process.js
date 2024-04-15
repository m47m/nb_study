// NODE 创建子线程共7个API SYNC 同步
/**
 * spawn 执行命令
 * exec 执行命令
 * execFile 执行可执行文件
 * fork 创建node子进程
 * execSync 执行命令 同步执行
 * execFileSync 执行可执行文件 同步执行
 * spawnSync 执行命令 同步执行
 */
const { exec } = require('child_process');
//exec
// child_process.exec(command,[options],callback)
exec('node -v', (err, stdout, stderr) => {
    if (err) {
        return err;
    }
    console.log(stdout.toString())
})