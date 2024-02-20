$(document).ready(function () {
    $('#menu_btn').on('click', function () {
        $('#nav_list').toggleClass('active');
        $('#menu_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav_item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop+ section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#home', {
        origin: 'top',
        distance: '100px',
        duration: 1000,
        delay: 200,
        reset: true
    });

    ScrollReveal().reveal('#cta', {
        origin: 'bottom',
       distance: '100px',
       duration: 1000,
       delay: 200,
       reset: true
    });

    ScrollReveal().reveal('#banner', {
        origin: 'top',
        distance: '100px',
        duration: 1500,
        delay: 200,
        reset: true
    });

    ScrollReveal().reveal('.cliente', {
        origin: 'top',
        distance: '100px',
        duration: 1000,
        delay: 200,
        reset: true
    });

    ScrollReveal().reveal('#contato', {
        origin: 'top',
        distance: '100px',
        duration: 1000,
        delay: 200,
        reset: true
    });

    


});



$(window).load(function () {
    $('#slider').nivoSlider({
        effect:'random',
        controlNav: false,
        animSpeed:100,
    });
});

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});