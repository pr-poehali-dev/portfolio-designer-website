
import React from 'react';

interface DotPatternProps {
  className?: string;
}

const DotPattern: React.FC<DotPatternProps> = ({ className }) => {
  return (
    <div className={`absolute inset-0 z-0 opacity-20 ${className}`}>
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, rowIndex) => (
          <div key={`row-${rowIndex}`} className="flex justify-around">
            {Array.from({ length: 20 }).map((_, colIndex) => (
              <div 
                key={`dot-${rowIndex}-${colIndex}`} 
                className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-black mx-4 my-4 md:mx-6 md:my-6"
                style={{
                  transform: `translate(${Math.random() * 5 - 2.5}px, ${Math.random() * 5 - 2.5}px)`,
                  opacity: Math.random() * 0.5 + 0.5
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DotPattern;
