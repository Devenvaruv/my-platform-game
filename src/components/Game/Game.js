import React, { useState, useEffect } from 'react';
import './Game.css'
import Ladder from '../Ladder/Ladder';


const Game = () => {

  const [gameSize, setGameSize] = useState({ width: document.documentElement.clientWidth, height: document.documentElement.clientHeight * 3 });
  const screenHeight = document.documentElement.clientHeight; // 729.60 px // 1536 px
  const widhtP = (x) => {
    return gameSize.width * x / 100;
  }
  const heightP = (y) => screenHeight * y / 100;
  const pThick = heightP(0.6);
  const borderWidth = 5; // not sure about this
  const page3 = 0;
  const page2 = document.documentElement.clientHeight;
  const page1 = document.documentElement.clientHeight * 2;
  const gravity = 5;
  const [boolt, setBoolt] = useState(true); // test need to change
  const [isOnPage2, setIsOnPage2] = useState(true); // test need 
  const playerWidth = 20;// need to decide how much
  const playerHeight = 20;
  const [playerX, setPlayerX] = useState(widhtP(50));
  const [playerY, setPlayerY] = useState(page1 + heightP(99));
  const [player2X, setPlayer2X] = useState(gameSize.width * 97 / 100);
  const [player2Y, setPlayer2Y] = useState(page2 + screenHeight * 95 / 100);
  const [lightSwitch, setLightSwitch] = useState(false);
  const [playerOneButton, setPlayerOneButton] = useState(false);
  const [playerTwoButton, setPlayerTwoButton] = useState(false);
  const [timer, setTimer] = useState(null);
  const [moveDirection, setMoveDirection] = useState(null);
  const [flashlightOn, setFlashlightOn] = useState(true);
  const [playerDirection, setPlayerDirection] = useState('right');

  useEffect(() => {
    const lightY = gameSize.height - playerY;
   

  // switch(playerDirection) {
  //   case 'right':
  //     clipPath = `polygon(0% 0%, 100% 50%, 0% 100%)`;
  //     break;
  //   case 'left':
  //     clipPath = `polygon(0% 50%, 100% 0%, 100% 100%)`;
  //     break;
  //   // Add cases for 'up' and 'down' if needed
  //   default:
  //     clipPath = `polygon(0% 0%, 100% 50%, 0% 100%)`; // Default direction
  // }
    document.documentElement.style.setProperty('--lightX', `${playerX}px`);
    document.documentElement.style.setProperty('--lightY', `${lightY}px`);
    // document.documentElement.style.setProperty('--gradientAngle', clipPath);
  }, [playerX, playerY, gameSize.height, playerDirection]);

  useEffect(() => {
    // need to add player resizes and position
    const handleResize = () => {
      setGameSize({ width: document.documentElement.clientWidth, height: document.documentElement.clientHeight * 3 });
      setPlayerY(document.documentElement.clientHeight * 2 + document.documentElement.clientHeight * 89.75 / 100 + 5);// need to change

    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },);

  //steps logic
  const numberOfSteps = 60; // Number of steps in the staircase
  const stepWidth = gameSize.width * 1 / 100; // Width of each step
  const stepHeight = screenHeight * 1 / 100; // Height of each step
  const horizontalGap = 0; // Horizontal gap between steps
  const verticalGap = 0; // Vertical gap between steps

  // Starting position for the staircase
  const startX = gameSize.width * 10 / 100;
  const startY = page1;

  // Generate the platforms for each step of the staircase
  const staircasePlatforms = Array.from({ length: numberOfSteps }).map((_, index) => {
    return {
      x: startX + index * (stepWidth + horizontalGap),
      y: startY + index * (stepHeight + verticalGap),
      width: stepWidth,
      height: stepHeight
    };
  });

  const graphs = [

    // platforms for page1
    { x: 0, y: page1 + screenHeight * 90 / 100, width: gameSize.width, height: 1 },
    { x: 0, y: page1 + screenHeight * 80 / 100, width: gameSize.width, height: 1 },
    { x: 0, y: page1 + screenHeight * 70 / 100, width: gameSize.width, height: 1 },
    { x: 0, y: page1 + screenHeight * 60 / 100, width: gameSize.width, height: 1 },
    { x: 0, y: page1 + screenHeight * 50 / 100, width: gameSize.width, height: 1 },
    { x: 0, y: page1 + screenHeight * 40 / 100, width: gameSize.width, height: 1 },
    { x: 0, y: page1 + screenHeight * 30 / 100, width: gameSize.width, height: 1 },
    { x: 0, y: page1 + screenHeight * 20 / 100, width: gameSize.width, height: 1 },
    { x: 0, y: page1 + screenHeight * 10 / 100, width: gameSize.width, height: 1 },

    // Platforms for page2
    { x: 0, y: page2 + screenHeight * 90 / 100, width: gameSize.width, height: 1 },
    { x: 0, y: page2 + screenHeight * 80 / 100, width: gameSize.width, height: 1 },
    { x: 0, y: page2 + screenHeight * 70 / 100, width: gameSize.width, height: 1 },
    { x: 0, y: page2 + screenHeight * 60 / 100, width: gameSize.width, height: 1 },
    { x: 0, y: page2 + screenHeight * 50 / 100, width: gameSize.width, height: 1 },
    { x: 0, y: page2 + screenHeight * 40 / 100, width: gameSize.width, height: 1 },
    { x: 0, y: page2 + screenHeight * 30 / 100, width: gameSize.width, height: 1 },
    { x: 0, y: page2 + screenHeight * 20 / 100, width: gameSize.width, height: 1 },
    { x: 0, y: page2 + screenHeight * 10 / 100, width: gameSize.width, height: 1 },

    // Platforms for page3
    { x: 0, y: page3 + screenHeight * 90 / 100, width: gameSize.width, height: 1 },
    { x: 0, y: page3 + screenHeight * 80 / 100, width: gameSize.width, height: 1 },
    { x: 0, y: page3 + screenHeight * 70 / 100, width: gameSize.width, height: 1 },
    { x: 0, y: page3 + screenHeight * 60 / 100, width: gameSize.width, height: 1 },
    { x: 0, y: page3 + screenHeight * 50 / 100, width: gameSize.width, height: 1 },
    { x: 0, y: page3 + screenHeight * 40 / 100, width: gameSize.width, height: 1 },
    { x: 0, y: page3 + screenHeight * 30 / 100, width: gameSize.width, height: 1 },
    { x: 0, y: page3 + screenHeight * 20 / 100, width: gameSize.width, height: 1 },
    { x: 0, y: page3 + screenHeight * 10 / 100, width: gameSize.width, height: 1 },

    // Y axis Platforms
    { x: gameSize.width * 10 / 100, y: 0, width: 1, height: screenHeight * 3 },
    { x: gameSize.width * 20 / 100, y: 0, width: 1, height: screenHeight * 3 },
    { x: gameSize.width * 30 / 100, y: 0, width: 1, height: screenHeight * 3 },
    { x: gameSize.width * 40 / 100, y: 0, width: 1, height: screenHeight * 3 },
    { x: gameSize.width * 50 / 100, y: 0, width: 1, height: screenHeight * 3 },
    { x: gameSize.width * 60 / 100, y: 0, width: 1, height: screenHeight * 3 },
    { x: gameSize.width * 70 / 100, y: 0, width: 1, height: screenHeight * 3 },
    { x: gameSize.width * 80 / 100, y: 0, width: 1, height: screenHeight * 3 },
    { x: gameSize.width * 90 / 100, y: 0, width: 1, height: screenHeight * 3 },
  ]



  const intObjects = [
    { x: 0, y: page1 + 5, width: widhtP(3.25), height: heightP(10) - 5 },//light switch 0
    { x: widhtP(17.5), y: page2 + heightP(40) + 5, width: widhtP(2.5), height: heightP(5) }, //playerone button 1
    { x: widhtP(97.5), y: page2 + heightP(40) + 5,  width: widhtP(2.5), height: heightP(5)}, // playertwo button 
    { x: widhtP(22.5), y: page2 + 5, width: widhtP(0.3), height: heightP(7.5) - 5 }, // door 1
    { x: widhtP(77.2), y: page2 + 5, width: widhtP(0.3), height: heightP(7.5) - 5 }, // door 2

  ]

  const teleporters = [
    { x: widhtP(5), y: page1 + 5, width: widhtP(2), height: screenHeight * 5 / 100 - 5 }
  ]

  const platforms = [
    // page no 1

    { x: 0, y: page1, width: gameSize.width, height: 5 },// base
    { x: 0, y: page1 + screenHeight * 90 / 100, width: gameSize.width * 75 / 100, height: pThick }, // header part 1
    { x: gameSize.width * 77.5 / 100, y: page1 + screenHeight * 90 / 100, width: gameSize.width * 22.5 / 100, height: 5 }, // header part 2
    { x: gameSize.width * 70 / 100, y: page1 + screenHeight * 60 / 100, width: gameSize.width * 30 / 100, height: 5 }, // ladder base

    // page no 2
    { x: 0, y: page2, width: gameSize.width, height: 5 },// base
    { x: 0, y: page2 + heightP(40), width: gameSize.width, height: 5 },
    { x: widhtP(20), y: page2 + heightP(40), width: 5, height: heightP(60) },
    { x: widhtP(80), y: page2 + heightP(40), width: 5, height: heightP(60) },
    { x: widhtP(22.5), y: page2 + heightP(7.5), width: widhtP(2.5), height: heightP(22.5) },
    { x: widhtP(75), y: page2 + heightP(7.5), width: widhtP(2.5), height: heightP(22.5) },
    { x: widhtP(25), y: page2 + heightP(7.5), width: widhtP(50), height: heightP(2.5) },
    { x: widhtP(18.5), y: page2, width: widhtP(0.5), height: heightP(40) },
    { x: widhtP(81), y: page2, width: widhtP(0.5), height: heightP(40) },

    //page 2 seats
    { x: widhtP(50), y: page2 + heightP(11), width: widhtP(0.2), height: heightP(3) },
    { x: widhtP(53), y: page2 + heightP(11), width: widhtP(0.2), height: heightP(3) },
    { x: widhtP(50), y: page2 + heightP(11), width: widhtP(3), height:widhtP(0.2) },


    //page no 3
    { x: widhtP(5), y: page3 + heightP(30), width: widhtP(90), height:widhtP(0.3) },


    // title space
    // { x: widhtP(2.5), y: page2 + heightP(90), width: widhtP(15), height: heightP(5) },
    // maze
    //part 1
    { x: widhtP(5), y: page2 + heightP(45), width: 5, height: heightP(5) },
    { x: widhtP(5), y: page2 + heightP(70), width: 5, height: heightP(5) },
    { x: widhtP(5), y: page2 + heightP(80), width: 5, height: heightP(5) },
    { x: widhtP(5), y: page2 + heightP(90), width: 5, height: heightP(5) },
    //part 2
    { x: widhtP(10), y: page2 + heightP(50), width: 5, height: heightP(25) },
    { x: widhtP(10), y: page2 + heightP(85), width: 5, height: heightP(5) },
    { x: widhtP(10), y: page2 + heightP(95), width: 5, height: heightP(5) },
    // part3
    { x: widhtP(15), y: page2 + heightP(55), width: 5, height: heightP(10) },
    { x: widhtP(15), y: page2 + heightP(75), width: 5, height: heightP(5) },
    { x: widhtP(15), y: page2 + heightP(90), width: 5, height: heightP(5) },

    // partx written by y increases
    { x: widhtP(10), y: page2 + heightP(45), width: widhtP(10), height: 5 },
    { x: widhtP(5), y: page2 + heightP(50), width: widhtP(10), height: 5 },
    { x: widhtP(5), y: page2 + heightP(55), width: widhtP(5), height: 5 },
    { x: widhtP(15), y: page2 + heightP(55), width: widhtP(5), height: 5 },

    { x: widhtP(0), y: page2 + heightP(60), width: widhtP(5), height: 5 },
    { x: widhtP(0), y: page2 + heightP(65), width: widhtP(10), height: 5 },
    { x: widhtP(15), y: page2 + heightP(70), width: widhtP(5), height: 5 },
    { x: widhtP(5), y: page2 + heightP(75), width: widhtP(5), height: 5 },

    { x: widhtP(5), y: page2 + heightP(80), width: widhtP(10), height: 5 },
    { x: widhtP(0), y: page2 + heightP(85), width: widhtP(5), height: 5 },
    { x: widhtP(10), y: page2 + heightP(85), width: widhtP(5), height: 5 },
    { x: widhtP(5), y: page2 + heightP(90), width: widhtP(5), height: 5 },

    { x: widhtP(0), y: page2 + heightP(95), width: widhtP(5), height: 5 },
    { x: widhtP(10), y: page2 + heightP(95), width: widhtP(5), height: 5 },

    // maze
    // part 1
    { x: widhtP(85), y: page2 + heightP(45), width: pThick, height: heightP(5) },
    { x: widhtP(85), y: page2 + heightP(70), width: pThick, height: heightP(5) },
    { x: widhtP(85), y: page2 + heightP(80), width: pThick, height: heightP(5) },
    { x: widhtP(85), y: page2 + heightP(90), width: pThick, height: heightP(5) },

    // part 2
    { x: widhtP(90), y: page2 + heightP(50), width: pThick, height: heightP(25) },
    { x: widhtP(90), y: page2 + heightP(85), width: pThick, height: heightP(5) },
    { x: widhtP(90), y: page2 + heightP(95), width: pThick, height: heightP(5) },

    // part 3
    { x: widhtP(95), y: page2 + heightP(55), width: pThick, height: heightP(10) },
    { x: widhtP(95), y: page2 + heightP(75), width: pThick, height: heightP(5) },
    { x: widhtP(95), y: page2 + heightP(90), width: pThick, height: heightP(5) },

    // part x
    { x: widhtP(90), y: page2 + heightP(45), width: widhtP(10), height: pThick },
    { x: widhtP(85), y: page2 + heightP(50), width: widhtP(10), height: pThick },
    { x: widhtP(85), y: page2 + heightP(55), width: widhtP(5), height: pThick },
    { x: widhtP(95), y: page2 + heightP(55), width: widhtP(5), height: pThick },

    { x: widhtP(80), y: page2 + heightP(60), width: widhtP(5), height: pThick },
    { x: widhtP(80), y: page2 + heightP(65), width: widhtP(10), height: pThick },
    { x: widhtP(95), y: page2 + heightP(70), width: widhtP(5), height: pThick },
    { x: widhtP(85), y: page2 + heightP(75), width: widhtP(5), height: pThick },

    { x: widhtP(85), y: page2 + heightP(80), width: widhtP(10), height: pThick },
    { x: widhtP(80), y: page2 + heightP(85), width: widhtP(5), height: pThick },
    { x: widhtP(90), y: page2 + heightP(85), width: widhtP(5), height: pThick },
    { x: widhtP(85), y: page2 + heightP(90), width: widhtP(5), height: pThick },

    { x: widhtP(80), y: page2 + heightP(95), width: widhtP(5), height: pThick },
    { x: widhtP(90), y: page2 + heightP(95), width: widhtP(5), height: pThick },







    // page no 3
    { x: 0, y: page3, width: gameSize.width, height: 5 },// base

    ...staircasePlatforms // stairs are included in platforms
  ];

  const ladders = [
    { x: gameSize.width * 75 / 100, y: page1 + screenHeight * 60 / 100, width: gameSize.width * 2.5 / 100, height: screenHeight * 30 / 100 + platforms[1].height },
  ];

  // dont know what handlekeydown and up do
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
          e.preventDefault(); // Prevent default scrolling behavior
        }
        setMoveDirection(e.key);
      }
      if (e.key === 'ArrowLeft') {
        setPlayerDirection('left');
      } else if (e.key === 'ArrowRight') {
        setPlayerDirection('right');
      }
    };

    

    const handleKeyUp = (e) => {
      if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
        setMoveDirection(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const scrollOnePage = () => {
    window.scrollBy({
      top: page2, // Scroll down by one page// page2
      behavior: 'smooth' // Optional: for smooth scrolling
    });
  };

  const checkInteractions = () => {
    // Assuming playerWidth and playerHeight define the size of the player
    const playerRight = playerX + playerWidth;
    const playerBottom = playerY - playerHeight; // Assuming Y increases downwards

    if ((playerRight >= intObjects[0].x && playerX <= intObjects[0].x + intObjects[0].width &&
      playerBottom <= intObjects[0].y && playerY >= intObjects[0].y - intObjects[0].height) && !lightSwitch) {
        // optional change the img or add annimations
      setLightSwitch(true);
      scrollOnePage();

      setPlayerX(0);
      setPlayerY(page2 + screenHeight - 40);

    }
    if ((playerRight >= intObjects[1].x && playerX <= intObjects[1].x + intObjects[1].width &&
      playerBottom <= intObjects[1].y && playerY >= intObjects[1].y - intObjects[1].height) && !playerOneButton) {
      setPlayerOneButton(true);
    }

    if ((player2X + playerWidth >= intObjects[2].x && player2X <= intObjects[2].x + intObjects[2].width &&
      player2Y - playerHeight <= intObjects[2].y && player2Y >= intObjects[2].y - intObjects[2].height) && !playerTwoButton) {
      setPlayerTwoButton(true);
    }
   
    if (playerRight >= intObjects[3].x && playerX <= intObjects[3].x + intObjects[3].width &&
      playerBottom <= intObjects[3].y && playerY >= intObjects[3].y - intObjects[3].height) {
      setPlayerX(widhtP(30));
      setPlayerY(page3 + heightP(30));  
      scrollOnePage();
    }

    if (playerRight >= intObjects[4].x && playerX <= intObjects[4].x + intObjects[4].width &&
      playerBottom <= intObjects[4].y && playerY >= intObjects[4].y - intObjects[4].height) {
        setPlayerX(widhtP(30));
        setPlayerY(page3 + heightP(30));  
        scrollOnePage();
    }


  };

  const updateGame = () => {
    let newX = playerX;
    let newY = playerY;

    let new2X = player2X;
    let new2Y = player2Y;

    switch (moveDirection) {
      case 'ArrowLeft':
        newX = Math.max(borderWidth, playerX - 10);
        new2X = Math.min(gameSize.width - playerWidth - borderWidth * 2, player2X + 10);
       
        break;
      case 'ArrowRight':
        newX = Math.min(gameSize.width - playerWidth - borderWidth * 2, playerX + 10);
        new2X = Math.max(borderWidth, player2X - 10);
       
        break;
      case 'ArrowDown':
        newY = Math.max(borderWidth, playerY - 10);
        new2Y = Math.min(gameSize.height - playerHeight - borderWidth * 2, player2Y + 10);
        break;
      case 'ArrowUp':
        newY = Math.min(gameSize.height - playerHeight - borderWidth * 2, playerY + 10);
        new2Y = Math.max(borderWidth, player2Y - 10);
        break;
      default:
        break;
    }

    const onPlatform1 = platforms.some(platform => {
      return (
        newX < platform.x + platform.width &&
        newX + playerWidth > platform.x &&
        newY < platform.y + platform.height &&
        newY + playerHeight > platform.y
      );
    });

    if (!onPlatform1) {
      setPlayerX(newX);
      setPlayerY(newY);
    }


    const onPlatform2 = platforms.some(platform => {
      return (
        new2X < platform.x + platform.width &&
        new2X + playerWidth > platform.x &&
        new2Y < platform.y + platform.height &&
        new2Y + playerHeight > platform.y
      );
    });

    if (!onPlatform2) {
      setPlayer2X(new2X);
      setPlayer2Y(new2Y);
    }
    const onPlatformVertically = platforms.some(platform => {
      return (
        playerX < platform.x + platform.width &&
        playerX + playerWidth > platform.x &&
        newY < platform.y + platform.height &&
        newY + playerHeight > platform.y
      );
    });

    if (!onPlatformVertically && moveDirection === 'ArrowDown') {
      setPlayerY(newY);
    }

    if (playerY > page1) { // only allows gravity if player is on page1
      applyGravity();
    }

    



    if (playerX >= 10000 && boolt === true) { // hardcoded will change it later
      setBoolt(false);
      scrollOnePage();

      setPlayerX(0);
      setPlayerY(page2 + screenHeight - 40);

    }
   
    checkInteractions();
  };

  useEffect(() => {
    const gameLoop = setInterval(updateGame, 10); // Adjust interval as needed

    return () => {
      clearInterval(gameLoop);
    };
  }, [playerX, playerY, moveDirection, gameSize, borderWidth, playerWidth, playerHeight]);

  const checkButtonsAndAct = () => {
    if (playerOneButton && playerTwoButton) {
      // Do something immediately if both buttons are true
      
      setPlayerX(widhtP(50));
      setPlayerY(page2 + heightP(20));
      setPlayer2X(widhtP(50));
      setPlayer2Y(page1 + heightP(10));
      // Clear any existing timer
      clearTimeout(timer);
      setTimer(null);
    } else if (!timer) {
      // Start a timer only if it's not already running
      const newTimer = setTimeout(() => {
        // Reset both buttons after 3 seconds if not already true
        setPlayerOneButton(false);
        setPlayerTwoButton(false);
      }, 3000);

      setTimer(newTimer);
    }
  };


  useEffect(() => {
    checkButtonsAndAct();

    return () => {
      // Clear the timer when the component is unmounted or any button state changes
      clearTimeout(timer);
    };
  }, [playerOneButton, playerTwoButton]);





  const applyGravity = () => {
    let newY = playerY - gravity; // The player moves down due to gravity

    const onPlatformn = platforms.some(platform => { //checks if platform
      const withinXBounds = playerX < platform.x + platform.width && playerX + playerWidth > platform.x;
      const landedOnTop = newY < platform.y + platform.height && newY + playerHeight > platform.y;
      return withinXBounds && landedOnTop;
    });

    const onLadder = ladders.some(ladder => { // checks if ladder
      const withinXBounds = playerX < ladder.x + ladder.width && playerX + playerWidth > ladder.x;
      const withinYBounds = playerY < ladder.y + ladder.height && playerY + playerHeight > ladder.y;
      return withinXBounds && withinYBounds;
    });

    if (onLadder) {
      // Gravity is disabled when on a ladder
      // return nothing
      return;
    }

    newY = Math.max(borderWidth, newY); // prevent falling through border

    if (!onPlatformn) {
      setPlayerY(newY); // applys gravity
    }

  };


  return (
    <div className={'no-scrollbar flashlight-on darkness-layer'} style={{ width: gameSize.width, height: gameSize.height }}>
    
      {graphs.map((graph, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            left: `${graph.x}px`,
            bottom: `${graph.y}px`,
            width: `${graph.width}px`,
            height: `${graph.height}px`,
            backgroundColor: 'black',
          }}
        />
      ))}
      <img
        src='https://i.pinimg.com/originals/9a/35/d6/9a35d6b50aaea74a80052640850d86d3.png' // Replace 'player-icon.png' with the path to your image
        alt='Player'
        style={{
          position: 'absolute',
          left: `${playerX}px`,
          bottom: `${playerY}px`,
          width: playerWidth,
          height: playerHeight,
        }}
      />
      <img
        src='./temp.png' // project img
        alt='Player'
        style={{
          position: 'absolute',
          left: widhtP(20),
          bottom: page2 + heightP(40),
          width: widhtP(60),
          height: heightP(60),
        }}
      />
      {/* <img
        src='./ds.jpg' // background image to be added
        alt='Playerx'
        style={{
          position: 'absolute',
          left: widhtP(0),
          bottom: page1 + heightP(0),
          width: widhtP(100),
          height: heightP(100),
        }}
      /> */}


      {isOnPage2 && <img
        src='https://i.pinimg.com/originals/9a/35/d6/9a35d6b50aaea74a80052640850d86d3.png' // Replace 'player-icon.png' with the path to your image
        alt='Player'
        style={{
          position: 'absolute',
          left: `${player2X}px`,
          bottom: `${player2Y}px`,
          width: widhtP(1.6),
          height: widhtP(1.6),
        }}
      />}
      {platforms.map((platform, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            left: `${platform.x}px`,
            bottom: `${platform.y}px`,
            width: `${platform.width}px`,
            height: `${platform.height}px`,
            backgroundColor: 'red',
          }}
        />
      ))}

      {intObjects.map((intObject, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            left: `${intObject.x}px`,
            bottom: `${intObject.y}px`,
            width: `${intObject.width}px`,
            height: `${intObject.height}px`,
            backgroundColor: 'yellow',
          }}
        />
      ))}
      {teleporters.map((teleporter, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            left: `${teleporter.x}px`,
            bottom: `${teleporter.y}px`,
            width: `${teleporter.width}px`,
            height: `${teleporter.height}px`,
            backgroundColor: 'blue',
          }}
        />
      ))}
      {ladders.map((ladder, index) => (
        <Ladder key={index} {...ladder} />
      ))}
      {/* <div className="directional-flashlight" style={{
        position: 'absolute',
        left:`${playerX + playerWidth/2}px`,
        bottom: `${playerY - heightP(3.5)}px`,//found darkness-layer solution. hint bottom is without page1
        width: widhtP(10),
        height: heightP(10),
      }}></div> */}

      <p
        style={{
          position: 'absolute',
          left: widhtP(30),
          bottom: page3 + heightP(60),
          width: widhtP(60),
          height: widhtP(1.6),
        }}
      > Thank you so much for playing my game/viewing my portfolio/visiting my website/waisting your time</p>

      </div>
  );
};

export default Game;

// FOR Header: devweber = 2 unit home work contact 3 unit from last


// Ladder: x = last 3rd unit other half 25% unit



// electric board: x= 65% of 0.5 unit, y = 1 unit
// trapdoor: x= 35% of 0.5 unit + 15% of  other 0.5 unit

// staircase: x= 2nd unit

// to do for tomorrow: make page2 maze


// tmr make the yellow button finctional and make a seat for the player done
// make the door functional? done

// make the website completely resposive
// start drawing the game icons and logos
// make the character spritesheet
// add the standard website things such as headers and stuff
// add layers to give the illusion of darkness



// level 2
// animations? 
// add flashlight



// to be used in future {/* <div class="lit-square" style={{
        //   position: 'absolute',
        //   left: widhtP(70),
        //   bottom: heightP(30),
        //   width: widhtP(56),
        //   height: heightP(5),
        // }}></div> */}

      {/* <div class="permanent-light" style={{
        position: 'absolute',
        left: widhtP(70),// cool door effect. will use it for cinema doors uncrease width
        bottom: heightP(30),
        width: widhtP(5),
        height: heightP(5),
      }}></div> */}
      {/* <div className="permanent-light" style={{
        left: widhtP(60),
        bottom: heightP(20),//found darkness-layer soulution. hint bottom is without page1
        width: widhtP(1),
        height: heightP(1),
      }}></div>
      <div className="permanent-light" style={{
        left: widhtP(61),
        bottom: heightP(20),//found darkness-layer soulution. hint bottom is without page1
        width: widhtP(2),
        height: heightP(2),
      }}></div> */}
      // <div className="permanent-light" style={{
      //   position: "absolute",
        
      //   left:`${playerX}px`,
      //   bottom: `${playerY}px`,//found darkness-layer soulution. hint bottom is without page1
      //   width: widhtP(6),
      //   height: heightP(15),
      // }}></div>
       
     


      {/* <div className='flashlight-beam'  style={{
        left: widhtP(60),
        bottom: heightP(20),//found darkness-layer soulution. hint bottom is without page1
        width: widhtP(1),
        height: heightP(1),
      }}></div> */}