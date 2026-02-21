const deals = [
  {
    title_en: "Jumia – 20% OFF",
    title_ar: "جوميا – خصم 20%",
    store: "Jumia",
    category: "electronics",
    code: "JUMIA20",
    expires: "31 March 2026",
    link: "https://www.jumia.ma"
  },
  {
    title_en: "Glovo Free Delivery",
    title_ar: "غلوفو – توصيل مجاني",
    store: "Glovo",
    category: "food",
    code: "GLOVOFREE",
    expires: "15 April 2026",
    link: "https://glovoapp.com"
  },
  {
    title_en: "Decathlon – Sports Deals",
    title_ar: "ديكاتلون – عروض رياضية",
    store: "Decathlon",
    category: "fashion",
    code: "SPORT10",
    expires: "30 April 2026",
    link: "https://www.decathlon.ma"
  },
  {
    title_en: "Local Brand – 15% OFF",
    title_ar: "ماركة محلية – خصم 15%",
    store: "Local Store",
    category: "local",
    code: "LOCAL15",
    expires: "20 March 2026",
    link: "#"
  }
];

let currentLanguage = "en";

function renderDeals(list) {
  const container = document.getElementById("deals");
  container.innerHTML = "";

  list.forEach(deal => {
    container.innerHTML += `
      <div class="deal-card">
        <h2>${currentLanguage === "en" ? deal.title_en : deal.title_ar}</h2>
        <p class="store">${deal.store}</p>
        <p class="meta">
          ⏰ Expires: ${deal.expires}<br>
          ✅ Verified
        </p>
        <button onclick="copyCode('${deal.code}')">
          Copy Code: ${deal.code}
        </button>
        <a href="${deal.link}" target="_blank">Visit Store</a>
      </div>
    `;
  });
}

function copyCode(code) {
  navigator.clipboard.writeText(code);
  alert("Code copied: " + code);
}

function filterDeals(category) {
  if (category === "all") {
    renderDeals(deals);
  } else {
    renderDeals(deals.filter(d => d.category === category));
  }
}

function searchDeals() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const filtered = deals.filter(d =>
    d.store.toLowerCase().includes(query) ||
    d.title_en.toLowerCase().includes(query)
  );
  renderDeals(filtered);
}

function setLanguage(lang) {
  currentLanguage = lang;
  renderDeals(deals);
}

renderDeals(deals);
