"use client";
import { Icon } from "@iconify/react";
import { ChevronDown, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ModalProps {
  open: boolean;
  setOpenModal: (open: boolean) => void;
}

function FindPeopleModal({ open, setOpenModal }: ModalProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenModal(false);
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!open) {
    return null;
  }

  const dataKeywords = [
    {
      icon: "mdi:briefcase-outline",
      title: "Job Title",
      desc: "E.g: Manager, Software Engineer",
    },
    {
      icon: "mynaui:globe",
      title: "Company Website",
      desc: "E.g: Google.com, LinkedIn.com",
    },
    {
      icon: "mingcute:location-2-line",
      title: "Personal Location",
      desc: "E.g: London, Great New York City",
    },
    {
      icon: "tdesign:location",
      title: "Company Location",
      desc: "E.g: United States, UAE",
    },
    {
      icon: "tabler:users",
      title: "Company Headcount",
      desc: "E.g: 11-50, 10000+",
    },
    {
      icon: "ph:git-branch-duotone",
      title: "Management Level",
      desc: "E.g: Owner, Founder",
    },
  ];

  const tableHeaders = [
    "NAME",
    "TITLE",
    "HEADLINE",
    "LINKEDIN URL",
    "COMPANY",
    "COMPANY URL",
    "COMPANY URL",
  ];

  return (
    <div
      onClick={() => setOpenModal(false)}
      className="w-full h-full bg-black/30 fixed z-10 inset-0 flex justify-center items-center p-5"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[80%] h-[95%] bg-white relative rounded-lg pt-7 px-5 pb-4 flex flex-col overflow-hidden"
      >
        <button
          onClick={() => setOpenModal(false)}
          className="size-3.5 rounded-full cursor-pointer flex justify-center items-center bg-gray-200 absolute top-2.5 right-2.5"
        >
          <X className="size-2.5 stroke-[2.5px] text-[#101828]" />
        </button>
        <div className="w-full h-full flex gap-3">
          <div className="w-[30%] h-full shrink-0 flex flex-col gap-4 flex-1 min-h-0">
            <div className="flex justify-between">
              <h2 className="text-lg font-extrabold text-gray-900">
                Find People
              </h2>
              <div className="bg-gray-100 p-1 px-2 rounded-md text-gray-900  flex gap-1 items-center">
                <ChevronDown className="size-4 stroke-2" />
                <span className="text-xs font-medium">Saved Search</span>
              </div>
            </div>
            <div className="flex-1 flex flex-col min-h-0">
              <div className="flex gap-2 items-center">
                <Icon
                  icon="tdesign:user-arrow-right"
                  className="size-[14px] text-gray-900 stroke-3 font-extrabold"
                />
                <p className="text-sm font-semibold text-gray-900">
                  People Keyword
                </p>
              </div>
              <div className="flex items-center gap-2 py-2 pt-3 border-b-2 border-gray-300">
                <Icon
                  icon="tabler:search"
                  className="size-[15px] text-gray-500"
                  color="#6B7280s"
                />
                <input
                  type="text"
                  className="text-sm text-gray-500 outline-none focus:outline-none"
                  placeholder="Enter single keyword here..."
                />
              </div>
              <div className="flex flex-col flex-1 overflow-auto hide-scrollbar">
                {dataKeywords.map((item, i) => (
                  <div key={i} className="flex flex-col border-b">
                    <div
                      className="flex items-center justify-between py-3 cursor-pointer"
                      onClick={() =>
                        setExpandedIndex(expandedIndex === i ? null : i)
                      }
                    >
                      <div className="flex flex-col gap-2">
                        <div className="flex gap-2 items-center">
                          <Icon
                            icon={item.icon}
                            className="size-[16px] text-gray-900 stroke-3 font-extrabold"
                          />
                          <p className="text-sm font-semibold text-gray-900">
                            {item.title}
                          </p>
                        </div>
                        <p className="text-gray-500 text-xs">{item.desc}</p>
                      </div>
                      <ChevronDown
                        className={`size-4 stroke-2 text-gray-900 transition-transform duration-200 ${
                          expandedIndex === i ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    {expandedIndex === i && (
                      <div className="pb-3 px-1">
                        <p className="text-xs text-gray-400 italic">
                          Nothing available right now
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="gap-2 grid grid-cols-2">
              <button className="text-xs bg-gray-200 text-gray-800  rounded-md flex gap-2 justify-center items-center">
                <Icon
                  icon="material-symbols:document-search-outline"
                  className="size-[18px]"
                  color="#1F2A37"
                />
                <span>Save Search</span>
              </button>
              <button className="text-xs text-white bg-gray-800 p-2 rounded-md flex gap-2 justify-center items-center">
                <Icon icon="mdi:eye" className="size-[18px]" color="#ffffff" />
                <span>Preview Result</span>
              </button>
            </div>
          </div>
          <div className="w-[70%] h-full">
            <div className="bg-[#FBECDD] px-3 py-1 rounded-md flex gap-1 items-center w-fit ml-auto mt-1">
              <Icon
                icon="tabler:search"
                className="size-[12px]"
                color="#D9730E"
              />
              <span className="text-xs text-[#D9730E]">8000/50000</span>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-xs font-medium text-gray-600">
                Found 0 companies. Click preview to view results
              </p>
              <p className="rounded-md flex gap-1 items-center w-fit ml-auto mt-1">
                <Icon
                  icon="material-symbols:lock-outline"
                  className="size-[12px]"
                  color="#D9730E"
                />
                <span className="text-xs font-semibold text-[#CB912E]">
                  Unlock 100,000 leads with Enterprise Plan*
                </span>
              </p>
            </div>
            <div className="flex justify-between items-center mt-5">
              {tableHeaders.map((item, i) => (
                <div key={i} className="text-xs font-semibold text-gray-500">
                  {item}
                </div>
              ))}
            </div>
            <div className="flex-1 w-full h-full ">
              <div className="flex flex-col justify-center items-center gap-4 mt-16">
                <div className="size-[150px] ">
                  <Image
                    className="object-contain w-full h-full"
                    src="/file-sticker.svg"
                    alt="sticker"
                    width={100}
                    height={130}
                  />
                </div>
                <div className="text-sm text-gray-400 flex flex-col gap-1 justify-center items-center">
                  <span className="flex flex-col text-center">
                    <span>
                      Start your Company search , preview, and import companies
                    </span>
                    <span>
                      for enrichment by applying any filter in the left panel.
                    </span>
                  </span>
                  <span>OR</span>
                  <span>Import companies from saved Search. </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindPeopleModal;
