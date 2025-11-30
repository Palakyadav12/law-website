function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const msg = document.getElementById('message').value.trim();
  const resp = document.getElementById('responseMsg');

  if (!name || !email || !msg) {
    resp.style.color = 'red';
    resp.textContent = 'Please fill all fields.';
  } else {
    resp.style.color = 'green';
    resp.textContent = 'Thank you! We will contact you soon.';
    // Here you can add real submission logic (AJAX / backend)
    this.reset();
  }
});
