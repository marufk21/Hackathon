import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import PortalPopup from './PortalPopup';

const Search = ({ className = '', onFilterChange }) => {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [tags, setTags] = useState(['Upcoming', 'Past', 'Easy']); // Default tags

  const openFilter = useCallback(() => {
    setFilterOpen(true);
  }, []);

  const closeFilter = useCallback(() => {
    setFilterOpen(false);
  }, []);

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
    updateTags(status, selectedLevel);
    onFilterChange({ status, level: selectedLevel, searchTerm });
  };

  const handleLevelChange = (level) => {
    setSelectedLevel(level);
    updateTags(selectedStatus, level);
    onFilterChange({ status: selectedStatus, level, searchTerm });
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onFilterChange({
      status: selectedStatus,
      level: selectedLevel,
      searchTerm: value,
    });
  };

  const updateTags = (status, level) => {
    let newTags = [];
    if (status === 'Upcoming' || status === 'Past') {
      newTags.push(status);
    }
    if (level === 'Easy' || level === 'Medium' || level === 'Hard') {
      newTags.push(level);
    }
    setTags(newTags);
  };

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
            <input
              type="text"
              placeholder="Search"
              className="w-full px-2 py-1 border-none rounded bg-transparent text-gray-800 placeholder-gray-500"
              value={searchTerm}
              onChange={handleSearchChange}
            />

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
        {/* Tags */}
        <div className='flex justify-center items-center '>
          <div className="flex flex-wrap gap-4 mt-4 justify-center">
            {tags.map((tag) => (
              <span key={tag} id="badge-dismiss-dark" className="flex items-center justify-center h-[40px] w-[119px] text-center px-2 py-1 me-2 text-base font-normal text-gray-800 bg-slate-400 rounded-xl dark:bg-gray-700 dark:text-gray-300">
                {tag}
                <button type="button" className="inline-flex items-center p-1 ms-2 text-sm text-gray-400 bg-transparent rounded-sm hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-300" data-dismiss-target="#badge-dismiss-dark" aria-label="Remove">
                  <svg className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                  <span className="sr-only">Remove badge</span>
                </button>
              </span>
            ))}
          </div>
        </div>
      </div>
      {isFilterOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFilter}
        >
          <div
            className={`w-[290px] relative flex flex-row items-start justify-start leading-[normal] tracking-[normal] max-w-full max-h-full overflow-auto`}
          >
            <section className="flex-1 shadow-[0px_6px_12px_rgba(221,_230,_237,_0.3)] rounded-3xs bg-white flex flex-col items-start justify-start pt-[26px] pb-[23px] pl-[13px] pr-3 gap-3.5 text-left text-base text-dimgray font-body-b3-regular">
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
                    onClick={() => handleStatusChange('All')}
                  >
                    <div className="relative leading-[23px] inline-block min-w-[17px]">
                      All
                    </div>
                  </div>
                  <div
                    className="flex flex-row items-start justify-start py-0 pl-0 pr-[26px] cursor-pointer z-[1]"
                    onClick={() => handleStatusChange('Active')}
                  >
                    <div className="relative leading-[23px] inline-block min-w-[42px]">
                      Active
                    </div>
                  </div>
                  <div
                    className="flex flex-row items-start justify-start py-0 pl-0 pr-5 cursor-pointer z-[1]"
                    onClick={() => handleStatusChange('Upcoming')}
                  >
                    <div className="relative leading-[23px] inline-block min-w-[68px]">
                      Upcoming
                    </div>
                  </div>
                  <div
                    className="flex flex-row items-start justify-start py-0 pl-0 pr-5 cursor-pointer z-[1]"
                    onClick={() => handleStatusChange('Past')}
                  >
                    <div className="relative leading-[23px] inline-block min-w-[30px]">
                      Past
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
                <div className="relative leading-[20px] inline-block min-w-[40px]">
                  Level
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-[3px] text-sm text-b400">
                <div className="flex flex-row items-end justify-start gap-[9px]">
                  <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3px]">
                    <div className="flex flex-col items-start justify-start gap-3.5">
                      <div
                        className="w-[15px] h-[15px] relative rounded-10xs border-darkslategray-300 border-[1px] border-solid box-border cursor-pointer z-[1]"
                        onClick={() => handleLevelChange('Easy')}
                      />
                      <div
                        className="w-[15px] h-[15px] relative rounded-10xs border-darkslategray-300 border-[1px] border-solid box-border cursor-pointer z-[1]"
                        onClick={() => handleLevelChange('Medium')}
                      />
                      <div
                        className="w-[15px] h-[15px] relative rounded-10xs border-darkslategray-300 border-[1px] border-solid box-border cursor-pointer z-[1]"
                        onClick={() => handleLevelChange('Hard')}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[5.5px]">
                  <div className="flex flex-row items-start justify-start py-0 pl-0 pr-[21px] cursor-pointer z-[1]">
                    <div className="relative leading-[23px] inline-block min-w-[32px] " >
                      Easy
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 px-0 cursor-pointer z-[1]">
                    <div className="relative leading-[23px] inline-block min-w-[54px] shrink-0">
                      Medium
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 pl-0 pr-[21px] cursor-pointer z-[1]">
                    <div className="relative leading-[23px] inline-block min-w-[32px]">
                      Hard
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </PortalPopup>
      )}




    </>
  );
};



Search.propTypes = {
  className: PropTypes.string,
  onFilterChange: PropTypes.func.isRequired,
};

export default Search;
