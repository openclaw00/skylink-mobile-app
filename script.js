/*
  Skylink App Scripts
*/

// ─── i18n Dictionary ────────────────────────────────────────────────────────

const translations = {
  EN: {
    // Home
    enRoute:           'En route · 2.4 km away',
    inFlight:          'IN FLIGHT',
    altitude:          'ALTITUDE',
    speed:             'SPEED',
    battery:           'BATTERY',
    wind:              'WIND',
    viewTracking:      'VIEW FULL TRACKING →',
    newOrder:          'New Order',
    scheduleDelivery:  'Schedule delivery',
    history:           'History',
    deliveriesCount:   '12 deliveries',
    goldTier:          'Gold tier',
    weatherTitle:      'Hanoi — Clear skies',
    weatherSub:        'Optimal flying conditions · 29°C',
    clear:             '✓ CLEAR',
    // Order tab
    route:             'ROUTE',
    pickup:            'PICKUP',
    pickupPh:          'Enter pickup address...',
    dropoff:           'DROP-OFF',
    dropoffPh:         'Enter destination...',
    quickSelect:       'QUICK SELECT',
    continueBtn:       'Continue →',
    // Track tab
    alt:               'ALT',
    spd:               'SPD',
    bat:               'BAT',
    batteryLabel:      'Battery',
    deliveryStatus:    'DELIVERY STATUS',
    stepOrderPlaced:   'Order Placed',
    stepDroneAssigned: 'Drone Assigned',
    stepPickedUp:      'Picked Up',
    stepInFlight:      'In Flight',
    now:               'Now',
    stepDelivered:     'Delivered',
    rateDelivery:      'Rate Delivery',
    // Profile tab
    goldTierBadge:     'GOLD TIER',
    deliveries:        'Deliveries',
    rating:            'Rating',
    toPlatinum:        '260 pts to Platinum',
    recentDeliveries:  'Recent Deliveries',
    apr21:             'Apr 21',
    apr19:             'Apr 19',
    apr17:             'Apr 17',
    settings:          'Settings',
    language:          'Language',
    languageValue:     'English',
    // Nav
    navHome:           'Home',
    navOrder:          'Order',
    navTrack:          'Track',
    navProfile:        'Profile',
    // Modals
    selectPackageSize: 'Select Package Size',
    small:             'Small',
    upTo1kg:           'Up to 1 kg',
    medium:            'Medium',
    upTo3kg:           'Up to 3 kg',
    large:             'Large',
    upTo5kg:           'Up to 5 kg',
    back:              'Back',
    selectDeliverySpeed: 'Select Delivery Speed',
    urgentDesc:        'Immediate priority dispatch',
    standard:          'Standard',
    standardDesc:      'Flexible same-day window',
    free:              'Free',
    today:             'Today',
    confirmOrder:      'Confirm Order →',
    // Rating modal
    rateModalTitle:    'Rate Your Delivery',
    rateModalSub:      'How was your experience with drone SL-2847?',
    rateSelectPrompt:  'Tap a star to rate',
    cancel:            'Cancel',
    submitRating:      'Submit Rating',
    rateLabels:        ['Terrible', 'Poor', 'OK', 'Good', 'Excellent!'],
    thankYouTitle:     'Thanks for your rating!',
    thankYouMsg:       'Your feedback helps us fly better.',
  },
  VI: {
    // Home
    enRoute:           'Đang đến · còn 2.4 km',
    inFlight:          'ĐANG BAY',
    altitude:          'ĐỘ CAO',
    speed:             'TỐC ĐỘ',
    battery:           'PIN',
    wind:              'GIÓ',
    viewTracking:      'XEM THEO DÕI ĐẦY ĐỦ →',
    newOrder:          'Đặt Hàng Mới',
    scheduleDelivery:  'Lên lịch giao hàng',
    history:           'Lịch Sử',
    deliveriesCount:   '12 lần giao',
    goldTier:          'Hạng Vàng',
    weatherTitle:      'Hà Nội — Trời quang',
    weatherSub:        'Điều kiện bay lý tưởng · 29°C',
    clear:             '✓ THÔNG SUỐT',
    // Order tab
    route:             'LỘ TRÌNH',
    pickup:            'ĐỊA CHỈ LẤY',
    pickupPh:          'Nhập địa chỉ lấy hàng...',
    dropoff:           'GIAO ĐẾN',
    dropoffPh:         'Nhập điểm đến...',
    quickSelect:       'CHỌN NHANH',
    continueBtn:       'Tiếp Tục →',
    // Track tab
    alt:               'ĐỘ CAO',
    spd:               'TỐC ĐỘ',
    bat:               'PIN',
    batteryLabel:      'Pin',
    deliveryStatus:    'TRẠNG THÁI GIAO HÀNG',
    stepOrderPlaced:   'Đã Đặt Hàng',
    stepDroneAssigned: 'Drone Được Phân Công',
    stepPickedUp:      'Đã Lấy Hàng',
    stepInFlight:      'Đang Bay',
    now:               'Bây Giờ',
    stepDelivered:     'Đã Giao',
    rateDelivery:      'Đánh Giá Giao Hàng',
    // Profile tab
    goldTierBadge:     'HẠNG VÀNG',
    deliveries:        'Lần Giao',
    rating:            'Đánh Giá',
    toPlatinum:        'Còn 260 pts lên Bạch Kim',
    recentDeliveries:  'Giao Hàng Gần Đây',
    apr21:             '21 tháng 4',
    apr19:             '19 tháng 4',
    apr17:             '17 tháng 4',
    settings:          'Cài đặt',
    language:          'Ngôn ngữ',
    languageValue:     'Tiếng Việt',
    // Nav
    navHome:           'Trang Chủ',
    navOrder:          'Đặt Hàng',
    navTrack:          'Theo Dõi',
    navProfile:        'Hồ Sơ',
    // Modals
    selectPackageSize: 'Chọn Kích Cỡ Kiện Hàng',
    small:             'Nhỏ',
    upTo1kg:           'Tối đa 1 kg',
    medium:            'Vừa',
    upTo3kg:           'Tối đa 3 kg',
    large:             'Lớn',
    upTo5kg:           'Tối đa 5 kg',
    back:              'Quay Lại',
    selectDeliverySpeed: 'Chọn Tốc Độ Giao Hàng',
    urgentDesc:        'Ưu tiên điều phối ngay lập tức',
    standard:          'Tiêu Chuẩn',
    standardDesc:      'Khung giờ linh hoạt trong ngày',
    free:              'Miễn phí',
    today:             'Hôm nay',
    confirmOrder:      'Xác Nhận Đơn →',
    // Rating modal
    rateModalTitle:    'Đánh Giá Giao Hàng',
    rateModalSub:      'Trải nghiệm của bạn với drone SL-2847 như thế nào?',
    rateSelectPrompt:  'Chạm vào sao để đánh giá',
    cancel:            'Hủy',
    submitRating:      'Gửi Đánh Giá',
    rateLabels:        ['Rất tệ', 'Tệ', 'Bình thường', 'Tốt', 'Xuất sắc!'],
    thankYouTitle:     'Cảm ơn bạn đã đánh giá!',
    thankYouMsg:       'Phản hồi của bạn giúp chúng tôi bay tốt hơn.',
  }
};

// ─── Current language state ──────────────────────────────────────────────────

let currentLang = 'VI'; // Default matches the UI which starts in Vietnamese

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  // Text nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  // Placeholder attributes
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key] !== undefined) {
      el.setAttribute('placeholder', t[key]);
    }
  });

  // Update the active star label if rating modal is open
  updateRatingLabel();
}

// ─── Tab switching ───────────────────────────────────────────────────────────

function switchTab(tabId) {
  document.querySelectorAll('.tab-view').forEach(tab => {
    tab.classList.remove('active');
  });
  const targetTab = document.getElementById('tab-' + tabId);
  if (targetTab) targetTab.classList.add('active');

  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
  });
  document.querySelectorAll('.nav-item').forEach(item => {
    if (item.getAttribute('onclick') && item.getAttribute('onclick').includes(tabId)) {
      item.classList.add('active');
    }
  });
}

// ─── Order flow modals ───────────────────────────────────────────────────────

function openPackageModal() {
  document.getElementById('package-modal').classList.add('show');
}
function closePackageModal() {
  document.getElementById('package-modal').classList.remove('show');
}
function selectPackage(element) {
  document.querySelectorAll('#package-modal .pkg-option').forEach(opt => opt.classList.remove('selected'));
  element.classList.add('selected');
}

function openSpeedModal() {
  closePackageModal();
  document.getElementById('speed-modal').classList.add('show');
}
function closeSpeedModal() {
  document.getElementById('speed-modal').classList.remove('show');
}
function selectSpeed(element) {
  document.querySelectorAll('#speed-modal .pkg-option').forEach(opt => opt.classList.remove('selected'));
  element.classList.add('selected');
}

function finalizeOrder() {
  closeSpeedModal();
  switchTab('track');
  const timeSteps = document.querySelectorAll('.time-step');
  if (timeSteps.length > 0) {
    timeSteps.forEach(ts => {
      ts.classList.remove('done', 'active');
      ts.classList.add('pending');
      const dot = ts.querySelector('.dot');
      if (dot) dot.classList.remove('red-glow-dot');
    });
    timeSteps[0].classList.remove('pending');
    timeSteps[0].classList.add('active');
    const firstDot = timeSteps[0].querySelector('.dot');
    if (firstDot) firstDot.classList.add('red-glow-dot');
  }
}

// ─── Star Rating Modal ───────────────────────────────────────────────────────

let selectedRating = 0;

function openRatingModal() {
  selectedRating = 0;
  const submitBtn = document.getElementById('submit-rating-btn');
  if (submitBtn) submitBtn.disabled = true;

  // Reset stars
  document.querySelectorAll('.star').forEach(s => s.classList.remove('active'));

  // Reset label
  updateRatingLabel();

  // Restore the form view (in case it was in "thanks" state)
  const content = document.getElementById('rating-modal-content');
  if (content) {
    content.innerHTML = `
      <h3 class="modal-title" data-i18n="rateModalTitle"></h3>
      <p class="rating-sub" data-i18n="rateModalSub"></p>
      <div class="star-rating" id="star-rating">
        <span class="star" data-value="1">&#9733;</span>
        <span class="star" data-value="2">&#9733;</span>
        <span class="star" data-value="3">&#9733;</span>
        <span class="star" data-value="4">&#9733;</span>
        <span class="star" data-value="5">&#9733;</span>
      </div>
      <p class="rating-label" id="rating-label" data-i18n="rateSelectPrompt"></p>
      <div class="modal-actions">
        <button class="btn btn-outline" onclick="closeRatingModal()" data-i18n="cancel"></button>
        <button class="btn btn-primary glow" id="submit-rating-btn" onclick="submitRating()" disabled data-i18n="submitRating"></button>
      </div>
    `;
    // Re-apply translations and re-bind stars
    applyTranslations(currentLang);
    bindStars();
  }

  document.getElementById('rating-modal').classList.add('show');
}

function closeRatingModal() {
  document.getElementById('rating-modal').classList.remove('show');
}

function bindStars() {
  document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('mouseenter', () => highlightStars(parseInt(star.dataset.value)));
    star.addEventListener('mouseleave', () => highlightStars(selectedRating));
    star.addEventListener('click', () => {
      selectedRating = parseInt(star.dataset.value);
      highlightStars(selectedRating);
      updateRatingLabel();
      const submitBtn = document.getElementById('submit-rating-btn');
      if (submitBtn) submitBtn.disabled = false;
    });
  });
}

function highlightStars(count) {
  document.querySelectorAll('.star').forEach(s => {
    const val = parseInt(s.dataset.value);
    s.classList.toggle('active', val <= count);
  });
}

function updateRatingLabel() {
  const label = document.getElementById('rating-label');
  if (!label) return;
  const t = translations[currentLang];
  if (selectedRating === 0) {
    label.textContent = t.rateSelectPrompt;
  } else {
    label.textContent = t.rateLabels[selectedRating - 1];
  }
}

function submitRating() {
  const t = translations[currentLang];
  const content = document.getElementById('rating-modal-content');
  if (!content) return;

  const stars = '★'.repeat(selectedRating) + '☆'.repeat(5 - selectedRating);

  content.innerHTML = `
    <div class="rating-thanks">
      <span class="thanks-icon">🎉</span>
      <h3>${t.thankYouTitle}</h3>
      <p style="font-size:28px; letter-spacing:4px; margin: 12px 0;">${stars}</p>
      <p>${t.thankYouMsg}</p>
    </div>
    <div class="modal-actions" style="margin-top: 20px;">
      <button class="btn btn-primary glow" onclick="closeRatingModal()" style="width:100%;" data-i18n="cancel">Close</button>
    </div>
  `;
  applyTranslations(currentLang);
}

// ─── Language switch ─────────────────────────────────────────────────────────

document.querySelectorAll('.lang').forEach(el => {
  el.addEventListener('click', () => {
    document.querySelectorAll('.lang').forEach(l => l.classList.remove('active'));
    el.classList.add('active');

    currentLang = el.id === 'lang-vi' ? 'VI' : 'EN';
    applyTranslations(currentLang);
  });
});

// ─── Tag click (Order tab) ───────────────────────────────────────────────────

document.querySelectorAll('.tag').forEach(tag => {
  tag.addEventListener('click', (e) => {
    const dropoffInput = document.getElementById('dropoff-input');
    if (dropoffInput) dropoffInput.value = e.target.innerText;
  });
});

// ─── Star hover/click bindings (initial page load) ──────────────────────────

bindStars();

// ─── Init: apply default language (VI matches HTML defaults) ─────────────────
// The HTML already has Vietnamese text as default, so no need to apply on load.
// But we do ensure the EN lang button is wired properly.
