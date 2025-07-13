function signup() {
  const name = document.getElementById("signup-name").value;
  const family = document.getElementById("signup-family").value;
  const phone = document.getElementById("signup-phone").value;
  const pass = document.getElementById("signup-password").value;

  const user = { name, family, phone, pass };
  localStorage.setItem("user", JSON.stringify(user));
  alert("ثبت‌نام با موفقیت انجام شد!");
  window.location.href = "index.html";
}

function login() {
  const phone = document.getElementById("login-phone").value;
  const pass = document.getElementById("login-password").value;

  const savedUser = JSON.parse(localStorage.getItem("user"));

  if (savedUser && savedUser.phone === phone && savedUser.pass === pass) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "chat.html";
  } else {
    alert("اطلاعات اشتباه است!");
  }
}

function startChat(phone) {
  document.getElementById("chat-with").innerText = چت با: ${phone};
  document.getElementById("messages").innerHTML = ""; // پاک کردن پیام‌ها
}

function sendMessage() {
  const msg = document.getElementById("message-input").value;
  if (msg.trim() === "") return;
  const box = document.getElementById("messages");

  const div = document.createElement("div");
  div.innerText = msg;
  div.classList.add("message");
  box.appendChild(div);

  document.getElementById("message-input").value = "";
}