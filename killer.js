const killersSpisok = document.querySelector(".killers_spisok");
if (killersSpisok) {
  killersSpisok.addEventListener("click", function (e) {
    if (e.target.tagName !== "P") return;

    // Скрыть все блоки
    const blocks = [
      ".jason_hide",
      ".coolkid_hide",
      ".john_hide",
      ".noli_hide",
      ".xxx_hide",
    ];
    blocks.forEach((sel) => {
      const el = document.querySelector(sel);
      if (el) el.style.display = "none";
    });

    // Показать нужный блок
    if (e.target.classList.contains("jason-show")) {
      document.querySelector(".jason_hide").style.display = "flex";
    }
    if (e.target.classList.contains("coolkid-show")) {
      document.querySelector(".coolkid_hide").style.display = "flex";
    }
    if (e.target.classList.contains("john-show")) {
      document.querySelector(".john_hide").style.display = "flex";
    }
    if (e.target.classList.contains("noli-show")) {
      document.querySelector(".noli_hide").style.display = "flex";
    }
    if (e.target.classList.contains("xxx-show")) {
      document.querySelector(".xxx_hide").style.display = "flex";
    }
  });
}
