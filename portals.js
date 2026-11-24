(function () {
  const backBtn = document.getElementById('backBtn');
  const openAppBtn = document.getElementById('openAppBtn');
  const appModal = document.getElementById('appModal');
  const closeAppModal = document.getElementById('closeAppModal');
  const modalBackBtn = document.getElementById('modalBackBtn');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portalCards = document.querySelectorAll('.portal');

  function showBackNav() {
    backBtn.style.display = 'inline-flex';
  }

  function hideBackNav() {
    if (appModal.style.display !== 'grid') {
      backBtn.style.display = 'none';
    }
  }

  function launchApp() {
    const isAndroid = /Android/i.test(navigator.userAgent);
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isAndroid) {
      window.location.href = 'intent://#Intent;package=ums.lovely.university;action=android.intent.action.MAIN;category=android.intent.category.LAUNCHER;S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dums.lovely.university;end';
    } else if (isIOS) {
      const start = Date.now();
      window.location.href = 'lputouch://';
      setTimeout(function () {
        if (Date.now() - start < 1800) {
          window.open('https://apps.apple.com/in/app/lpu-touch/id1454508605', '_blank');
        }
      }, 1000);
    } else {
      appModal.style.display = 'grid';
      showBackNav();
    }
  }

  function closePopup() {
    if (appModal) appModal.style.display = 'none';
    hideBackNav();
  }

  if (openAppBtn) {
    openAppBtn.addEventListener('click', function (e) {
      e.preventDefault();
      launchApp();
    });
  }

  if (closeAppModal) {
    closeAppModal.addEventListener('click', closePopup);
  }

  if (modalBackBtn) {
    modalBackBtn.addEventListener('click', closePopup);
  }

  if (appModal) {
    appModal.addEventListener('click', function (e) {
      if (e.target === appModal) {
        closePopup();
      }
    });
  }

  backBtn.addEventListener('click', closePopup);

  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const selected = btn.getAttribute('data-filter');
      filterButtons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      portalCards.forEach(function (card) {
        const cat = card.getAttribute('data-category');
        card.hidden = selected !== 'all' && cat !== selected;
      });
    });
  });
})();
