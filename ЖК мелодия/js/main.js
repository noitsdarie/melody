console.log('IT`S WORK #DOCUMENT');

$(document).ready(function () {
    var currentFloor = 2;
    var counterUp = $('.counter-up');
    var counterDown = $('.counter-down');
    var floorPath = $('.home-image path');
    var modalCloseButton = $('.modal-close-button');
    var viewFlatsButton = $('.view-flats');
    var modal = $('.modal');

    floorPath.on('mouseover', function(){
        // console.log('Click');
        floorPath.removeClass('current-floor');
        currentFloor = $(this).attr('data-floor');
        $('.counter').text(currentFloor);
    });

    floorPath.on('click', toggleModal);
    viewFlatsButton.on('click', toggleModal);
    modalCloseButton.on('click', toggleModal);

    counterUp.on('click', function () {
        if (currentFloor < 18) {
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false});
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        };
    });

    counterDown.on('click', function () {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false});
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        };
    });

    function toggleModal(){
        console.log('IT`S WORK #ToggleModal');
        modal.toggleClass('is-open');
    }
});