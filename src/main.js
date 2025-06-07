import { initAuth, login, logout, getUser } from "./auth";
import { setupCalculator } from "./calculator";

document.addEventListener("DOMContentLoaded", async () => {
  const loginBtn = document.getElementById("login");
  const logoutBtn = document.getElementById("logout");
  const userInfo = document.getElementById("user-info");
  const calculatorEl = document.querySelector(".calculator");

  await initAuth();
  const user = await getUser();

  if (user) {
    loginBtn.hidden = true;
    logoutBtn.hidden = false;
    calculatorEl.hidden = false;
    userInfo.textContent = `Logged in as ${user.name}`;
    setupCalculator(
      document.getElementById("display"),
      document.getElementById("history-list")
    );
  } else {
    loginBtn.hidden = false;
    logoutBtn.hidden = true;
    calculatorEl.hidden = true;
    userInfo.textContent = "Not logged in";
  }

  loginBtn.addEventListener("click", login);
  logoutBtn.addEventListener("click", logout);
});
