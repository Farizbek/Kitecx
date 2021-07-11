$(document).ready(function(){
    console.log("ready Jquery")
    $("#raqamca").click(function(){
      $(".photo1").show(1500)
      $(".uy2").hide(1500)
      $(".uy1").hide(0)
    })
    $("#raqamca1").click(function(){
        $(".photo1").hide(1500)
        $(".uy1").show(1500)
        $(".uy2").hide(0)
      })
      $("#raqamca2").click(function(){
        $(".uy1").hide(1500)
        $(".uy2").show(1500)
        $(".photo1").hide(0)
    }) 
})