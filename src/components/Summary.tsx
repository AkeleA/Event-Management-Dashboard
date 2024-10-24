import React from "react";
import Image from "next/image";
import arrowup from "@/components/icons/arrow-up.svg";
import question from "@/components/icons/question.svg";
import arrowdown from "@/components/icons/arrow-down.svg";

const Summary = () => {
  const stats = [
    {
      title: "Total Events",
      value: "100,000",
      change: "+5.0%",
      isPositive: true,
    },
    {
      title: "Active Speakers",
      value: "25",
      change: "-5.0%",
      isPositive: false,
    },
    {
      title: "Total Registrations",
      value: "300",
      change: "+5.0%",
      isPositive: true,
    },
    {
      title: "Total Revenue",
      value: "$500,000",
      change: "+5.0%",
      isPositive: true,
    },
  ];

  return (
    <div className="w-[74.72vw] h-[88px] flex flex-row gap-3 sm:flex-col sm:px-5 sm:gap-3 sm:w-full sm:h-auto">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="w-[18.056vw] h-full rounded-sm border p-4 gap-4 sm:w-[89.33vw] sm:h-[88px] sm:rounded-sm sm:border sm:p-4 sm:gap-4 sm:border-[#F2F2F7] dark:bg-[#484554]"
        >
          <div className="w-[15.83vw] h-14 sm:w-[80.8vw] sm:h-14">
            <h3 className="flex gap-1 sm:h-6 sm:gap-1 sm:w-full">
              <span className="font-inter font-semibold text-base text-[#64748B] dark:text-white">
                {stat.title}
              </span>
              <Image
                src={question}
                alt="question-icon"
                width={16}
                height={16}
                className="dark:text-white"
              />
            </h3>
            <p className="w-full h-8 gap-1 flex items-center">
              <span className="font-inter font-semibold text-[20px] leading-[32px] text-[#334155] dark:text-white">
                {stat.value}
              </span>
              <Image
                src={stat.isPositive ? arrowup : arrowdown}
                alt={stat.isPositive ? "arrow-up" : "arrow-down"}
                width={16}
                height={16}
              />
              <span
                className={`font-inter font-semibold text-[10px] leading-3 ${
                  stat.isPositive ? "text-[#10B981]" : "text-[#F43F5E]"
                }`}
              >
                {stat.change}
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Summary;
