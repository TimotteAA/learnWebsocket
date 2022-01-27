const usernameEl = document.querySelector("#username");
const enterBtn = document.querySelector("#enter");

// console.log(enterBtn);

enterBtn.addEventListener("click", () => {
  const username = usernameEl.value;

  if (username.length < 6) {
    alert("用户名不得小于6位");
    return;
  }

  //   借用localStorage存储用户名
  localStorage.setItem("username", username);

  //   history.pushState({}, "", "index.html");
  location.href = "index.html";
});
