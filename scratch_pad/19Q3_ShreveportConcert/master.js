document.addEventListener("DOMContentLoaded", function(event) {

  document.getElementById("start").onclick = manageSet;

  function manageSet() {

    var body = document.getElementsByTagName("body")[0];

    // clear screen
    window.setTimeout(fadeOut,                   0, body);
    window.setTimeout(clearHtml,                 0, body);

    // phases
    window.setTimeout(buildPhases,            5000, body);
    window.setTimeout(fadeIn,                 5000, body);
    window.setTimeout(startPhases,           10000, body);
    window.setTimeout(fadeOut,               25000, body);
    window.setTimeout(destroyPhases,         35000, body);

    // rows
    window.setTimeout(buildRows,             45000, body);
    window.setTimeout(fadeIn,                45000, body);
    window.setTimeout(startRows,             50000, body);
    window.setTimeout(fadeOut,               60000, body);
    window.setTimeout(destroyRows,           65000, body);

    // improvisation
    window.setTimeout(buildImprovisation,    75000, body);
    window.setTimeout(fadeIn,                75000, body);
    window.setTimeout(startImprovisation,    90000, body);
    window.setTimeout(fadeOut,              100000, body);
    window.setTimeout(destroyImprovisation, 105000, body);

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

  // utilities
  function fadeOut(el) {
    // could pass animation duration as a variable
    el.style.animationPlayState = "paused";
    el.style.animationName = "fadeout";
    el.style.animationPlayState = "running";
  }

  function fadeIn(el) {
    // could pass animation duration as a variable
    el.style.animationPlayState = "paused";
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

  function startImprovisation(el) {
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
    loadCss("./phases/phases.css")
  }

  function startPhases(el) {
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
    loadCss("./rows/rows.css")
  }

  function startRows(el) {
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
