let deals = [];
let currentLang = "en";
let currentFilter = "all";

fetch("deals.json")
  .then(res => res.json())
  .then(data => {
    deals = data;
    renderDeals();
  });

function renderDeals() {
  const container = document.getElementById("deals");
  container.innerHTML = "";

  const searchText = document.getElementById("search").value.toLowerCase();

  deals.forEach(deal => {
    if (
      (currentFilter === "all" || deal.category === currentFilter) &&
      (deal.title_en.toLowerCase().includes(searchText) ||
       deal.store_en.toLowerCase().includes(searchText))
    ) {
      const card = document.createElement("div");
      card.className = "deal-card";

      card.innerHTML = `
        <img src="${deal.image}" alt="${deal.store_en}">
        <h2>${currentLang === "en" ? deal.title_en : deal.title_ar}</h2>
        <p class="store">${currentLang === "en" ? deal.store_en : deal.store_ar}</p>
        <p>${currentLang === "en" ? deal.desc_en : deal.desc_ar}</p>
        ${deal.code ? `<p><strong>Code:</strong> ${deal.code}</p>` : `<p><strong>No code needed</strong></p>`}
        <p class="expires">Expires: ${deal.expires}</p>
        <button onclick="copyCode('${deal.code}')">Copy Code</button>
        <a href="${deal.link}" target="_blank">Visit Store</a>
      `;
      container.appendChild(card);
    }
  });
}

function copyCode(code) {
  if (!code) return alert("No code needed for this deal");
  navigator.clipboard.writeText(code);
  alert("Code copied!");
}

function filterDeals(cat) {
  currentFilter = cat;
  renderDeals();
}

function searchDeals() {
  renderDeals();
}

function setLanguage(lang) {
  currentLang = lang;
  document.body.dir = lang === "ar" ? "rtl" : "ltr";
  renderDeals();
}
