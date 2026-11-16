const medicines = [
  { name: "Paracetamol", scientific: "Acetaminophen", category: "pain", categoryLabel: "Pain & fever", note: "General ingredient reference", color: "mint", letter: "P" },
  { name: "Ibuprofen", scientific: "Ibuprofen", category: "pain", categoryLabel: "Pain & fever", note: "General ingredient reference", color: "peach", letter: "I" },
  { name: "Omeprazole", scientific: "Omeprazole", category: "digestive", categoryLabel: "Digestive health", note: "General ingredient reference", color: "lavender", letter: "O" },
  { name: "Amoxicillin", scientific: "Amoxicillin", category: "other", categoryLabel: "Antibiotic", note: "Prescription medicine — verify local product details", color: "blue", letter: "A" },
  { name: "Metformin", scientific: "Metformin", category: "other", categoryLabel: "Diabetes care", note: "General ingredient reference", color: "yellow", letter: "M" },
  { name: "Cetirizine", scientific: "Cetirizine", category: "other", categoryLabel: "Allergy", note: "General ingredient reference", color: "pink", letter: "C" }
];

let activeFilter = "all";
let language = "en";
const grid = document.querySelector("#medicine-grid");
const search = document.querySelector("#medicine-search");
const emptyState = document.querySelector("#empty-state");
const count = document.querySelector("#result-count");

function render() {
  const term = search.value.trim().toLowerCase();
  const filtered = medicines.filter((medicine) => {
    const matchesFilter = activeFilter === "all" || medicine.category === activeFilter;
    const text = `${medicine.name} ${medicine.scientific} ${medicine.categoryLabel}`.toLowerCase();
    return matchesFilter && text.includes(term);
  });

  grid.innerHTML = filtered.map((medicine) => `
    <article class="medicine-card">
      <div class="card-top"><span class="medicine-icon ${medicine.color}">${medicine.letter}</span><span class="card-category">${language === "ar" ? "مرجع عام" : medicine.categoryLabel}</span></div>
      <h3>${medicine.name}</h3>
      <p class="scientific-name">${language === "ar" ? "الاسم العلمي / المكوّن" : "Generic ingredient"} · ${medicine.scientific}</p>
      <p class="card-note">${language === "ar" ? "معلومات المنتج تختلف حسب العلامة التجارية والتركيز. تحقق من النشرة الرسمية." : medicine.note + ". Product information varies by brand and strength; verify the official leaflet."}</p>
      <a class="card-link" href="https://www.sfda.gov.sa/en" target="_blank" rel="noopener noreferrer"><span>${language === "ar" ? "تحقق من المصدر الرسمي" : "Verify with official source"}</span><span aria-hidden="true">↗</span></a>
    </article>`).join("");
  emptyState.hidden = filtered.length !== 0;
  count.textContent = language === "ar" ? `${filtered.length} نتائج أولية` : `${filtered.length} starter ${filtered.length === 1 ? "entry" : "entries"}`;
}

search.addEventListener("input", render);
document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".filter.active")?.classList.remove("active");
    button.classList.add("active");
    activeFilter = button.dataset.filter;
    render();
  });
});

document.querySelector("#language-toggle").addEventListener("click", (event) => {
  language = language === "en" ? "ar" : "en";
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-en][data-ar]").forEach((element) => {
    element.innerHTML = element.dataset[language];
  });
  search.placeholder = search.dataset[`placeholder${language.toUpperCase()}`];
  event.currentTarget.textContent = language === "ar" ? "English" : "العربية";
  render();
});

render();
