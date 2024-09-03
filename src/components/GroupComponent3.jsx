import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const GroupComponent3 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate(`/detail-page/${index}`);
  }, [navigate]);

  return (
    <footer
      className={`self-stretch bg-darkslategray-300 flex flex-col items-start justify-start pt-[75px] px-[134px] pb-[125px] box-border gap-[50px] min-h-[1196px] max-w-full text-center text-sm text-darkslategray-100 font-poppins mq450:pl-5 mq450:pr-5 mq450:box-border mq1350:pt-20 mq1350:pb-[81px] mq1350:box-border mq800:gap-[25px] mq800:pl-[67px] mq800:pr-[67px] mq800:pb-[53px] mq800:box-border ${className}`}
    >
      <div className="w-[1440px] h-[1196px] relative bg-darkslategray-300 hidden max-w-full" />
      <div className="self-stretch grid flex-row items-start justify-start gap-[55px] max-w-full grid-cols-[repeat(3,_minmax(265px,_1fr))] mq1125:justify-center mq1125:grid-cols-[repeat(2,_minmax(265px,_460px))] mq800:gap-[27px] mq800:grid-cols-[minmax(265px,_1fr)]">
        <div
          className="flex flex-row items-start justify-start max-w-full cursor-pointer z-[1] text-black"
          onClick={onGroupContainerClick}
        >
          <div className="flex-1 shadow-[0px_4px_43px_rgba(0,_0,_0,_0.08)] rounded-mini bg-white flex flex-col items-start justify-start pt-0 px-0 pb-[27px] box-border gap-[25px] max-w-full">
            <div className="self-stretch h-[473px] relative shadow-[0px_4px_43px_rgba(0,_0,_0,_0.08)] rounded-mini bg-white hidden" />
            <div className="self-stretch rounded-t-mini rounded-b-none flex flex-row items-start justify-start bg-[url('/public/rectangle-6672@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full z-[1]">
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
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-[54px] mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="flex-1 flex flex-col items-end justify-start gap-[18px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[19px] text-xs font-body-b3-regular">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[79px] pr-20">
                    <div className="flex-1 rounded-8xs bg-goldenrod-200 flex flex-row items-start justify-start pt-0.5 px-[13px] pb-[5px] z-[1]">
                      <div className="h-[21px] w-[87px] relative rounded-8xs bg-goldenrod-200 hidden" />
                      <div className="flex-1 relative leading-[16px] inline-block min-w-[61px] z-[1]">
                        Upcoming
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch relative text-base leading-[26px] font-semibold font-poppins z-[1]">
                    Data Science Bootcamp - Graded Datathon
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-end pt-0 px-[52px] pb-3.5 text-darkslategray-200">
                  <div className="flex-1 flex flex-col items-start justify-start gap-2">
                    <div className="self-stretch relative leading-[14px] font-medium z-[1]">
                      Starts in
                    </div>
                    <div className="flex flex-row items-start justify-start py-0 pl-[5px] pr-2 text-lg text-darkslategray-100">
                      <div className="flex flex-col items-end justify-start gap-[2.1px]">
                        <div className="flex flex-row items-start justify-start">
                          <div className="relative leading-[29.9px] font-semibold text-left inline-block min-w-[21.4px] shrink-0 z-[1]">
                            00
                          </div>
                          <div className="flex flex-col items-start justify-start py-0 px-0">
                            <b className="ml-[-2.4px] w-[31.1px] relative leading-[29.9px] inline-block shrink-0 z-[1]">
                              :
                            </b>
                          </div>
                          <div className="flex flex-col items-start justify-start py-0 px-0">
                            <div className="ml-[-7.1px] w-[31.1px] relative leading-[29.9px] font-semibold inline-block shrink-0 z-[1]">
                              15
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start py-0 px-0">
                            <b className="ml-[-6.1px] w-[31.1px] relative leading-[29.9px] inline-block shrink-0 z-[1]">
                              :
                            </b>
                          </div>
                          <div className="flex flex-col items-start justify-start py-0 px-0">
                            <div className="ml-[-4.1px] w-[31.1px] relative leading-[29.9px] font-semibold inline-block [text-shadow:0px_4px_43px_rgba(0,_0,_0,_0.08)] shrink-0 z-[1]">
                              22
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start gap-[14.2px] text-3xs text-gray-2 font-body-b3-regular">
                          <div className="w-[28.8px] relative leading-[10px] font-medium inline-block shrink-0 z-[1]">
                            Days
                          </div>
                          <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[5px]">
                            <div className="w-[37px] relative leading-[10px] font-medium inline-block z-[1]">
                              Hours
                            </div>
                          </div>
                          <div className="w-[28.8px] relative leading-[10px] font-medium inline-block shrink-0 z-[1]">
                            Mins
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-end py-0 pl-8 pr-[31px] text-white">
                  <div className="flex-1 rounded-3xs bg-dphigreen flex flex-row items-start justify-start py-3 px-4 gap-3.5 whitespace-nowrap z-[1]">
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
          </div>
        </div>
        <div
          className="flex flex-row items-start justify-start max-w-full cursor-pointer z-[1] text-lg"
          onClick={onGroupContainerClick}
        >
          <div className="h-[473px] flex-1 relative shadow-[0px_-3.3px_24px_rgba(132,_132,_132,_0.16),_0px_2.5px_1.67px_rgba(255,_255,_255,_0)_inset,_0px_-2.5px_6px_rgba(0,_0,_0,_0.06)_inset] max-w-full">
            <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_43px_rgba(0,_0,_0,_0.08)] rounded-mini bg-white w-full h-full">
              <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_43px_rgba(0,_0,_0,_0.08)] rounded-mini bg-white w-full h-full hidden" />
              <div className="absolute top-[0px] left-[0px] rounded-t-mini rounded-b-none w-[354px] h-[174px] bg-[url('/public/rectangle-66721@2x.png')] bg-cover bg-no-repeat bg-[top] z-[1]">
                <img
                  className="absolute top-[0px] left-[0px] rounded-t-mini rounded-b-none w-full h-full object-cover hidden"
                  alt=""
                  src="/rectangle-66721@2x.png"
                />
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
                  alt=""
                  src="/rectangle-6673.svg"
                />
              </div>
              <div className="absolute top-[362px] left-[111px] text-3xs leading-[10px] font-medium font-body-b3-regular text-gray-2 inline-block w-[28.8px] h-[9.9px] z-[2]">
                Days
              </div>
              <div className="absolute top-[362px] left-[154px] text-3xs leading-[10px] font-medium font-body-b3-regular text-gray-2 inline-block w-[37px] h-2.5 z-[2]">
                Hours
              </div>
              <div className="absolute top-[362px] left-[211px] text-3xs leading-[10px] font-medium font-body-b3-regular text-gray-2 inline-block w-[28.8px] h-[9.9px] z-[2]">
                Mins
              </div>
              <div className="absolute top-[330px] left-[114px] leading-[29.9px] font-semibold text-left inline-block w-6 h-[29.9px] min-w-[24px] z-[2]">
                00
              </div>
              <div className="absolute top-[330px] left-[157px] leading-[29.9px] font-semibold inline-block w-[31.1px] h-[29.9px] z-[2]">
                12
              </div>
              <b className="absolute top-[330px] left-[133px] leading-[29.9px] inline-block w-[31.1px] h-[29.9px] z-[2]">
                :
              </b>
              <b className="absolute top-[330px] left-[182px] leading-[29.9px] inline-block w-[31.1px] h-[29.9px] z-[2]">
                :
              </b>
              <div className="absolute top-[330px] left-[209px] leading-[29.9px] font-semibold inline-block w-[31.1px] h-[29.9px] [text-shadow:0px_4px_43px_rgba(0,_0,_0,_0.08)] z-[2]">
                34
              </div>
              <div className="absolute top-[309px] left-[106px] text-sm leading-[14px] font-medium text-darkslategray-200 inline-block w-[142px] h-[13px] z-[2]">
                Starts in
              </div>
              <div className="absolute top-[404px] left-[86px] rounded-3xs bg-dphigreen w-[182.5px] h-[42px] whitespace-nowrap z-[2] text-sm text-white">
                <img
                  className="absolute top-[12px] left-[16px] w-[18px] h-[18px] overflow-hidden"
                  alt=""
                  src="/charmcircletick.svg"
                />
                <div className="absolute top-[12px] left-[48px] leading-[18px] font-semibold inline-block min-w-[113px]">
                  Participate Now
                </div>
              </div>
              <div className="absolute top-[239px] left-[54px] text-base leading-[26px] font-semibold text-black flex items-center justify-center w-[246px] h-[52px] z-[2]">
                Data Sprint 72 - Butterfly Identification
              </div>
              <div className="absolute top-[199px] left-[133px] rounded-8xs bg-goldenrod-200 w-[87px] h-[21px] z-[2] text-xs text-dimgray font-body-b3-regular">
                <div className="absolute top-[0px] left-[0px] rounded-8xs bg-goldenrod-200 w-full h-full hidden" />
                <div className="absolute top-[2px] left-[13px] leading-[16px] font-semibold inline-block w-[61px] h-3.5 min-w-[61px] z-[1]">
                  Upcoming
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-row items-start justify-start max-w-full cursor-pointer z-[1]"
          onClick={onGroupContainerClick}
        >
          <div className="h-[473px] flex-1 relative shadow-[0px_-3.3px_24px_rgba(132,_132,_132,_0.16),_0px_2.5px_1.67px_rgba(255,_255,_255,_0)_inset,_0px_-2.5px_6px_rgba(0,_0,_0,_0.06)_inset] max-w-full">
            <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_43px_rgba(0,_0,_0,_0.08)] rounded-mini bg-white w-full h-full">
              <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_43px_rgba(0,_0,_0,_0.08)] rounded-mini bg-white w-full h-full hidden" />
              <div className="absolute top-[0px] left-[0px] rounded-t-mini rounded-b-none w-[354px] h-[174px] bg-[url('/public/rectangle-66724@2x.png')] bg-cover bg-no-repeat bg-[top] z-[1]">
                <img
                  className="absolute top-[0px] left-[0px] rounded-t-mini rounded-b-none w-full h-full object-cover hidden"
                  alt=""
                  src="/rectangle-66724@2x.png"
                />
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
                  alt=""
                  src="/rectangle-6673.svg"
                />
              </div>
              <div className="absolute top-[342px] left-[74px] text-lg leading-[30px] font-semibold text-left inline-block w-[206px] h-[30px] whitespace-nowrap z-[2]">
                16th May'22 09:00 PM
              </div>
              <div className="absolute top-[309px] left-[106px] leading-[14px] font-medium text-darkslategray-200 inline-block w-[142px] h-[13px] z-[2]">
                Ended on
              </div>
              <div className="absolute top-[404px] left-[86px] rounded-3xs bg-dphigreen w-[182.5px] h-[42px] whitespace-nowrap z-[2] text-white">
                <img
                  className="absolute top-[12px] left-[16px] w-[18px] h-[18px] overflow-hidden"
                  alt=""
                  src="/charmcircletick.svg"
                />
                <div className="absolute top-[12px] left-[48px] leading-[18px] font-semibold inline-block min-w-[113px]">
                  Participate Now
                </div>
              </div>
              <div className="absolute top-[239px] left-[54px] text-base leading-[26px] font-semibold text-black flex items-center justify-center w-[246px] h-[52px] z-[2]">
                Engineering Graduates Employment Outcomes
              </div>
              <div className="absolute top-[199px] left-[133px] rounded-8xs bg-orangered w-[87px] h-[21px] z-[2] text-xs text-dimgray font-body-b3-regular">
                <div className="absolute top-[0px] left-[0px] rounded-8xs bg-orangered w-full h-full hidden" />
                <div className="absolute top-[2px] left-[13px] leading-[16px] font-semibold inline-block w-[61px] h-3.5 z-[1]">
                  Past
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-[354px] flex flex-row items-start justify-start max-w-full cursor-pointer z-[1] text-darkslategray-200"
        onClick={onGroupContainerClick}
      >
        <div className="h-[473px] flex-1 relative shadow-[0px_-3.3px_24px_rgba(132,_132,_132,_0.16),_0px_2.5px_1.67px_rgba(255,_255,_255,_0)_inset,_0px_-2.5px_6px_rgba(0,_0,_0,_0.06)_inset] max-w-full">
          <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_43px_rgba(0,_0,_0,_0.08)] rounded-mini bg-white w-full h-full">
            <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_43px_rgba(0,_0,_0,_0.08)] rounded-mini bg-white w-full h-full hidden" />
            <div className="absolute top-[0px] left-[0px] rounded-t-mini rounded-b-none w-[354px] h-[175.5px] bg-[url('/public/rectangle-66725@2x.png')] bg-cover bg-no-repeat bg-[top] z-[1]">
              <img
                className="absolute top-[0px] left-[0px] rounded-t-mini rounded-b-none w-full h-full object-cover hidden"
                alt=""
                src="/rectangle-66725@2x.png"
              />
              <img
                className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
                alt=""
                src="/rectangle-6673-5.svg"
              />
            </div>
            <div className="absolute top-[309px] left-[106px] leading-[14px] font-medium inline-block w-[142px] h-[13px] z-[2]">
              Ended on
            </div>
            <div className="absolute top-[404px] left-[86px] rounded-3xs bg-dphigreen w-[182.5px] h-[42px] whitespace-nowrap z-[2] text-white">
              <img
                className="absolute top-[12px] left-[16px] w-[18px] h-[18px] overflow-hidden"
                alt=""
                src="/charmcircletick.svg"
              />
              <div className="absolute top-[12px] left-[48px] leading-[18px] font-semibold inline-block min-w-[113px]">
                Participate Now
              </div>
            </div>
            <div className="absolute top-[239px] left-[54px] text-base leading-[26px] font-semibold text-black flex items-center justify-center w-[246px] h-[52px] z-[2]">
              Travel Insurance Claim Prediction
            </div>
            <div className="absolute top-[199px] left-[133px] rounded-8xs bg-orangered w-[87px] h-[21px] z-[2] text-xs text-dimgray font-body-b3-regular">
              <div className="absolute top-[0px] left-[0px] rounded-8xs bg-orangered w-full h-full hidden" />
              <div className="absolute top-[2px] left-[13px] leading-[16px] font-semibold inline-block w-[61px] h-3.5 z-[1]">
                Past
              </div>
            </div>
            <div className="absolute top-[342px] left-[74px] text-lg leading-[30px] font-semibold text-darkslategray-100 text-left inline-block w-[206px] h-[30px] whitespace-nowrap z-[2]">
              16th May'22 09:00 PM
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

GroupComponent3.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent3;
