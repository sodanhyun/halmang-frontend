import { Link } from "react-router-dom";
import headerLogo from "../../static/images/HeaderLogo.svg";

const Header = () => {
  return (
    <header className="grid-in-header w-full flex h-14 justify-center items-center">
      <Link to="/">
        <img src={headerLogo} className="w-[168px] h-[40px]" alt="headerImage" />
      </Link>
    </header>
  );
};

export default Header;
