const container     = document.getElementById('container');
const toRegisterBtn = document.getElementById('toRegisterBtn');
const toLoginBtn    = document.getElementById('toLoginBtn');

// Switch to Register mode
toRegisterBtn.addEventListener('click', () => {
  container.classList.add('register-mode');
  reAnimateOverlay();
});

// Switch back to Login mode
toLoginBtn.addEventListener('click', () => {
  container.classList.remove('register-mode');
  reAnimateOverlay();
});

// Re-trigger overlay text animations each time we toggle
function reAnimateOverlay() {
  const overlayPanel = document.getElementById('overlayPanel');
  overlayPanel.style.transition = 'none';

  // Force reflow so the animation class re-fires
  void overlayPanel.offsetWidth;

  overlayPanel.style.transition = '';

  // Re-trigger animations on text elements
  const isRegisterMode = container.classList.contains('register-mode');
  const activeContent  = isRegisterMode
    ? document.getElementById('overlayLeft')
    : document.getElementById('overlayRight');

  const h2  = activeContent.querySelector('h2');
  const p   = activeContent.querySelector('p');
  const btn = activeContent.querySelector('.btn');

  [h2, p, btn].forEach(el => {
    el.style.animation = 'none';
    void el.offsetWidth;
    el.style.animation = '';
  });
}