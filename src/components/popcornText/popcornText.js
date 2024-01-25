import React, { useState, useEffect } from 'react';

const PopcornText = ({ text, typingSpeed, startTyping }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        if (!startTyping || text.length === 0) {
            return; // Do nothing if startTyping is false or text is empty
        }

        setDisplayedText(''); // Reset text when startTyping becomes true
        let index = 0;

        const timeoutId = setInterval(() => {
            if (index < text.length) {
                setDisplayedText(displayedText => displayedText + text.charAt(index));
                index++;
            } else {
                clearInterval(timeoutId);
            }
        }, typingSpeed);

        return () => clearInterval(timeoutId); // Cleanup function
    }, [text, typingSpeed, startTyping]); // Add startTyping to the dependency array

    return <div>{displayedText}</div>;
}

export default PopcornText;
