"use strict";

const d = document;
const submenu_btn = d.querySelectorAll(".option-link");
const arrow_icon = d.querySelectorAll(".arrow");

for (let i = 0; i < submenu_btn.length; i++) {
  submenu_btn[i].addEventListener("click", function () {
    const content = this.nextElementSibling;
    const height = content.scrollHeight;
    if (content.classList.contains("show-content")) {
      content.classList.remove("show-content");
      content.removeAttribute("style");
    } else {
      content.classList.add("show-content");
      content.style.height = height + "px";
      content.style.overflow = "visible";
      content.style.opacity = 1;
    }
    submenu_btn[i].classList.toggle("active");
    arrow_icon[i].classList.toggle("rotate-arrow");
  });
}
