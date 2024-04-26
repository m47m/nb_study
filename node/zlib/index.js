import zlib from "node:zlib";
import fs from 'node:fs'

import http from 'node:http'

const server = http.createServer((req,res)=>{
	const txt = 'some thing'.repeat(1000)
	// res.setHeader('Content-Encoding','gzip');
	res.setHeader('Content-Encoding','deflate');
	res.setHeader('Content-Type','text/plan;charset=utf-8');
	// const result = zlib.gzipSync(txt);
	const result = zlib.deflateSync(txt);

	res.end(result);
})

server.listen(3001,()=>{
	console.log("running");
});

// http 请求压缩

// zlib 压缩
// const readStream = fs.createReadStream('index.txt');
// const writeStream = fs.createWriteStream('index.txt.gz');
//
// readStream.pipe(zlib.createGzip()).pipe(writeStream);

// zlib 解压
// const readStream = fs.createReadStream('index.txt.gz');
// const writeStream = fs.createWriteStream('index2.txt');
//
// readStream.pipe(zlib.createGunzip()).pipe(writeStream);

// deflate 压缩
// const readStream = fs.createReadStream('index.txt');
// const writeStream = fs.createWriteStream('index.txt.deflate');
//
// readStream.pipe(zlib.createDeflate()).pipe(writeStream);


// deflate 解压
// const readStream = fs.createReadStream('index.txt.deflate');
// const writeStream = fs.createWriteStream('index4.txt');
//
// readStream.pipe(zlib.createInflate()).pipe(writeStream);
