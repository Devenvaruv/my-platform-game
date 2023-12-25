import React, { useState, useEffect } from 'react';
import './Game.css'
const Game = () => {
  const playerWidth = 25;
  const playerHeight = 25;
  const borderWidth = 5;
  const screenWidth = document.documentElement.clientWidth;
  const screenHeight = document.documentElement.clientHeight;
  const gravity = 5;
  const startingPlatform = { x: 5, y: screenHeight*2 - 50, width: screenWidth - 50, height: 10 };
  const [playerX, setPlayerX] = useState(startingPlatform.x + (startingPlatform.width / 2) - (playerWidth / 2));
  const [playerY, setPlayerY] = useState(startingPlatform.y + startingPlatform.height);
  const [gameSize, setGameSize] = useState({ width: screenWidth, height: screenHeight*2 });
  const [cameraY, setCameraY] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setGameSize({ width: screenWidth, height: screenHeight*2 });
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, );

  // Define platforms
  const platforms = [
    { x: 50, y: screenHeight + 300, width: 200, height: 20 },
    { x: screenWidth/2, y:screenHeight + 300, width: 200, height: 120 },
    { x: 5, y: screenHeight*2 - 50, width: screenWidth - 50, height: 10 },
    { x: 5, y: screenHeight + 10, width: screenWidth - 50, height: 10 },
    { x: 5, y: screenHeight*2 + 50, width: screenWidth - 50, height: 10 },
    
  ];

  const handleKeyPress = (e) => {

    let newX = playerX;
    let newY = playerY;

    switch (e.key) {
      case 'ArrowLeft':
        newX = Math.max(borderWidth, playerX - 5);
        break;
      case 'ArrowRight':
        newX = Math.min(gameSize.width - playerWidth - borderWidth * 2, playerX + 5);
        break;
      case 'ArrowUp':
        newY = Math.max(borderWidth, playerY + 5);
        break;
      case 'ArrowDown':
        newY = Math.max(borderWidth, playerY - 5);
        break;
      // case 'Space':
      //   // Simple jump mechanics
      //   newY = Math.max(borderWidth, playerY + 100);
      //   setTimeout(() => {
      //     setPlayerY(gameSize.height - playerHeight - borderWidth);
      //   }, 200);
      //   break;
      
      default:
        break;
  };

  const onBorder = newX <= borderWidth || 
  newY <= borderWidth || 
  newX >= gameSize.width - playerWidth - borderWidth * 2 || 
  newY >= gameSize.height - playerHeight - borderWidth * 2;

  // Check for platform collision
  const onPlatform = platforms.some(platform => {
    return (
      newX < platform.x + platform.width &&
      newX + playerWidth > platform.x &&
      newY < platform.y + platform.height &&
      newY + playerHeight > platform.y
    );
  });
  if (!onPlatform && !onBorder) {
    setPlayerX(newX);
    setPlayerY(newY);
  }
 
}


  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [playerX, playerY, gameSize.width, gameSize.height, borderWidth]);

  const applyGravity = () => {
    let newY = playerY - gravity; // The player moves down due to gravity
    const onPlatform = platforms.some(platform => {
      const withinXBounds = playerX < platform.x + platform.width && playerX + playerWidth > platform.x;
      const landedOnTop = newY < platform.y + platform.height && newY + playerHeight > platform.y;
      return withinXBounds && landedOnTop;
    });

    // Prevent player from falling through the bottom of the game area
    newY = Math.max(borderWidth, newY);

  const targetPlatform = { x: 5, y: screenHeight + 10, width: screenWidth - 50, height: 10 };
  const onTargetPlatform = playerX < targetPlatform.x + targetPlatform.width &&
                           playerX + playerWidth > targetPlatform.x &&
                           newY < targetPlatform.y + targetPlatform.height &&
                           newY + playerHeight > targetPlatform.y;

                           if (onTargetPlatform) {
                            // Update the camera position to focus on the bottom of the screen
                            setCameraY(screenHeight); // Adjust as needed
                          }

    if (!onPlatform) {
      setPlayerY(newY);
    }
  };

  useEffect(() => {
    // Set an interval for gravity to be applied continuously
    const gravityInterval = setInterval(applyGravity, 100); // Adjust interval as needed

    return () => {
      clearInterval(gravityInterval); // Clear interval when the component is unmounted
    };
  }, [playerX, playerY, platforms]);
  
  return (
    <div className='no-scrollbar' style={{ position: 'relative', width: screenWidth, height: screenHeight*2, overflowY: 'hidden'}}>
      <img
        src='https://i.pinimg.com/originals/9a/35/d6/9a35d6b50aaea74a80052640850d86d3.png' // Replace 'player-icon.png' with the path to your image
        alt='Player'
        style={{
          position: 'absolute',
          left: `${playerX}px`,
          bottom: `${playerY- cameraY}px`,
          width: playerWidth, // Adjust as needed
          height: playerHeight, // Adjust as needed
        }}
      />
      {platforms.map((platform, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            left: `${platform.x}px`,
            bottom: `${platform.y - cameraY}px`,
            width: `${platform.width}px`,
            height: `${platform.height}px`,
            backgroundColor: 'red',
          }}
        />
      ))}
  
    </div>   
  );
};

export default Game;
