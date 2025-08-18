// Utility: Filter chips
const chips = document.querySelectorAll('.chip');
const grid = document.getElementById('grid');
chips.forEach(chip => {
  chip.addEventListener('click', () => {
    chips.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    const filter = chip.dataset.filter;
    [...grid.children].forEach(card => {
      const tags = card.dataset.tags || '';
      card.style.display = (filter === 'all' || tags.includes(filter)) ? '' : 'none';
    });
  });
});

// Trailer modal
const modal = document.getElementById('videoModal');
const frame = document.getElementById('videoFrame');
document.querySelectorAll('[data-video]').forEach(btn => {
  btn.addEventListener('click', () => {
    const url = new URL(btn.dataset.video);
    if (url.hostname.includes('youtube.com') || url.hostname.includes('youtu.be')) {
      // Normalize to embed
      let id = url.searchParams.get('v');
      if (!id && url.pathname) id = url.pathname.split('/').pop();
      frame.src = 'https://www.youtube.com/embed/' + id + '?autoplay=1';
    } else {
      frame.src = btn.dataset.video; // fallback
    }
    modal.showModal();
  });
});
document.getElementById('closeModal').addEventListener('click', () => {
  frame.src = ''; modal.close();
});

// Back to top
document.getElementById('toTop').addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Copy email
document.getElementById('copyEmail').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('musaibahmed830@gmail.com');
    const small = document.querySelector('#copyEmail small');
    small.textContent = 'Copied!';
    setTimeout(() => (small.textContent = 'Click to copy'), 1400);
  } catch {}
});

// Theme toggle
const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('light');
});
// Year
document.getElementById('year').textContent = new Date().getFullYear();
