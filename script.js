let deals = [];
let currentLang = "en";
let currentCategory = "all";

fetch("deals.json")
  .then(res => res.json())
  .then(data => {
    deals = data;
    renderDeals(deals);
  });

function setLanguage(lang) {
  currentLang = lang;
  document.getElementById("subtitle").innerText =
    lang === "ar"
      ? "أفضل العروض وكوبونات الخصم في المغرب"
      : "Best Deals & Promo Codes in Morocco";
  renderDeals(deals);
}

function filterDeals(category) {
  currentCategory = category;
  searchDeals();
}

function searchDeals() {
  const q = document.getElementById("search").value.toLowerCase();
  let filtered = deals.filter(d =>
    (currentCategory === "all" || d.category === currentCategory) &&
    (
      d.title_en.toLowerCase().includes(q) ||
      d.store_en.toLowerCase().includes(q) ||
      d.desc_en.toLowerCase().includes(q)
    )
  );
  renderDeals(filtered);
}

function isExpired(date) {
  return new Date(date) < new Date();
}

function copyCode(code) {
  if (!code) return alert("No promo code needed");
  navigator.clipboard.writeText(code);
  alert("Promo code copied ✅");
}

function toggleFavorite(title) {
  let favs = JSON.parse(localStorage.getItem("favorites")) || [];
  favs = favs.includes(title)
    ? favs.filter(t => t !== title)
    : [...favs, title];
  localStorage.setItem("favorites", JSON.stringify(favs));
  alert("Favorites updated ❤️");
}

function renderDeals(list) {
  const container = document.getElementById("deals");
  container.innerHTML = "";

  list.forEach(d => {
    const expired = isExpired(d.expires);
    const card = document.createElement("div");
    card.className = "deal-card";
    if (expired) card.style.opacity = "0.4";

    card.innerHTML = `
      ${d.popular ? `<div class="badge">🔥 Popular</div>` : ""}
      <img src="${d.image}">
      <h2>${currentLang === "ar" ? d.title_ar : d.title_en}</h2>
      <p class="store">${currentLang === "ar" ? d.store_ar : d.store_en}</p>
      <p>${currentLang === "ar" ? d.desc_ar : d.desc_en}</p>
      <p class="expires">${expired ? "❌ Expired" : "⏰ Expires: " + d.expires}</p>
      <button class="copy" onclick="copyCode('${d.code}')">Copy Code</button>
      <button onclick="toggleFavorite('${d.title_en}')">❤️ Save</button>
      <a class="visit" href="${d.link}" target="_blank">Visit Store</a>
    `;

    container.appendChild(card);
  });
}
