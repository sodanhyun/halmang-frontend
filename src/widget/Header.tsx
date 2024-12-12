import { Link } from "react-router-dom";
import headerLogo from '../../static/images/HeaderLogo.svg';

const Header = () => {
  return (
    <div className="flex h-14 justify-center items-center">
      <Link to="/">
        <img
          src={headerLogo}
          className="w-[105px] h-[23px]"
          alt="headerImage"
        />
      </Link>
    </div>
  );
};

export default Header;