$(() => {

    /***
     * Slider for main screen
     */
    $('#header_bgr').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 1600,
        arrows: false,
    });


    /***
     * Slider for news page
     */
    $('#news_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
    });

    /***
     * Fixation of navigation (main menu) after scrolling
     */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 34) {
            $('nav').addClass("fixed-nav");
        } else {
            $('nav').removeClass("fixed-nav");
        }
    });

    /***
     * Smooth scrolling
     */
    $('a[href*="#"]').click(function () {
        $('html').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
        return false;
    });

    /***
     * Bullets painting for main screen slider
     */
    $("body").on("afterChange", "#header_bgr", (event, slick, currentSlide) => {
        $("div#slider1_dots a.slider1-dots-item div").removeClass("dots-active").eq(currentSlide - 1).addClass("dots-active");
    });

    /***
     * Changing slides after click on bullets for main screen slider 
     */
    $("div#slider1_dots").on("click", "a.slider1-dots-item", (e) => {
        e.preventDefault();
        $('#header_bgr').slick('slickGoTo', ($(e.currentTarget).index() + 1));
    });

    /***
     * Bullets painting for news page slider
     */
    $("body").on("afterChange", "#news_slider", (event, slick, currentSlide) => {
        $("div#slider2_dots a.slider2-dots-item div").removeClass("dots-active").eq(currentSlide - 1).addClass("dots-active");
    });

    /***
     * Changing slides after click on bullets for news page slider 
     */
    $("div#slider2_dots").on("click", "a.slider2-dots-item", (e) => {
        e.preventDefault();
        $('#news_slider').slick('slickGoTo', ($(e.currentTarget).index() + 1));
    });

    /***
     * Changing images for gallery page 
     */
    $("div#small_img").on("click", "a", (e) => {
        e.preventDefault();
        let tempHref = $("div#large_img a").attr("href");
        let tempSrc = $("div#large_img a").children("img").attr("src");
        $("div#large_img a").attr("href", $(e.currentTarget).attr("data-href"))
            .children("img").attr("src", $(e.currentTarget).children("img").attr("src"));
        $(e.currentTarget).attr("data-href", tempHref)
            .children("img").attr("src", tempSrc);
    });

    /***
     * Adding attributes for validation to input fields on contact form 
     */
    $("#formName").attr("pattern", "[A-Z][a-z]+(-[A-Z][a-z]+)? [A-Z][a-z]+(-[A-Z][a-z]+)?$");
    $("#formEmail").attr("pattern", "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$");

    /***
     * Activation main menu items by scrolling on site sections 
     */
    $(window).scroll(function () {
        $(".menu-item div").removeClass("dots-active");
        let scroll = $(window).scrollTop() + 5;
        if (scroll > $("#projects").offset().top) paintDot("#projects");
        if (scroll > $("#news").offset().top) paintDot("#news");
        if (scroll > $("#gallery").offset().top) paintDot("#gallery");
        if (scroll > $("#contact").offset().top) paintDot("#contact");
    });
});

/***
 * Point painting for main menu items
 */
let paintDot = (menuItemId) => {
    $(".menu-item div").removeClass("dots-active")
        .filter(`:parent[href = '${menuItemId}']  div`).addClass("dots-active");
};