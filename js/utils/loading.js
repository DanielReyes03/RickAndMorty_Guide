const checkLoadingState = () => {
    $(window).on('load', function () {
        $('.loader').delay(1000).fadeOut('slow');
        setTimeout(function(){
            ScrollReveal().reveal('.reveal', {duration: 1000, reset: true});
        },100)
    });
}
checkLoadingState();
