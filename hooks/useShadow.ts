import { useState } from "react";

export const useShadow = () => {
  const [shadow, setShadow] = useState<string>('none');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = e.clientX - centerX;
    const offsetY = e.clientY - centerY;
    const ratio = 0.1;
    const shadowX = offsetX * ratio * 2;
    const shadowY = offsetY * ratio * 2;
    setShadow(`${shadowX}px ${shadowY}px 30px 1px #6d5de7`);
  };

  const handleMouseLeave = () => {
    setShadow('none');
  };

  return {
    shadow,
    handleMouseMove,
    handleMouseLeave,
  };
};
