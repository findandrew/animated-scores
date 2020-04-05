// html_strings
//
// To quickly create a minified string of HTML from the source
// file, run the bash command below in terminal. It will output
// a minified string after removing unnedded HTML tags from the
// code.
//
// sed 's/^[ \t]*//; s/[ \t]*$//; /^$/d; 1,5d' path_to_html_file | sed '$d' | sed '$d' | tr -d '\n'
//
// Explantion of the bash command:
//
// sed 's/^[ \t]*//'  # deletes leading white space on each line
// sed 's/[ \t]*$//'  # deletes trailing white space on each line
// sed '/^$/d'        # deletes all empty lines
// sed '1,5d'         # deletes the first 5 lines, which contain unneeded HTML tags
// sed '$d'           # deletes the last line, which containes unneeded HTML tags
// tr -d '\n'         # deletes all line breaks, minifying the HTML

var improvisation_html = "improvisation";
var triangle_html      = "triangle";

var phases_html        = '<div class="phase-one"><div class="performer a"><div class="bar a"></div><div class="bar b"></div><div class="bar c"></div></div><div class="performer b"><div class="bar d"></div><div class="bar e"></div><div class="bar f"></div></div><div class="performer c"><div class="bar g"></div><div class="bar h"></div><div class="bar i"></div></div></div>';

var rows_html          = '<div id="inst1" class="row"></div><div id="inst2" class="row"></div><div id="inst3" class="row"></div>';