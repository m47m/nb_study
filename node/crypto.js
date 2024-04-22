import { log } from 'node:console';
import crypto from 'node:crypto';

// 对称加密算法

let key = crypto.randomBytes(32);

let iv = Buffer.from(crypto.randomBytes(16)); 

// 1 algorithm 接收加密算法
// 2 key 密钥 32位
// 3 iv 初始化向量 16位 保证生成的密钥串不一样 也可进行补位
const cipher = crypto.createCipheriv("aes-256-cbc",key,iv);

// hex 16进制
cipher.update("some thing","utf-8","hex")

const result = cipher.final("hex")

console.log("result",result)

// 解密

const deCipher = crypto.createDecipheriv("aes-256-cbc",key,iv);

deCipher.update(result,"hex","utf-8");

console.log("result",deCipher.final("utf-8"));

// 非对称加密算法
// 生成公钥和私钥
// 私钥只能由管理员拥有
// 公钥可以对外公开

const {privateKey,publicKey} = crypto.generateKeyPairSync("rsa",{
	modulusLength:2048, // 长度越长越安全，越慢
});

const encrypted = crypto.publicEncrypt(publicKey,Buffer.from("hello some thing"));

console.log("encrypted\n",encrypted.toString("hex"))

const decrypted = crypto.privateDecrypt(privateKey,encrypted);

console.log("decrypted\n",decrypted.toString())

// 哈希函数
// 不能被解密 单向 不可逆
// 具有唯一性
// 不能明文存储
// 校验文件一致性
let hash = crypto.createHash('md5');

hash.update("hello hash");

console.log(hash.digest("hex"));

































