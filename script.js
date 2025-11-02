
// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
  });
});

// Simple contact form handler (no backend — demo only)
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const note = document.getElementById('formNote');
  const email = document.getElementById('email').value;
  if(!email || !email.includes('@')){
    note.textContent = 'Please enter a valid email.';
    note.style.color = '#ffb3b3';
    return;
  }
  note.style.color = 'var(--muted)';
  note.textContent = 'Thanks — message sent (demo).';
  form.reset();
});
