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
    { x: widthP(18.5), y: page2 + heightP(0), width: widthP(0.5), height: heightP(34) },
    { x: widthP(81), y: page2 + heightP(0), width: widthP(0.5), height: heightP(34) },

    // page 2 last row seats - 1
    { x: widthP(50), y: page2 + heightP(11), width: widthP(0.2), height: heightP(3) },
    { x: widthP(53), y: page2 + heightP(11), width: widthP(0.2), height: heightP(3) },
    { x: widthP(50), y: page2 + heightP(11), width: widthP(3), height: heightP(0.2) },

    // page 2 last row seats - 2
    { x: widthP(55), y: page2 + heightP(11), width: widthP(0.2), height: heightP(3) },
    { x: widthP(58), y: page2 + heightP(11), width: widthP(0.2), height: heightP(3) },
    { x: widthP(55), y: page2 + heightP(11), width: widthP(3), height: heightP(0.2) },

    // page 2 last row seats - 3
    { x: widthP(60), y: page2 + heightP(11), width: widthP(0.2), height: heightP(3) },
    { x: widthP(63), y: page2 + heightP(11), width: widthP(0.2), height: heightP(3) },
    { x: widthP(60), y: page2 + heightP(11), width: widthP(3), height: heightP(0.2) },

    // page 2 last row seats - 4
    { x: widthP(65), y: page2 + heightP(11), width: widthP(0.2), height: heightP(3) },
    { x: widthP(68), y: page2 + heightP(11), width: widthP(0.2), height: heightP(3) },
    { x: widthP(65), y: page2 + heightP(11), width: widthP(3), height: heightP(0.2) },

    // page 2 last row seats - 4
    { x: widthP(70), y: page2 + heightP(11), width: widthP(0.2), height: heightP(3) },
    { x: widthP(73), y: page2 + heightP(11), width: widthP(0.2), height: heightP(3) },
    { x: widthP(70), y: page2 + heightP(11), width: widthP(3), height: heightP(0.2) },

    // page 2 last row seats - 4
    { x: widthP(45), y: page2 + heightP(11), width: widthP(0.2), height: heightP(3) },
    { x: widthP(48), y: page2 + heightP(11), width: widthP(0.2), height: heightP(3) },
    { x: widthP(45), y: page2 + heightP(11), width: widthP(3), height: heightP(0.2) },

    // page 2 last row seats - 4
    { x: widthP(40), y: page2 + heightP(11), width: widthP(0.2), height: heightP(3) },
    { x: widthP(43), y: page2 + heightP(11), width: widthP(0.2), height: heightP(3) },
    { x: widthP(40), y: page2 + heightP(11), width: widthP(3), height: heightP(0.2) },

    // page 2 last row seats - 4
    { x: widthP(35), y: page2 + heightP(11), width: widthP(0.2), height: heightP(3) },
    { x: widthP(38), y: page2 + heightP(11), width: widthP(0.2), height: heightP(3) },
    { x: widthP(35), y: page2 + heightP(11), width: widthP(3), height: heightP(0.2) },

    // page 2 last row seats - 4
    { x: widthP(30), y: page2 + heightP(11), width: widthP(0.2), height: heightP(3) },
    { x: widthP(33), y: page2 + heightP(11), width: widthP(0.2), height: heightP(3) },
    { x: widthP(30), y: page2 + heightP(11), width: widthP(3), height: heightP(0.2) },

    // page 2 last row seats - 4
    { x: widthP(25), y: page2 + heightP(11), width: widthP(0.2), height: heightP(3) },
    { x: widthP(28), y: page2 + heightP(11), width: widthP(0.2), height: heightP(3) },
    { x: widthP(25), y: page2 + heightP(11), width: widthP(3), height: heightP(0.2) },

    // barrier between seats//////////////////////////////////////////////////////////////////////////////////////////
    { x: widthP(28), y: page2 + heightP(18), width: widthP(43), height: heightP(0.5) },
    { x: widthP(28), y: page2 + heightP(18), width: widthP(0.3), height: heightP(5) },
    { x: widthP(71), y: page2 + heightP(18), width: widthP(0.3), height: heightP(5) },

    // page 2 middle row seats 1
    { x: widthP(29), y: page2 + heightP(19), width: widthP(0.2), height: heightP(3) },
    { x: widthP(32), y: page2 + heightP(19), width: widthP(0.2), height: heightP(3) },
    { x: widthP(29), y: page2 + heightP(19), width: widthP(3), height: heightP(0.2) },

    // page 2 middle row seats 1
    { x: widthP(34), y: page2 + heightP(19), width: widthP(0.2), height: heightP(3) },
    { x: widthP(37), y: page2 + heightP(19), width: widthP(0.2), height: heightP(3) },
    { x: widthP(34), y: page2 + heightP(19), width: widthP(3), height: heightP(0.2) },

    // page 2 middle row seats 1
    { x: widthP(39), y: page2 + heightP(19), width: widthP(0.2), height: heightP(3) },
    { x: widthP(42), y: page2 + heightP(19), width: widthP(0.2), height: heightP(3) },
    { x: widthP(39), y: page2 + heightP(19), width: widthP(3), height: heightP(0.2) },

    // page 2 middle row seats 1
    { x: widthP(44), y: page2 + heightP(19), width: widthP(0.2), height: heightP(3) },
    { x: widthP(47), y: page2 + heightP(19), width: widthP(0.2), height: heightP(3) },
    { x: widthP(44), y: page2 + heightP(19), width: widthP(3), height: heightP(0.2) },

    // page 2 middle row seats 1
    { x: widthP(49), y: page2 + heightP(19), width: widthP(0.2), height: heightP(3) },
    { x: widthP(52), y: page2 + heightP(19), width: widthP(0.2), height: heightP(3) },
    { x: widthP(49), y: page2 + heightP(19), width: widthP(3), height: heightP(0.2) },

    // page 2 middle row seats 1
    { x: widthP(54), y: page2 + heightP(19), width: widthP(0.2), height: heightP(3) },
    { x: widthP(57), y: page2 + heightP(19), width: widthP(0.2), height: heightP(3) },
    { x: widthP(54), y: page2 + heightP(19), width: widthP(3), height: heightP(0.2) },

    // page 2 middle row seats 1
    { x: widthP(59), y: page2 + heightP(19), width: widthP(0.2), height: heightP(3) },
    { x: widthP(62), y: page2 + heightP(19), width: widthP(0.2), height: heightP(3) },
    { x: widthP(59), y: page2 + heightP(19), width: widthP(3), height: heightP(0.2) },

    // page 2 middle row seats 1
    { x: widthP(64), y: page2 + heightP(19), width: widthP(0.2), height: heightP(3) },
    { x: widthP(67), y: page2 + heightP(19), width: widthP(0.2), height: heightP(3) },
    { x: widthP(64), y: page2 + heightP(19), width: widthP(3), height: heightP(0.2) },

    // page 2 middle row seats 1
    { x: widthP(69), y: page2 + heightP(19), width: widthP(0.2), height: heightP(3) },
    { x: widthP(72), y: page2 + heightP(19), width: widthP(0.2), height: heightP(3) },
    { x: widthP(69), y: page2 + heightP(19), width: widthP(3), height: heightP(0.2) },

    // barrier between seats/////////////////////////////////////////////////////////////////////////
    { x: widthP(28), y: page2 + heightP(28), width: widthP(43), height: heightP(0.5) },
    { x: widthP(28), y: page2 + heightP(28), width: widthP(0.3), height: heightP(5) },
    { x: widthP(71), y: page2 + heightP(28), width: widthP(0.3), height: heightP(5) },

    // page 2 first row seats - 1
    { x: widthP(29), y: page2 + heightP(29), width: widthP(0.2), height: heightP(3) },
    { x: widthP(32), y: page2 + heightP(29), width: widthP(0.2), height: heightP(3) },
    { x: widthP(29), y: page2 + heightP(29), width: widthP(3), height: heightP(0.2) },

    // page 2 first row seats - 1
    { x: widthP(33), y: page2 + heightP(29), width: widthP(0.2), height: heightP(3) },
    { x: widthP(36), y: page2 + heightP(29), width: widthP(0.2), height: heightP(3) },
    { x: widthP(33), y: page2 + heightP(29), width: widthP(3), height: heightP(0.2) },

    // page 2 first row seats - 2
    { x: widthP(46), y: page2 + heightP(29), width: widthP(0.2), height: heightP(3) },
    { x: widthP(49), y: page2 + heightP(29), width: widthP(0.2), height: heightP(3) },
    { x: widthP(46), y: page2 + heightP(29), width: widthP(3), height: heightP(0.2) },

    // page 2 first row seats - 2
    { x: widthP(50), y: page2 + heightP(29), width: widthP(0.2), height: heightP(3) },
    { x: widthP(53), y: page2 + heightP(29), width: widthP(0.2), height: heightP(3) },
    { x: widthP(50), y: page2 + heightP(29), width: widthP(3), height: heightP(0.2) },

    // page 2 first row seats - 3
    { x: widthP(63), y: page2 + heightP(29), width: widthP(0.2), height: heightP(3) },
    { x: widthP(66), y: page2 + heightP(29), width: widthP(0.2), height: heightP(3) },
    { x: widthP(63), y: page2 + heightP(29), width: widthP(3), height: heightP(0.2) },

    // page 2 first row seats - 3
    { x: widthP(67), y: page2 + heightP(29), width: widthP(0.2), height: heightP(3) },
    { x: widthP(70), y: page2 + heightP(29), width: widthP(0.2), height: heightP(3) },
    { x: widthP(67), y: page2 + heightP(29), width: widthP(3), height: heightP(0.2) },


    // maze player1 - part-Y 1
    { x: widthP(5), y: page2 + heightP(45), width: widthP(0.3), height: heightP(5) },
    { x: widthP(5), y: page2 + heightP(70), width: widthP(0.3), height: heightP(5) },
    { x: widthP(5), y: page2 + heightP(80), width: widthP(0.3), height: heightP(5) },
    { x: widthP(5), y: page2 + heightP(90), width: widthP(0.3), height: heightP(5) },
    // part-Y 2
    { x: widthP(10), y: page2 + heightP(50), width: widthP(0.3), height: heightP(25) },
    { x: widthP(10), y: page2 + heightP(85), width: widthP(0.3), height: heightP(5) },
    { x: widthP(10), y: page2 + heightP(95), width: widthP(0.3), height: heightP(5) },
    // part-Y 3
    { x: widthP(15), y: page2 + heightP(55), width: widthP(0.3), height: heightP(10) },
    { x: widthP(15), y: page2 + heightP(75), width: widthP(0.3), height: heightP(5) },
    { x: widthP(15), y: page2 + heightP(90), width: widthP(0.3), height: heightP(5) },

    // maze player1 - part-X
    { x: widthP(10), y: page2 + heightP(45), width: widthP(10), height: heightP(0.5) },
    { x: widthP(5), y: page2 + heightP(50), width: widthP(10), height: heightP(0.5) },
    { x: widthP(5), y: page2 + heightP(55), width: widthP(5), height: heightP(0.5) },
    { x: widthP(15), y: page2 + heightP(55), width: widthP(5), height: heightP(0.5) },
    { x: widthP(0), y: page2 + heightP(60), width: widthP(5), height: heightP(0.5) },
    { x: widthP(0), y: page2 + heightP(65), width: widthP(10), height: heightP(0.5) },
    { x: widthP(15), y: page2 + heightP(70), width: widthP(5), height: heightP(0.5) },
    { x: widthP(5), y: page2 + heightP(75), width: widthP(5), height: heightP(0.5) },
    { x: widthP(5), y: page2 + heightP(80), width: widthP(10), height: heightP(0.5) },
    { x: widthP(0), y: page2 + heightP(85), width: widthP(5), height: heightP(0.5) },
    { x: widthP(10), y: page2 + heightP(85), width: widthP(5), height: heightP(0.5) },
    { x: widthP(5), y: page2 + heightP(90), width: widthP(5), height: heightP(0.5) },
    { x: widthP(0), y: page2 + heightP(95), width: widthP(5), height: heightP(0.5) },
    { x: widthP(10), y: page2 + heightP(95), width: widthP(5), height: heightP(0.5) },

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
