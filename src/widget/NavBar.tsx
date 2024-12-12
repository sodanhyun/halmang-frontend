import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import HeartActiveIcon from "../../static/images/HeartActiveIcon.svg";
import HeartInactiveIcon from "../../static/images/HeartInactiveIcon.svg";
import SendActiveIcon from "../../static/images/SendActiveIcon.svg";
import SendInactiveIcon from "../../static/images/SendInactiveIcon.svg";
import HistoryActiveIcon from "../../static/images/HistoryActiveIcon.svg";
import HistoryInactiveIcon from "../../static/images/HistoryInactiveIcon.svg";

interface NavBarIconProps {
  activeIcon: string;
  inactiveIcon: string;
  title: string;
  isActive: boolean;
  link: string;
  onClick: () => void;
}

const NavBarIcon = ({ activeIcon, inactiveIcon, title, isActive, link, onClick }: NavBarIconProps) => {
  return (
    <Link to={link} className="flex flex-col items-center cursor-pointer" onClick={onClick}>
      <img src={isActive ? activeIcon : inactiveIcon} alt={title} className="w-6 h-6 mb-1" />
      <div
        className={`text-center text-xs font-semibold font-['Pretendard'] leading-[18px] ${
          isActive ? "text-[#3d3e4f]" : "text-[#b3b5c6]"
        }`}>
        {title}
      </div>
    </Link>
  );
};

const NavBar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<string>("received");

  const tabs = [
    {
      id: "received",
      title: "받은 안부",
      activeIcon: HeartActiveIcon,
      inactiveIcon: HeartInactiveIcon,
      link: "/",
    },
    {
      id: "send",
      title: "안부 보내기",
      activeIcon: SendActiveIcon,
      inactiveIcon: SendInactiveIcon,
      link: "/send",
    },
    {
      id: "history",
      title: "이전 안부",
      activeIcon: HistoryActiveIcon,
      inactiveIcon: HistoryInactiveIcon,
      link: "/history",
    },
  ];

  useEffect(() => {
    const currentTab = tabs.find((tab) => tab.link === location.pathname);
    if (currentTab) {
      setActiveTab(currentTab.id);
    }
  }, [location.pathname]);

  return (
    <nav className="grid-in-nav bottom-0 h-[62px] left-0 right-0 mx-auto max-w-[390px] w-full bg-white shadow backdrop-blur-sm flex justify-around items-center py-2">
      {tabs.map((tab) => (
        <NavBarIcon
          key={tab.id}
          activeIcon={tab.activeIcon}
          inactiveIcon={tab.inactiveIcon}
          title={tab.title}
          isActive={activeTab === tab.id}
          link={tab.link}
          onClick={() => setActiveTab(tab.id)}
        />
      ))}
    </nav>
  );
};

export default NavBar;
