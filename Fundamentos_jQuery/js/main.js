$(function(){

    // SELECTORES
    // $("p").css("color", "blue");
    // $("p").css("font-size", "24px");


    // $(".mi-clase").html("I´ve modified the text");

    // $("#mi-id").css("font-weight", "bold");

    // $("ul li").css("list-style", "none");

    // $("#contenedor span").css("border", "1px solid red");

    // $("ul li:first").css("background-color", "#eee")

    // $("ul li:last").css("background-color", "#ccc")

    // $("tr:even").css("background-color","red")

    // $("tr:odd").css("background-color","blue")
    // SELECTORES



    // EVENTOS MOUSE

    // $("#btn1").click(function(){
    //     alert("Botón clickeado!");
    // });

    // $("#btn2").on("click",function(){
    //     alert("Botón 2 clickeado!");
    // });

    // $("#btn1").on("click", function(){
    //     $(".para1").hide();
    // });

    // $("#btn2").on("click", function(){
    //     $(".para1").show();
    // });

    // $("#btn1").on("click", function(){
    //     $(".para1").toggle();
    // });

    // $("#btn1").on("mouseenter", function(){
    //     $(".para1").toggle();
    // });

    // $("#btn1").on("mouseleave", function(){
    //     $(".para1").toggle();
    // });

    // $("#btn1").hover(function(){
    //     $(".para1").toggle();
    // });

    // $("#btn1").dblclick(function(){
    //     $(".para1").toggle();
    // });

    // $("#btn1").mousemove(function(){
    //     $(".para1").toggle();
    // });

    $("#btn1").on("click", function(event){
        console.log(event.currentTarget.id);
        console.log(event.currentTarget.innerHTML);
        console.log(event.currentTarget.outerHTML);
    });


    // EVENTOS MOUSE
});

