const medicines = [
  {
    id: 1,
    name: "Paracetamol",
    generic: "Acetaminophen",
    brandNames: ["Panadol", "Advil", "Tylenol"],
    category: "pain",
    dosageForms: ["Tablet", "Caplet", "Oral suspension"],
    strengths: ["500 mg", "650 mg", "120 mg/5 mL"],
    indications: ["Relief of mild to moderate pain", "Reduction of fever"],
    contraindications: ["Known hypersensitivity to acetaminophen", "Severe liver disease unless advised by a clinician"],
    warnings: ["Use the lowest effective dose", "Do not exceed the maximum daily dose", "Avoid combining with other products containing acetaminophen"],
    interactions: ["Some cold medicines may contain acetaminophen", "Alcohol may increase liver risk"],
    source: "Check the specific product leaflet and official regulator guidance before use."
  },
  {
    id: 2,
    name: "Ibuprofen",
    generic: "Ibuprofen",
    brandNames: ["Nurofen", "Brufen"],
    category: "pain",
    dosageForms: ["Tablet", "Capsule", "Oral suspension"],
    strengths: ["200 mg", "400 mg", "100 mg/5 mL"],
    indications: ["Pain relief", "Fever reduction", "Inflammation control"],
    contraindications: ["Known allergy to ibuprofen or NSAIDs", "Active peptic ulcer bleeding", "Severe kidney disease"],
    warnings: ["Take with food when possible", "Avoid in pregnancy unless advised by a doctor", "Use caution in older adults"],
    interactions: ["Anticoagulants", "Other NSAIDs", "Some blood pressure medicines"],
    source: "Product-specific labeling and clinician review recommended."
  },
  {
    id: 3,
    name: "Omeprazole",
    generic: "Omeprazole",
    brandNames: ["Losec", "Prilosec"],
    category: "digestive",
    dosageForms: ["Capsule", "Tablet", "Oral suspension"],
    strengths: ["20 mg", "40 mg"],
    indications: ["Acid-related indigestion", "Gastroesophageal reflux", "Peptic ulcer treatment"],
    contraindications: ["Known hypersensitivity to omeprazole or similar medicines"],
    warnings: ["Use for the shortest duration needed", "Check with a healthcare professional before prolonged use"],
    interactions: ["Clopidogrel", "Some antifungals and antibiotics"],
    source: "Current prescribing information and regulator-approved labeling should be checked."
  },
  {
    id: 4,
    name: "Amoxicillin",
    generic: "Amoxicillin",
    brandNames: ["Amoxil", "Novamox"],
    category: "antibiotic",
    dosageForms: ["Capsule", "Tablet", "Suspension"],
    strengths: ["250 mg", "500 mg", "125 mg/5 mL"],
    indications: ["Certain bacterial infections", "Ear, throat, and respiratory infections"],
    contraindications: ["Penicillin allergy", "Severe delayed hypersensitivity to beta-lactams"],
    warnings: ["Complete the full prescribed course", "Report rash, swelling, or breathing difficulty immediately"],
    interactions: ["Oral contraceptives", "Some anticoagulants"],
    source: "Prescription-only medicine; confirm brand-specific directions with the prescriber and leaflet."
  },
  {
    id: 5,
    name: "Azithromycin",
    generic: "Azithromycin",
    brandNames: ["Zithromax"],
    category: "antibiotic",
    dosageForms: ["Tablet", "Capsule", "Oral suspension"],
    strengths: ["250 mg", "500 mg", "200 mg/5 mL"],
    indications: ["Certain bacterial infections"],
    contraindications: ["Known allergy to azithromycin or macrolides", "History of serious heart rhythm issues"],
    warnings: ["Take exactly as prescribed", "Inform a clinician about heart rhythm or liver problems"],
    interactions: ["Antacids", "Warfarin", "Some antivirals"],
    source: "Prescription guidance and final product instructions should be checked before use."
  },
  {
    id: 6,
    name: "Cetirizine",
    generic: "Cetirizine",
    brandNames: ["Zyrtec", "Allertec"],
    category: "allergy",
    dosageForms: ["Tablet", "Chewable tablet", "Oral solution"],
    strengths: ["10 mg", "5 mg/5 mL"],
    indications: ["Allergic rhinitis", "Urticaria", "Itchy skin reactions"],
    contraindications: ["Known hypersensitivity to cetirizine"],
    warnings: ["Drowsiness may occur", "Use caution when driving or operating machinery"],
    interactions: ["Alcohol and sedating medicines may increase drowsiness"],
    source: "General reference only; confirm product leaflet for exact instructions."
  },
  {
    id: 7,
    name: "Metformin",
    generic: "Metformin",
    brandNames: ["Glucophage"],
    category: "metabolic",
    dosageForms: ["Tablet", "Extended-release tablet"],
    strengths: ["500 mg", "850 mg", "1000 mg"],
    indications: ["Type 2 diabetes management"],
    contraindications: ["Severe kidney impairment", "Acute metabolic acidosis", "Severe dehydration"],
    warnings: ["Monitor kidney function when unwell", "GI side effects can occur", "Do not stop without clinician advice"],
    interactions: ["IV contrast agents", "Alcohol", "Certain diuretics"],
    source: "Requires product-specific prescribing information and clinician review."
  },
  {
    id: 8,
    name: "Amlodipine",
    generic: "Amlodipine",
    brandNames: ["Norvasc"],
    category: "cardio",
    dosageForms: ["Tablet"],
    strengths: ["5 mg", "10 mg"],
    indications: ["High blood pressure management", "Angina"],
    contraindications: ["Known hypersensitivity to amlodipine"],
    warnings: ["May cause swelling or dizziness", "Report severe shortness of breath"],
    interactions: ["Some antifungals", "Grapefruit juice can change exposure in some cases"],
    source: "Check prescribing information and brand leaflet for individual safety advice."
  },
  {
    id: 9,
    name: "Salbutamol",
    generic: "Albuterol",
    brandNames: ["Ventolin"],
    category: "respiratory",
    dosageForms: ["Inhaler", "Nebulizer solution"],
    strengths: ["90 mcg per actuation", "2.5 mg/2.5 mL"],
    indications: ["Relief of bronchospasm", "Asthma symptom control"],
    contraindications: ["Known sensitivity to salbutamol or inhaler ingredients"],
    warnings: ["Do not use more often than prescribed", "Seek urgent care if symptoms are severe or worsening"],
    interactions: ["Some beta-blockers may reduce effectiveness"],
    source: "Use the inhaler-specific leaflet and clinician instructions for exact use."
  },
  {
    id: 10,
    name: "Cough Syrup",
    generic: "Guaifenesin and dextromethorphan",
    brandNames: ["Mucinex DM"],
    category: "respiratory",
    dosageForms: ["Syrup"],
    strengths: ["Various"],
    indications: ["Cough and mucus relief"],
    contraindications: ["Do not use in children without age-appropriate guidance", "Known severe sensitivity"],
    warnings: ["Follow age and dose instructions exactly", "Avoid driving if drowsiness occurs"],
    interactions: ["Other cough and cold products", "MAO inhibitors in some cases"],
    source: "Check the product label and pharmacist guidance before use."
  },
  {
    id: 11,
    name: "Loratadine",
    generic: "Loratadine",
    brandNames: ["Claritin"],
    category: "allergy",
    dosageForms: ["Tablet", "Oral solution"],
    strengths: ["10 mg", "5 mg/5 mL"],
    indications: ["Allergic rhinitis", "Itchy eyes and nose"],
    contraindications: ["Known allergy to loratadine"],
    warnings: ["May cause drowsiness in some people", "Avoid alcohol if you feel sleepy"],
    interactions: ["Some sedating medicines may increase drowsiness"],
    source: "Use product-specific directions and ask a pharmacist for exact timing and dose advice."
  },
  {
    id: 12,
    name: "Atorvastatin",
    generic: "Atorvastatin",
    brandNames: ["Lipitor"],
    category: "cardio",
    dosageForms: ["Tablet"],
    strengths: ["10 mg", "20 mg", "40 mg"],
    indications: ["Cholesterol management", "Cardiovascular risk reduction"],
    contraindications: ["Known hypersensitivity to atorvastatin", "Active liver disease"],
    warnings: ["Report muscle pain promptly", "Avoid grapefruit without clinician guidance", "Monitor liver function when indicated"],
    interactions: ["Certain antifungals", "Ciclosporin", "Some antibiotics"],
    source: "This is a prescription medicine and brand-specific instructions should be confirmed."
  }
];

const categoryLabel = {
  all: { en: "All", ar: "الكل" },
  pain: { en: "Pain & fever", ar: "الألم والحمى" },
  digestive: { en: "Digestive", ar: "الهضمي" },
  antibiotic: { en: "Antibiotic", ar: "مضاد حيوي" },
  allergy: { en: "Allergy", ar: "الحساسية" },
  cardio: { en: "Cardio", ar: "القلب" },
  metabolic: { en: "Metabolic", ar: "الأيض" },
  respiratory: { en: "Respiratory", ar: "التنفس" }
};

const state = {
  language: "en",
  category: "all",
  query: "",
  selectedId: medicines[0]?.id ?? null
};

const refs = {
  medicineSearch: document.getElementById("medicineSearch"),
  searchResults: document.getElementById("searchResults"),
  medicineList: document.getElementById("medicineList"),
  medicineDetail: document.getElementById("medicineDetail"),
  entryCount: document.getElementById("entryCount"),
  languageToggle: document.getElementById("languageToggle"),
  filterButtons: [...document.querySelectorAll(".filter-btn")],
  translatedNodes: [...document.querySelectorAll("[data-en][data-ar]")]
};

function getVisibleMedicines() {
  const query = state.query.trim().toLowerCase();

  return medicines.filter((medicine) => {
    const matchesCategory = state.category === "all" || medicine.category === state.category;
    const searchableText = [
      medicine.name,
      medicine.generic,
      ...medicine.brandNames,
      ...medicine.dosageForms,
      ...medicine.strengths,
      ...medicine.indications,
      ...medicine.warnings
    ].join(" ").toLowerCase();

    const matchesQuery = !query || searchableText.includes(query);
    return matchesCategory && matchesQuery;
  });
}

function renderFilters() {
  refs.filterButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.category === state.category);
  });
}

function renderList() {
  const visibleMedicines = getVisibleMedicines();
  const countText = visibleMedicines.length === 1 ? "1 result" : `${visibleMedicines.length} results`;
  refs.searchResults.textContent = state.language === "ar" ? `${visibleMedicines.length} ${visibleMedicines.length === 1 ? "نتيجة" : "نتائج"}` : countText;

  if (!visibleMedicines.length) {
    refs.medicineList.innerHTML = `
      <div class="empty-state">
        <span>⌕</span>
        <h3 data-en="No medicines match" data-ar="لا توجد نتائج">No medicines match</h3>
        <p data-en="Try a different name or category." data-ar="جرّب اسمًا أو فئة مختلفة.">Try a different name or category.</p>
      </div>
    `;
    refs.medicineDetail.innerHTML = `
      <div class="detail-empty">
        <p data-en="Select a medicine to see details." data-ar="اختر دواءً لرؤية التفاصيل.">Select a medicine to see details.</p>
      </div>
    `;
    return;
  }

  const selectedExists = visibleMedicines.some((medicine) => medicine.id === state.selectedId);
  if (!selectedExists) {
    state.selectedId = visibleMedicines[0].id;
  }

  refs.medicineList.innerHTML = visibleMedicines
    .map((medicine) => {
      const isSelected = medicine.id === state.selectedId;
      return `
        <button class="medicine-item ${isSelected ? "selected" : ""}" type="button" data-id="${medicine.id}">
          <div class="medicine-item-top">
            <span class="mini-tag">${categoryLabel[medicine.category][state.language]}</span>
            <span class="mini-score">${medicine.strengths[0]}</span>
          </div>
          <h3>${medicine.name}</h3>
          <p>${medicine.generic}</p>
          <small>${medicine.brandNames.join(", ")}</small>
        </button>
      `;
    })
    .join("");

  refs.medicineList.querySelectorAll(".medicine-item").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedId = Number(button.dataset.id);
      renderList();
    });
  });

  renderDetail();
}

function renderDetail() {
  const selected = medicines.find((medicine) => medicine.id === state.selectedId);
  if (!selected) {
    refs.medicineDetail.innerHTML = `
      <div class="detail-empty">
        <p data-en="Select a medicine to see details." data-ar="اختر دواءً لرؤية التفاصيل.">Select a medicine to see details.</p>
      </div>
    `;
    return;
  }

  const selectedInView = getVisibleMedicines().find((medicine) => medicine.id === selected.id);
  if (!selectedInView) {
    refs.medicineDetail.innerHTML = `
      <div class="detail-empty">
        <p data-en="Select a medicine to see details." data-ar="اختر دواءً لرؤية التفاصيل.">Select a medicine to see details.</p>
      </div>
    `;
    return;
  }

  refs.medicineDetail.innerHTML = `
    <div class="detail-card">
      <div class="detail-header">
        <div>
          <p class="eyebrow small" data-en="Selected medicine" data-ar="الدواء المختار">Selected medicine</p>
          <h3>${selected.name}</h3>
        </div>
        <span class="detail-badge">${categoryLabel[selected.category][state.language]}</span>
      </div>

      <div class="meta-grid">
        <div>
          <span data-en="Generic" data-ar="الاسم العلمي">Generic</span>
          <strong>${selected.generic}</strong>
        </div>
        <div>
          <span data-en="Brand names" data-ar="الأسماء التجارية">Brand names</span>
          <strong>${selected.brandNames.join(", ")}</strong>
        </div>
        <div>
          <span data-en="Forms" data-ar="الأشكال">Forms</span>
          <strong>${selected.dosageForms.join(", ")}</strong>
        </div>
        <div>
          <span data-en="Strength" data-ar="القوة">Strength</span>
          <strong>${selected.strengths.join(", ")}</strong>
        </div>
      </div>

      <div class="detail-section">
        <h4 data-en="Indications" data-ar="الاستعمالات">Indications</h4>
        <ul>
          ${selected.indications.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>

      <div class="detail-section">
        <h4 data-en="Warnings" data-ar="التنبيهات">Warnings</h4>
        <ul>
          ${selected.warnings.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>

      <div class="detail-section">
        <h4 data-en="Common interactions" data-ar="التفاعلات الشائعة">Common interactions</h4>
        <ul>
          ${selected.interactions.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>

      <div class="detail-section">
        <h4 data-en="Contraindications" data-ar="موانع الاستخدام">Contraindications</h4>
        <ul>
          ${selected.contraindications.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>

      <div class="detail-source">
        <p><strong data-en="Source note" data-ar="ملاحظة المصدر">Source note</strong> ${selected.source}</p>
      </div>
    </div>
  `;

  applyTranslations();
}

function applyTranslations() {
  refs.translatedNodes.forEach((node) => {
    const key = state.language === "ar" ? "ar" : "en";
    node.textContent = node.dataset[key];
  });

  refs.medicineSearch.placeholder = refs.medicineSearch.dataset[`placeholder-${state.language}`] || refs.medicineSearch.dataset.placeholderEn;
  refs.languageToggle.textContent = state.language === "ar" ? "English" : "العربية";

  document.documentElement.lang = state.language;
  document.documentElement.dir = state.language === "ar" ? "rtl" : "ltr";
}

refs.medicineSearch.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderList();
});

refs.filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.category = button.dataset.category;
    renderFilters();
    renderList();
  });
});

refs.languageToggle.addEventListener("click", () => {
  state.language = state.language === "en" ? "ar" : "en";
  applyTranslations();
  renderList();
});

refs.entryCount.textContent = medicines.length;
applyTranslations();
renderFilters();
renderList();
