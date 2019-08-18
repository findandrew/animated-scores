document.addEventListener("DOMContentLoaded", function(event) {

  document.getElementById("start").onclick = manageSet;

  function manageSet() {

    var body = document.getElementsByTagName("body")[0];

    // clear screen
    window.setTimeout(fadeOut,                   0, body, '5000ms');
    window.setTimeout(clearHtml,              5000, body);

    // improvisation
    window.setTimeout(buildImprovisation,     5000, body);
    window.setTimeout(fadeIn,                 5000, body, '5000ms');
    window.setTimeout(runImprovisation,      15000, body);
    window.setTimeout(fadeOut,               25000, body, '5000ms');
    window.setTimeout(destroyImprovisation,  30000, body);

    // phases
    window.setTimeout(buildPhases,           30000, body);
    window.setTimeout(fadeIn,                30000, body, '5000ms');
    window.setTimeout(runPhases,             40000, body);
    window.setTimeout(fadeOut,               50000, body, '5000ms');
    window.setTimeout(destroyPhases,         55000, body);

    // improvisation
    window.setTimeout(buildImprovisation,    55000, body);
    window.setTimeout(fadeIn,                55000, body, '5000ms');
    window.setTimeout(runImprovisation,      65000, body);
    window.setTimeout(fadeOut,               75000, body, '5000ms');
    window.setTimeout(destroyImprovisation,  80000, body);

    // rows
    window.setTimeout(buildRows,             80000, body);
    window.setTimeout(fadeIn,                80000, body, '5000ms');
    window.setTimeout(runRows,               90000, body);
    window.setTimeout(fadeOut,              100000, body, '5000ms');
    window.setTimeout(destroyRows,          105000, body);

    // improvisation
    window.setTimeout(buildImprovisation,   105000, body);
    window.setTimeout(fadeIn,               105000, body, '5000ms');
    window.setTimeout(runImprovisation,     115000, body);
    window.setTimeout(fadeOut,              125000, body, '5000ms');
    window.setTimeout(destroyImprovisation, 130000, body);

    // clear screen
    window.setTimeout(fadeOut,              130000, body, '5000ms');
    window.setTimeout(clearHtml,            130000, body);
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
    loadCss("./improvisation/improvisation.css")
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
    removeCss("./improvisation/improvisation.css")
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
    loadCss("./phases/phases.css")
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
    removeCss("./phases/phases.css")
  }

  // rows
  function buildRows(el) {
    el.innerHTML = rows_html;
    pauseRows(el);
    loadCss("./rows/rows.css")
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
    loadCss("./rows/rows.css")
  }

});
