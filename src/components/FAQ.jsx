import PropTypes from "prop-types";

const FAQ = ({
  className = "",
  chevronUp,
  chevronDown,
  chevronDown1,
  chevronDown2,
}) => {
  return (
    <div
      className={`self-stretch flex-1 flex flex-col items-start justify-start gap-2 text-left text-sm text-grey-k900-dark-grey font-body-b3-regular ${className}`}
    >
      <div className="self-stretch flex-1 rounded-lg bg-mintcream overflow-hidden flex flex-col items-start justify-start p-2 gap-4">
        <div className="self-stretch h-10 flex flex-row items-center justify-start gap-2">
          <a className="[text-decoration:none] self-stretch flex-1 relative leading-[20px] font-medium text-[inherit] flex items-center">
            Q1. What are Data Science Community Bootcamps?
          </a>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src={chevronUp}
          />
        </div>
        <div className="self-stretch flex-1 relative leading-[20px] text-gray-1">{`It is an initiative by DPhi to bring together aspiring Data Scientists, where we all can learn together and grow together as a community. During the bootcamp, we will learn through various resources (contributed by experts in industry & academia) and practice by solving some interesting Data Science problems. Also, since it’s a community effort, it is free for everyone to join! `}</div>
      </div>
      <div className="self-stretch h-[76px] rounded flex flex-row items-center justify-start p-2 box-border gap-2">
        <div className="self-stretch flex-1 relative leading-[20px] font-medium flex items-center">
          Q2. How many simultaenous assessments does Skillspace support?
        </div>
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          alt=""
          src={chevronDown}
        />
      </div>
      <div className="self-stretch h-[76px] rounded flex flex-row items-center justify-start p-2 box-border gap-2">
        <div className="self-stretch flex-1 relative leading-[20px] font-medium flex items-center">
          Q3. Does Skillspace offer 1-on-1 remote coding interviews as well?
        </div>
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          alt=""
          src={chevronDown1}
        />
      </div>
      <div className="self-stretch h-14 rounded flex flex-row items-center justify-start p-2 box-border gap-2">
        <div className="self-stretch flex-1 relative leading-[20px] font-medium flex items-center">
          Q4. What types of assessments are offered?
        </div>
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          alt=""
          src={chevronDown2}
        />
      </div>
    </div>
  );
};

FAQ.propTypes = {
  className: PropTypes.string,
  chevronUp: PropTypes.string,
  chevronDown: PropTypes.string,
  chevronDown1: PropTypes.string,
  chevronDown2: PropTypes.string,
};

export default FAQ;
