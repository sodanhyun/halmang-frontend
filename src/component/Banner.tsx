import { UserRole } from "../type/user";
import ParentBannerImage from "../../static/images/flower_32_32.svg";
import ChildBannerImage from "../../static/images/tangerine_32_32.svg";
import { judgeUserRole } from "../utils/user";

const Banner = ({ role, count }: { role: UserRole; count: number }) => {
  const bannerImage = role === UserRole.PARENT ? ParentBannerImage : ChildBannerImage;
  const bannerColor = role === UserRole.PARENT ? "text-illustration-yellow" : "text-illustration-red";
  const oppositeRole = judgeUserRole(role);

  return (
    <div className="flex items-center px-[16px] py-[13px] bg-primary-brown-100 rounded-xl">
      <div className="flex items-center gap-3">
        <img src={bannerImage} alt="banner" />
        <p className="text-primary-brown-950 text-primary-brown-950 text-labelSemiBold">
          오늘 {judgeUserRole(role)}님께 받은 안부
          <span className={bannerColor}>{` ${count}건`}</span>이 있어요!
        </p>
      </div>
    </div>
  );
};

export default Banner;
