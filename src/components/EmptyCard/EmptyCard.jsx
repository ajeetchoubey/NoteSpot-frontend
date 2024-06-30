import React from "react";

const EmptyCard = ({ imgsrc, msg }) => {
  return (
    <div className="flex flex-col items-center mt-20">
      <img src={imgsrc} className=" w-60" alt="add note" />
      <p className=" text-gray-900 text-xl font-normal flex items-center justify-center mt-5">
        {msg}
      </p>
    </div>
  );
};

export default EmptyCard;
