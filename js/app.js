$(document).ready(function(){
    $(".software-marca").on('click', toggleContent);
    $('.software-container:not(:first-of-type)').toggle();
});


function toggleContent(e) {
    let marca = e.currentTarget.dataset.tm;
    $('div[data-marca="' + marca + '"').slideToggle();
}