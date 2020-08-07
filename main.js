
//Normal

const electron = require('electron')
const {app, BrowserWindow} = electron
const path = require('path')
const url = require('url')



let win

function createWindow(){
	win = new BrowserWindow({width: 1100, height:650}) //1100 650
		       //500 y 650
	win.loadURL(url.format({

		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file',
		slashes: true

	}))

}






app.on('ready', createWindow)