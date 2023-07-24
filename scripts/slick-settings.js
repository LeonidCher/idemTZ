
$('.footer__slider-line').slick({
    appendArrows: $('.footer__slider-buttons'),
    infinite: false,
    slidesToShow: 3.25,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 860,
            settings: {
                slidesToShow: 2.2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 400,
            settings: {
                slidesToShow: 1.1,
                slidesToScroll: 1,
                arrows: false
            }
        }
    ]
});