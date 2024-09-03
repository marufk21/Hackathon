import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const EditForm = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[52px] box-border gap-[33px] leading-[normal] tracking-[normal] mq725:gap-4">
      <section className="self-stretch flex flex-col items-start justify-start py-0 px-0 box-border max-w-full text-left text-5xl text-black font-body-b3-regular">
        <div className="self-stretch bg-ghostwhite-100 overflow-hidden flex flex-row items-start justify-start pt-[41px] px-[89px] pb-[37px] z-[2] mq450:pl-5 mq450:pr-5 mq450:box-border">
          <b className="relative mq450:text-lgi">Challenge Details</b>
        </div>
      </section>
      <section className="w-[995px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div
          className={`w-[817px] flex flex-col items-start justify-start gap-[34px] max-w-full text-left text-base text-gray-1 font-body-b3-regular mq450:gap-[17px] ${className}`}
        >
          <div className="w-[453px] flex flex-col items-start justify-start gap-[19px] max-w-full">
            <div className="w-[163px] relative font-medium inline-block">
              Challenge Name
            </div>
            <div className="self-stretch rounded-8xs border-silver-200 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[7px] px-5 whitespace-nowrap max-w-full text-darkslategray-200">
              <div className="h-[39px] w-[453px] relative rounded-8xs border-silver-200 border-[1px] border-solid box-border hidden max-w-full" />
              <div className="w-[391px] relative font-medium inline-block shrink-0 max-w-[calc(100%_-_0px)] z-[1]">
                Data Sprint 72 - Butterfly Identification
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[19px] max-w-full">
            <div className="w-[163px] relative font-medium inline-block">
              Start Date
            </div>
            <div className="rounded-8xs border-silver-200 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-1.5 pb-[5px] pl-5 pr-[23px] max-w-full z-[1] text-darkslategray-200">
              <div className="w-96 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border max-w-[calc(100%_-_24px)]">
                <div className="w-[416px] relative font-medium inline-block whitespace-nowrap max-w-[109%] shrink-0 z-[2]">
                  17th Jun'22 09:00 PM
                </div>
              </div>
              <div className="h-[39px] w-[453px] relative rounded-8xs border-silver-200 border-[1px] border-solid box-border hidden max-w-full" />
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src="/uilcalender.svg"
              />
            </div>
          </div>
          <div className="w-[453px] flex flex-col items-start justify-start pt-0 px-0 pb-2.5 box-border gap-[19px] max-w-full">
            <div className="w-[163px] relative font-medium inline-block">
              End Date
            </div>
            <div className="self-stretch rounded-8xs border-silver-200 border-[1px] border-solid box-border flex flex-row items-start justify-between pt-1.5 pb-[5px] pl-5 pr-[25px] max-w-full gap-5 z-[1] text-darkslategray-200">
              <div className="w-60 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                <div className="self-stretch relative font-medium whitespace-nowrap z-[2]">
                  21st Jun'22 11:00 PM
                </div>
              </div>
              <div className="h-[39px] w-[453px] relative rounded-8xs border-silver-200 border-[1px] border-solid box-border hidden max-w-full" />
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/uilcalender.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2.5 box-border gap-[19px] max-w-full">
            <div className="w-[163px] relative font-medium inline-block">
              Description
            </div>
            <div className="self-stretch rounded-8xs border-silver-200 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[21px] px-5 min-h-[252px] max-w-full text-darkslategray-200">
              <div className="h-[252px] w-[817px] relative rounded-8xs border-silver-200 border-[1px] border-solid box-border hidden max-w-full" />
              <div className="w-[433px] relative font-medium inline-block shrink-0 max-w-full z-[1]">
                Identify the class to which each butterfly belongs to
              </div>
            </div>
          </div>
          <div className="w-[297px] flex flex-col items-start justify-start pt-0 px-0 pb-[7px] box-border gap-[19px]">
            <div className="w-[186px] relative font-medium inline-block">
              Image
            </div>
            <div className="self-stretch rounded-3xs bg-ghostwhite-100 border-ghostwhite-100 border-[1px] border-solid flex flex-col items-start justify-start pt-5 px-[21px] pb-[27px] gap-[27.6px] text-sm text-dphigreen">
              <div className="w-[297px] h-[218px] relative rounded-3xs bg-ghostwhite-100 border-ghostwhite-100 border-[1px] border-solid box-border hidden" />
              <div className="w-[249px] rounded-mini flex flex-row items-start justify-start bg-[url('/public/rectangle-66726@2x.png')] bg-cover bg-no-repeat bg-[top] z-[1]">
                <img
                  className="self-stretch w-[249px] relative rounded-mini max-h-full object-cover hidden min-h-[122px]"
                  alt=""
                  src="/rectangle-66726@2x.png"
                />
                <img
                  className="h-[122.4px] flex-1 relative rounded-mini max-w-full overflow-hidden z-[1]"
                  loading="lazy"
                  alt=""
                  src="/rectangle-66731.svg"
                />
              </div>
              <div className="flex flex-row items-start justify-start gap-[5px]">
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <img
                    className="w-[15px] h-[15px] relative overflow-hidden shrink-0 z-[1]"
                    loading="lazy"
                    alt=""
                    src="/biimagefill.svg"
                  />
                </div>
                <div className="relative font-medium inline-block min-w-[99px] z-[1]">
                  Change image
                </div>
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <div className="w-[15px] h-[15px] relative overflow-hidden shrink-0 z-[1]">
                    <img
                      className="absolute top-[3px] left-[1px] w-2.5 h-[8.8px] object-contain z-[2]"
                      loading="lazy"
                      alt=""
                      src="/vector1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[236px] flex flex-col items-start justify-start pt-0 px-0 pb-3 box-border gap-[19px]">
            <div className="w-[163px] relative font-medium inline-block">
              Level Type
            </div>
            <div className="self-stretch rounded-8xs border-silver-200 border-[1px] border-solid flex flex-row items-start justify-between py-[7px] pl-[21px] pr-[22px] gap-5 z-[1] text-sm">
              <div className="w-[71px] relative font-medium inline-block shrink-0">
                Easy
              </div>
              <div className="h-[39px] w-[236px] relative rounded-8xs border-silver-200 border-[1px] border-solid box-border hidden" />
              <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                <img
                  className="w-3 h-[8.9px] relative z-[2]"
                  alt=""
                  src="/vector-11.svg"
                />
              </div>
            </div>
          </div>
          <div
            className="rounded-3xs bg-dphigreen flex flex-row items-start justify-start py-[12.5px] px-[45px] gap-2.5 cursor-pointer text-center text-lg text-white"
            onClick={onButtonContainerClick}
          >
            <div className="relative leading-[21px] font-medium inline-block min-w-[124px]">
              Save Changes
            </div>
            <img
              className="h-[10.6px] w-[11px] relative hidden"
              alt=""
              src="/iconfilter1.svg"
            />
            <div className="overflow-hidden hidden flex-col items-start justify-start py-0.5 px-0 box-border w-[px] h-[px]">
              <img className="w-3 h-2 relative" alt="" src="/vector-1.svg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
EditForm.propTypes = {
  className: PropTypes.string,
};
export default EditForm;
