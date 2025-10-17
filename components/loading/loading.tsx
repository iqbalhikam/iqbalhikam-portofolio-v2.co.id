
import React from 'react';
import SplitText from '../ui/SplitText';


const Loading = () => {

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <SplitText
        text="Hello, Tailwind!"
        className="text-2xl font-semibold text-center"
        delay={150}
        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
        
        threshold={0.2}
        rootMargin="-50px"
        onLetterAnimationComplete={Loading}
      />
    </div>
  );
};

export default Loading;
