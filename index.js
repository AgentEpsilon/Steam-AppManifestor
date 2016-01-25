#! /usr/bin/env node
'use strict'
const inquirer = require('inquirer')
const chalk = require('chalk')
const os = require('os')
const fs = require('fs')
const path = require('path')

let steamapps = ''
switch(process.platform){
  case 'win32': steamapps = 'C:/Program Files/Valve/Steam/SteamApps'; break
  case 'darwin': steamapps = os.homedir()+'/Library/Application Support/Steam/steamapps'; break
  default: steamapps = os.homedir()+'/.steam/steam/SteamApps'; break;
}

console.log(chalk.bold('Please enter the AppID of the app you would like to download.'))
console.log(chalk.red.bold('This only works for apps on your account!!!'))
console.log('AppIDs can be found here: '+chalk.green('http://steamdb.info/'))

inquirer.prompt([
  {
    'type': 'input',
    'name': 'appid',
    'message': 'AppID:',
    'validate': input=>{
      if(isNaN(+input)){
        return "That's not a number!"
      }else{
        return true
      }
    }
  },
  {
    'type': 'list',
    'name': 'out',
    'message': 'Where would you like to output the appmanifest?',
    'choices': [
      steamapps,
      os.homedir()+'/Desktop',
      'Other',
      'stdout'
    ]
  },
  {
    'when': answers=>answers.out==='Other',
    'type': 'input',
    'name': 'dir',
    'message': 'Output Dir:',
    'validate': function(input){
      let done = this.async()
      fs.stat(input.replace('~', os.homedir()), (err, stats)=>{
        if(err){
          done(err)
        }else if(!stats.isDirectory()){
          done("That isn't a directory, try again!")
        }else{
          done(true)
        }
      })
    }
  }
], answers=>{
  let manifest = `
  "AppState"
    {
      "AppID"  "${answers.appid}"
      "Universe" "1"
      "StateFlags" "1026"
    }
  `
  if(answers.out==='stdout'){
    console.log(manifest)
  }else{
    let filepath = path.join((answers.dir||answers.out).replace('~', os.homedir()), 'appmanifest_'+answers.appid+'.acf')
    fs.writeSync(filepath, manifest)
    console.log('File has been written to '+chalk.yellow(filepath))
    if(answers.out===steamapps){
      console.log(chalk.purple.bold('Restart Steam')+'. The app download should begin immediately.')
    }
  }
})
