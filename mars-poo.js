// POO

const grid = [
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

const obstaculos = [74, 11, 24, 92, 89, 84, 61, 17, 43]

const commandsArray = ['f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'r', 'f', 'f', 'l', 'f', 'f', 'f', 'r', 'f', 'f', 'f', 'r', 'f', 'l', 'f', 'f', 'f'];
// let commandsArray = ['b', 'b', 'b', 'b', 'b', 'b', 'l', 'f'];

const commandsArray2 = ['f', 'f', 'f', 'l', 'f', 'f', 'f', 'f', 'l', 'f', 'f', 'f', 'l', 'f', 'f', 'f', 'f', 'r', 'f', 'f', 'f', 'f', 'f', 'r', 'f', 'f', 'l', 'f', 'f'];

const commandsTurns = []



function tableCreate() {
    //body reference 
    var body = document.getElementsByTagName("body")[0];

    // create elements <table> and a <tbody>
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
    tbl.setAttribute('class', 'mars')


    // cells creation
    for (var j = 0; j < 10; j++) {
        // table row creation
        var row = document.createElement("tr");
        // row.setAttribute("id", j);


        for (var i = 0; i < 10; i++) {

            let idNum = parseFloat((j).toString() + (i))
            var cell = document.createElement("td");
            cell.setAttribute("class", "cell")
            if (j != 0 && i != 0) {
                cell.setAttribute("id", idNum);
            }
            if (j == 0 || i == 0) {
                //Pintar numeros
                var cellText = j >= 1 ? document.createTextNode(j) : document.createTextNode(i)
                cell.appendChild(cellText);
            } else {
                var cellText = document.createTextNode('0')
                cell.appendChild(cellText);
            }

            // Pintar Obstáculos
            obstaculos.forEach(function (obs) {
                if (obs == grid[j][i]) {
                    cell.style.backgroundColor = 'blue'
                    cell.innerHTML = 'X'
                }
            })

            row.appendChild(cell);
        }

        //row added to end of table body
        tblBody.appendChild(row);
    }

    // append the <tbody> inside the <table>
    tbl.appendChild(tblBody);
    // put <table> in the <body>
    body.appendChild(tbl);
    // tbl border attribute to 
    tbl.setAttribute("border", "1");

    // console.log(body);

}

tableCreate();



// Object roverObject()

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

    let fueraTabla = false;

    const positionLog = []

    function leerComandos() {

        for (i = 0; i < commands.length; i++) {
            commands[i] == 'f' || commands[i] == 'b' ? moverRover(commands[i], rover.direction) : girarRover(commands[i], rover.direction)
        }
        console.log('positionLog: ');
        positionLog.forEach(e => console.log(e))
    }

    // MOVER POR TURNOS UTILIZANDO attribute.lenght PARA cualquier cantidad de  ROVERS 


    function moverRover(command, roverDirection) {

        positionLog.push(grid[newPos.y][newPos.x])

        pintarRover();

        let analisisCelda = analizarTerreno(command, roverDirection)

        // Girar
        if (command == 'l' || command == 'r') {

            girarRover(command, roverDirection)


        }

        if (analisisCelda) {

            console.log('Posición actual: ' + grid[newPos.y][newPos.x]);

            //Avanzar
            if (command == 'f') {
                avanzar(roverDirection)
            } else if (command == 'b') {
                retroceder(roverDirection)
            }

        }



        pintarRover();
    }

    function avanzar(roverDirection) {
        if (roverDirection == 'N' || roverDirection == 'S') {
            roverDirection == 'N' ? newPos.y-- : newPos.y++
            //Log()
            roverDirection == 'N' ? console.log('AVANZAR NORTE') : console.log('AVANZAR SUR')
            console.log('Nueva posición: ' + grid[newPos.y][newPos.x]);
            console.log('-----------------------------');
        } else if (roverDirection == 'E' || roverDirection == 'W') {
            roverDirection == 'E' ? newPos.x++ : newPos.x--
            //Log()
            roverDirection == 'E' ? console.log('AVANZAR ESTE') : console.log('AVANZAR OESTE')
            console.log('Nueva posición: ' + grid[newPos.y][newPos.x]);
            console.log('-----------------------------');
        }

    }

    function retroceder(roverDirection) {
        if (roverDirection == 'N' || roverDirection == 'S') {
            roverDirection == 'N' ? newPos.y++ : newPos.y--
            //Log()
            roverDirection == 'N' ? console.log('RETROCEDER NORTE') : console.log('RETROCEDER SUR')
            console.log('Nueva posición: ' + grid[newPos.y][newPos.x]);
            console.log('-----------------------------');
        } else if (roverDirection == 'E' || roverDirection == 'W') {
            roverDirection == 'E' ? newPos.x-- : newPos.x++
            //Log()
            roverDirection == 'E' ? console.log('RETROCEDER ESTE') : console.log('RETROCEDER OESTE')
            console.log('Nueva posición: ' + grid[newPos.y][newPos.x]);
            console.log('-----------------------------');
        }
    }

    function girarRover(commands, roverDirection) {

        let direccionActual = roverDirection;

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

    function analizarTerreno(command, roverDirection) {

        let posicionActual = grid[newPos.y][newPos.x]
        let nuevaPosicion
        let celdaSiguiente




        if (command == 'f' && grid[newPos.y][newPos.x] != null) {

            console.log(grid[newPos.y][newPos.x] < 90);
            console.log(posicionActual);


            nuevaPosicion =
                roverDirection == 'N' ? grid[newPos.y - 1][newPos.x] :
                    roverDirection == 'S' && grid[newPos.y][newPos.x] < 90 ? grid[newPos.y + 1][newPos.x] :
                        roverDirection == 'E' && grid[newPos.y][newPos.x] < 90 ? grid[newPos.y][newPos.x + 1] :
                            roverDirection == 'W' ? grid[newPos.y][newPos.x - 1] :
                                null;


        } else if (command == 'b') {

            nuevaPosicion =
                roverDirection == 'N' && grid[newPos.y][newPos.x] < 90 ? grid[newPos.y + 1][newPos.x] :
                    roverDirection == 'S' ? grid[newPos.y - 1][newPos.x] :
                        roverDirection == 'E' ? grid[newPos.y][newPos.x - 1] :
                            roverDirection == 'W' && grid[newPos.y][newPos.x] < 90 ? grid[newPos.y][newPos.x + 1] :
                                null;

        }







        celdaSiguiente = document.getElementById(nuevaPosicion)

        if (celdaSiguiente) {
            if (celdaSiguiente.innerHTML != 'X' && celdaSiguiente.innerHTML != 'R1' && celdaSiguiente.innerHTML != 'R2') {
                celdaSiguiente ? console.log('Celda Siguiente: ' + 'OK: ' + celdaSiguiente.innerHTML) : console.log('Celda Fuera de CUADRO');
                console.log('Puedo mover rover');
                return 1
            } else {
                console.log(celdaSiguiente.innerHTML);
                celdaSiguiente.innerHTML == 'X' ? console.log('Obstaculo') : console.log('ROVER DELANTE');
                console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
                return 0
            }
        } else {
            console.log('NO puedo mover el rover / Fuera de ZONA');
            console.log('-----------------------------');
            return 0
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

// Instancias

console.log(`ROVER 1 =>

`);
var Rover1 = new roverObject(commandsArray, 'E', 6, 5)

console.log(`

ROVER 2 =>

`);
var Rover2 = new roverObject(commandsArray2, 'W', 6, 4) // Rover 2 Cae sobre Rover 1



function avancePorTurnos() {

    console.log('Array 1: ');

    // commandsArray.forEach(k => {
    //     commandsArray2.forEach(i => {
    //         console.log(i, k)
    //     });
    // };

    commandsArray.forEach((num1, index) => {
        const num2 = commandsArray2[index];
        commandsTurns.push(num1)
        commandsTurns.push(num2)
    });

    // commandsArray.forEach(function (e, idx) {
    //         console.log('[' + idx + ']' + commandsArray[idx] + ' ')

    // })



    // commandsArray2.forEach(function (i) {
    //     commandsTurns.push(i)
    // })

    console.log(commandsTurns);

}

avancePorTurnos()
