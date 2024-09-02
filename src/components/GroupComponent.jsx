import PropTypes from "prop-types";

const GroupComponent = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch h-[413px] relative z-[1] text-left text-sm text-black font-poppins ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_43px_rgba(0,_0,_0,_0.08)] rounded-mini bg-white w-full h-full">
        <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_43px_rgba(0,_0,_0,_0.08)] rounded-mini bg-white w-full h-full hidden" />
        <div className="absolute top-[0px] left-[0px] rounded-t-mini rounded-b-none bg-whitesmoke-300 w-[351px] h-[173px] whitespace-nowrap z-[1] text-xl">
          <div className="absolute top-[0px] left-[0px] rounded-t-mini rounded-b-none bg-whitesmoke-300 w-full h-full hidden" />
          <h3 className="m-0 absolute top-[48px] left-[33px] text-inherit leading-[56px] font-semibold font-[inherit] flex items-center w-[267px] h-14 z-[2]">
            Claims Prediction and Risk Scorecards with AI
          </h3>
        </div>
        <div className="absolute top-[265px] left-[33px] leading-[20px] text-gray-1 flex items-center w-[225px] z-[2]">
          Asst Vice President at Morgan Stanley | Founder, Databuzz
        </div>
        <div className="absolute top-[243px] left-[33px] text-base leading-[28px] font-semibold flex items-center w-[110px] h-[13px] z-[2]">
          Emma W.
        </div>
        <div className="absolute top-[340px] left-[33px] rounded-3xs bg-dphigreen w-[195px] h-[42px] whitespace-nowrap z-[2] text-center text-white">
          <img
            className="absolute top-[12px] left-[17px] w-[17px] h-[17px] overflow-hidden"
            alt=""
            src="/ciltv.svg"
          />
          <div className="absolute top-[12px] left-[41px] leading-[18px] font-semibold">
            Watch On Demand
          </div>
        </div>
        <img
          className="absolute top-[127px] left-[33px] rounded-[50%] w-[82px] h-[82px] object-cover z-[2]"
          alt=""
          src="/session-image@2x.png"
        />
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
