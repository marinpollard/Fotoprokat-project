$(document).ready(function () {
    var searchBlock = $('.search-line');
    $(document).on('click', '.search', function () {
        searchBlock.slideToggle();
        return false;
    });
});