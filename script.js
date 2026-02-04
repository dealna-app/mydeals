* {
  box-sizing: border-box;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
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

header h1 {
  margin: 0;
}

.lang-switch button {
  margin: 8px 4px 0;
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
  font-size: 16px;
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
  cursor: pointer;
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

.deal-card h2 {
  margin-top: 0;
}

.store {
  font-weight: bold;
}

.meta {
  color: #555;
  font-size: 14px;
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
  transition: transform 0.1s ease, box-shadow 0.1s ease;
}

.deal-card button:active {
  transform: scale(0.96);
}

.visit-store {
  display: inline-block;
  margin-top: 12px;
  text-decoration: none;
  font-weight: bold;
  color: #2563eb;
}

footer {
  text-align: center;
  padding: 18px;
  font-size: 14px;
  color: #555;
}
