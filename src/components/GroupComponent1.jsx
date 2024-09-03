import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const GroupComponent1 = ({ className = "" }) => {
  const navigate = useNavigate();
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    // Retrieve challenges from local storage
    const storedChallenges = JSON.parse(localStorage.getItem("challenges")) || [];
    setChallenges(storedChallenges);
  }, []);

  const onCardClick = (index) => {
    // Navigate to the detail page for the selected challenge
    navigate(`/detail-page/${index}`);
  };

  return (
    <footer
      className={`w-screen bg-darkslategray-300 flex flex-row items-start justify-center py-[75px] px-5 box-border min-h-[1196px] text-center text-sm text-black font-poppins mq1125:pt-20 mq1125:pb-[49px] mq1125:box-border mq800:pb-8 mq800:box-border ${className}`}
    >
      <div className="flex flex-row items-start justify-start max-w-full z-[1]">
        <div className="w-[1172px] flex flex-row items-start justify-start flex-wrap content-start gap-x-[50px] gap-y-[53px] min-h-[996px] max-w-full mq800:gap-[26px]">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="w-[354px] flex flex-row items-start justify-start min-w-[336px] max-w-full cursor-pointer text-xs"
              onClick={() => onCardClick(index)}
            >
              <div className="h-[473px] flex-1 relative max-w-full">
                <div className="absolute top-[0px] left-[0px] w-full h-full rounded-mini bg-white shadow-[0px_4px_43px_rgba(0,_0,_0,_0.08)]">
                  <div className="absolute top-[199px] left-[54px] w-[246px] flex flex-col items-end justify-start gap-8 z-[1]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[18.5px]">
                      <div className="self-stretch relative text-base leading-[26px] font-semibold">
                        {challenge.challengeName}
                      </div>
                      <div className="self-stretch relative leading-[14px] font-medium">
                        {challenge.startDate} - {challenge.endDate}
                      </div>
                      <div className="self-stretch relative leading-[14px] font-medium">
                        {challenge.description}
                      </div>
                      <div className="self-stretch relative leading-[14px] font-medium">
                        Level: {challenge.levelType}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent1;
