var markers = [];

function detailRequest(){
	var toClear = document.querySelectorAll("input[type='checkbox'][value='clear']")[0].checked;
	if(toClear) clearMarkers();
	var placeReference = document.getElementById("place-reference").value;
	var request = {
	  	    reference: placeReference
	  };

	  var infowindow = new google.maps.InfoWindow();
	  var service = new google.maps.places.PlacesService(map);

	  service.getDetails(request, function(place, status) {
	    if (status == google.maps.places.PlacesServiceStatus.OK) {
	      var marker = new google.maps.Marker({
	        map: map,
	        position: place.geometry.location
	      });
	      markers.push(marker);
	      google.maps.event.addListener(marker, 'click', function() {
	        infowindow.setContent(place.name
	        	+ "<br>" + place.formatted_phone_number 
	        	+ "<br>" + place.formatted_address
	        	+ "<br>" + place.website);
	        infowindow.open(map, this);
	      });
	      alert("got 'er! may need to zoom out.")
	    }
	  });
}

function clearMarkers(){
	markers.forEach(function(marker) { 
      marker.setMap(null);
    });
    markers = [];
}

var button = document.getElementById("button");
button.addEventListener("click", detailRequest);