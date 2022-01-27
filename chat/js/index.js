const listEl = document.querySelector("#list");
const inputEl = document.querySelector("#message");
const sendEl = document.querySelector("#send");

// ws client side，直接连接到服务器
const ws = new WebSocket("ws:localhost:8000");

sendEl.addEventListener("click", () => {
  // 发送自己这里的message消息
  const message = inputEl.value;

  ws.send(
    JSON.stringify({
      username,
      message,
      dateTime: new Date().getTime(),
    })
  );

  inputEl.value = "";
});

ws.addEventListener("open", () => {
  username = localStorage.getItem("username");

  if (!username) {
    localtion.href = "entry.html";
    return;
  }
});

ws.addEventListener("close", () => {});

ws.addEventListener("error", () => {});

// 监听服务端的data
ws.addEventListener("message", async (e) => {
  let msgData = await e.data.text();
  msgData = JSON.parse(msgData);
  const newLiEl = document.createElement("li");
  newLiEl.textContent = `${msgData.message} 来自于 ${
    msgData.username
  }，时间：${new Date(msgData.dateTime)}`;
  listEl.append(newLiEl);
});
