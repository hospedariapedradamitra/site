import React from "react";

const Videos = () => {
  return (
    <div className="mainVideo">
      <h2 className="text-3xl justify-center text-center">Galeria de Videos</h2>
      <div className="flex VideoGallery p-20 text-center justify-center">
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
    </div>
  );
};

export default Videos;
