import React, { useState, useEffect } from 'react';
import './Game.css'
import Ladder from '../Ladder/Ladder';

const Game = () => {
  const playerWidth = 25;// need to decide how much
  const playerHeight = 25;
  const borderWidth = 5; // not sure about this
  const [gameSize, setGameSize] = useState({ width: document.documentElement.clientWidth, height: document.documentElement.clientHeight * 3 });
  const screenHeight = document.documentElement.clientHeight; // 729.60 px // 1536 px
  const page3 = 0;
  const page2 = document.documentElement.clientHeight;
  const page1 = document.documentElement.clientHeight * 2;
  const gravity = 5;
  let [boolt, setBoolt] = useState(true); // test need to change

  const [playerX, setPlayerX] = useState(Math.floor(5));
  const [playerY, setPlayerY] = useState(page1 + screenHeight * 89.75 / 100 + 5);
  const [moveDirection, setMoveDirection] = useState(null);

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

  const widhtP = (x) => {
    return gameSize.width * x / 100;
  }

  const intObjects = [
    { x: 0, y: page1 + 5, width: widhtP(3.25), height: screenHeight * 10 / 100 - 5 }
  ]

  const teleporters = [
    { x: widhtP(5), y: page1 + 5, width: widhtP(2), height: screenHeight * 5 / 100 - 5 }
  ]

  const platforms = [
    // page no 1

    { x: 0, y: page1, width: gameSize.width, height: 5 },// base
    { x: 0, y: page1 + screenHeight * 90 / 100, width: gameSize.width * 75 / 100, height: 5 }, // header part 1
    { x: gameSize.width * 77.5 / 100, y: page1 + screenHeight * 90 / 100, width: gameSize.width * 22.5 / 100, height: 5 }, // header part 2
    { x: gameSize.width * 70 / 100, y: page1 + screenHeight * 60 / 100, width: gameSize.width * 30 / 100, height: 5 }, // ladder base

    // page no 2
    { x: 0, y: page2, width: gameSize.width, height: 5 },// base

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

  const scrollDown = () => {
    window.scrollBy({
      top: page2, // Scroll down 1000 pixels
      behavior: 'smooth' // Optional: for smooth scrolling
    });
  };

  const updateGame = () => {
    let newX = playerX;
    let newY = playerY;



    switch (moveDirection) {
      case 'ArrowLeft':
        newX = Math.max(borderWidth, playerX - 10);
        break;
      case 'ArrowRight':
        newX = Math.min(gameSize.width - playerWidth - borderWidth * 2, playerX + 10);
        break;
      case 'ArrowDown':
        newY = Math.max(borderWidth, playerY - 10)
        break;
      case 'ArrowUp':
        newY = Math.max(borderWidth, playerY + 10);

        break;
      default:
        break;
    }

    const onPlatform = platforms.some(platform => {
      return (
        newX < platform.x + platform.width &&
        newX + playerWidth > platform.x &&
        newY < platform.y + platform.height &&
        newY + playerHeight > platform.y
      );
    });

    if (!onPlatform) {
      setPlayerX(newX);
      setPlayerY(newY);
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
    applyGravity();
    if (
      playerX >= (gameSize.width * 5 / 100) && // x position of the platform
      playerX <= (gameSize.width * 5 / 100) + (gameSize.width * 2 / 100) && // x position + width of the platform
      playerY >= (page1 + 5) && // y position of the platform
      playerY <= (page1 + 5) + (screenHeight * 5 / 100 - 5) // y position + height of the platform
    ) {
      console.log("DED");

    }

    if (playerX >= 10000 && boolt === true) {
      setBoolt(false);
      scrollDown();
      setPlayerX(0);
      setPlayerY(page2 + screenHeight - 20);
    }
    // Other game update logic if needed...
    // if (newX >= 100) {
    //   scrollToBottom();
    // }
  };

  useEffect(() => {
    const gameLoop = setInterval(updateGame, 100); // Adjust interval as needed

    return () => {
      clearInterval(gameLoop);
    };
  }, [playerX, playerY, moveDirection, gameSize, borderWidth, playerWidth, playerHeight]);





  const applyGravity = () => {
    let newY = playerY - gravity; // The player moves down due to gravity
    const onPlatformn = platforms.some(platform => {
      const withinXBounds = playerX < platform.x + platform.width && playerX + playerWidth > platform.x;
      const landedOnTop = newY < platform.y + platform.height && newY + playerHeight > platform.y;
      return withinXBounds && landedOnTop;
    });

    const onLadder = ladders.some(ladder => {
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
      setPlayerY(newY);
    }

  };

  return (
    <div className='no-scrollbar' style={{ width: gameSize.width, height: gameSize.height }}>
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
      {graphs.map((platform, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            left: `${platform.x}px`,
            bottom: `${platform.y}px`,
            width: `${platform.width}px`,
            height: `${platform.height}px`,
            backgroundColor: 'black',
          }}
        />
      ))}
      {intObjects.map((platform, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            left: `${platform.x}px`,
            bottom: `${platform.y}px`,
            width: `${platform.width}px`,
            height: `${platform.height}px`,
            backgroundColor: 'yellow',
          }}
        />
      ))}
      {teleporters.map((platform, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            left: `${platform.x}px`,
            bottom: `${platform.y}px`,
            width: `${platform.width}px`,
            height: `${platform.height}px`,
            backgroundColor: 'blue',
          }}
        />
      ))}
      {ladders.map((ladder, index) => (
        <Ladder key={index} {...ladder} />
      ))}

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