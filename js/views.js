function individualScore(piece) {         
  view =
    '<div class="piece col-xs-12 col-sm-6">\
      <div class="piece__text pull-left">\
        <h4 class="'+piece['class']+'" \
        data-title="'+piece['data_title']+'">\
          '+piece['title']+'\
        </h4>\
        <p>'+piece['description']+'</p>\
      </div>\
      <div class="piece__img pull-right">\
        <img src="'+piece['img']+'" />\
      </div>\
    </div>'
  return view
}

function scoreInfo(title, data_title) {
  view =
    '<div class="score-info">\
      <button type="button" class="btn btn-default btn-lg btn-back js-show-score-list">\
        <span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>\
        Back to list\
      </button>\
      <div class="content">\
        <h4>'+title+'</h4>\
        <button type="button" class="btn btn-default btn-lg btn-play js-show-show-score"\
        data-title="'+data_title+'">\
          <span class="glyphicon glyphicon-play" aria-hidden="true"></span>\
        </button>\
      </div>\
    </div>'
  return view
}

function getScoreView(data_title) {
  if (data_title == 'phase_one') {
    phase_one =
      '<div class="show-score-buttons">\
        <button type="button" class="btn btn-default btn-lg btn-back js-show-score-list">\
          <span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>\
          Back to list\
        </button>\
      </div>\
      <div class="phase-one">\
        <div id="a" class="col-container a"><div class="bar a"></div></div>\
        <div id="b" class="col-container b"><div class="bar b"></div></div>\
        <div id="c" class="col-container a"><div class="bar a"></div></div>\
        <div id="d" class="col-container b"><div class="bar b"></div></div>\
        <div id="e" class="col-container a"><div class="bar a"></div></div>\
        <div id="f" class="col-container b"><div class="bar b"></div></div>\
        <div id="g" class="col-container a"><div class="bar a"></div></div>\
        <div id="h" class="col-container b"><div class="bar b"></div></div>\
        <div id="i" class="col-container a"><div class="bar a"></div></div>\
        <div id="j" class="col-container b"><div class="bar b"></div></div>\
      </div>'
    return phase_one
  }
}
