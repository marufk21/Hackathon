import PropTypes from "prop-types";

const SessionContainer = ({
  className = "",
  coolicon,
  antDesigncalendarOutlined,
  sessionImage,
  charmcircleTick,
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start pt-0 pb-[57px] pl-8 pr-[31px] box-border max-w-full text-left text-xl text-white font-poppins mq800:pb-[37px] mq800:box-border ${className}`}
    >
      <div className="flex-1 shadow-[0px_4px_43px_rgba(0,_0,_0,_0.08)] rounded-mini bg-white flex flex-col items-start justify-start pt-0 px-0 pb-[31px] box-border gap-[67px] max-w-full mq450:gap-[33px]">
        <div className="self-stretch h-[444px] relative shadow-[0px_4px_43px_rgba(0,_0,_0,_0.08)] rounded-mini bg-white hidden" />
        <div className="self-stretch rounded-t-mini rounded-b-none bg-darkslategray-300 flex flex-col items-start justify-start pt-12 px-[33px] pb-[72px] box-border relative gap-[27px] max-w-full z-[1]">
          <div className="w-[351px] h-[216px] relative rounded-t-mini rounded-b-none bg-darkslategray-300 hidden max-w-full z-[0]" />
          <h3 className="m-0 w-[267px] relative text-inherit leading-[56px] font-semibold font-[inherit] flex items-center z-[2] mq450:text-base mq450:leading-[22px]">
            Claims Prediction and Risk Scorecards with AI
          </h3>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-6 pr-1.5 relative text-sm">
            <div className="flex-1 flex flex-row items-start justify-start relative">
              <img
                className="h-3.5 w-3.5 absolute !m-[0] bottom-[-1px] left-[77px] z-[2]"
                alt=""
                src={coolicon}
              />
              <div className="flex-1 flex flex-row items-start justify-start gap-7 mq450:flex-wrap">
                <div className="h-[13px] w-[67px] relative leading-[14px] font-medium inline-block shrink-0 z-[2]">
                  20th May
                </div>
                <div className="h-[13px] flex-1 relative leading-[14px] font-medium inline-block min-w-[104px] whitespace-nowrap z-[2]">
                  1:00 PM - 12:00 PM IST
                </div>
              </div>
            </div>
            <img
              className="h-[17px] w-[17px] absolute !m-[0] top-[calc(50%_-_8.5px)] left-[0px] overflow-hidden shrink-0 z-[2]"
              alt=""
              src={antDesigncalendarOutlined}
            />
          </div>
          <img
            className="w-[82px] h-[82px] absolute !m-[0] bottom-[-39px] left-[35px] rounded-[50%] object-cover z-[2]"
            alt=""
            src={sessionImage}
          />
        </div>
        <div className="w-[291px] h-[130px] flex flex-row items-start justify-start py-0 px-[33px] box-border text-base text-black">
          <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[26px]">
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[9px]">
              <div className="w-[110px] h-[13px] relative leading-[28px] font-semibold flex items-center shrink-0 z-[2]">
                Emma W.
              </div>
              <div className="self-stretch flex-1 relative text-sm leading-[20px] text-gray-1 flex items-center z-[2]">
                Asst Vice President at Morgan Stanley | Founder, Databuzz
              </div>
            </div>
            <div className="w-[195px] h-[42px] rounded-3xs bg-dphigreen flex flex-row items-start justify-start py-3 pl-[39px] pr-3.5 box-border relative gap-2.5 whitespace-nowrap z-[2] text-center text-sm text-white">
              <img
                className="h-[18px] w-[18px] absolute !m-[0] top-[calc(50%_-_9px)] left-[16px] overflow-hidden shrink-0"
                alt=""
                src={charmcircleTick}
              />
              <div className="self-stretch flex-1 relative leading-[18px] font-semibold">
                Register For Session
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SessionContainer.propTypes = {
  className: PropTypes.string,
  coolicon: PropTypes.string,
  antDesigncalendarOutlined: PropTypes.string,
  sessionImage: PropTypes.string,
  charmcircleTick: PropTypes.string,
};

export default SessionContainer;
