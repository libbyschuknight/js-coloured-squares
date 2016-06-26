$(document).ready(function () {

  // Checking the clicks working over page
  count = 0;
  $("body").click(function(){
    count += 1;
    console.log("clicked: ", count);
  });

  // when hover of div with class of 'square' it logs out jQuery object
  $(".square").hover(function(){
    console.log($( this ));
    console.log($(this).attr("class"));

    // when hovered over, changes background colour using random number
    $(this).css({
      "background-color" : randRGB()
    });
  });

  $(".circle").hover(function(){
    console.log($( this ));
    console.log($(this).attr("class"));

    // when hovered over, changes background colour using random number
    $(this).css({
      "background-color" : randRGB()
    });
  });
});
