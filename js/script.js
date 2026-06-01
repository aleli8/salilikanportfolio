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
  // Get all gallery images
  const galleryImages = document.querySelectorAll('.works-img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const caption = document.getElementById('caption');
  const closeBtn = document.querySelector('.close-btn');

  if (lightbox && lightboxImg && caption && closeBtn) {
    // Add click event to each image
    galleryImages.forEach(img => {
      img.addEventListener('click', function() {
        lightbox.style.display = 'block';
        lightboxImg.src = this.src;
        caption.textContent = this.nextElementSibling.textContent;
      });
    });

    // Close lightbox
    closeBtn.addEventListener('click', function() {
      lightbox.style.display = 'none';
    });

    // Close when clicking outside image
    lightbox.addEventListener('click', function(e) {
      if (e.target !== lightboxImg && e.target !== caption) {
        lightbox.style.display = 'none';
      }
    });
  }
});