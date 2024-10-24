import React from "react";

const MobilePagination = () => {
  return (
    <div className="flex items-center justify-between px-5 w-full">
      <div className="flex w-[55.47vw] h-9 gap-4 items-center">
        <button className="border flex items-center justify-center w-9 h-9 p-2 rounded-sm bg-[#E2E8F0] dark:border-none dark:bg-[#484554] dark:text-[#FCF7FF]">
          &lt;
        </button>
        <button className="border flex items-center justify-center w-8 h-8 rounded-[100px] bg-[#8576FF] text-white font-inter font-normal text-sm align-center">
          1
        </button>
        <button className="border-none flex items-center justify-center w-8 h-8 rounded-[100px]">
          2
        </button>
        <button className="border-none flex items-center justify-center w-8 h-8 rounded-[100px]">
          3
        </button>
        <button className="border flex items-center justify-center w-9 h-9 p-2 rounded-sm dark:border-none dark:bg-[#484554] dark:text-[#FCF7FF]">
          &gt;
        </button>
      </div>
      <div className="w-24 h-9 flex flex-row gap-2 items-center justify-center">
        <select className="border  p-2 rounded-sm flex items-center justify-center gap-2 border-[#E2E8F0] text-[#334155] w-full h-9 font-inter font-normal text-sm dark:bg-[#484554] dark:border-none dark:text-[#FCF7FF]">
          <option>10 rows</option>
          <option>25 rows</option>
          <option>50 rows</option>
        </select>
      </div>
    </div>
  );
};

export default MobilePagination;
