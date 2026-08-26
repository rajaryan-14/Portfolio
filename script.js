const toggle = document.querySelector('.theme-toggle');
const savedTheme = localStorage.getItem('raj-theme');
if (savedTheme === 'dark') document.body.classList.add('dark');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('raj-theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});
document.querySelector('.cursor-orb')?.remove();
