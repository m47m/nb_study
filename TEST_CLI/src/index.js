#!/usr/bin/env node
import { program } from 'commander';
import fs from 'node:fs';

console.log("test cli start")

let json = fs.readFileSync('./package.json');
json = JSON.parse(json)
program.version(json.version)

program.command('create <projectName>')
    .alias('c')
    .description('create project')
    .action((projectName) => {
        console.log("project name:", projectName)
    });

program.parse(process.argv);