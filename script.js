var map;
var geocoder;
var bounds = new google.maps.LatLngBounds();
var markersArray = [];

$(document).ready(function(){
  $("#map-canvas").hide();
});

var destinationIcon = 'https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=D|FF0000|000000';
var originIcon = 'https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=O|FFFF00|000000';

function initialize() {
  directionsDisplay = new google.maps.DirectionsRenderer();
  var opts = {
    center: new google.maps.LatLng(55.53, 9.4),
    zoom: 20,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById('map-canvas'), opts);
  geocoder = new google.maps.Geocoder();
  directionsDisplay.setMap(map);
}

function calculateDistances() {
  $("#map-canvas").show();

  google.maps.event.trigger(map,'resize');
  var origin1 = $('input[name=Start]').val();
  var destinationA = $('input[name=Destination]').val();

  switch(origin1){
    case "International House": origin1 = "3701 Chestnut St, Philadelphia, PA 19104"; break;
    case "Kelly Writers House": origin1 = "3805 Locust Walk, Philadelphia"; break;
    case "Moore School Building": origin1 = "200 S 33rd St Philadelphia, PA 19104"; break;
    case "CVS on 34th": origin1 = "3401 Walnut St, Philadelphia, PA 19104"; break;
    case "CVS on 40th": origin1 = "3925 Walnut Street, Philadelphia, PA 19104"; break;
    case "College Hall": origin1 = "College Hall, Philadelphia"; break;
    case "Music Building": origin1 = "Music Building, Philadelphia"; break;
    case "Student Financial Services": origin1 = "3451 Walnut Street"; break;
    case "ARCH": origin1 = "ARCH, Philadelphia"; break;
    case "Bookstore": origin1 = "3601 Walnut St, Philadelphia, PA 19104"; break;
    case "Counseling and Psychological Services": origin1 = "133 S 36th St, Philadelphia, PA 19104"; break;
    case "Fresh Grocer": origin1 = "4001 Walnut St, Philadelphia, PA 19104"; break;
    case "Hill College House": origin1 = "Hill College House, Philadelphia"; break;
    case "Hillel": origin1 = "215 S 39th St, Philadelphia, PA 19104"; break;
    case "Huntsman Hall": origin1 = "Jon M. Huntsman Hall"; break;
    case "Compass": origin1 = "37th & Locust, Philadelphia, PA"; break;
    case "Button": origin1 = "Van Pelt Library"; break;
    case "Tampons": origin1 = "39th and Locust, Philadelphia"; break;
    case "Leidy Labs": origin1 = "3740 Hamilton Walk, Philadelphia"; break;
    case "Student Health Services": origin1 = "3535 Market Street, Philadelphia"; break;
    case "Fox Fitness Center": origin1 = "Franklin Field"; break;
    case "Women's Center": origin1 = "3643 LOCUST WALK, PHILADELPHIA, PA 19104"; break;
    case "Commons (1920)": origin1 = "1920 Commons, Philadelphia"; break;
    case "Bodek Lounge": origin1 = "Houston Hall, Philadelphia"; break;
    case "Chemistry Building": origin1 = "34th and Spruce, Philadelphia"; break;
    case "Castor Building": origin1 = "3701 Locust Walk, Philadelphia"; break;
    case "Weingarten": origin1 = "3702 Spruce Street, Philadelphia"; break;
    case "Stouffer Residence Hall": origin1 = "3702 Spruce Street, Philadelphia"; break;
    case "Mayer Residence Hall": origin1 = "3817 Spruce Street, Philadelphia"; break;
    case "Sansom Place East": origin1 = "3600 Chestnut Street, Philadelphia"; break;
    case "Sansom West Place": origin1 = "3650 Chestnut Street, Philadelphia"; break;
    case "Riepe": origin1 = "3700 Spruce Street, Philadelphia"; break;
    case "Ware": origin1 = "3700 Spruce Street, Philadelphia"; break
    case "Fisher Hassenfield": origin1 = "3700 Spruce Street, Philadelphia"; break;
    case "Steinberg Hall-Dietrich Hall": origin1 = "255 South 38th Street, Philadelphia"; break;
    case "Jerome Fisher Hall": origin1 = "3537 Locust Walk, Philadelphia"; break;
    case "Book Center": origin1 = "Penn Book Center, Philadelphia"; break;
    case "Franklin Building": origin1 = "3451 Walnut Street, Philadelphia"; break;
    case "Ice Rink": origin1 = "3130 Walnut Street"; break;
    case "Platt Student Performing Arts Center": origin1 = "3702 Spruce Street, Philadelphia"; break;
    case "Williams Hall": origin1 = "255 South 36th Street, Philadelphia"; break;
    case "Benjamin Franklin Statue": origin1 = "College Hall, Philadelphia"; break;
    case "Benjamin Franklin Bench": origin1 = "37th & Locust, Philadelphia, PA"; break;
    case "Love Statue": origin1 = "36th & Locust, Philadelphia, PA"; break;
    case "Penn Park": origin1 = "Penn Park Philadelphia"; break;

  }
  switch(destinationA) {
    case "International House": destinationA = "3701 Chestnut St, Philadelphia, PA 19104"; break;
    case "Kelly Writers House": destinationA = "3805 Locust Walk, Philadelphia"; break;
    case "Moore School Building": destinationA = "200 S 33rd St Philadelphia, PA 19104"; break;
    case "CVS on 34th": destinationA = "3401 Walnut St, Philadelphia, PA 19104"; break;
    case "CVS on 40th": destinationA = "3925 Walnut Street, Philadelphia, PA 19104"; break;
    case "College Hall": destinationA = "College Hall, Philadelphia"; break;
    case "Music Building": destinationA = "Music Building, Philadelphia"; break;
    case "Student Financial Services": destinationA = "3451 Walnut Street"; break;
    case "ARCH": destinationA = "ARCH, Philadelphia"; break;
    case "Bookstore": destinationA = "3601 Walnut St, Philadelphia, PA 19104"; break;
    case "Counseling and Psychological Services": destinationA = "133 S 36th St, Philadelphia, PA 19104"; break;
    case "Fresh Grocer": destinationA = "4001 Walnut St, Philadelphia, PA 19104"; break;
    case "Hill College House": destinationA = "Hill College House, Philadelphia"; break;
    case "Hillel": destinationA = "215 S 39th St, Philadelphia, PA 19104"; break;
    case "Huntsman Hall": destinationA = "Jon M. Huntsman Hall"; break;
    case "Compass": destinationA = "37th & Locust, Philadelphia"; break;
    case "Button": destinationA = "Van Pelt Library"; break;
    case "Tampons": destinationA = "39th and Locust, Philadelphia"; break;
    case "Leidy Labs": destinationA = "3740 Hamilton Walk, Philadelphia"; break;
    case "Student Health Services": destinationA = "3535 Market Street, Philadelphia"; break;
    case "Fox Fitness Center": destinationA = "Franklin Field"; break;
    case "Women's Center": destinationA = "3643 LOCUST WALK, PHILADELPHIA, PA 19104"; break;
    case "Commons (1920)": destinationA = "1920 Commons; Philadelphia"; break;
    case "Bodek Lounge": destinationA = "Houston Hall, Philadelphia"; break;
    case "Chemistry Building": destinationA = "34th and Spruce, Philadelphia"; break;
    case "Castor Building": destinationA = "3701 Locust Walk, Philadelphia"; break;
    case "Stouffer Residence Hall": destinationA = "3702 Spruce Street, Philadelphia"; break;
    case "Mayer Residence Hall": destinationA = "3817 Spruce Street, Philadelphia"; break;
    case "Sansom Place East": destinationA = "3600 Chestnut Street, Philadelphia"; break;
    case "Sansom West Place": destinationA = "3650 Chestnut Street, Philadelphia"; break;
    case "Riepe": destinationA = "3700 Spruce Street, Philadelphia"; break;
    case "Ware": destinationA = "3700 Spruce Street, Philadelphia"; break
    case "Fisher Hassenfield": destinationA = "3700 Spruce Street, Philadelphia"; break;
    case "Steinberg Hall-Dietrich Hall": destinationA = "255 South 38th Street, Philadelphia"; break;
    case "Jerome Fisher Hall": destinationA = "3537 Locust Walk, Philadelphia"; break;
    case "Book Center": destinationA = "Penn Book Center, Philadelphia"; break;
    case "Franklin Building": destinationA = "3451 Walnut Street, Philadelphia"; break;
    case "Ice Rink": destinationA = "3130 Walnut Street"; break;
    case "Platt Student Performing Arts Center": destinationA = "3702 Spruce Street, Philadelphia"; break;
    case "Williams Hall": destinationA = "255 South 36th Street, Philadelphia"; break;
    case "Benjamin Franklin Statue": destinationA = "College Hall, Philadelphia"; break;
    case "Benjamin Franklin Bench": origin1 = "37th & Locust, Philadelphia, PA"; break;
    case "Love Statue": destinationA = "36th & Locust, Philadelphia, PA"; break;
    case "Penn Park": destinationA = "Penn Park Philadelphia"; break;

  }
  var service = new google.maps.DistanceMatrixService();
  service.getDistanceMatrix(
    {
      origins: [origin1],
      destinations: [destinationA],
      travelMode: google.maps.TravelMode.WALKING,
      unitSystem: google.maps.UnitSystem.IMPERIAL,
      avoidHighways: false,
      avoidTolls: false
    }, callback);
  var directionsService = new google.maps.DirectionsService();
  directionsService.route({
      origin: origin1,
      destination: destinationA,
      travelMode: google.maps.TravelMode.WALKING,
      unitSystem: google.maps.UnitSystem.IMPERIAL
    }, function(response,status) {
    if (status == google.maps.DirectionsStatus.OK) {
      console.log('here')
      console.log(response);
      directionsDisplay.setDirections(response);
    }
  })
  return false;
}

function callback(response, status) {
  if (status != google.maps.DistanceMatrixStatus.OK) {
    alert('Error was: ' + status);
  } else {
    console.log('Got response', response, status);
    var origins = response.originAddresses;
    var destinations = response.destinationAddresses;
    var outputDiv = document.getElementById('outputDiv');
    outputDiv.innerHTML = '';
    deleteOverlays();

    for (var i = 0; i < origins.length; i++) {
      var results = response.rows[i].elements;
      addMarker(origins[i], false);
      for (var j = 0; j < results.length; j++) {
        addMarker(destinations[j], true);
        outputDiv.innerHTML += /*origins[i] + ' to ' + destinations[j]
            + ': ' + '<br>' +*/ 'It is ' +results[j].distance.text + 
            ' away -> You need ' + results[j].duration.text + 
           '<br>';
      }
    }
  }
}

function addMarker(location, isDestination) {
  var icon;
  if (isDestination) {
    icon = destinationIcon;
  } else {
    icon = originIcon;
  }
  geocoder.geocode({'address': location}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      bounds.extend(results[0].geometry.location);
      map.fitBounds(bounds);
      var marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location,
        icon: icon
      });
      markersArray.push(marker);
    } else {
      alert('Geocode was not successful for the following reason: '
        + status);
    }
  });
}

function deleteOverlays() {
  for (var i = 0; i < markersArray.length; i++) {
    markersArray[i].setMap(null);
  }
  markersArray = [];
}

google.maps.event.addDomListener(window, 'load', initialize);
https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=D|FF0000|000000
chart.googleapis.com
https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=D|FF0000|000000
chart.googleapis.com