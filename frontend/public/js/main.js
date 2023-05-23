(function ($) {
    "use strict";

    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 500, 'easeInOutExpo');
        return false;
    });

    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });


    // Post carousel
    $(".post-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        center: true,
        autoplay: true,
        smartSpeed: 2000,
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

})(jQuery);


function sound1() {
    setTimeout(function() {
}, 2000); // 2-second delay
    var snd = new Audio('/audio/alif.mp3')//wav is also supported
    snd.play()//plays the sound
    setTimeout(function() {
}, 2000); // 2-second delay
}
function sound2() {
    setTimeout(function() {
}, 2000); // 2-second delay
    var snd = new Audio('/audio/ba.mp3')//wav is also supported
    snd.play()//plays the sound
    setTimeout(function() {
}, 2000); // 2-second delay
}
function sound3() {
    setTimeout(function() {
}, 2000); // 2-second delay
    var snd = new Audio('/audio/ta.mp3')//wav is also supported
    snd.play()//plays the sound
    setTimeout(function() {
}, 2000); // 2-second delay
}
function sound4() {
    setTimeout(function() {
}, 2000); // 2-second delay
    var snd = new Audio('/audio/tha.mp3')//wav is also supported
    snd.play()//plays the sound
    setTimeout(function() {
}, 2000); // 2-second delay
}

function sound5() {
    setTimeout(function() {
}, 2000); // 2-second delay
    var snd = new Audio('/audio/jiim.mp3')//wav is also supported
    snd.play()//plays the sound
    setTimeout(function() {
}, 2000); // 2-second delay
}
function sound6() {
    setTimeout(function() {
}, 2000); // 2-second delay
    var snd = new Audio('/audio/hha.mp3')//wav is also supported
    snd.play()//plays the sound
    setTimeout(function() {
}, 2000); // 2-second delay
}
function sound7() {
    setTimeout(function() {
}, 2000); // 2-second delay
    var snd = new Audio('/audio/kha.mp3')//wav is also supported
    snd.play()//plays the sound
    setTimeout(function() {
}, 2000); // 2-second delay
}
function sound8() {
    setTimeout(function() {
}, 2000); // 2-second delay
    var snd = new Audio('/audio/daal.mp3')//wav is also supported
    snd.play()//plays the sound
    setTimeout(function() {
}, 2000); // 2-second delay
}

function sound9() {
    setTimeout(function() {
}, 2000); // 2-second delay
    var snd = new Audio('/audio/thaal.mp3')//wav is also supported
    snd.play()//plays the sound
    setTimeout(function() {
}, 2000); // 2-second delay
}
function sound10() {
    setTimeout(function() {
}, 2000); // 2-second delay
    var snd = new Audio('/audio/ra.mp3')//wav is also supported
    snd.play()//plays the sound
    setTimeout(function() {
}, 2000); // 2-second delay
}
function sound11() {
    setTimeout(function() {
}, 2000); // 2-second delay
    var snd = new Audio('/audio/zay.mp3')//wav is also supported
    snd.play()//plays the sound
    setTimeout(function() {
}, 2000); // 2-second delay
}
function sound12() {
    setTimeout(function() {
}, 2000); // 2-second delay
    var snd = new Audio('/audio/siin.mp3')//wav is also supported
    snd.play()//plays the sound
    setTimeout(function() {
}, 2000); // 2-second delay
}
function sound13() {
    setTimeout(function() {
}, 2000); // 2-second delay
    var snd = new Audio('/audio/shiin.mp3')//wav is also supported
    snd.play()//plays the sound
    setTimeout(function() {
}, 2000); // 2-second delay
}
function sound14() {
    setTimeout(function() {
}, 2000); // 2-second delay
    var snd = new Audio('/audio/saad.mp3')//wav is also supported
    snd.play()//plays the sound
    setTimeout(function() {
}, 2000); // 2-second delay
}
function sound15() {
    setTimeout(function() {
}, 2000); // 2-second delay
    var snd = new Audio('/audio/daad.mp3')//wav is also supported
    snd.play()//plays the sound
    setTimeout(function() {
}, 2000); // 2-second delay
}
function sound16() {
    setTimeout(function() {
}, 2000); // 2-second delay
    var snd = new Audio('/audio/taa.mp3')//wav is also supported
    snd.play()//plays the sound
    setTimeout(function() {
}, 2000); // 2-second delay
}
function sound17() {
    setTimeout(function() {
}, 2000); // 2-second delay
    var snd = new Audio('/audio/thaa.mp3')//wav is also supported
    snd.play()//plays the sound
    setTimeout(function() {
}, 2000); // 2-second delay
}
function sound18() {
    setTimeout(function() {
}, 2000); // 2-second delay
    var snd = new Audio('/audio/ayn.mp3')//wav is also supported
    snd.play()//plays the sound
    setTimeout(function() {
}, 2000); // 2-second delay
}
function sound19() {
    setTimeout(function() {
}, 2000); // 2-second delay
    var snd = new Audio('/audio/ghayn.mp3')//wav is also supported
    snd.play()//plays the sound
    setTimeout(function() {
}, 2000); // 2-second delay
}
function sound20() {
    setTimeout(function() {
}, 2000); // 2-second delay
    var snd = new Audio('/audio/fa.mp3')//wav is also supported
    snd.play()//plays the sound
    setTimeout(function() {
}, 2000); // 2-second delay
}
function sound21() {
    var snd = new Audio('/audio/qaf.mp3')//wav is also supported
    snd.play()//plays the sound
}
function sound22() {
    setTimeout(function() {
}, 2000); // 2-second delay
    var snd = new Audio('/audio/kaf.mp3')//wav is also supported
    snd.play()//plays the sound
    setTimeout(function() {
}, 2000); // 2-second delay
}
function sound23() {
    setTimeout(function() {
}, 2000); // 2-second delay
    var snd = new Audio('/audio/lam.mp3')//wav is also supported
    snd.play()//plays the sound
    setTimeout(function() {
}, 2000); // 2-second delay
}
function sound24() {
    setTimeout(function() {
    var snd = new Audio('/audio/miim.mp3')//wav is also supported
    snd.play()//plays the sound
    }, 2000); // 2-second delay
}
function sound25() {
    setTimeout(function() {
    var snd = new Audio('/audio/nuun.mp3')//wav is also supported
    snd.play()//plays the sound
    }, 2000); // 2-second delay
}
function sound26() {
    setTimeout(function() {
    var snd = new Audio('/audio/ha.mp3')//wav is also supported
    snd.play()//plays the sound
    }, 2000); // 2-second delay
}
function sound27() {
setTimeout(function() {
    var snd = new Audio('/audio/waw.mp3')//wav is also supported
    snd.play()//plays the sound
    }, 2000); // 2-second delay
}
function sound28() {
    setTimeout(function() {
      var snd = new Audio('/audio/ya.mp3');
      snd.play();
    }, 2000); // 2-second delay
  }

// Iterate through each play button
const playButtons = document.querySelectorAll('.play-button');

playButtons.forEach(button => {
  button.addEventListener('click', () => {
    const audioUrl = button.getAttribute('data-url');
    const audio = new Audio(audioUrl);

    setTimeout(function() {
      audio.play();
    }, 2000); // 2-second delay
  });
});






  
  
