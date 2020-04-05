// master

document.addEventListener("DOMContentLoaded", function(event) {

  document.getElementById("start").onclick = manageSet;

  function manageSet() {
    createTimeoutDelays(timeout_delays, piece_durations);
    createTimeoutArgs(timeout_delays, timeout_args);
    createSetTimeouts(timeout_args);
  }

});
