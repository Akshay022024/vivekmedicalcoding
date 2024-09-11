//swipper js
var swiper = new Swiper(".team-slider",{
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints:{
      0: {
      slidesPerView:1,  
      },
      768: {
      slidesPerView:2,  
      }, 
      991: {
      slidesPerView:3,  
      },
    }
  });
  function toggleMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('show-menu'); // Add or remove the 'show-menu' class
}

function closeMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.remove('show-menu'); // Close the menu when clicked
}

// Add event listeners to menu items to close the menu when clicked
document.querySelectorAll('.mobile-menu a').forEach(item => {
    item.addEventListener('click', () => {
        closeMenu();
    });
});

