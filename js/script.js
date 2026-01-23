const swiper = new Swiper('.es-swiper1', {
  direction: 'horizontal',
  loop: false,
  autoHeight: true,

  pagination: {
    el: '.es-swiper1-pagination',
  },

  navigation: {
    nextEl: '.es-swiper1-button-next',
    prevEl: '.es-swiper1-button-prev',
  },

});
