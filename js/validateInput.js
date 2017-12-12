//see to it that user only inputs numbers
$('.numeric').keydown(function(e){
  // prevent: "e", "=", ",", "-", "."
  if ([69, 187, 188, 189, 190].includes(e.keyCode)) {
    e.preventDefault();
  }
});//end of numeric keydown
$(".numeric.minutes").keyup(function(){ //estimate time minutes validation
  if ($(".numeric.minutes").val() > 99)  //dont allow numbers with more than 2 place values
    $(".numeric.minutes").val( Math.floor($(".numeric.minutes").val() / 10) );
  else if ($(".numeric.minutes").val() > 59)  //dont allow numbers more than 59
    $(".numeric.minutes").val("59");
});//end of.numeric.minutes keyup

$(".numeric.hours").keyup(function(){ //estimate time hours validation
  if ($(".numeric.hours").val() > 999)  //dont allow numbers with more than 3 place values
    $(".numeric.hours").val( Math.floor($(".numeric.hours").val() / 10) );
});


//insert a space before badge div
$(".badge.plugin-color-blue").prepend($("<div>").css("margin-bottom",'5px;'));
