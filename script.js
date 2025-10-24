document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});
function getGreeting(date = new Date()) {
  const h = date.getHours();
  return h < 12 ? 'Good morning' : (h < 18 ? 'Good afternoon' : 'Good evening');
}

(function initGreeting() {
  const el = document.getElementById('greeting');
  if (!el) return;

  function render() {
    el.textContent = getGreeting(new Date());
  }

  render();

  // update at the next minute boundary, then every minute
  const now = new Date();
  const msUntilNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();
  setTimeout(() => {
    render();
    setInterval(render, 60_000);
  }, msUntilNextMinute);
})();

// contact form validation + confirmation message
(function initContactValidation() {
  const form = document.querySelector('#form form');
  if (!form) return;

  const nameEl = document.getElementById('name');
  const emailEl = document.getElementById('email');
  const messageEl = document.getElementById('message');

  function clearErrors() {
    form.querySelectorAll('.error').forEach(e => e.remove());
  }

  function showError(el, text) {
    const d = document.createElement('div');
    d.className = 'error';
    d.style.color = 'crimson';
    d.style.fontSize = '0.9em';
    d.style.marginTop = '4px';
    d.textContent = text;
    el.parentNode.insertBefore(d, el.nextSibling);
  }

  function showConfirmation(text) {
    let c = document.getElementById('confirmation');
    if (!c) {
      c = document.createElement('div');
      c.id = 'confirmation';
      c.style.background = '#e6ffed';
      c.style.border = '1px solid #0f9d58';
      c.style.padding = '10px';
      c.style.marginBottom = '10px';
      c.style.borderRadius = '4px';
      c.style.color = '#0b6623';
    }
    c.textContent = text;
    form.parentNode.insertBefore(c, form);
    setTimeout(() => c.remove(), 5000);
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    clearErrors();

    const name = nameEl.value.trim();
    const email = emailEl.value.trim();
    const message = messageEl.value.trim();

    let valid = true;
    if (name.length < 2) {
      showError(nameEl, 'Please enter your name (at least 2 characters).');
      valid = false;
    }

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(email)) {
      showError(emailEl, 'Please enter a valid email address.');
      valid = false;
    }

    if (message.length < 5) {
      showError(messageEl, 'Please enter a message (at least 5 characters).');
      valid = false;
    }

    if (!valid) return;

    // show artificial loading state for 3 seconds
    const submitBtn = form.querySelector('button[type="submit"]');
    let loadingEl = document.getElementById('form-loading');
    if (!loadingEl) {
      loadingEl = document.createElement('div');
      loadingEl.id = 'form-loading';
      loadingEl.style.marginBottom = '10px';
      loadingEl.style.padding = '8px';
      loadingEl.style.background = '#fff8e1';
      loadingEl.style.border = '1px solid #ffd54f';
      loadingEl.style.borderRadius = '4px';
      loadingEl.style.color = '#8a6d00';
      loadingEl.style.fontWeight = '600';
      loadingEl.textContent = 'Loading...';
    }

    // disable inputs and show loader
    [nameEl, emailEl, messageEl, submitBtn].forEach(el => el.disabled = true);
    form.parentNode.insertBefore(loadingEl, form);

    setTimeout(() => {
      // remove loader, enable inputs, show confirmation and reset form
      loadingEl.remove();
      [nameEl, emailEl, messageEl, submitBtn].forEach(el => el.disabled = false);

      showConfirmation('Thanks — your message has been sent. I will get back to you soon.');
      form.reset();
    }, 3000);
  });
})();