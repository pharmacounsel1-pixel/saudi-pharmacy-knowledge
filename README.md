:root {
  --bg: #f6faf7;
  --panel: #ffffff;
  --panel-alt: #edf8f1;
  --green: #0c6a5f;
  --green-dark: #0a4f46;
  --green-soft: #dff3ea;
  --line: #dfeae5;
  --text: #1b2d2a;
  --muted: #61726d;
  --warning: #fff7e8;
  --warning-border: #e8d6a8;
  --shadow: 0 18px 45px rgba(23, 44, 39, 0.08);
  --radius: 18px;
  --radius-sm: 12px;
  --font-display: "Manrope", "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}

* { box-sizing: border-box; }

html {
  scroll-behavior: smooth;
  scroll-padding-top: 90px;
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-body);
}

a { color: inherit; }

button, input { font: inherit; }

.wrap {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(10px);
  background: rgba(246, 250, 247, 0.9);
  border-bottom: 1px solid var(--line);
}

.nav-wrap {
  min-height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  font-family: var(--font-display);
  font-weight: 800;
  letter-spacing: -0.06em;
}

.brand-mark {
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  border-radius: 9px;
  background: linear-gradient(135deg, var(--green), var(--green-dark));
  color: white;
  font-size: 18px;
}

.brand-text {
  font-size: 1.1rem;
}

.brand-text span {
  color: var(--green);
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 30px;
}

.main-nav a {
  text-decoration: none;
  color: var(--muted);
  font-size: 0.92rem;
  font-weight: 600;
}

.main-nav a:hover { color: var(--green); }

.lang-toggle {
  border: 1px solid var(--line);
  background: white;
  color: var(--text);
  border-radius: 999px;
  padding: 10px 16px;
  cursor: pointer;
  font-weight: 600;
}

.hero {
  background: linear-gradient(180deg, #ebf7f1, #f8fbf9);
  border-bottom: 1px solid var(--line);
}

.hero-wrap {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 32px;
  align-items: center;
  padding: 72px 0 60px;
}

.eyebrow {
  margin: 0 0 18px;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--green);
}

.eyebrow.small { margin-bottom: 10px; }

.hero h1, h2, h3, h4 {
  margin: 0;
  font-family: var(--font-display);
  letter-spacing: -0.06em;
}

.hero h1 {
  max-width: 600px;
  font-size: clamp(2.6rem, 5vw, 4.4rem);
  line-height: 0.98;
}

.lead {
  max-width: 620px;
  margin-top: 24px;
  color: var(--muted);
  line-height: 1.8;
  font-size: 1rem;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 28px;
}

.primary-btn, .secondary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 20px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 700;
  transition: transform 0.2s ease;
}

.primary-btn {
  background: var(--green);
  color: white;
  box-shadow: 0 18px 26px rgba(12, 106, 95, 0.18);
}

.secondary-btn {
  background: white;
  border: 1px solid var(--line);
  color: var(--text);
}

.primary-btn:hover, .secondary-btn:hover { transform: translateY(-1px); }

.hero-panel {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  align-self: stretch;
}

.panel-card {
  min-height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 26px 20px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.panel-label {
  font-size: 0.72rem;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.panel-card strong {
  font-family: var(--font-display);
  font-size: clamp(1.4rem, 2vw, 2.1rem);
  letter-spacing: -0.04em;
}

.warning-card {
  background: var(--warning);
  border-color: var(--warning-border);
}

.directory {
  padding: 88px 0 72px;
}

.section-header {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 26px;
  margin-bottom: 28px;
}

.section-header h2 {
  font-size: clamp(2.1rem, 3vw, 3rem);
}

.section-copy {
  max-width: 520px;
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}

.controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 16px;
}

.search-box {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 54px;
  background: white;
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 0 16px;
  box-shadow: 0 6px 20px rgba(10, 51, 46, 0.02);
}

.search-box span {
  color: var(--green);
  font-size: 1.4rem;
}

.search-box input {
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  color: var(--text);
  font-size: 0.98rem;
}

.search-box input::placeholder { color: #95a29d; }

.result-text {
  color: var(--muted);
  font-size: 0.78rem;
  white-space: nowrap;
}

.filter-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
}

.filter-btn {
  border: 1px solid var(--line);
  background: white;
  color: var(--muted);
  border-radius: 999px;
  padding: 10px 16px;
  cursor: pointer;
  font-weight: 600;
}

.filter-btn.active {
  background: var(--green);
  color: white;
  border-color: var(--green);
}

.directory-grid {
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 22px;
  align-items: start;
}

.medicine-list {
  display: grid;
  gap: 14px;
}

.medicine-item {
  width: 100%;
  text-align: left;
  background: white;
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  padding: 16px 18px;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(15, 32, 28, 0.02);
  transition: all 0.2s ease;
}

.medicine-item:hover { transform: translateY(-1px); }

.medicine-item.selected {
  border-color: rgba(12, 106, 95, 0.45);
  box-shadow: 0 12px 28px rgba(12, 106, 95, 0.08);
  background: #f5fbf8;
}

.medicine-item-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  margin-bottom: 10px;
}

.mini-tag {
  background: var(--green-soft);
  color: var(--green);
  border-radius: 999px;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 5px 9px;
}

.mini-score {
  color: var(--muted);
  font-size: 0.7rem;
  font-weight: 700;
}

.medicine-item h3 {
  font-size: 1.35rem;
  margin-bottom: 6px;
}

.medicine-item p,
.medicine-item small {
  margin: 0;
  color: var(--muted);
}

.medicine-item small {
  display: block;
  margin-top: 8px;
  line-height: 1.5;
}

.empty-state,
.detail-empty {
  min-height: 180px;
  display: grid;
  place-items: center;
  text-align: center;
  padding: 20px;
  background: white;
  border: 1px dashed var(--line);
  border-radius: var(--radius);
  color: var(--muted);
}

.empty-state span {
  display: block;
  font-size: 2rem;
  color: var(--green);
  margin-bottom: 5px;
}

.empty-state h3 {
  margin-bottom: 8px;
}

.medicine-detail { min-width: 0; }

.detail-card {
  background: white;
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 22px;
  box-shadow: var(--shadow);
}

.detail-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  margin-bottom: 22px;
}

.detail-header h3 {
  font-size: clamp(1.8rem, 2vw, 2.5rem);
}

.detail-badge {
  padding: 7px 10px;
  border-radius: 999px;
  background: var(--green-soft);
  color: var(--green);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.meta-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 20px;
}

.meta-grid div {
  background: #f8faf9;
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 14px;
}

.meta-grid span {
  display: block;
  margin-bottom: 6px;
  color: var(--muted);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.meta-grid strong {
  font-size: 0.93rem;
  line-height: 1.5;
}

.detail-section {
  border-top: 1px solid var(--line);
  padding-top: 18px;
  margin-top: 18px;
}

.detail-section h4 {
  margin-bottom: 10px;
  font-size: 1.12rem;
}

.detail-section ul {
  margin: 0;
  padding-left: 18px;
  color: var(--muted);
  line-height: 1.85;
}

.detail-source {
  margin-top: 18px;
  padding-top: 18px;
  border-top: 1px solid var(--line);
  color: var(--muted);
  line-height: 1.7;
}

.about {
  background: #f0f7f2;
  padding: 72px 0 50px;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.about-wrap {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 32px;
  align-items: start;
}

.about h2 {
  font-size: clamp(2.1rem, 3vw, 3rem);
}

.about-text {
  display: grid;
  gap: 18px;
  color: var(--muted);
  line-height: 1.8;
}

.sources {
  padding: 74px 0 88px;
}

.narrow { margin-bottom: 22px; }

.source-list {
  display: grid;
  gap: 15px;
  max-width: 840px;
}

.source-link {
  display: flex;
  align-items: center;
  gap: 16px;
  background: white;
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 18px;
  text-decoration: none;
  box-shadow: 0 10px 26px rgba(20, 31, 28, 0.03);
}

.source-icon {
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: var(--green-soft);
  color: var(--green);
  font-weight: 800;
}

.source-link strong,
.source-link small {
  display: block;
}

.source-link small {
  margin-top: 6px;
  color: var(--muted);
  line-height: 1.55;
}

.disclaimer {
  max-width: 820px;
  margin-top: 24px;
  color: var(--muted);
  font-size: 0.9rem;
  line-height: 1.8;
}

.site-footer {
  background: white;
  border-top: 1px solid var(--line);
}

.footer-wrap {
  min-height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  color: var(--muted);
}

.footer-wrap a {
  color: var(--green);
  text-decoration: none;
  font-weight: 700;
}

@media (max-width: 900px) {
  .hero-wrap,
  .about-wrap,
  .directory-grid {
    grid-template-columns: 1fr;
  }

  .section-header {
    display: block;
  }

  .section-copy {
    margin-top: 16px;
  }
}

@media (max-width: 640px) {
  .main-nav { display: none; }

  .hero-wrap { padding-top: 52px; }

  .hero-panel {
    grid-template-columns: 1fr;
  }

  .controls {
    flex-direction: column;
    align-items: stretch;
  }

  .result-text {
    align-self: flex-start;
  }

  .meta-grid {
    grid-template-columns: 1fr;
  }

  .footer-wrap {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 22px 0;
  }
}
