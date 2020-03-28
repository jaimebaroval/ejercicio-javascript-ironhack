// Rover 1 Object Goes Here
// ======================

let rover = {
    direction:"N",
    x: 0,
    y: 0
  };
  
  let newPos = [ {
    positionX: 0,
    positionY: 0
  }
  ];
  
  let travelLog = [ {
      x: 0,
      y: 0
    },     
  ];
  
  let commands = "rffrfflfrff";
  
  // Rover 2 Object Goes Here
  // ======================
  
  let rover2 = {
    direction:"N",
    x: 5,
    y: 5
  };
  
  let newPos2 = [ {
    positionX: 5,
    positionY: 5
  }
  ];
  
  let travelLog2 = [ {
      x: 5,
      y: 5
    },     
  ];
  
  let commands2 = "ffflfffffrrfff";
  
  
  /* CREAR UN ARRAY DE OBJETOS CON LOS DATOS DE LOS DIFERENTES ROVERS. RECORRER EL ARRAY HASTA QUE SE ACABE.
  INTERCALAR POSICIONES EN UN ARRAY DE TURNOS. */
  
  
  
  
  // 1 => Obstacle
  let grid = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]
  
  console.log(`
  ---------------------
  --- START ROVER 1 ---
  ---------------------
  `);
  
  //console.log(newPos[0].positionX + ' - ' + newPos[0].positionY);
  
  // ======================
  
  function turnLeft(theRover) {
    console.log("turnLeft was called!");
    
    switch (theRover.direction) {
      case "N": 
        theRover.direction = "W";
        break;
      case "W":
        theRover.direction = "S";
        break;
      case "S":
        theRover.direction = "E";
        break;
      case "E":
        theRover.direction = "N";
        break;
    }
    
    console.log(theRover.direction);
    console.log(`x: ${theRover.x} y: ${theRover.y}`);
  };
  
  
  function turnRight(theRover){
    console.log("turnRight was called!");
    
    switch (theRover.direction) {
      case "N": 
        theRover.direction = "E";
        break;
      case "W":
        theRover.direction = "N";
        break;
      case "S":
        theRover.direction = "W";
        break;
      case "E":
        theRover.direction = "S";
        break;
    }
    console.log(theRover.direction);
    console.log(`rover.x: ${theRover.x} rover.y: ${theRover.y}`);
  }
  
  
  function moveForward(theRover) {
    
    //Print Road
      posBeforeMove = `${theRover.x}${theRover.y}`;
      beforeMove = document.getElementById(posBeforeMove);
      beforeMove.innerHTML = '-';
    
    console.log("moveForward was called");
    
    obstacle = reportObstaclesForward(theRover.x, theRover.y, theRover.direction);
    console.log(obstacle);
    
    if (obstacle === 1) {
      console.log('OBSTACLE!!!***')
      return;
    }
    // check Direction
      switch (theRover.direction) {                 
        case "N": 
          if (theRover.y > 0) {
            theRover.y--;
          } else {
            console.log('Out of table!');
          }
          break;
        case "E":
          if (theRover.x < 10) {
            theRover.x++;
          } else {
            console.log('Out of table!');
          }
          break;
        case "S":
          if (theRover.y < 10) {
            theRover.y++;
          } else {
            console.log('Out of table!');
          }
          break;
        case "W":
          if (theRover.x > 0) {
            theRover.x--;
          } else {
            console.log('Out of table!');
          }
          break;
      }
      //Save Position
      newPos = {positionX: theRover.x, positionY: theRover.y};
      //Push Position
      travelLog.push(newPos);
      
      //Print Road
      posAfterMove = `${theRover.x}${theRover.y}`;
      afterMove = document.getElementById(posAfterMove);
      afterMove.innerHTML = '&copy;';
  
      //console.log('PositionID:' + positionOnTable);
      console.log(theRover.direction);
      console.log(`rover.x: ${theRover.x} rover.y: ${theRover.y}`);
    //} else {
    //  console.log('OBSTACLE!!');
    //}
  }
  
  function moveBackward (theRover) {
    console.log("moveBackward was called");
    
    switch (theRover.direction) {
      case "S": 
        if (theRover.y > 0) {
          theRover.y--;
        } else {
          console.log('Out of table!');
        }
        break;
      case "W":
        if (theRover.x < 10) {
          theRover.x++;
        } else {
          console.log('Out of table!');
        }
        break;
      case "N":
        if (theRover.y < 10) {
          theRover.y++;
        } else {
          console.log('Out of table!');
        }
        break;
      case "E":
        if (theRover.x > 0) {
          theRover.x--;
        } else {
          console.log('Out of table!');
        }
        break;
    }
    newPos = {x:theRover.x, y:theRover.y};
    travelLog.push(newPos);
    console.log(theRover.direction);
    console.log(`rover.x: ${theRover.x} rover.y: ${theRover.y}`);
  }
  
  function readCommands (commands) {
      for (let i=0; i < commands.length; i++) {
        if (commands[i] == "l" || commands[i] == "r" || commands[i] == "f" || commands[i] == "b") {
          switch (commands[i]) {
            case "l":
              turnLeft(rover);
              break;
            case "r":
              turnRight(rover);
              break;
            case "f":
              moveForward(rover);
              break;
            case "b":
              moveBackward(rover);
              break;
          }
          
          if (i < commands.length - 1) {
            console.log(`
  -------------------------
  --- NEXT MOVE ROVER ---
  -------------------------
  `);
          }  
          
      } else {
          console.log('Bad Command!');
        }    
    }  
  }
  
  
  function readCommands2 (commands) {
      for (let i=0; i < commands.length; i++) {
        if (commands[i] == "l" || commands[i] == "r" || commands[i] == "f" || commands[i] == "b") {
          switch (commands[i]) {
            case "l":
              turnLeft(rover2);
              break;
            case "r":
              turnRight(rover2);
              break;
            case "f":
              moveForward(rover2);
              break;
            case "b":
              moveBackward(rover2);
              break;
          }
          
          if (i < commands.length - 1) {
            console.log(`
  -------------------------
  --- NEXT MOVE ROVER ---
  -------------------------
  `);
          }  
          
      } else {
          console.log('Bad Command!');
        }    
    }  
  }
  
  
  function reportObstaclesForward(posX, posY, direction) {
    
    switch (direction) {
      case 'N':
        if (grid[posX][posY - 1]) {
          return 1;
        } else {
          return 0;
        }
      case 'S':
        console.log(grid[posX]);
        console.log('Next Pos: ' + grid[posX][posY + 1]);
        if (grid[posX][posY + 1]) {
          return 1;
        } else {
          return 0;
        }
      case 'E':
        console.log(grid[posX]);
        console.log('Next Pos: ' + grid[posX + 1][posY]);
        if (grid[posX + 1][posY]) {
          return 1;
        } else {
          return 0;
        }
      case 'W':
        if (grid[posX - 1][posY]) {
          return 1;
        } else {
          return 0;
        }
    }
  }
  
  readCommands (commands);
  readCommands2 (commands2);
  
  console.log(`
  ---------------------
  --- START ROVER 2 ---
  ---------------------
  `);
  
  
  /* READCOMMANDS tiene que recorrer las posiciones y actualizar un array de posición en los números impares 
     
  
  
  /*
  // Delay Rover Moves
  
  var i = 1;                     //  set your counter to 1
  
  function myLoop () {           //  create a loop function
     setTimeout(function () {    //  call a 3s setTimeout when the loop is called
        console.log('hello');          //  your code here
        i++;                     //  increment the counter
        if (i < 2) {            //  if the counter < 10, call the loop function
           myLoop();             //  ..  again which will trigger another 
        }                        //  ..  setTimeout()
     }, 1000);
  }
  
  myLoop(); 
  
  
  (function myLoop (i) {          
     setTimeout(function () {   
        console.log('adios');          //  your code here                
        if (--i) myLoop(i);      //  decrement i and call myLoop again if i > 0
     }, 1000)
  })(3); 
  */
  
  
  //readCommands (commands2);
  
  