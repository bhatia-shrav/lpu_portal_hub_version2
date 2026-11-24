const loginForm = document.getElementById('loginForm');
const uidInput = document.getElementById('uid');
const pwdInput = document.getElementById('pwd');
const errorMsg = document.getElementById('errorMsg');

loginForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const uid = uidInput.value.trim();
  const pwd = pwdInput.value.trim();

  if (uid === '' || pwd === '') {
    errorMsg.textContent = 'Please fill in both Student ID and Password.';
    errorMsg.style.display = 'block';
    return;
  }

  window.location.href = 'portals.html';
});

uidInput.addEventListener('input', function () { errorMsg.style.display = 'none'; });
pwdInput.addEventListener('input', function () { errorMsg.style.display = 'none'; });

