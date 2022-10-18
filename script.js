const swiper = new Swiper('.slider-main-block', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.slider-main-block__arrow.swiper-button-next',
      prevEl: '.slider-main-block__arrow.swiper-button-prev',
    },
  });