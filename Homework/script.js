$(document).ready(function() {

    $('.open-modal').on('click', function(){
        $('.overlay').fadeToggle('slow');
        $('.modal').slideDown('slow');
    });

    $('.close').on('click', function() {
        $('.overlay').fadeToggle('slow');
        $('.modal').slideUp('slow');
    });

});