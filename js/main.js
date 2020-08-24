$('.card-enable').click(function () {
    $(this).toggleClass('select');
    $(this).find('.elipse').toggleClass('select');
    $(this).nextAll('.action-2').toggle();
    $(this).nextAll('.action').toggle();

})
$('.sel').click(function () {
    $(this).parent().prev('.card-enable').toggleClass('select');
    $(this).parent().prev('.card-enable').find('.elipse').toggleClass('select');
    $(this).parent().toggle();
    $(this).parent().next().toggle();
    // console.log($(this).parents('.action-2'));
})
