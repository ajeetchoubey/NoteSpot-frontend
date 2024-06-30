import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
  return (
    <div className=" w-100 flex items-center px-4 bg-slate-100 rounded-md">
      <input
        type="text"
        placeholder="Search Notes"
        className=" w-full text-base bg-transparent py-[11px] outline-none"
        value={value}
        onChange={onChange}
      />

      {value && (
        <IoMdClose
          className=" text-slate-400 cursor-pointer hover:text-black ml-2"
          onClick={onClearSearch}
          size={25}
        />
      )}

      <FaMagnifyingGlass
        className=" text-slate-400 hover:text-black cursor-pointer ml-2"
        onClick={handleSearch}
        size={20}
      />
    </div>
  );
};

export default SearchBar;
