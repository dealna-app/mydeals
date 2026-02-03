let currentLang = "en";

const deals = [
  {
    store: "Jumia",
    en: "10% off your order",
    ar: "خصم 10٪ على طلبك",
    code: "JUMIA10",
    link: "https://www.jumia.ma"
  },
  {
    store: "Glovo",
    en: "Free delivery",
    ar: "توصيل مجاني",
    code: "GLOVOFREE",
    link: "https://glovoapp.com"
  },
  {
    store: "Marjane",
    en: "Special supermarket deals",
    ar: "عروض خاصة على المواد الغذائية",
    code: "MARJANE",
    link: "https://www.marjane.ma"
  },
  {
    store: "Decathlon",
    en: "15% off sports gear",
    ar: "خصم 15٪ على المعدات الرياضية",
    code: "SPORT15",
    link: "https://www.decathlon.ma"
  }
];

function renderDeals() {
  const container = document.getElementById("deals");
  container.innerHTML = "";

  deals.forEach(deal => {
    const card = document.createElement("div");
    card.className = "coupon-card";

    card.innerHTML = `
      <h2>${deal.store}</h2>
      <p>${currentLang === "en" ? deal.en : deal.ar}</p>
      <p><strong>${deal.code}</strong></p>
      <button class="copy-btn" onclick="copyCode('${deal.code}', '${deal.link}')">
        ${currentLang === "en" ? "Copy Code" : "نسخ الرمز"}
      </button>
    `;

    container.appendChild(card);
  });
}

function copyCode(code, link) {
  navigator.clipboard.writeText(code).then(() => {
    alert(
      currentLang === "en"
        ? "Code copied: " + code
        : "تم نسخ الرمز: " + code
    );
    window.open(link, "_blank");
  });
}

function setLanguage(lang) {
  currentLang = lang;

  document.body.classList.toggle("rtl", lang === "ar");

  document.getElementById("subtitle").innerText =
    lang === "en"
      ? "Best Deals & Promo Codes in Morocco"
      : "أفضل العروض ورموز التخفيض في المغرب";

  renderDeals();
}

renderDeals();
