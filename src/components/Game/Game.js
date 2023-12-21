import React, { useState, useEffect } from 'react';
import './Game.css'
const Game = () => {
  const playerWidth = 50;
  const playerHeight = 50;
  const borderWidth = 5;
  const [playerX, setPlayerX] = useState(playerWidth + borderWidth);
  const [playerY, setPlayerY] = useState(playerHeight + borderWidth);
  const [gameSize, setGameSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => {
      setGameSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Define platforms
  const platforms = [
    { x: 50, y: 300, width: 200, height: 20 },
    { x: 500, y: 300, width: 200, height: 120 },
    // Add more platforms as needed
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
      // case 'ArrowUp':
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

  return (
    <div style={{ position: 'relative', width: 'calc(100vw - 10px)', height: 'calc(100vh - 10px)', border: '5px solid red', }}>
      <img
        src='https://i.pinimg.com/originals/9a/35/d6/9a35d6b50aaea74a80052640850d86d3.png' // Replace 'player-icon.png' with the path to your image
        alt='Player'
        style={{
          position: 'absolute',
          left: `${playerX}px`,
          bottom: `${playerY}px`,
          width: '50px', // Adjust as needed
          height: '50px', // Adjust as needed
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
            backgroundColor: 'black',
          }}
        />
      ))}
    </div>
    // <div style={{width: '100px - 1px' , height: '100vh' - '1px',border: '5px solid red'}}>
    //   <p>gi</p>
    //   </div>
   
  );
};

export default Game;
