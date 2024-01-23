// sideBar

let sidebarInnerWidth=$(".innnerSideBar").innerWidth();
$(".sideBar").css("left",-sidebarInnerWidth)

$("#closeIcon").click(function()

{
    if($(".sideBar").css("left")=="0px")
    {
        $(".sideBar").animate({left:-sidebarInnerWidth},500)
    }
})
$(".sideIcon").click(function()

{
    if($(".sideBar").css("left")!="0px"){
        $(".sideBar").animate({left:0},500)

    }

})
//hide side bar

let durationOffset=$("#Duration").offset().top;
$(window).scroll(function(){
let windowScroll=$(window).scrollTop()
    if(windowScroll>durationOffset){
        $(".sideBar").hide(10)
    }else{
        $(".sideBar").show(100)

    }
})

//scrolling


$("a[href^='#]").click(function(e){
    let Href=e.target.getAttribute("href");
    let sectionOffset=$(Href).offset().top;
    $("html,body").animate({scrollTop:sectionOffset},1000)
})

//section2


$(".h1").click(function(){
    $(".p1").slideToggle(1000)
    $(".p2").slideUp(1000)
    $(".p3").slideUp(1000)
    $(".p4").slideUp(1000)

})


$(".h2").click(function(){
    $(".p2").slideToggle(1000)
    $(".p1").slideUp(1000)
    $(".p3").slideUp(1000)
    $(".p4").slideUp(1000)


})

$(".h3").click(function(){
    $(".p3").slideToggle(1000)
    $(".p1").slideUp(1000)
    $(".p2").slideUp(1000)
    $(".p4").slideUp(1000)

})

$(".h4").click(function(){
    $(".p4").slideToggle(1000)
    $(".p1").slideUp(1000)
    $(".p2").slideUp(1000)
    $(".p3").slideUp(1000)

})

// COUNT DOWN
let seconds=document.querySelector("#seconds")
let decrement=60;

let minutes=document.querySelector("#minutes")
let decMinutes=55;

let x=setInterval(()=>
{
    decrement--;
    seconds.innerHTML=decrement +" s";

    if(decrement==0){
     decrement=60;
    minutes.innerHTML= decMinutes-1 +"m"
decMinutes--
}


},100)
//messageCharacters
$("textarea").keyup(function(){
let len=$(this).val().length;
console.log(len);
$(".spanColor").text(
    100-len <= 0 ? "your available characters finished" : 100- len
     
)

})