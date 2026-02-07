function filterDeals(category) {
  const deals = document.querySelectorAll(".deal-card");

  deals.forEach(deal => {
    if (category === "all" || deal.dataset.category === category) {
      deal.style.display = "block";
    } else {
      deal.style.display = "none";
    }
  });
}

function searchDeals() {
  const query = document.getElementById("search").value.toLowerCase();
  const deals = document.querySelectorAll(".deal-card");

  deals.forEach(deal => {
    const text = deal.innerText.toLowerCase();
    deal.style.display = text.includes(query) ? "block" : "none";
  });
}
