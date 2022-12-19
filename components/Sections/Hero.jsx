const Hero = () => {
  return (
    // <div className="relative pt-16 min-h-[43.75em] bg-red-700 text-white">
    //   <div className="w-full container max-auto relative z-10 max-auto">
    //     <div className="max-w-[40.5rem]">
    //       <div>
    //         <h1 className="text-5xl font-bold font-RobotoBold leading-heroline tracking-[0.0125rem]">
    //           TUM. The Entrepreneurial University
    //         </h1>
    //       </div>
    //       <div>
    //         <p className="tacking-[0.0125rem] leading-[1.875rem] text-xl mt-6">
    //           Innovation through talent, excellence and responsibility
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="absolute top-16">
    //     <video
    //       src="https://www.tum.de/fileadmin/w00bfo/www/Startseite/tum_startseite_header_010922.mp4"
    //       alt="video"
    //     //   autoplay="autoplay"
    //     //   loop="loop"
    //     //   muted="muted"
    //     //   playsinline="playsinline"
    //       className=""
    //     ></video>
    //   </div>
    // </div>
    <div className="relative pt-16 min-h-[43.75em] ">
      <video
        src="https://www.tum.de/fileadmin/w00bfo/www/Startseite/tum_startseite_header_010922.mp4"
        alt="video" autoplay="autoplay" loop="loop" muted="muted" playsinline="playsinline"
        className=""
      ></video>
      <div className="absolute top-40 px-6 max-auto container text-white">
        <div className="w-[40.125rem]">
          <h1 className="text-5xl font-bold font-RobotoBold leading-heroline tracking-[0.0125rem]">
            TUM. The Entrepreneurial University
          </h1>
          <p className="tacking-[0.0125rem] leading-[1.875rem] text-xl mt-6">
            Innovation through talent, excellence and responsibility
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
