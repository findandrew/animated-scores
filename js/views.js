function individualScore(piece) {         
  string =
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
  return string
}

function scoreInfo(title) {
  string =
    '<div class="score-info">\
      <button type="button" class="btn btn-default btn-lg btn-back js-show-score-list">\
        <span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>\
        Back to list\
      </button>\
      <div class="content">\
        <h4>'+title+'</h4>\
        <button type="button" class="btn btn-default btn-lg btn-play">\
          <span class="glyphicon glyphicon-play" aria-hidden="true"></span>\
        </button>\
      </div>\
    </div>'
  return string
}
