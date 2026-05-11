"use client"
import { useState } from 'react';

export default function Toggler({isActive,setTheme}:{isActive:boolean,setTheme:()=>void})  {
  const [isOn, setIsOn] = useState<boolean>(isActive);

  function handleToggle() {
    setTheme();
    setIsOn(cur => !cur);
  }

  return (
    <div 
      onClick={handleToggle}
      className={`
        relative w-14 h-7 flex items-center cursor-pointer rounded-full p-1 transition-colors duration-300
        ${isOn ? 'bg-brand-green' : 'bg-gray-300'}
      `}
    >
      <div
        className={`
          bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300
          ${isOn ? 'translate-x-7' : 'translate-x-0'}
        `}
      />
    </div>
  );
};