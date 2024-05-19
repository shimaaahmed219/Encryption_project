/* eslint-disable react/prop-types */
// src/components/AnimatedText.js



const AnimatedText = ({ text }) => {
    return (
        <h1 className="font-bold leading-[45px] font-tinos text-yellow-500 text-[40px]">
          
            {text.split('').map((char, index) => (
                <span
                    key={index}
                    className="inline-block  text-[40px] opacity-0 animate-fadeIn"
                    style={{ animationDelay: `${index * 0.025}s` }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </span>
            ))}
        </h1>
    );
};

export default AnimatedText;
