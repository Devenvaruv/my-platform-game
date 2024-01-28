import React, { useState, useEffect } from 'react';

const PopcornText = ({ text, typingSpeed, startTyping, onTypingComplete }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        if (!startTyping || text.length === 0) {
            return; 
        }

        setDisplayedText('');
        let index = 0;

        const timeoutId = setInterval(() => {
            if (index < text.length) {
                setDisplayedText(displayedText => displayedText + text.charAt(index));
                index++;
            } else {
                clearInterval(timeoutId);
                if (onTypingComplete) onTypingComplete();
            }
        }, typingSpeed);

        return () => clearInterval(timeoutId);
    }, [text, typingSpeed, startTyping, onTypingComplete]);

    return <div>{displayedText}</div>;
}

export default PopcornText;
