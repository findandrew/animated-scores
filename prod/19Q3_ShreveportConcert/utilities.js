// utilities

function createSetTimeouts(args) {
  args.forEach( function(row) {
    window.setTimeout(eval(row[0]), row[1], row[2], row[3], row[4] )
  })
}

function createTimeoutArgs(delays, args) {
  args.forEach( function(a, i) {
    timeout_args[i].splice(1, 0, delays[i])
    timeout_args[i].splice(2, 0, document.body)
  })
}

function createTimeoutDelays(delays, durations) {
  durations.forEach( function(el) {
    var miliseconds = el * 1000; // durations are configured as seconds
    delays.push(delays[delays.length - 1] + rest_duration);                 // build
    delays.push(delays[delays.length - 1]);                                 // fade in
    delays.push(delays[delays.length - 1] + fade_duration + rest_duration); // start
    delays.push(delays[delays.length - 1] + miliseconds);                   // fade out
    delays.push(delays[delays.length - 1] + fade_duration);                 // destroy
  })
}

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

function buildPiece(el, html_var, css_file) {
  el.innerHTML = html_var;
  loadCss(css_file)
}

function startPiece(el, anim_elems) {
  var el = document.querySelectorAll(anim_elems);
  el.forEach( function(el) {
    el.style.animationPlayState = "running";
  })
}

function destroyPiece(el, css_file) {
  el.innerHTML = "";
  removeCss(css_file)
}
