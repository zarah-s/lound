import React from "react";

const Input = (props) => {
  return (
    <div className="">
      <label className="text-[#404040]" htmlFor="">
        {props.label}
      </label>
      <br />
      <input
        type="text"
        className="outline-none placeholder:text-sm placeholder:text-[#A5A5A5] border-b-[1px] w-full border-[#A5A5A5] mt-1"
        placeholder={props.placeholder}
        name=""
        id=""
      />
    </div>
  );
};

export default Input;
