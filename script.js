const container = document.querySelector('.container');

// 1. Tạo bản clone cho dark mode
const cloneContainer = container.cloneNode(true);
cloneContainer.id = 'dark-container';
document.body.appendChild(cloneContainer);
cloneContainer.classList.remove('active');

const toggleIcons = document.querySelectorAll('.toggle-icon');
const icons = document.querySelectorAll('.toggle-icon i');
const darkContainer = document.querySelector('#dark-container');

// 2. Chuyển đổi Dark Mode
toggleIcons.forEach(toggle => {
  toggle.addEventListener('click', () => {
    icons.forEach(icon => {
      icon.classList.toggle('bx-sun');
      icon.classList.toggle('bx-moon');
    });
    container.classList.toggle('active');
    darkContainer.classList.toggle('active');
  });
});

// 3. Xử lý Menu Mobile cho cả 2 bản giao diện
const setupMenu = (id) => {
  const root = document.querySelector(id);
  const menuIcon = root.querySelector('#menu-icon');
  const navbar = root.querySelector('.navbar');
  const navLinks = root.querySelectorAll('.navbar a');

  if (menuIcon) {
    menuIcon.onclick = () => {
      navbar.classList.toggle('active');
      menuIcon.querySelector('i').classList.toggle('bx-x');
    };
  }

  navLinks.forEach(link => {
    link.onclick = () => {
      navbar.classList.remove('active');
      menuIcon.querySelector('i').classList.remove('bx-x');
    };
  });
};

setupMenu('#container');
setupMenu('#dark-container');

// 4. Khởi tạo Scroll Reveal
window.addEventListener('load', () => {
  const sr = ScrollReveal({
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: false
  });

  sr.reveal('.reveal-top', { origin: 'top' });
  sr.reveal('.reveal-bottom, .social-media, .btn', { origin: 'bottom', interval: 150 });
  sr.reveal('.reveal-left', { origin: 'left' });
  
  // Hiệu ứng cho ảnh: bay từ dưới lên và to dần
  sr.reveal('.home-img', { 
    origin: 'bottom', 
    scale: 0.8, 
    duration: 2500,
    delay: 400 
  });
});