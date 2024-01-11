import React, { useState, useEffect } from 'react';
import './Game.css'
import Ladder from '../Ladder/Ladder';
import Platform, { generatePlatforms } from '../Platform/Platform';
import PlayerSprite from '../PlayerSprite/PlayerSprite';

const Game = () => {
  const [gameSize, setGameSize] = useState({ width: document.documentElement.clientWidth, height: document.documentElement.clientHeight * 3 }); // 729.60 px // 1536 px
  const widthP = (x) => gameSize.width * x / 100;
  const heightP = (y) => gameSize.height * y / 300;
  const borderWidth = 5; // not sure about this // need to remove this
  const page3 = 0;
  const page2 = document.documentElement.clientHeight;
  const page1 = document.documentElement.clientHeight * 2;
  const gravity = heightP(1); // need to decide how much
  const [playerX, setPlayerX] = useState(widthP(23));// starting position
  const [playerY, setPlayerY] = useState(page2 + heightP(30));
  const [player2X, setPlayer2X] = useState(widthP(97));
  const [player2Y, setPlayer2Y] = useState(page2 + heightP(95));
  const [lightSwitch, setLightSwitch] = useState(false);
  const [playerOneButton, setPlayerOneButton] = useState(false);
  const [playerTwoButton, setPlayerTwoButton] = useState(false);
  const [timer, setTimer] = useState(null);
  const [moveDirection, setMoveDirection] = useState(null);
  const [playerDirection, setPlayerDirection] = useState('right');

  const [flashlightTransform, setFlashlightTransform] = useState(-1); // inverse
  const [flashlightDirection, setFlashlightDirection] = useState(25); // inverse plus widht of the flashlight, need to change
  const [flashlightYDirection, setFlashlightYDirection] = useState(0);
  const [flashlightBackground, setFlashlightBackground] = useState();
  const [flashlightClipPath, setFlashlightClipPath] = useState();
  const [playerDimensions, setPlayerDimensions] = useState((((1.3 * gameSize.height / 3) + (gameSize.width)) * 0.01) / 32);
  const playerWidth = 32 * playerDimensions;// need to decide how much
  const playerHeight = 32 * playerDimensions;// need to decide how much
  const [hasFlashlight, setHasFlashlight] = useState(false);
  const [toggleFlashlight, setToggleFlashlight] = useState();
  const [cinnemaMode, setCinnemaMode] = useState(false);
  const [currentMovies, setCurrentMovies] = useState(false);
  const [enterKeyallowed, setEnterKeyallowed] = useState(false);
  const [sourceCodeLink, setSourceCodeLink] = useState(false);
  const [seeLiveLink, setSeeLiveLink] = useState(false);
  const [openLink, setOpenLink] = useState(false);


  const [currentFrame, setCurrentFrame] = useState(0); // The current frame index

  const directionFrameMap = {
    right: 0, // Frames 0 to 3
    up: 4,   // Frames 4 to 7
    left: 8, // Frames 8 to 11
    down: 12  // Frames 12 to 15
  };


  const platforms = generatePlatforms(widthP, heightP, page1, page2, page3);

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

  const ladders = [
    { x: widthP(75), y: page1 + heightP(60), width: widthP(2.5), height: heightP(30) + platforms[1].height },
  ];

  const intObjects = [
    { x: widthP(0), y: page1 + heightP(0.5), width: widthP(3.25), height: heightP(10) - heightP(0.5) },//light switch/board 0
    { x: widthP(96), y: page1 + heightP(60.5), width: widthP(3.25), height: heightP(10) - heightP(0.5) },
    { x: widthP(17.5), y: page2 + heightP(40) + heightP(0.5), width: widthP(2.5), height: heightP(5) }, //player1 button 
    { x: widthP(97.5), y: page2 + heightP(40) + heightP(0.5), width: widthP(2.5), height: heightP(5) }, // player2 button 
    { x: widthP(22.5), y: page2 + heightP(0.5), width: widthP(0.3), height: heightP(7.5) - heightP(0.5) }, // door 1
    { x: widthP(77.2), y: page2 + heightP(0.5), width: widthP(0.3), height: heightP(7.5) - heightP(0.5) }, // door 2
    { x: widthP(50), y: page2 + heightP(11), width: widthP(3.3), height: heightP(3) }, //last row seat
    { x: widthP(49), y: page2 + heightP(19), width: widthP(3.3), height: heightP(3) }, //middle row seat
    { x: widthP(50), y: page2 + heightP(29), width: widthP(3.3), height: heightP(3) }, //first row seat
    { x: widthP(83.5), y: page2 + heightP(22), width: widthP(14), height: heightP(6) }, //live
    { x: widthP(2), y: page2 + heightP(22), width: widthP(14), height: heightP(6) }, //sourcecode
   



  ]


  const checkInteractions = () => {

    const playerRight = playerX + playerWidth;
    const playerBottom = playerY - playerHeight; // Assuming Y increases downwards

    if ((playerRight >= intObjects[0].x && playerX <= intObjects[0].x + intObjects[0].width &&
      playerBottom <= intObjects[0].y && playerY >= intObjects[0].y - intObjects[0].height) && !lightSwitch) {
      // optional change the img or add annimations
      setLightSwitch(true);
      scrollOnePage();
      setPlayerX(0);
      setPlayerY(page2 + heightP(95));
    }
    if ((playerRight >= intObjects[1].x && playerX <= intObjects[1].x + intObjects[1].width &&
      playerBottom <= intObjects[1].y && playerY >= intObjects[1].y - intObjects[1].height) && !hasFlashlight) {
      // optional change the img or add annimations
      setHasFlashlight(true);
      setToggleFlashlight(true);
    }

    if ((playerRight >= intObjects[2].x && playerX <= intObjects[2].x + intObjects[2].width &&
      playerBottom <= intObjects[2].y && playerY >= intObjects[2].y - intObjects[2].height) && !playerOneButton) {
      setPlayerOneButton(true);
    }
    if ((player2X + playerWidth >= intObjects[3].x && player2X <= intObjects[3].x + intObjects[3].width &&
      player2Y - playerHeight <= intObjects[3].y && player2Y >= intObjects[3].y - intObjects[3].height) && !playerTwoButton) {
      setPlayerTwoButton(true);
    }

    if (playerRight >= intObjects[4].x && playerX <= intObjects[4].x + intObjects[4].width &&
      playerBottom <= intObjects[4].y && playerY >= intObjects[4].y - intObjects[4].height) {
      setPlayerX(widthP(30));
      setPlayerY(page3 + heightP(30));
      scrollOnePage();
    }
    if (playerRight >= intObjects[5].x && playerX <= intObjects[5].x + intObjects[5].width &&
      playerBottom <= intObjects[5].y && playerY >= intObjects[5].y - intObjects[5].height) {
      setPlayerX(widthP(30));
      setPlayerY(page3 + heightP(30));
      scrollOnePage();
    }
    if (playerRight >= intObjects[6].x && playerX <= intObjects[6].x + intObjects[6].width &&
      playerBottom <= intObjects[6].y && playerY >= intObjects[6].y - intObjects[6].height) {
      setCurrentMovies('./temp.png');
      setCinnemaMode(true);
      setSourceCodeLink('https://github.com/Devenvaruv/tycoonsimulator');
      setSeeLiveLink('https://tycoonsimulator.vercel.app/');
    } else if (playerRight >= intObjects[7].x && playerX <= intObjects[7].x + intObjects[7].width &&
      playerBottom <= intObjects[7].y && playerY >= intObjects[7].y - intObjects[7].height) {
      setCurrentMovies('./temps.png');
      setCinnemaMode(true);
      setSourceCodeLink('https://www.youtube.com/')
      setSeeLiveLink('https://www.google.com/');
    } else if (playerRight >= intObjects[8].x && playerX <= intObjects[8].x + intObjects[8].width &&
      playerBottom <= intObjects[8].y && playerY >= intObjects[8].y - intObjects[8].height) {
      setCurrentMovies('./ds.jpg');// need to change its type
      setCinnemaMode(true);
      setSourceCodeLink('https://www.youtube.com/')
      setSeeLiveLink('https://www.google.com/');
    } else {
      setCinnemaMode(false);
    }

    if (playerRight >= intObjects[9].x && playerX <= intObjects[9].x + intObjects[9].width &&
      playerBottom <= intObjects[9].y && playerY >= intObjects[9].y - intObjects[9].height) {
      setEnterKeyallowed(true);
      setOpenLink(seeLiveLink);
    }else if (playerRight >= intObjects[10].x && playerX <= intObjects[10].x + intObjects[10].width &&
      playerBottom <= intObjects[10].y && playerY >= intObjects[10].y - intObjects[10].height) {
     setEnterKeyallowed(true);
     setOpenLink(sourceCodeLink);
    } else {
      setEnterKeyallowed(false);
    }




  };

  const scrollOnePage = () => {
    window.scrollBy({
      top: heightP(100), // Scroll down by one page// page2
      behavior: 'smooth' // Optional: for smooth scrolling
    });
  };

  const advanceFrame = (direction) => {
    setCurrentFrame((prevFrame) => {
      // Find the starting frame for the current direction
      const startFrame = directionFrameMap[direction];
      // Calculate the next frame in the current animation sequence
      const nextFrame = startFrame + ((prevFrame - startFrame + 1) % 4);
      return nextFrame;
    });
  };


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
      setPlayerX(playerX * document.documentElement.clientWidth / gameSize.width);
      setPlayerY(playerY * document.documentElement.clientHeight * 3 / gameSize.height);
      setPlayer2X(player2X * document.documentElement.clientWidth / gameSize.width)
      setPlayer2Y(player2Y * document.documentElement.clientHeight * 3 / gameSize.height);
      setPlayerDimensions((((1.3 * document.documentElement.clientHeight) + (document.documentElement.clientWidth)) * 0.01) / 32)
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
      if ((e.key === 'F' || e.key === 'f') && hasFlashlight) {
        setToggleFlashlight(prevState => !prevState);
      }

     
      if (e.key === 'Enter' && enterKeyallowed) {
        window.open(openLink, '_blank', 'noopener,noreferrer');
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
  }, [hasFlashlight, cinnemaMode, openLink, enterKeyallowed]);

  const updateGame = () => {

    let newX = playerX;
    let newY = playerY;

    let new2X = player2X;
    let new2Y = player2Y;

    switch (moveDirection) {
      case 'ArrowLeft':
        newX = Math.max(borderWidth, playerX - widthP(.8)); // need to test and change
        setFlashlightDirection(25);// acording to widthP of flashlight
        setFlashlightYDirection(0);
        setFlashlightTransform('scaleX(-1)');// we flip the css then start it at minus widthP
        setFlashlightBackground('linear-gradient(to right, rgba(255, 255, 255, 0.9) 0%, rgba(0, 0, 0, 0) 100%)');
        setFlashlightClipPath('polygon(0% 50%, 100% 0%, 100% 100%)');
        advanceFrame('left');
        new2X = Math.min(widthP(100) - playerWidth - borderWidth * 2, player2X + 10);
        break;
      case 'ArrowRight':
        newX = Math.min(widthP(100) - playerWidth - borderWidth * 2, playerX + 10);
        setFlashlightDirection(0);
        setFlashlightYDirection(0);
        setFlashlightTransform('scaleX(1)');
        setFlashlightBackground('linear-gradient(to right, rgba(255, 255, 255, 0.9) 0%, rgba(0, 0, 0, 0) 100%)');
        setFlashlightClipPath('polygon(0% 50%, 100% 0%, 100% 100%)')
        advanceFrame('right');
        new2X = Math.max(borderWidth, player2X - 10);
        break;
      case 'ArrowDown':
        newY = Math.max(borderWidth, playerY - 10);
        setFlashlightDirection(12.5);// acording to widthP of flashlight
        setFlashlightYDirection(-12.5);
        setFlashlightTransform('scaleY(1)');
        setFlashlightBackground('linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 100%)');
        setFlashlightClipPath('polygon(50% 0%, 100% 100%, 0% 100%)');
        advanceFrame('down')
        new2Y = Math.min(gameSize.height - playerHeight - borderWidth * 2, player2Y + 10);
        break;
      case 'ArrowUp':
        newY = Math.min(gameSize.height - playerHeight - borderWidth * 2, playerY + 10);
        setFlashlightDirection(12.5);// acording to widthP of flashlight
        setFlashlightYDirection(12.5);
        setFlashlightTransform('scaleY(-1)');
        setFlashlightBackground('linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 100%)');
        setFlashlightClipPath('polygon(50% 0%, 100% 100%, 0% 100%)');
        advanceFrame('up')
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
    const gameLoop = setInterval(updateGame, 50); // Adjust interval as needed
    return () => {
      clearInterval(gameLoop);
    };
  }, [playerX, playerY, moveDirection, gameSize, playerWidth, playerHeight, flashlightTransform, flashlightDirection, currentFrame]);

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

      {/* global */}

      <div style={{ // darkness no2
        position: 'absolute',
        top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.6)', // Adjust the 0.5 to increase/decrease darkness
        zIndex: 1, // Ensure this is below interactive elements
      }}>
      </div>

      <div className='lit-square' style={{
        position: 'absolute',
        left: widthP(0),
        bottom: page1 + heightP(90),
        width: widthP(100),
        height: heightP(10),
      }}>
      </div>

      {toggleFlashlight && <>
        <div style={{
          position: 'absolute',
          left: `${(playerX + playerWidth / 2) - widthP(flashlightDirection)}px`,
          bottom: `${playerY - heightP(11) + heightP(flashlightYDirection)}px`,
          width: widthP(25),
          height: heightP(25),
          transform: flashlightTransform,
          background: flashlightBackground,
          clipPath: flashlightClipPath,
          borderRadius: '50% / 70%',
          pointerEvents: 'none',
          zIndex: 100,
        }}>
        </div>
        <div style={{
          position: 'absolute',
          left: `${(playerX + playerWidth / 2) - widthP(flashlightDirection)}px`,
          bottom: `${playerY - heightP(11) + heightP(flashlightYDirection)}px`,
          width: widthP(25),
          height: heightP(25),
          transform: flashlightTransform,
          background: flashlightBackground,
          clipPath: flashlightClipPath,
          borderRadius: '50% / 70%',
          pointerEvents: 'none',
        }}>
        </div>
      </>
      }

     

      {!hasFlashlight &&
        <div style={{
          position: 'absolute',
          left: widthP(73),
          bottom: page1 + heightP(50),
          width: widthP(25),
          height: heightP(25),
          transform: `scaleX(-1)`,
          background: 'linear-gradient(to right, rgba(255, 255, 255, 0.9) 0%, rgba(0, 0, 0, 0) 100%)',
          clipPath: 'polygon(0% 50%, 100% 0%, 100% 100%)',
          borderRadius: '50% / 70%',
          pointerEvents: 'none'
        }}>
        </div>
      }

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

      <PlayerSprite
        playerX={playerX}
        playerY={playerY}
        moveDirection={moveDirection}
        frameIndex={currentFrame} // Pass the current frame index to the PlayerSprite component
        scale={(((1.3 * gameSize.height / 3) + (gameSize.width)) * 0.01) / 32}
      />

      {/* <img
        src='https://i.pinimg.com/originals/9a/35/d6/9a35d6b50aaea74a80052640850d86d3.png' // Replace 'player-icon.png' with the path to your image
        alt='Player'
        style={{
          position: 'absolute',
          left: `${playerX}px`,
          bottom: `${playerY}px`,
          width: playerWidth,
          height: playerHeight,
        }}
      /> */}

      {/* <img
        src='./ds.jpg' // background image to be added
        alt='Playerx'
        style={{
          position: 'absolute',
          left: widthP(0),
          bottom: page1 + heightP(0),
          width: widthP(100),
          height: heightP(100),
          zIndex: '-1',
        }}
      /> */}


      {<img
        src='https://i.pinimg.com/originals/9a/35/d6/9a35d6b50aaea74a80052640850d86d3.png' // PLAYER 2
        alt='Player'
        style={{
          position: 'absolute',
          left: `${player2X}px`,
          bottom: `${player2Y}px`,
          width: widthP(1.6),
          height: widthP(1.6),
        }}
      />}

      <Platform platforms={platforms} />

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
      {ladders.map((ladder, index) => (
        <Ladder key={index} {...ladder} />
      ))}

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

      {/* page2 components */}

      <img className={cinnemaMode ? 'player-view' : ''}
        src={currentMovies} // project img
        alt='Player'
        style={{
          position: 'absolute',
          left: widthP(20 + 0.3),
          bottom: page2 + heightP(40 + 0.5),
          width: widthP(60 - 0.3),
          height: cinnemaMode ? heightP(55) : heightP(60 - 0.5),
        }}
      />

      {playerOneButton && playerTwoButton && <> <p
        style={{
          position: 'absolute',
          left: widthP(87.5),
          bottom: page2 + heightP(19),
          width: widthP(10),
          height: heightP(5),
        }}> See Live</p>
        <p style={{
          position: 'absolute',
          left: widthP(5),
          bottom: page2 + heightP(19),
          width: widthP(10),
          height: heightP(5),
        }}> Source code</p>
      </>}

       




      {/* {cinnemaMode && <img className={' left'}
        src='./temp.png' // project img
        alt='Player'
        style={{
          position: 'absolute',
          left: widthP(0 + 0.3),
          bottom: page2 + heightP(40 + 0.5),
          width: widthP(20 - 0.3),
          height: heightP(55),
        }}
      />} */}
      {/* 
      {cinnemaMode && <img className={' right'}
        src='./temp.png' // project img
        alt='Player'
        style={{
          position: 'absolute',
          left: widthP(80 + 0.3),
          bottom: page2 + heightP(40 + 0.5),
          width: widthP(15 - 0.3),
          height: heightP(55),
        }}
      />} */}


      {/* <img
        src='./temp.png' // project img
        alt='Player'
        style={{
          position: 'absolute',
          left: widthP(20),
          bottom: page2 + heightP(40),
          width: widthP(60),
          height: heightP(60),
        }}
      /> */}

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

      <p
        style={{
          position: 'absolute',
          left: widthP(30),
          bottom: page3 + heightP(50),
          width: widthP(60),
          height: widthP(1.6),
        }}
      > Im proud of you and dont let anyone else ever tell you otherwise</p>

    </div>
  );
};

export default Game;

// FOR Header: devweber = 2 unit home work contact 3 unit from last Done


// Ladder: x = last 3rd unit other half 25% unit Done



// electric board: x= 65% of 0.5 unit, y = 1 unit Done
// trapdoor: x= 35% of 0.5 unit + 15% of  other 0.5 unit not needed

// staircase: x= 2nd unit

// to do for tomorrow: make page2 maze


// tmr make the yellow button finctional and make a seat for the player done
// make the door functional? done

// make the website completely resposive done
// start drawing the game icons and logos
// make the character spritesheet Done
// add the standard website things such as headers and stuff
// add layers to give the illusion of darkness done



// level 2
// animations? 
// add flashlight done

// tmr lerm how to draw pixel art. or draw a original character spritesheet, but i guess learning how to draw pixel art would help.
// make the flashlight spawn at other place then pick it up and then only it follows the player DDDDDOOOOOONNNNNNNEEEEEEE

// add a pixel theme checkbox on the bottom right corner of the screen && maybe also add a character that uses chatgpt to answer some questions

// add achivements on the top left corner same text as the promp box on the bottom

// add subtitles for movies and decide on the width and height for the current project. 
// whenever i save anything on the if the player is on page 3 it will move to page 2?
// learn more about layers and once the player complelets the maze add made by. on the left side. source code, see live.

// add flashlight logic for up and down
// remove border width


// make a fake home page and show it for 3 seconds before reavling the game

// try to do some work// i now you have been feeling kinda low but we need to catch up and feel better about ourself.


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

{/* <div
      style={{
        position: 'absolute',
        left: `${100}px`,
        bottom: `${100}px`,
        width: `${80}px`,
        height: `${32}px`,
        backgroundImage: 'url(./temps.png)', // Update the path to your spritesheet
        // backgroundRepeat: 'no-repeat',
        // animation: `spriteAnimation 1s steps(${numberOfFrames - 1}) infinite` // for looping animations
      }}
      
    /> */}



// amimations
// wake up animation, ladder animation, generator animation.

// have adunince in the teather talk about the made by and with source code and see live. 