/*
 Original Problem:
 In this Kata, we will calculate running pace. To do that, we have to know the distance and the time.

 Create the following function:

 runningPace(distance, time)

 Where:

 distance - An float with the number of kilometres

 time - A string containing the time it took to travel the distance. It will always be minutes:seconds. For example "25:00" means 25 minutes. You don't have to deal with hours.

 The function should return the pace, for example "4:20" means it took 4 minutes and 20 seconds to travel one kilometre.

 Note: The pace should always return only the number of minutes and seconds. You don't have to convert these into hours. Floor the number of seconds.
 */
function runningPace(distance, time) {
    var splitted = time.split(':');
    var took = parseInt(splitted[0]) * 60 + parseInt(splitted[1]);
    var total = took / distance;
    var secs = Math.floor(total % 60);
    
    return Math.floor(total / 60) + ':' + (secs > 9 ? '' : '0') + secs;
}

// Testing
const test = require('../common/test');

test(runningPace(1, '3:15'), '3:15');
test(runningPace(5, '25:00'), '5:00');