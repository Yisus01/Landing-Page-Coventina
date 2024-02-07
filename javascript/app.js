window.addEventListener('load', function(){
    new Glider(document.querySelector('.carouselindex__productos'), {
        slidesToShow: 4,
        slidesToScroll: 1,
        draggable: true,
        dots: '.carouselindex__indicadores',
        // arrows: {
        //   prev: '.carouselindex__anterior',
        //   next: '.carouselindex__siguiente'
        // }
      });
});