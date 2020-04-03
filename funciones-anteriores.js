    function moverRover(command, roverDirection) {

            // Pintar Rover
            pintarRover();

            // Devuelve si es OK Terreno Celda Siguiente 
            // Se Ejecuta todo analizarTerreno() en console.log()
            // console.log(analizarTerreno(command));





            // CREAR FUNCION DE MARCHA ALANTE Y FUNCION DE MARCHA ATRÁS

            if (roverDirection == 'N') {
                if (command == 'f') {
                    if (analizarTerreno(command)) {
                        newPos.y--
                        console.log('Nueva posición: ' + grid[newPos.y][newPos.x]);
                        // Celda siguiente
                        let celdaSiguiente = document.getElementById(grid[newPos.y][newPos.x])

                        if (celdaSiguiente) {
                            console.log('Celda Siguiente: ' + celdaSiguiente.innerHTML);

                            //ESTO DENTRO DE ANALIZAR TERRENO 

                        if (celdaSiguiente.innerHTML == 'X' || celdaSiguiente.innerHTML == 'R1' || celdaSiguiente.innerHTML == 'R2') {
                            console.log(`
    ^^^^^^^^^^^^^^^^^^^
         Obstaculo       
    ^^^^^^^^^^^^^^^^^^^`);
                            newPos.y++
                        }

                        //ESTO DENTRO DE ANALIZAR TERRENO 
                        console.log('-----------------------------');
                        positionLog.push(grid[newPos.y][newPos.x])
                        } else {
                            console.log('Celda vacia');
                            newPos.y++
                        }
                    }
                } else if (command == 'b') {
                    if (analizarTerreno(command)) {
                        newPos.y++
                        console.log('Nueva posición: ' + grid[newPos.y][newPos.x]);
                        // Celda siguiente
                        let celdaSiguiente = document.getElementById(grid[newPos.y][newPos.x])

                        if (celdaSiguiente) {

                        }
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

            if (roverDirection == 'S') {
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