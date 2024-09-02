import ChallengeInfo from "../components/ChallengeInfo";

const Root = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[52px] box-border gap-[33px] leading-[normal] tracking-[normal] mq725:gap-4">
      <section className="self-stretch flex flex-col items-start justify-start py-0 px-0 box-border max-w-full text-left text-5xl text-black font-body-b3-regular">
        <div className="self-stretch bg-ghostwhite-100 overflow-hidden flex flex-row items-start justify-start pt-[41px] px-[89px] pb-[37px] z-[2] mq450:pl-5 mq450:pr-5 mq450:box-border">
          <b className="relative mq450:text-lgi">Challenge Details</b>
        </div>
      </section>
      <section className="w-[995px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <ChallengeInfo />
      </section>
    </div>
  );
};

export default Root;
