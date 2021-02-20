// methods to output @keyframes with random variables

function make_motion_animation(iterations) {
  // variables
  var letters  = []
  var output   = ""

  for (i = 0; i < iterations; i++) {
    // array variables
    var values_a = []
    var values_b = []
    // fill arrays
    letters.push(String.fromCharCode('a'.charCodeAt(0) + i));   // increment letters from 'a'
    for (k = 0; k < 10; k++) {
      values_a.push(Math.floor(Math.random() * 360));           // random integer from 0-360
      values_b.push(Math.floor(Math.random() * 500 + 100));     // random integer from 100-500
    }
    // make css
    var css = "@keyframes motion-"+letters[i]+" {"+
          "0%   { transform: rotate("+values_a[0]+"deg) translate("+values_b[0]+"px); }"+
          "10%  { transform: rotate("+values_a[1]+"deg) translate("+values_b[1]+"px); }"+
          "20%  { transform: rotate("+values_a[2]+"deg) translate("+values_b[2]+"px); }"+
          "30%  { transform: rotate("+values_a[3]+"deg) translate("+values_b[3]+"px); }"+
          "40%  { transform: rotate("+values_a[4]+"deg) translate("+values_b[4]+"px); }"+
          "50%  { transform: rotate("+values_a[5]+"deg) translate("+values_b[5]+"px); }"+
          "60%  { transform: rotate("+values_a[6]+"deg) translate("+values_b[6]+"px); }"+
          "70%  { transform: rotate("+values_a[7]+"deg) translate("+values_b[7]+"px); }"+
          "80%  { transform: rotate("+values_a[8]+"deg) translate("+values_b[8]+"px); }"+
          "90%  { transform: rotate("+values_a[9]+"deg) translate("+values_b[9]+"px); }"+
          "100% { transform: rotate("+values_a[0]+"deg) translate("+values_b[0]+"px); } }";

    output += css
  }
  return output
}

function make_color_animation(iterations) {
  // variables
  var letters  = []
  var output   = ""
  var colors   = ["156, 144, 196",
                  "0,   153, 123",
                  "233, 210, 92",
                  "252, 118, 106",
                  "108, 58,  98",
                  "156, 144, 196"]

  for (i = 0; i < iterations; i++) {
    // array variables
    var values_a = []
    // fill arrays
    letters.push(String.fromCharCode('a'.charCodeAt(0) + i));   // increment letters from 'a'
    for (k = 0; k < 10; k++) {
      values_a.push(colors[Math.floor(Math.random() * colors.length)]); // random integer from 0-color_array_length
    }
    // make css
    var css = "@keyframes color-"+letters[i]+" {"+
          "0%   { background-color: rgb("+values_a[0]+");}"+
          "10%  { background-color: rgb("+values_a[1]+");}"+
          "20%  { background-color: rgb("+values_a[2]+");}"+
          "30%  { background-color: rgb("+values_a[3]+");}"+
          "40%  { background-color: rgb("+values_a[4]+");}"+
          "50%  { background-color: rgb("+values_a[5]+");}"+
          "60%  { background-color: rgb("+values_a[6]+");}"+
          "70%  { background-color: rgb("+values_a[7]+");}"+
          "80%  { background-color: rgb("+values_a[8]+");}"+
          "90%  { background-color: rgb("+values_a[9]+");}"+
          "100% { background-color: rgb("+values_a[0]+");}}"

    output += css
  }
  return output
}
