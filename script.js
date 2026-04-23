/* 
  Skylink App Redesign Scripts
*/

// Show the top notification after a short delay
setTimeout(() => {
  const notif = document.getElementById('top-notification');
  if (notif) {
    notif.classList.add('show');
  }
}, 1000);

// Handle notification close
document.addEventListener('click', (e) => {
  if (e.target.closest('.close-btn')) {
    const notif = document.getElementById('top-notification');
    if (notif) {
      notif.classList.remove('show');
    }
  }
});

// Tab switching logic
function switchTab(tabId) {
  // Update views
  document.querySelectorAll('.tab-view').forEach(tab => {
    tab.classList.remove('active');
  });
  const targetTab = document.getElementById('tab-' + tabId);
  if (targetTab) {
    targetTab.classList.add('active');
  }

  // Update nav items
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
  });
  
  // Find the nav item that triggered this (or matches)
  const navItems = document.querySelectorAll('.nav-item');
  for (let item of navItems) {
    if (item.getAttribute('onclick').includes(tabId)) {
      item.classList.add('active');
      break;
    }
  }
}

// Modal logic for Order flow
function openPackageModal() {
  const modal = document.getElementById('package-modal');
  if (modal) {
    modal.classList.add('show');
  }
}

function closePackageModal() {
  const modal = document.getElementById('package-modal');
  if (modal) {
    modal.classList.remove('show');
  }
}

function selectPackage(element) {
  document.querySelectorAll('#package-modal .pkg-option').forEach(opt => {
    opt.classList.remove('selected');
  });
  element.classList.add('selected');
}

// Modal logic for Delivery Speed
function openSpeedModal() {
  closePackageModal();
  const modal = document.getElementById('speed-modal');
  if (modal) {
    modal.classList.add('show');
  }
}

function closeSpeedModal() {
  const modal = document.getElementById('speed-modal');
  if (modal) {
    modal.classList.remove('show');
  }
}

function selectSpeed(element) {
  document.querySelectorAll('#speed-modal .pkg-option').forEach(opt => {
    opt.classList.remove('selected');
  });
  element.classList.add('selected');
}

// Finalize order flow
function finalizeOrder() {
  closeSpeedModal();
  // Simulate routing to the tracking screen
  switchTab('track');
  
  // Optional: Reset timeline visually to look like a new order just started
  const timeSteps = document.querySelectorAll('.time-step');
  if (timeSteps.length > 0) {
    timeSteps.forEach(ts => {
      ts.classList.remove('done', 'active');
      ts.classList.add('pending');
      const dot = ts.querySelector('.dot');
      if (dot) dot.classList.remove('red-glow-dot');
    });
    // Set first one to active
    timeSteps[0].classList.remove('pending');
    timeSteps[0].classList.add('active');
    const firstDot = timeSteps[0].querySelector('.dot');
    if (firstDot) firstDot.classList.add('red-glow-dot');
  }
}

// Language switch logic (Profile tab)
document.querySelectorAll('.lang').forEach(el => {
  el.addEventListener('click', (e) => {
    document.querySelectorAll('.lang').forEach(l => l.classList.remove('active'));
    e.target.classList.add('active');
  });
});

// Tag click effect (Order tab)
document.querySelectorAll('.tag').forEach(tag => {
  tag.addEventListener('click', (e) => {
    const dropoffInput = document.querySelector('.dropoff').nextElementSibling.querySelector('input');
    if (dropoffInput) {
      dropoffInput.value = e.target.innerText;
    }
  });
});
