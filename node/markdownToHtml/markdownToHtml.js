import ejs from 'ejs';
import fs from 'node:fs'
import {marked} from 'marked'
import browserSync from 'browser-sync'
let browser;

const server = () =>{
	browser = browserSync.create();
	browser.init({
		server:{
			baseDir:'./',
			index:'markdownToHtml.html'
		}
	})
}

const init =(callback)=>{
	const md = fs.readFileSync('./README.md','utf-8');
	console.log("md :\n",md);
	ejs.renderFile(
		'template.ejs',
		{
			content:marked.parse(md),
			title:"markdown to html"
		},
		(err,data)=>{
			if(err) throw err
			fs.writeFileSync('markdownToHtml.html',data);
			callback && callback();
		}
	)
}

fs.watchFile('README.md',(curr,prev)=>{
	if(curr.mtime !== prev.mtime){
		init(()=>{
			browser.reload();
		})
	}
})

init(()=>{
	server(); 
});
