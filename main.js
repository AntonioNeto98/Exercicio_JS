$(document).ready(function(){

    $("form").on('submit', function (e){
        e.preventDefault();
        const NovoAfazer = $('#Lista-Pr').val();
        $(`<li>${NovoAfazer}</li>`).appendTo('ol');
        $('#Lista-Pr').val('');
    });

    $('#Texto-List').on('click','li',function() {
    $(this).toggleClass('decor');
})

})