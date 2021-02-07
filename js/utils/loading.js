const checkLoadingState = () => {
    $(window).on('load', function () {
        $('.loader').delay(1000).fadeOut('slow');
    });
}
checkLoadingState();
