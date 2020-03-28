// POO

// 1 => Obstacle
let grid = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
    [30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
    [40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
    [50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
    [60, 61, 62, 63, 64, 65, 66, 67, 68, 69],
    [70, 71, 72, 73, 74, 75, 76, 77, 78, 79],
    [80, 81, 82, 83, 84, 85, 86, 87, 88, 89],
    [90, 91, 92, 93, 94, 95, 96, 97, 98, 99],
]

let obstaculos = [22, 42]

let commandsArray = ['f', 'f', 'f', 'f', 'f', 'f', 'f', 'r', 'f', 'f', 'f', 'r', 'f', 'f', 'l', 'f'];
// let commandsArray = ['b', 'b', 'b', 'b', 'b', 'b', 'l', 'f'];

let commandsArray2 = ['f', 'l', 'f', 'r', 'f', 'f', 'f', 'f', 'l', 'f', 'f', 'l', 'f', 'f', 'f', 'f', 'f'];;

function roverObject(commands, startDirection, posX, posY) {
    let rover = {
        direction: startDirection,
        x: posX,
        y: posY
    };

    let newPos = {
        x: posX,
        y: posY
    };

    const positionLog = [grid[newPos.y][newPos.x]]

    function leerComandos() {

        for (i = 0; i < commands.length; i++) {
            commands[i] == 'f' || commands == 'b' ? moverRover(commands[i]) : girarRover(commands[i])
        }
        console.log('positionLog: ');
        positionLog.forEach(e => console.log(e))
    }

    function moverRover(command) {

        // Pintar Rover
        pintarRover();


        if (rover.direction == 'N') {
            if (command == 'f') {
                if (analizarTerreno(command)) {
                    newPos.y--
                    console.log('Nueva posición: ' + grid[newPos.y][newPos.x]);
                    // Celda siguiente
                    let celdaSiguiente = document.getElementById(grid[newPos.y][newPos.x])
                    console.log('Celda Siguiente: ' + celdaSiguiente.innerHTML);

                    if (celdaSiguiente.innerHTML == 'X' || celdaSiguiente.innerHTML == 'R1' || celdaSiguiente.innerHTML == 'R2') {
                        console.log(`
^^^^^^^^^^^^^^^^^^^
     Obstaculo       
^^^^^^^^^^^^^^^^^^^`);
                        newPos.y++
                    }
                    console.log('-----------------------------');
                    positionLog.push(grid[newPos.y][newPos.x])
                }
            } else if (command == 'b') {
                if (analizarTerreno(command)) {
                    newPos.y++
                    console.log('Nueva posición: ' + grid[newPos.y][newPos.x]);
                    // Celda siguiente
                    let celdaSiguiente = document.getElementById(grid[newPos.y][newPos.x])
                    console.log('Celda Siguiente: ' + celdaSiguiente.innerHTML);
                    if (celdaSiguiente.innerHTML == 'X' || celdaSiguiente.innerHTML == 'R1' || celdaSiguiente.innerHTML == 'R2') {
                        console.log('^^^^^^^^^^^^^^^^^^^');
                        console.log('Obstaculo');
                        newPos.y--
                    }
                    console.log('-----------------------------');
                    positionLog.push(grid[newPos.y][newPos.x])
                } else {
                    console.log('Nueva posición: ' + grid[newPos.y][newPos.x]);
                    console.log('+++++++++++++++++++++++++++++');
                    positionLog.push(grid[newPos.y][newPos.x])
                }
            }
        }



        if (rover.direction == 'S') {
            if (command == 'f') {
                if (analizarTerreno(command)) {
                    newPos.y++
                    console.log('Nueva posición: ' + grid[newPos.y][newPos.x]);
                    // Celda siguiente
                    let celdaSiguiente = document.getElementById(grid[newPos.y][newPos.x])
                    console.log('Celda Siguiente: ' + celdaSiguiente.innerHTML);
                    if (celdaSiguiente.innerHTML == 'X' || celdaSiguiente.innerHTML == 'R1' || celdaSiguiente.innerHTML == 'R2') {
                        console.log(`
^^^^^^^^^^^^^^^^^^^
     Obstaculo       
^^^^^^^^^^^^^^^^^^^`);
                        newPos.y--
                    }
                    console.log('-----------------------------');
                    positionLog.push(grid[newPos.y][newPos.x])
                } else {
                    console.log('Nueva posición: ' + grid[newPos.y][newPos.x]);
                    console.log('+++++++++++++++++++++++++++++');
                    positionLog.push(grid[newPos.y][newPos.x])

                }
            }

            if (command == 'b') {
                if (analizarTerreno(command)) {
                    newPos.y--
                    console.log('Nueva posición: ' + grid[newPos.y][newPos.x]);
                    // Celda siguiente
                    let celdaSiguiente = document.getElementById(grid[newPos.y][newPos.x])
                    console.log('Celda Siguiente: ' + celdaSiguiente.innerHTML);
                    if (celdaSiguiente.innerHTML == 'X' || celdaSiguiente.innerHTML == 'R1' || celdaSiguiente.innerHTML == 'R2') {
                        console.log(`
^^^^^^^^^^^^^^^^^^^
     Obstaculo       
^^^^^^^^^^^^^^^^^^^`);
                        newPos.y++
                    }
                    console.log('-----------------------------');
                    positionLog.push(grid[newPos.y][newPos.x])
                } else {
                    console.log('Nueva posición: ' + grid[newPos.y][newPos.x]);
                    console.log('+++++++++++++++++++++++++++++');
                    positionLog.push(grid[newPos.y][newPos.x])
                }
            }
        }

        if (rover.direction == 'W') {
            if (command == 'f') {
                if (analizarTerreno(command)) {
                    newPos.x--
                    console.log('Nueva posición: ' + grid[newPos.y][newPos.x]);
                    // Celda siguiente
                    let celdaSiguiente = document.getElementById(grid[newPos.y][newPos.x])
                    console.log('Celda Siguiente: ' + celdaSiguiente.innerHTML);
                    if (celdaSiguiente.innerHTML == 'X' || celdaSiguiente.innerHTML == 'R1' || celdaSiguiente.innerHTML == 'R2') {
                        console.log(`
^^^^^^^^^^^^^^^^^^^
     Obstaculo       
^^^^^^^^^^^^^^^^^^^`);
                        newPos.x++
                    }
                    console.log('-----------------------------');
                    positionLog.push(grid[newPos.y][newPos.x])
                } else {
                    console.log('Nueva posición: ' + grid[newPos.y][newPos.x]);
                    console.log('+++++++++++++++++++++++++++++');
                    positionLog.push(grid[newPos.y][newPos.x])
                }
            }

            if (command == 'b') {
                if (analizarTerreno(command)) {
                    newPos.x++
                    console.log('Nueva posición: ' + grid[newPos.y][newPos.x]);
                    // Celda siguiente
                    let celdaSiguiente = document.getElementById(grid[newPos.y][newPos.x])
                    console.log('Celda Siguiente: ' + celdaSiguiente.innerHTML);
                    if (celdaSiguiente.innerHTML == 'X' || celdaSiguiente.innerHTML == 'R1' || celdaSiguiente.innerHTML == 'R2') {
                        console.log(`
^^^^^^^^^^^^^^^^^^^
     Obstaculo       
^^^^^^^^^^^^^^^^^^^`);
                        newPos.x--
                    }
                    console.log('-----------------------------');
                    positionLog.push(grid[newPos.y][newPos.x])
                } else {
                    console.log('Nueva posición: ' + grid[newPos.y][newPos.x]);
                    console.log('+++++++++++++++++++++++++++++');
                    positionLog.push(grid[newPos.y][newPos.x])

                }
            }


        }

        if (rover.direction == 'E') {
            if (command == 'f') {
                if (analizarTerreno(command)) {
                    newPos.x++
                    console.log('Nueva posición: ' + grid[newPos.y][newPos.x]);
                    // Celda siguiente
                    let celdaSiguiente = document.getElementById(grid[newPos.y][newPos.x])
                    console.log('Celda Siguiente: ' + celdaSiguiente.innerHTML);
                    if (celdaSiguiente.innerHTML == 'X' || celdaSiguiente.innerHTML == 'R1' || celdaSiguiente.innerHTML == 'R2') {
                        console.log(`
^^^^^^^^^^^^^^^^^^^
     Obstaculo       
^^^^^^^^^^^^^^^^^^^`);
                        newPos.x--
                    }
                    console.log('-----------------------------');
                    positionLog.push(grid[newPos.y][newPos.x])
                } else {
                    console.log('Nueva posición: ' + grid[newPos.y][newPos.x]);
                    console.log('+++++++++++++++++++++++++++++');
                    positionLog.push(grid[newPos.y][newPos.x])
                }
            }

            if (command == 'b') {
                if (analizarTerreno(command)) {
                    newPos.x--
                    console.log('Nueva posición: ' + grid[newPos.y][newPos.x]);
                    // Celda siguiente
                    let celdaSiguiente = document.getElementById(grid[newPos.y][newPos.x])
                    console.log('Celda Siguiente: ' + celdaSiguiente.innerHTML);
                    if (celdaSiguiente.innerHTML == 'X' || celdaSiguiente.innerHTML == 'R1' || celdaSiguiente.innerHTML == 'R2') {
                        console.log(`
^^^^^^^^^^^^^^^^^^^
     Obstaculo       
^^^^^^^^^^^^^^^^^^^`);
                        newPos.x++
                    }
                    console.log('-----------------------------');
                    positionLog.push(grid[newPos.y][newPos.x])
                } else {
                    console.log('Nueva posición: ' + grid[newPos.y][newPos.x]);
                    console.log('+++++++++++++++++++++++++++++');
                    positionLog.push(grid[newPos.y][newPos.x])

                }
            }
        }

        pintarRover();

    }



    /* Analizar Terreno */

    function analizarTerreno(direccion) {
        let posicionActual = grid[newPos.y][newPos.x];
        let direccionActual = rover.direction;
        let celdaSiguiente = document.getElementById(posicionActual)

        // if (celda == 'X') {
        //     console.log('Obstaculo!!!');

        //     return 0

        // }

        console.log('PosicionActual = ' + posicionActual);
        console.log('Direccion Rover = ' + direccionActual);

        if (direccion == 'f') {

            if (direccionActual == 'N') {
                if (grid[newPos.y - 1] && grid[newPos.y - 1].innerHTML != 'X') {
                    console.log('Puedo mover rover');
                    return 1
                } else {
                    console.log('NO puedo mover el rover / Fuera de ZONA');
                    console.log('-----------------------------');
                    return 0
                }
            }
            if (direccionActual == 'S') {

                if (grid[newPos.y + 1]) {
                    console.log('Puedo mover rover');
                    return 1
                } else {
                    console.log('NO puedo mover el rover / Fuera de ZONA');
                    console.log('-----------------------------');
                    return 0
                }
            }
            if (direccionActual == 'E') {
                if (grid[newPos.y][newPos.x + 1] && grid[newPos.y][newPos.x + 1] > 0) {
                    console.log('Puedo mover rover');
                    return 1
                } else {
                    console.log('NO puedo mover el rover / Fuera de ZONA');
                    console.log('-----------------------------');
                    return 0
                }
            }
            if (direccionActual == 'W') {
                if (grid[newPos.y][newPos.x - 1] && grid[newPos.y][newPos.x - 1] > 0) {
                    console.log('Puedo mover rover');
                    return 1
                } else {
                    console.log('NO puedo mover el rover / Fuera de ZONA');
                    console.log('-----------------------------');
                    return 0
                }
            }

        } else if (direccion == 'b') {

            if (direccionActual == 'N') {
                if (grid[newPos.y + 1] && grid[newPos.y + 1][newPos.x] > 0) {
                    console.log('Puedo mover rover');
                    return 1
                } else {
                    console.log('NO puedo mover el rover / Fuera de ZONA');
                    console.log('-----------------------------');
                    return 0
                }
            }
            if (direccionActual == 'S') {
                if (grid[newPos.y - 1] && grid[newPos.y - 1][newPos.x] > 0) {
                    console.log('Puedo mover rover');
                    return 1
                } else {
                    console.log('NO puedo mover el rover / Fuera de ZONA');
                    console.log('-----------------------------');
                    return 0
                }
            }
            if (direccionActual == 'E') {
                if (grid[newPos.y][newPos.x - 1] && grid[newPos.y][newPos.x - 1] > 0) {
                    console.log('Puedo mover rover');
                    return 1
                } else {
                    console.log('NO puedo mover el rover / Fuera de ZONA');
                    console.log('-----------------------------');
                    return 0
                }
            }
            if (direccionActual == 'W') {
                if (grid[newPos.y][newPos.x + 1] && grid[newPos.y][newPos.x + 1] > 0) {
                    console.log('Puedo mover rover');
                    return 1
                } else {
                    console.log('NO puedo mover el rover / Fuera de ZONA');
                    console.log('-----------------------------');
                    return 0
                }
            }
        }
    }

    function girarRover(commands) {

        let direccionActual = rover.direction;

        if (commands == 'r') {
            if (direccionActual == 'N') {
                rover.direction = 'E'
            } else if (direccionActual == 'E') {
                rover.direction = 'S'
            } else if (direccionActual == 'S') {
                rover.direction = 'W'
            } else if (direccionActual == 'W') {
                rover.direction = 'N'
            }
            console.log('Giro Derecha');
            console.log('·····························');


        } else if (commands == 'l') {
            if (direccionActual == 'N') {
                rover.direction = 'W'
            } else if (direccionActual == 'W') {
                rover.direction = 'S'
            } else if (direccionActual == 'S') {
                rover.direction = 'E'
            } else if (direccionActual == 'E') {
                rover.direction = 'N'
            }

            console.log('Giro Izquierda');
            console.log('·····························');
        }

    }

    function pintarRover() {
        let posRover = grid[newPos.y][newPos.x]
        let cuadriculaTabla = document.getElementById(`${posRover}`)

        if (Rover1) {
            cuadriculaTabla.innerHTML = 'R2'
            cuadriculaTabla.style.backgroundColor = 'red'
        }

        if (!Rover1) {
            cuadriculaTabla.innerHTML = 'R1'
            cuadriculaTabla.style.backgroundColor = 'green'
        }
    }

    return leerComandos(commands)




}

// function pintarTablero(table, idx) {
//     let trTable = document.getElementById('tr-table')
//     for (e = 0; e < table.length; e++) {
//         for (i = 0; i < table[idx].length; i++) {
//             trTable.innerHTML += `<td id="${table[e][i]}"></td>`
//         }
//     }
// }



// let r = new roverObject(commandsArray);


// Instancias

console.log(`ROVER 1 =>

`);
var Rover1 = new roverObject(commandsArray, 'N', 1, 7)



console.log(`

ROVER 2 =>

`);
var Rover2 = new roverObject(commandsArray2, 'S', 5, 0)





