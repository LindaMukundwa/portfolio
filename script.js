
document.addEventListener('DOMContentLoaded', () => {
  const cta = document.querySelector('.cta');
  cta.addEventListener('mouseenter', () => {
    cta.style.boxShadow = '0 0 15px #00ffe1';
  });
  cta.addEventListener('mouseleave', () => {
    cta.style.boxShadow = 'none';
  });

  const projects = document.querySelectorAll('.project');
  projects.forEach(project => {
    project.addEventListener('mouseover', () => {
      project.style.boxShadow = '0 0 20px #ff77e9';
    });
    project.addEventListener('mouseout', () => {
      project.style.boxShadow = '';
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});
