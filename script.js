let currentLang = 'en';
let deals = [];

async function loadDeals() {
  const res = await fetch('deals.json');
  deals = await res.json();
  renderDeals();
}

function renderDeals(filter='all') {
  const container = document.getElementById('dealsContainer');
  container.innerHTML = '';
  deals.forEach(deal => {
    if(filter !== 'all' && deal.category !== filter) return;

    const dealCard = document.createElement('div');
    dealCard.className = 'deal-card';

    dealCard.innerHTML = `
      <img src="${deal.image}" alt="${deal['store_'+currentLang]}">
      <div class="deal-details">
        <h2 data-en="${deal.title_en}" data-ar="${deal.title_ar}">${deal['title_'+currentLang]}</h2>
        <p class="store" data-en="${deal.store_en}" data-ar="${deal.store_ar}">${deal['store_'+currentLang]}</p>
        <p data-en="${deal.desc_en}" data-ar="${deal.desc_ar}">${deal['desc_'+currentLang]}</p>
        <p class="meta">✅ Verified · Expires: ${deal.expires}</p>
        <button onclick="copyCode('${deal.code}')">Copy Code</button>
        <button onclick="shareWhatsApp('${deal['title_'+currentLang]}','${deal.code}')">Share WhatsApp</button>
        <a href="${deal.link}" target="_blank" class="visit-store">Visit Store →</a>
      </div>
    `;
    container.appendChild(dealCard);
  });
}

function copyCode(code) {
  navigator.clipboard.writeText(code);
  alert("Copied: "+code);
}

function shareWhatsApp(title, code) {
  const text = `${title}\nCode: ${code}\n\nMore deals 👇\n${window.location.href}`;
  window.open("https://wa.me/?text="+encodeURIComponent(text), "_blank");
}

function filterDeals(category) { renderDeals(category); searchDeals(); }

function searchDeals() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  document.querySelectorAll('.deal-card').forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(query) ? 'flex' : 'none';
  });
}

function setLanguage(lang) {
  currentLang = lang;
  document.body.dir = lang==='ar'?'rtl':'ltr';
  document.getElementById('subtitle').innerText = lang==='ar'?"أفضل العروض و أكواد التخفيض في المغرب":"Best Deals & Promo Codes in Morocco";
  renderDeals();
}

window.onload = loadDeals;
