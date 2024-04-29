import http from 'node:http';
import url from 'node:url';

http.createServer((req,res)=>{
	const {pathname} = url.parse(req.url);
	console.log("3000 pathname",pathname);

	if(pathname === '/api'){
		res.end('in 3000 say success proxy')
		return 
	}
	res.end('just 3000')
}).listen(3000);
