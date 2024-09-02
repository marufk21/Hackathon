import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const ChallengeNameInput = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div
      className={`w-[817px] flex flex-col items-start justify-start gap-11 max-w-full text-left text-base text-gray-1 font-body-b3-regular mq450:gap-[22px] ${className}`}
    >
      <div className="w-[453px] flex flex-col items-start justify-start gap-[34px] max-w-full mq450:gap-[17px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[19px]">
          <div className="w-[163px] relative font-medium inline-block">
            Challenge Name
          </div>
          <div className="self-stretch h-[39px] relative rounded-8xs border-silver-200 border-[1px] border-solid box-border" />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[19px] max-w-full">
          <div className="w-[163px] relative font-medium inline-block">
            Start Date
          </div>
          <div className="self-stretch rounded-8xs border-silver-200 border-[1px] border-solid box-border flex flex-row items-start justify-between pt-1.5 pb-[5px] pl-5 pr-[25px] max-w-full gap-5 z-[1] text-gray">
            <div className="w-[163px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
              <div className="self-stretch relative z-[2]">Add start date</div>
            </div>
            <div className="h-[39px] w-[453px] relative rounded-8xs border-silver-200 border-[1px] border-solid box-border hidden max-w-full" />
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/uilcalender.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[19px] max-w-full">
          <div className="w-[163px] relative font-medium inline-block">
            End Date
          </div>
          <div className="self-stretch rounded-8xs border-silver-200 border-[1px] border-solid box-border flex flex-row items-start justify-between pt-1.5 pb-[5px] pl-5 pr-[25px] max-w-full gap-5 z-[1] text-gray">
            <div className="w-[163px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
              <div className="self-stretch relative z-[2]">Add end date</div>
            </div>
            <div className="h-[39px] w-[453px] relative rounded-8xs border-silver-200 border-[1px] border-solid box-border hidden max-w-full" />
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/uilcalender.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[19px]">
        <div className="w-[163px] relative font-medium inline-block">
          Description
        </div>
        <div className="self-stretch h-[252px] relative">
          <div className="absolute top-[0px] left-[0px] rounded-8xs border-silver-200 border-[1px] border-solid box-border w-full h-full">
            <div className="absolute top-[0px] left-[0px] rounded-8xs border-silver-200 border-[1px] border-solid box-border w-full h-full hidden" />
            <img
              className="absolute top-[236px] left-[798px] w-[12.8px] h-[12.6px] overflow-hidden object-contain z-[1]"
              alt=""
              src="/bitrianglefill@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="w-[236px] flex flex-col items-start justify-start pt-0 px-0 pb-3 box-border gap-[41px]">
        <div className="flex flex-col items-start justify-start gap-[19px]">
          <div className="w-[186px] relative font-medium inline-block">
            Image
          </div>
          <div className="rounded-8xs bg-whitesmoke-100 border-gainsboro-200 border-[1px] border-solid flex flex-row items-start justify-start pt-[11px] px-[72px] pb-2.5 gap-0.5 text-lg text-dimgray">
            <div className="h-[47px] w-[236px] relative rounded-8xs bg-whitesmoke-100 border-gainsboro-200 border-[1px] border-solid box-border hidden" />
            <div className="relative font-medium inline-block min-w-[66px] z-[1]">
              Upload
            </div>
            <img
              className="h-[22px] w-[22px] relative overflow-hidden shrink-0 min-h-[22px] z-[1]"
              alt=""
              src="/bxscloudupload.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[19px]">
          <div className="w-[163px] relative font-medium inline-block">
            Level Type
          </div>
          <div className="self-stretch rounded-8xs border-silver-200 border-[1px] border-solid flex flex-row items-start justify-between py-[7px] pl-[21px] pr-[22px] gap-5 z-[1] text-sm">
            <div className="w-[71px] relative font-medium inline-block shrink-0">
              Easy
            </div>
            <div className="h-[39px] w-[236px] relative rounded-8xs border-silver-200 border-[1px] border-solid box-border hidden" />
            <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
              <img
                className="w-3 h-2 relative z-[1]"
                alt=""
                src="/level-icon.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="rounded-3xs bg-dphigreen flex flex-row items-start justify-start py-[12.5px] px-8 gap-2.5 cursor-pointer text-center text-lg text-white"
        onClick={onButtonContainerClick}
      >
        <div className="relative leading-[21px] font-medium">
          Create Challenge
        </div>
        <img
          className="h-[10.6px] w-[11px] relative hidden"
          alt=""
          src="/iconfilter.svg"
        />
        <div className="overflow-hidden hidden flex-col items-start justify-start py-0.5 px-0 box-border w-[px] h-[px]">
          <img className="w-3 h-2 relative" alt="" src="/vector-1.svg" />
        </div>
      </div>
    </div>
  );
};

ChallengeNameInput.propTypes = {
  className: PropTypes.string,
};

export default ChallengeNameInput;
