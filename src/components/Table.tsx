"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import avattar from "@/components/icons/avatar-group.png";
import MobileEventsTable from "./MobileTable";
import MobilePagination from "./MobilePagination";
import OptionsButton from "./icons/options-button";
import DownloadIcon from "./icons/download";

// Define the status type as a union of strings
type EventStatus = "Completed" | "In Progress";

// Define the event data type
interface Event {
  name: string;
  date: string;
  speaker: string;
  status: EventStatus;
  description?: string;
  attendees?: number;
}

const eventData: Event[] = [
  {
    name: "Cloud Innovation Summit",
    date: "2024-10-15",
    speaker: "Jane Doe",
    status: "Completed",
    description: "The future of Cloud Computing analysed and discussed",
    attendees: 300,
  },
  {
    name: "Blockchain Revolution Conference",
    date: "2024-11-05",
    speaker: "Dr. Peter Smith",
    status: "In Progress",
    description: "Blockchain and the 5th Industrial Revolution",
    attendees: 190,
  },
  {
    name: "AI in Healthcare Symposium",
    date: "2024-12-01",
    speaker: "Dr. Aisha Malik",
    status: "Completed",
    description: "AI meets the Healthcare Industry",
    attendees: 450,
  },
  {
    name: "Future of Fintech Forum",
    date: "2024-10-25",
    speaker: "John Lee",
    status: "Completed",
    description: "Building the Next Fintech Unicorn",
    attendees: 771,
  },
  {
    name: "Data Analytics In Business",
    date: "2024-11-12",
    speaker: "Rachel Moore",
    status: "Completed",
    description: "Data in your business",
    attendees: 300,
  },
  {
    name: "Sustainable Energy Expo",
    date: "2024-09-28",
    speaker: "Prof. Alan Green",
    status: "Completed",
    description: "The future of Sustainable Energy",
    attendees: 300,
  },
  {
    name: "Web3 Interfaces Workshop",
    date: "2024-10-10",
    speaker: "Kevin Adams",
    status: "In Progress",
    description: "Going from Web2 into Web3",
    attendees: 900,
  },
  {
    name: "Cybersecurity for Startups",
    date: "2024-11-19",
    speaker: "Emily Zhang",
    status: "Completed",
    description: "CeH v13 and AI",
    attendees: 280,
  },
  {
    name: "Smart Cities Forum",
    date: "2024-10-18",
    speaker: "Dr. Maria Hernandez",
    status: "In Progress",
    description: "The future of Living",
    attendees: 500,
  },
  {
    name: "Tech Safari Mixer",
    date: "2024-09-30",
    speaker: "Guest Panel",
    status: "In Progress",
    description: "The industrial revolutions",
    attendees: 330,
  },
];

const statusColor: Record<EventStatus, string> = {
  Completed: "bg-green-200 text-green-800",
  "In Progress": "bg-blue-200 text-blue-800",
};

const Table = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("Most Recent");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredData = eventData.filter((event) =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => setSelectedEvent(null);

  return (
    <div className="mt-1 flex flex-col mb-8 relative sm:mb-0">
      <h1 className="font-inter font-medium text-lg leading-4 sm:w-full sm:flex-col sm:px-5 mb-1 sm:mb-[21px] dark:text-white">
        Events History
      </h1>
      <div className="bg-white w-[74.72vw] text-black flex flex-col gap-4 sm:w-full dark:bg-[#383544]">
        {/* Toolbar Section */}
        <div className="flex flex-row justify-between items-center sm:w-full sm:flex-col sm:px-5 sm:gap-2.5 sm:h-[286px]">
          <div className="flex gap-3 items-center sm:w-[89.33vw] sm:items-start sm:flex-col">
            {/* Search Bar */}
            <div className="relative w-[12.77vw] sm:w-full">
              <svg
                className="absolute left-2 top-2.5 text-gray-400"
                width="16"
                height="16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 11L15 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="7"
                  cy="7"
                  r="5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border border-[#E2E8F0] dark:bg-[#484554] dark:text-[#CBD5E1] w-full h-9 pl-9 pr-2 rounded-sm dark:border-none"
              />
            </div>

            {/* Dropdowns */}
            <select className="border w-[5.89vw] sm:w-full dark:bg-[#484554] dark:text-[#FCF7FF] h-9 px-4 text-center flex items-center justify-center gap-2 rounded-sm border-[#E2E8F0] font-inter font-normal text-xs text-[#334155] dark:border-none">
              <option>Date</option>
            </select>

            <select className="border w-[6.37vw] sm:w-full dark:bg-[#484554] dark:text-[#FCF7FF] h-9 px-4 text-center flex items-center justify-center gap-2 rounded-sm border-[#E2E8F0] font-inter font-normal text-xs text-[#334155] dark:border-none">
              <option>Status</option>
            </select>

            <select className="border w-[6.6vw] sm:w-full dark:bg-[#484554] dark:text-[#FCF7FF] h-9 px-4 text-center flex items-center justify-center gap-2 rounded-sm border-[#E2E8F0] font-inter font-normal text-xs text-[#334155] dark:border-none">
              <option>Name</option>
            </select>

            <span className="font-inter font-semibold text-sm text-[#334155] dark:text-[#FCF7FF]">
              Displaying {filteredData.length} results
            </span>
          </div>
          <div className="flex flex-row items-center gap-2 sm:w-[89.33vw] sm:items-center sm:flex-col sm:flex-wrap">
            <div className="flex flex-row gap-2 items-center sm:flex sm:flex-start sm:items-center sm:w-full sm:justify-between">
              <span className="font-inter font-normal text-sm text-[#334155] dark:text-[#FCF7FF]">
                Sort:{" "}
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border w-[9.72vw] dark:bg-[#484554] dark:text-[#FCF7FF] sm:w-[140px] h-9 rounded-sm py-2 px-4 flex gap-2 text-sm font-inter font-normal text-[#334155] dark:border-none"
              >
                <option>Most Recent</option>
              </select>
            </div>
            <div className="flex flex-row gap-2 items-center sm:flex sm:flex-start sm:w-full sm:justify-between sm:items-center">
              <OptionsButton />
              <button className="border w-[6.94] h-9 rounded-sm py-2 px-4 flex flex-row items-center gap-2 font-inter font-normal text-sm text-[#334155] dark:bg-[#484554] dark:text-[#FCF7FF] dark:border-none">
                <DownloadIcon />
                Export
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        {isMobile ? (
          <MobileEventsTable />
        ) : (
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-[#F1F5F9] dark:bg-[#484554] text-left">
                <th className="py-2 px-4 w-[18.68vw] h-12 font-inter font-semibold text-xs text-[#64748B] dark:text-white">
                  Event Name
                </th>
                <th className="py-2 px-4 w-[18.68vw] h-12 font-inter font-semibold text-xs text-[#64748B] dark:text-white">
                  Date
                </th>
                <th className="py-2 px-4 w-[18.68vw] h-12 font-inter font-semibold text-xs text-[#64748B] dark:text-white">
                  Speaker
                </th>
                <th className="py-2 px-4 w-[18.68vw] h-12 font-inter font-semibold text-xs text-[#64748B] dark:text-white">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((event, index) => (
                <tr
                  key={index}
                  className="cursor-pointer"
                  onClick={() => handleEventClick(event)}
                >
                  <td className="py-2 px-4 w-[18.68vw] h-12 font-inter font-normal text-sm text-[#64748B]">
                    {event.name}
                  </td>
                  <td className="py-2 px-4 w-[18.68vw] h-12 font-inter font-normal text-sm text-[#64748B]">
                    {event.date}
                  </td>
                  <td className="py-2 px-4 w-[18.68vw] h-12 font-inter font-normal text-sm text-[#64748B]">
                    {event.speaker}
                  </td>
                  <td className="py-2 px-4 w-[18.68vw] h-12 font-inter font-normal text-sm text-[#64748B]">
                    <span
                      className={`px-2 py-1 w-[7.94vw] h-8 rounded-full text-sm ${
                        statusColor[event.status]
                      } flex items-center gap-2`}
                    >
                      <div
                        className={`w-1 h-1 rounded-full ${
                          event.status === "Completed"
                            ? "bg-green-800"
                            : "bg-blue-800"
                        }`}
                      />
                      {event.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* Modal */}
        {selectedEvent && (
          <div className="absolute left-0 top-5 z-20 flex items-center justify-center rounded-sm w-[30.56vw] h-[380px] bg-white dark:bg-[#484554] shadow-custom">
            <div className="h-full w-full">
              <div className="flex justify-between w-full h-[72px] items-center px-6 pt-6 gap-4">
                <h2 className="w-[24.44vw] h-12 flex flex-col">
                  <span className="font-inter font-semibold text-lg text-[#334155] dark:text-[#FCF7FF]">
                    {selectedEvent.name}
                  </span>
                  <span className="font-inter font-normal text-sm text-[#64748B] dark:text-[#FCF7FF]">
                    {selectedEvent.date}
                  </span>
                </h2>
                <button
                  onClick={closeModal}
                  className="w-6 h-6 rounded-full flex items-center justify-center bg-white dark:bg-[#ADA9BB] border border-[#E2E8F0] text-black dark:text-[#484554]"
                >
                  &times;
                </button>
              </div>
              <div className="w-full h-[68px] p-6 gap-4">
                <p className="font-inter font-normal text-sm text-[#334155] dark:text-[#FCF7FF]">
                  {selectedEvent.description}
                </p>
              </div>
              <div className="flex flex-col w-full h-[156px] p-6 gap-4">
                <Image
                  src={avattar}
                  alt="avatar group"
                  width={80}
                  height={32}
                />
                <p className="h-[60px] font-inter font-normal text-sm text-[#334155] dark:text-[#FCF7FF]">
                  Guest Speaker: {selectedEvent.speaker} <br />
                  <span className="font-inter font-normal text-sm text-[#334155] dark:text-[#FCF7FF]">
                    {selectedEvent.attendees} Attendees
                  </span>
                </p>
              </div>
              <div className="flex flex-row gap-[10px] p-6 bg-[#F8FAFC] dark:bg-[#ADA9BB]">
                <button className="flex gap-2 border border-[#E2E8F0] rounded-sm px-4 py-2 w-[4.86vw] h-9 font-inter font-normal text-sm text-[#334155] dark:text-[#334155]">
                  Edit
                </button>
                <div className="w-[21.67vw] h-9 flex flex-row items-center gap-2 justify-end">
                  <button className="flex items-center justify-center  gap-2 bg-[#F43F5E] rounded-sm px-4 py-2 w-[5.21vw] h-9 font-inter font-normal text-sm text-white">
                    Delete
                  </button>
                  <button className="flex items-center justify-center gap-2 bg-[#8576FF] rounded-sm px-4 py-2 w-[11.04vw] h-9 font-inter font-normal text-xs text-white">
                    Mark as Completed
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Pagination */}
        {isMobile ? (
          <MobilePagination />
        ) : (
          <div className="flex justify-between items-center mt-4">
            <div className="flex gap-2 items-center">
              <button className="border flex items-center justify-center w-9 h-9 p-2 rounded-sm dark:bg-[#484554] dark:border-none">
                &lt;
              </button>
              <button className="border w-8 h-8 rounded-[100px] bg-[#8576FF] text-white font-inter font-normal text-sm align-center dark:border-none">
                1
              </button>
              <button className="border-none w-8 h-8 rounded-[100px] dark:text-white">
                2
              </button>
              <button className="border-none w-8 h-8 rounded-[100px] dark:text-white">
                3
              </button>
              <button className="border flex items-center justify-center w-9 h-9 p-2 rounded-sm dark:bg-[#484554] dark:border-none">
                &gt;
              </button>
            </div>
            <div className="w-[10.069vw] h-9 flex flex-row gap-2 items-center justify-center">
              <span className="font-inter font-normal text-sm text-[#334155] dark:text-white">
                Show:{" "}
              </span>
              <select className="border p-2 rounded-sm flex items-center justify-center gap-2 border-[#E2E8F0] text-[#334155]  w-24 h-9 font-inter font-normal text-sm dark:bg-[#484554] dark:border-none dark:text-white">
                <option>10 rows</option>
                <option>25 rows</option>
                <option>50 rows</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Table;
