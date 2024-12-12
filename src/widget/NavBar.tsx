// import homeActiveIcon
// import homeInactiveIcon
//
// import sendActiveIcon
// import sendInactiveIcon
//
// import historyActiveIcon
// import historyInactiveIcon

import { useState } from "react";

const NavBarIcon = ({ activeIcon, inactiveIcon, title }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      {isActive ? activeIcon : inactiveIcon}
      <p>{title}</p>
    </div>
  );
};

const NavBar = () => {
  return (
    <nav>
      <NavBarIcon activeIcon={homeActiveIcon} inactiveIcon={homeInactiveIcon} title="홈" />
      <NavBarIcon activeIcon={sendActiveIcon} inactiveIcon={sendInactiveIcon} title="보내기" />
      <NavBarIcon activeIcon={historyActiveIcon} inactiveIcon={historyInactiveIcon} title="이전 메시지" />
    </nav>
  );
};

export default NavBar;
