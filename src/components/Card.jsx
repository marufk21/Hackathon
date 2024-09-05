import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Card = ({ className = "", filters }) => {
  const navigate = useNavigate();
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    const storedChallenges = JSON.parse(localStorage.getItem("challenges")) || [];
    setChallenges(storedChallenges);
  }, []);

  const calculateTime = (date) => {
    const now = new Date();
    const targetDate = new Date(date);
    const difference = targetDate - now;

    if (difference <= 0) return { days: 0, hours: 0, minutes: 0 };

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    return { days, hours, minutes };
  };

  const onCardClick = (index) => {
    navigate(`/detail-page/${index}`);
  };

  const filteredChallenges = challenges.filter((challenge) => {
    const { status, level, searchTerm } = filters;
    const now = new Date();
    const start = new Date(challenge.startDate);
    const end = new Date(challenge.endDate);

    let challengeStatus = "Past";
    if (now < start) {
      challengeStatus = "Upcoming";
    } else if (now >= start && now <= end) {
      challengeStatus = "Active";
    }

    return (
      (status === "All" || status === challengeStatus) &&
      (level === "All" || level === challenge.levelType) &&
      (searchTerm === "" || challenge.challengeName.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <footer
      className={`w-screen bg-darkslategray-300 flex flex-row items-start justify-center py-[75px] px-5 box-border min-h-[1196px] text-center text-sm text-black font-poppins mq1125:pt-20 mq1125:pb-[49px] mq1125:box-border mq800:pb-8 mq800:box-border ${className}`}
    >
      <div className="flex flex-row items-start justify-start max-w-full z-[1]">
        <div className="w-[1172px] flex flex-row items-start justify-start flex-wrap content-start gap-x-[50px] gap-y-[53px] min-h-[996px] max-w-full mq800:gap-[26px]">
          {filteredChallenges.map((challenge, index) => {
            const now = new Date();
            const start = new Date(challenge.startDate);
            const end = new Date(challenge.endDate);

            let timer, statusText;
            if (now < start) {
              const timeToStart = calculateTime(challenge.startDate);
              timer = `${timeToStart.days}d ${timeToStart.hours}h ${timeToStart.minutes}m`;
              statusText = "Upcoming";
            } else if (now >= start && now <= end) {
              const timeToEnd = calculateTime(challenge.endDate);
              timer = `${timeToEnd.days}d ${timeToEnd.hours}h ${timeToEnd.minutes}m`;
              statusText = "Active";
            } else {
              timer = "00d 00h 00m";
              statusText = "Past";
            }

            return (
              <div
                key={index}
                className="w-[354px] flex flex-row items-start justify-start min-w-[336px] max-w-full cursor-pointer text-xs"
                onClick={() => onCardClick(index)}
              >
                <div className="h-[473px] flex-1 relative max-w-full">
                  <div className="absolute top-[0px] left-[0px] w-full h-full rounded-mini bg-white shadow-[0px_4px_43px_rgba(0,_0,_0,_0.25)]" />
                  <div className="absolute top-[0px] left-[0px] [filter:drop-shadow(0px_-3.3px_24px_rgba(132,_132,_132,_0.16))_drop-shadow(0px_2.5px_1.67px_rgba(255,_255,_255,_0)_inset)_drop-shadow(0px_-2.5px_6px_rgba(0,_0,_0,_0.06)_inset)] w-full h-full">
                    <div className="absolute top-[0px] left-[0px] w-full h-full">
                      <div className="absolute top-[0px] left-[0px] w-full h-full">
                        <div className="absolute top-[0px] left-[0px] w-full h-full">
                          <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_43px_rgba(0,_0,_0,_0.08)] rounded-mini bg-white w-full h-full">
                            <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_43px_rgba(0,_0,_0,_0.08)] rounded-mini bg-white w-full h-full hidden" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[199px] left-[54px] w-[246px] flex flex-col items-end justify-start gap-8 z-[1]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[18.5px]">
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[79px] pr-20 font-body-b3-regular">
                        <div className="flex-1 flex flex-row items-start justify-start">
                          <div className="flex-1 flex flex-row items-start justify-start">
                            <div className="flex-1 rounded-8xs bg-goldenrod-200 flex flex-row items-start justify-start pt-0.5 px-[13px] pb-[5px]">
                              <div className="h-[21px] w-[87px] relative rounded-8xs bg-goldenrod-200 hidden" />
                              <div className="flex-1 relative leading-[16px] inline-block min-w-[61px] z-[1]">
                                {statusText}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch relative text-base leading-[26px] font-semibold">
                        {challenge.challengeName}
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[52px] text-sm text-darkslategray-200">
                        <div className="flex-1 flex flex-col items-start justify-start gap-2">
                          <div className="self-stretch relative leading-[14px] font-medium">
                            {statusText === "Past" ? "Ended" : "Starts in"}
                          </div>
                          <div className="flex flex-row items-start justify-start py-0 pl-[5px] pr-2 text-lg text-darkslategray-100">
                            <div className="flex flex-col items-end justify-start gap-[2.1px]">
                              <div className="flex flex-row items-start justify-start">
                                <div className="w-[43px] flex flex-row items-start justify-start shrink-0 text-left">
                                  <div className="flex-1 flex flex-row items-start justify-start shrink-0">
                                    <div className="flex-1 relative leading-[29.9px] font-semibold">
                                      {timer.split("d")[0].trim().padStart(2, '0')}
                                    </div>
                                  </div>
                                  <b className="flex-1 relative leading-[29.9px] text-center shrink-0 ml-[-12.1px]">
                                    :
                                  </b>
                                </div>
                                <div className="w-[31.1px] relative leading-[29.9px] font-semibold inline-block shrink-0">
                                  {timer.split("d")[1]?.split("h")[0].trim().padStart(2, '0')}
                                </div>
                                <div className="flex flex-col items-start justify-start py-0 px-0">
                                  <b className="ml-[-6.1px] w-[31.1px] relative leading-[29.9px] inline-block shrink-0">
                                    :
                                  </b>
                                </div>
                                <div className="flex flex-col items-start justify-start py-0 px-0">
                                  <div className="ml-[-4.1px] w-[31.1px] shadow-[0px_4px_43px_rgba(0,_0,_0,_0.08)] flex flex-row items-start justify-start shrink-0">
                                    <div className="flex-1 relative leading-[29.9px] font-semibold shrink-0">
                                      {timer.split("h")[1]?.split("m")[0].trim().padStart(2, '0')}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-row items-start justify-start gap-[14.2px] text-3xs text-gray-2 font-body-b3-regular">
                                <div className="flex flex-row items-start justify-start gap-[11px]">
                                  <div className="w-[37px] relative leading-[10px] font-medium inline-block">
                                    Days
                                  </div>
                                  <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-[5px]">
                                    <div className="w-[37px] relative leading-[10px] font-medium inline-block">
                                      Hours
                                    </div>
                                  </div>
                                  <div className="w-[28.8px] relative leading-[10px] font-medium inline-block shrink-0">
                                    Mins
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-end py-0 pl-8 pr-[31px] text-sm text-white">
                      <div className="flex-1 flex flex-row items-start justify-start">
                        <div className="flex-1 rounded-3xs bg-dphigreen flex flex-row items-start justify-start py-3 px-4 gap-3.5 whitespace-nowrap">
                          <img
                            className="h-[18px] w-[18px] relative overflow-hidden shrink-0 min-h-[18px]"
                            alt=""
                            src="/charmcircletick.svg"
                          />
                          <div className="relative leading-[18px] font-semibold inline-block min-w-[113px]">
                            Participate Now
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[0px] left-[0px] rounded-t-mini rounded-b-none w-[354px] flex flex-row items-start justify-start bg-[url('/public/rectangle-6672@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full z-[2]">
                    <img
                      className="self-stretch w-[354px] relative rounded-t-mini rounded-b-none max-h-full object-cover hidden min-h-[174px] max-w-full"
                      alt=""
                      src="/rectangle-6672@2x.png"
                    />
                    <img
                      className="h-[174px] flex-1 relative max-w-full overflow-hidden z-[1]"
                      loading="lazy"
                      alt=""
                      src="/rectangle-6673.svg"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  filters: PropTypes.shape({
    status: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    searchTerm: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
