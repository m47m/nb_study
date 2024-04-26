import http from 'node:http';
import url from 'node:url';


http.createServer((req,res)=>{
	const URL = url.parse(req.url,true);
	const pathname = URL.pathname;
	const query = URL.query;
	console.log("url",URL);
	console.log("pathname",pathname);
	if(req.method === 'POST'){
		if(pathname === '/login'){
			let data = '';
			req.on('data',(chunk)=>{
				console.log("chunk",chunk)
				data += chunk;
			})
			req.on('end',(chunk)=>{
				console.log('end')
				res.setHeader('Content-Type',"application/json");
				res.statusCode = 200;
				console.log("data",data)
				res.end(data);
			})
		}else{
			res.statusCode = 404
			res.end('nothing')
		}
	}else if(req.method === 'GET'){
			if(pathname === '/get'){
				console.log("query",query)
				res.statusCode = 200
				res.end(query.a);
			}else{
				res.statusCode = 404
				res.end('nothing')
			}
	}
}).listen(9080,()=>{
	console.log("http start")
})

