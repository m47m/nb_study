#!/usr/bin/env node
import { program } from 'commander';
import fs from 'node:fs';
import inquirer from 'inquirer';
import { type } from 'node:os';

import {checkPath,downloadTemplate} from './util.js'

console.log("test cli start")

let json = fs.readFileSync('./package.json');
json = JSON.parse(json)
program.version(json.version)

program.command('create <projectName>')
    .alias('c')
    .description('create project')
    .action((projectName) => {
	    inquirer.prompt([
		    {
			    type:'input', //input confrim list checkbox
			    name:'projectName',// 返回值的key
			    message:'please enter project name',
			    default:projectName,
		    },
		    {
			    type:'confirm',
			    name:'isTs',
			    message:'use typescript?',
			    default:'ts'
		    }
	    ]).then((res)=>{
		    if(checkPath(res.projectName)){
			    console.log("the folder exists")
			    return ;
		    }

		    if(res.isTs){
			    downloadTemplate('ts',res.projectName);
		    }else{
			    downloadTemplate('js',res.projectName);
		    }
	    });
    });

program.parse(process.argv);
