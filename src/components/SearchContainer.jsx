import { useState, useCallback } from "react";
import Filter from "./Filter";
import PortalPopup from "./PortalPopup";
import PropTypes from "prop-types";

const SearchContainer = ({ className = "" }) => {
  const [isFilterOpen, setFilterOpen] = useState(false);

  const openFilter = useCallback(() => {
    setFilterOpen(true);
  }, []);

  const closeFilter = useCallback(() => {
    setFilterOpen(false);
  }, []);

  return (
    <>
      <div
        className={`self-stretch bg-darkslategray-400 flex flex-col items-center justify-start pt-[75px] px-5 pb-[76px] box-border gap-16 max-w-full text-center text-9xl text-white font-poppins mq450:pt-20 mq450:pb-[49px] mq450:box-border mq1125:gap-8 mq800:gap-4 ${className}`}
      >
        <div className="w-[1440px] h-[386px] relative bg-darkslategray-400 hidden max-w-full" />
        <div className="w-[964px] flex flex-row items-start justify-center py-0 pl-0 pr-px box-border max-w-full">
          <h1 className="m-0 w-[353px] relative text-inherit leading-[40px] font-semibold font-[inherit] flex items-center justify-center shrink-0 max-w-full z-[1] mq450:text-3xl mq450:leading-[32px]">
            Explore Challenges
          </h1>
        </div>``
        <form className="m-0 w-[964px] flex flex-col items-start justify-start gap-[41px] max-w-full mq800:gap-5">
          <div className="self-stretch flex flex-row items-start justify-center gap-[25px] max-w-full mq1125:flex-wrap">
            <div className="flex-1 shadow-[0px_4px_50px_rgba(110,_110,_110,_0.1)] rounded-xl bg-white overflow-hidden flex flex-row items-start justify-start pt-[15px] px-[38px] pb-[17px] box-border gap-3 min-w-[181px] max-w-full z-[1]">
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <img
                  className="w-[17px] h-[17px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/carbonsearch.svg"
                />
              </div>
              <div className="w-[164px] relative text-lg leading-[20px] font-light font-body-b3-regular text-b400 text-left inline-block shrink-0">
                Search
              </div>
            </div>
            <div
              className="w-[110px] rounded-xl bg-white border-whitesmoke-500 border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-2.5 pl-[22px] pr-[15px] cursor-pointer z-[1]"
              onClick={openFilter}
            >
              <div className="flex-1 relative text-lg leading-[26px] font-body-b3-regular text-black text-left">
                Filter
              </div>
              <div className="h-1.5 w-[18px] relative hidden" />
              <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                <img
                  className="w-[13px] h-1.5 relative z-[1]"
                  alt=""
                  src="/caret.svg"
                />
              </div>
            </div>
          </div>
          {/* Shows the Filters Tags when user filtrering t*/}
          <div className="w-[440px] flex flex-row items-start justify-center gap-[30px] max-w-full mq450:flex-wrap">
            <div className="w-[142px] rounded-11xl bg-ghostwhite-300 flex flex-row items-start justify-start pt-[11px] px-[21px] pb-3 box-border gap-[7px] min-w-[92px] z-[1]">
              <div className="h-10 w-[142px] relative rounded-11xl bg-ghostwhite-300 hidden" />
              <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <div className="self-stretch relative text-sm leading-[14px] font-medium font-poppins text-white text-center inline-block min-w-[76px] z-[2]">
                  Upcoming
                </div>
              </div>
              <img
                className="h-[17px] w-[17px] relative overflow-hidden shrink-0 min-h-[17px] z-[2]"
                alt=""
                src="/gridiconscrosscircle.svg"
              />
            </div>
            <div className="w-[119px] rounded-11xl bg-ghostwhite-300 flex flex-row items-start justify-start pt-[11px] pb-3 pl-[26px] pr-[25px] box-border gap-2 z-[1]">
              <div className="h-10 w-[119px] relative rounded-11xl bg-ghostwhite-300 hidden" />
              <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <div className="self-stretch relative text-sm leading-[14px] font-medium font-poppins text-whitesmoke-200 text-center z-[2]">
                  Past
                </div>
              </div>
              <img
                className="h-[17px] w-[17px] relative overflow-hidden shrink-0 min-h-[17px] z-[2]"
                alt=""
                src="/gridiconscrosscircle.svg"
              />
            </div>
            <div className="w-[119px] rounded-11xl bg-ghostwhite-300 flex flex-row items-start justify-start pt-[11px] pb-3 pl-[26px] pr-[25px] box-border gap-2 z-[1]">
              <div className="h-10 w-[119px] relative rounded-11xl bg-ghostwhite-300 hidden" />
              <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <div className="self-stretch relative text-sm leading-[14px] font-medium font-poppins text-white text-center z-[2]">
                  Easy
                </div>
              </div>
              <img
                className="h-[17px] w-[17px] relative overflow-hidden shrink-0 min-h-[17px] z-[2]"
                alt=""
                src="/gridiconscrosscircle.svg"
              />
            </div>
          </div>
        </form>
      </div>

      {isFilterOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFilter}
        >
          <Filter onClose={closeFilter} />
        </PortalPopup>
      )}
    </>
  );
};

SearchContainer.propTypes = {
  className: PropTypes.string,
};

export default SearchContainer;
