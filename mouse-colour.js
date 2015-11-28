$(document).ready(function () {
  count = 0;
  $("body").click(function(){
    count += 1;
    console.log("clicked: ", count);
  });


  $(".square").hover(function(){
    console.log($( this ));
    // console.log($(this).attr("class"));


    $(this).css({
      "background-color" : "red"
    });

  });



  $('#tab1').show();
  $('.tabs li').on("click",function(e){
    $('.tab').hide();
    $('.tabs li').removeClass('active');
    $(this).addClass('active');
    var id=($(this).children().attr("href"));
    $(id).show();
  });
});
