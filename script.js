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