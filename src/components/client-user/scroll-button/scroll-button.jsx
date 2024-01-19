'use client';
import { useState } from 'react';

export default function ScrollButton() {
    const [behavior, setBehavior] = useState(false);

    function scrollToBottom() {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
        });
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    const handleScroll = () => {
        setBehavior(!behavior);
        if (behavior) {
            scrollToTop();
        } else {
            scrollToBottom();
        }
    };

    return (
        <div
            onClick={handleScroll}
            className="flex justify-center items-center animate-bounce fixed top-1/2 right-8 bg-white w-10 h-10 rounded-full border shawdow"
        >
            {!behavior ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                </svg>
            ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                </svg>
            )}
        </div>
    );
}
