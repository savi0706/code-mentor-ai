import fetch from "node-fetch";

const API_KEY = "AIzaSyCu66ZW-RbqegLOEX0a_OsT54NLVn0WVpQ";

const url = `https://generativelanguage.googleapis.com/v1/models?key=${API_KEY}`;

const res = await fetch(url);
const data = await res.json();

if (!res.ok) {
  console.error("❌ Error:", data.error);
  process.exit(1);
}

console.log("✅ Models supported by this API key:\n");
data.models.forEach(m => {
  console.log(`• ${m.name}`);
});
