import React, { useState, useEffect } from 'react';
import './Game.css'
import Ladder from '../Ladder/Ladder';

const Game = () => {
  const [gameSize, setGameSize] = useState({ width: document.documentElement.clientWidth, height: document.documentElement.clientHeight * 3 }); // 729.60 px // 1536 px
  const widthP = (x) => gameSize.width * x / 100;
  const heightP = (y) => gameSize.height * y / 300;
  const borderWidth = 5; // not sure about this // need to remove this
  const page3 = 0;
  const page2 = document.documentElement.clientHeight;
  const page1 = document.documentElement.clientHeight * 2;
  const gravity = heightP(1); // need to decide how much
  const playerWidth = widthP(1.6);// need to decide how much
  const playerHeight = widthP(1.6);// need to decide how much
  const [playerX, setPlayerX] = useState(widthP(23));// starting position
  const [playerY, setPlayerY] = useState(page1 + heightP(92));
  const [player2X, setPlayer2X] = useState(widthP(97));
  const [player2Y, setPlayer2Y] = useState(page2 + heightP(95));
  const [lightSwitch, setLightSwitch] = useState(false);
  const [playerOneButton, setPlayerOneButton] = useState(false);
  const [playerTwoButton, setPlayerTwoButton] = useState(false);
  const [timer, setTimer] = useState(null);
  const [moveDirection, setMoveDirection] = useState(null);
  const [playerDirection, setPlayerDirection] = useState('right');
  const [styleTransform, setStyleTransform] = useState(-1); // inverse
  const [flashlightDirection, setFlashlightDirection] = useState(25); // inverse plus widht of the flashlight, need to change

  // Generate the platforms for each step of the staircase
  const staircasePlatforms = Array.from({ length: 60 }).map((_, index) => {
    return {
      x: widthP(10) + index * (widthP(1)),
      y: heightP(200) + index * (heightP(1)),
      width: widthP(1),
      height: heightP(1),
    };
  });
  
  const platforms = [
    // page 1
    { x: widthP(0), y: page1 + heightP(0), width: widthP(100), height: heightP(1) }, // base
    { x: widthP(0), y: page1 + heightP(90), width: widthP(75), height: heightP(0.5) }, // header part 1
    { x: widthP(77.5), y: page1 + heightP(90), width: widthP(22.5), height: heightP(0.5) }, // header part 2
    { x: widthP(70), y: page1 + heightP(60), width: widthP(30), height: heightP(0.5) }, // ladder base

    // page 2
    { x: widthP(0), y: page2 + heightP(0), width: widthP(100), height: heightP(0.5) }, // base
    { x: widthP(0), y: page2 + heightP(40), width: widthP(100), height: heightP(0.5) },
    { x: widthP(20), y: page2 + heightP(40), width: widthP(0.3), height: heightP(60) },
    { x: widthP(80), y: page2 + heightP(40), width: widthP(0.3), height: heightP(60) },
    { x: widthP(22.5), y: page2 + heightP(7.5), width: widthP(2.5), height: heightP(22.5) },
    { x: widthP(75), y: page2 + heightP(7.5), width: widthP(2.5), height: heightP(22.5) },
    { x: widthP(25), y: page2 + heightP(7.5), width: widthP(50), height: heightP(2.5) },
    { x: widthP(18.5), y: page2 + heightP(0), width: widthP(0.5), height: heightP(40) },
    { x: widthP(81), y: page2 + heightP(0), width: widthP(0.5), height: heightP(40) },

    // page 2 seats
    { x: widthP(50), y: page2 + heightP(11), width: widthP(0.2), height: heightP(3) },
    { x: widthP(53), y: page2 + heightP(11), width: widthP(0.2), height: heightP(3) },
    { x: widthP(50), y: page2 + heightP(11), width: widthP(3), height: heightP(0.2) },

    // maze player1 - part-Y 1
    { x: widthP(5), y: page2 + heightP(45), width: 5, height: heightP(5) },
    { x: widthP(5), y: page2 + heightP(70), width: 5, height: heightP(5) },
    { x: widthP(5), y: page2 + heightP(80), width: 5, height: heightP(5) },
    { x: widthP(5), y: page2 + heightP(90), width: 5, height: heightP(5) },
    // part-Y 2
    { x: widthP(10), y: page2 + heightP(50), width: 5, height: heightP(25) },
    { x: widthP(10), y: page2 + heightP(85), width: 5, height: heightP(5) },
    { x: widthP(10), y: page2 + heightP(95), width: 5, height: heightP(5) },
    // part-Y 3
    { x: widthP(15), y: page2 + heightP(55), width: 5, height: heightP(10) },
    { x: widthP(15), y: page2 + heightP(75), width: 5, height: heightP(5) },
    { x: widthP(15), y: page2 + heightP(90), width: 5, height: heightP(5) },

    // maze player1 - part-X
    { x: widthP(10), y: page2 + heightP(45), width: widthP(10), height: 5 },
    { x: widthP(5), y: page2 + heightP(50), width: widthP(10), height: 5 },
    { x: widthP(5), y: page2 + heightP(55), width: widthP(5), height: 5 },
    { x: widthP(15), y: page2 + heightP(55), width: widthP(5), height: 5 },
    { x: widthP(0), y: page2 + heightP(60), width: widthP(5), height: 5 },
    { x: widthP(0), y: page2 + heightP(65), width: widthP(10), height: 5 },
    { x: widthP(15), y: page2 + heightP(70), width: widthP(5), height: 5 },
    { x: widthP(5), y: page2 + heightP(75), width: widthP(5), height: 5 },
    { x: widthP(5), y: page2 + heightP(80), width: widthP(10), height: 5 },
    { x: widthP(0), y: page2 + heightP(85), width: widthP(5), height: 5 },
    { x: widthP(10), y: page2 + heightP(85), width: widthP(5), height: 5 },
    { x: widthP(5), y: page2 + heightP(90), width: widthP(5), height: 5 },
    { x: widthP(0), y: page2 + heightP(95), width: widthP(5), height: 5 },
    { x: widthP(10), y: page2 + heightP(95), width: widthP(5), height: 5 },

     // maze player2 - part-Y 1
    { x: widthP(85), y: page2 + heightP(45), width: widthP(0.3), height: heightP(5) },
    { x: widthP(85), y: page2 + heightP(70), width: widthP(0.3), height: heightP(5) },
    { x: widthP(85), y: page2 + heightP(80), width: widthP(0.3), height: heightP(5) },
    { x: widthP(85), y: page2 + heightP(90), width: widthP(0.3), height: heightP(5) },

    // part-Y 2
    { x: widthP(90), y: page2 + heightP(50), width: widthP(0.3), height: heightP(25) },
    { x: widthP(90), y: page2 + heightP(85), width: widthP(0.3), height: heightP(5) },
    { x: widthP(90), y: page2 + heightP(95), width: widthP(0.3), height: heightP(5) },

    // part-Y 3
    { x: widthP(95), y: page2 + heightP(55), width: widthP(0.3), height: heightP(10) },
    { x: widthP(95), y: page2 + heightP(75), width: widthP(0.3), height: heightP(5) },
    { x: widthP(95), y: page2 + heightP(90), width: widthP(0.3), height: heightP(5) },

    // maze player2 - part-X
    { x: widthP(90), y: page2 + heightP(45), width: widthP(10), height: heightP(0.5) },
    { x: widthP(85), y: page2 + heightP(50), width: widthP(10), height: heightP(0.5) },
    { x: widthP(85), y: page2 + heightP(55), width: widthP(5), height: heightP(0.5) },
    { x: widthP(95), y: page2 + heightP(55), width: widthP(5), height: heightP(0.5) },
    { x: widthP(80), y: page2 + heightP(60), width: widthP(5), height: heightP(0.5) },
    { x: widthP(80), y: page2 + heightP(65), width: widthP(10), height: heightP(0.5) },
    { x: widthP(95), y: page2 + heightP(70), width: widthP(5), height: heightP(0.5) },
    { x: widthP(85), y: page2 + heightP(75), width: widthP(5), height: heightP(0.5) },
    { x: widthP(85), y: page2 + heightP(80), width: widthP(10), height: heightP(0.5) },
    { x: widthP(80), y: page2 + heightP(85), width: widthP(5), height: heightP(0.5) },
    { x: widthP(90), y: page2 + heightP(85), width: widthP(5), height: heightP(0.5) },
    { x: widthP(85), y: page2 + heightP(90), width: widthP(5), height: heightP(0.5) },
    { x: widthP(80), y: page2 + heightP(95), width: widthP(5), height: heightP(0.5) },
    { x: widthP(90), y: page2 + heightP(95), width: widthP(5), height: heightP(0.5) },

    // page 3
    { x: widthP(5), y: page3 + heightP(30), width: widthP(90), height: widthP(0.3) }, //middle platforn
    { x: widthP(0), y: page3 + heightP(0), width: widthP(100), height: heightP(0.6) },// base

    ...staircasePlatforms // stairs are included in platforms for now
  ];

  const graphs = [

    // X-axis page1 Graph
    { x: widthP(0), y: page1 + heightP(90), width: widthP(100), height: heightP(0.15) },
    { x: widthP(0), y: page1 + heightP(80), width: widthP(100), height: heightP(0.15) },
    { x: widthP(0), y: page1 + heightP(70), width: widthP(100), height: heightP(0.15) },
    { x: widthP(0), y: page1 + heightP(60), width: widthP(100), height: heightP(0.15) },
    { x: widthP(0), y: page1 + heightP(50), width: widthP(100), height: heightP(0.15) },
    { x: widthP(0), y: page1 + heightP(40), width: widthP(100), height: heightP(0.15) },
    { x: widthP(0), y: page1 + heightP(30), width: widthP(100), height: heightP(0.15) },
    { x: widthP(0), y: page1 + heightP(20), width: widthP(100), height: heightP(0.15) },
    { x: widthP(0), y: page1 + heightP(10), width: widthP(100), height: heightP(0.15) },

    // X-axis page2 Graph
    { x: widthP(0), y: page2 + heightP(90), width: widthP(100), height: heightP(0.15) },
    { x: widthP(0), y: page2 + heightP(80), width: widthP(100), height: heightP(0.15) },
    { x: widthP(0), y: page2 + heightP(70), width: widthP(100), height: heightP(0.15) },
    { x: widthP(0), y: page2 + heightP(60), width: widthP(100), height: heightP(0.15) },
    { x: widthP(0), y: page2 + heightP(50), width: widthP(100), height: heightP(0.15) },
    { x: widthP(0), y: page2 + heightP(40), width: widthP(100), height: heightP(0.15) },
    { x: widthP(0), y: page2 + heightP(30), width: widthP(100), height: heightP(0.15) },
    { x: widthP(0), y: page2 + heightP(20), width: widthP(100), height: heightP(0.15) },
    { x: widthP(0), y: page2 + heightP(10), width: widthP(100), height: heightP(0.15) },

    // X-axis page3 Graph
    { x: widthP(0), y: page3 + heightP(90), width: widthP(100), height: heightP(0.15) },
    { x: widthP(0), y: page3 + heightP(80), width: widthP(100), height: heightP(0.15) },
    { x: widthP(0), y: page3 + heightP(70), width: widthP(100), height: heightP(0.15) },
    { x: widthP(0), y: page3 + heightP(60), width: widthP(100), height: heightP(0.15) },
    { x: widthP(0), y: page3 + heightP(50), width: widthP(100), height: heightP(0.15) },
    { x: widthP(0), y: page3 + heightP(40), width: widthP(100), height: heightP(0.15) },
    { x: widthP(0), y: page3 + heightP(30), width: widthP(100), height: heightP(0.15) },
    { x: widthP(0), y: page3 + heightP(20), width: widthP(100), height: heightP(0.15) },
    { x: widthP(0), y: page3 + heightP(10), width: widthP(100), height: heightP(0.15) },

    // Y axis Graph
    { x: widthP(10), y: heightP(0), width: widthP(0.1), height: heightP(300) },
    { x: widthP(20), y: heightP(0), width: widthP(0.1), height: heightP(300) },
    { x: widthP(30), y: heightP(0), width: widthP(0.1), height: heightP(300) },
    { x: widthP(40), y: heightP(0), width: widthP(0.1), height: heightP(300) },
    { x: widthP(50), y: heightP(0), width: widthP(0.1), height: heightP(300) },
    { x: widthP(60), y: heightP(0), width: widthP(0.1), height: heightP(300) },
    { x: widthP(70), y: heightP(0), width: widthP(0.1), height: heightP(300) },
    { x: widthP(80), y: heightP(0), width: widthP(0.1), height: heightP(300) },
    { x: widthP(90), y: heightP(0), width: widthP(0.1), height: heightP(300) },

  ]

  const intObjects = [
    { x: widthP(0), y: page1 + heightP(0.5), width: widthP(3.25), height: heightP(10) - heightP(0.5) },//light switch 0
    { x: widthP(17.5), y: page2 + heightP(40) + heightP(0.5), width: widthP(2.5), height: heightP(5) }, //player1 button 
    { x: widthP(97.5), y: page2 + heightP(40) + heightP(0.5),  width: widthP(2.5), height: heightP(5)}, // player2 button 
    { x: widthP(22.5), y: page2 + heightP(0.5), width: widthP(0.3), height: heightP(7.5) - heightP(0.5) }, // door 1
    { x: widthP(77.2), y: page2 + heightP(0.5), width: widthP(0.3), height: heightP(7.5) - heightP(0.5) }, // door 2

  ]

  const teleporters = [
    { x: widthP(5), y: page1 + heightP(0.5), width: widthP(2), height: heightP(5) - heightP(0.5) }
  ]


  const ladders = [
    { x: widthP(75), y: page1 + heightP(60), width: widthP(2.5), height: heightP(30) + platforms[1].height },
  ];

  useEffect(() => {
    // need to figure out how to remove it
    const lightY = gameSize.height - playerY;
    document.documentElement.style.setProperty('--lightX', `${playerX}px`);
    document.documentElement.style.setProperty('--lightY', `${lightY}px`);
  }, [playerX, playerY, gameSize.height, playerDirection]);
 
  useEffect(() => {
    // need to add player resizes
    const handleResize = () => {
      setGameSize({ width: document.documentElement.clientWidth, height: document.documentElement.clientHeight * 3 });
      setPlayerX(playerX * document.documentElement.clientWidth/gameSize.width);
      setPlayerY(playerY * document.documentElement.clientHeight * 3/gameSize.height);
      setPlayer2X(player2X * document.documentElement.clientWidth/gameSize.width)
      setPlayer2Y(player2Y * document.documentElement.clientHeight * 3/gameSize.height);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },);
  
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
      top: heightP(100), // Scroll down by one page// page2
      behavior: 'smooth' // Optional: for smooth scrolling
    });
  };

  const checkInteractions = () => {
    
    const playerRight = playerX + playerWidth;
    const playerBottom = playerY - playerHeight; // Assuming Y increases downwards

    if ((playerRight >= intObjects[0].x && playerX <= intObjects[0].x + intObjects[0].width &&
      playerBottom <= intObjects[0].y && playerY >= intObjects[0].y - intObjects[0].height) && !lightSwitch) {
        // optional change the img or add annimations
      setLightSwitch(true);
      scrollOnePage();
      setPlayerX(0);
      setPlayerY(page2 + heightP(97));
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
      setPlayerX(widthP(30));
      setPlayerY(page3 + heightP(30));  
      scrollOnePage();
    }
    if (playerRight >= intObjects[4].x && playerX <= intObjects[4].x + intObjects[4].width &&
      playerBottom <= intObjects[4].y && playerY >= intObjects[4].y - intObjects[4].height) {
        setPlayerX(widthP(30));
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
        newX = Math.max(borderWidth, playerX - widthP(.8)); // need to test and change
        setFlashlightDirection(25);// acording to widthP of flashlight
        setStyleTransform(-1);// we flip the css then start it at minus widthP
        new2X = Math.min(widthP(100) - playerWidth - borderWidth * 2, player2X + 10);
        break;
      case 'ArrowRight':
        newX = Math.min(widthP(100) - playerWidth - borderWidth * 2, playerX + 10);
        setFlashlightDirection(0);
        setStyleTransform(1);
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

    const playerOneTouchPlatforms = platforms.some(platform => {
      return (
        newX < platform.x + platform.width &&
        newX + playerWidth > platform.x &&
        newY < platform.y + platform.height &&
        newY + playerHeight > platform.y
      );
    });

    if (!playerOneTouchPlatforms) {
      setPlayerX(newX);
      setPlayerY(newY);
    }


    const playerTwoTouchPlatforms = platforms.some(platform => {
      return (
        new2X < platform.x + platform.width &&
        new2X + playerWidth > platform.x &&
        new2Y < platform.y + platform.height &&
        new2Y + playerHeight > platform.y
      );
    });

    if (!playerTwoTouchPlatforms) {
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

    checkInteractions();
  };

  useEffect(() => {
    const gameLoop = setInterval(updateGame, 10); // Adjust interval as needed

    return () => {
      clearInterval(gameLoop);
    };
  }, [playerX, playerY, moveDirection, gameSize, playerWidth, playerHeight, styleTransform, flashlightDirection]);

  const checkButtonsAndAct = () => {
    // need to remove the timer
    if (playerOneButton && playerTwoButton) {
     
      
      setPlayerX(widthP(50));
      setPlayerY(page2 + heightP(20));
      setPlayer2X(widthP(50));
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

    const playerOneTouchPlatformsAgain = platforms.some(platform => { //checks if platform
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

    if (!playerOneTouchPlatformsAgain) {
      setPlayerY(newY); // applys gravity
    }

  };

  return (
    <div className={'no-scrollbar flashlight-on darkness-layer'} style={{ width: gameSize.width, height: gameSize.height }}>

      <div style={{ // darkness no2
        position: 'absolute',
        top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.6)', // Adjust the 0.5 to increase/decrease darkness
        zIndex: 1, // Ensure this is below interactive elements
      }}></div>

      <div className="directional-flashlight" style={{
        position: 'absolute',
        left: `${(playerX + playerWidth / 2) - widthP(flashlightDirection)}px`,
        bottom: `${playerY - heightP(11)}px`,
        width: widthP(25),
        height: heightP(25),
        transform: `scaleX(${styleTransform})`,
      }}></div>

      <div className="flashlight-beam" style={{
        position: 'absolute',
        left: `${(playerX + playerWidth / 2) - widthP(flashlightDirection)}px`,
        bottom: `${playerY - heightP(11)}px`,
        width: widthP(25),
        height: heightP(25), 
        transform: `scaleX(${styleTransform})`,
      }}></div>

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
          left: widthP(20),
          bottom: page2 + heightP(40),
          width: widthP(60),
          height: heightP(60),
        }}
      />
      {/* <img
        src='./ds.jpg' // background image to be added
        alt='Playerx'
        style={{
          position: 'absolute',
          left: widthP(0),
          bottom: page1 + heightP(0),
          width: widthP(100),
          height: heightP(100),
        }}
      /> */}


      {<img
        src='https://i.pinimg.com/originals/9a/35/d6/9a35d6b50aaea74a80052640850d86d3.png' // Replace 'player-icon.png' with the path to your image
        alt='Player'
        style={{
          position: 'absolute',
          left: `${player2X}px`,
          bottom: `${player2Y}px`,
          width: widthP(1.6),
          height: widthP(1.6),
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
     
       {/* <div className="light-source" style={{
        left: `${playerX + playerWidth/2}px`,
        bottom: `${playerY - heightP(3.5)}px`,
        width: widthP(10), 
        height: heightP(10),
      }}></div> */}

      {/* page 1 components */}

      <h1 style={{
          position: 'absolute',
          left: widthP(6),
          bottom: page1 + heightP(93),
          fontSize: widthP(3.5),
          height: heightP(0.1),
          lineHeight: heightP(0.1),
        }}>DevWeber</h1>
      <h3 style={{
          position: 'absolute',
          left: widthP(75.5),
          bottom: page1 + heightP(93),
          fontSize: widthP(1.5),
          height: heightP(0.1),
          lineHeight: heightP(0.1),
        }}>Home</h3>
        <h3 style={{
          position: 'absolute',
          left: widthP(81),
          bottom: page1 + heightP(93),
          fontSize: widthP(1.5),
          height: heightP(0.1),
          lineHeight: heightP(0.1),
        }}>Work</h3>
        <h3 style={{
          position: 'absolute',
          left: widthP(86.5),
          bottom: page1 + heightP(93),
          fontSize: widthP(1.5),
          height: heightP(0.1),
          lineHeight: heightP(0.1),
        }}>Contact</h3>

        <img
        src='./temp.png' // project img
        alt='PlayerPhoto1'
        style={{
          position: 'absolute',
          left: widthP(10),
          bottom: page1 + heightP(45),
          width: widthP(15),
          height: heightP(35),
          
        }}
        />

        <img
        src='./temp.png' // project img
        alt='PlayerPhoto2'
        style={{
          position: 'absolute',
          left: widthP(70),
          bottom: page1 + heightP(30),
          width: widthP(30),
          height: heightP(20),
        }}
        />

      {/* page3 components */}
      <p
        style={{
          position: 'absolute',
          left: widthP(30),
          bottom: page3 + heightP(60),
          width: widthP(60),
          height: widthP(1.6),
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
// add flashlight done



// to be used in future {/* <div class="lit-square" style={{
        //   position: 'absolute',
        //   left: widthP(70),
        //   bottom: heightP(30),
        //   width: widthP(56),
        //   height: heightP(5),
        // }}></div> */}

      {/* <div class="permanent-light" style={{
        position: 'absolute',
        left: widthP(70),// cool door effect. will use it for cinema doors uncrease width
        bottom: heightP(30),
        width: widthP(5),
        height: heightP(5),
      }}></div> */}
      {/* <div className="permanent-light" style={{
        left: widthP(60),
        bottom: heightP(20),//found darkness-layer soulution. hint bottom is without page1
        width: widthP(1),
        height: heightP(1),
      }}></div>
      <div className="permanent-light" style={{
        left: widthP(61),
        bottom: heightP(20),//found darkness-layer soulution. hint bottom is without page1
        width: widthP(2),
        height: heightP(2),
      }}></div> */}
      // <div className="permanent-light" style={{
      //   position: "absolute",
        
      //   left:`${playerX}px`,
      //   bottom: `${playerY}px`,//found darkness-layer soulution. hint bottom is without page1
      //   width: widthP(6),
      //   height: heightP(15),
      // }}></div>
       
     


      {/* <div className='flashlight-beam'  style={{
        left: widthP(60),
        bottom: heightP(20),//found darkness-layer soulution. hint bottom is without page1
        width: widthP(1),
        height: heightP(1),
      }}></div> */}



      // amimations
      // wake up animation, ladder animation, generator animation.