import React from "react";
import { useTheme } from "@/context/ThemeContext";

interface MobileSidebarProps {
  isOpen: boolean;
  toggleNav: () => void;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ isOpen, toggleNav }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="w-full flex flex-col items-start gap-0.5 relative">
      <div className="w-full h-[64px] flex p-4 gap-2 bg-white  border-b border-[#F1F5F9] dark:bg-[#484554]">
        <div className="h-8 w-[91.2vw] flex justify-between items-center">
          <svg
            width="64"
            height="32"
            viewBox="0 0 64 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="63"
              height="31"
              fill="#93C5FD"
              stroke="#2563EB"
              strokeDasharray="2 2"
            />
            <path
              d="M7.33345 20V11.2727H12.9244V12.598H8.91442V14.9673H12.5408V16.2926H8.91442V20H7.33345ZM18.0582 17.2472V13.4545H19.6009V20H18.1051V18.8366H18.0369C17.8892 19.2031 17.6463 19.5028 17.3082 19.7358C16.973 19.9687 16.5597 20.0852 16.0682 20.0852C15.6392 20.0852 15.2599 19.9901 14.9304 19.7997C14.6037 19.6065 14.348 19.3267 14.1634 18.9602C13.9787 18.5909 13.8864 18.1449 13.8864 17.6222V13.4545H15.429V17.3835C15.429 17.7983 15.5426 18.1278 15.7699 18.3722C15.9972 18.6165 16.2955 18.7386 16.6648 18.7386C16.892 18.7386 17.1122 18.6832 17.3253 18.5724C17.5384 18.4616 17.7131 18.2969 17.8494 18.0781C17.9886 17.8565 18.0582 17.5795 18.0582 17.2472ZM22.7298 11.2727V20H21.1871V11.2727H22.7298ZM25.8587 11.2727V20H24.3161V11.2727H25.8587ZM30.4897 20V11.2727H32.0707V18.6747H35.9144V20H30.4897ZM40.0735 20.1278C39.4343 20.1278 38.8803 19.9872 38.4116 19.706C37.9428 19.4247 37.5792 19.0312 37.3207 18.5256C37.065 18.0199 36.9371 17.429 36.9371 16.7528C36.9371 16.0767 37.065 15.4844 37.3207 14.9759C37.5792 14.4673 37.9428 14.0724 38.4116 13.7912C38.8803 13.5099 39.4343 13.3693 40.0735 13.3693C40.7127 13.3693 41.2667 13.5099 41.7354 13.7912C42.2042 14.0724 42.5664 14.4673 42.8221 14.9759C43.0806 15.4844 43.2099 16.0767 43.2099 16.7528C43.2099 17.429 43.0806 18.0199 42.8221 18.5256C42.5664 19.0312 42.2042 19.4247 41.7354 19.706C41.2667 19.9872 40.7127 20.1278 40.0735 20.1278Z"
              fill="#2563EB"
            />
          </svg>

          <button onClick={toggleNav} className="p-2">
            {isOpen ? (
              <div className="w-6 h-6 rounded-full flex items-center justify-center bg-white border border-[#E2E8F0] text-black">
                &times;
              </div>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 7H7M20 7H11M20 17H17M4 17H13M4 12H20"
                  stroke="#64748B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="absolute left-0 top-[64px] z-20 w-full border-b pb-5 dark:bg-[#484554] border-[#E2E8F0]  bg-white">
          <div className="w-full px-5 flex flex-col gap-2">
            <ul className="list-none flex flex-col gap-2">
              <li className="p-2 flex gap-4 rounded-sm">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.62515 16.0418H14.3752C15.2956 16.0418 16.0418 15.2956 16.0418 14.3752V8.12516L10.0002 3.9585L3.95849 8.12516V14.3752C3.95849 15.2956 4.70468 16.0418 5.62515 16.0418Z"
                    stroke="#ADA9BB"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.12464 13.1243C8.12464 12.2039 8.87084 11.4577 9.79131 11.4577H10.208C11.1285 11.4577 11.8746 12.2039 11.8746 13.1243V16.041H8.12464V13.1243Z"
                    stroke="#ADA9BB"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="font-inter font-normal text-sm dark:text-[#FcF7FF]">
                  Home
                </span>
              </li>
              <li className="p-2 flex gap-4 rounded-sm">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.66667 10C1.66667 6.85754 1.66667 5.28587 2.64333 4.31004C3.62 3.33421 5.19083 3.33337 8.33333 3.33337H11.6667C14.8092 3.33337 16.3808 3.33337 17.3567 4.31004C18.3325 5.28671 18.3333 6.85754 18.3333 10V11.6667C18.3333 14.8092 18.3333 16.3809 17.3567 17.3567C16.38 18.3325 14.8092 18.3334 11.6667 18.3334H8.33333C5.19083 18.3334 3.61917 18.3334 2.64333 17.3567C1.6675 16.38 1.66667 14.8092 1.66667 11.6667V10Z"
                    stroke="#ADA9BB"
                    stroke-width="1.5"
                  />
                  <path
                    d="M5.83333 3.33337V2.08337M14.1667 3.33337V2.08337M2.08333 7.50004H17.9167"
                    stroke="#ADA9BB"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M15 14.1667C15 14.3877 14.9122 14.5996 14.7559 14.7559C14.5996 14.9122 14.3877 15 14.1667 15C13.9457 15 13.7337 14.9122 13.5774 14.7559C13.4211 14.5996 13.3333 14.3877 13.3333 14.1667C13.3333 13.9457 13.4211 13.7337 13.5774 13.5774C13.7337 13.4211 13.9457 13.3333 14.1667 13.3333C14.3877 13.3333 14.5996 13.4211 14.7559 13.5774C14.9122 13.7337 15 13.9457 15 14.1667ZM15 10.8333C15 11.0543 14.9122 11.2663 14.7559 11.4226C14.5996 11.5789 14.3877 11.6667 14.1667 11.6667C13.9457 11.6667 13.7337 11.5789 13.5774 11.4226C13.4211 11.2663 13.3333 11.0543 13.3333 10.8333C13.3333 10.6123 13.4211 10.4004 13.5774 10.2441C13.7337 10.0878 13.9457 10 14.1667 10C14.3877 10 14.5996 10.0878 14.7559 10.2441C14.9122 10.4004 15 10.6123 15 10.8333ZM10.8333 14.1667C10.8333 14.3877 10.7455 14.5996 10.5893 14.7559C10.433 14.9122 10.221 15 10 15C9.77899 15 9.56703 14.9122 9.41074 14.7559C9.25446 14.5996 9.16667 14.3877 9.16667 14.1667C9.16667 13.9457 9.25446 13.7337 9.41074 13.5774C9.56703 13.4211 9.77899 13.3333 10 13.3333C10.221 13.3333 10.433 13.4211 10.5893 13.5774C10.7455 13.7337 10.8333 13.9457 10.8333 14.1667ZM10.8333 10.8333C10.8333 11.0543 10.7455 11.2663 10.5893 11.4226C10.433 11.5789 10.221 11.6667 10 11.6667C9.77899 11.6667 9.56703 11.5789 9.41074 11.4226C9.25446 11.2663 9.16667 11.0543 9.16667 10.8333C9.16667 10.6123 9.25446 10.4004 9.41074 10.2441C9.56703 10.0878 9.77899 10 10 10C10.221 10 10.433 10.0878 10.5893 10.2441C10.7455 10.4004 10.8333 10.6123 10.8333 10.8333ZM6.66667 14.1667C6.66667 14.3877 6.57887 14.5996 6.42259 14.7559C6.26631 14.9122 6.05435 15 5.83333 15C5.61232 15 5.40036 14.9122 5.24408 14.7559C5.0878 14.5996 5 14.3877 5 14.1667C5 13.9457 5.0878 13.7337 5.24408 13.5774C5.40036 13.4211 5.61232 13.3333 5.83333 13.3333C6.05435 13.3333 6.26631 13.4211 6.42259 13.5774C6.57887 13.7337 6.66667 13.9457 6.66667 14.1667ZM6.66667 10.8333C6.66667 11.0543 6.57887 11.2663 6.42259 11.4226C6.26631 11.5789 6.05435 11.6667 5.83333 11.6667C5.61232 11.6667 5.40036 11.5789 5.24408 11.4226C5.0878 11.2663 5 11.0543 5 10.8333C5 10.6123 5.0878 10.4004 5.24408 10.2441C5.40036 10.0878 5.61232 10 5.83333 10C6.05435 10 6.26631 10.0878 6.42259 10.2441C6.57887 10.4004 6.66667 10.6123 6.66667 10.8333Z"
                    fill="#ADA9BB"
                  />
                </svg>

                <span className="font-inter font-normal text-sm dark:text-[#FcF7FF]">
                  Events
                </span>
              </li>
              <li className="p-2 flex gap-4 rounded-sm">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.33333 8.33329C10.1743 8.33329 11.6667 6.84091 11.6667 4.99996C11.6667 3.15901 10.1743 1.66663 8.33333 1.66663C6.49238 1.66663 5 3.15901 5 4.99996C5 6.84091 6.49238 8.33329 8.33333 8.33329Z"
                    stroke="#ADA9BB"
                    stroke-width="1.5"
                  />
                  <path
                    d="M8.33333 17.4999C11.555 17.4999 14.1667 16.0075 14.1667 14.1666C14.1667 12.3256 11.555 10.8333 8.33333 10.8333C5.11167 10.8333 2.5 12.3256 2.5 14.1666C2.5 16.0075 5.11167 17.4999 8.33333 17.4999Z"
                    stroke="#ADA9BB"
                    stroke-width="1.5"
                  />
                  <path
                    d="M15.8333 1.66663C15.8333 1.66663 17.5 2.66663 17.5 4.99996C17.5 7.33329 15.8333 8.33329 15.8333 8.33329M14.1667 3.33329C14.1667 3.33329 15 3.83329 15 4.99996C15 6.16663 14.1667 6.66663 14.1667 6.66663"
                    stroke="#ADA9BB"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
                <span className="font-inter font-normal text-sm dark:text-[#FcF7FF]">
                  Speakers
                </span>
              </li>
              <li className="p-2 flex gap-4 rounded-sm">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 8.33329C2.5 5.19079 2.5 3.61913 3.47667 2.64329C4.45333 1.66746 6.02417 1.66663 9.16667 1.66663H10.8333C13.9758 1.66663 15.5475 1.66663 16.5233 2.64329C17.4992 3.61996 17.5 5.19079 17.5 8.33329V11.6666C17.5 14.8091 17.5 16.3808 16.5233 17.3566C15.5467 18.3325 13.9758 18.3333 10.8333 18.3333H9.16667C6.02417 18.3333 4.4525 18.3333 3.47667 17.3566C2.50083 16.38 2.5 14.8091 2.5 11.6666V8.33329Z"
                    stroke="#ADA9BB"
                    stroke-width="1.5"
                  />
                  <path
                    d="M6.66667 8.33325H13.3333M6.66667 11.6666H10.8333"
                    stroke="#ADA9BB"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
                <span className="font-inter font-normal text-sm dark:text-[#FcF7FF]">
                  Reports
                </span>
              </li>
            </ul>
          </div>
          <div className="w-full flex flex-col px-5 gap-2">
            <ul className="list-none flex flex-col gap-2">
              <li className="w-full flex flex-row h-9 gap-4 p-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 13.9584C7.5 13.9584 7.5 16.0417 10 16.0417C12.5 16.0417 12.5 13.9584 12.5 13.9584M14.375 8.33337V10L16.0417 13.5417H3.95833L5.625 10V8.33337C5.625 5.91713 7.58375 3.95837 10 3.95837C12.4162 3.95837 14.375 5.91713 14.375 8.33337Z"
                    stroke="#ADA9BB"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="font-inter font-normal text-sm dark:text-[#FcF7FF]">
                  Notifications
                </span>
              </li>
              <li className="w-full flex flex-row h-9 gap-4 p-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.1893 8.75004C15.7127 9.39273 16.0274 10.2565 16.0274 11.3584C16.0274 12.3885 15.7524 13.2106 15.2889 13.8384C15.1208 14.0661 15.1562 14.597 15.2906 14.8461C15.6121 15.4424 15.0046 16.0959 14.3443 15.9445C13.85 15.8312 13.3315 15.6779 12.8778 15.4722C12.7117 15.3969 12.5283 15.3665 12.3471 15.387C12.1219 15.4125 11.8922 15.4251 11.6595 15.4251C10.5797 15.4251 9.56228 15.1538 8.78151 14.5834M12.6942 8.02507C12.6942 10.8297 10.6554 12.0918 8.32624 12.0918C8.09356 12.0918 7.86378 12.0792 7.63865 12.0537C7.45742 12.0332 7.274 12.0636 7.10789 12.1389C6.65418 12.3445 6.13572 12.4978 5.64145 12.6111C4.98112 12.7625 4.37361 12.1091 4.69515 11.5128C4.8295 11.2636 4.86492 10.7328 4.69681 10.505C4.23335 9.87722 3.95831 9.05519 3.95831 8.02507C3.95831 5.22045 5.99708 3.95837 8.32624 3.95837C10.6554 3.95837 12.6942 5.22045 12.6942 8.02507Z"
                    stroke="#ADA9BB"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span className="font-inter font-normal text-sm dark:text-[#FcF7FF]">
                  Messages
                </span>
              </li>
              <li className="w-full flex flex-row h-9 gap-4 p-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.68431 12.469L5.60164 12.6126C6.27882 12.7187 6.76242 13.3389 6.71255 14.0376L6.64497 14.9847C6.62528 15.2606 6.77226 15.5204 7.01571 15.6405L7.69419 15.9748C7.93764 16.095 8.22832 16.05 8.42714 15.8627L9.10891 15.2183C9.61154 14.7431 10.3871 14.7431 10.8904 15.2183L11.5722 15.8627C11.771 16.0507 12.0611 16.095 12.3051 15.9748L12.9849 15.6399C13.2277 15.5204 13.3741 15.2613 13.3544 14.9861L13.2868 14.0376C13.2369 13.3389 13.7205 12.7187 14.3977 12.6126L15.315 12.469C15.5821 12.4273 15.7973 12.2226 15.8577 11.9528L16.025 11.2023C16.0854 10.9325 15.9784 10.6526 15.7553 10.4969L14.9896 9.96056C14.4246 9.56453 14.252 8.79127 14.5932 8.1838L15.0558 7.36086C15.1904 7.12123 15.1681 6.82119 14.9994 6.60505L14.5302 6.00296C14.3616 5.78682 14.0808 5.69754 13.8222 5.77876L12.9351 6.05666C12.2796 6.26205 11.5807 5.91771 11.3288 5.26594L10.9889 4.38461C10.8891 4.12686 10.6457 3.9577 10.3747 3.95838L9.6227 3.96039C9.3517 3.96106 9.10891 4.13155 9.01048 4.38998L8.67912 5.26124C8.42977 5.91704 7.72766 6.26407 7.07017 6.05733L6.14627 5.76735C5.88708 5.68546 5.60493 5.77541 5.43629 5.99289L4.9704 6.59566C4.80176 6.81381 4.78142 7.11452 4.91856 7.35415L5.39167 8.1791C5.7401 8.78724 5.56949 9.56788 5.00124 9.96593L4.24467 10.4962C4.02157 10.6526 3.91461 10.9325 3.97498 11.2017L4.14231 11.9521C4.20202 12.2226 4.41724 12.4273 4.68431 12.469Z"
                    stroke="#ADA9BB"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.3259 8.67415C12.058 9.4063 12.058 10.5938 11.3259 11.3259C10.5937 12.0581 9.40626 12.0581 8.67411 11.3259C7.94196 10.5938 7.94196 9.4063 8.67411 8.67415C9.40626 7.942 10.5937 7.942 11.3259 8.67415Z"
                    stroke="#ADA9BB"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="font-inter font-normal text-sm dark:text-[#FcF7FF]">
                  Settings
                </span>
              </li>

              {/* Theme Toggle */}
              <div className="theme-toggle mt-2 w-[120px] h-4 px-2 flex gap-2">
                <label
                  htmlFor="theme-toggle"
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    id="theme-toggle"
                    className="hidden"
                    checked={theme === "dark"}
                    onChange={toggleTheme}
                  />
                  <div className="toggle-bg bg-[#E2E8F0] rounded-full w-6 h-3 flex items-center px-0.5">
                    <div
                      className={`toggle-dot bg-white w-2 h-2 rounded-full transform transition-transform ${
                        theme === "dark" ? "translate-x-3" : "translate-x-0"
                      }`}
                    ></div>
                  </div>
                  <span className="text-[13px] text-gray-700 dark:text-white">
                    {theme === "dark" ? "Dark Mode" : "Light Mode"}
                  </span>
                </label>
              </div>

              {/* Profile Section */}
              <div className="flex mt-2 items-center gap-2 w-full h-12 py-2 pl-2 pr-4">
                <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                  {/* Profile image placeholder */}
                </div>
                <div className="flex flex-col w-[18.81vw]">
                  <span className="text-xs font-normal text-[#334155] dark:text-white">
                    Rudra Devi
                  </span>
                  <span className="text-xs font-normal text-[#64748B] dark:text-white">
                    rudra.devi@gmail.com
                  </span>
                </div>
              </div>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileSidebar;
