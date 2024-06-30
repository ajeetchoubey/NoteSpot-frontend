import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className=" bg-white flex items-center justify-between px-8 lg:px-24 py-2 drop-shadow">
        <h1 className=" text-xl font-bold text-black py-2">
          <Link to={"/"}>NoteSpot</Link>
        </h1>

        <div className=" flex gap-2">
          <div></div>
          <button>
            <Link
              className=" px-5 py-3 bg-primary text-white rounded hover:bg-blue-600"
              to={"/signup"}
            >
              Get started
            </Link>
          </button>
        </div>
      </div>

      <div className=" flex flex-col text-center justify-center items-center mx-auto px-10 mt-24 lg:mt-28 w-[300] lg:max-w-[800px]">
        <h1 className=" text-4xl lg:text-6xl font-semibold">
          Your Personal Digital Notebook
        </h1>
        <h3 className=" text-xl lg:text-2xl mt-3">
          Capture Ideas, Organize Thoughts, Boost Productivity
        </h3>
        <p className=" mt-4">
          Effortlessly manage your notes with NoteSpot - your ultimate digital
          notebook designed to keep your ideas organized and accessible. Whether
          you're brainstorming, planning, or simply jotting down quick notes,
          NoteSpot has you covered.
        </p>
        <button className=" mt-8">
          <Link
            className=" px-5 py-3 bg-primary text-white rounded hover:bg-blue-600"
            to={"/signup"}
          >
            Get started
          </Link>
        </button>
      </div>
    </>
  );
};

export default Hero;
