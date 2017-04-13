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

  $( 'body' ).empty();
  $( 'body' ).append('<div class="container"></div>');

  $.each(pairs, function(index, pair) {
    $( '.container' ).append('<div class="row">');

    $.each(pair, function(index, piece) {
      $( '.container' ).append( individualScore(piece) );
    })

    $( '.container' ).append('</div>');
  })

  createTriggers();
}

function showScore(title) {
  $( 'body' ).empty();
  $( 'body' ).append('<h4>hello world</h4>');
  createTriggers();
}

function showScoreInfo(piece) {
  var pieceObj = findPiece(piece);

  $( 'body' ).empty();
  $( 'body' ).append( scoreInfo(pieceObj.title) );
  createTriggers();
}

function findPiece(piece) {
  var data_title = $( piece ).data('title');
  var obj = pieces.filter(function ( obj ) {
      return obj.data_title === data_title;
  })[0];

  return obj
}

function createTriggers() {
  $( '.js-title' ).click(function() {
    showScoreInfo(this);
  })
  $( '.js-show-score-list' ).click(function() {
    showScoreList();
  })
}

$( document ).ready(function() {
  showScoreList();
  createTriggers();
});
