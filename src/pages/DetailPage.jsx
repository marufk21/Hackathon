import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const DetailPage = ({className= ""}) => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate(`/detail-page/${index}`);
  }, [navigate]);

  const { index } = useParams(); 
  const [challenge, setChallenge] = useState(null);

  useEffect(() => {
    // Retrieve challenge data from localStorage
    const challenges = JSON.parse(localStorage.getItem("challenges")) || [];

    // Set challenge based on the index from URL
    if (challenges.length > 0 && index < challenges.length) {
      setChallenge(challenges[index]);
    }
  }, [index]); // Add index as a dependency

  if (!challenge) {
    return <div>Loading...</div>; // Show a loading state while data is being fetched
  }

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
                  Starts on {new Date(challenge.startDate).toLocaleDateString()}{" "}
                  at {new Date(challenge.startDate).toLocaleTimeString()}
                </div>
              </div>
            </div>
          </div>
          <h1 className="m-0 self-stretch relative text-[40px] leading-[48px] font-semibold font-poppins text-white z-[1] mq450:text-5xl mq450:leading-[29px] mq1000:text-13xl mq1000:leading-[38px]">
            {challenge.challengeName}
          </h1>
        </div>
        <div className="w-[576px] flex flex-col items-start justify-start gap-6 max-w-full text-lg text-ghostwhite-100">
          <div className="self-stretch h-[31px] relative leading-[24px] font-medium inline-block shrink-0 z-[1]">
            A hackathon is a competitive event focused on coding.
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
                {challenge.levelType}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-col items-start justify-start gap-[25px] max-w-full text-left text-lg text-slategray font-poppins">
        <div
          className={`self-stretch bg-white flex flex-row items-start justify-start pt-0 px-0 pb-[21px] box-border max-w-full text-left text-lg text-black font-body-b3-regular ${className}`}
        >
          <div className="h-[87px] w-[1440px] relative bg-white hidden max-w-full" />
          <div className="ml-[-1px] flex-1 shadow-[0px_6px_12px_#dde6ed] bg-white border-gainsboro-100 border-[0.3px] border-solid box-border flex flex-row items-start justify-between pt-[13px] pb-0 pl-[127px] pr-[119px] max-w-full gap-5 z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border mq725:flex-wrap mq725:pl-[63px] mq725:pr-[59px] mq725:box-border">
            <div className="h-[66px] w-[1440px] relative shadow-[0px_6px_12px_#dde6ed] bg-white border-gainsboro-100 border-[0.3px] border-solid box-border hidden max-w-full" />
            <div className="w-[125px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
              <div className="self-stretch flex flex-col items-start justify-start gap-2">
                <div className="flex flex-row items-start justify-start py-0 px-5">
                  <b className="relative leading-[161.8%] inline-block min-w-[85px] z-[2]">
                    Overview
                  </b>
                </div>
                <div className="self-stretch h-1 relative rounded-xl bg-dphigreen z-[2]" />
              </div>
            </div>
            <div className="w-[200px] flex flex-row items-start justify-start gap-[18px] text-center text-sm text-white font-poppins">
              <div
                className="flex flex-row items-start justify-start cursor-pointer z-[2]"
                onClick={onGroupContainerClick}
              >
                <div className="rounded-3xs bg-dphigreen flex flex-row items-start justify-start pt-2.5 px-8 pb-[9px]">
                  <a className="[text-decoration:none] relative leading-[18px] font-semibold text-[inherit] inline-block min-w-[27px]">
                    Edit
                  </a>
                </div>
              </div>
              <div className="flex-1 rounded-3xs border-red border-[1.2px] border-solid flex flex-row items-start justify-start pt-2 pb-[7px] pl-[22px] pr-[21px] z-[2] text-red">
                <div className="relative leading-[18px] font-semibold inline-block min-w-[46px]">
                  Delete
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1208px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="h-[122px] w-[956px] relative tracking-[-0.02em] leading-[28px] font-medium inline-block shrink-0 max-w-full z-[1]">
            <p className="m-0">{challenge.description}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

DetailPage.propTypes = {
  className: PropTypes.string,
};

export default DetailPage;
