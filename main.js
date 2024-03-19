const { app, BrowserWindow, Menu, dialog } = require("electron");

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 800,
    minWidth: 500,
    minHeight: 500,
    center: true, //窗口是否在屏幕居中，默认false；
    resizable: true, // 窗口大小是否可调整，默认true;
    icon: true, // 设置窗口的图标
    title: "我是标题", // 设置窗口的标题
    backgroundColor: "#cccccc", // 设置窗口的背影颜色
    transparent: true, // 设置窗口是否透明
    frame: false,
    resizable: true, //设置窗口是否可调整大小
    movable: true, //设置窗口是否可以移动,默认true;
    minimizable: true, //设置窗口是否可最小化
    maximizable: true, //设置窗口是否可最大化
    closable: true, //设置窗口是否可关闭
    alwaysOnTop: false, //设置窗口是否总是在最顶层
    fullscreen: true, // 设置窗口是否全屏
    fullscreenable: false, // 设置窗口是否可全屏
    kiosk: false, // 设置窗口是否启用kiosk模式，此模式下窗口将全屏且无法退出
    webPreferences: {
      devTools: true,
      webSecurity: true, // 设置是付启用web安全
      session: true, //设置session

      nodeIntegration: true,
      contextIsolation: false,
    },
    show: false,
    visibleOnAllWorkspaces: true, // mac 避免启动不必要的闪烁
  });
  // require("./main/menu.js");

  var template = [
    {
      label: "Dialog",
      submenu: [
        {
          label: "Show Open Dialog",
          click: () => {
            dialog
              .showOpenDialog(mainWindow, {
                properties: ["openFile", "multiSelections"],
              })
              .then((result) => {
                console.log(result.filePaths);
              });
          },
        },
        {
          label: "Show Save Dialog",
          click: () => {
            dialog
              .showSaveDialog(mainWindow, {
                title: "保存你的文件",
                defaultPath: "example.txt",
                buttonLabel: "保存吧",
                filters: [
                  { name: "文本文件", extendsions: ["txt"] },
                  { name: "所有文件", extendsions: ["*"] },
                ],
              })
              .then((result) => {
                console.log(result.filePath);
              });
          },
        },
        {
          label: "Show Message Box",
          click: () => {
            dialog
              .showMessageBox(mainWindow, {
                type: "info",
                message: "我是一个消息盒子",
                detail: "我是消息盒子里面的明细项目",
                buttons: ["第一个按钮", "第二个按钮"],
                defaultId: 0,
              })
              .then((result) => {
                console.log(result);
              });
          },
        },
        {
          label: "Show Error Box",
          click: () => {
            dialog.showErrorBox("错误标题", "错误内容");
          },
        },
      ],
    },
    {
      label: "文件",
      submenu: [
        {
          label: "新建",
          accelerator: "CmdOrCtrl+N",
          click: () => {
            console.log("新键文件");
          },
        },
        {
          label: "打开",
          accelerator: "CmdOrCtrl+O",
          click: () => {
            console.log("打开文件");
          },
        },
        {
          label: "保存",
          accelerator: "CmdOrCtrl+S",
          click: () => {
            console.log("保存文件");
          },
        },
        {
          type: "separator",
        },
        {
          label: "退出",
          accelerator: "CmdOrCtrl+Q",
          click: () => {
            app.quit();
          },
        },
      ],
    },
    {
      label: "编辑",
      submenu: [
        {
          label: "剪切",
          role: "cut",
        },
        {
          label: "拷贝",
          role: "copy",
        },
        {
          label: "粘贴",
          role: "paste",
        },
        {
          type: "separator",
        },
        {
          role: "undo",
        },
        {
          role: "redo",
        },
      ],
    },
  ];

  // 创建
  const menu = Menu.buildFromTemplate(template);
  // 设置
  Menu.setApplicationMenu(menu);
  // Menu.sendActionToFirstResponder(temp);
  mainWindow.loadFile("index.html"); //加载页面
  mainWindow.webContents.openDevTools();

  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
  });

  require("./main/tray.js");
  require("./main/keys.js");
  mainWindow.on("closed", function () {
    mainWindow = null;
  });
}

app.on("ready", createMainWindow);

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
