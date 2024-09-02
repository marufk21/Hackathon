import PropTypes from "prop-types";

const GroupComponent2 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch shadow-[0px_4px_43px_rgba(0,_0,_0,_0.08)] rounded-mini bg-white flex flex-col items-start justify-start pt-0 px-0 pb-[31px] box-border gap-[70px] max-w-full z-[1] text-left text-xl text-black font-poppins mq450:gap-[35px] ${className}`}
    >
      <div className="self-stretch h-[413px] relative shadow-[0px_4px_43px_rgba(0,_0,_0,_0.08)] rounded-mini bg-white hidden" />
      <div className="self-stretch h-[173px] rounded-t-mini rounded-b-none bg-whitesmoke-300 flex flex-row items-start justify-start py-12 px-[33px] box-border relative whitespace-nowrap max-w-full z-[1]">
        <div className="h-[173px] w-[351px] relative rounded-t-mini rounded-b-none bg-whitesmoke-300 hidden max-w-full z-[0]" />
        <h3 className="m-0 w-[267px] relative text-inherit leading-[56px] font-semibold font-[inherit] flex items-center shrink-0 z-[2]">
          Claims Prediction and Risk Scorecards with AI
        </h3>
        <img
          className="h-[82px] w-[82px] absolute !m-[0] bottom-[-36px] left-[33px] rounded-[50%] object-cover z-[2]"
          alt=""
          src="/session-image@2x.png"
        />
      </div>
      <div className="w-[291px] h-[139px] flex flex-row items-start justify-start py-0 px-[33px] box-border text-base">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[35px]">
          <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[9px]">
            <div className="w-[110px] h-[13px] relative leading-[28px] font-semibold flex items-center shrink-0 z-[2]">
              Emma W.
            </div>
            <div className="self-stretch flex-1 relative text-sm leading-[20px] text-gray-1 flex items-center z-[2]">
              Asst Vice President at Morgan Stanley | Founder, Databuzz
            </div>
          </div>
          <div className="w-[195px] h-[42px] rounded-3xs bg-dphigreen flex flex-row items-start justify-end py-3 px-[18px] box-border relative gap-2.5 whitespace-nowrap z-[2] text-center text-sm text-white">
            <img
              className="h-[17px] w-[17px] absolute !m-[0] top-[12px] left-[17px] overflow-hidden shrink-0"
              alt=""
              src="/ciltv.svg"
            />
            <div className="self-stretch w-[136px] relative leading-[18px] font-semibold inline-block">
              Watch On Demand
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

GroupComponent2.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent2;
