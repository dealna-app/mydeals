function copyCode(code) {
  navigator.clipboard.writeText(code);
  alert("Promo code copied: " + code);
}

function setLanguage(lang) {
  if (lang === "ar") {
    document.documentElement.lang = "ar";
    document.body.style.direction = "rtl";
    document.querySelector("h1").innerText = "ديلنا";
    document.getElementById("subtitle").innerText =
      "أفضل العروض ورموز التخفيض في المغرب 🇲🇦";
  } else {
    document.documentElement.lang = "en";
    document.body.style.direction = "ltr";
    document.querySelector("h1").innerText = "Dealna.ma";
    document.getElementById("subtitle").innerText =
      "Best Deals & Promo Codes in Morocco 🇲🇦";
  }
}
