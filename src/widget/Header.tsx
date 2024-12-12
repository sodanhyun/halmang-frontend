import headerImage from "../../static/image/headerImage.svg";

const Header = () => {
  return (
    <div className="flex justify-center align-center">
      <img src={headerImage} alt="headerImage" />
    </div>
  );
};

export default Header;
