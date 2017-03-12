/*
Original Problem:
Ahoi!
We are on a big sailing boat off the coast of Croatia. The captain, by the name of Haversine, wants you to help him out: "Arrr, we need to know the distance between these two points on the map, so I know how long we need to wait before we get to our beloved treasure!". As this is the fourth of such requests by your captain, you decide to write a function to calculate the distance between two coordinates.

Complete the function so it returns the distance between two given coordinates. Examples of given coordinates are:

48° 12′ 30″ N, 16° 22′ 23″ E
23° 33′ 0″ S, 46° 38′ 0″ W
58° 18′ 0″ N, 134° 25′ 0″ W
33° 51′ 35″ S, 151° 12′ 40″ E

The returned distance should be in kilometers.
We think about the earth as a sphere with radius 6371 km.
As our captain has a good binocular and the fact, that we are lazy, we don't take precision too serious. So it is sufficient for the result to be precise to 10 km. Round to the lower 10 km. So 6387 becomes 6380, 643 becomes 640 and 18299 becomes 18290.
You can expect the delivered coordinates to be valid.
The characters for minutes (′) and seconds (″) are not standard quotation marks. If you experience any encoding/escaping issues, you can get them as follows:

unescape("%B0"); // °
unescape("%u2032"); // ′
unescape("%u2033"); // ″


Examples of inputs and the expected outputs:

distance("48° 12′ 30″ N, 16° 22′ 23″ E", "23° 33′ 0″ S, 46° 38′ 0″ W");
// Returns 10130
distance("48° 12′ 30″ N, 16° 22′ 23″ E", "58° 18′ 0″ N, 134° 25′ 0″ W");
// Returns 7870
distance("48° 12′ 30″ N, 16° 22′ 23″ E", "48° 12′ 30″ N, 16° 22′ 23″ E");
// Returns 0

As you try and try and just don't seem to be able to find the solution, the ship's first mate, an old white bearded man gives you a small hint: "There are many ways to tackle the problem. Guess which one's the captain's favourite! His name was not given to him by accident!"

Good luck, navigator!
*/

// http://www.movable-type.co.uk/scripts/latlong.html
// a = sin²(Δφ/2) + cos φ1 ⋅ cos φ2 ⋅ sin²(Δλ/2)

'use strict';

function distance(coord1, coord2) {
  const regex = /([0-9]+)|(N|S|E|W)/g;
  const R = 6371; // km

  coord1 = coord1.match(regex);
  coord2 = coord2.match(regex);

  let lat1 = getDecDegrees(coord1.slice(0, 4));
  let lat2 = getDecDegrees(coord2.slice(0, 4));

  let lon1 = getDecDegrees(coord1.slice(4));
  let lon2 = getDecDegrees(coord2.slice(4));

  let latChange = radians(lat2 - lat1);
  let lonChange = radians(lon2 - lon1);

  let a = Math.sin(latChange / 2) * Math.sin(latChange / 2) +
          Math.cos(radians(lat1)) * Math.cos(radians(lat2)) *
          Math.sin(lonChange / 2) * Math.sin(lonChange / 2);
  
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return Math.floor(R * c / 10) * 10;
}

function getDecDegrees(arr) {
  let value = parseInt(arr[0]) + parseInt(arr[1]) / 60 + parseInt(arr[2]) / 3600;

  if (arr[3] === 'S' || arr[3] === 'W') {
    value = -value;
  }

  return value;
}

const radians = (degrees) => degrees * Math.PI / 180;

// Tests
const test = require('./common/test');

test(distance("48° 12′ 30″ N, 16° 22′ 23″ E", "23° 33′ 0″ S, 46° 38′ 0″ W"), 10130);
//test(distance("48° 12′ 30″ N, 16° 22′ 23″ E", "58° 18′ 0″ N, 134° 25′ 0″ W"), 7870);
//test(distance("48° 12′ 30″ N, 16° 22′ 23″ E", "48° 12′ 30″ N, 16° 22′ 23″ E"), 0);