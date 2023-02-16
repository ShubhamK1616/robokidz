import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item gap-y-4 bg-[#f8f9fc]">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div className='flex text-[#4e73df] font-bold'>{title}</div>
        <div className='text-[#4e73df] font-bold'>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && 
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-9 md:gap-x-6 px-6 gap-y-4">
      <div className="w-full flex border rounded-xl bg-[#fff] shadow-md md:h-72 h-48 justify-center items-center text-[#4e73df] font-bold">1</div>
      <div className="w-full flex border rounded-xl bg-[#fff] shadow-md md:h-72 h-48 justify-center items-center text-[#4e73df] font-bold">2</div>
      <div className="w-full flex border rounded-xl bg-[#fff] shadow-md md:h-72 h-48 justify-center items-center text-[#4e73df] font-bold">3</div>

    </div>
      }
    </div>
  );
};

export default Accordion;