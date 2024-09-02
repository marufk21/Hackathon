import PropTypes from "prop-types";

const FrameComponent6 = ({
  className = "",
  carbonnotebookReference,
  robot,
  benefitIcon,
  identificationCard,
}) => {
  return (
    <section
      className={`self-stretch bg-white flex flex-col items-center justify-start pt-[90px] px-5 pb-[123px] box-border gap-[76px] min-h-[962px] max-w-full mt-[-60px] text-center text-13xl text-black font-poppins mq450:pb-[52px] mq450:box-border mq1125:pb-20 mq1125:box-border mq1350:gap-[38px] mq800:gap-[19px] ${className}`}
    >
      <div className="w-[1439px] h-[902px] relative bg-white hidden max-w-full" />
      <div className="w-[1119px] flex flex-row items-start justify-center py-0 pl-px pr-0 box-border max-w-full">
        <h1 className="m-0 w-[912px] relative text-inherit leading-[20px] font-semibold font-[inherit] inline-block shrink-0 max-w-full z-[2] mq450:text-lgi mq450:leading-[12px] mq800:text-7xl mq800:leading-[16px]">
          <span>{`Why Participate in `}</span>
          <span className="text-dphigreen">AI Challenges?</span>
        </h1>
      </div>
      <div className="w-[1119px] flex flex-row items-start justify-center flex-wrap content-start gap-[35px] max-w-full text-left text-5xl mq800:gap-[17px]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[39px] min-w-[352px] max-w-full mq450:min-w-full mq800:gap-[19px]">
          <div className="self-stretch rounded-xl bg-ghostwhite-100 flex flex-col items-start justify-start pt-[59px] pb-[62px] pl-[31px] pr-5 box-border gap-[5px] max-w-full z-[2]">
            <div className="w-[542px] h-[276px] relative rounded-xl bg-ghostwhite-100 hidden max-w-full" />
            <img
              className="w-[43px] h-[43px] relative overflow-hidden shrink-0 z-[3]"
              loading="lazy"
              alt=""
              src={carbonnotebookReference}
            />
            <h2 className="m-0 w-[266px] relative text-inherit tracking-[-0.03em] leading-[52px] font-semibold font-[inherit] inline-block z-[3] mq450:text-lgi mq450:leading-[40px]">
              Prove your skills
            </h2>
            <div className="w-[471px] relative text-base tracking-[-0.02em] leading-[24px] font-medium text-slategray inline-block max-w-full z-[3]">
              Gain substantial experience by solving real-world problems and pit
              against others to come up with innovative solutions.
            </div>
          </div>
          <div className="self-stretch rounded-xl bg-ghostwhite-100 flex flex-col items-start justify-start pt-14 px-[27px] pb-[62px] box-border gap-[4.5px] max-w-full z-[2]">
            <div className="w-[542px] h-[276px] relative rounded-xl bg-ghostwhite-100 hidden max-w-full" />
            <img
              className="w-[47px] h-[47px] relative z-[3]"
              loading="lazy"
              alt=""
              src={robot}
            />
            <div className="w-[274px] flex flex-row items-start justify-start py-0 px-1 box-border">
              <h2 className="m-0 flex-1 relative text-inherit tracking-[-0.03em] leading-[52px] font-semibold font-[inherit] z-[3] mq450:text-lgi mq450:leading-[40px]">
                Challenge yourself
              </h2>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-1 pr-[13px] box-border max-w-full text-base text-slategray">
              <div className="h-[50px] flex-1 relative tracking-[-0.02em] leading-[24px] font-medium inline-block max-w-full z-[3]">
                There is nothing for you to lose by participating in a
                challenge. You can fail safe, learn out of the entire experience
                and bounce back harder.
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[41px] min-w-[352px] max-w-full mq450:min-w-full mq800:gap-5">
          <div className="self-stretch rounded-xl bg-ghostwhite-100 flex flex-col items-start justify-start pt-[65px] pb-[62px] pl-[31px] pr-[27px] box-border gap-3 max-w-full z-[2]">
            <div className="w-[542px] h-[276px] relative rounded-xl bg-ghostwhite-100 hidden max-w-full" />
            <div className="flex flex-row items-start justify-start py-0 px-0.5">
              <img
                className="h-[30px] w-[39px] relative z-[3]"
                loading="lazy"
                alt=""
                src={benefitIcon}
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[5px] max-w-full">
              <h2 className="m-0 w-[426px] relative text-inherit tracking-[-0.03em] leading-[52px] font-semibold font-[inherit] inline-block max-w-full z-[3] mq450:text-lgi mq450:leading-[40px]">
                Learn from community
              </h2>
              <div className="self-stretch relative text-base tracking-[-0.02em] leading-[24px] font-medium text-slategray z-[3]">
                One can look and analyze the solutions submitted by the other
                Data Scientists in the community and learn from them.
              </div>
            </div>
            <div className="w-12 h-12 relative overflow-hidden shrink-0 hidden" />
          </div>
          <div className="self-stretch rounded-xl bg-ghostwhite-100 flex flex-col items-start justify-start pt-[52px] px-[26px] pb-[62px] box-border gap-[5px] max-w-full z-[2]">
            <div className="w-[542px] h-[276px] relative rounded-xl bg-ghostwhite-100 hidden max-w-full" />
            <div className="w-[271px] flex flex-col items-start justify-start">
              <img
                className="w-[55px] h-[55px] relative z-[4]"
                loading="lazy"
                alt=""
                src={identificationCard}
              />
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[5px] pr-0">
                <h2 className="m-0 flex-1 relative text-inherit tracking-[-0.03em] leading-[52px] font-semibold font-[inherit] z-[3] mq450:text-lgi mq450:leading-[40px]">
                  Earn recognition
                </h2>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[5px] pr-px box-border max-w-full text-base text-slategray">
              <div className="h-[50px] flex-1 relative tracking-[-0.02em] leading-[24px] font-medium inline-block max-w-full z-[3]">
                You will stand out from the crowd if you do well in AI
                challenges, it not only helps you shine in the community but
                also earns rewards.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
  carbonnotebookReference: PropTypes.string,
  robot: PropTypes.string,
  benefitIcon: PropTypes.string,
  identificationCard: PropTypes.string,
};

export default FrameComponent6;
