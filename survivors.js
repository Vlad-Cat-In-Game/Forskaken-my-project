const changer = document.querySelector(".changer");
let isDark = true;

changer.addEventListener("click", function () {
  const body = document.querySelector("body");
  const header = document.querySelector("header");
  const divs = document.querySelectorAll("div");
  const navs = document.querySelectorAll("nav");
  const ps = document.querySelectorAll("p");
  const as = document.querySelectorAll("a");
  const achieventsSpisok = document.querySelector(
    ".achievents_spisok"
  );

  if (isDark) {
    body.style.backgroundImage =
      "linear-gradient(90deg, #b3b3b3ff, #b370f1ff)";
    body.style.color = "black";
    header.style.backgroundImage =
      "linear-gradient( #a7a7a7ff, #b974faff)";
    header.style.color = "black";
    divs.forEach((div) => (div.style.color = "black"));
    navs.forEach((nav) => {
      nav.style.backgroundImage =
        "linear-gradient( #acababff, #b979f5ff)";
      nav.style.color = "black";
    });
    ps.forEach((p) => (p.style.color = "black"));
    as.forEach((a) => (a.style.color = "black"));
    if (achieventsSpisok) {
      achieventsSpisok.style.backgroundImage =
        "linear-gradient(90deg, #b3b3b3ff, #b370f1ff)";
      achieventsSpisok.style.color = "black";
    }
    isDark = false;
  } else {
    body.style.backgroundImage =
      "linear-gradient(90deg, #010101, #7f0b9c)";
    body.style.color = "white";
    header.style.backgroundImage =
      "linear-gradient(#010101, #9d0ec0)";
    header.style.color = "white";
    divs.forEach((div) => (div.style.color = "white"));
    navs.forEach((nav) => {
      nav.style.backgroundImage = "linear-gradient(#010101, #9d0ec0)";
      nav.style.color = "white";
    });
    ps.forEach((p) => (p.style.color = "white"));
    as.forEach((a) => (a.style.color = "white"));
    if (achieventsSpisok) {
      achieventsSpisok.style.backgroundImage =
        "linear-gradient(90deg, #010101, #7f0b9c)";
      achieventsSpisok.style.color = "white";
    }
    isDark = true;
  }
});



const killersSpisok = document.querySelector(".survivors_spisok");
if (killersSpisok) {
  killersSpisok.addEventListener("click", function (e) {
    if (e.target.tagName !== "P") return;

    // Скрыть все блоки
    const blocks = [
      ".noob_hide",
      ".elliot_hide",
      ".shed_hide",
      ".guest_hide",
      ".twot_hide",
      ".nos_hide",
      ".build_hide",
      ".duss_hide",
      ".taph_hide",
      ".chance_hide",
    ];
    blocks.forEach((sel) => {
      const el = document.querySelector(sel);
      if (el) el.style.display = "none";
    });

    // Показать нужный блок
    if (e.target.classList.contains("noob-show")) {
      document.querySelector(".noob_hide").style.display = "flex";
    }
    if (e.target.classList.contains("elliot-show")) {
      document.querySelector(".elliot_hide").style.display = "flex";
    }
    if (e.target.classList.contains("shed-show")) {
      document.querySelector(".shed_hide").style.display = "flex";
    }
    if (e.target.classList.contains("guest-show")) {
      document.querySelector(".guest_hide").style.display = "flex";
    }
    if (e.target.classList.contains("twot-show")) {
      document.querySelector(".twot_hide").style.display = "flex";
    }
        if (e.target.classList.contains("nos-show")) {
      document.querySelector(".nos_hide").style.display = "flex";
    }
    if (e.target.classList.contains("build-show")) {
      document.querySelector(".build_hide").style.display = "flex";
    }
    if (e.target.classList.contains("duss-show")) {
      document.querySelector(".duss_hide").style.display = "flex";
    }
    if (e.target.classList.contains("taph-show")) {
      document.querySelector(".taph_hide").style.display = "flex";
    }
    if (e.target.classList.contains("chance-show")) {
      document.querySelector(".chance_hide").style.display = "flex";
    }
  });
}