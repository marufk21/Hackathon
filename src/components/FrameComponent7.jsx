import PropTypes from "prop-types";

const FrameComponent7 = ({
  className = "",
  group,
  antDesignfundViewOutlined,
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start pt-0 pb-[5px] pl-[3px] pr-0 box-border max-w-full text-left text-xl text-white font-body-b3-regular ${className}`}
    >
      <div className="h-[177px] flex-1 flex flex-col items-start justify-start gap-[33px] max-w-full mq450:gap-4">
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-10">
          <div className="w-[234px] flex flex-row items-end justify-start gap-[22px]">
            <div className="h-[55px] w-[55px] relative rounded-mini bg-ghostwhite-200 z-[1]">
              <div className="absolute top-[0px] left-[0px] rounded-mini bg-ghostwhite-200 w-full h-full hidden" />
              <img
                className="absolute h-[48.55%] w-[48.55%] top-[27.27%] right-[26%] bottom-[24.18%] left-[25.45%] max-w-full overflow-hidden max-h-full z-[1]"
                loading="lazy"
                alt=""
                src={group}
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[5px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                <h3 className="m-0 self-stretch relative text-inherit leading-[20px] font-bold font-[inherit] z-[1] mq450:text-base mq450:leading-[16px]">
                  3.5 Million+
                </h3>
                <div className="w-[152px] h-[17px] relative text-base leading-[17px] font-medium inline-block shrink-0 z-[1]">
                  mins watch time
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-px h-[323px] relative bg-darkslategray-300 [transform:_rotate(-90deg)] shrink-0 z-[1]" />
        <div className="w-60 flex flex-row items-start justify-start py-0 px-10 box-border">
          <div className="flex-1 flex flex-row items-end justify-start gap-[22px]">
            <div className="h-[55px] w-[55px] rounded-mini bg-ghostwhite-200 flex flex-row items-start justify-start relative z-[1]">
              <div className="self-stretch w-[55px] relative rounded-mini bg-ghostwhite-200 hidden z-[0]" />
              <img
                className="h-[31px] w-[31px] absolute !m-[0] top-[calc(50%_-_15.5px)] left-[calc(50%_-_15.5px)] overflow-hidden shrink-0 z-[2]"
                loading="lazy"
                alt=""
                src={antDesignfundViewOutlined}
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-1.5">
              <div className="self-stretch flex flex-col items-start justify-start gap-px">
                <b className="self-stretch relative leading-[20px] z-[1] mq450:text-base mq450:leading-[16px]">
                  300K+
                </b>
                <div className="w-[57px] h-[17px] relative text-base leading-[17px] font-medium inline-block shrink-0 z-[1]">
                  Views
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
  group: PropTypes.string,
  antDesignfundViewOutlined: PropTypes.string,
};

export default FrameComponent7;
