import OverviewContainer from "../components/OverviewContainer";

const DetailPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[19px] box-border leading-[normal] tracking-[normal]">
      <section className="self-stretch bg-darkslategray-300 flex flex-col items-start justify-start pt-24 px-[126px] pb-[95px] box-border gap-[33px] max-w-full text-left text-sm text-black font-body-b3-regular mq450:pt-[62px] mq450:pb-[62px] mq450:box-border mq725:gap-4 mq725:pl-[31px] mq725:pr-[31px] mq725:box-border mq1050:pl-[63px] mq1050:pr-[63px] mq1050:box-border">
        <div className="w-[1442px] h-[419px] relative bg-darkslategray-300 hidden max-w-full" />
        <div className="w-[818px] flex flex-col items-start justify-start gap-6 max-w-full">
          <div className="w-[472px] flex flex-row items-start justify-start py-0 px-1 box-border max-w-full">
            <div className="flex-1 rounded-8xs bg-goldenrod-100 flex flex-row items-start justify-start pt-2.5 px-[22px] pb-[9.7px] box-border gap-[13.7px] max-w-full z-[1]">
              <div className="h-[34px] w-[464px] relative rounded-8xs bg-goldenrod-100 hidden max-w-full" />
              <img
                className="h-[14.3px] w-[14.3px] relative min-h-[14px] z-[1]"
                loading="lazy"
                alt=""
                src="/group1.svg"
              />
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 box-border max-w-[calc(100%_-_28px)]">
                <div className="relative leading-[12px] font-semibold whitespace-nowrap z-[1]">
                  Starts on 17th Jun'22 09:00 PM (India Standard Time)
                </div>
              </div>
            </div>
          </div>
          <h1 className="m-0 self-stretch relative text-[40px] leading-[48px] font-semibold font-poppins text-white z-[1] mq450:text-5xl mq450:leading-[29px] mq1000:text-13xl mq1000:leading-[38px]">
            Data Sprint 72 - Butterfly Identification
          </h1>
        </div>
        <div className="w-[576px] flex flex-col items-start justify-start gap-6 max-w-full text-lg text-ghostwhite-100">
          <div className="self-stretch h-[31px] relative leading-[24px] font-medium inline-block shrink-0 z-[1]">
            Identify the class to which each butterfly belongs to
          </div>
          <div className="w-[102px] rounded-8xs bg-ghostwhite-100 flex flex-row items-start justify-start py-2 pl-5 pr-[17px] box-border gap-[7px] z-[1] text-sm text-darkslategray-300">
            <div className="h-[34px] w-[102px] relative rounded-8xs bg-ghostwhite-100 hidden" />
            <img
              className="h-[18px] w-[18px] relative overflow-hidden shrink-0 min-h-[18px] z-[1]"
              alt=""
              src="/carbonskilllevelbasic.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <div className="self-stretch relative leading-[12px] font-semibold z-[1]">
                Easy
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-col items-start justify-start gap-[25px] max-w-full text-left text-lg text-slategray font-poppins">
        <OverviewContainer />
        <div className="w-[1208px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="h-[322px] w-[956px] relative tracking-[-0.02em] leading-[28px] font-medium inline-block shrink-0 max-w-full z-[1]">
            <p className="m-0">
              Butterflies are the adult flying stage of certain insects
              belonging to an order or group called Lepidoptera. The word
              "Lepidoptera" means "scaly wings" in Greek. This name perfectly
              suits the insects in this group because their wings are covered
              with thousands of tiny scales overlapping in rows.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              {" "}
              An agency of the Governmental Wildlife Conservation is planning to
              implement an automated system based on computer vision so that it
              can identify butterflies based on captured images. As a consultant
              for this project, you are responsible for developing an efficient
              model.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0 whitespace-pre-wrap">
              Your Task is to build an Image Classification Model using CNN that
              classifies to which class of weather each image belongs to.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailPage;
