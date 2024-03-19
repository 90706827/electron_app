const BrowserWindow = require("@electron/remote");
// .remote.BrowserWindow;

window.onload = function () {
  var newbtn = this.document.querySelector("#newbtn");

  window.onload = function () {
    newbtn.onclick = () => {
      alert("点击")
      var newwin = new BrowserWindow({ width: 500, height: 500 });
      newwin.loadFile("yellow.html");
      newwin.on("close", () => {
        newwin = null;
      });
    };
  };
};
