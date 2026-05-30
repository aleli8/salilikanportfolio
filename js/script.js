function showPage(pageNumber) {
    // Hide all pages
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'none';
    
    // Show the selected page
    document.getElementById('page' + pageNumber).style.display = 'grid';
    
    // Update active button
    const buttons = document.querySelectorAll('.page-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent == pageNumber) {
            btn.classList.add('active');
        }
    });
}

// Lightbox functionality
document.addEventListener('DOMContentLoaded', function() {
  // Get all gallery images
  const galleryImages = document.querySelectorAll('.works-img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const caption = document.getElementById('caption');
  const closeBtn = document.querySelector('.close-btn');

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
});