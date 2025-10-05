
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});


const navItems = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll("section[id]");

navItems.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);

    if (target) {
      const yOffset = -70; 
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }

   
    if (navLinks.classList.contains('show')) {
      navLinks.classList.remove('show');
    }
  });
});


function updateActiveNav() {
  let index = sections.length;
  while (--index && window.scrollY + 90 < sections[index].offsetTop) {}
  
  navItems.forEach(item => item.classList.remove('active'));
  const id = sections[index].id || sections[0].id;
  const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
  if (activeLink) activeLink.classList.add('active');
}

updateActiveNav();
window.addEventListener('scroll', updateActiveNav);
window.addEventListener('resize', updateActiveNav);


window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.kegiatan .grid div, .bidang .card, .syarat-box').forEach(el => {
  observer.observe(el);
});
