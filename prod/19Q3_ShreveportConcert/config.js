var fade_duration = 3000 //in miliseconds
var rest_duration = 2000 //in miliseconds
var piece_durations = [5, 5] //in seconds
var timeout_delays  = [0, 3000] //in miliseconds, pre-populated for initial clear

function createTimeoutDelays(delays, durations) {
  durations.forEach( function(el) {
    var miliseconds = el * 1000;
    delays.push(delays[delays.length - 1] + rest_duration);
    delays.push(delays[delays.length - 1] + fade_duration + rest_duration);
    delays.push(delays[delays.length - 1] + miliseconds);
    delays.push(delays[delays.length - 1] + fade_duration);
  })
}