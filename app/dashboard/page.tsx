"use client";
import GridRow from "@/components/dashboard/GridRow";
import TableHeader from "@/components/dashboard/TableHeader";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { spawn } from "child_process";

export default function DashboardPage() {
  const [selected, setSelected] = useState("grids");

  const listData = [
    {
      line: "Create your data list",
      status: "done",
    },
    {
      line: "Learn about BitAgent",
      status: "done",
    },
    {
      line: "Connect an integration",
      status: "done",
    },
    {
      line: "Customise waterfall providers",
      status: "not-done",
    },
  ];

  return (
    <section className="w-full h-full flex flex-col">
      <header className="w-full h-[55px] shrink-0 border border-[#E4E5E6] flex items-center justify-end pr-5">
        <div className="flex gap-4 justify-center items-center">
          <div className="flex gap-3 p-2 justify-center items-center bg-[#EDF3EC] w-fit rounded-xl">
            <Icon icon="ph:coins" width={24} color="#438361" />
            <span className="text-sm font-medium text-[#438361]">
              450000/5500000
            </span>
            <span className="text-xs p-0.5 px-1 rounded-lg bg-[#438361] text-white">
              Booster Plan
            </span>
          </div>
          <div className="size-7 rounded-full overflow-hidden">
            <Image
              className="object-cover"
              src="/profile-1.jpg"
              alt="profile"
              width={28}
              height={28}
            />
          </div>
        </div>
      </header>
      <div className="px-5 pt-5 flex-1 flex flex-col min-h-0">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold">Welcome back, Tim!</h2>
            <p className="text-[#6B7280] text-sm">
              Here's your daily scoop on Bitscale!.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="text-[#1F2A37] h-[34px] px-2 text-xs font-medium flex items-center gap-2 border border-gray-200 rounded-md">
              <Icon
                icon="mingcute:building-5-line"
                width={14}
                color="#438361"
              />
              Find Companies
            </button>
            <button className="text-[#1F2A37] h-[34px] px-2 text-xs font-medium flex items-center gap-2 border border-gray-200 rounded-md ">
              <Icon
                icon="mdi:user-outline"
                width={18}
                height={18}
                color="#8F65AF"
              />
              <span>Find People</span>
            </button>
            <button className="text-white h-[35px] bg-gray-700 text-sm font-medium flex items-center gap-2  p-1 rounded-lg px-3">
              <span>+</span>
              <span>New Grid</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 rounded-lg mt-[21px]">
          <div className="bg-[#E7F3F880] px-5 py-4">
            <div className="text-[#347FA9] text-sm font-medium">
              Latest from Bitscale
            </div>
            <div className="flex justify-center items-center gap-4 mt-4">
              <div className="h-[100px] w-[140px] shrink-0 bg-[#347FA9] rounded-xl overflow-hidden">
                <Image
                  src="/demo.png"
                  alt="demo"
                  className="object-fill w-full h-full"
                  width={140}
                  height={100}
                />
              </div>
              <div className="flex flex-col gap-1">
                <h5 className="text-sm">How to Integrate 2 way Hubspot</h5>
                <p className="text-gray-500 text-xs">
                  Prerequisites for this Integration is that you should have a
                  HubSpot account and Copy the API key. We simple aad our API
                  key through the integrations pa...
                </p>
                <p className="mt-2 text-gray-400 text-xs">Posted Today</p>
              </div>
            </div>
          </div>
          <div className="bg-[#E7F3F880] px-5 py-4 rounded-lg">
            <div className="flex gap-4">
              <div className="size-[33px] bg-gray-600 flex justify-center items-center rounded-full">
                <Icon
                  icon="icon-park-outline:doc-search-two"
                  width={19}
                  color="#fff"
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <h5 className="text-sm">Complete product demo</h5>
                <p className="text-gray-500 text-xs">
                  92% of users nailed BitScale after this walkthrough
                </p>
              </div>
            </div>
            <div className="w-full flex justify-between items-center pb-4 pt-3">
              <Progress value={75} max={100} className="w-[80%]" />
              <span className="text-[#438361] text-xs">75%</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {listData.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  {item.status === "done" ? (
                    <Icon
                      className="size-[14px] shrink-0"
                      icon="material-symbols:check-circle"
                      color="#347FA9"
                    />
                  ) : (
                    <Icon
                      className="size-[14px] shrink-0"
                      icon="material-symbols:circle-outline"
                      color="#D1D5DC"
                    />
                  )}
                  <p className="text-xs font-medium text-gray-700">
                    {item.line}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 mt-5 flex flex-col gap-2 min-h-0">
          <div className="flex justify-between h-[34px]">
            <div className="h-full">
              <button
                onClick={() => setSelected("grids")}
                className={`px-8 h-full text-sm font-medium cursor-pointer ${selected === "grids" ? "text-blue-700 border-b border-blue-700" : "text-gray-500 border-b border-[#E4E5E6]"}`}
              >
                My Grids
              </button>
              <button
                onClick={() => setSelected("starred")}
                className={`px-8 h-full text-sm font-medium cursor-pointer ${selected === "starred" ? "text-blue-700 border-b border-blue-700" : "text-gray-500 border-b border-[#E4E5E6]"}`}
              >
                Starred
              </button>
            </div>
            <div className="h-full flex gap-4">
              <div className="flex items-center gap-3 px-3 h-full w-[286px] bg-gray-100 rounded-lg">
                <Icon
                  icon="material-symbols-light:search"
                  width={20}
                  height={20}
                  className="shrink-0"
                />
                <input
                  type="text"
                  className="h-full w-full text-xs text-[#6B7280] outline-none focus:outline-none placeholder:font-medium"
                  placeholder="Search grids and workbooks..."
                />
              </div>
              <button className="size-[37px] rounded-full bg-gray-100 flex justify-center items-center">
                <Icon icon="tabler:list-filled" width={18} height={18} />
              </button>
            </div>
          </div>
          {selected === "grids" ? (
            <div className="flex-1 flex flex-col min-h-0">
              <TableHeader />
              <GridRow />
            </div>
          ) : (
            <div className="w-full flex justify-center items-center pt-14">
              No data for this Tab...
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
