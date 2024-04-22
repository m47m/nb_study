import crypto from 'node:crypto';

// 对称加密算法

let key = crypto.randomBytes(32);

let iv = Buffer.from(crypto.randomBytes(16)); 

// 1 algorithm 接收加密算法
// 2 key 密钥 32位
// 3 iv 初始化向量 16位 保证生成的密钥串不一样 也可进行补位
const cipher = crypto.createCipheriv("aes-256-ccm",key,iv);

// hex 16进制
cipher.update("some thing","utf-8","hex")

const result = cipher.final("hex")

console.log("result",result)

