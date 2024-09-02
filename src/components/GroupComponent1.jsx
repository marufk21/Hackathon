import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const GroupComponent1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/detail-page");
  }, [navigate]);

  return (
    <footer
      className={`w-screen bg-darkslategray-300 flex flex-row items-start justify-center py-[75px] px-5 box-border min-h-[1196px] text-center text-sm text-black font-poppins mq1125:pt-20 mq1125:pb-[49px] mq1125:box-border mq800:pb-8 mq800:box-border ${className}`}
    >
      <div className="h-[1196px] w-[1440px] relative bg-darkslategray-300 hidden max-w-full" />
      <div className="flex flex-row items-start justify-start max-w-full z-[1]">
        <div className="w-[1172px] flex flex-row items-start justify-start flex-wrap content-start gap-x-[50px] gap-y-[53px] min-h-[996px] max-w-full mq800:gap-[26px]">
          <div
            className="w-[354px] flex flex-row items-start justify-start min-w-[336px] max-w-full cursor-pointer text-xs"
            onClick={onGroupContainerClick}
          >
            <div className="h-[473px] flex-1 relative max-w-full">
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
                <div className="absolute top-[199px] left-[54px] w-[246px] flex flex-col items-end justify-start gap-8 z-[1]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[18.5px]">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[79px] pr-20 font-body-b3-regular">
                      <div className="flex-1 flex flex-row items-start justify-start">
                        <div className="flex-1 flex flex-row items-start justify-start">
                          <div className="flex-1 rounded-8xs bg-goldenrod-200 flex flex-row items-start justify-start pt-0.5 px-[13px] pb-[5px]">
                            <div className="h-[21px] w-[87px] relative rounded-8xs bg-goldenrod-200 hidden" />
                            <div className="flex-1 relative leading-[16px] inline-block min-w-[61px] z-[1]">
                              Upcoming
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch relative text-base leading-[26px] font-semibold">
                      Data Science Bootcamp - Graded Datathon
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 px-[52px] text-sm text-darkslategray-200">
                      <div className="flex-1 flex flex-col items-start justify-start gap-2">
                        <div className="self-stretch relative leading-[14px] font-medium">
                          Starts in
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 pl-[5px] pr-2 text-lg text-darkslategray-100">
                          <div className="flex flex-col items-end justify-start gap-[2.1px]">
                            <div className="flex flex-row items-start justify-start">
                              <div className="w-[43px] flex flex-row items-start justify-start shrink-0 text-left">
                                <div className="flex-1 flex flex-row items-start justify-start shrink-0">
                                  <div className="flex-1 relative leading-[29.9px] font-semibold">
                                    00
                                  </div>
                                </div>
                                <b className="flex-1 relative leading-[29.9px] text-center shrink-0 ml-[-12.1px]">
                                  :
                                </b>
                              </div>
                              <div className="w-[31.1px] relative leading-[29.9px] font-semibold inline-block shrink-0">
                                15
                              </div>
                              <div className="flex flex-col items-start justify-start py-0 px-0">
                                <b className="ml-[-6.1px] w-[31.1px] relative leading-[29.9px] inline-block shrink-0">
                                  :
                                </b>
                              </div>
                              <div className="flex flex-col items-start justify-start py-0 px-0">
                                <div className="ml-[-4.1px] w-[31.1px] shadow-[0px_4px_43px_rgba(0,_0,_0,_0.08)] flex flex-row items-start justify-start shrink-0">
                                  <div className="flex-1 relative leading-[29.9px] font-semibold shrink-0">
                                    22
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[14.2px] text-3xs text-gray-2 font-body-b3-regular">
                              <div className="w-[28.8px] relative leading-[10px] font-medium inline-block shrink-0">
                                Days
                              </div>
                              <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[5px]">
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
          <div
            className="w-[354px] flex flex-row items-start justify-start min-w-[336px] max-w-full cursor-pointer text-dimgray"
            onClick={onGroupContainerClick}
          >
            <div className="flex-1 flex flex-row items-start justify-start max-w-full">
              <div className="h-[473px] flex-1 relative [filter:drop-shadow(0px_-3.3px_24px_rgba(132,_132,_132,_0.16))_drop-shadow(0px_2.5px_1.67px_rgba(255,_255,_255,_0)_inset)_drop-shadow(0px_-2.5px_6px_rgba(0,_0,_0,_0.06)_inset)] max-w-full">
                <div className="absolute top-[0px] left-[0px] w-full h-full">
                  <div className="absolute top-[0px] left-[0px] w-full h-full">
                    <div className="absolute top-[0px] left-[0px] w-full h-full">
                      <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_43px_rgba(0,_0,_0,_0.08)] rounded-mini bg-white w-full h-full">
                        <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_43px_rgba(0,_0,_0,_0.08)] rounded-mini bg-white w-full h-full hidden" />
                      </div>
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
                    </div>
                  </div>
                </div>
                <div className="absolute top-[199px] left-[54px] w-[246px] flex flex-col items-end justify-start gap-[18px] z-[1]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[19px] text-xs font-body-b3-regular">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[79px] pr-20">
                      <div className="flex-1 flex flex-row items-start justify-start">
                        <div className="flex-1 flex flex-row items-start justify-start">
                          <div className="flex-1 rounded-8xs bg-goldenrod-200 flex flex-row items-start justify-start pt-0.5 px-[13px] pb-[5px]">
                            <div className="h-[21px] w-[87px] relative rounded-8xs bg-goldenrod-200 hidden" />
                            <div className="flex-1 relative leading-[16px] font-semibold inline-block min-w-[61px] z-[1]">
                              Upcoming
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch relative text-base leading-[26px] font-semibold font-poppins text-black">
                      Data Sprint 72 - Butterfly Identification
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-end pt-0 px-[52px] pb-3.5 text-darkslategray-200">
                    <div className="flex-1 flex flex-col items-start justify-start gap-2">
                      <div className="self-stretch relative leading-[14px] font-medium">
                        Starts in
                      </div>
                      <div className="flex flex-row items-start justify-start py-0 pl-[5px] pr-2 text-lg text-darkslategray-100">
                        <div className="flex flex-col items-end justify-start gap-[2.1px]">
                          <div className="flex flex-row items-start justify-start">
                            <div className="w-[43px] flex flex-row items-start justify-start shrink-0 text-left">
                              <div className="flex-1 flex flex-row items-start justify-start shrink-0">
                                <div className="flex-1 relative leading-[29.9px] font-semibold">
                                  00
                                </div>
                              </div>
                              <b className="flex-1 relative leading-[29.9px] text-center shrink-0 ml-[-12.1px]">
                                :
                              </b>
                            </div>
                            <div className="w-[31.1px] relative leading-[29.9px] font-semibold inline-block shrink-0">
                              12
                            </div>
                            <div className="flex flex-col items-start justify-start py-0 px-0">
                              <b className="ml-[-6.1px] w-[31.1px] relative leading-[29.9px] inline-block shrink-0">
                                :
                              </b>
                            </div>
                            <div className="flex flex-col items-start justify-start py-0 px-0">
                              <div className="ml-[-4.1px] w-[31.1px] shadow-[0px_4px_43px_rgba(0,_0,_0,_0.08)] flex flex-row items-start justify-start shrink-0">
                                <div className="flex-1 relative leading-[29.9px] font-semibold shrink-0">
                                  34
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start gap-[14.2px] text-3xs text-gray-2 font-body-b3-regular">
                            <div className="w-[28.8px] relative leading-[10px] font-medium inline-block shrink-0">
                              Days
                            </div>
                            <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[5px]">
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
                  <div className="self-stretch flex flex-row items-start justify-end py-0 pl-8 pr-[31px] text-white">
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
              </div>
            </div>
          </div>
          <div
            className="w-[354px] flex flex-row items-start justify-start min-w-[336px] max-w-full cursor-pointer text-dphigreen"
            onClick={onGroupContainerClick}
          >
            <div className="flex-1 flex flex-row items-start justify-start max-w-full">
              <div className="flex-1 shadow-[0px_-3.3px_24px_rgba(132,_132,_132,_0.16),_0px_2.5px_1.67px_rgba(255,_255,_255,_0)_inset,_0px_-2.5px_6px_rgba(0,_0,_0,_0.06)_inset] flex flex-col items-start justify-start pt-0 px-0 pb-[27px] box-border relative gap-[25px] max-w-full">
                <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                  <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px]">
                    <div className="absolute top-[0px] left-[0px] w-full h-full">
                      <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_43px_rgba(0,_0,_0,_0.08)] rounded-mini bg-white w-full h-full">
                        <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_43px_rgba(0,_0,_0,_0.08)] rounded-mini bg-white w-full h-full hidden" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-t-mini rounded-b-none flex flex-row items-start justify-start bg-[url('/public/rectangle-66722@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full z-[1]">
                  <img
                    className="self-stretch w-[354px] relative rounded-t-mini rounded-b-none max-h-full object-cover hidden min-h-[174px] max-w-full"
                    alt=""
                    src="/rectangle-66722@2x.png"
                  />
                  <img
                    className="h-[174px] flex-1 relative max-w-full overflow-hidden z-[1]"
                    alt=""
                    src="/rectangle-6673.svg"
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-[54px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                  <div className="flex-1 flex flex-col items-end justify-start gap-[18px] z-[1]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[19px] text-xs font-body-b3-regular">
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[79px] pr-20">
                        <div className="flex-1 flex flex-row items-start justify-start">
                          <div className="flex-1 flex flex-row items-start justify-start">
                            <div className="flex-1 rounded-8xs bg-seagreen flex flex-row items-start justify-start pt-0.5 px-[13px] pb-[5px]">
                              <div className="h-[21px] w-[87px] relative rounded-8xs bg-seagreen hidden" />
                              <div className="flex-1 relative leading-[16px] font-semibold z-[1]">
                                Active
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch relative text-base leading-[26px] font-semibold font-poppins text-black">
                        Data Sprint 71 - Weather Recognition
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-end pt-0 px-[52px] pb-3.5 text-darkslategray-200">
                      <div className="flex-1 flex flex-col items-start justify-start gap-2">
                        <div className="self-stretch relative leading-[14px] font-medium">
                          Ends in
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 pl-[5px] pr-2 text-lg text-darkslategray-100">
                          <div className="flex flex-col items-end justify-start gap-[2.1px]">
                            <div className="flex flex-row items-start justify-start">
                              <div className="w-[43px] flex flex-row items-start justify-start shrink-0 text-left">
                                <div className="flex-1 flex flex-row items-start justify-start shrink-0">
                                  <div className="flex-1 relative leading-[29.9px] font-semibold">
                                    01
                                  </div>
                                </div>
                                <b className="flex-1 relative leading-[29.9px] text-center shrink-0 ml-[-12.1px]">
                                  :
                                </b>
                              </div>
                              <div className="w-[31.1px] relative leading-[29.9px] font-semibold inline-block shrink-0">
                                17
                              </div>
                              <div className="flex flex-col items-start justify-start py-0 px-0">
                                <b className="ml-[-6.1px] w-[31.1px] relative leading-[29.9px] inline-block shrink-0">
                                  :
                                </b>
                              </div>
                              <div className="flex flex-col items-start justify-start py-0 px-0">
                                <div className="ml-[-4.1px] w-[31.1px] shadow-[0px_4px_43px_rgba(0,_0,_0,_0.08)] flex flex-row items-start justify-start shrink-0">
                                  <div className="flex-1 relative leading-[29.9px] font-semibold shrink-0">
                                    10
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[14.2px] text-3xs text-gray-2 font-body-b3-regular">
                              <div className="w-[28.8px] relative leading-[10px] font-medium inline-block shrink-0">
                                Days
                              </div>
                              <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[5px]">
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
                    <div className="self-stretch flex flex-row items-start justify-end py-0 pl-8 pr-[31px] text-white">
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
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-[354px] flex flex-row items-start justify-start min-w-[336px] max-w-full cursor-pointer"
            onClick={onGroupContainerClick}
          >
            <div className="h-[473px] flex-1 relative max-w-full">
              <div className="absolute top-[0px] left-[0px] shadow-[0px_-3.3px_24px_rgba(132,_132,_132,_0.16),_0px_2.5px_1.67px_rgba(255,_255,_255,_0)_inset,_0px_-2.5px_6px_rgba(0,_0,_0,_0.06)_inset] w-full flex flex-col items-start justify-start pt-0 px-0 pb-[27px] box-border gap-[65px] max-w-full h-full mq450:gap-8">
                <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                  <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px]">
                    <div className="absolute top-[0px] left-[0px] w-full h-full">
                      <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_43px_rgba(0,_0,_0,_0.08)] rounded-mini bg-white w-full h-full">
                        <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_43px_rgba(0,_0,_0,_0.08)] rounded-mini bg-white w-full h-full hidden" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-t-mini rounded-b-none flex flex-row items-start justify-start bg-[url('/public/rectangle-66723@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full z-[1]">
                  <img
                    className="self-stretch w-[354px] relative rounded-t-mini rounded-b-none max-h-full object-cover hidden min-h-[174px] max-w-full"
                    alt=""
                    src="/rectangle-66723@2x.png"
                  />
                  <img
                    className="h-[174px] flex-1 relative max-w-full overflow-hidden z-[1]"
                    alt=""
                    src="/rectangle-6673.svg"
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-[54px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                  <div className="flex-1 flex flex-col items-end justify-start gap-[18px] z-[1]">
                    <div className="self-stretch relative text-base leading-[26px] font-semibold">
                      Data Sprint 70-Airline Passenger Satisfaction
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-end pt-0 px-[52px] pb-3.5 text-darkslategray-200">
                      <div className="flex-1 flex flex-col items-start justify-start gap-2">
                        <div className="self-stretch relative leading-[14px] font-medium">
                          Ends in
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 pl-[5px] pr-2 text-lg text-darkslategray-100">
                          <div className="flex flex-col items-end justify-start gap-[2.1px]">
                            <div className="flex flex-row items-start justify-start">
                              <div className="w-[43px] flex flex-row items-start justify-start shrink-0 text-left">
                                <div className="flex-1 flex flex-row items-start justify-start shrink-0">
                                  <div className="flex-1 relative leading-[29.9px] font-semibold">
                                    00
                                  </div>
                                </div>
                                <b className="flex-1 relative leading-[29.9px] text-center shrink-0 ml-[-12.1px]">
                                  :
                                </b>
                              </div>
                              <div className="w-[31.1px] relative leading-[29.9px] font-semibold inline-block shrink-0">
                                11
                              </div>
                              <div className="flex flex-col items-start justify-start py-0 px-0">
                                <b className="ml-[-6.1px] w-[31.1px] relative leading-[29.9px] inline-block shrink-0">
                                  :
                                </b>
                              </div>
                              <div className="flex flex-col items-start justify-start py-0 px-0">
                                <div className="ml-[-4.1px] w-[31.1px] shadow-[0px_4px_43px_rgba(0,_0,_0,_0.08)] flex flex-row items-start justify-start shrink-0">
                                  <div className="flex-1 relative leading-[29.9px] font-semibold shrink-0">
                                    27
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[14.2px] text-3xs text-gray-2 font-body-b3-regular">
                              <div className="w-[28.8px] relative leading-[10px] font-medium inline-block shrink-0">
                                Days
                              </div>
                              <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[5px]">
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
                    <div className="self-stretch flex flex-row items-start justify-end py-0 pl-8 pr-[31px] text-white">
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
                </div>
              </div>
              <div className="absolute top-[199px] left-[133px] w-[87px] flex flex-row items-start justify-start z-[2] text-xs text-dphigreen font-body-b3-regular">
                <div className="flex-1 flex flex-row items-start justify-start">
                  <div className="flex-1 rounded-8xs bg-seagreen flex flex-row items-start justify-start pt-0.5 px-[13px] pb-[5px]">
                    <div className="h-[21px] w-[87px] relative rounded-8xs bg-seagreen hidden" />
                    <div className="flex-1 relative leading-[16px] font-semibold z-[1]">
                      Active
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-[354px] flex flex-row items-start justify-start min-w-[336px] max-w-full cursor-pointer text-xs text-dimgray"
            onClick={onGroupContainerClick}
          >
            <div className="flex-1 flex flex-row items-start justify-start max-w-full">
              <div className="h-[473px] flex-1 relative [filter:drop-shadow(0px_-3.3px_24px_rgba(132,_132,_132,_0.16))_drop-shadow(0px_2.5px_1.67px_rgba(255,_255,_255,_0)_inset)_drop-shadow(0px_-2.5px_6px_rgba(0,_0,_0,_0.06)_inset)] max-w-full">
                <div className="absolute top-[0px] left-[0px] w-full h-full">
                  <div className="absolute top-[0px] left-[0px] w-full h-full">
                    <div className="absolute top-[0px] left-[0px] w-full h-full">
                      <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_43px_rgba(0,_0,_0,_0.08)] rounded-mini bg-white w-full h-full">
                        <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_43px_rgba(0,_0,_0,_0.08)] rounded-mini bg-white w-full h-full hidden" />
                      </div>
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
                    </div>
                  </div>
                </div>
                <div className="absolute top-[199px] left-[54px] w-[246px] flex flex-col items-start justify-start gap-[18.5px] z-[1]">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[79px] pr-20 font-body-b3-regular">
                    <div className="flex-1 flex flex-row items-start justify-start">
                      <div className="flex-1 flex flex-row items-start justify-start">
                        <div className="flex-1 rounded-8xs bg-orangered flex flex-row items-start justify-start pt-0.5 px-[13px] pb-[5px]">
                          <div className="h-[21px] w-[87px] relative rounded-8xs bg-orangered hidden" />
                          <div className="flex-1 relative leading-[16px] font-semibold z-[1]">
                            Past
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch relative text-base leading-[26px] font-semibold text-black">
                    Engineering Graduates Employment Outcomes
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 px-5 text-sm text-darkslategray-200">
                    <div className="flex-1 flex flex-col items-end justify-start gap-5">
                      <div className="self-stretch flex flex-row items-start justify-end py-0 px-8">
                        <div className="flex-1 relative leading-[14px] font-medium">
                          Ended on
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-3 text-left text-lg text-darkslategray-100">
                        <div className="flex-1 flex flex-row items-start justify-start">
                          <div className="flex-1 flex flex-row items-start justify-start">
                            <div className="flex-1 relative leading-[30px] font-semibold whitespace-nowrap">
                              16th May'22 09:00 PM
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-end py-0 pl-3 pr-[11px] text-white">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-[354px] flex flex-row items-start justify-start min-w-[336px] max-w-full cursor-pointer text-darkslategray-200"
            onClick={onGroupContainerClick}
          >
            <div className="flex-1 flex flex-row items-start justify-start max-w-full">
              <div className="flex-1 [filter:drop-shadow(0px_-3.3px_24px_rgba(132,_132,_132,_0.16))_drop-shadow(0px_2.5px_1.67px_rgba(255,_255,_255,_0)_inset)_drop-shadow(0px_-2.5px_6px_rgba(0,_0,_0,_0.06)_inset)] flex flex-row items-start justify-start max-w-full">
                <div className="h-[473px] flex-1 relative max-w-full">
                  <div className="absolute top-[0px] left-[0px] w-full h-full">
                    <div className="absolute top-[0px] left-[0px] w-full h-full">
                      <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_43px_rgba(0,_0,_0,_0.08)] rounded-mini bg-white w-full h-full">
                        <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_43px_rgba(0,_0,_0,_0.08)] rounded-mini bg-white w-full h-full hidden" />
                      </div>
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
                    </div>
                  </div>
                  <div className="absolute top-[199px] left-[54px] w-[246px] h-[247px] z-[1]">
                    <div className="absolute top-[110px] left-[52px] leading-[14px] font-medium inline-block w-[142px] h-[13px]">
                      Ended on
                    </div>
                    <div className="absolute top-[205px] left-[32px] w-[182.5px] h-[42px] text-white">
                      <div className="absolute top-[0px] left-[0px] rounded-3xs bg-dphigreen w-full h-full whitespace-nowrap">
                        <img
                          className="absolute top-[12px] left-[16px] w-[18px] h-[18px] overflow-hidden"
                          alt=""
                          src="/charmcircletick.svg"
                        />
                        <div className="absolute top-[12px] left-[48px] leading-[18px] font-semibold inline-block min-w-[113px]">
                          Participate Now
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-[40px] left-[0px] text-base leading-[26px] font-semibold text-black flex items-center justify-center w-[246px] h-[52px]">
                      Travel Insurance Claim Prediction
                    </div>
                    <div className="absolute top-[0px] left-[79px] w-[87px] h-[21px] text-xs text-dimgray font-body-b3-regular">
                      <div className="absolute top-[0px] left-[0px] w-full h-full">
                        <div className="absolute top-[0px] left-[0px] rounded-8xs bg-orangered w-full h-full">
                          <div className="absolute top-[0px] left-[0px] rounded-8xs bg-orangered w-full h-full hidden" />
                          <div className="absolute top-[2px] left-[13px] leading-[16px] font-semibold inline-block w-[61px] h-3.5 z-[1]">
                            Past
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-[143px] left-[20px] text-lg leading-[30px] font-semibold text-darkslategray-100 text-left inline-block w-[206px] h-[30px] whitespace-nowrap z-[2]">
                      16th May'22 09:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent1;
