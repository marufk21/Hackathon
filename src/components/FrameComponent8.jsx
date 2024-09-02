import PropTypes from "prop-types";

const FrameComponent8 = ({ className = "" }) => {
  return (
    <section
      className={`ml-[-1px] mb-[60px] self-stretch bg-darkslategray-300 flex flex-row items-start justify-start pt-[184px] px-36 pb-[93px] box-border relative gap-[52.3px] max-w-full mt-[-60px] text-left text-lg text-white font-poppins mq1125:pl-[72px] mq1125:pr-[72px] mq1125:box-border mq800:gap-[26px] mq800:pl-9 mq800:pr-9 mq800:pb-[60px] mq800:box-border ${className}`}
    >
      <div className="h-[625px] w-[1442px] relative bg-darkslategray-300 hidden max-w-full z-[0]" />
      <div className="h-[115.9px] w-[9.7px] relative bg-goldenrod-100 z-[1]" />
      <img
        className="h-[362.1px] w-[332.6px] absolute !m-[0] right-[165.4px] bottom-[96.9px] object-contain z-[1]"
        loading="lazy"
        alt=""
        src="/picsart-04140442-1@2x.png"
      />
      <div className="w-[643px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border max-w-[calc(100%_-_62px)]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[37.5px] max-w-full mq800:gap-[19px]">
          <h1 className="m-0 self-stretch relative text-29xl leading-[56px] font-semibold font-[inherit] z-[1] mq450:text-10xl mq450:leading-[34px] mq800:text-19xl mq800:leading-[45px]">
            Accelerate Innovation with Global AI Challenges
          </h1>
          <div className="w-[531px] relative leading-[28px] font-medium text-whitesmoke-400 inline-block max-w-full z-[1]">
            AI Challenges at DPhi simulate real-world problems. It is a great
            place to put your AI/Data Science skills to test on diverse datasets
            allowing you to foster learning through competitions.
          </div>
          <div className="rounded-3xs bg-white flex flex-row items-start justify-start pt-[15px] px-[18px] pb-3.5 whitespace-nowrap z-[1] text-center text-darkslategray-300">
            <div className="relative leading-[18px] font-semibold">
              Create Challenge
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent8;
