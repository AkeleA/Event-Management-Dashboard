import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center w-full h-[98px]">
      <div className="flex w-full h-16 px-4 gap-2 table-inset border-t border-[#F3F4F6]">
        <div className="w-[62.2px] h-16 flex flex-col gap-2 items-center relative">
          <span className="w-full h-1 bg-[#8576FF]"></span>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.85019 19.2502H17.3502C18.4548 19.2502 19.3502 18.3548 19.3502 17.2502V9.75025L12.1002 4.75024L4.85019 9.75025V17.2502C4.85019 18.3548 5.74562 19.2502 6.85019 19.2502Z"
              stroke="#64748B"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.84958 15.7493C9.84958 14.6447 10.745 13.7493 11.8496 13.7493H12.3496C13.4541 13.7493 14.3496 14.6447 14.3496 15.7493V19.2493H9.84958V15.7493Z"
              stroke="#64748B"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span className="text-sm font-inter font-normL text-[#8576FF] align-center">
            Home
          </span>
        </div>
        <div className="w-[62.2px] h-16 gap-2 flex flex-col items-center">
          <span className="w-full h-1"></span>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.30002 12C2.30002 8.229 2.30002 6.343 3.47202 5.172C4.64402 4.001 6.52902 4 10.3 4H14.3C18.071 4 19.957 4 21.128 5.172C22.299 6.344 22.3 8.229 22.3 12V14C22.3 17.771 22.3 19.657 21.128 20.828C19.956 21.999 18.071 22 14.3 22H10.3C6.52902 22 4.64302 22 3.47202 20.828C2.30102 19.656 2.30002 17.771 2.30002 14V12Z"
              className="stroke-[#484554] dark:stroke-[#FCF7FF]"
              stroke-width="1.5"
            />
            <path
              d="M7.30002 4V2.5M17.3 4V2.5M2.80002 9H21.8"
              className="stroke-[#484554] dark:stroke-[#FCF7FF]"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M17.8 17C17.8 17.1326 17.7473 17.2598 17.6536 17.3536C17.5598 17.4473 17.4326 17.5 17.3 17.5C17.1674 17.5 17.0402 17.4473 16.9465 17.3536C16.8527 17.2598 16.8 17.1326 16.8 17C16.8 16.8674 16.8527 16.7402 16.9465 16.6464C17.0402 16.5527 17.1674 16.5 17.3 16.5C17.4326 16.5 17.5598 16.5527 17.6536 16.6464C17.7473 16.7402 17.8 16.8674 17.8 17ZM17.8 13C17.8 13.1326 17.7473 13.2598 17.6536 13.3536C17.5598 13.4473 17.4326 13.5 17.3 13.5C17.1674 13.5 17.0402 13.4473 16.9465 13.3536C16.8527 13.2598 16.8 13.1326 16.8 13C16.8 12.8674 16.8527 12.7402 16.9465 12.6464C17.0402 12.5527 17.1674 12.5 17.3 12.5C17.4326 12.5 17.5598 12.5527 17.6536 12.6464C17.7473 12.7402 17.8 12.8674 17.8 13ZM12.8 17C12.8 17.1326 12.7473 17.2598 12.6536 17.3536C12.5598 17.4473 12.4326 17.5 12.3 17.5C12.1674 17.5 12.0402 17.4473 11.9465 17.3536C11.8527 17.2598 11.8 17.1326 11.8 17C11.8 16.8674 11.8527 16.7402 11.9465 16.6464C12.0402 16.5527 12.1674 16.5 12.3 16.5C12.4326 16.5 12.5598 16.5527 12.6536 16.6464C12.7473 16.7402 12.8 16.8674 12.8 17ZM12.8 13C12.8 13.1326 12.7473 13.2598 12.6536 13.3536C12.5598 13.4473 12.4326 13.5 12.3 13.5C12.1674 13.5 12.0402 13.4473 11.9465 13.3536C11.8527 13.2598 11.8 13.1326 11.8 13C11.8 12.8674 11.8527 12.7402 11.9465 12.6464C12.0402 12.5527 12.1674 12.5 12.3 12.5C12.4326 12.5 12.5598 12.5527 12.6536 12.6464C12.7473 12.7402 12.8 12.8674 12.8 13ZM7.80002 17C7.80002 17.1326 7.74734 17.2598 7.65357 17.3536C7.5598 17.4473 7.43263 17.5 7.30002 17.5C7.16741 17.5 7.04023 17.4473 6.94647 17.3536C6.8527 17.2598 6.80002 17.1326 6.80002 17C6.80002 16.8674 6.8527 16.7402 6.94646 16.6464C7.04023 16.5527 7.16741 16.5 7.30002 16.5C7.43263 16.5 7.5598 16.5527 7.65357 16.6464C7.74734 16.7402 7.80002 16.8674 7.80002 17ZM7.80002 13C7.80002 13.1326 7.74734 13.2598 7.65357 13.3536C7.5598 13.4473 7.43263 13.5 7.30002 13.5C7.16741 13.5 7.04023 13.4473 6.94647 13.3536C6.8527 13.2598 6.80002 13.1326 6.80002 13C6.80002 12.8674 6.8527 12.7402 6.94647 12.6464C7.04023 12.5527 7.16741 12.5 7.30002 12.5C7.43263 12.5 7.5598 12.5527 7.65357 12.6464C7.74734 12.7402 7.80002 12.8674 7.80002 13Z"
              fill="#484554"
              className="stroke-[#484554] dark:stroke-[#FCF7FF] fill-[#484554] dark:fill-[#FCF7FF]"
            />
          </svg>
          <span className="text-sm font-inter font-normL text-[#64748B] align-center">
            Events
          </span>
        </div>
        <div className="w-[62.2px] h-16 gap-2 flex flex-col items-center">
          <span className="w-full h-1"></span>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5 10C12.7091 10 14.5 8.20914 14.5 6C14.5 3.79086 12.7091 2 10.5 2C8.29086 2 6.5 3.79086 6.5 6C6.5 8.20914 8.29086 10 10.5 10Z"
              className="stroke-[#484554] dark:stroke-[#FCF7FF]"
              stroke-width="1.5"
            />
            <path
              d="M10.5 21C14.366 21 17.5 19.2091 17.5 17C17.5 14.7909 14.366 13 10.5 13C6.63401 13 3.5 14.7909 3.5 17C3.5 19.2091 6.63401 21 10.5 21Z"
              className="stroke-[#484554] dark:stroke-[#FCF7FF]"
              stroke-width="1.5"
            />
            <path
              d="M19.5 2C19.5 2 21.5 3.2 21.5 6C21.5 8.8 19.5 10 19.5 10M17.5 4C17.5 4 18.5 4.6 18.5 6C18.5 7.4 17.5 8 17.5 8"
              className="stroke-[#484554] dark:stroke-[#FCF7FF]"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
          <span className="text-sm font-inter font-normL text-[#64748B] align-center">
            Speakers
          </span>
        </div>
        <div className="w-[62.2px] h-16 gap-2 flex flex-col items-center">
          <span className="w-full h-1"></span>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.7 10C3.7 6.229 3.7 4.343 4.872 3.172C6.044 2.001 7.929 2 11.7 2H13.7C17.471 2 19.357 2 20.528 3.172C21.699 4.344 21.7 6.229 21.7 10V14C21.7 17.771 21.7 19.657 20.528 20.828C19.356 21.999 17.471 22 13.7 22H11.7C7.929 22 6.043 22 4.872 20.828C3.701 19.656 3.7 17.771 3.7 14V10Z"
              className="stroke-[#484554] dark:stroke-[#FCF7FF]"
              stroke-width="1.5"
            />
            <path
              d="M8.7 10H16.7M8.7 14H13.7"
              className="stroke-[#484554] dark:stroke-[#FCF7FF]"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>

          <span className="text-sm font-inter font-normL text-[#64748B] align-center">
            Reports
          </span>
        </div>
        <div className="w-[62.2px] h-16 gap-2 flex flex-col items-center">
          <span className="w-full h-1"></span>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.0975 17C9.24396 15.625 10.9698 14.75 12.9 14.75C14.8303 14.75 16.5561 15.625 17.7026 17M20.15 12C20.15 16.0041 16.9041 19.25 12.9 19.25C8.89592 19.25 5.64999 16.0041 5.64999 12C5.64999 7.99594 8.89592 4.75 12.9 4.75C16.9041 4.75 20.15 7.99594 20.15 12ZM15.15 10C15.15 11.2426 14.1426 12.25 12.9 12.25C11.6573 12.25 10.65 11.2426 10.65 10C10.65 8.75736 11.6573 7.75 12.9 7.75C14.1426 7.75 15.15 8.75736 15.15 10Z"
              className="stroke-[#484554] dark:stroke-[#FCF7FF]"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span className="text-sm font-inter font-normL text-[#64748B] align-center">
            Profile
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
