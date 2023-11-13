import React from "react";

const Videos = () => {
  return (
    <div className="mainVideo pt-10">
      <div className="title">
        <div className="child">
          <h2 className="text-3xl">Galeria de Vídeos</h2>
          <div className="waving-line"></div>
        </div>
      </div>

      <div className="flex VideoGallery px-20 py-10 text-center justify-center">
        <div className="w-1/3 p-5">
          <video controls width="600">
            <source src="/video4.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="w-1/3 p-5">
          <video controls width="600">
            <source src="/video5.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="w-1/3 p-5">
          <video controls width="600">
            <source src="/videopanoramica.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="buttonAttraction pb-14 justify-center align-center text-center">
        <a
          className="rounded-lg px-6 py-4 bg-green-700 text-green-100 hover:bg-black duration-300"
          href="https://wa.me/5535998779878"
          target="_blank"
        >
          Venha aproveitar a natureza!
        </a>
      </div>
    </div>
  );
};

export default Videos;
