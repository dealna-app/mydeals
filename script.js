* {
  box-sizing: border-box;
}

body {
  font-family: system-ui, sans-serif;
  margin: 0;
  background: #f4f6f8;
  color: #111;
}

header {
  background: linear-gradient(135deg, #2563eb, #1e40af);
  color: white;
  padding: 22px;
  text-align: center;
}

.lang-switch button {
  margin: 6px;
  padding: 6px 10px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

main {
  padding: 12px;
}

#searchInput {
  width: 100%;
  max-width: 420px;
  margin: 15px auto;
  display: block;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid #ccc;
}

.filters {
  text-align: center;
  margin-bottom: 15px;
}

.filters button {
  margin: 4px;
  padding: 8px 14px;
  border-radius: 999px;
  border: none;
  background: #e5e7eb;
  font-weight: 600;
}

.filters button:hover {
  background: #2563eb;
  color: white;
}

.deal-card {
  background: white;
  margin: 14px auto;
  padding: 18px;
  max-width: 520px;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
}

.store {
  font-weight: bold;
}

.meta {
  font-size: 14px;
  color: #555;
}

.deal-card button {
  margin-top: 10px;
  margin-right: 6px;
  padding: 10px 14px;
  border-radius: 10px;
  border: none;
  background: #2563eb;
  color: white;
  cursor: pointer;
}

.deal-card button:active {
  transform: scale(0.96);
}

.visit-store {
  display: inline-block;
  margin-top: 12px;
  font-weight: bold;
  color: #2563eb;
  text-decoration: none;
}

footer {
  text-align: center;
  padding: 18px;
  font-size: 14px;
  color: #555;
}
