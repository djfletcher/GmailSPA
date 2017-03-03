const Router = require('./router.js');
const Inbox = require('./inbox.js');

document.addEventListener("DOMContentLoaded", () => {
  const content = document.querySelector('.content');
  const router = new Router(content);
  router.start();

  const sidebarLis = document.querySelectorAll(".sidebar-nav li");
  sidebarLis.forEach(sidebarLi => {
    sidebarLi.addEventListener("click", e => {
      e.preventDefault();
      const li = e.currentTarget;
      const innerText = li.textContent.toLowerCase();
      window.location.hash = innerText;
    });
  });
});
