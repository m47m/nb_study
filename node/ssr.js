const {JSDOM} = require('jsdom');
const fs = require('node:fs');

const root = new JSDOM(`<!DOCTYPE html><html><head></head><body>
	<div id='app'></div>
</body></html>`);

const window = root.window;
const document = window.document;
const app = document.querySelector('#app');
// 请求接口
fetch('https://api.thecatapi.com/v1/images/search?limit=10&page=1').then(res=>res.json()).then(data=>{
	data.forEach(element => {
		const img = document.createElement('img');
		img.src = element.url;
		img.style.width = '200px';
		img.style.height = '200px';

		app.appendChild(img);
	});
	// 将序列化后的内容 写入文件
	// 生成html文件
	fs.writeFileSync('./ssr_index.html',root.serialize());

	console.log(root.serialize());
});

