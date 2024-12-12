// import homeActiveIcon
// import homeInactiveIcon
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
      <NavBarIcon activeIcon={homeActiveIcon} inactiveIcon={homeInactiveIcon} title="Home" />
      <NavBarIcon activeIcon={historyActiveIcon} inactiveIcon={historyInactiveIcon} title="History" />
    </nav>
  );
};

export default NavBar;
