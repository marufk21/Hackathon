import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import GroupComponent1 from "../components/GroupComponent1";
import MobileHeader from "../components/MobileHeader";
import FrameComponent7 from "../components/FrameComponent7";
import SessionContainer from "../components/SessionContainer";
import GroupComponent from "../components/GroupComponent";
import FAQ from "../components/FAQ";

const ListPage = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/admin");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
     
      <section className="ml-[-1px] mb-[60px] self-stretch bg-darkslategray-300 flex flex-row items-start justify-start pt-[184px] px-36 pb-[93px] box-border relative gap-[52.3px] max-w-full mt-[-60px] text-left text-lg text-white font-poppins mq1125:pl-[72px] mq1125:pr-[72px] mq1125:box-border mq800:gap-[26px] mq800:pl-9 mq800:pr-9 mq800:pb-[60px] mq800:box-border">
        <div className="h-[625px] w-[1442px] relative bg-darkslategray-300 hidden max-w-full z-[0]" />
        <div className="h-[115.9px] w-[9.7px] relative bg-goldenrod-100 z-[1]" />
        <div className="w-[643px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border max-w-[calc(100%_-_62px)]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[37.5px] max-w-full mq800:gap-[19px]">
            <h1 className="m-0 self-stretch relative text-29xl leading-[56px] font-semibold font-[inherit] z-[1] mq450:text-10xl mq450:leading-[34px] mq800:text-19xl mq800:leading-[45px]">
              Accelerate Innovation with Global AI Challenges
            </h1>
            <div className="w-[531px] relative leading-[28px] font-medium text-whitesmoke-400 inline-block max-w-full z-[1]">
              AI Challenges at DPhi simulate real-world problems. It is a great
              place to put your AI/Data Science skills to test on diverse
              datasets allowing you to foster learning through competitions.
            </div>
            <div
              className="flex flex-row items-start justify-start cursor-pointer z-[1] text-center text-darkslategray-300"
              onClick={onGroupContainerClick}
            >
              <div className="rounded-3xs bg-white flex flex-row items-start justify-start pt-[15px] px-[18px] pb-3.5 whitespace-nowrap">
                <div className="relative leading-[18px] font-semibold">
                  Create Challenge
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="h-[362.1px] w-[332.6px] absolute !m-[0] right-[165.4px] bottom-[96.9px] object-contain z-[1]"
          loading="lazy"
          alt=""
          src="/picsart-04140442-1@2x.png"
        />
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[60px] box-border max-w-full mt-[-60px] text-left text-5xl text-white font-body-b3-regular">
        <div className="flex-1 bg-darkslategray-400 flex flex-row items-start justify-between pt-[72px] pb-[73px] pl-[183px] pr-[182px] box-border max-w-full gap-5 mq450:pl-5 mq450:pr-5 mq450:box-border mq1350:flex-wrap mq800:pl-[91px] mq800:pr-[91px] mq800:box-border">
          <div className="h-[200px] w-[1441px] relative bg-darkslategray-400 hidden max-w-full" />
          <div className="flex flex-row items-end justify-start gap-[22px]">
            <img
              className="h-[55px] w-[55px] relative z-[1]"
              loading="lazy"
              alt=""
              src="/group-1000002515.svg"
            />
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[5px]">
              <div className="flex flex-col items-start justify-start gap-[5px]">
                <b className="w-[157px] relative leading-[20px] inline-block z-[1] mq450:text-lgi mq450:leading-[16px]">
                  <p className="m-0">100K+</p>
                </b>
                <div className="relative text-base leading-[17px] font-medium z-[1]">
                  AI model submissions
                </div>
              </div>
            </div>
          </div>
          <div className="w-[53px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border">
            <div className="w-px h-[38px] relative bg-silver-100 z-[1]" />
          </div>
          <div className="w-[247px] flex flex-row items-end justify-start py-0 pl-0 pr-[25px] box-border gap-8">
            <img
              className="h-[55px] w-[55px] relative z-[1]"
              loading="lazy"
              alt=""
              src="/group-1000002516.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-1">
              <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                <b className="w-[83px] relative leading-[20px] inline-block z-[1] mq450:text-lgi mq450:leading-[16px]">
                  50K+
                </b>
                <div className="self-stretch relative text-base leading-[17px] font-medium z-[1]">
                  Data Scientists
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[7px] pb-0 pl-0 pr-7">
            <div className="w-px h-[38px] relative bg-silver-100 z-[1]" />
          </div>
          <div className="flex flex-row items-end justify-start gap-[21px]">
            <img
              className="h-[55px] w-[55px] relative z-[1]"
              loading="lazy"
              alt=""
              src="/group-1000002518.svg"
            />
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1">
              <div className="flex flex-col items-start justify-start gap-[5px]">
                <b className="w-[120px] relative leading-[20px] inline-block z-[1] mq450:text-lgi mq450:leading-[16px]">
                  <p className="m-0">100+</p>
                </b>
                <div className="relative text-base leading-[17px] font-medium z-[1]">
                  AI Challenges hosted
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FrameComponent6
        carbonnotebookReference="/carbonnotebookreference.svg"
        robot="/robot.svg"
        benefitIcon="/vector.svg"
        identificationCard="/identificationcard.svg"
      />
      <section className="self-stretch flex flex-row items-start justify-start py-0 px-0 box-border gap-[366px] max-w-full mt-[-60px] text-center text-5xl text-white font-poppins mq450:gap-[46px] mq1350:gap-[183px] mq1350:flex-wrap mq800:gap-[91px]">
        <div className="w-[1440px] flex flex-col items-start justify-start shrink-0 max-w-full">
          <FrameComponent5 />
          <GroupComponent1 />
        </div>
        <div className="h-[1517px] w-[414px] flex flex-col items-start justify-start pt-[643px] px-0 pb-0 box-border max-w-full shrink-0 mq450:h-auto mq1350:pt-20 mq1350:box-border">
          <div className="self-stretch bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[4444px] box-border shrink-0 max-w-full mq450:pb-[516px] mq450:box-border mq1125:pb-[794px] mq1125:box-border mq1350:pb-[1221px] mq1350:box-border">
            <MobileHeader
              cihamburger="/cihamburger.svg"
              mainLogoWithDarktextDphi1="/main-logo-with-darktext-dphi-1@2x.png"
            />
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[53px] box-border max-w-full text-left text-xl font-body-b3-regular mq450:pb-[34px] mq450:box-border">
              <div className="h-[395px] flex-1 bg-black flex flex-col items-start justify-start pt-[45px] pb-[46px] pl-[47px] pr-[41px] box-border gap-[33px] max-w-full mq450:gap-4 mq450:pl-5 mq450:box-border mq800:pt-20 mq800:pb-[30px] mq800:box-border">
                <div className="w-[414px] h-[395px] relative bg-black hidden max-w-full" />
                <FrameComponent7
                  group="/group.svg"
                  antDesignfundViewOutlined="/antdesignfundviewoutlined.svg"
                />
                <div className="w-px h-[323px] relative bg-darkslategray-300 [transform:_rotate(-90deg)] shrink-0 z-[1]" />
                <div className="w-[246px] flex flex-row items-start justify-start py-0 px-[43px] box-border">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[22px]">
                    <img
                      className="h-[55px] w-[55px] relative z-[1]"
                      alt=""
                      src="/group-1000002518-1.svg"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0">
                      <div className="self-stretch flex flex-col items-start justify-start gap-0.5">
                        <b className="self-stretch relative leading-[20px] z-[1] mq450:text-base mq450:leading-[16px]">
                          50+
                        </b>
                        <div className="self-stretch h-[17px] relative text-base leading-[17px] font-medium inline-block shrink-0 z-[1]">
                          Speakers
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[35px] pl-[54px] pr-[53px] text-black mq450:pl-5 mq450:pr-5 mq450:box-border">
              <h2 className="m-0 flex-1 relative text-inherit leading-[40px] font-semibold font-[inherit] mq450:text-lgi mq450:leading-[32px]">
                Upcoming Session
              </h2>
            </div>
            <SessionContainer
              coolicon="/coolicon.svg"
              antDesigncalendarOutlined="/antdesigncalendaroutlined.svg"
              sessionImage="/session-image@2x.png"
              charmcircleTick="/charmcircletick.svg"
            />
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-9 box-border max-w-full">
              <div className="flex-1 bg-darkslategray-300 flex flex-col items-end justify-start pt-[37px] px-[30px] pb-[66px] box-border gap-[43px] max-w-full mq450:gap-[21px] mq450:pb-5 mq450:box-border mq1125:pb-7 mq1125:box-border mq1350:pt-20 mq1350:pb-[43px] mq1350:box-border">
                <div className="w-[414px] h-[1629px] relative bg-darkslategray-300 hidden max-w-full" />
                <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-px box-border max-w-full">
                  <h2 className="m-0 h-10 flex-1 relative text-inherit leading-[40px] font-semibold font-[inherit] flex items-center justify-center max-w-full z-[1] mq450:text-lgi mq450:leading-[32px]">
                    Explore Past Sessions
                  </h2>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[26px] gap-[43px] mq450:gap-[21px]">
                  <GroupComponent />
                  <GroupComponent />
                  <GroupComponent />
                </div>
                <div className="self-stretch h-[49px] flex flex-row items-start justify-center text-base text-darkslategray-300 font-body-b3-regular">
                  <div className="self-stretch w-[184px] rounded-3xs bg-white flex flex-row items-start justify-start pt-4 px-[37px] pb-[14.9px] box-border z-[1]">
                    <div className="h-[49px] w-[184px] relative rounded-3xs bg-white hidden" />
                    <div className="self-stretch w-[106px] rounded-3xs flex flex-row items-start justify-start py-0 pl-0 pr-[13px] box-border relative z-[2]">
                      <div className="self-stretch flex-1 relative leading-[0%] font-semibold flex items-center justify-center">
                        View All
                      </div>
                      <img
                        className="h-1.5 w-[13px] absolute !m-[0] right-[0px] bottom-[6px]"
                        alt=""
                        src="/caret-1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[22px] pl-6 pr-5 text-black">
              <h2 className="m-0 h-[46px] w-[212px] relative text-inherit leading-[24px] font-bold font-[inherit] flex items-center justify-center shrink-0 mq450:text-lgi mq450:leading-[19px]">
                FAQ’s
              </h2>
            </div>
            <div className="self-stretch h-[553px] flex flex-row items-start justify-start pt-0 pb-[29px] pl-[73px] pr-[69px] box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
              <FAQ
                chevronUp="/chevronup.svg"
                chevronDown="/chevrondown.svg"
                chevronDown1="/chevrondown.svg"
                chevronDown2="/chevrondown.svg"
              />
            </div>
            <img
              className="ml-[-1px] self-stretch h-[627px] relative max-w-full overflow-hidden shrink-0 object-cover"
              alt=""
              src="/screenshot-20220520-at-319-1@2x.png"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ListPage;
