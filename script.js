let deals = [];

// LOAD DEALS
fetch("deals.json")
  .then(res => res.json())
  .then(data => {
    deals = JSON.parse(localStorage.getItem("deals")) || data;
    renderDeals();
    renderAdmin();
  });

// RENDER DEALS ON MAIN PAGE
function renderDeals() {
  const container = document.getElementById("deals");
  if (!container) return;

  container.innerHTML = "";
  deals.forEach(d => {
    container.innerHTML += `
      <div class="deal-card" data-category="${d.category}">
        <h3>${d.title}</h3>
        <p>${d.description}</p>
        <span class="code">${d.code}</span>
        <a href="${d.link}" target="_blank">Visit Store</a>
      </div>
    `;
  });
}

// ADMIN PANEL FUNCTIONS
function renderAdmin() {
  const admin = document.getElementById("admin-deals");
  if (!admin) return;

  admin.innerHTML = "";
  deals.forEach((d, i) => {
    admin.innerHTML += `
      <div class="deal-card">
        <b>${d.title}</b>
        <button onclick="deleteDeal(${i})">Delete</button>
      </div>
    `;
  });
}

function addDeal() {
  const deal = {
    title: title.value,
    description: description.value,
    code: code.value,
    category: category.value,
    link: link.value
  };
  deals.push(deal);
  localStorage.setItem("deals", JSON.stringify(deals));
  renderDeals();
  renderAdmin();
}

function deleteDeal(i) {
  deals.splice(i, 1);
  localStorage.setItem("deals", JSON.stringify(deals));
  renderDeals();
  renderAdmin();
}

// FILTER + SEARCH
function filterDeals(cat) {
  document.querySelectorAll(".deal-card").forEach(d => {
    d.style.display = cat === "all" || d.dataset.category === cat ? "block" : "none";
  });
}

function searchDeals() {
  const q = search.value.toLowerCase();
  document.querySelectorAll(".deal-card").forEach(d => {
    d.style.display = d.innerText.toLowerCase().includes(q) ? "block" : "none";
  });
}
