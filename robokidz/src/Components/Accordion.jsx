import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item gap-y-4 bg-[#f8f9fc]">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && 
      // <div className="accordion-content">{content}</div>
      <div className="flex flex-row py-9">
      <div className="flex mx-12 border rounded-xl bg-[#fff] shadow-md w-1/3 h-72">1</div>
      <div className="flex mx-12 border rounded-xl bg-[#fff] shadow-md w-1/3 h-72">2</div>
      <div className="flex mx-12 border rounded-xl bg-[#fff] shadow-md w-1/3 h-72">3</div>

    </div>
      }
    </div>
  );
};

export default Accordion;