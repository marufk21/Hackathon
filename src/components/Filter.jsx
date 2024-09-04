import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Filter = ({ className = "", onClose }) => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/applied-filter");
  }, [navigate]);

  return (
    <div
      className={`w-[290px] relative flex flex-row items-start justify-start leading-[normal] tracking-[normal] max-w-full max-h-full overflow-auto ${className}`}
    >
      <section className="flex-1 shadow-[0px_6px_12px_rgba(221,_230,_237,_0.3)] rounded-3xs bg-white flex flex-col items-start justify-start pt-[26px] pb-[23px] pl-[13px] pr-3 gap-3.5 text-left text-base text-dimgray font-body-b3-regular">
        <div className="w-[290px] h-[394px] relative shadow-[0px_6px_12px_rgba(221,_230,_237,_0.3)] rounded-3xs bg-white hidden" />
        <div className="self-stretch flex flex-col items-start justify-start gap-[22.8px] text-lg text-black">
          <div className="w-[251px] flex flex-row items-start justify-start py-0 px-[3px] box-border">
            <div className="flex-1 flex flex-row items-end justify-between gap-5">
              <div className="relative leading-[14.3px] inline-block min-w-[45px] z-[1]">
                Filter
              </div>
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[1.3px]">
                <img
                  className="w-[13px] h-1.5 relative z-[1]"
                  alt=""
                  src="/caret1.svg"
                />
              </div>
            </div>
          </div>
          <img
            className="self-stretch h-px relative max-w-full overflow-hidden shrink-0 z-[1]"
            alt=""
            src="/vector-141.svg"
          />
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-[3px]">
          <div className="relative leading-[20px] inline-block min-w-[49px] z-[1]">
            Status
          </div>
        </div>
        <div className="w-[98px] flex flex-row items-start justify-start py-0 px-[3px] box-border text-sm text-b400">
          <div className="flex-1 flex flex-col items-start justify-start gap-2">
            <div
              className="flex flex-row items-start justify-start py-0 pl-0 pr-5 gap-[9px] cursor-pointer z-[1]"
              onClick={onGroupContainerClick}
            >
              <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                <div className="w-[15px] h-[15px] relative rounded-10xs border-darkslategray-300 border-[1px] border-solid box-border" />
              </div>
              <div className="relative leading-[23px] inline-block min-w-[17px]">
                All
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[9px]">
              <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                <div className="flex flex-col items-start justify-start gap-4">
                  <div
                    className="w-[15px] h-[15px] relative rounded-10xs border-darkslategray-300 border-[1px] border-solid box-border cursor-pointer z-[1]"
                    onClick={onGroupContainerClick}
                  />
                  <div
                    className="w-[15px] h-[15px] relative rounded-10xs border-darkslategray-300 border-[1px] border-solid box-border cursor-pointer z-[1]"
                    onClick={onGroupContainerClick}
                  />
                  <div
                    className="w-[15px] h-[15px] relative rounded-10xs border-darkslategray-300 border-[1px] border-solid box-border cursor-pointer z-[1]"
                    onClick={onGroupContainerClick}
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-2">
                <div
                  className="flex flex-row items-start justify-start py-0 pl-0 pr-[26px] cursor-pointer z-[1]"
                  onClick={onGroupContainerClick}
                >
                  <div className="relative leading-[23px] inline-block min-w-[42px]">
                    Active
                  </div>
                </div>
                <div
                  className="flex flex-row items-start justify-start cursor-pointer z-[1]"
                  onClick={onGroupContainerClick}
                >
                  <div className="relative leading-[23px] inline-block min-w-[68px]">
                    Upcoming
                  </div>
                </div>
                <div
                  className="flex flex-row items-start justify-start py-0 pl-0 pr-5 cursor-pointer z-[1]"
                  onClick={onGroupContainerClick}
                >
                  <div className="relative leading-[23px] inline-block min-w-[30px]">
                    Past
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="self-stretch h-px relative max-w-full overflow-hidden shrink-0 z-[1]"
          loading="lazy"
          alt=""
          src="/vector-142.svg"
        />
        <div className="flex flex-row items-start justify-start py-0 px-[3px]">
          <div
            className="flex flex-row items-start justify-start cursor-pointer z-[1]"
            onClick={onGroupContainerClick}
          >
            <div className="relative leading-[20px] inline-block min-w-[40px]">
              Level
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-[3px] text-sm text-b400">
          <div className="flex flex-row items-end justify-start gap-[9px]">
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3px]">
              <div className="flex flex-col items-start justify-start gap-3.5">
                <div
                  className="w-[15px] h-[15px] relative rounded-10xs border-darkslategray-300 border-[1px] border-solid box-border cursor-pointer z-[1]"
                  onClick={onGroupContainerClick}
                />
                <div
                  className="w-[15px] h-[15px] relative rounded-10xs border-darkslategray-300 border-[1px] border-solid box-border cursor-pointer z-[1]"
                  onClick={onGroupContainerClick}
                />
                <div
                  className="w-[15px] h-[15px] relative rounded-10xs border-darkslategray-300 border-[1px] border-solid box-border cursor-pointer z-[1]"
                  onClick={onGroupContainerClick}
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[5.5px]">
              <div
                className="flex flex-row items-start justify-start py-0 pl-0 pr-[21px] cursor-pointer z-[1]"
                onClick={onGroupContainerClick}
              >
                <div className="relative leading-[23px] inline-block min-w-[32px]">
                  Easy
                </div>
              </div>
              <div
                className="flex flex-row items-start justify-start py-0 px-0 cursor-pointer z-[1]"
                onClick={onGroupContainerClick}
              >
                <div className="relative leading-[23px] inline-block min-w-[54px] shrink-0">
                  Medium
                </div>
              </div>
              <div
                className="flex flex-row items-start justify-start py-0 pl-0 pr-[21px] cursor-pointer z-[1]"
                onClick={onGroupContainerClick}
              >
                <div className="relative leading-[23px] inline-block min-w-[32px]">
                  Hard
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Filter.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default Filter;

