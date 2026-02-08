import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

// --- SUPABASE CONFIG ---
const supabaseUrl = "YOUR_SUPABASE_URL";
const supabaseKey = "YOUR_SUPABASE_ANON_KEY";
const supabase = createClient(supabaseUrl, supabaseKey);

let deals = [];
let userFavorites = [];
let currentUser = null;

// --- LOAD DEALS ---
async function loadDeals() {
  const { data, error } = await supabase.from("deals").select("*").order("id");
  if (data) deals = data;
  renderDeals();
  renderAdmin();
}

// --- RENDER DEALS ---
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
        ${currentUser ? `<button onclick="toggleFavorite(${d.id})">
          ${userFavorites.includes(d.id) ? "★ Favorite" : "☆ Save"}
        </button>` : ""}
      </div>
    `;
  });
}

// --- ADMIN PANEL ---
async function addDeal() {
  const deal = {
    title: title.value,
    description: description.value,
    code: code.value,
    category: category.value,
    link: link.value
  };
  await supabase.from("deals").insert([deal]);
  loadDeals();
}

async function deleteDeal(id) {
  await supabase.from("deals").delete().eq("id", id);
  loadDeals();
}

function renderAdmin() {
  const admin = document.getElementById("admin-deals");
  if (!admin) return;
  admin.innerHTML = "";
  deals.forEach(d => {
    admin.innerHTML += `
      <div class="deal-card">
        <b>${d.title}</b>
        <button onclick="deleteDeal(${d.id})">Delete</button>
      </div>
    `;
  });
}

// --- FAVORITES ---
function toggleFavorite(id) {
  if(userFavorites.includes(id)) {
    userFavorites = userFavorites.filter(x=>x!==id);
  } else {
    userFavorites.push(id);
  }
  renderDeals();
}

// --- FILTER + SEARCH ---
function filterDeals(cat){
  document.querySelectorAll(".deal-card").forEach(d => {
    d.style.display = cat === "all" || d.dataset.category === cat ? "block" : "none";
  });
}

function searchDeals(){
  const q = search.value.toLowerCase();
  document.querySelectorAll(".deal-card").forEach(d => {
    d.style.display = d.innerText.toLowerCase().includes(q) ? "block" : "none";
  });
}

// --- AUTH ---
async function signUp(){
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  const { data, error } = await supabase.auth.signUp({ email, password });
  if(error) alert(error.message); else alert("Check email to confirm!");
}

async function login(){
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if(error) alert(error.message); else {
    alert("Logged in!");
    currentUser = data.user;
    document.getElementById("login-btn")?.style.display="none";
    document.getElementById("logout-btn")?.style.display="inline-block";
    loadDeals();
  }
}

async function logout(){
  await supabase.auth.signOut();
  currentUser = null;
  document.getElementById("login-btn")?.style.display="inline-block";
  document.getElementById("logout-btn")?.style.display="none";
  loadDeals();
}

// --- INIT ---
loadDeals();
