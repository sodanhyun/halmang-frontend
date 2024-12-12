import useAuthStore from "../store/useAuthStore";
import ParentBannerImage from "../../static/images/flower_32_32.svg";
import ChildBannerImage from "../../static/images/tangerine_32_32.svg";
import { judgeUserRole } from "../utils/user";

const HistoryBanner = ({ count }: { count: number }) => {
    const { receiver_id } = useAuthStore();
    const bannerImage = receiver_id === "parent" ? ParentBannerImage : ChildBannerImage;
    const bannerColor = receiver_id === "parent" ? "text-illustration-yellow" : "text-illustration-red";
    const oppositeRole = judgeUserRole();

    return (
        <div className="flex w-full items-center px-[16px] py-[13px] bg-primary-brown-100 rounded-xl mb-[20px]">
            <div className="flex items-center gap-3">
                <img src={bannerImage} alt="banner" />
                <p className="text-primary-brown-950 text-labelSemiBold">
                    오늘 {oppositeRole}님과 총
                    <span className={bannerColor}>{` ${count}건`}</span>의 안부를 주고받았어요!
                </p>
            </div>
        </div>
    );
};

export default HistoryBanner;