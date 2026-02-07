// FILTER DEALS
function filterDeals(category) {
  const deals = document.querySelectorAll(".deal-card");
  deals.forEach(deal => {
    deal.style.display =
      category === "all" || deal.dataset.category === category
        ? "block"
        : "none";
  });
}

// SEARCH DEALS
function searchDeals() {
  const query = document.getElementById("search").value.toLowerCase();
  document.querySelectorAll(".deal-card").forEach(deal => {
    deal.style.display = deal.innerText.toLowerCase().includes(query)
      ? "block"
      : "none";
  });
}

// LOGIN SYSTEM (MVP)
function loginUser() {
  const email = document.getElementById("email").value;
  if (!email) {
    alert("Enter your email");
    return;
  }
  localStorage.setItem("dealna_user", email);
  window.location.href = "index.html";
}

function logoutUser() {
  localStorage.removeItem("dealna_user");
  location.reload();
}

function loadUser() {
  const area = document.getElementById("user-area");
  if (!area) return;

  const user = localStorage.getItem("dealna_user");

  area.innerHTML = user
    ? `Welcome <b>${user}</b> <button onclick="logoutUser()">Logout</button>`
    : `<a href="login.html">Login</a>`;
}

loadUser();
