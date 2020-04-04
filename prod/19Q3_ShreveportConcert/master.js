// master

document.addEventListener("DOMContentLoaded", function(event) {

  document.getElementById("start").onclick = manageSet;

  function manageSet() {

    createTimeoutDelays(timeout_delays, piece_durations);

    var body = document.getElementsByTagName("body")[0];

    // clear screen
    window.setTimeout(fadeOut,      timeout_delays[0], body);
    window.setTimeout(clearHtml,    timeout_delays[1], body);

    // phases
    window.setTimeout(buildPiece,   timeout_delays[2], body, phases_html, "./phases/phases.css");
    window.setTimeout(fadeIn,       timeout_delays[3], body);
    window.setTimeout(startPiece,   timeout_delays[4], body, ".phase-one .bar");
    window.setTimeout(fadeOut,      timeout_delays[5], body); //duration
    window.setTimeout(destroyPiece, timeout_delays[6], body, "./phases/phases.css");

    // rows
    window.setTimeout(buildPiece,   timeout_delays[7], body, rows_html, "./rows/rows.css");
    window.setTimeout(fadeIn,       timeout_delays[8], body);
    window.setTimeout(startPiece,   timeout_delays[9], body, ".row");
    window.setTimeout(fadeOut,      timeout_delays[10], body); //duration
    window.setTimeout(destroyPiece, timeout_delays[11], body, "./rows/rows.css");

    // // clear screen
    // window.setTimeout(fadeOut,           20000, body);
    // window.setTimeout(clearHtml,         20000, body);

    // window.setTimeout(fadeOut,               0, body);
    // window.setTimeout(buildImprovisation, 3000, body);
    // window.setTimeout(fadeIn,             3010, body);

    // window.setTimeout(fadeOut,            9000, body);
    // window.setTimeout(buildTriangle,     12000, body);
    // window.setTimeout(fadeIn,            12010, body);

    // window.setTimeout(fadeOut,           15000, body);
    // window.setTimeout(buildPhases,       18000, body);
    // window.setTimeout(fadeIn,            18010, body);

    // window.setTimeout(fadeOut,           21000, body);
    // window.setTimeout(buildRows,         24000, body);
    // window.setTimeout(fadeIn,            24010, body);

    // window.setTimeout(fadeOut,           28000, body);
  }

});
