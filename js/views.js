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
      <div class="buttons">\
        <h4>'+title+'</h4>\
        <button class="js-show-score-list">\
          Back\
        </button>\
        <button>Begin</button>\
      </div>\
    </div>'
  return string
}
