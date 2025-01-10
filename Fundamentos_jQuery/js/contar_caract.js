$(function(){
    $('textarea').attr('maxlength', '50');

    var long_max = $('textarea').attr('maxlength')

    $('#salida').text(long_max + "Caracteres Contados")

    $('textarea').keyup(function(){
        var longi = $(this).val().length
        var caract_count = long_max - longi

        $("#salida").text(caract_count + "Caracteres contados: ")
    })
})