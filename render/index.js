var fs = require("fs");

window.onload = function () {
  var btn = this.document.querySelector('#btn');
  var baby = this.document.querySelector('#mybaby');

  btn.onclick = function () {
    fs.readFile('xiaojiejie.txt', (err, data) => {
      baby.innerHTML = data;
    });
  };
};
