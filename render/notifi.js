document.getElementById("notifi").addEventListener("click", function () {
  var notification = new Notification("孩子", {
    subtitle: "好孩子",
    body: "这并不好笑！",
    icon: "icon.png",
    silent: false,
    requireInteraction: true,
    hasReply: true,
  });

  notification.onclick = function () {
    console.log("Notification 这并不好笑！");
  };

  notification.onshow = function () {
    console.log("show 这并不好笑！" + notification.title);
  };

  notification.onclose = function () {
    console.log("close 这并不好笑！");
  };
});
