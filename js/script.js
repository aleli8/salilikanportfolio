// Pagination removed from works.html; keeping this function for safety
function showPage() {
    // no-op
}

// Work category switching
document.addEventListener('DOMContentLoaded', function () {
  const categoryButtons = document.querySelectorAll('.work-cat-btn');
  const categoryContents = document.querySelectorAll('.work-category-content');

  if (!categoryButtons.length || !categoryContents.length) return;

  const setActive = (activeCategory) => {
    categoryButtons.forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.category === activeCategory);
    });

    categoryContents.forEach((content) => {
      const shouldShow = content.id === 'work-' + activeCategory;
      content.style.display = shouldShow ? 'block' : 'none';
    });
  };

  categoryButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      setActive(btn.dataset.category);
    });
  });

  // Ensure initial state (Graphic Design)
  setActive('graphic');
});


// Lightbox functionality
document.addEventListener('DOMContentLoaded', function() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const caption = document.getElementById('caption');
  const closeBtn = document.querySelector('.close-btn');

  // Prefer clicking whole cards (work-item), but keep fallback for clicks on images.
  const cards = document.querySelectorAll('.work-item[data-title][data-description]');
  const galleryImages = document.querySelectorAll('.works-img');

  if (!lightbox || !lightboxImg || !caption || !closeBtn) return;

  const openLightbox = (src, title, description) => {
    lightbox.style.display = 'block';
    caption.innerHTML = `
      <div class="lightbox-title" style="font-weight:700; font-size:1.05rem; margin-bottom:6px;">${title || ''}</div>
      <div class="lightbox-description" style="font-size:0.95rem; opacity:0.95; line-height:1.4;">${description || ''}</div>
    `;
    lightboxImg.src = src;
  };

  const closeLightbox = () => {
    lightbox.style.display = 'none';
    lightbox.setAttribute('aria-hidden', 'true');
  };

  const showLightboxFromCard = (card) => {
    const img = card.querySelector('img.works-img');
    if (!img) return;
    openLightbox(img.src, card.dataset.title, card.dataset.description);
    lightbox.setAttribute('aria-hidden', 'false');
  };

  cards.forEach((card) => {
    card.addEventListener('click', () => showLightboxFromCard(card));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') showLightboxFromCard(card);
    });
  });

  // Fallback: if an image is clicked directly.
  galleryImages.forEach((img) => {
    img.addEventListener('click', function() {
      const card = this.closest('.work-item[data-title][data-description]');
      if (!card) return;
      showLightboxFromCard(card);
    });
  });

  closeBtn.addEventListener('click', closeLightbox);

  // Clicking outside the modal content (overlay) closes it.
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) closeLightbox();
  });

  // Escape closes it.
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightbox.style.display === 'block') {
      closeLightbox();
    }
  });
});
