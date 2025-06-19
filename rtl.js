// List of common RTL language codes
const rtlLanguages = [
  "ar", "he", "fa", "ur", "ps", "dv", "ku", "yi"
];

// Function to set dir based on lang
function updateDirection() {
  const html = document.documentElement;
  const lang = html.lang?.toLowerCase() || "en";
  const isRTL = rtlLanguages.includes(lang);
  html.setAttribute("dir", isRTL ? "rtl" : "ltr");
}

// Initial direction set on page load
document.addEventListener("DOMContentLoaded", updateDirection);

// Watch for lang changes (e.g., via Google Translate)
const observer = new MutationObserver(() => updateDirection());
observer.observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });

// Optional: re-check every second in case of silent lang changes
setInterval(updateDirection, 1000);
