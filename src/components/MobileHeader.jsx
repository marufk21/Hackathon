import { useMemo } from "react";
import PropTypes from "prop-types";

const MobileHeader = ({
  className = "",
  propHeight,
  propFlex,
  cihamburger,
  mainLogoWithDarktextDphi1,
}) => {
  const mobileHeaderStyle = useMemo(() => {
    return {
      height: propHeight,
      flex: propFlex,
    };
  }, [propHeight, propFlex]);

  return (
    <div
      className={`self-stretch h-[557px] flex flex-row items-start justify-start max-w-full text-center text-13xl text-white font-poppins ${className}`}
      style={mobileHeaderStyle}
    >
      <div className="flex-[0.8261] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.03)] bg-white flex flex-row items-start justify-start pt-[7px] px-9 pb-[13px] box-border relative max-w-full">
        <div className="h-[51px] w-[414px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.03)] bg-white hidden max-w-full z-[0]" />
        <img
          className="h-6 w-6 absolute !m-[0] right-[35px] bottom-[13px] overflow-hidden shrink-0 z-[1]"
          loading="lazy"
          alt=""
          src={cihamburger}
        />
        <img
          className="h-[31px] w-[61px] relative object-cover z-[1]"
          loading="lazy"
          alt=""
          src={mainLogoWithDarktextDphi1}
        />
      </div>
      <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-[50px] px-0 pb-0 box-border max-w-full ml-[-414px] mq800:pt-20 mq800:box-border">
        <div className="self-stretch flex-1 bg-darkslategray-300 flex flex-col items-end justify-start pt-[85px] pb-[66px] pl-[62px] pr-[63px] box-border gap-9 max-w-full z-[2] mq450:gap-[18px] mq450:pl-5 mq450:pr-5 mq450:box-border mq800:pt-20 mq800:pb-[43px] mq800:box-border">
          <div className="w-[414px] h-[507px] relative bg-darkslategray-300 hidden max-w-full" />
          <h1 className="m-0 self-stretch flex-1 relative text-inherit leading-[40px] font-semibold font-[inherit] z-[3] mq450:text-lgi mq450:leading-[24px] mq800:text-7xl mq800:leading-[32px]">
            Live Sessions By Data Science Experts.
          </h1>
          <div className="self-stretch h-16 flex flex-row items-start justify-end pt-0 pb-2 pl-1 pr-[3px] box-border text-lg text-whitesmoke-400">
            <div className="self-stretch flex-1 relative leading-[28px] font-medium z-[3]">
              Learn from the best in the industry and academia!
            </div>
          </div>
          <div className="self-stretch h-[100px] flex flex-row items-start justify-end py-0 pl-[68px] pr-[67px] box-border text-sm text-darkslategray-300 mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-4">
              <div className="self-stretch h-[42px] rounded-3xs bg-white flex flex-row items-start justify-start py-3 px-[18px] box-border whitespace-nowrap z-[3]">
                <div className="self-stretch flex-1 relative leading-[18px] font-semibold">
                  Explore Sessions
                </div>
              </div>
              <div className="self-stretch flex-1 rounded-3xs border-white border-[2px] border-solid flex flex-row items-start justify-start py-3 pl-2.5 pr-[7px] z-[3] text-white">
                <div className="self-stretch w-[133px] relative leading-[18px] font-semibold inline-block">
                  Nominate Speaker
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MobileHeader.propTypes = {
  className: PropTypes.string,
  cihamburger: PropTypes.string,
  mainLogoWithDarktextDphi1: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propFlex: PropTypes.any,
};

export default MobileHeader;
