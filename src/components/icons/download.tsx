import React from "react";
import { useTheme } from "@/context/ThemeContext";

const DownloadIcon = () => {
  const { theme } = useTheme();
  return (
    <>
      {theme === "light" ? (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.16663 9.83333V10.8333C3.16663 11.9379 4.06206 12.8333 5.16663 12.8333H10.8333C11.9379 12.8333 12.8333 11.9379 12.8333 10.8333V9.83333M7.99996 9.5V3.16666M7.99996 9.5L5.83329 7.16666M7.99996 9.5L10.1666 7.16666"
            stroke="#141414"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.1665 9.83333V10.8333C3.1665 11.9379 4.06193 12.8333 5.1665 12.8333H10.8332C11.9377 12.8333 12.8332 11.9379 12.8332 10.8333V9.83333M7.99984 9.5V3.16666M7.99984 9.5L5.83317 7.16666M7.99984 9.5L10.1665 7.16666"
            stroke="#FCF7FF"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
    </>
  );
};

export default DownloadIcon;
