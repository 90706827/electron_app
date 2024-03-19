const { app, Menu, Tray } = require("electron");
// 创建托盘
let tray = null;

app.whenReady().then(() => {
  tray = new Tray("icon.png");
  // 创建托盘菜单
  const trayMenu = Menu.buildFromTemplate([
    {
      label: "显示",
      type: "radio",
    },
    {
      label: "显示1",
      type: "radio",
    },
    {
      label: "退出",
      accelerator: "CmdOrCtrl+Q",
      click: () => {
        app.quit();
      },
    },
  ]);
  //设置托盘提示
  tray.setToolTip("设置托盘提示");
  // 设置托盘菜单
  tray.setContextMenu(trayMenu);
});
