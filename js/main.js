
let icon = document.querySelector('#togglicon');
let menu = document.querySelector('#navbarNav');

menu.addEventListener('show.bs.collapse', () => {
  icon.src = 'img/icons/close.svg';
});

menu.addEventListener('hide.bs.collapse', () => {
  icon.src = 'img/icons/menu.svg';
});


$('#exampleModal').on('show.bs.modal', function () {
  $('.navbar-collapse').addClass('z-indx');
});

// لما المودال يقفل
$('#exampleModal').on('hidden.bs.modal', function () {
  $('.navbar-collapse').removeClass('z-indx');
});



const mainNavbar = document.getElementById("navgate");

// في البداية النافبار يكون تحت ال up-nav

window.addEventListener("scroll", () => {
  if (window.scrollY > 100 ) {
    // سكروول أكبر من ارتفاع up-nav → نخفيه والنافبار يطلع فوق
    mainNavbar.classList.add("mainNavbar");
  } else {
    // رجوع لأعلى → نرجع up-nav والنافبار يرجع تحته
    mainNavbar.classList.remove("mainNavbar");
  }
});


  
  
//   $('.uper-nav').each(function () {
//   $(this).owlCarousel({
//     rtl: true,
//     loop: true,
//     margin: 10,
//     dots: false,
//     nav: false,
//     autoplay: true,
//     autoplayTimeout: 5000,
//     responsive: {
//       0: {
//         items: 1
//       },
//       600: {
//         items: 1
//       },
//       1000: {
//         items: 1
//       }
//     }
//   });
// });



// $('.uper-nav').each(function () {
//     $(this).owlCarousel({
//         rtl: true,
//         loop: true,
//         margin: 20,
//         dots: false,
//         nav: false,
//         autoplay: true,
//         autoplayTimeout: 0,
//         smartSpeed: 20000,
//         autoplayHoverPause: false,
//         slideTransition: 'linear',
//         autoplaySpeed: 20000,
//         responsive: {
//             0: { items: 1 },
//             600: { items: 2 },
//             1000: { items: 5 }
//         }
//     });
// });

var $progressBar = $(".progress-bar");
var $owl = $('#Products');

$owl.owlCarousel({
    rtl: true,
  loop: true,
  margin: 25,
  dots: false,
  navText: [
    "<img src='img/icons/right.svg'/>",
    "<img src='img/icons/right.svg'/>"
  ],
  nav: true,
    autoWidth: true,
  autoplay: true,
  autoplayTimeout: 5000,
  responsive: {
    0: { items: 1 },
    600: { items: 3 },
    1000: { items: 3.5 }
  },
});


// set initial
var totalItems = $('#Products .owl-item').length;
var visibleItems = $owl.data('owl.carousel').options.items;

// عدد الخطوات اللي الخط هيتحركها
var steps = totalItems - visibleItems + 1;
var currentStep = 0;

// تحديث حركة الخط
// function updateProgress() {
//   var wrapperWidth = $('.progress-wrapper').width();
//   var barWidth = $progressBar.width();
//   var maxTranslate = wrapperWidth - barWidth;

//   var stepSize = maxTranslate / (steps - 1);

//   var translateX = currentStep * stepSize;
//   $progressBar.css('transform', 'translateX(' + translateX + 'px)');
// }

function updateProgress() {
  var wrapperWidth = $('.progress-wrapper').width();
  var barWidth = $progressBar.width();
  var maxTranslate = wrapperWidth - barWidth;

  var stepSize = maxTranslate / (steps - 1);
  var translateX = currentStep * stepSize;

  // علشان يبدأ من اليمين ويتحرك للشمال
  $progressBar.css('transform', 'translateX(' + (-translateX) + 'px)');
}




// عند تغيير السلايد
$owl.on('changed.owl.carousel', function(event) {
  currentStep++;
  if (currentStep >= steps) {
    currentStep = 0; // رجوع لأول
  }
  updateProgress();
});

// أول تحميل
updateProgress();


var $progressBarcustomer = $(".progress-bar-customer");

var $owlcustomer = $('#customer');

$owlcustomer.owlCarousel({
  rtl:true,
    loop:true,
    margin:15,
    dots:false,
    navText:[
      "<img src='img/icons/right.svg'/>",
       "<img src='img/icons/right.svg'/>"
      
       
    ],
    nav:true,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    },
})
// set initial
var totalItemscustomer = $('#customer .owl-item').length;
var visibleItemscustomer = $owlcustomer.data('owl.carousel').options.items;

// عدد الخطوات اللي الخط هيتحركها
var stepscustomer = totalItemscustomer - visibleItemscustomer + 1;
var currentStepcustomer = 0;

// تحديث حركة الخط
// function updateProgresscustomer() {
//   var wrapperWidthcustomer = $('.progress-wrapper-customer').width();
//   var barWidthcustomer = $progressBarcustomer.width();
//   var maxTranslatecustomer = wrapperWidthcustomer - barWidthcustomer;

//   var stepSizecustomer = maxTranslatecustomer / (stepscustomer - 1);

//   var translateXcustomer = currentStepcustomer * stepSizecustomer;
//   $progressBarcustomer.css('transform', 'translateX(' + translateXcustomer + 'px)');
// }


function updateProgresscustomer() {
  var wrapperWidthcustomer = $('.progress-wrapper-customer').width();
  var barWidthcustomer = $progressBarcustomer.width();
  var maxTranslatecustomer = wrapperWidthcustomer - barWidthcustomer;

  var stepSizecustomer = maxTranslatecustomer / (stepscustomer - 1);

  var translateXcustomer = currentStepcustomer * stepSizecustomer;

  // يبدأ من اليمين ويتحرك للشمال
  $progressBarcustomer.css('transform', 'translateX(' + (-translateXcustomer) + 'px)');
}


// عند تغيير السلايد
$owlcustomer.on('changed.owl.carousel', function(event) {
  currentStepcustomer++;
  if (currentStepcustomer >= stepscustomer) {
    currentStepcustomer = 0; // رجوع لأول
  }
  updateProgresscustomer();
});

// أول تحميل
updateProgresscustomer();

var $progressBartakedew = $(".progress-bar-takedew");
var $owltakedew = $('#takedew');

$owltakedew.owlCarousel({
  rtl: true,
    loop:true,
    margin:10,
    dots:false,
    navText:[
        "<img src='img/icons/right.svg'/>",
        "<img src='img/icons/right.svg'/>"
    ],
    nav:true,
    autoplay: true,
    autoWidth: true,
    autoplayTimeout: 3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3.5
        }
    },

})
var totalItemstakedew = $('#takedew .owl-item').length;
var visibleItemstakedew = $owltakedew.data('owl.carousel').options.items;

// عدد الخطوات اللي الخط هيتحركها
var stepstakedew = totalItemstakedew - visibleItemstakedew + 1;
var currentSteptakedew = 0;

// تحديث حركة الخط
// function updateProgresstakedew() {
//   var wrapperWidthtakedew = $('.progress-wrapper-takedew').width();
//   var barWidthtakedew = $progressBartakedew.width();
//   var maxTranslatetakedew = wrapperWidthtakedew - barWidthtakedew;

//   var stepSizetakedew = maxTranslatetakedew / (stepstakedew - 1);

//   var translateXtakedew = currentSteptakedew * stepSizetakedew;
//   $progressBartakedew.css('transform', 'translateX(' + translateXtakedew + 'px)');
// }


function updateProgresstakedew() {
  var wrapperWidthtakedew = $('.progress-wrapper-takedew').width();
  var barWidthtakedew = $progressBartakedew.width();
  var maxTranslatetakedew = wrapperWidthtakedew - barWidthtakedew;

  var stepSizetakedew = maxTranslatetakedew / (stepstakedew - 1);

  var translateXtakedew = currentSteptakedew * stepSizetakedew;

  // يبدأ من اليمين ويتحرك للشمال
  $progressBartakedew.css('transform', 'translateX(' + (-translateXtakedew) + 'px)');
}


// عند تغيير السلايد
$owltakedew.on('changed.owl.carousel', function(event) {
  currentSteptakedew++;
  if (currentSteptakedew >= stepstakedew) {
    currentSteptakedew = 0; // رجوع لأول
  }
  updateProgresstakedew();
});

// أول تحميل
updateProgresstakedew();




$('#ingredients').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    navText:[
        "<img src='img/icons/right.svg'/>",
        "<img src='img/icons/right.svg'/>"
    ],
    nav:true,
    autoplay: true,
    autoWidth: true,
    autoplayTimeout: 3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3.5
        }
    }
})




// quntety 
    let value = 1;
    const valueSpan = document.getElementById("value");

    function increment() {
      value++;
      valueSpan.textContent = value;
    }

    function decrement() {
      if (value > 1) {
        value--;
        valueSpan.textContent = value;
      }
    }
    // sideCanva
    let openCanvaBtn = document.querySelector('#open')
    // let closeCanvaBtn = document.querySelector('#closeBtn')
    let OverCanvasBar = document.querySelector('.OverCanvasBar')


    function openSideCart() {
           OverCanvasBar.classList.toggle('d-none')
    }
    openCanvaBtn.addEventListener('click' , ()=>{
 openSideCart()
    })

//------customer---------//
