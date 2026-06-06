import { Icon } from "@iconify/react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

function GridRow() {
  const grids = [
    {
      id: "1",
      name: "Workbook - Testing design ideas for grid and workbook",
      icons: [
        {
          icon: "ph:user",
          color: "#8F65AF",
        },
        {
          icon: "cib:hubspot",
          color: "#FF7A59",
        },
        { icon: "mingcute:building-5-line", color: "#438361" },
      ],
      starred: false,
      editedBy: {
        name: "Sam Taylor",
        avatar: "/profile-1.jpg",
      },
      lastEdited: "06 Aug, 2025",
    },
    {
      id: "2",
      name: "LinkedIn",
      icons: [{ icon: "logos:linkedin-icon", color: "#FF7A59" }],
      starred: false,
      editedBy: {
        name: "Chris Parker",
        avatar: "/profile-3.jpg",
      },
      lastEdited: "06 Aug, 2025",
    },
    {
      id: "3",
      name: "Sales nav",
      icons: [
        {
          icon: "ix:navigation-filled",
          color: "#4299e1",
        },
      ],
      starred: false,
      editedBy: {
        name: "Jone Doe",
        avatar: "/profile-2.jpg",
      },
      lastEdited: "06 Aug, 2025",
    },
    {
      id: "4",
      name: "find company",
      icons: [
        {
          icon: "mingcute:building-5-line",
          color: "#438361",
        },
      ],
      starred: true,
      editedBy: {
        name: "Alex Morgan",
        avatar: "/profile-1.jpg",
      },
      lastEdited: "06 Aug, 2025",
    },
    {
      id: "5",
      name: "import csv",
      icons: [
        {
          icon: "pajamas:doc-text",
          color: "#9F6B53",
        },
      ],
      starred: true,
      editedBy: {
        name: "Drew Wilson",
        avatar: "/profile-3.jpg",
      },
      lastEdited: "06 Aug, 2025",
    },
    {
      id: "6",
      name: "Find people",
      icons: [
        {
          icon: "ph:user",
          color: "#8F65AF",
        },
      ],
      starred: true,
      editedBy: {
        name: "Jone Doe",
        avatar: "/profile-2.jpg",
      },
      lastEdited: "06 Aug, 2025",
    },
    {
      id: "7",
      name: "Google maps",
      icons: [{ icon: "logos:google-maps", color: "#FF7A59" }],
      starred: false,
      editedBy: {
        name: "Jone Doe",
        avatar: "/profile-2.jpg",
      },
      lastEdited: "06 Aug, 2025",
    },
    {
      id: "8",
      name: "google search results",
      icons: [{ icon: "logos:google-icon", color: "#FF7A59" }],
      starred: false,
      editedBy: {
        name: "Jone Doe",
        avatar: "/profile-2.jpg",
      },
      lastEdited: "06 Aug, 2025",
    },
    {
      id: "9",
      name: "factors",
      icons: [
        {
          icon: "mdi:alpha-f-circle-outline",
          color: "#EF4444",
        },
      ],
      starred: false,
      editedBy: {
        name: "Jone Doe",
        avatar: "/profile-2.jpg",
      },
      lastEdited: "06 Aug, 2025",
    },
    {
      id: "10",
      name: "Hubspot List - 10 (05 Aug 25)",
      icons: [
        {
          icon: "cib:hubspot",
          color: "#FF7A59",
        },
      ],
      starred: true,
      editedBy: {
        name: "Jone Doe",
        avatar: "/profile-2.jpg",
      },
      lastEdited: "06 Aug, 2025",
    },
  ];

  return (
    <div className="bg-gray-50 flex-1 overflow-y-auto hide-scrollbar">
      {grids.map((item, i) => (
        <div
          key={i}
          className="grid grid-cols-[1fr_180px_140px_60px] h-[40px] px-4 border-b border-[#E4E5E6]"
        >
          <div className="flex items-center gap-4">
            <ChevronDown
              className={`size-4 ${item.id === "1" ? "text-gray-700" : "text-gray-100"}`}
            />
            <Icon icon="lucide:star" className="size-[14px] text-gray-500" />
            <div className="relative flex items-center">
              {item.icons.map((icon, index) => (
                <div
                  key={index}
                  className={`
                        size-6
                        bg-white
                        border border-[#E4E5E6]
                        rounded-md
                        flex items-center justify-center
                        ${index !== 0 ? "-ml-2" : ""}
                    `}
                >
                  <Icon
                    icon={icon.icon}
                    className="size-3"
                    color={icon.color}
                  />
                </div>
              ))}
            </div>
            <p className="text-xs">{item.name}</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="size-[21px] rounded-full overflow-hidden">
              <Image
                className="w-full h-full object-fill"
                src={item.editedBy.avatar}
                alt={item.editedBy.name}
                width={21}
                height={21}
              />
            </div>
            <p className="text-xs">{item.editedBy.name}</p>
          </div>
          <div className="text-xs h-full flex items-center">
            {item.lastEdited}
          </div>
          <div className="h-full flex items-center">...</div>
        </div>
      ))}
    </div>
  );
}

export default GridRow;
