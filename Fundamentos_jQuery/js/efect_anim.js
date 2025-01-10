$(function(){
    $('#btnfadeout').click(function(){
        $('#caja').fadeOut(465,function(){
            $('#btnfadeout').text("End Of Work")
        })
    })


    $('#btnfadein').click(function(){
        $('#caja').fadeIn(3000)
    })

    $('#btnfadetoggle').click(function(){
        $('#caja').fadeToggle(100)
    })


    $('#btnslidedown').click(function(){
        $('#caja').slideDown(100)
    })

    $('#btnslideup').click(function(){
        $('#caja').slideUp(100)
    })

    $('#btnslidetoggle').click(function(){
        $('#caja').slideToggle(500)
    })

    $('#btnstop').click(function(){
        $('#caja').stop(500)
    })


    $('#movder').click(function(){
        $("#caja2").animate({
            left: 500,
            height: "300px",
            width: "300px",
            opacity: "0.5",
        })
    })


    $('#movizq').click(function(){
        $("#caja2").animate({
            left: 0,
            height: "100px",
            width: "100px",
            opacity: "0.9",
        })
    })
})