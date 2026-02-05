function copyCode(code) {
  navigator.clipboard.writeText(code);
  alert("Copied: " + code);
}

function filterDeals(category) {
  document.querySelectorAll(".deal-card").forEach(deal => {
    deal.style.display =
      category === "all" || deal.dataset.category === category
        ? "block"
        : "none";
  });
}

function searchDeals() {
  const query = document.getElementById("searchInput").value.toLowerCase();

  document.querySelectorAll(".deal-card").forEach(deal => {
    const text =
      deal.querySelector("h2").innerText.toLowerCase() +
      deal.querySelector(".store").innerText.toLowerCase();

    deal.style.display = text.includes(query)
      ? "block"
      : "none";
  });
}

function shareWhatsApp(title, code) {
  const text =
    `${title}\nCode: ${code}\n\nMore deals 👇\n` +
    window.location.href;

  window.open("https://wa.me/?text=" + encodeURIComponent(text), "_blank");
}

function setLanguage(lang) {
  document.body.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-en]").forEach(el => {
    el.innerText = el.dataset[lang];
  });

  document.getElementById("subtitle").innerText =
    lang === "ar"
      ? "أفضل العروض و أكواد التخفيض في المغرب"
      : "Best Deals & Promo Codes in Morocco";
}
