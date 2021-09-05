var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  initialSlide : 1, //设定初始化时slide的索引。默认初始化时显示第一个slide，有时想初始化时直接显示其他slide，
  centeredSlides: true, //默认active slide居左，设置为true后居中
  breakpoints: { 
    320: {  //当屏幕宽度大于等于320
      spaceBetween: 15,
      slidesPerView: 1,
      initialSlide : 0,
    },
    768: {  //当屏幕宽度大于等于768 
      // simulateTouch : true, //鼠标模拟手机触摸。默认为true，Swiper接受鼠标点击、拖动。
      slidesPerView: 2,
      spaceBetween: 30,
      initialSlide : 0,
      centeredSlides: false,
    },
  },
});