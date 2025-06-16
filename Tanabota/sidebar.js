const hamburger = document.querySelector('#hamburger');
const sidebar = document.querySelector('.sidebar-mini');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  
  if (sidebar.style.left === '0%') {
    sidebar.style.left = '-100%'; // サイドバーを隠す
  } else {
    sidebar.style.left = '0%'; // サイドバーを表示
  }
});