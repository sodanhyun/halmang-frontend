/**
 * @example <ToastPopup
        heading="자녀님께 안부 카드를 보냈어요!"
        subHeading="시그널이 도착하면 자녀님이 기뻐할 거예요"
        Icon={() => <img src="../../static/images/flower_32_32.svg" alt="check" />}
      />
 */
const ToastPopup = ({ heading, subHeading, Icon }: { heading: string; subHeading: string; Icon: React.FC }) => {
  return (
    <div className="flex justify-center items-center w-[342px] px-5 py-[18px] bg-primary-brown-100 rounded-2xl shadow-toast">
      <div className="flex w-full justify-between items-center self-stretch">
        <div className="flex flex-col gap-[2px]">
          <h1 className="text-body3SemiBold text-primary-brown-950">{heading}</h1>
          <h2 className="text-labelMedium text-text-100">{subHeading}</h2>
        </div>
        <Icon />
      </div>
    </div>
  );
};

export default ToastPopup;
