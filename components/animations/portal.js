"use client";
import React from "react";

const Portal = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <svg
        width="400"
        height="400"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Vòng tròn ngoài */}
        <circle
          cx="200"
          cy="200"
          r="130"
          stroke="gray"
          strokeWidth="2"
          fill="white"
        />
        <circle
          cx="200"
          cy="200"
          r="120"
          stroke="gray"
          strokeWidth="2"
          fill="white"
        />
        <circle
          cx="200"
          cy="200"
          r="110"
          stroke="gray"
          strokeWidth="2"
          fill="white"
        />
        <line x1="70" y1="200" x2="330" y2="200" stroke="gray" strokeWidth="2" />
        <line x1="200" y1="70" x2="200" y2="330" stroke="gray" strokeWidth="2" />



        {/* Hình vuông */}
        <rect
          x="100"
          y="100"
          width="200"
          height="200"
          fill="#333"
        />

        {/* Vòng tròn trong */}
        <circle
          cx="200"
          cy="200"
          r="90"
          stroke="lightgray"
          strokeWidth="3"
          fill="white"
        />

        {/* Mũi tên trên */}
        <polygon points="200,60 180,90 220,90" fill="white" stroke="red" strokeWidth="3" />
        {/* Mũi tên dưới */}
        <polygon points="200,340 180,310 220,310" fill="white" stroke="red" strokeWidth="3" />
        {/* Mũi tên trái */}
        <polygon points="60,200 90,180 90,220" fill="white" stroke="red" strokeWidth="3" />
        {/* Mũi tên phải */}
        <polygon points="340,200 310,180 310,220" fill="white" stroke="red" strokeWidth="3" />

        {/* Mũi tên chéo trên-trái */}
        <polygon points="80,80 85,115 115,80" fill="white" stroke="red" strokeWidth="3" />
        {/* Mũi tên chéo trên-phải */}
        <polygon points="285,85 320,115 320,85" fill="white" stroke="red" strokeWidth="3" />
        {/* Mũi tên chéo dưới-trái */}
        <polygon points="80,320 115,320 80,285" fill="white" stroke="red" strokeWidth="3" />
        {/* Mũi tên chéo dưới-phải */}
        <polygon points="320,315 285,315 320,285" fill="white" stroke="red" strokeWidth="3" />
      </svg>
    </div>
  );
};

export default Portal;
