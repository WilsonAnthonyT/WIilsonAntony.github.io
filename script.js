let myform = document.querySelector('.myform')
let login = document.querySelector('#login-form')
let menubar = document.querySelector('#menu-bars')
let mynav = document.querySelector('.navbar')

login.onclick = () =>{
    myform.classList.toggle('active');
}

menubar.onclick = () =>{
    menubar.classList.toggle('fa-times')
    mynav.classList.toggle('active')
}

let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.querySelector('.header').classList.remove('hide');
  } else {
    document.querySelector('.header').classList.add('hide');
  }
  prevScrollPos = currentScrollPos;
}


//portfolio

$(document).ready(function(){
  
  //owl carousel
  $('.owl-carousel').owlCarousel({
    margin: 5,
    nav: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    navText: ['<div class="owl-prev"><i class="fa fa-angle-left"></i></div>', ' <div class="owl-next"><i class="fa fa-angle-right"></i></div>'],

    responsive: {
      0: {
        items: 1,
        
      },
      600: {
        items: 2,
        
      },
      1000: {
        items: 3,
        
      }
    }
  });
});


// get the select element and consultant list container
const select = document.querySelector('#expertise-filter');
const consultantList = document.querySelector('.consultant-list');

// add event listener to select element
select.addEventListener('change', function() {
  // get the selected value
  const selectedValue = this.value;

  // loop through all consultant cards and show/hide based on selected value
  const consultantCards = consultantList.querySelectorAll('.consultant-card');
  consultantCards.forEach(card => {
    if (selectedValue === 'all') {
      card.style.display = 'block';
    } else if (card.classList.contains(selectedValue)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}); 

const contactBtns = document.querySelectorAll('.contact-consultant-btn');

  contactBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const email = e.currentTarget.getAttribute('data-email');
      window.location.href = `mailto:${email}`;
    });
  });

  //rating
  // Get all the star elements
const stars = document.querySelectorAll('.star');

// Add a click event listener to each star element
stars.forEach(star => {
  star.addEventListener('click', () => {
    // Get the value of the clicked star
    const value = star.getAttribute('data-value');

    // Remove the 'selected' class from all the star elements
    stars.forEach(star => {
      star.classList.remove('selected');
    });

    // Add the 'selected' class to the clicked star and all the stars before it
    for (let i = 1; i <= value; i++) {
      stars[i - 1].classList.add('selected');
    }
  });
});

function openCalendlyPopup(event) {
  const calendlyLink = event.target.getAttribute('data-link');
  Calendly.initPopupWidget({url: calendlyLink});
  return false;
}

const contactBtn = document.querySelector('.contact-consultant-btn');
contactBtn.addEventListener('click', openCalendlyPopup);