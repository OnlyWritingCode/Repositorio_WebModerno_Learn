$(function(){
    $(':button').click(function(){
        var tamanios = $(this).val();
        var actual = parseInt($('p').css('font-size'));

        if(tamanios == 'peque'){
            actual = actual - 2
        }else if(tamanios == 'gran'){
            actual = actual + 2
        }

        $("p").css("font-size", actual + "px")
    })
})