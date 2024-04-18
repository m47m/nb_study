import util from 'node:util';
import {exec} from 'node:child_process';
import { resolve } from 'node:path';
import { rejects } from 'node:assert';

// exec('node -v',(err,stdout,stderr)=>{
// 	if(err){
// 		return;
// 	}
// })


// const execPromise = util.promisify(exec); // 返回一个函数
//
// execPromise('node -v').then((res)=>{
// 	console.log('res',res)
// })

const promisify = (fn) =>{
	return (...args)=>{
		return new Promise((resolve,reject)=>{
			fn(...args,(err,...values)=>{
				if(err){
					reject(err);
				}

				if(values && values.length >1 ){
					let obj = {};
					for(let key in values){
						obj[key] = values[key]
					}
					resolve(obj);
				}else{
					resolve(values[0])
				}
			})
		})
	}
}

const execPromise2 = promisify(exec);

execPromise2('node -v').then((res)=>{
	console.log('res',res)
}).catch((err)=>{
	console.log('err',err)
})

const callbackify = (fn)=>{
	return (...args)=>{
		let callback = args.pop();
		fn(...args).then(res=>{
			callback(null,res);
		}).catch(err=>{
			callback(err)
		})
	}
}


//c语言printf
const str = util.format('%s---%s','aa','bb','++cc');

console.log("format str",str);

