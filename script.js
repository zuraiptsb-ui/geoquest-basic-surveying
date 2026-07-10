const TOPICS = ["topic1", "topic2", "topic3", "topic4", "topic5"];
const STORAGE_KEY = "geoquest-dcg10263-dgu1b-roster-v1";
const ADMIN_SESSION_KEY = "geoquest-lecturer-auth";
const LECTURER_PIN = "10263";

const sampleStudents = [
  { id: "16DGU26F1001", name: "MUHAMMAD UMAR AZ-ZUHDI BIN MOHD AKHIR", className: "DGU1B", scores: [0, 0, 0, 0, 0] },
  { id: "16DGU26F1005", name: "NURUL QAISARA BINTI MOHAMAD AZIM", className: "DGU1B", scores: [0, 0, 0, 0, 0] },
  { id: "16DGU26F1009", name: "DANISH NORMAN ZIKRY BIN ZULKAFLI", className: "DGU1B", scores: [0, 0, 0, 0, 0] },
  { id: "16DGU26F1013", name: "JAYDEN JEROMIE", className: "DGU1B", scores: [0, 0, 0, 0, 0] },
  { id: "16DGU26F1017", name: "AHMAD SAIFUL HARITH BIN AHMAD TERMIZI", className: "DGU1B", scores: [0, 0, 0, 0, 0] },
  { id: "16DGU26F1021", name: "MOHAMAD SHAHIROL NAQAIM BIN SELHUDIN", className: "DGU1B", scores: [0, 0, 0, 0, 0] },
  { id: "16DGU26F1025", name: "MUHAMMAD ZUL AZIM BIN ZULKEFFLY", className: "DGU1B", scores: [0, 0, 0, 0, 0] },
  { id: "16DGU26F1029", name: "REBECCA A/P THEVARAJAN", className: "DGU1B", scores: [0, 0, 0, 0, 0] },
  { id: "16DGU26F1033", name: "NADILA FARISYA BINTI ABDULLAH", className: "DGU1B", scores: [0, 0, 0, 0, 0] },
  { id: "16DGU26F1037", name: "TAN YI LE", className: "DGU1B", scores: [0, 0, 0, 0, 0] },
  { id: "16DGU26F1041", name: "MUHAMMAD MUSYRIFF MAZIZ BIN MAHAZAR", className: "DGU1B", scores: [0, 0, 0, 0, 0] },
  { id: "16DGU26F1045", name: "LIM HAN ZE", className: "DGU1B", scores: [0, 0, 0, 0, 0] },
  { id: "16DGU26F1049", name: "NUR SYIFA RAYYANA BINTI MUHAMAD HASROL", className: "DGU1B", scores: [0, 0, 0, 0, 0] },
  { id: "16DGU26F1053", name: "MUHAMMAD EIMAN BIN MOHAMAD ROS", className: "DGU1B", scores: [0, 0, 0, 0, 0] },
  { id: "16DGU26F1057", name: "MUHAMMAD SAIFUL HAIKAL BIN MOHD YUSUF", className: "DGU1B", scores: [0, 0, 0, 0, 0] },
  { id: "16DGU26F1061", name: "MUHAMMAD WAZIF BIN MOHD SAYUTHI", className: "DGU1B", scores: [0, 0, 0, 0, 0] },
  { id: "16DGU26F1065", name: "MUHAMMAD SYAHMIE DANIAL BIN SUHAIMI", className: "DGU1B", scores: [0, 0, 0, 0, 0] },
  { id: "16DGU26F1069", name: "MUHAMMAD NAZHAN ZAQWAN BIN ZURAIMI", className: "DGU1B", scores: [0, 0, 0, 0, 0] },
  { id: "16DGU26F1073", name: "MUHAMMAD NAZIF HAIKAL BIN MOHD NAFIZUL", className: "DGU1B", scores: [0, 0, 0, 0, 0] },
  { id: "16DGU26F1077", name: "NURAZMINA ZAHRA BINTI HARIS", className: "DGU1B", scores: [0, 0, 0, 0, 0] },
  { id: "16DGU26F1081", name: "MUHAMMAD IZZAT WAFIY BIN MOHAMAD FAUZI", className: "DGU1B", scores: [0, 0, 0, 0, 0] },
  { id: "16DGU26F1085", name: "NAUFAL IKHWAN BIN MUHAMAT ROSLI", className: "DGU1B", scores: [0, 0, 0, 0, 0] },
  { id: "16DGU26F1089", name: "ZARIEF SOFFIA BINTI ZAHARI AFENDI", className: "DGU1B", scores: [0, 0, 0, 0, 0] },
  { id: "16DGU26F1093", name: "AHMAD AUS AMSYAR BIN MOHD AZIZUL", className: "DGU1B", scores: [0, 0, 0, 0, 0] },
  { id: "16DGU26F1097", name: "MUHAMMAD EZMIR MIZAN BIN AB MAJID", className: "DGU1B", scores: [0, 0, 0, 0, 0] },
  { id: "16DGU26F1101", name: "WAIZURY ALAM BIN MOHD ROZY", className: "DGU1B", scores: [0, 0, 0, 0, 0] },
  { id: "16DGU26F1105", name: "PUTERA SYUKRI BIN MUHAMAD AZAHAR", className: "DGU1B", scores: [0, 0, 0, 0, 0] },
  { id: "16DGU26F1109", name: "MUHAMMAD IRFAN HAKIMI BIN AMRAN", className: "DGU1B", scores: [0, 0, 0, 0, 0] },
  { id: "16DGU26F1113", name: "MUHAMMAD ADI DARWISY BIN MANSOR", className: "DGU1B", scores: [0, 0, 0, 0, 0] },
  { id: "16DGU26F1117", name: "NUR ALYA IRDINA BINTI MOHAMAD ANUAR", className: "DGU1B", scores: [0, 0, 0, 0, 0] }
];

let students = loadStudents();
const pageType = document.body.dataset.page;
const body = document.querySelector("#leaderboardBody");
const searchInput = document.querySelector("#searchInput");

function loadStudents() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!Array.isArray(saved)) return structuredClone(sampleStudents);
    return sampleStudents.map(rosterStudent => {
      const savedStudent = saved.find(student => String(student.id) === rosterStudent.id);
      return savedStudent ? { ...rosterStudent, scores: normalizeScores(savedStudent.scores) } : structuredClone(rosterStudent);
    });
  } catch { return structuredClone(sampleStudents); }
}

function normalizeScores(scores) {
  return Array.from({ length: 5 }, (_, index) => Math.max(0, Math.min(20, Number(scores?.[index]) || 0)));
}

function saveStudents() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
}

const totalOf = student => student.scores.reduce((sum, score) => sum + Number(score), 0);
const initials = name => name.split(/\s+/).slice(0, 2).map(word => word[0]).join("").toUpperCase();

function escapeHtml(value) {
  const element = document.createElement("div");
  element.textContent = value;
  return element.innerHTML;
}

function badgeFor(total) {
  if (total >= 90) return { name: "Legend", icon: "◆", className: "legend" };
  if (total >= 80) return { name: "Master", icon: "★", className: "master" };
  if (total >= 70) return { name: "Pathfinder", icon: "▲", className: "pathfinder" };
  if (total >= 50) return { name: "Explorer", icon: "●", className: "explorer" };
  return { name: "Rookie", icon: "⬡", className: "rookie" };
}

function rankedStudents() {
  return [...students].sort((a, b) => totalOf(b) - totalOf(a) || a.name.localeCompare(b.name));
}

function renderLeaderboard() {
  if (!body) return;
  const ranked = rankedStudents();
  const query = searchInput?.value.trim().toLowerCase() || "";
  let visible = ranked.map((student, index) => ({ ...student, rank: index + 1 }));
  const topTenToggle = document.querySelector("#topTenToggle");
  if (topTenToggle?.checked) visible = visible.slice(0, 10);
  if (query) visible = visible.filter(student => student.name.toLowerCase().includes(query) || student.id.toLowerCase().includes(query));

  body.innerHTML = visible.map(student => {
    const total = totalOf(student);
    const badge = badgeFor(total);
    return `<tr>
      <td><span class="rank">#${student.rank}</span></td>
      <td><div class="student-cell"><span class="avatar table-avatar">${initials(student.name)}</span><div><strong>${escapeHtml(student.name)}</strong><small>${escapeHtml(student.id)} · DGU1B</small></div></div></td>
      ${student.scores.map(score => `<td>${score}</td>`).join("")}
      <td class="progress-cell"><div class="progress-label"><span>Progress</span><span>${total}%</span></div><div class="progress-track"><i style="width:${total}%"></i></div></td>
      <td class="total-cell"><strong>${total}</strong><small>${total}%</small></td>
      <td><span class="badge badge-${badge.className}">${badge.icon}</span><span class="badge-name">${badge.name}</span></td>
    </tr>`;
  }).join("");

  document.querySelector("#emptyState").hidden = visible.length > 0;
  updateStats();
  renderPodium(ranked.slice(0, 3));
}

function updateStats() {
  const totals = students.map(totalOf);
  const count = document.querySelector("#studentCount");
  const average = document.querySelector("#classAverage");
  const top = document.querySelector("#topScore");
  if (count) count.textContent = students.length;
  if (average) average.textContent = `${totals.length ? Math.round(totals.reduce((a, b) => a + b, 0) / totals.length) : 0}%`;
  if (top) top.textContent = totals.length ? Math.max(...totals) : 0;
}

function renderPodium(top) {
  const podium = document.querySelector("#podium");
  if (!podium) return;
  podium.innerHTML = top.map((student, index) => `<article class="podium-card"><span class="podium-rank">${["①", "②", "③"][index]}</span><span class="avatar">${initials(student.name)}</span><div class="podium-info"><strong>${escapeHtml(student.name)}</strong><small>${badgeFor(totalOf(student)).name}</small></div><span class="podium-score">${totalOf(student)}</span></article>`).join("");
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function initializeStudentPage() {
  renderLeaderboard();
  searchInput?.addEventListener("input", renderLeaderboard);
  document.querySelector("#topTenToggle")?.addEventListener("change", renderLeaderboard);
  window.addEventListener("storage", event => {
    if (event.key === STORAGE_KEY) { students = loadStudents(); renderLeaderboard(); }
  });
}

function initializeAdminPage() {
  const pinGate = document.querySelector("#pinGate");
  const adminApp = document.querySelector("#adminApp");
  const pinForm = document.querySelector("#pinForm");
  const pinInput = document.querySelector("#pinInput");
  const pinError = document.querySelector("#pinError");

  function unlockAdmin() {
    document.body.classList.remove("locked");
    pinGate.hidden = true;
    adminApp.setAttribute("aria-hidden", "false");
    syncStudentOptions();
    renderLeaderboard();
    updatePreview();
  }

  if (sessionStorage.getItem(ADMIN_SESSION_KEY) === "authorized") unlockAdmin();

  pinForm.addEventListener("submit", event => {
    event.preventDefault();
    if (pinInput.value !== LECTURER_PIN) {
      pinError.textContent = "Incorrect PIN. Access denied.";
      pinInput.value = "";
      pinInput.focus();
      return;
    }
    sessionStorage.setItem(ADMIN_SESSION_KEY, "authorized");
    pinError.textContent = "";
    unlockAdmin();
  });

  document.querySelector("#logoutButton").addEventListener("click", () => {
    sessionStorage.removeItem(ADMIN_SESSION_KEY);
    document.body.classList.add("locked");
    pinGate.hidden = false;
    adminApp.setAttribute("aria-hidden", "true");
    pinInput.value = "";
    pinInput.focus();
  });

  document.querySelector("#studentName").addEventListener("change", loadSelectedScores);
  TOPICS.forEach(id => document.querySelector(`#${id}`).addEventListener("input", updatePreview));
  document.querySelector("#scoreForm").addEventListener("submit", updateSelectedScore);
  document.querySelector("#resetSelected").addEventListener("click", resetSelectedScore);
  document.querySelector("#resetAll").addEventListener("click", resetAllScores);
  searchInput.addEventListener("input", renderLeaderboard);
}

function syncStudentOptions() {
  const select = document.querySelector("#studentName");
  const selectedId = select.value;
  select.innerHTML = `<option value="">Select a student</option>${sampleStudents.map(student => `<option value="${student.id}">${student.id} — ${escapeHtml(student.name)}</option>`).join("")}`;
  if (students.some(student => student.id === selectedId)) select.value = selectedId;
}

function loadSelectedScores(event) {
  const student = students.find(item => item.id === event.target.value);
  TOPICS.forEach((id, index) => document.querySelector(`#${id}`).value = student ? student.scores[index] : 0);
  updatePreview();
}

function updatePreview() {
  const total = TOPICS.reduce((sum, id) => sum + (Number(document.querySelector(`#${id}`).value) || 0), 0);
  document.querySelector("#previewTotal").textContent = total;
  document.querySelector("#previewBar").style.width = `${Math.min(total, 100)}%`;
}

function updateSelectedScore(event) {
  event.preventDefault();
  const studentId = document.querySelector("#studentName").value;
  const scores = TOPICS.map(id => Number(document.querySelector(`#${id}`).value));
  if (!studentId) return showToast("Select a student first.");
  if (scores.some(score => !Number.isFinite(score) || score < 0 || score > 20)) return showToast("Each score must be between 0 and 20.");
  const student = students.find(item => item.id === studentId);
  student.scores = scores;
  saveStudents();
  renderLeaderboard();
  showToast(`${student.name}'s scores were updated.`);
}

function resetSelectedScore() {
  const studentId = document.querySelector("#studentName").value;
  if (!studentId) return showToast("Select a student first.");
  const student = students.find(item => item.id === studentId);
  if (!confirm(`Reset all five scores for ${student.name}?`)) return;
  student.scores = [0, 0, 0, 0, 0];
  saveStudents();
  loadSelectedScores({ target: { value: studentId } });
  renderLeaderboard();
  showToast(`${student.name}'s scores were reset.`);
}

function resetAllScores() {
  if (!confirm("Reset Topic 1–5 scores to zero for all 30 students?")) return;
  students = students.map(student => ({ ...student, scores: [0, 0, 0, 0, 0] }));
  saveStudents();
  const selectedId = document.querySelector("#studentName").value;
  loadSelectedScores({ target: { value: selectedId } });
  renderLeaderboard();
  showToast("All student scores were reset to zero.");
}

if (pageType === "admin") initializeAdminPage();
else initializeStudentPage();
