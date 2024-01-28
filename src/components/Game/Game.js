import React, { useState, useEffect } from 'react';
import Ladder from '../Ladder/Ladder';
import Platform, { generatePlatforms } from '../Platform/Platform';
import PlayerSprite from '../PlayerSprite/PlayerSprite';
import PopcornText from '../popcornText/popcornText';

import './Game.css'

const Game = () => {
  const [gameSize, setGameSize] = useState({ width: document.documentElement.clientWidth, height: document.documentElement.clientHeight * 3 }); // 729.60 px // 1536 px
  const widthP = (x) => gameSize.width * x / 100;
  const heightP = (y) => gameSize.height * y / 300;
  const borderWidth = 5; // not sure about this // need to remove this
  const page3 = 0;
  const page2 = document.documentElement.clientHeight;
  const page1 = document.documentElement.clientHeight * 2;
  const gravity = heightP(1); // need to decide how much
  const [playerDimensions, setPlayerDimensions] = useState((((1.3 * gameSize.height / 3) + (gameSize.width)) * 0.01) / 32);
  const playerWidth = 32 * playerDimensions;// need to decide how much
  const playerHeight = 32 * playerDimensions;// need to decide how much
  const [playerX, setPlayerX] = useState(widthP(21));// starting position
  const [playerY, setPlayerY] = useState(page1 + heightP(91));
  const [player2X, setPlayer2X] = useState(widthP(97));
  const [player2Y, setPlayer2Y] = useState(page2 + heightP(95));
  const [moveDirection, setMoveDirection] = useState(null);

  const [flashlightXDirection, setFlashlightXDirection] = useState(25); // inverse plus width of the flashlight, need to change
  const [flashlightYDirection, setFlashlightYDirection] = useState(0);
  const [hasFlashlight, setHasFlashlight] = useState(false);
  const [toggleFlashlight, setToggleFlashlight] = useState();
  
  const [electricBoardSwitch, setElectricBoardSwitch] = useState(false);
  const [playerOneButton, setPlayerOneButton] = useState(false);
  const [playerTwoButton, setPlayerTwoButton] = useState(false);
  const [cinnemaMode, setCinnemaMode] = useState(false);
  const [currentMovies, setCurrentMovies] = useState('./default-project.png');
  const [enterKeyallowed, setEnterKeyallowed] = useState(false);
  const [enterKeyPosition, setEnterKeyPosition] = useState(null);
  const [sourceCodeLink, setSourceCodeLink] = useState(false); // add devweber link
  const [seeLiveLink, setSeeLiveLink] = useState(false); // add devweber link
  const [openLink, setOpenLink] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(0); // The current frame index
  
  const [showText, setShowText] = useState(true);
  const [pickedUpFlashLight, setPickedUpFlashLight] = useState(false);
  
  const [windowImage, setWindowImage] = useState(``);
  const [windowPosition, setWindowPosition] = useState(null);
  const [windowSize, setWindowSize] = useState(`${widthP(25)}px ${heightP(25)}px`);

  const [frontRowSeatText, setFrontRowSeatText] = useState("");
  const [middleRowSeatText, setMiddleRowSeatText] = useState("");
  const [lastRowSeatText, setLastRowSeatText] = useState("");
  const [frontRowSeatBox, setFrontRowSeatBox] = useState();
  const [middleRowSeatBox, setMiddleRowSeatBox] = useState();
  const [lastRowSeatBox, setLastRowSeatBox] = useState();

  const [isVisible, setIsVisible] = useState(true);
  const [h1DevWeber, setH1DevWeber] = useState('DevWeber')
  const [h3Contact, setH3Contact] = useState('Contact');
  const [h3Home, setH3Home] = useState('Home');
  const [h3Work, setH3Work] = useState('Work');
  const [pIntro, setPIntro] = useState("Hello!👋 I'm Deven, a web🕸️ developer in SF");
  

  const directionFrameMap = {
    right: 6, // Frames 6 to 8
    up: 9,   // Frames 9 to 11
    left: 3, // Frames 3 to 5
    down: 0  // Frames 0 to 2
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
    { x: widthP(75.5), y: page1 + heightP(60), width: widthP(2.5), height: heightP(30) + platforms[1].height },
  ];

  const bImages = [
    //page 1
    { x: widthP(0), y: page1 + heightP(99), width: widthP(100), height: heightP(1), backgroundImage: "url('brick-top.png')" , zIndex: 11},
    { x: widthP(0), y: page1 + heightP(0), width: widthP(100), height: heightP(90), backgroundImage: "url('test-background.png')" },
    { x: widthP(99), y: page1 + heightP(0), width: widthP(1), height: heightP(100), backgroundImage: "url('brick-right.png')" }, 
    { x: widthP(0), y: page1 + heightP(0), width: widthP(1), height: heightP(100), backgroundImage: "url('brick-left.png')" },
    { x: widthP(0), y: page1 + heightP(90), width: widthP(100), height: heightP(9), backgroundImage: "url('page-one-top-middle-background.png')", zIndex: 11},
    //page2
    { x: widthP(0), y: page2 + heightP(40), width: widthP(100), height: heightP(60), backgroundImage: "url('sprite-0009.png')" },

  ]

  const imageProps = [
    { x: widthP(10), y: page1 + heightP(45), width: widthP(19), height: heightP(35), backgroundImage: "/test-port.png", zIndex: 1 },
    { x: widthP(67), y: page1 + heightP(30), width: widthP(30), height: heightP(20), backgroundImage: "/test----r.png", zIndex: 1 },
    { x: widthP(19), y: page2 + heightP(0), width: widthP(62), height: heightP(40), backgroundImage: "/carpet5.png", zIndex: -1 },
    { x: widthP(0), y: page2 + heightP(0), width: widthP(19), height: heightP(40), backgroundImage: "/sun.png", zIndex: -1 },
    { x: widthP(81), y: page2 + heightP(0), width: widthP(19), height: heightP(40), backgroundImage: "/moon.png", zIndex: -1 },
  ]

  const intObjects = [
    { x: widthP(1),    y: page1 + heightP(0.8),  width: widthP(3), height: heightP(8.5) - heightP(0.5), backgroundImage: '/electric-board-sprite.png' },//light switch/board 0
    { x: widthP(98),   y: page1 + heightP(61.7), width: widthP(0.50), height: heightP(1.3), backgroundImage: hasFlashlight? 'flashlight-sprite.png': '/flashlight_1-sprite.png' }, //flashlight 
    { x: widthP(17.5), y: page2 + heightP(40) + heightP(0.5), width: widthP(2.5), height: heightP(4.5), backgroundImage: '/electric-board-sprite-fliped.png'  }, //player1 button 
    { x: widthP(97.5), y: page2 + heightP(40) + heightP(0.5), width: widthP(2.5), height: heightP(4.5) , backgroundImage: '/electric-board-sprite-fliped.png' }, // player2 button 
    { x: widthP(22.5), y: page2 + heightP(0.5), width: widthP(0.3), height: heightP(7.5) - heightP(0.5),backgroundImage: '/door.png' }, // door 1
    { x: widthP(77.2), y: page2 + heightP(0.5), width: widthP(0.3), height: heightP(7.5) - heightP(0.5),backgroundImage: '/door.png' }, // door 2
    { x: widthP(51),   y: page2 + heightP(11),  width: widthP(2.5), height: heightP(3), backgroundImage: '/chair2.png', zIndex: 11  }, //last row seat
    { x: widthP(51),   y: page2 + heightP(19),  width: widthP(2.5), height: heightP(3),backgroundImage: '/chair2.png', zIndex: 11  }, //middle row seat
    { x: widthP(50),   y: page2 + heightP(29),  width: widthP(2.5), height: heightP(3),backgroundImage: '/chair2.png', zIndex: 11  }, //first row seat
    { x: widthP(86),   y: page2 + heightP(12),  width: widthP(9), height: heightP(18) }, //live moon
    { x: widthP(5),    y: page2 + heightP(11),  width: widthP(9), height: heightP(18) }, //sourcecode sun
    {x: widthP(5),    y: page3 + heightP(8),  width: widthP(9), height: heightP(3) }, //contact
    {x: widthP(16),    y: page3 + heightP(8),  width: widthP(11), height: heightP(3) }, //linkedin
    {x: widthP(29),    y: page3 + heightP(8),  width: widthP(9), height: heightP(3) }, // github
    {x: widthP(39),    y: page3 + heightP(8),  width: widthP(9), height: heightP(3) } // resume
  ]

  const checkInteractions = () => {
   

    const playerRight = playerX + playerWidth;
    const playerBottom = playerY - playerHeight; 

    if ((playerRight >= intObjects[0].x && playerX <= intObjects[0].x + intObjects[0].width &&
      playerBottom <= intObjects[0].y && playerY >= intObjects[0].y - intObjects[0].height) && !electricBoardSwitch) {
      // optional change the img or add annimations
      setWindowImage(`url('./background-test.png'), linear-gradient(black, black)`);
      setWindowPosition(`${widthP(0)}px ${gameSize.height - page1 - heightP(90)}px`);
      setWindowSize(`${widthP(100)}px ${heightP(90)}px`);
      setElectricBoardSwitch(true);
      setHasFlashlight(false);

      setTimeout(() => {
        scrollOnePage();
        setPlayerX(widthP(0));
        setPlayerY(page2 + heightP(95));
        setHasFlashlight(true);
        setWindowPosition(null);
        setWindowSize(`${widthP(25)}px ${heightP(25)}px`)
        setWindowImage(``);
      }, 7000);
    }

    if ((playerRight >= intObjects[1].x && playerX <= intObjects[1].x + intObjects[1].width &&
      playerBottom <= intObjects[1].y && playerY >= intObjects[1].y - intObjects[1].height) && !hasFlashlight) {
      setHasFlashlight(true);
      setToggleFlashlight(true);
      setPickedUpFlashLight(true);
    }

    if ((playerRight >= intObjects[2].x && playerX <= intObjects[2].x + intObjects[2].width &&
      playerBottom <= intObjects[2].y && playerY >= intObjects[2].y - intObjects[2].height) && !playerOneButton) {
      setPlayerOneButton(true);
      setPlayerX(widthP(20));
      setPlayerY(page2 + heightP(33));
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
      setFrontRowSeatBox(widthP(64));
      setMiddleRowSeatBox(widthP(31));
      setLastRowSeatBox(widthP(36)); 
      setFrontRowSeatText("  Isn't this the website he created for students at the USF School of Management?");
      setMiddleRowSeatText("  Yes, indeed, it was developed using React for the frontend and Spring Boot for the backend");
      setLastRowSeatText("  It simulates a tycoon game for buying and selling property in Austin, Texas");
    } else if (playerRight >= intObjects[7].x && playerX <= intObjects[7].x + intObjects[7].width &&
      playerBottom <= intObjects[7].y && playerY >= intObjects[7].y - intObjects[7].height) {
      setCurrentMovies('./green_dons.png');
      setCinnemaMode(true);
      setSourceCodeLink('https://github.com/Devenvaruv/green-dons')
      setSeeLiveLink('https://green-dons.vercel.app/dashboard');
      setFrontRowSeatBox(widthP(33));
      setMiddleRowSeatBox(widthP(56));
      setLastRowSeatBox(widthP(41));
      setFrontRowSeatText("  I heard it was developed using Next.js and designed with Ant Design");
      setMiddleRowSeatText("  Yes, they created a framework specifically for adding future courses");
      setLastRowSeatText("  They won first prize in the sustainability challenge");
    } else if (playerRight >= intObjects[8].x && playerX <= intObjects[8].x + intObjects[8].width &&
      playerBottom <= intObjects[8].y && playerY >= intObjects[8].y - intObjects[8].height) {
      setCurrentMovies('./ebprec2.png');// need to change its type
      setCinnemaMode(true);
      setSourceCodeLink('https://interest-form.vercel.app/')
      setSeeLiveLink('https://interest-form-git-fork-devenvaruv-chat-bot-ebprec-usfca.vercel.app/');
      setFrontRowSeatBox(widthP(33));
      setMiddleRowSeatBox(widthP(36));
      setLastRowSeatBox(widthP(26));
      setFrontRowSeatText("  Ah yes, he developed this form using Next.js and implemented Tailwind CSS for styling.");
      setMiddleRowSeatText("  This form is utilized by EBPREC in Oakland County to assist their homeless population");
      setLastRowSeatText("  I've also heard that he implemented a chatbot using OpenAI API.");
    } else {
      setCinnemaMode(false);
      setShowText(true);
    }

    if (playerRight >= intObjects[9].x && playerX <= intObjects[9].x + intObjects[9].width &&
      playerBottom >= intObjects[9].y && playerY <= intObjects[9].y + intObjects[9].height) {
      setEnterKeyallowed(true);
      setEnterKeyPosition(widthP(86))
      setOpenLink(seeLiveLink);
    }else if (playerRight >= intObjects[10].x && playerX <= intObjects[10].x + intObjects[10].width &&
      playerBottom >= intObjects[10].y && playerY <= intObjects[10].y + intObjects[10].height) {
     setEnterKeyallowed(true);
     setEnterKeyPosition(widthP(4))
     setOpenLink(sourceCodeLink);
    } else {
      setEnterKeyallowed(false);
      setEnterKeyPosition(null);
    }

    if (playerRight >= intObjects[11].x && playerX <= intObjects[11].x + intObjects[11].width &&
      playerBottom <= intObjects[11].y && playerY >= intObjects[11].y - intObjects[11].height) {
      setEnterKeyallowed(false);
      
    }
    if (playerRight >= intObjects[12].x && playerX <= intObjects[12].x + intObjects[12].width &&
      playerBottom <= intObjects[12].y && playerY >= intObjects[12].y - intObjects[12].height) {
      setEnterKeyallowed(true);
      setOpenLink('https://www.linkedin.com/in/deven-varu-027318155/');
    }
    if (playerRight >= intObjects[13].x && playerX <= intObjects[13].x + intObjects[13].width &&
      playerBottom <= intObjects[13].y && playerY >= intObjects[13].y - intObjects[13].height) {
      setEnterKeyallowed(true);
      setOpenLink('https://github.com/Devenvaruv');
    }
    if (playerRight >= intObjects[14].x && playerX <= intObjects[14].x + intObjects[14].width &&
      playerBottom <= intObjects[14].y && playerY >= intObjects[14].y - intObjects[14].height) {
      setEnterKeyallowed(true);
      setOpenLink('/Deven_Varu_Resume.pdf');
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
      const nextFrame = startFrame + ((prevFrame - startFrame + 1) % 3);
      return nextFrame;
    });
  };

  useEffect(() => {
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
      
      if ((e.key === 'F' || e.key === 'f') && hasFlashlight) {
        setToggleFlashlight(prevState => !prevState);
        setWindowImage('');
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
        setFlashlightXDirection(25);// acording to widthP of flashlight
        setFlashlightYDirection(12.5);
      
        advanceFrame('left');
        if(hasFlashlight && toggleFlashlight) setWindowImage(`url('./flashlight-left-sprite.png'), linear-gradient(black, black)`);
        new2X = Math.min(widthP(100) - playerWidth - borderWidth * 2, player2X + 10);
        break;
      case 'ArrowRight':
        newX = Math.min(widthP(100) - playerWidth - borderWidth * 2, playerX + 10);
        setFlashlightXDirection(-0.3);
        setFlashlightYDirection(12.5);
        advanceFrame('right');
        if(hasFlashlight && toggleFlashlight) setWindowImage(`url('./flashlight-right-sprite.png'), linear-gradient(black, black)`);
        new2X = Math.max(borderWidth, player2X - 10);
        break;
      case 'ArrowDown':
        newY = Math.max(borderWidth, playerY - 10);
        setFlashlightXDirection(12.5);// acording to widthP of flashlight
        setFlashlightYDirection(0);
        advanceFrame('down')
        if(hasFlashlight && toggleFlashlight) setWindowImage(`url('./flashlight-down-sprite.png'), linear-gradient(black, black)`);
        new2Y = Math.min(gameSize.height - playerHeight - borderWidth * 2, player2Y + 10);
        break;
      case 'ArrowUp':
        newY = Math.min(gameSize.height - playerHeight - borderWidth * 2, playerY + 10);
        setFlashlightXDirection(12.5);// acording to widthP of flashlight
        setFlashlightYDirection(25);
        advanceFrame('up')
        if(hasFlashlight && toggleFlashlight) setWindowImage(`url('./flashlight-up3-sprite.png'), linear-gradient(black, black)`);
        new2Y = Math.max(borderWidth, player2Y - 10);
        break;
      default:
        break;
    }

    const playerOneTouchPlatforms = platforms.some(platform => {
      return (
        newX < platform.x + platform.width &&
        newX + playerWidth > platform.x &&
        newY < platform.y + platform.height&&
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
  }, [playerX, playerY, moveDirection, gameSize, playerWidth, playerHeight, flashlightXDirection, currentFrame]);


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

  const handleTypingComplete = () => {
    setTimeout(() => {
        setShowText(false);
    }, 7000); // Hide after 3 seconds
};

useEffect(() => {
  // Set a timeout to hide the content after 3 seconds
  const timer = setTimeout(() => setIsVisible(false), 5000);

  // Clear the timer if the component unmounts
  return () => clearTimeout(timer);
}, []);

useEffect(() => {
  // Function to convert a string to binary
  const toBinary = (str) => {
    return str.split('').map(char => {
      return char.charCodeAt(0).toString(2);
    }).join(' ');
  };

  // Set a timeout to change the h3 content to binary after 2 seconds
  const timer = setTimeout(() => {
    setH1DevWeber(toBinary('deadweber'));
    setH3Home(toBinary('no home'));
    setH3Work(toBinary('to death'));
    setPIntro(toBinary('Hello!👋 Im Deven, a web🕸️ developer in SF'));
    setH3Contact(toBinary('666'));
  }, 2000);

  // Clear the timer if the component unmounts
  return () => clearTimeout(timer);
}, []);

  return (
    <div
      className={"no-scrollbar"}
      style={{ width: gameSize.width, height: gameSize.height }}
    >
      {/* global */}

      <div
        style={{
          position: "absolute",
          width: gameSize.width,
          height: gameSize.height,
          backgroundColor: "rgba(0, 0, 0, 0.90)",
          maskImage: windowImage,
          WebkitMaskImage: windowImage,
          maskRepeat: "no-repeat, repeat",
          WebkitMaskComposite: "destination-out",
          maskComposite: "exclude",
          zIndex: "10",
          maskPosition: windowPosition ?? `${ playerX + playerWidth / 2 - widthP(flashlightXDirection) }px ${ gameSize.height - (playerY + playerHeight / 2) - heightP(flashlightYDirection) }px`,
          maskSize: windowSize,
          pointerEvents: "none",
        }}
      ></div>

      
      {isVisible && <>
        <div style={{ position: "absolute",
          width: gameSize.width,
          height: gameSize.height/3,
          backgroundColor: "rgba(255, 255, 255, 0.99)",
          zIndex: 9998}}>
          </div>
          <h1
        style={{
          position: "absolute",
          left: widthP(6),
          bottom: page1 + heightP(93),
          fontSize: widthP(3),
          height: heightP(0.1),
          lineHeight: heightP(0.1),
          color: "black",
          fontFamily: "serif",
          zIndex: 9999,
        }}
      >
        {h1DevWeber}
      </h1>
      <h3
        style={{
          position: "absolute",
          left: widthP(75.5),
          bottom: page1 + heightP(93),
          fontSize: widthP(1.5),
          height: heightP(0.1),
          lineHeight: heightP(0.1),
          color: "blue",
          fontFamily: "serif",
          zIndex: 9999,
        }}
      >
        {h3Home}
      </h3>
      <h3
        style={{
          position: "absolute",
          left: widthP(81),
          bottom: page1 + heightP(93),
          fontSize: widthP(1.5),
          height: heightP(0.1),
          lineHeight: heightP(0.1),
          color: "black",
          fontFamily: "serif",
          zIndex: 9999,
        }}
      >
        {h3Work}
      </h3>
      <h3
        style={{
          position: "absolute",
          left: widthP(86.5),
          bottom: page1 + heightP(93),
          fontSize: widthP(1.5),
          height: heightP(0.1),
          lineHeight: heightP(0.1),
          color: "black",
          fontFamily: "serif",
          zIndex: 9999,
        }}
      >
      {h3Contact}
      </h3>

      <p style={{
          position: "absolute",
          left: widthP(40),
          bottom: page1 + heightP(50),
          fontSize: widthP(5),
          height: heightP(0.1),
          lineHeight: heightP(0.1),
          color: "black",
          fontFamily: "serif",
          maxWidth: widthP(40),
          zIndex: 9999,
        }}>{pIntro}</p>
      </>}
      
      {!hasFlashlight && !pickedUpFlashLight && (
        <div
          style={{
            position: "absolute",
            left: widthP(73),
            bottom: page1 + heightP(50),
            width: widthP(25),
            height: heightP(25),
            transform: `scaleX(-1)`,
            background:
              "linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 0) 100%)",
            clipPath: "polygon(0% 50%, 100% 0%, 100% 100%)",
            borderRadius: "50% / 70%",
            pointerEvents: "none",
            zIndex: 11,
          }}
        ></div>
      )}

      {/* {graphs.map((graph, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            left: `${graph.x}px`,
            bottom: `${graph.y}px`,
            width: `${graph.width}px`,
            height: `${graph.height}px`,
            backgroundColor: "black",
          }}
        />
      ))} */}

      <Platform platforms={platforms} />

      {intObjects.map((intObject, index) => (
       intObject.backgroundImage? <img
       key={index}
       src={intObject.backgroundImage} // project img
       alt="PlayerPhoto1"
       style={{
         position: "absolute",
         left: `${intObject.x}px`,
         bottom: `${intObject.y}px`,
         width: `${intObject.width}px`,
         height: `${intObject.height}px`,
         zIndex: intObject.zIndex?? 1,
       }}
     /> : ''
      ))}
      {ladders.map((ladder, index) => (
        <Ladder key={index} {...ladder} />
      ))}

      {bImages.map((bImage, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            left: `${bImage.x}px`,
            bottom: `${bImage.y}px`,
            width: `${bImage.width}px`,
            height: `${bImage.height}px`,
            backgroundImage: `${bImage.backgroundImage}`,
            backgroundRepeat: "repeat",
            zIndex: bImage.zIndex ?? -1,
          }}
        />
      ))}

      {imageProps.map((imageProp, index) => (
        <img
          key={index}
          src={imageProp.backgroundImage ?? "/staircase-sprite.png"} // project img
          alt="PlayerPhoto1"
          style={{
            position: "absolute",
            left: `${imageProp.x}px`,
            bottom: `${imageProp.y}px`,
            width: `${imageProp.width}px`,
            height: `${imageProp.height}px`,
            zIndex: `${imageProp.zIndex}`,
          }}
        />
      ))}

      <PlayerSprite
        playerX={playerX}
        playerY={playerY}
        moveDirection={moveDirection}
        frameIndex={currentFrame} // Pass the current frame index to the PlayerSprite component
        scale={(((1.3 * gameSize.height) / 3 + gameSize.width) * 0.01) / 32}
      />

      <img
        src="/naked_char.png" // PLAYER 2
        alt="Player"
        style={{
          position: "absolute",
          left: `${player2X}px`,
          bottom: `${player2Y}px`,
          width: 16,
          height: 32,
          transform: `scale(${
            (((1.3 * gameSize.height) / 3 + gameSize.width) * 0.01) / 32
          })`,
        }}
      />

      {/* page 1 components */}

      {windowImage === `url('./background-test.png'), linear-gradient(black, black)` && <p style={{position: "absolute",
          left: widthP(11),
          bottom: page1 + heightP(41),
          fontSize: widthP(1),
          height: heightP(0.1),
          lineHeight: heightP(0.2),
          maxWidth: widthP(20),
          color: "white",
          zIndex: 13,}}>{"Hi! My name is Deven, and this was my approach to creating a different type of portfolio"}</p>}
      <h1
        style={{
          position: "absolute",
          left: widthP(6),
          bottom: page1 + heightP(93),
          fontSize: widthP(2),
          height: heightP(0.1),
          lineHeight: heightP(0.1),
          color: "white",
          zIndex: 13,
        }}
      >
        DevWeber
      </h1>
      <h3
        style={{
          position: "absolute",
          left: widthP(75.5),
          bottom: page1 + heightP(93),
          fontSize: widthP(1),
          height: heightP(0.1),
          lineHeight: heightP(0.1),
          color: "white",
          zIndex: 13,
        }}>
        Home
      </h3>
      <h3
        style={{
          position: "absolute",
          left: widthP(81),
          bottom: page1 + heightP(93),
          fontSize: widthP(1),
          height: heightP(0.1),
          lineHeight: heightP(0.1),
          color: "white",
          zIndex: 13,
        }}
      >
        Work
      </h3>
      <h3
        style={{
          position: "absolute",
          left: widthP(86.5),
          bottom: page1 + heightP(93),
          fontSize: widthP(1),
          height: heightP(0.1),
          lineHeight: heightP(0.1),
          color: "white",
          zIndex: 13,
        }}
      >
        Contact
      </h3>

      {cinnemaMode && showText && (
        <>
          <div
            style={{
              position: "absolute", // Use 'relative', 'absolute', or 'fixed' depending on your layout needs
              left: frontRowSeatBox, // X coordinate
              bottom: page2 + heightP(33), // Y coordinate
              backgroundColor: "#333", color: "white", padding: "5px", borderRadius: "10px", border: "2px solid #555", maxWidth: widthP(20), boxSizing: "border-box", fontSize: widthP(0.4), lineHeight: heightP(0.2), zIndex: 1000, 
            }}
          >
            <PopcornText
              text={frontRowSeatText}
              typingSpeed={100} startTyping={cinnemaMode} onTypingComplete={handleTypingComplete}
            />
          </div>
          <div
            style={{ content: "", position: "absolute",
              left: frontRowSeatBox + widthP(0.5),
              bottom: page2 + heightP(31.5), // Position the triangle 'tail' above the bottom of the dialogue box
              borderWidth: heightP(1), // Size of the 'tail'
              borderStyle: "solid", borderColor: "#333 transparent transparent transparent", zIndex: 1001, 
            }}
          ></div>
        </>
      )}

      {cinnemaMode && showText && (
        <>
          <div
            style={{
              position: "absolute", // Use 'relative', 'absolute', or 'fixed' depending on your layout needs
              left: middleRowSeatBox, // X coordinate
              bottom: page2 + heightP(22.5), // Y coordinate
              backgroundColor: "#333", color: "white", padding: "5px", borderRadius: "10px", border: "2px solid #555", maxWidth: widthP(20), boxSizing: "border-box", fontSize: widthP(0.4), lineHeight: heightP(0.2), zIndex: 1000,
            }}
          >
            <PopcornText
              text={middleRowSeatText}
              typingSpeed={100} startTyping={cinnemaMode} onTypingComplete={handleTypingComplete}
            />
          </div>
          <div
            style={{
              content: "", position: "absolute",
              left: middleRowSeatBox + widthP(0.5),
              bottom: page2 + heightP(21), // Position the triangle 'tail' above the bottom of the dialogue box
              borderWidth: heightP(1), // Size of the 'tail'
              borderStyle: "solid", borderColor: "#333 transparent transparent transparent", zIndex: 1001,
            }}
          ></div>
        </>
      )}

      {cinnemaMode && showText && (
        <>
          <div
            style={{
              position: "absolute", // Use 'relative', 'absolute', or 'fixed' depending on your layout needs
              left: lastRowSeatBox, // X coordinate
              bottom: page2 + heightP(15), // Y coordinate
              backgroundColor: "#333", color: "white", padding: "5px", borderRadius: "10px", border: "2px solid #555", maxWidth: widthP(20), boxSizing: "border-box", fontSize: widthP(0.4), lineHeight: heightP(0.2), zIndex: 1000,
            }}
          >
            <PopcornText
              text={lastRowSeatText}
              typingSpeed={100} startTyping={cinnemaMode} onTypingComplete={handleTypingComplete}
            />
          </div>
          <div
            style={{
              content: "", position: "absolute",
              left: lastRowSeatBox + widthP(0.5),
              bottom: page2 + heightP(13.5), // Position the triangle 'tail' above the bottom of the dialogue box
              borderWidth: heightP(1), // Size of the 'tail'
              borderStyle: "solid", borderColor: "#333 transparent transparent transparent", zIndex: 1001,
            }}
          ></div>
        </>
      )}

      {/* test components */}
      <img
        src="./hanging-thing-sprite.png" // project img
        alt="PlayerPhoto2"
        style={{
          position: "absolute",
          left: widthP(70),
          bottom: page1 + heightP(10),
          width: widthP(3),
          height: heightP(3),
        }}
      />

      <img
        src="./torch--test.png" // project img
        alt="PlayerPhoto2"
        style={{
          position: "absolute",
          left: widthP(60),
          bottom: page1 + heightP(10),
        }}
      />

      <img
        src="./torch--test2.png" // project img
        alt="PlayerPhoto2"
        style={{
          position: "absolute",
          left: widthP(50),
          bottom: page1 + heightP(10),
        }}
      />

      <img
        src="./torch--test3.png" // project img
        alt="PlayerPhoto2"
        style={{
          position: "absolute",
          left: widthP(40),
          bottom: page1 + heightP(10),
        }}
      />

      {/* page2 components */}

      {playerOneButton ? <>
        <div
        style={{
          position: "absolute",
          left: widthP(0),
          bottom: page2 + heightP(40),
          width: widthP(20),
          height:heightP(60),
          backgroundColor: "rgba(0, 0, 0, 0.99)",
          zIndex: 12
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          left: widthP(80.3),
          bottom: page2 + heightP(40),
          width: widthP(20),
          height:heightP(60),
          backgroundColor: "rgba(0, 0, 0, 0.99)",
          zIndex: 12
        }}
      ></div>
       </>: <div
        style={{
          position: "absolute",
          left: 0,
          bottom: page2,
          width: widthP(100),
          height:heightP(40),
          backgroundColor: "rgba(0, 0, 0, 0.99)",
          zIndex: 12
        }}
      ></div>}

      {enterKeyallowed && <p style={{
        position: "absolute",
        left: enterKeyPosition,
        bottom: page2 + heightP(1),
        fontSize: widthP(1),
        height: heightP(0.1),
        lineHeight: heightP(0.1),
        color: "white",
        zIndex: 9998,
      }}>{"press enter"}</p>}

        {cinnemaMode && <>
          <p style={{
          position: "absolute",
          left: widthP(1),
          bottom: page2 + heightP(38),
          fontSize: widthP(1),
          height: heightP(0.1),
          lineHeight: heightP(0.1),
          maxWidth: widthP(20),
          color: "white",
          zIndex: 9998,
        }}>{"enter sun to see source code"}</p>
         <p style={{
          position: "absolute",
          left: widthP(81),
          bottom: page2 + heightP(38),
          fontSize: widthP(1),
          height: heightP(0.1),
          lineHeight: heightP(0.1),
          maxWidth: widthP(20),
          color: "white",
          zIndex: 9998,
        }}>{"enter moon see for yourself"}</p>
        </>}

      <img
        className={cinnemaMode ? "player-view" : ""}
        src={currentMovies} // project img
        alt="Player"
        style={{
          position: "absolute",
          left: widthP(20 + 0.3),
          bottom: page2 + heightP(40 + 0.5),
          width: widthP(60 - 0.3),
          height: cinnemaMode ? heightP(53) : heightP(60 - 0.5),
          zIndex: cinnemaMode ? 1000 : -1,
        }}
      />

      {/* page3 components */}

      <p
        style={{
          position: "absolute",
          left: widthP(30),
          bottom: page3 + heightP(60),
          width: widthP(60),
          height: widthP(1.6),
        }}
      >
        {
          " Thank you so much for playing my game/viewing my portfolio/visiting my website"
        }
      </p>
      {false && <p
        style={{
          position: "absolute",
          left: widthP(30),
          bottom: page3 + heightP(50),
          width: widthP(60),
          height: widthP(1.6),
        }}
      >
        {
          "Im proud of you and dont let anyone else ever tell you otherwise, we are almost there; keep going"
        }
      </p>}

      <div style={{
            position: "absolute",
            left: widthP(5),
            bottom: page3 + heightP(10),
            fontSize: widthP(1.3),
            height: heightP(0.1),
            lineHeight: heightP(0.1),
        }}><a href= "mailto:dvvaru@dons.usfca.edu" style={{color: 'inherit', textDecoration: 'none'}}>Contact</a></div>
        <div style={{
           position: "absolute",
           left: widthP(16),
           bottom: page3 + heightP(10),
           fontSize: widthP(1.3),
           height: heightP(0.1),
           lineHeight: heightP(0.1),
        }}><a href= "https://www.linkedin.com/in/deven-varu-027318155/" target="_blank" rel="noopener noreferrer"  style={{color: 'inherit', textDecoration: 'none'}}>Linkedin</a></div>
         <div style={{
           position: "absolute",
           left: widthP(29),
           bottom: page3 + heightP(10),
           fontSize: widthP(1.3),
           height: heightP(0.1),
           lineHeight: heightP(0.1),
        }}><a href= "https://github.com/Devenvaruv" target="_blank" rel="noopener noreferrer"  style={{color: 'inherit', textDecoration: 'none'}}>Github</a></div>
        <div style={{
           position: "absolute",
           left: widthP(39),
           bottom: page3 + heightP(10),
           fontSize: widthP(1.3),
           height: heightP(0.1),
           lineHeight: heightP(0.1),
        }}><a href= "/Deven_Varu_Resume.pdf" target="_blank" style={{color: 'inherit', textDecoration: 'none'}}>Resume</a></div>
    </div>

    
  );
};

export default Game;

// fix border width problem bro

//page 1 work-
 /*
  add different img based on light is on/off or a flashlight is being shinned on
  add javascript/css/ etc icons to shields and add shields
  add a animation to the character walking to the electric board
  add props
 */

// page 2 work-
/* 
   remove yellow square and add circles with white or black border that flash with text in the center
   have a press enter flashing sign on them as well
   add door sprite/ or door opening sprites
   add a white arrow on the seatable seats
   add character or drinks or something on other seats
   add or find some textures for the borders


*/  

/* 
  figure out how to async load img and css 


*/

