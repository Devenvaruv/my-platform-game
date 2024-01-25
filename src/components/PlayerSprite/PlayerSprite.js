import React from 'react';

const frameWidth = 16; // Width of one frame
const frameHeight = 32; // Height of one frame
const PlayerSprite = ({ playerX, playerY, moveDirection, frameIndex, scale }) => {
  // Calculate the X and Y position of the sprite image based on direction and frame index
  const getSpritePosition = () => {
    const directionMap = {
      down: 0,
      left: 1,
      right: 2,
      up: 3
    };

    const directionIndex = directionMap[moveDirection] || 0;
    const backgroundPositionX = -(frameIndex * frameWidth);
    const backgroundPositionY = -(directionIndex * frameHeight);

    return { backgroundPositionX, backgroundPositionY };
  };

  const { backgroundPositionX, backgroundPositionY } = getSpritePosition();

  return (
    <div
      style={{
        position: 'absolute',
        left: `${playerX}px`,
        bottom: `${playerY}px`,
        width: `${frameWidth}px`,
        height: `${frameHeight}px`,
        backgroundImage: `url(./temp-edit.png)`,
        backgroundPosition: `${backgroundPositionX}px ${backgroundPositionY}px`,
        backgroundRepeat: 'no-repeat',
        transform: `scale(${scale})`,
        zIndex: 11,
      }}
    />
  );
};

export default PlayerSprite;
