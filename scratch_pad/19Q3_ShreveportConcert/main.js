document.addEventListener("DOMContentLoaded", function(event) {

  document.getElementById("start").onclick = manageSet;

  function manageSet() {

    var body = document.getElementsByTagName("body")[0];

    // clear screen
    window.setTimeout(fadeOut,                    0, body, '5000ms');
    window.setTimeout(clearHtml,               5000, body);

    // improvisation, 3 min
    window.setTimeout(buildImprovisation,      5000, body);
    window.setTimeout(fadeIn,                  5000, body, '5000ms');
    window.setTimeout(runImprovisation,       10000, body);
    window.setTimeout(fadeOut,               190000, body, '5000ms');
    window.setTimeout(destroyImprovisation,  195000, body);

    // phases, 8 min
    window.setTimeout(buildPhases,           195000, body);
    window.setTimeout(fadeIn,                195000, body, '5000ms');
    window.setTimeout(runPhases,             200000, body);
    window.setTimeout(fadeOut,               680000, body, '5000ms');
    window.setTimeout(destroyPhases,         685000, body);

    // improvisation, 10 min
    window.setTimeout(buildImprovisation,    685000, body);
    window.setTimeout(fadeIn,                685000, body, '5000ms');
    window.setTimeout(runImprovisation,      690000, body);
    window.setTimeout(fadeOut,              1290000, body, '5000ms');
    window.setTimeout(destroyImprovisation, 1295000, body);

    // rows, 10 min
    window.setTimeout(buildRows,            1295000, body);
    window.setTimeout(fadeIn,               1295000, body, '5000ms');
    window.setTimeout(runRows,              1300000, body);
    window.setTimeout(fadeOut,              1900000, body, '5000ms');
    window.setTimeout(destroyRows,          1905000, body);

    // improvisation, 4 min
    window.setTimeout(buildImprovisation,   1905000, body);
    window.setTimeout(fadeIn,               1905000, body, '5000ms');
    window.setTimeout(runImprovisation,     1910000, body);
    window.setTimeout(fadeOut,              2150000, body, '5000ms');
    window.setTimeout(destroyImprovisation, 2155000, body);

    // clear screen
    window.setTimeout(fadeOut,              2155000, body, '5000ms');
    window.setTimeout(clearHtml,            2160000, body);
  }

  // utilities
  function fadeOut(el, duration) {
    el.style.animationPlayState = "paused";
    el.style.animationDuration = duration;
    el.style.animationName = "fadeout";
    el.style.animationPlayState = "running";
  }

  function fadeIn(el, duration) {
    el.style.animationPlayState = "paused";
    el.style.animationDuration = duration;
    el.style.animationName = "fadein";
    el.style.animationPlayState = "running";
  }

  function clearHtml(el) {
    el.innerHTML = "";
  }

  function loadCss(filename){
    var fileref=document.createElement("link")
    fileref.setAttribute("rel", "stylesheet")
    fileref.setAttribute("type", "text/css")
    fileref.setAttribute("href", filename)
    document.getElementsByTagName("head")[0].appendChild(fileref)
  }

  function removeCss(filename){
    var el=document.getElementsByTagName("link")

    for (var i=el.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
      if (el[i] && el[i].getAttribute("href")!=null && el[i].getAttribute("href").indexOf(filename)!=-1)
          el[i].parentNode.removeChild(el[i]) //remove element
    }
  }

  // improvisation
  function buildImprovisation(el) {
    el.innerHTML = improvisation_html;
    loadCss("./quintet/improvisation/improvisation.css")
  }

  function pauseImprovisation(el) {
    var el = document.querySelectorAll(".ear");
    el.forEach( function(el) {
      el.style.animationPlayState = "running";
    })
  }

  function runImprovisation(el) {
    var el = document.querySelectorAll(".ear");
    el.forEach( function(el) {
      el.style.animationPlayState = "running";
    })
  }

  function destroyImprovisation(el) {
    el.innerHTML = "";
    removeCss("./quintet/improvisation/improvisation.css")
  }

  // triangle
  function buildTriangle(el) {
    el.innerHTML = "";
    el.innerHTML = triangle_html;
  }

  // phases
  function buildPhases(el) {
    el.innerHTML = phases_html;
    pausePhases(el);
    loadCss("./quintet/phases/phases.css")
  }

  function pausePhases(el) {
    var el = document.querySelectorAll(".phase-one .bar");
    el.forEach( function(el) {
      el.style.animationPlayState = "paused";
    })
  }

  function runPhases(el) {
    var el = document.querySelectorAll(".phase-one .bar");
    el.forEach( function(el) {
      el.style.animationPlayState = "running";
    })
  }

  function destroyPhases(el) {
    el.innerHTML = "";
    removeCss("./quintet/phases/phases.css")
  }

  // rows
  function buildRows(el) {
    el.innerHTML = rows_html;
    pauseRows(el);
    loadCss("./quintet/rows/rows.css")
  }

  function pauseRows(el) {
    var el = document.querySelectorAll(".row");
    el.forEach( function(el) {
      el.style.animationPlayState = "paused";
    })
  }

  function runRows(el) {
    var el = document.querySelectorAll(".row");
    el.forEach( function(el) {
      el.style.animationPlayState = "running";
    })
  }

  function destroyRows(el) {
    el.innerHTML = "";
    removeCss("./quintet/rows/rows.css")
  }

});
