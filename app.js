// =============== THEME (dark/light) ===============
const themeBtn = document.getElementById("themeBtn");
const themeIcon = themeBtn?.querySelector(".chipIcon");

function applyTheme(mode){
  const root = document.documentElement;
  if(mode === "light"){
    root.classList.add("light");
    if(themeIcon) themeIcon.textContent = "☀️";
  } else {
    root.classList.remove("light");
    if(themeIcon) themeIcon.textContent = "🌙";
  }
}

const savedTheme = localStorage.getItem("bb_theme") || "dark";
applyTheme(savedTheme);

themeBtn?.addEventListener("click", () => {
  const isLight = document.documentElement.classList.contains("light");
  const next = isLight ? "dark" : "light";
  localStorage.setItem("bb_theme", next);
  applyTheme(next);
});

// =============== MOBILE MENU ===============
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn?.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});
menu?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    menu.classList.remove("open");
    menuBtn?.setAttribute("aria-expanded", "false");
  });
});

// =============== YEAR ===============
document.getElementById("year").textContent = String(new Date().getFullYear());

// =============== SYLLABUS DATA (from your PDF structure) ===============
const syllabus = [
  // Sem 1
  { sem: 1, code: "BCA-101", title: "Mathematical Foundation", units: [
    "Differential Calculus (Taylor/Meclaurin, partial derivatives, maxima/minima)",
    "Integral Calculus (definite integral, area/length/volume, multiple integrals)",
    "Differential Equation (1st order, higher order, linear PDE intro)",
    "Matrix Algebra (rank, inverse, eigen values/vectors, Cayley-Hamilton)"
  ], type: "Theory" },

  { sem: 1, code: "BCA-102", title: "Computer Fundamentals", units: [
    "Intro to Computers (types, generations, PCs)",
    "Computer organization (CPU, RAM/ROM etc.)",
    "I/O devices + Storage (HDD, CD/DVD etc.)",
    "Software + OS + languages + flowchart/algorithms + basics of security"
  ], type: "Theory" },

  { sem: 1, code: "BCA-103", title: "Business Communication & Information System", units: [
    "Communication basics + barriers + verbal/non-verbal",
    "Business letters + reports + meetings/interview",
    "Office procedure + email/online communication",
    "Info & MIS basics (OAS/TPS/MIS/DSS) + decision making"
  ], type: "Theory" },

  { sem: 1, code: "BCA-104", title: "C Programming", units: [
    "C basics, tokens, data types, operators",
    "Decision making + loops + arrays + preprocessor",
    "Functions (recursion, arrays, parameter passing)",
    "Strings, structures, pointers, file handling"
  ], type: "Theory" },

  { sem: 1, code: "BCA-105", title: "Lab on DOS & Windows", units: ["Practical syllabus"], type: "Lab" },
  { sem: 1, code: "BCA-106", title: "Lab on C", units: ["Practical syllabus"], type: "Lab" },

  // Sem 2
  { sem: 2, code: "BCA-201", title: "Discrete Mathematics", units: [
    "Set, Relation, Function (equivalence, partitions)",
    "Algebraic structures (semigroup, monoid, group, ring)",
    "POSET & lattice (Hasse diagram, properties)",
    "Graph theory basics (paths, trees)"
  ], type: "Theory" },

  { sem: 2, code: "BCA-202", title: "Computer Architecture", units: [
    "Number systems + complements + arithmetic",
    "Boolean algebra + logic gates + DeMorgan",
    "Sequential logic (flip-flops, registers, counters)",
    "I/O organization + memory hierarchy + cache"
  ], type: "Theory" },

  { sem: 2, code: "BCA-203", title: "Data Structure through C", units: [
    "Recursion, sorting & searching",
    "Linked lists (single/double/circular)",
    "Stack & Queue",
    "Trees & Graph (BST traversal, matrix rep.)"
  ], type: "Theory" },

  { sem: 2, code: "BCA-204", title: "System Analysis and Design", units: [
    "SDLC (waterfall/prototype), analyst role",
    "Project selection + feasibility + cost/benefit",
    "Analysis tools (DFD, ERD, data dictionary etc.)",
    "Design + testing + maintenance + MIS overview"
  ], type: "Theory" },

  { sem: 2, code: "BCA-205", title: "Lab on MS-Office", units: ["Practical syllabus"], type: "Lab" },
  { sem: 2, code: "BCA-206", title: "Lab on Data Structure through C", units: ["Practical syllabus"], type: "Lab" },

  // Sem 3
  { sem: 3, code: "BCA-301", title: "Fundamentals of Management & Business Accounting", units: [
    "Management concepts + functions",
    "Organisational behaviour basics",
    "Accounting basics + terminology",
    "Journal, ledger, trial balance, final accounts"
  ], type: "Theory" },

  { sem: 3, code: "BCA-302", title: "Database Management System", units: [
    "DB concepts + architecture + data independence",
    "ER model + mapping",
    "Relational model + relational algebra",
    "Normalization + SQL + transactions/concurrency"
  ], type: "Theory" },

  { sem: 3, code: "BCA-303", title: "OOP using C++", units: [
    "C++ basics + functions + overloading",
    "Classes/objects + constructors + memory",
    "Arrays/strings + operator overloading",
    "Inheritance + virtual functions + templates/exceptions"
  ], type: "Theory" },

  { sem: 3, code: "BCA-304", title: "Numerical Methodology", units: [
    "Roots of equations (bisection, Newton-Raphson etc.)",
    "Simultaneous equations (Gauss methods, LU etc.)",
    "Interpolation + differentiation",
    "Numerical integration + ODE methods"
  ], type: "Theory" },

  { sem: 3, code: "BCA-305", title: "Lab on DBMS (SQL/MS-ACCESS)", units: ["Practical syllabus"], type: "Lab" },
  { sem: 3, code: "BCA-306", title: "Lab on C++", units: ["Practical syllabus"], type: "Lab" },

  // Sem 4
  { sem: 4, code: "BCA-401", title: "Java Programming", units: [
    "Java basics + control flow",
    "Classes/objects + inheritance",
    "Arrays/strings + packages/interfaces",
    "Threads + applets + JDBC intro"
  ], type: "Theory" },

  { sem: 4, code: "BCA-402", title: "Computer Graphics & Multimedia", units: [
    "Graphics systems + display devices",
    "Line/circle/ellipse algorithms",
    "2D transformations + clipping",
    "3D transformations + projections + multimedia basics"
  ], type: "Theory" },

  { sem: 4, code: "BCA-403", title: "Operating System & Linux", units: [
    "Process management + synchronization + deadlock",
    "Memory management + scheduling + file management",
    "Linux commands + shell programming basics"
  ], type: "Theory" },

  { sem: 4, code: "BCA-404", title: "Software Engineering Principles", units: [
    "Process models (waterfall, spiral, RAD etc.)",
    "Requirements + SRS + DFD/ERD",
    "Design (cohesion/coupling) + UI design",
    "Testing + metrics + maintenance + CASE"
  ], type: "Theory" },

  { sem: 4, code: "BCA-405", title: "Lab on Java", units: ["Practical syllabus"], type: "Lab" },
  { sem: 4, code: "BCA-406", title: "Lab on Computer Graphics & Linux", units: ["Practical syllabus"], type: "Lab" },

  // Sem 5
  { sem: 5, code: "BCA-501", title: "Relational DBMS (Oracle/SQL/PLSQL)", units: [
    "RDBMS basics + SQL (DDL/DML) + datatypes",
    "Constraints + joins + subqueries",
    "Views + indexes + GRANT/REVOKE",
    "PL/SQL + cursors + procedures/functions + triggers"
  ], type: "Theory" },

  { sem: 5, code: "BCA-502", title: "AI through Python Programming", units: [
    "Python basics + loops + data types",
    "Functions/modules + lambda + packages",
    "File operations + regex validation",
    "AI: search, planning, ML (supervised/unsupervised/RL)"
  ], type: "Theory" },

  { sem: 5, code: "BCA-503", title: "Web Technology (HTML/CSS/JS)", units: [
    "WWW, HTTP, URLs",
    "HTML basics (tables, forms)",
    "CSS selectors + box model",
    "JavaScript + DOM + events"
  ], type: "Theory" },

  { sem: 5, code: "BCA-504", title: "Computer Network, Security & Cyber Law", units: [
    "Network basics + OSI/TCP-IP + topology",
    "Physical/data link concepts + IPv4/IPv6",
    "Network security (AES/RSA, Kerberos, X.509, firewall)",
    "Cyber law basics (IT Act India)"
  ], type: "Theory" },

  { sem: 5, code: "BCA-505", title: "Lab on Oracle", units: ["Practical syllabus"], type: "Lab" },
  { sem: 5, code: "BCA-506", title: "Lab on Python & Web Technology", units: ["Practical syllabus"], type: "Lab" },

  // Sem 6
  { sem: 6, code: "BCA-601", title: "Project Report", units: ["Project work"], type: "Project" },
  { sem: 6, code: "BCA-602", title: "Seminar Presentation", units: ["Seminar"], type: "Seminar" },
  { sem: 6, code: "BCA-603", title: "Viva-Voce", units: ["Viva"], type: "Viva" },
];

// =============== RENDERING ===============
const cardsEl = document.getElementById("cards");
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");
const segBtns = Array.from(document.querySelectorAll(".segBtn"));

let state = { sem: "all", q: "" };

function matches(item){
  const q = state.q.trim().toLowerCase();
  const semOk = state.sem === "all" ? true : String(item.sem) === String(state.sem);
  if(!q) return semOk;

  const hay = `${item.code} ${item.title} ${item.type} ${item.units.join(" ")}`.toLowerCase();
  return semOk && hay.includes(q);
}

function cardHTML(item){
  const units = (item.units || []).slice(0, 4).map(u => `<li>${escapeHtml(u)}</li>`).join("");
  return `
    <article class="card">
      <div class="topLine">
        <div class="code">${escapeHtml(item.code)}</div>
        <div class="semTag">Sem ${item.sem}</div>
      </div>
      <h3 class="paperTitle">${escapeHtml(item.title)}</h3>
      <ul class="unitList">${units}</ul>
      <div class="meta">
        <span class="badge">${escapeHtml(item.type)}</span>
        <span class="badge">BCA</span>
      </div>
    </article>
  `;
}

function render(){
  const list = syllabus.filter(matches);
  if(!list.length){
    cardsEl.innerHTML = `<div class="card" style="grid-column: 1/-1;">
      <div class="code">No results</div>
      <p style="margin:8px 0 0; color: var(--muted); font-weight: 700;">Try searching a paper code like <b>BCA-503</b> or keyword like <b>DBMS</b>.</p>
    </div>`;
    return;
  }
  cardsEl.innerHTML = list.map(cardHTML).join("");
}

function setSem(sem){
  state.sem = sem;
  segBtns.forEach(b => b.classList.toggle("active", b.dataset.sem === sem));
  render();
}

searchInput?.addEventListener("input", (e) => {
  state.q = e.target.value || "";
  render();
});

clearSearch?.addEventListener("click", () => {
  state.q = "";
  if(searchInput) searchInput.value = "";
  render();
  searchInput?.focus();
});

segBtns.forEach(b => b.addEventListener("click", () => setSem(b.dataset.sem)));

function escapeHtml(s){
  return String(s)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

render();

