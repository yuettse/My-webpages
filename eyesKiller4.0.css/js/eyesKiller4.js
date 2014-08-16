$(document).ready(function(){
  function Color() {
		return '#' + Math.random().toString(10).slice(2, 8);
	};
  
  setTimeout( function() { 
    $('span1').html("Hey!");
  }, 500);
  setTimeout( function() { 
    $('span1').html("Watz");
  }, 1000);
  setTimeout( function() { 
    $('span1').html("Sup");
  }, 1500);
  setTimeout( function() { 
    $('span1').html("Wari");
  }, 2000);
  setTimeout( function() { 
    $('span1').html("Watz");
  }, 2500);
  setTimeout( function() { 
    $('span1').html("Sup");
  }, 3000);
  setTimeout( function() { 
    $('span1').html("Peter");
  }, 3500);
  setTimeout( function() { 
    $('span1').html("Watz");
  }, 4000);
  setTimeout( function() { 
    $('span1').html("Sup");
  }, 4500);
  setTimeout( function() {  
    $('span1').html("Niggas");
  }, 5000);
  
  setTimeout( function() { 
    $('span1').html("I ");
    $('span1').css("color", "blue");
    $('span2').css("color", "green");
    $('span2').html("A");
    $('span3').html("M");
    $('p').css("font-size", 300 + "px" );
  }, 5500);
  
  setTimeout( function() { 
    $('span1').css("color", "yellow");
    $('span2').css("color", "red");
    $('span3').css("color", "green");
    $('p').css("font-size", 150 + "px" );
  }, 6000);  
    
  setTimeout( function() { 
    $('span1').css("color", "white");
    $('span2').css("color", "pink");
    $('span3').css("color", "yellow");
    $('p').css("font-size",300 + "px" );
  }, 6500); 
  
  setTimeout( function() { 
    $('span1').css("color", "white");
    $('span2').css("color", "green");
    $('span3').css("color", "yellow");
    $('p').css("font-size", 150 + "px");
  }, 7000); 
  
  setTimeout( function() { 
    $('span1').css("color", "blue");
    $('span2').css("color", "green");
    $('p').css("font-size", 150 + "px");
  }, 7000); 
  
  setTimeout( function() { 
    $('span1').remove();
    $('span2').remove();
    $('span3').remove();
  }, 7500); 
  
  setTimeout( function() { 
    $('p').html("Eyes Killer 4.0~~~~~!!!!!!!!!!!")
  }, 10000); 
  
  setTimeout( function() {
    for (var a = 50; a > 0; a += 1) {
      setTimeout( function() { 
        $('body').css('background-color', Color);
      }, a );
    }
  }, 12000);
  
  
  
});
  
