let slideIndex = 0;
const slides = document.querySelector('.slides');

function moveSlide(n) {
    const totalSlides = slides.children.length;
    slideIndex = (slideIndex + n + totalSlides) % totalSlides;
    slides.style.transform = `translateX(${-slideIndex * 100}%)`;
}

document.addEventListener('DOMContentLoaded', () => {
    moveSlide(0);
});
document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelectorAll('.sidebar a').forEach(a => a.classList.remove('active'));
        this.classList.add('active');

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
function showContent(courseId) {
    // Hide all content items
    var contents = document.getElementsByClassName('content-item');
    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active');
    }
    // Show the selected content item
    document.getElementById(courseId).classList.add('active');

    // Remove active class from all list items
    var links = document.querySelectorAll('.course-list li');
    links.forEach(function(link) {
        link.classList.remove('active');
    });

    // Add active class to the selected list item
    document.getElementById('link-' + courseId).classList.add('active');
}
// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    const searchBox = document.querySelector('.search-box');
    const searchOptions = document.querySelector('.search-options');
    const tabLinks = document.querySelectorAll('.tab-links a');
    const tabPanes = document.querySelectorAll('.tab-pane');
  
    // Toggle search options visibility
    searchBox.addEventListener('focus', function () {
      searchOptions.style.display = 'block';
    });
  
    document.addEventListener('click', function (e) {
      if (!searchOptions.contains(e.target) && e.target !== searchBox) {
        searchOptions.style.display = 'none';
      }
    });
  
    // Handle tab switching
    tabLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
  
        // Remove active class from all tabs and tab panes
        tabLinks.forEach(link => link.parentElement.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));
  
        // Add active class to the clicked tab and corresponding tab pane
        this.parentElement.classList.add('active');
        target.classList.add('active');
      });
    });
  });
  function toggleMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('show-menu');
}

// Function to close the menu and show the content
function closeMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.remove('show-menu');
}

// Add event listeners to menu items
document.querySelectorAll('.mobile-menu a').forEach(item => {
    item.addEventListener('click', () => {
        closeMenu();
    });
});
