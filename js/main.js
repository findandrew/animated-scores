var pieces = [
  {
    'title' : 'Title 1',
    'description' : 'Description of the piece goes here',
    'img' : 'img/line-graph.png'
  },
  {
    'title' : 'Title 2',
    'description' : 'Description of the piece goes here Description of the piece goes here Description of the piece goes here Description of the piece goes here',
    'img' : 'img/line-graph.png'
  },
  {
    'title' : 'Title 3',
    'description' : 'Description of the piece goes here',
    'img' : 'img/line-graph.png'
  },
  {
    'title' : 'Title 4',
    'description' : 'Description of the piece goes here Description of the piece goes here Description of the piece goes here',
    'img' : 'img/line-graph.png'
  },
  {
    'title' : 'Title 5',
    'description' : 'Description of the piece goes here Description of the piece goes here',
    'img' : 'img/line-graph.png'
  },
  {
    'title' : 'Title 6',
    'description' : 'Description of the piece goes here',
    'img' : 'img/line-graph.png'
  },
  {
    'title' : 'Title 7',
    'description' : 'Description of the piece goes here',
    'img' : 'img/line-graph.png'
  }
]

function pairArray(a) {
  // Thanks to Jason Cust: 
  // http://stackoverflow.com/a/31352555
  var temp = a.slice();
  var arr = [];
  while (temp.length) {
    arr.push(temp.splice(0,2));
  }
  return arr;
}

function showScoreList() {
  var pairs = pairArray(pieces);

  $( 'body' ).append('<div class="container"></div>');

  $.each(pairs, function(index, pair) {
    $( '.container' ).append('<div class="row">');

    $.each(pair, function(index, piece) {
      $( '.container' ).append(
        '<div class="piece col-xs-12 col-sm-6">\
          <div class="piece__text pull-left">\
            <h4>'+piece['title']+'</h4>\
            <p>'+piece['description']+'</p>\
          </div>\
          <div class="piece__img pull-right">\
            <img src="'+piece['img']+'" />\
          </div>\
        </div>'
      );
    })

    $( '.container' ).append('</div>');
  })
}

$( document ).ready(function() {
  showScoreList();
});
