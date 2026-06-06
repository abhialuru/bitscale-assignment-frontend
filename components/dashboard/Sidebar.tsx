"use client";
import {
  Book,
  BookOpen,
  ChevronsUpDown,
  LayoutDashboard,
  Settings,
  SquaresIntersect,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const HOME_ITEMS = [
  {
    label: "My Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    label: "Playbooks",
    icon: Book,
    href: "/playbooks",
  },
  {
    label: "Integrations",
    icon: SquaresIntersect,
    href: "/integrations",
  },
];

export const OTHER_ITEMS = [
  {
    label: "Documentation",
    icon: BookOpen,
    href: "/documentation",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

function Sidebar() {
  const pathname = usePathname();

  return (
    <section className="w-[18%] h-full border-r border-[#E4E5E6]">
      <div className="w-full h-[55px] pl-10 flex items-center border-b border-[#E4E5E6]">
        <div className="text-[26px] font-semibold flex gap-0.5">
          <span className="italic">B</span>
          <span>itscale</span>
        </div>
      </div>
      <div className="w-full h-[52px] ">
        <div className="w-full h-full flex items-center justify-between px-5 border-b border-[#E4E5E6]">
          <div className="flex gap-4.5 items-center">
            <div className="flex relative">
              <div className="w-[24px] h-[24px] bg-gray-300 rounded-full overflow-hidden shrink-0">
                <Image
                  className="size-full object-cover"
                  src="/profile-1.jpg"
                  alt="profile-1"
                  width={24}
                  height={24}
                />
              </div>
              <div className="w-[24px]  -right-2.5 absolute top-0 h-[24px] bg-gray-300 rounded-full overflow-hidden shrink-0">
                <Image
                  className="size-full object-cover"
                  src="/profile-3.jpg"
                  alt="profile-2"
                  width={24}
                  height={24}
                />
              </div>
            </div>
            <p className="font-medium text-sm">GTM Spaces</p>
          </div>
          <button>
            <ChevronsUpDown className="size-4 text-gray-500" />
          </button>
        </div>
      </div>
      <div className="px-2 pt-2">
        <p className="text-gray-500 text-xs font-semibolds px-2 h-[34px] flex items-center">
          Home
        </p>
        {HOME_ITEMS.map((item, _) => (
          <Link
            key={item.href}
            href={item.href}
            className={`
    flex justify-between items-center my-1 h-[34px] px-2 rounded-lg
    
    ${
      pathname === item.href
        ? "bg-gray-100 text-blue-700"
        : "hover:bg-gray-100 text-gray-700 "
    }
  `}
          >
            <div className="flex gap-2">
              <item.icon className="size-4" />
              <p className="text-sm">{item.label}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="px-2 pt-2">
        <p className="text-gray-500 text-xs font-semibolds px-2 h-[34px] flex items-center">
          Other
        </p>
        {OTHER_ITEMS.map((item, _) => (
          <Link
            key={item.href}
            href={item.href}
            className={`
    flex justify-between items-center my-1 h-[34px] px-2 rounded-lg
    
    ${
      pathname === item.href
        ? "bg-gray-100 text-blue-700"
        : "hover:bg-gray-100 text-gray-700"
    }
  `}
          >
            <div className="flex gap-2">
              <item.icon className="size-4" />
              <p className="text-sm">{item.label}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Sidebar;
