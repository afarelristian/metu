document.addEventListener('DOMContentLoaded', function () {
  // Placeholder for future enhancements (e.g. countdown redirect, analytics)
  const card = document.querySelector('.logout-card');
  if (card) {
    card.addEventListener('animationend', function () {
      card.style.opacity = '1';
    }, { once: true });
  }
});
