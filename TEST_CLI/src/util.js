import fs from 'node:fs'
import download from 'download-git-repo'
import ora from 'ora'

const spinner = ora("downloading...");

export const checkPath=(path)=>{
	return fs.existsSync(path);
}

export const downloadTemplate=(branch,name)=>{
	return new Promise((resolve,reject)=>{
		spinner.start();
		const url = `direct:https://gitee.com/chinafaker/vue-template.git#${branch}`;
		console.log("url",url)
		download(
			url,
			name,
			{clone:true},
			function(err){
				if(err){
					reject(err);
					spinner.fail("download fail");
				}else{
					resolve();
					spinner.succeed("download success");
					
				}
				
			}
		);
	})
}
