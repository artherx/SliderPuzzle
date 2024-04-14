//base

// *encontrar la posicion vacia y darle su producto cuz
function AnaliticVoid(emptyPi, tam) {
  const col = emptyPi.col;
  const row = emptyPi.row;
  const validQuadrants = [];
  // Verificar si la casilla está en el borde derecho
  if (col < tam - 1) {
    validQuadrants.push({ row: row, col: col + 1 }); // Casilla a la derecha
  }

  // Verificar si la casilla está en el borde izquierdo
  if (col > 0) {
    validQuadrants.push({ row: row, col: col - 1 }); // Casilla a la izquierda
  }

  // Verificar si la casilla está en la parte inferior
  if (row < tam - 1) {
    validQuadrants.push({ row: row + 1, col: col }); // Casilla abajo
  }

  // Verificar si la casilla está en la parte superior
  if (row > 0) {
    validQuadrants.push({ row: row - 1, col: col }); // Casilla arriba
  }

  return validQuadrants;
}

function calcularFichaAMover(piece, validQuadrants, piecesNew) {
  const tablero = piece;
  let fichaAMover = [];
  let valorMinimo = Infinity; // Inicializamos el valor mínimo con infinito
  let valorMinimoN = Infinity; // Inicializamos el valor mínimo con infinito

  // Iteramos sobre cada cuadrante válido
  for (const cuadrante of validQuadrants) {
    var itera = 0;
    const { row, col } = cuadrante;
    const pieza = tablero.find((p) => p.row === row && p.col === col);
    const real = piecesNew.find((p) => p.number == pieza.number);
    console.log(`este es pieza row ${pieza.row} col ${pieza.col} number ${pieza.number}y este es el real row  ${real.row} col ${real.col} number ${real.number}`)
    const d = Math.sqrt(
      Math.pow(real.row-pieza.row,2)+Math.pow(real.col-pieza.col,2)
    )
    console.log(d)

    // Verificamos si la ficha actual tiene un valor menor que el valor mínimo
    if (pieza && pieza.number !== 0 &&d !== 0 && d < valorMinimo && pieza.number < valorMinimoN) {
      itera++;
      valorMinimo = d;
      fichaAMover[0] = row;
      fichaAMover[1] = col;

      console.log(`esta es la ficha ${fichaAMover}, su valor ${valorMinimo} y cauntas veces a pasado ${itera}`
      );
    }
  }

  return fichaAMover;
}

export { AnaliticVoid, calcularFichaAMover };
