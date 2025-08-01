// Store config data here after fetch
let ektaConfig = null;

// Elements references
const heroTitleEl = document.getElementById('hero-title');
const heroTaglineEl = document.getElementById('hero-tagline');
const heroSubtitleEl = document.getElementById('hero-subtitle');

const stepsContainer = document.querySelector('.np-steps-flex');
const uspsContainer = document.querySelector('.np-tiles-flex');
const statsContainer = document.querySelector('.np-stats-flex');
const b2cEventsList = document.getElementById('b2c-events-list');

const b2bBenefitsContainer = document.querySelector('.np-benefit-tiles');
const b2bServiceModulesList = document.getElementById('b2b-service-modules-list');

const youformB2CContainer = document.getElementById('youform-b2c-embed');
const youformVenueContainer = document.getElementById('youform-venue-embed');
const youformProviderContainer = document.getElementById('youform-provider-embed');

const adminLoginSection = document.getElementById('admin-login-section');
const adminPanelSection = document.getElementById('admin-panel-section');
const adminLoginForm = document.getElementById('admin-login-form');
const adminLogoutBtn = document.getElementById('admin-logout-btn');
const adminLoginMsg = document.getElementById('admin-login-msg');

// Helper: Render an array of strings as tiles
function renderTiles(container, items) {
  container.innerHTML = "";
  items.forEach(text => {
    const div = document.createElement('div');
    div.className = 'np-tile';
    div.textContent = text;
    container.appendChild(div);
  });
}

// Helper: Render steps with number and text
function renderSteps(container, steps) {
  container.innerHTML = "";
  steps.forEach((stepText, i) => {
    const card = document.createElement('div');
    card.className = 'np-step-card';
    card.tabIndex = 0;
    card.innerHTML = `<span class="np-step-num">${i + 1}</span>${stepText}`;
    container.appendChild(card);
  });
}

// Helper: Render stats cards
function renderStats(container, statsObj) {
  container.innerHTML = "";
  for (const [label, value] of Object.entries(statsObj)) {
    const card = document.createElement('div');
    card.className = 'np-stat-card';
    card.innerHTML = `<span>${value}</span><small>${label}</small>`;
    container.appendChild(card);
  }
}

// Fill event types list
function renderEventList(container, events) {
  container.innerHTML = "";
  events.forEach(evt => {
    const li = document.createElement('li');
    li.textContent = evt;
    container.appendChild(li);
  });
}

// Setup Youform embed area - adding iframe dynamically with fallback message
function embedYouform(container, embedUrl) {
  container.innerHTML = "";
  if (!embedUrl) {
    container.textContent = "[Youform embed not configured]";
    return;
  }
  const iframe = document.createElement('iframe');
  iframe.src = embedUrl;
  iframe.width = '100%';
  iframe.height = '480';
  iframe.style.border = 'none';
  iframe.setAttribute('title', 'Lead capture form');
  iframe.setAttribute('aria-label', 'Lead signup form');
  container.appendChild(iframe);
}

// Load config.json and init page content
async function loadConfig() {
  try {
    const res = await fetch('config.json');
    ektaConfig = await res.json();

    // Hero texts
    heroTitleEl.textContent = ektaConfig.heroCTA || "Join Our Community";
    heroTaglineEl.textContent = ektaConfig.heroTagline || '"People are strange, when you\'re a stranger"';
    heroSubtitleEl.textContent = ektaConfig.heroSubtitle || "Make new friends in the city!";

    // B2C Steps, USPs, Stats
    renderSteps(stepsContainer, ektaConfig.b2cSteps || []);
    renderTiles(uspsContainer, ektaConfig.b2cUSPs || []);
    renderStats(statsContainer, ektaConfig.b2cStats || {});
    renderEventList(b2cEventsList, ektaConfig.b2cEvents || []);

    // B2B Benefits and Service Modules
    renderTiles(b2bBenefitsContainer, ektaConfig.b2bBenefits || []);
    renderEventList(b2bServiceModulesList, ektaConfig.b2bServiceModules || []);

    // Insert Youform embeds
    embedYouform(youformB2CContainer, ektaConfig.youformB2C);
    embedYouform(youformVenueContainer, ektaConfig.youformVenue);
    embedYouform(youformProviderContainer, ektaConfig.youformProvider);
  } catch (err) {
    console.error("Error loading config.json:", err);
    heroTitleEl.textContent = "Error loading site configuration";
  }
}

// Handle simple SPA-like hash navigation and focus management
function setupNav() {
  function navigate() {
    const hash = location.hash ? location.hash.substring(1) : 'home';
    const allSections = document.querySelectorAll('main > section');
    allSections.forEach(sec => {
      if (sec.id === hash) {
        sec.style.display = 'block';
        sec.focus();
      } else {
        sec.style.display = 'none';
      }
    });

    // Focus top nav link
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
      if (link.getAttribute('href') === `#${hash}`) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  window.addEventListener('hashchange', navigate, false);
  navigate(); // Initial
}

// Admin login & logout management
function setupAdminAuth() {
  // Try session restore
  if (localStorage.getItem('eg_admin') === 'true') {
    showAdminPanel(true);
  }

  adminLoginForm.addEventListener('submit', e => {
    e.preventDefault();
    const username = e.target.username.value.trim();
    const password = e.target.password.value;

    if (username === "EktaOG" && password === "EktaOG@123") {
      localStorage.setItem('eg_admin', 'true');
      adminLoginMsg.textContent = "";
      showAdminPanel(true);
    } else {
      adminLoginMsg.textContent = "Invalid username or password!";
      adminLoginMsg.style.color = "#FFD700";
    }
  });

  adminLogoutBtn.addEventListener('click', () => {
    localStorage.removeItem('eg_admin');
    showAdminPanel(false);
  });
}

// Show/hide admin UI parts
function showAdminPanel(isLoggedIn) {
  if (isLoggedIn) {
    adminLoginSection.style.display = 'none';
    adminPanelSection.style.display = 'block';
  } else {
    adminLoginSection.style.display = 'block';
    adminPanelSection.style.display = 'none';
  }
}

// Accessibility: Ensure keyboard focus for skip link & nav
function setupAccessibility() {
  // Shortcut: Logo click returns to home
  document.querySelector('.neopop-navbar .logo').addEventListener('click', () => {
    location.hash = 'home';
  });
}

async function init() {
  await loadConfig();
  setupNav();
  setupAdminAuth();
  setupAccessibility();
}

document.addEventListener('DOMContentLoaded', init);
