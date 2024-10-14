var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

// Tamaño de la cuadrícula y contador para ralentizar el bucle
var grid = 15;
var count = 0;
var speed = 10;  // Velocidad inicial
var manzanasComidas = 0;  // Contador de manzanas

var snake = {
  x: 120,
  y: 120,
  dx: grid,   // Velocidad en el eje x
  dy: 0,      // Velocidad en el eje y
  cells: [],  // Segmentos del cuerpo de la serpiente
  maxCells: 3 // Tamaño inicial de la serpiente
};

var apple = {
  x: 300,
  y: 300
};

var score = 0;  // Puntuación inicial
var umbralVelocidad = 4;  // Número de manzanas antes de aumentar la velocidad

// Función para obtener un número aleatorio en un rango
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Función principal que se repite constantemente
function loop() {
  requestAnimationFrame(loop);

  // Aumentamos la velocidad cada vez que el "count" sea menor que el valor de speed
  if (++count < speed) {
    return;
  }

  count = 0;
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Movimiento de la serpiente
  snake.x += snake.dx;
  snake.y += snake.dy;

  // Rebote de la serpiente en los bordes del canvas
  if (snake.x < 0) {
    snake.x = canvas.width - grid;
  } else if (snake.x >= canvas.width) {
    snake.x = 0;
  }

  if (snake.y < 0) {
    snake.y = canvas.height - grid;
  } else if (snake.y >= canvas.height) {
    snake.y = 0;
  }

  // Almacenar posición de la serpiente
  snake.cells.unshift({x: snake.x, y: snake.y});

  // Limitar el tamaño de la serpiente
  if (snake.cells.length > snake.maxCells) {
    snake.cells.pop();
  }

  // Dibujar la manzana
  context.fillStyle = 'red';
  context.fillRect(apple.x, apple.y, grid - 1, grid - 1);

  // Dibujar la serpiente
  context.fillStyle = 'green';
  snake.cells.forEach(function(cell, index) {
    context.fillRect(cell.x, cell.y, grid - 1, grid - 1);

    // Si la serpiente come la manzana
    if (cell.x === apple.x && cell.y === apple.y) {
      snake.maxCells++;  // Aumentar el tamaño de la serpiente
      score++;  // Incrementar la puntuación
      manzanasComidas++;  // Incrementar el contador de manzanas

      // Generar nueva posición para la manzana
      apple.x = getRandomInt(0, 15) * grid;
      apple.y = getRandomInt(0, 15) * grid;

      // Aumentar la velocidad después de un número de manzanas
      if (manzanasComidas >= umbralVelocidad) {
        speed = Math.max(1.5, speed - 0.5);  // Aumentar la velocidad, pero no dejar que se vuelva demasiado rápida
        manzanasComidas = 0;  // Resetear el contador de manzanas
      }
    }

    // Verificar colisión con su propio cuerpo
    for (var i = index + 1; i < snake.cells.length; i++) {
      if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
        // Reiniciar juego si choca consigo misma
        snake.x = 120;
        snake.y = 120;
        snake.cells = [];
        snake.maxCells = 3;
        snake.dx = grid;
        snake.dy = 0;
        apple.x = getRandomInt(0, 15) * grid;
        apple.y = getRandomInt(0, 15) * grid;
        score = 0;  // Reiniciar la puntuación
        speed = 8;  // Resetear la velocidad al valor inicial
        manzanasComidas = 0;  // Reiniciar el contador de manzanas
      }
    }
  });

  // Mostrar la puntuación en el canvas
  context.fillStyle = 'white';
  context.font = '20px Arial';
  context.fillText('Puntuación: ' + score, 10, 20);
}

// Controlar la dirección de la serpiente con las teclas de flecha
document.addEventListener('keydown', function(e) {
  if (e.which === 37 && snake.dx === 0) {  // Izquierda
    snake.dx = -grid;
    snake.dy = 0;
  } else if (e.which === 38 && snake.dy === 0) {  // Arriba
    snake.dy = -grid;
    snake.dx = 0;
  } else if (e.which === 39 && snake.dx === 0) {  // Derecha
    snake.dx = grid;
    snake.dy = 0;
  } else if (e.which === 40 && snake.dy === 0) {  // Abajo
    snake.dy = grid;
    snake.dx = 0;
  }
});

// Iniciar el juego
requestAnimationFrame(loop);
