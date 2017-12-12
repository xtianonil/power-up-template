//see to it that user only inputs numbers
$('.numeric').keydown(function(e){
  // prevent: "e", "=", ",", "-", "."
  if ([69, 187, 188, 189, 190].includes(e.keyCode)) {
    e.preventDefault();
  }
});//end of numeric keydown
$(".numeric.minutes").keyup(function(){ //estimate time minutes validation
  if ($(".numeric.minutes").val() > 99){  //dont allow numbers with more than 2 placeholders
    $(".numeric.minutes").val( Math.floor($(".numeric.minutes").val() / 10) );
  }
  else if ($(".numeric.minutes").val() > 59){  //dont allow numbers more than 59
    $(".numeric.minutes").val("59");
  }
});//end of.numeric.minutes keyup
