document.addEventListener('DOMContentLoaded', () => {
  const themeBtn = document.getElementById('themeToggle');
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
  });

  const menuBtn = document.getElementById('menuBtn');
  const navList = document.querySelector('.nav-list');
  menuBtn.addEventListener('click', () => {
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', !expanded);
    navList.classList.toggle('show');
  });

  const portfolioItems = document.querySelectorAll('.portfolio-item');
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalClose = document.querySelector('.modal-close');

  portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
      modalTitle.textContent = item.dataset.title;
      modalDesc.textContent = item.dataset.desc;
      modal.classList.add('show');
      modal.setAttribute('aria-hidden','false');
    });
  });

  modalClose.addEventListener('click', () => {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden','true');
  });

  document.getElementById('year').textContent = new Date().getFullYear();

  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const response = await fetch(contactForm.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    });
    if (response.ok) {
      alert('Message sent! Thank you.');
      contactForm.reset();
    } else {
      alert('Oops! There was a problem.');
    }
  });
});
