// NAVIGATION
const navButtons = document.querySelectorAll('.nav-btn');
const pages = document.querySelectorAll('.page');

navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    navButtons.forEach(b => b.classList.remove('active'));
    pages.forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.target).classList.add('active');
  });
});

// TABS
const tabBtns = document.querySelectorAll('.tab-btn');
const contentSections = document.querySelectorAll('.content');
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    contentSections.forEach(c => c.classList.remove('show'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('show');
  });
});

// MODAL
const modal = document.getElementById('budgetModal');
const openModal = document.getElementById('addBudgetBtn');
const closeModal = document.getElementById('closeModal');
openModal.onclick = () => modal.classList.add('show');
closeModal.onclick = () => modal.classList.remove('show');

// CHART
const ctx = document.getElementById('chart');
if (ctx) {
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Mar','Apr','May','Jun','Jul','Aug'],
      datasets: [{
        label: 'Expenses',
        data: [9, 11, 16, 13, 15, 17],
        borderColor: '#1FA773',
        backgroundColor: 'rgba(31,167,115,.15)',
        fill: true,
        tension: 0.3
      }]
    },
    options: { plugins: { legend: { display: false } } }
  });
}

// Chatbot Response Logic
const responses = {
  "What can I do with InTrack?": "💡 You can record income and expenses, view reports, analyze spending trends, and secure your account with advanced features like PIN and 2FA.",
  "What are the main features of InTrack?": "💡 InTrack offers: • Income & expense tracking • Insights & analytics • Reports • Account & PIN security • Two-Factor Authentication (2FA).",
  "What is the Insights feature?": "💡 The Insights section analyzes your financial data to help you understand trends, optimize spending, and improve budgeting decisions.",
  "How do I add my income or expenses?": "💡 Go to 'Add Expenses' in the sidebar, choose category, amount, and note, then save. It updates your records instantly.",
  "Can I edit or delete a transaction?": "💡 Yes! Click the transaction, then choose Edit or Delete. Your balance updates right away.",
  "What is Two-Factor Authentication (2FA)?": "💡 2FA adds extra security by requiring a verification code along with your password.",
  "How can I enable or disable 2FA?": "💡 Navigate to Settings > Security > Two-Factor Authentication, then toggle ON/OFF.",
  "How do I change my password?": "💡 Go to Settings > Account > Change Password, input your current and new passwords, then save.",
  "Can I set or change my app PIN?": "💡 Yes! Go to Settings > Security > App PIN to create or update your 4-digit PIN.",
  "How secure is my data?": "💡 Your data is encrypted and protected with PIN and Two-Factor Authentication.",
  "Can I view my spending summary or reports?": "💡 Yes! The Dashboard and Insights show charts, trends, and summaries for your finances.",
  "Can I categorize my expenses?": "💡 Definitely! Add categories like Food, Rent, or Utilities for clear organization.",
  "Can I reset my data?": "⚠️ Go to Settings > Account Management > Delete Account. This permanently deletes all data.",
  "What makes InTrack different from others?": "💡 InTrack combines simplicity, analytics, and high-level security — your all-in-one financial manager."
};

document.querySelectorAll(".qbtn").forEach(btn => {
  btn.addEventListener("click", () => {
    const responseArea = document.getElementById("chatResponse");
    const question = btn.textContent.trim();
    responseArea.innerHTML = `
      <div class="qa">
        <p class="question">❓ ${question}</p>
        <p class="answer">${responses[question] || "💬 I'm still learning about that topic!"}</p>
      </div>
    `;
    responseArea.scrollIntoView({ behavior: "smooth" });
  });
});

