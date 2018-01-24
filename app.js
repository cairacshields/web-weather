$('document').ready(function(){

	if (navigator.geolocation) {
 	 // geolocation is available
 	 	navigator.geolocation.getCurrentPosition(function(position) {

	        // Get the coordinates of the current position.
	        var lat = position.coords.latitude;
	        var lng = position.coords.longitude;

	         $.getJSON(" https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + lng, function(result){
	        	$.each(result, function(i, item){
	        		console.log(result);

	        		//Fareinheit
	        		var mainTempF = result.main.temp;

	        		//Celsius
	        		var mainTempC = Math.round((result.main.temp - 32)/1.8);


	        		$("#city").html(result.name);
	        		$("#weather").html(mainTempF + "°F");
	        		$("#info").html(result.weather[0].main);


	        		$('#cel').click(function(){
	            		$("#weather").html(mainTempC + "°C");
	        		});
	        		$('#fer').click(function(){
	            		$("#weather").html(mainTempF + "°F");
	        		});
	     

	            	if(result.weather[0].main == "Snow"){
	            		$("body").css("background-image", "url(http://www.animatedimages.org/data/media/619/animated-snow-image-0082.gif)");
	            	}else if(result.weather[0].main == "Clear"){
	            		$("body").css("background-image", "url(http://www.animatedimages.org/data/media/148/animated-weather-image-0110.gif)");
	            	}else if(result.weather[0].main == "Clouds"){
	            		$("body").css("background-image", "url(http://www.animatedimages.org/data/media/148/animated-weather-image-0068.gif)");
	            	}else if(result.weather[0].main == "Rain"){
	            		$("body").css("background-image", "url(http://www.animatedimages.org/data/media/148/animated-weather-image-0011.gif)");
	            	}
	        });
	   	 });
      });
	} 
	else {
 	 // geolocation is not supported
	}
});