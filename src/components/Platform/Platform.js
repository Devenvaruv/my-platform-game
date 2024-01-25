import React from 'react';

// Function to generate platforms
export const generatePlatforms = (widthP, heightP, page1, page2, page3) => {
    const staircasePlatforms = Array.from({ length: 60 }).map((_, index) => {
        return {
          x: widthP(10) + index * (widthP(1)),
          y: heightP(200) + index * (heightP(1)),
          width: widthP(1),
          height: heightP(1),
          backgroundImage: '/staircase-sprite.png',
        };
      });
  return [
    // page 1
    { x: widthP(0), y: page1 + heightP(0), width: widthP(100), height: heightP(1), backgroundImage: 'url(./border-sprite.png)' }, // base
    { x: widthP(0), y: page1 + heightP(90), width: widthP(75), height: heightP(0.5), backgroundImage: 'url(./border-sprite.png)',zIndex: 12  }, // header part 1
    { x: widthP(77.5), y: page1 + heightP(90), width: widthP(22.5), height: heightP(0.5), backgroundImage: 'url(./border-sprite.png)',zIndex: 12  }, // header part 2
    { x: widthP(70), y: page1 + heightP(60), width: widthP(30), height: heightP(0.5), backgroundImage: 'url(./border-sprite.png)'  }, // ladder base

    // page 2
    { x: widthP(0), y: page2 + heightP(0), width: widthP(100), height: heightP(0.5), backgroundImage: 'url(./velvet-test.png)' }, // base
    { x: widthP(0), y: page2 + heightP(40), width: widthP(100), height: heightP(0.5), backgroundImage: 'url(./page2-test2.png)' }, // middle x line
    { x: widthP(20), y: page2 + heightP(40), width: widthP(0.3), height: heightP(60), backgroundImage: 'url(./page2-test2.png)' }, //left pillar
    { x: widthP(80), y: page2 + heightP(40), width: widthP(0.3), height: heightP(60), backgroundImage: 'url(./page2-test2.png)' }, // right pillar
    { x: widthP(22.5), y: page2 + heightP(7.5), width: widthP(2.5), height: heightP(22.5), backgroundImage: 'url(./velvet-left.png)' }, // cinema left pillar
    { x: widthP(75), y: page2 + heightP(7.5), width: widthP(2.5), height: heightP(22.5),backgroundImage: 'url(./velvet-right.png)' }, // cinema right pillar
    { x: widthP(25), y: page2 + heightP(7.5), width: widthP(50), height: heightP(2.5),backgroundImage: 'url(./velvet-middle.png)' }, // cinema middle line
    { x: widthP(22.5), y: page2 + heightP(7.5), width: widthP(2.5), height: heightP(2.5), backgroundImage: './velvet-left-corner.png' }, // cinema left-corner-pillar
    { x: widthP(75), y: page2 + heightP(7.5), width: widthP(2.5), height: heightP(2.5), backgroundImage: './velvet-right-corner.png' }, // cinema right-corner- pillar

    { x: widthP(18.5), y: page2 + heightP(0), width: widthP(0.5), height: heightP(34),backgroundImage: 'url(./velvet-left.png)' }, // cinema left most pillar
    { x: widthP(81), y: page2 + heightP(0), width: widthP(0.5), height: heightP(34),backgroundImage: 'url(./velvet-right.png)' }, // cinema right most pillar



    
    // page 2 last row seats
  
    { x: widthP(26), y: page2 + heightP(11), width: widthP(2.5), height: heightP(3) , backgroundImage: '/person-chair.png' },

    { x: widthP(31), y: page2 + heightP(11), width: widthP(2.5), height: heightP(3) , backgroundImage: '/person-chair.png'  },
   
    { x: widthP(36), y: page2 + heightP(11), width: widthP(2.5), height: heightP(3) , backgroundImage: '/person-chair.png'  },

    { x: widthP(41), y: page2 + heightP(11), width: widthP(2.5), height: heightP(3) , backgroundImage: '/person-chair.png'  },

    { x: widthP(46), y: page2 + heightP(11),width: widthP(2.5),height: heightP(3) , backgroundImage: '/person-chair.png'  },
   
    { x: widthP(51), y: page2 + heightP(11), width: widthP(2.5), height: heightP(0.2)},

    { x: widthP(56), y: page2 + heightP(11),width: widthP(2.5), height: heightP(3) , backgroundImage: '/person-chair.png'  },

    { x: widthP(61), y: page2 + heightP(11), width: widthP(2.5), height: heightP(3)  , backgroundImage: '/person-chair.png' },

    { x: widthP(66), y: page2 + heightP(11), width: widthP(2.5), height: heightP(3) , backgroundImage: '/person-chair.png'  },

    { x: widthP(71), y: page2 + heightP(11), width: widthP(2.5), height: heightP(3) , backgroundImage: '/person-chair.png'  },


    // barrier between seats//////////////////////////////////////////////////////////////////////////////////////////
    { x: widthP(29.7), y: page2 + heightP(18), width: widthP(40), height: heightP(0.5),backgroundImage: 'url(./velvet-middle.png)'  },
    { x: widthP(29.7), y: page2 + heightP(18), width: widthP(0.3), height: heightP(5),backgroundImage: 'url(./velvet-left.png)'  },
    { x: widthP(69.7), y: page2 + heightP(18), width: widthP(0.3), height: heightP(5),backgroundImage: 'url(./velvet-right.png)'  },
    { x: widthP(29.7), y: page2 + heightP(18), width: widthP(0.3), height: heightP(0.5), backgroundImage: './velvet-left-corner.png' }, 
    { x: widthP(69.7), y: page2 + heightP(18), width: widthP(0.3), height: heightP(0.5), backgroundImage: './velvet-right-corner.png' },

    // // page 2 middle row seats 1
   
    { x: widthP(31), y: page2 + heightP(19), width: widthP(2.5), height: heightP(3) , backgroundImage: '/person-chair.png'  },

    { x: widthP(36), y: page2 + heightP(19), width: widthP(2.5), height: heightP(3) , backgroundImage: '/person-chair.png'  },

    { x: widthP(41), y: page2 + heightP(19), width: widthP(2.5), height: heightP(3) , backgroundImage: '/person-chair.png'  },

    { x: widthP(46), y: page2 + heightP(19), width: widthP(2.5), height: heightP(3) , backgroundImage: '/person-chair.png'  },

    { x: widthP(51), y: page2 + heightP(19), width: widthP(2.5), height: heightP(0.2)},

    { x: widthP(56), y: page2 + heightP(19), width: widthP(2.5), height: heightP(3) , backgroundImage: '/person-chair.png'  },

    { x: widthP(61), y: page2 + heightP(19), width: widthP(2.5), height: heightP(3) , backgroundImage: '/person-chair.png'  },

    { x: widthP(66), y: page2 + heightP(19), width: widthP(2.5), height: heightP(3) , backgroundImage: '/person-chair.png'  },

   

    // barrier between seats/////////////////////////////////////////////////////////////////////////
    { x: widthP(29.7), y: page2 + heightP(28), width: widthP(40), height: heightP(0.5),backgroundImage: 'url(./velvet-middle.png)'  },

    { x: widthP(29.7), y: page2 + heightP(28), width: widthP(0.3), height: heightP(5),backgroundImage: 'url(./velvet-left.png)'  },
    { x: widthP(69.7), y: page2 + heightP(28), width: widthP(0.3), height: heightP(5),backgroundImage: 'url(./velvet-right.png)'  },
    { x: widthP(29.7), y: page2 + heightP(28), width: widthP(0.3), height: heightP(0.5), backgroundImage: './velvet-left-corner.png' },
    { x: widthP(69.7), y: page2 + heightP(28), width: widthP(0.3), height: heightP(0.5), backgroundImage: './velvet-right-corner.png' },

    // page 2 first row seats - 1
   
    { x: widthP(33), y: page2 + heightP(29), width: widthP(2.5), height: heightP(3) , backgroundImage: '/person-chair.png'  },
    { x: widthP(37), y: page2 + heightP(29), width: widthP(2.5), height: heightP(3) , backgroundImage: '/person-chair.png'  },

    { x: widthP(46), y: page2 + heightP(29), width: widthP(2.5), height: heightP(3) , backgroundImage: '/person-chair.png'  },
    { x: widthP(50), y: page2 + heightP(29), width: widthP(2.5), height: heightP(0.2)},

    { x: widthP(60), y: page2 + heightP(29), width: widthP(2.5), height: heightP(3) , backgroundImage: '/person-chair.png'  },
    { x: widthP(64), y: page2 + heightP(29), width: widthP(2.5), height: heightP(3) , backgroundImage: '/person-chair.png'  },


    // maze player1 - part-Y 1
    { x: widthP(5), y: page2 + heightP(45), width: widthP(0.3), height: heightP(5), backgroundImage: 'url(./page2-test2.png)'   },
    { x: widthP(5), y: page2 + heightP(70), width: widthP(0.3), height: heightP(5), backgroundImage: 'url(./page2-test2.png)'   },
    { x: widthP(5), y: page2 + heightP(80), width: widthP(0.3), height: heightP(5), backgroundImage: 'url(./page2-test2.png)'   },
    { x: widthP(5), y: page2 + heightP(90), width: widthP(0.3), height: heightP(5), backgroundImage: 'url(./page2-test2.png)'   },
    // part-Y 2
    { x: widthP(10), y: page2 + heightP(50), width: widthP(0.3), height: heightP(25), backgroundImage: 'url(./page2-test2.png)'   },
    { x: widthP(10), y: page2 + heightP(85), width: widthP(0.3), height: heightP(5), backgroundImage: 'url(./page2-test2.png)'   },
    { x: widthP(10), y: page2 + heightP(95), width: widthP(0.3), height: heightP(5), backgroundImage: 'url(./page2-test2.png)'   },
    // part-Y 3
    { x: widthP(15), y: page2 + heightP(55), width: widthP(0.3), height: heightP(10), backgroundImage: 'url(./page2-test2.png)'   },
    { x: widthP(15), y: page2 + heightP(75), width: widthP(0.3), height: heightP(5), backgroundImage: 'url(./page2-test2.png)'   },
    { x: widthP(15), y: page2 + heightP(90), width: widthP(0.3), height: heightP(5), backgroundImage: 'url(./page2-test2.png)'   },

    // maze player1 - part-X
    { x: widthP(10), y: page2 + heightP(45), width: widthP(10), height: heightP(0.5), backgroundImage: 'url(./page2-test.png)' },
    { x: widthP(5), y: page2 + heightP(50), width: widthP(10), height: heightP(0.5), backgroundImage: 'url(./page2-test.png)'  },
    { x: widthP(5), y: page2 + heightP(55), width: widthP(5), height: heightP(0.5), backgroundImage: 'url(./page2-test.png)'  },
    { x: widthP(15), y: page2 + heightP(55), width: widthP(5), height: heightP(0.5), backgroundImage: 'url(./page2-test.png)'  },
    { x: widthP(0), y: page2 + heightP(60), width: widthP(5), height: heightP(0.5), backgroundImage: 'url(./page2-test.png)'  },
    { x: widthP(0), y: page2 + heightP(65), width: widthP(10), height: heightP(0.5), backgroundImage: 'url(./page2-test.png)'  },
    { x: widthP(15), y: page2 + heightP(70), width: widthP(5), height: heightP(0.5), backgroundImage: 'url(./page2-test.png)'  },
    { x: widthP(5), y: page2 + heightP(75), width: widthP(5), height: heightP(0.5), backgroundImage: 'url(./page2-test.png)'  },
    { x: widthP(5), y: page2 + heightP(80), width: widthP(10), height: heightP(0.5), backgroundImage: 'url(./page2-test.png)'  },
    { x: widthP(0), y: page2 + heightP(85), width: widthP(5), height: heightP(0.5), backgroundImage: 'url(./page2-test.png)'  },
    { x: widthP(10), y: page2 + heightP(85), width: widthP(5), height: heightP(0.5), backgroundImage: 'url(./page2-test.png)'  },
    { x: widthP(5), y: page2 + heightP(90), width: widthP(5), height: heightP(0.5), backgroundImage: 'url(./page2-test.png)'  },
    { x: widthP(0), y: page2 + heightP(95), width: widthP(5), height: heightP(0.5), backgroundImage: 'url(./page2-test.png)'  },
    { x: widthP(10), y: page2 + heightP(95), width: widthP(5), height: heightP(0.5), backgroundImage: 'url(./page2-test.png)'  },

    // maze player2 - part-Y 1
    { x: widthP(85), y: page2 + heightP(45), width: widthP(0.3), height: heightP(5), backgroundImage: 'url(./page2-test2.png)'   },
    { x: widthP(85), y: page2 + heightP(70), width: widthP(0.3), height: heightP(5), backgroundImage: 'url(./page2-test2.png)'   },
    { x: widthP(85), y: page2 + heightP(80), width: widthP(0.3), height: heightP(5) , backgroundImage: 'url(./page2-test2.png)'  },
    { x: widthP(85), y: page2 + heightP(90), width: widthP(0.3), height: heightP(5) , backgroundImage: 'url(./page2-test2.png)'  },

    // part-Y 2
    { x: widthP(90), y: page2 + heightP(50), width: widthP(0.3), height: heightP(25), backgroundImage: 'url(./page2-test2.png)'   },
    { x: widthP(90), y: page2 + heightP(85), width: widthP(0.3), height: heightP(5), backgroundImage: 'url(./page2-test2.png)'   },
    { x: widthP(90), y: page2 + heightP(95), width: widthP(0.3), height: heightP(5) , backgroundImage: 'url(./page2-test2.png)'  },

    // part-Y 3
    { x: widthP(95), y: page2 + heightP(55), width: widthP(0.3), height: heightP(10) , backgroundImage: 'url(./page2-test2.png)'  },
    { x: widthP(95), y: page2 + heightP(75), width: widthP(0.3), height: heightP(5), backgroundImage: 'url(./page2-test2.png)'   },
    { x: widthP(95), y: page2 + heightP(90), width: widthP(0.3), height: heightP(5) , backgroundImage: 'url(./page2-test2.png)'  },

    // maze player2 - part-X
    { x: widthP(90), y: page2 + heightP(45), width: widthP(10), height: heightP(0.5), backgroundImage: 'url(./page2-test.png)'  },
    { x: widthP(85), y: page2 + heightP(50), width: widthP(10), height: heightP(0.5), backgroundImage: 'url(./page2-test.png)'  },
    { x: widthP(85), y: page2 + heightP(55), width: widthP(5), height: heightP(0.5), backgroundImage: 'url(./page2-test.png)'  },
    { x: widthP(95), y: page2 + heightP(55), width: widthP(5), height: heightP(0.5), backgroundImage: 'url(./page2-test.png)'  },
    { x: widthP(80), y: page2 + heightP(60), width: widthP(5), height: heightP(0.5), backgroundImage: 'url(./page2-test.png)'  },
    { x: widthP(80), y: page2 + heightP(65), width: widthP(10), height: heightP(0.5), backgroundImage: 'url(./page2-test.png)'  },
    { x: widthP(95), y: page2 + heightP(70), width: widthP(5), height: heightP(0.5), backgroundImage: 'url(./page2-test.png)'  },
    { x: widthP(85), y: page2 + heightP(75), width: widthP(5), height: heightP(0.5), backgroundImage: 'url(./page2-test.png)'  },
    { x: widthP(85), y: page2 + heightP(80), width: widthP(10), height: heightP(0.5), backgroundImage: 'url(./page2-test.png)'  },
    { x: widthP(80), y: page2 + heightP(85), width: widthP(5), height: heightP(0.5), backgroundImage: 'url(./page2-test.png)'  },
    { x: widthP(90), y: page2 + heightP(85), width: widthP(5), height: heightP(0.5), backgroundImage: 'url(./page2-test.png)'  },
    { x: widthP(85), y: page2 + heightP(90), width: widthP(5), height: heightP(0.5), backgroundImage: 'url(./page2-test.png)'  },
    { x: widthP(80), y: page2 + heightP(95), width: widthP(5), height: heightP(0.5), backgroundImage: 'url(./page2-test.png)'  },
    { x: widthP(90), y: page2 + heightP(95), width: widthP(5), height: heightP(0.5), backgroundImage: 'url(./page2-test.png)'  },

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
        <>
          {(platform.backgroundImage?.startsWith('url')) ? <div
            key={index}
            style={{
              position: 'absolute',
              left: `${platform.x}px`,
              bottom: `${platform.y}px`,
              width: `${platform.width}px`,
              height: `${platform.height}px`,
              backgroundColor: ' red',
              backgroundImage: platform.backgroundImage,
              backgroundSize: 'contain',
              backgroundRepeat: 'repeat',
              zIndex: platform.zIndex ?? 1,
            }}
          /> : <img key={index}
            src={platform.backgroundImage}
            alt="PlayerPhoto "
            style={{
              position: "absolute",
              left: `${platform.x}px`,
              bottom: `${platform.y}px`,
              width: `${platform.width}px`,
              height: `${platform.height}px`,
            }}
          /> }
        </>
      ))}
    </>
  );
};

export default Platform;
