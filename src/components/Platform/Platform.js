import React from 'react';

// Function to generate platforms
export const generatePlatforms = (widthP, heightP, page1, page2, page3) => {
    const staircasePlatforms = Array.from({ length: 60 }).map((_, index) => {
        return {
          x: widthP(10) + index * (widthP(1)),
          y: heightP(200) + index * (heightP(1)),
          width: widthP(1),
          height: heightP(1),
        };
      });
  return [
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

     ...staircasePlatforms
  ];
};

const Platform = ({ platforms }) => {
  return (
    <>
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
    </>
  );
};

export default Platform;
