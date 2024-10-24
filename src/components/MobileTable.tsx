import React, { useState } from "react";
import Image from "next/image";
import avattar from "@/components/icons/avatar-group.png";

type EventStatus = "Completed" | "In Progress";

interface Event {
  name: string;
  date: string;
  speaker: string;
  status: EventStatus;
  description?: string;
  attendees?: number;
}

const MobileEventsTable = () => {
  const [expandedRows, setExpandedRows] = useState<{ [key: number]: boolean }>(
    {}
  );
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("Most Recent");

  const toggleExpand = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedRows((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
  };

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

  const filteredData = eventData.filter((event) =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const statusColor: Record<EventStatus, string> = {
    Completed: "bg-green-200 text-green-800",
    "In Progress": "bg-blue-200 text-blue-800",
  };

  return (
    <div className="flex flex-col mt-[21px] w-full relative overflow-x-auto">
      <table className="table-fixed border-collapse">
        <thead className="w-full h-12 bg-[#F1F5F9] dark:bg-[#6A6676]">
          <tr className="w-full overflow-x-hidden">
            <th className="flex flex-row h-12 items-center justify-center font-inter font-semibold text-xs text-[#64748B] dark:text-[#FCF7FF]">
              <div className="flex items-center w-[65.33vw] text-left h-full px-4">
                Event Name
              </div>{" "}
              <div className="flex items-center w-[34.67vw] h-full px-4">
                Status
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((event, index) => (
            <tr
              key={index}
              className={`cursor-pointer mb-1 ${
                expandedRows[index] ? "bg-[#F2F2F7] dark:bg-[#484554]" : ""
              }`}
              onClick={() => handleEventClick(event)}
            >
              <td>
                <div className="py-2 px-2.5 h-10 gap-4 w-full flex justify-between items-center">
                  <button
                    className="w-6 h-6 text-[#334155] dark:text-[#FCF7FF]"
                    onClick={(e) => toggleExpand(index, e)}
                  >
                    {expandedRows[index] ? "⌵" : ">"}
                  </button>
                  <span className="font-inter w-[57.6vw] h-5  font-normal text-sm text-[#334155] dark:text-[#FCF7FF]">
                    {event.name}
                  </span>
                  <span
                    className={`px-2 py-1 w-[22.13vw] h-5 rounded-[30px] ${
                      statusColor[event.status]
                    } flex items-center gap-2`}
                  >
                    <span className="text-xs">{event.status}</span>
                  </span>
                </div>
                {expandedRows[index] && (
                  <div className="w-full flex justify-between h-[52px] p-4 dark:bg-[#383544]">
                    <p className="text-sm font-inter text-[#334155] dark:text-[#FCF7FF]">
                      {event.speaker}
                    </p>
                    <p className="text-sm font-inter text-[#334155] dark:text-[#FCF7FF]">
                      {event.date}
                    </p>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedEvent && (
        <div className="absolute z-20 w-[89.33vw] h-[470px] shadow-xl shadow-black/15 bg-white dark:bg-[#484554] flex flex-col items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex w-full gap-4 px-6 pt-6 items-center">
            <h2 className="flex flex-col w-[65.86vw] dark:text-[#FCF7FF]">
              <span>{selectedEvent.name}</span>
              <span>{selectedEvent.date}</span>
            </h2>
            <button
              onClick={() => setSelectedEvent(null)}
              className="w-6 h-6 rounded-full flex items-center justify-center bg-white dark:bg-[#ADA9BB] border border-[#E2E8F0] text-black dark:text-[#484554] hover:text-gray-700"
            >
              ×
            </button>
          </div>
          <div className="w-full p-6 gap-4 h-[68px] dark:text-[#FCF7FF]">
            {selectedEvent.description}
          </div>
          <div className="flex flex-col w-full h-[156px] p-6 gap-4">
            <Image src={avattar} alt="avatar group" width={80} height={32} />
            <p className="h-[60px] font-inter font-normal text-sm text-[#334155] dark:text-[#FCF7FF]">
              Guest Speaker: {selectedEvent.speaker} <br />
              <span className="font-inter font-normal text-sm text-[#334155] dark:text-[#FCF7FF]">
                {selectedEvent.attendees} Attendees
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-[10px] p-6 bg-[#F8FAFC] dark:bg-[#ADA9BB]">
            <button className="flex items-center justify-center gap-2 border border-[#E2E8F0] dark:text-[#334155]  rounded-sm px-4 py-2 w-[76.53vw] h-9 font-inter font-normal text-sm text-[#334155]">
              Edit
            </button>
            <div className="w-[76.53vw] h-20 flex flex-col items-center gap-2 justify-center">
              <button className="flex items-center justify-center  gap-2 bg-[#F43F5E] rounded-sm px-4 py-2 w-[76.53vw] h-9 font-inter font-normal text-sm text-white">
                Delete
              </button>
              <button className="flex items-center justify-center gap-2 bg-[#8576FF] rounded-sm px-4 py-2 w-[76.53vw] h-9 font-inter font-normal text-xs text-white">
                Mark as Completed
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileEventsTable;
