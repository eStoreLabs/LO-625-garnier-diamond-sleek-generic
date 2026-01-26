(() => {
  const swiper = new Swiper('#es-rc #es-garnier .es-swiper1', {
    direction: 'horizontal',
    loop: false,
    autoHeight: true,

    pagination: {
      el: '#es-rc #es-garnier .es-swiper1-pagination',
    },

    navigation: {
      nextEl: '#es-rc #es-garnier .es-swiper1-button-next',
      prevEl: '#es-rc #es-garnier .es-swiper1-button-prev',
    },

  })
})()