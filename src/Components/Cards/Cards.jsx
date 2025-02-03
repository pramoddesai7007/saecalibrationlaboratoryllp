// import React, { useState, useEffect } from "react";

// const Cards = ({ imag, header }) => {
//   const [hovered, setHovered] = useState(false); // Track if the card is hovered
//   const [currentIndex, setCurrentIndex] = useState(0); // Track the current image index

//   useEffect(() => {
//     if (!hovered) return; // Stop the motion if not hovered

//     const timer = setTimeout(() => {
//       // Move to the next image or loop back to the first one
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % imag.length);
//     }, 1000); // Pause for 1 second on each image

//     return () => clearTimeout(timer); // Cleanup on hover end or component unmount
//   }, [hovered, currentIndex, imag.length]);

//   return (
//     <div
//       className="border-black bg-white hover:border shadow-md rounded-lg text-center relative lg:w-[300px] p-3 lg:h-[280px] h-[240px] bg-[#F9F9F9] hover:shadow-2xl cursor-pointer hover:shadow-stone-400 group overflow-hidden"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       {/* Image container */}
//       <div className="relative mt-2 mb-1 w-full lg:h-[200px] h-[120px] overflow-hidden">
//         <div
//           className={`flex h-full`}
//           style={{
//             width: `${imag.length * 100}%`,
//             transform: `translateX(-${currentIndex * (100 / imag.length)}%)`, // Move to the current image
//             transition: hovered ? "transform 500ms ease-in-out" : "none", // Smooth transition on hover
//           }}
//         >
//           {imag.map((item, index) => (
//             <img
//               key={index}
//               src={item}
//               alt={`Image ${index + 1}`}
//               className="h-full object-contain"
//               style={{ width: `${100 / imag.length}%` }}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Text */}
//       <div className="flex justify-center items-center">
//         <span className="text-center text-black font-semibold lg:text-xl mt-5">
//           {header}
//         </span>
//       </div>
//     </div>
//   );
// };

// import React, { useState, useEffect } from "react";

// const Cards = ({ imag, header }) => {
//   const [hovered, setHovered] = useState(false); // Track if the card is hovered
//   const [currentIndex, setCurrentIndex] = useState(0); // Track the current image index
//   const [pause, setPause] = useState(false); // Pause effect when last image is reached

//   useEffect(() => {
//     if (!hovered || pause) return; // Stop when not hovered or paused

//     const timer = setTimeout(() => {
//       if (currentIndex === imag.length - 1) {
//         setPause(true); // Pause at the last image for a while
//         setTimeout(() => {
//           setCurrentIndex(0); // Reset to the first image after delay
//           setPause(false); // Resume after reset
//         }, 2000); // Pause for 2 seconds before restarting
//       } else {
//         setCurrentIndex((prevIndex) => prevIndex + 1); // Move to the next image
//       }
//     }, 1000); // Pause for 1 second on each image

//     return () => clearTimeout(timer);
//   }, [hovered, currentIndex, imag.length, pause]);

//   return (
//     <div
//       className="border-black bg-white hover:border shadow-md rounded-lg text-center relative lg:w-[300px] p-3 lg:h-[280px] h-[240px] bg-[#F9F9F9] hover:shadow-2xl cursor-pointer hover:shadow-stone-400 group overflow-hidden"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => {
//         setHovered(false);
//         setCurrentIndex(0); // Reset index on hover out
//         setPause(false);
//       }}
//     >
//       {/* Image container */}
//       <div className="relative mt-2 mb-1 w-full lg:h-[200px] h-[120px] overflow-hidden">
//         <div
//           className="flex h-full"
//           style={{
//             width: `${imag.length * 100}%`,
//             transform: `translateX(-${currentIndex * (100 / imag.length)}%)`,
//             transition:
//               pause || (currentIndex === 0 && !hovered)
//                 ? "none" // No transition when pausing or resetting
//                 : "transform 500ms ease-in-out",
//           }}
//         >
//           {imag.map((item, index) => (
//             <img
//               key={index}
//               src={item}
//               alt={`Image ${index + 1}`}
//               className="h-full object-contain"
//               style={{ width: `${100 / imag.length}%` }}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Text */}
//       <div className="flex justify-center items-center">
//         <span className="text-center text-black font-semibold lg:text-xl mt-5">
//           {header}
//         </span>
//       </div>
//     </div>
//   );
// };

// export default Cards;

import React, { useState, useEffect, useRef } from "react";

const Cards = ({ imag, header }) => {
  const [hovered, setHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isResetting, setIsResetting] = useState(false); // ✅ New state to disable animation when resetting
  const pauseRef = useRef(false);

  useEffect(() => {
    if (!hovered || pauseRef.current) return;

    const timer = setTimeout(() => {
      if (currentIndex === imag.length - 1) {
        pauseRef.current = true; // ✅ Pause at last image
        setTimeout(() => {
          setIsResetting(true); // ✅ Disable animation before reset
          setCurrentIndex(0); // ✅ Instantly jump to first image
          setTimeout(() => {
            setIsResetting(false); // ✅ Re-enable animation for next cycle
            pauseRef.current = false;
          }, 50); // Small delay to apply reset instantly
        }, 2000); // Pause for 2 seconds
      } else {
        setCurrentIndex((prevIndex) => prevIndex + 1); // Move to next image
      }
    }, 1000); // Switch image every 1 second

    return () => clearTimeout(timer);
  }, [hovered, currentIndex, imag.length]);

  return (
    <div
      className="border-black bg-white hover:border shadow-md rounded-lg text-center relative lg:w-[300px] p-3 lg:h-[280px] h-[240px] bg-[#F9F9F9] hover:shadow-2xl cursor-pointer hover:shadow-stone-400 group overflow-hidden"
      onMouseEnter={() =>{ setHovered(true)
        setIsResetting(false); // ✅ Disable animation before reset
      }
        
      }
      onMouseLeave={() => {
        setHovered(false);
        setIsResetting(true); // ✅ Disable animation before reset
        setCurrentIndex(0);
        pauseRef.current = false;
      }}
    >
      {/* Image Container */}
      <div className="relative mt-2 mb-1 w-full lg:h-[200px] h-[120px] overflow-hidden">
        <div
          className={`flex h-full transition-transform duration-500 ease-in-out ${
            isResetting ? "transition-none" : "" // ✅ Disable transition on reset
          }`}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {imag.map((item, index) => (
            <img
              key={index}
              src={item}
              alt={`Image ${index + 1}`}
              className="h-full object-contain w-full flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* Text */}
      <div className="flex justify-center items-center">
        <span className="text-center text-black font-semibold lg:text-xl mt-5">
          {header}
        </span>
      </div>
    </div>
  );
};

export default Cards;
