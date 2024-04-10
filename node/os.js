const { exec } = require("node:child_process");
const os = require("node:os");

console.log("type", os.type());

console.log("platform", os.platform());

console.log("release", os.release());

console.log("home dir", os.homedir());

console.log("arch", os.arch());

console.log("cpus", os.cpus());

// {
//     model: 'Apple M2', CPU 类型型号
//     speed: 24, CPU 时钟速度
//     times: {
//         user: 175440,
//             nice: 0,
//                 sys: 91910,
//                     idle: 1129180,
//                         irq: 0
//     }
// },

// user: 表示CPU被用户程序使用的时间（以毫秒为单位）。
// nice: 表示CPU被优先级较低的用户程序使用的时间（以毫秒为单位）。
// sys: 表示CPU被系统内核使用的时间（以毫秒为单位）。
// idle: 表示CPU处于空闲状态的时间（以毫秒为单位）。
// irq: 表示CPU被硬件中断处理程序使用的时间（以毫秒为单位）。

console.log("network", os.networkInterfaces());

function openBrowserURL(url) {
    console.log("open browser start");
    console.log("🚀 ~ openBrowserURL ~ url:", url)
    const platform = os.platform();
    console.log("🚀 ~ openBrowserURL ~ platform:", platform)
    if (platform === "darwin") {// macos
        console.log("mac start ")
        exec(`open ${url}`);
    } else if (platform === "win32") {// windows
        exec(`start ${url}`);
    } else { //linux unix-linux
        exec(`xdg-open ${url}`);
    }
}

openBrowserURL("https://juejin.cn/post/7274072375964254269");