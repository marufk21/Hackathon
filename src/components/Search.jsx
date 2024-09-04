import { useState, useCallback } from "react";
import Filter from "./Filter";
import PortalPopup from "./PortalPopup";
import PropTypes from "prop-types";

const Search = ({ className = "" }) => {
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
        className={`w-screen self-stretch bg-darkslategray-400 flex flex-col items-center justify-start pt-[72px] px-8 pb-[98px] box-border gap-16 z-[2] text-center text-9xl text-white font-poppins mq1125:gap-8 mq800:gap-4 ${className}`}
      >
        <div className="w-full h-[324px] relative bg-darkslategray-400 hidden max-w-full" />
        <div className="w-[964px] flex flex-row items-start justify-center py-0 pl-0 pr-px box-border max-w-full">
          <h1 className="m-0 w-[353px] relative text-inherit leading-[40px] font-semibold font-[inherit] flex items-center justify-center shrink-0 max-w-full z-[3] mq450:text-3xl mq450:leading-[32px]">
            Explore Challenges
          </h1>
        </div>
        <div className="w-[964px] flex flex-row items-start justify-center gap-[25px] max-w-full text-left text-lg text-b400 font-body-b3-regular mq1125:flex-wrap">
          <div className="flex-1 shadow-[0px_4px_50px_rgba(110,_110,_110,_0.1)] rounded-xl bg-white overflow-hidden flex flex-row items-start justify-start pt-[15px] px-[38px] pb-[17px] box-border gap-3 min-w-[181px] max-w-full z-[3]">
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <img
                className="w-[17px] h-[17px] relative overflow-hidden shrink-0"
                alt=""
                src="/carbonsearch.svg"
              />
            </div>
            <div className="w-[164px] relative leading-[20px] font-light inline-block shrink-0">
              Search
            </div>
          </div>
          <div
            className="w-[110px] rounded-xl bg-white border-whitesmoke-500 border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-2.5 pl-[22px] pr-[15px] cursor-pointer z-[3] text-black"
            onClick={openFilter}
          >
            <div className="flex-1 relative leading-[26px]">Filter</div>
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

Search.propTypes = {
  className: PropTypes.string,
};

export default Search;
