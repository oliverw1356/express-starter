alert('Welcome'); // edit me!

// Problem 1 (Say Hello!) ---------------------------------------------------
$('#say_hello').click(function() {
  // WRITE CODE HERE
  alert('Hello World');
});


// Problem 2 (Houdini) ------------------------------------------------------
$('#disappear').click(function() {
  //WRITE CODE HERE
  $("p").hide();
});

$('#reappear').click(function() {
  //WRITE CODE HERE
  $("p").show();
});


// Problem 3 (Tickle Me Pink) -----------------------------------------------
$('#pink').click(function() {
	$("p").css('color','pink');	
});
$('#unpink').click(function() {
	$("p").css('color','black');
});


// Problem 4 (Greet Me) -----------------------------------------------------
// WRITE CODE HERE
