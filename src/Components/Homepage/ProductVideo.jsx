import React from "react";

function ProductVideo() {
  return (
    <div>
      <h1 className="text-2xl font-medium underline lg:px-10 p-3">
        Product Videos
      </h1>
      <div className="flex gap-2  items-center lg:justify-around  overflow-x-auto p-4 scrollbar-hide w-full ">
        <div className="lg:w-[450px] md:w-[300px]  w-[250px]">
          <iframe
            className="lg:w-[450px] w-[250px]  md:w-[300px] h-[150px] lg:h-[300px] rounded-xl"
            src="https://www.youtube.com/embed/hiYZ-TFPH_k?si=9IAzc2frK8MREzhG"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <p className="break-words ">
            Universal Testing Machine | A Comprehensive Guide In 2024 | ASTM
            D638
          </p>
        </div>
        <div className="lg:w-[450px] w-[250px] md:w-[300px]">
          <iframe
            className="lg:w-[450px] w-[250px] md:w-[300px] h-[150px] lg:h-[300px] rounded-xl"
            src="https://www.youtube.com/embed/z9Bvx56bWN4?si=5R_UYsH5uhYksIca"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <p>
            Universal testing machine inspekt 250kN - A wide variety of testing
            options
          </p>
        </div>
        <div className="lg:w-[450px] md:w-[300px] w-[250px] pb-5">
          <iframe
            className="lg:w-[450px] w-[250px] md:w-[300px] h-[150px] lg:h-[300px] rounded-xl"
            src="https://www.youtube.com/embed/VUcWlQTZTPs?si=VF8yWGPq-FNnejAz"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <p>🚀 Die ML250 – Ihr Allrounder für maximale Produktivität! 🔧</p>
        </div>
      </div>
    </div>
  );
}

export default ProductVideo;
