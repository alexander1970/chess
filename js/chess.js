let divSquare = '<div id="s$coord" class="squate $color"></div>';
let divFigure = '<div id="s$coord" class="figure">$figure</div>';

$(function () {
  addSquares();
  showFigures('rnbqkbnrpppppppp11111111111111111111111111111111PPPPPPPPRNBQKBNR');
});

function addSquares() {
  console.log('addSquares');
  $('.board').html('');
  for (let coord = 0; coord < 64; coord++)
    $('.board').append(divSquare
      .replace('$coord', coord)
      .replace('$color',
        isBlackSquareAt(coord) ? 'black' : 'white'));
}

function showFigures(figures) {
  for (let coord = 0; coord < 64; coord++)
    showFigureAt(coord, figures.charAt(coord));
}

function showFigureAt(coord, figure) {
  $('#s' + coord).html(divFigure
    .replace('$coord', coord)
    .replace('$figure', getChessSymbol(figure))
    );
}

function getChessSymbol(figure) {
  switch (figure) {
    case 'K': return '&#9812;';
    case 'Q': return '&#9813;';
    case 'R': return '&#9814;';
    case 'B': return '&#9815;';
    case 'N': return '&#9816;';
    case 'P': return '&#9817;';
    case 'k': return '&#9818;';
    case 'q': return '&#9819;';
    case 'r': return '&#9820;';
    case 'b': return '&#9821;';
    case 'n': return '&#9822;';
    case 'p': return '&#9823;';
    default : return '';
  }
}

function isBlackSquareAt(coord) {
  return (coord % 8 + Math.floor(coord / 8)) % 2;
}
