import http from 'node:http';
import url from 'node:url';
import fs from 'node:fs';
import {createProxyMiddleware} from 'http-proxy-middleware';
import config from './test.config.cjs'

const html = fs.readFileSync('./proxy.html');

const proxyServer  = http.createServer((req,res)=>{
	const {pathname} = url.parse(req.url);
	const proxyList = Object.keys(config.server.proxy)
	console.log("8003 pathname",pathname);

	if(proxyList.includes(pathname)){
		console.log('in proxy')
		console.log('in proxy',config.server.proxy[pathname])
		const proxy = createProxyMiddleware(config.server.proxy[pathname]);
		proxy(req,res)
		return 
	}
	console.log("proxyList",proxyList);
	res.writeHead(200,{
		'Content-Type':'text/html'
	})

	res.end(html);
})

proxyServer.listen(8003);
