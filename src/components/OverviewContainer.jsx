import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const OverviewContainer = ({ className = "" }) => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/3");
  }, [navigate]);

  return (
    <div
      className={`self-stretch bg-white flex flex-row items-start justify-start pt-0 px-0 pb-[21px] box-border max-w-full text-left text-lg text-black font-body-b3-regular ${className}`}
    >
      <div className="h-[87px] w-[1440px] relative bg-white hidden max-w-full" />
      <div className="ml-[-1px] flex-1 shadow-[0px_6px_12px_#dde6ed] bg-white border-gainsboro-100 border-[0.3px] border-solid box-border flex flex-row items-start justify-between pt-[13px] pb-0 pl-[127px] pr-[119px] max-w-full gap-5 z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border mq725:flex-wrap mq725:pl-[63px] mq725:pr-[59px] mq725:box-border">
        <div className="h-[66px] w-[1440px] relative shadow-[0px_6px_12px_#dde6ed] bg-white border-gainsboro-100 border-[0.3px] border-solid box-border hidden max-w-full" />
        <div className="w-[125px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-2">
            <div className="flex flex-row items-start justify-start py-0 px-5">
              <b className="relative leading-[161.8%] inline-block min-w-[85px] z-[2]">
                Overview
              </b>
            </div>
            <div className="self-stretch h-1 relative rounded-xl bg-dphigreen z-[2]" />
          </div>
        </div>
        <div className="w-[200px] flex flex-row items-start justify-start gap-[18px] text-center text-sm text-white font-poppins">
          <div
            className="flex flex-row items-start justify-start cursor-pointer z-[2]"
            onClick={onGroupContainerClick}
          >
            <div className="rounded-3xs bg-dphigreen flex flex-row items-start justify-start pt-2.5 px-8 pb-[9px]">
              <a className="[text-decoration:none] relative leading-[18px] font-semibold text-[inherit] inline-block min-w-[27px]">
                Edit
              </a>
            </div>
          </div>
          <div className="flex-1 rounded-3xs border-red border-[1.2px] border-solid flex flex-row items-start justify-start pt-2 pb-[7px] pl-[22px] pr-[21px] z-[2] text-red">
            <div className="relative leading-[18px] font-semibold inline-block min-w-[46px]">
              Delete
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

OverviewContainer.propTypes = {
  className: PropTypes.string,
};

export default OverviewContainer;
