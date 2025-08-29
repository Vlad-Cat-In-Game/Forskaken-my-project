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



const killersSpisok = document.querySelector(".skins_spisok");
if (killersSpisok) {
  killersSpisok.addEventListener("click", function (e) {
    if (e.target.tagName !== "P") return;

    // Скрыть все блоки
    const blocks = [
      ".buy_hide",
      ".mileston_hide",
      ".achieven_hide",
    ];
    blocks.forEach((sel) => {
      const el = document.querySelector(sel);
      if (el) el.style.display = "none";
    });

    // Показать нужный блок
    if (e.target.classList.contains("buy-show")) {
      document.querySelector(".buy_hide").style.display = "block";
    }
    if (e.target.classList.contains("mileston-show")) {
      document.querySelector(".mileston_hide").style.display = "block";
    }
    if (e.target.classList.contains("achieven-show")) {
      document.querySelector(".achieven_hide").style.display = "block";
    }
  });
}