var electron = require("electron");
// 引用app
var app = electron.app;
// 窗口引用
var BrowserWindow = electron.BrowserWindow;

var mainWindw = null; // 主窗口

app.on("ready", () => {
  mainWindw = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  mainWindw.loadFile("index.html"); //加载页面
  mainWindw.on("closed", () => {
    mainWindw = null;
  });
});
