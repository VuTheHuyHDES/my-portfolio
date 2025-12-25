const container = document.querySelector('.container');

// 1. Tạo bản clone cho dark mode
const cloneContainer = container.cloneNode(true);
cloneContainer.id = 'dark-container';
document.body.appendChild(cloneContainer);
cloneContainer.classList.remove('active');

const toggleIcons = document.querySelectorAll('.toggle-icon');
const icons = document.querySelectorAll('.toggle-icon i');
const darkContainer = document.querySelector('#dark-container');

// 2. Xử lý chuyển đổi Dark Mode
toggleIcons.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.classList.add('disable');
    setTimeout(() => toggle.classList.remove('disable'), 1500);

    icons.forEach(icon => {
      icon.classList.toggle('bx-sun');
      icon.classList.toggle('bx-moon');
    });

    container.classList.toggle('active');
    darkContainer.classList.toggle('active');
  });
});

// 3. Xử lý Menu Mobile cho cả 2 bản
const setupMenu = (parentSelector) => {
  const parent = document.querySelector(parentSelector);
  const menuIcon = parent.querySelector('#menu-icon');
  const navbar = parent.querySelector('.navbar');
  const navLinks = parent.querySelectorAll('.navbar a');

  menuIcon.onclick = () => {
    navbar.classList.toggle('active');
    menuIcon.querySelector('i').classList.toggle('bx-x');
  };

  navLinks.forEach(link => {
    link.onclick = () => {
      navbar.classList.remove('active');
      menuIcon.querySelector('i').classList.remove('bx-x');
    };
  });
};

setupMenu('#container');
setupMenu('#dark-container');

// 4. Scroll Reveal - Hiệu ứng hiện hình khi cuộn
const sr = ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200,
  reset: false // Hiện 1 lần hoặc set true để hiện lại mỗi lần cuộn
});

// Cấu hình cho từng nhóm
sr.reveal('.logo, .reveal-top', { origin: 'top' });
sr.reveal('.home-img, .reveal-bottom, .social-media, .btn', { origin: 'bottom' });
sr.reveal('.home-content h1, .reveal-left', { origin: 'left' });
sr.reveal('.home-content p, .reveal-right', { origin: 'right' });