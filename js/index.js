$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) $("#header").addClass("fixed");
    else $("#header").removeClass("fixed");
  });
});

// banner-slides
$(document).ready(function () {
  new Swiper(".banner-swiper", {
    effect: "fade",
    autoplay: {
      delay: 5000,
    },
    parallax: true,
  });
});

// banner search
$(document).ready(function () {
  $(".field-search-group").click(function () {
    $(this).toggleClass("show");
  });
});

//banner calender
$(document).ready(function () {
  $(function () {
    $("#datepicker").datepicker();
  });
});

//review swiper
$(document).ready(function () {
  new Swiper(".swiper-review", {
    autoplay: {
      delay: 3000,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});

//our-blog swiper
$(document).ready(function () {
  new Swiper(".our-blog-swiper", {
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
    },
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".blog-pagi",
      clickable: true,
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 1024px
      1024: {
        slidesPerView: 2,
      },
    },
  });
});

//mobile
$(document).ready(function () {
  $(".btn-mobile-menu").click(function () {
    $("#mobile").fadeIn();
    $("#mobile .inside").addClass("open");
  });

  $("#btn-back").click(function () {
    $("#mobile").fadeOut();
    $("#mobile .inside").removeClass("open");
  });

  $(".dropdown-toggle").click(function () {
    $(this).parent().toggleClass("active");
    $(this).parent().children("ul").slideToggle(500);
  });
});

// filter of top-search page
$(document).ready(function () {
  $(".input_select_field").click(function () {
    $(this).toggleClass("show");
  });
});

//
$(document).ready(function () {
  $(function () {
    $("#price-range").slider({
      range: true,
      min: 94,
      max: 173,
      values: [94, 173],
      slide: function (event, ui) {
        $("#priceRange").val("$" + ui.values[0] + " - $" + ui.values[1]);
      },
    });
    $("#priceRange").val(
      "$" +
        $("#price-range").slider("values", 0) +
        " - $" +
        $("#price-range").slider("values", 1)
    );
  });
});

//slideshow of booking-detail page
$(document).ready(function () {
  $(".slick-slider").slick({
    centerMode: true,
    centerPadding: "285px",
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 769,
        settings: {
          centerPadding: "0px",
        },
      },
    ],
  });
});

//PhotoSwipe gallery
var openPhotoSwipe = function () {
  var pswpElement = document.querySelectorAll(".pswp")[0];

  // build items array
  var items = [
    {
      src: "./img/gallery-11.jpg",
      w: 1200,
      h: 750,
    },
    {
      src: "./img/gallery-12.jpg",
      w: 1200,
      h: 750,
    },
    {
      src: "./img/gallery-13.jpg",
      w: 1200,
      h: 750,
    },
    {
      src: "./img/gallery-14.jpg",
      w: 1200,
      h: 750,
    },
    {
      src: "./img/gallery-15.jpg",
      w: 1200,
      h: 750,
    },
    {
      src: "./img/gallery-16.jpg",
      w: 1200,
      h: 750,
    },
    {
      src: "./img/gallery-17.jpg",
      w: 1200,
      h: 750,
    },
    {
      src: "./img/gallery-18.jpg",
      w: 1200,
      h: 750,
    },
    {
      src: "./img/gallery-19.jpg",
      w: 1200,
      h: 750,
    },
    {
      src: "./img/gallery-20.jpg",
      w: 1200,
      h: 750,
    },
  ];
  // define options (if needed)
  var options = {
    // history & focus options are disabled on CodePen
    history: false,
    focus: false,

    showAnimationDuration: 0,
    hideAnimationDuration: 0,
  };
  var gallery = new PhotoSwipe(
    pswpElement,
    PhotoSwipeUI_Default,
    items,
    options
  );
  gallery.init();
};

$(".tab-gallery").click(function () {
  openPhotoSwipe();
});

//modal video
$(document).ready(function () {
  $(".tab-video").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false,
  });
});

//block_step click (Booking-detail page)
$(document).ready(function () {
  $(".block_step_title").click(function () {
    $(this).toggleClass("active");
    $(this).parent().children(".block_step_content").toggleClass("active");
  });
});

///
$(document).ready(function () {
  new Swiper(".may-like-slides", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
    },

    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".blog-pagi",
      clickable: true,
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
      },
    },
  });
});

//
$(document).ready(function () {
  $(function () {
    $("#booking_date_from").datepicker();
  });
});

//count-up
$(".counter").countUp({});
