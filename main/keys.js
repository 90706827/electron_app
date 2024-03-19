const { app, globalShortcut } = require("electron");

app.whenReady().then(() => {
  // 注册一个快捷键
  const ret = globalShortcut.register("CmdOrCtrl+Shift+I", () => {
    console.log("CmdOrCtrl + Shift + I");
    app.show();
  });

  if (!ret) {
    console.log("registration failed");
  }
  // 检查快捷键是否注册成功
  console.log(globalShortcut.isRegistered("CmdOrCtrl+Shift+I"));
});

app.on("will-quit", () => {
  // 注销所有快捷键
  globalShortcut.unregisterAll();
});
