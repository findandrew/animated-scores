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

function showScore(string) {
  var view = getScoreView(string);
  $( 'body' ).empty();
  $( 'body' ).append(view);

  // Start phase-one (needs to be moved into its own method)
  $( ".phase-one .col-container" ).css( "animation-play-state", "running" );
  $( ".phase-one .bar" ).css( "animation-play-state", "running" );
  
  createTriggers();
}

function showScoreInfo(piece) {
  var pieceObj   = findPiece(piece);
  var title      = pieceObj.title
  var data_title = pieceObj.data_title

  $( 'body' ).empty();
  $( 'body' ).append( scoreInfo(title, data_title) );
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
  $( '.js-show-show-score' ).click(function() {
    showScore($( this ).data('title'));
  })
}

$( document ).ready(function() {
  showScoreList();
  createTriggers();
});
