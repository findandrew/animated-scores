// config

var fade_duration = 3000 //in miliseconds
var rest_duration = 2000 //in miliseconds
var piece_durations = [5, 5] //in seconds
var timeout_delays  = [0, 3000] //in miliseconds, pre-populated for initial clear

var timeout_args = [['fadeOut']
                   ,['clearHtml']

                   ,['buildPiece', phases_html, "./phases/phases.css"]
                   ,['fadeIn']
                   ,['startPiece', ".phase-one .bar"]
                   ,['fadeOut']
                   ,['destroyPiece', "./phases/phases.css"]

                   ,['buildPiece', rows_html, "./rows/rows.css"]
                   ,['fadeIn']
                   ,['startPiece', ".row"]
                   ,['fadeOut']
                   ,['destroyPiece', "./rows/rows.css"]]
