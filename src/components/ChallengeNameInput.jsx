import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const ChallengeNameInput = ({ className = "" }) => {
  const navigate = useNavigate();
  
  const [challengeName, setChallengeName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [levelType, setLevelType] = useState("Easy");

  const onButtonContainerClick = useCallback(() => {
    const challengeData = {
      challengeName,
      startDate,
      endDate,
      description,
      image,
      levelType,
    };

    // Store the challenge data in localStorage
    const existingChallenges = JSON.parse(localStorage.getItem("challenges")) || [];
    existingChallenges.push(challengeData);
    localStorage.setItem("challenges", JSON.stringify(existingChallenges));

    navigate("/");
  }, [navigate, challengeName, startDate, endDate, description, image, levelType]);

  return (
    <div
      className={`w-[817px] flex flex-col items-start justify-start gap-11 max-w-full text-left text-base text-gray-1 font-body-b3-regular mq450:gap-[22px] ${className}`}
    >
      <div className="w-[453px] flex flex-col items-start justify-start gap-[34px] max-w-full mq450:gap-[17px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[19px]">
          <div className="w-[163px] relative font-medium inline-block">
            Challenge Name
          </div>
          <input
            type="text"
            value={challengeName}
            onChange={(e) => setChallengeName(e.target.value)}
            className="self-stretch h-[39px] relative rounded-8xs border-silver-200 border-[1px] border-solid box-border"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[19px] max-w-full">
          <div className="w-[163px] relative font-medium inline-block">
            Start Date
          </div>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="self-stretch rounded-8xs border-silver-200 border-[1px] border-solid box-border flex flex-row items-start justify-between pt-1.5 pb-[5px] pl-5 pr-[25px] max-w-full gap-5 z-[1] text-gray"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[19px] max-w-full">
          <div className="w-[163px] relative font-medium inline-block">
            End Date
          </div>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="self-stretch rounded-8xs border-silver-200 border-[1px] border-solid box-border flex flex-row items-start justify-between pt-1.5 pb-[5px] pl-5 pr-[25px] max-w-full gap-5 z-[1] text-gray"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[19px]">
        <div className="w-[163px] relative font-medium inline-block">
          Description
        </div>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="self-stretch h-[252px] relative rounded-8xs border-silver-200 border-[1px] border-solid box-border"
        />
      </div>
      <div className="w-[236px] flex flex-col items-start justify-start pt-0 px-0 pb-3 box-border gap-[41px]">
        <div className="flex flex-col items-start justify-start gap-[19px]">
          <div className="w-[186px] relative font-medium inline-block">
            Image
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0]?.name || "")}
            className="rounded-8xs bg-whitesmoke-100 border-gainsboro-200 border-[1px] border-solid flex flex-row items-start justify-start pt-[11px] px-[72px] pb-2.5 gap-0.5 text-lg text-dimgray"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[19px]">
          <div className="w-[163px] relative font-medium inline-block">
            Level Type
          </div>
          <select
            value={levelType}
            onChange={(e) => setLevelType(e.target.value)}
            className="self-stretch rounded-8xs border-silver-200 border-[1px] border-solid flex flex-row items-start justify-between py-[7px] pl-[21px] pr-[22px] gap-5 z-[1] text-sm"
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
      </div>
      <div
        className="rounded-3xs bg-dphigreen flex flex-row items-start justify-start py-[12.5px] px-8 gap-2.5 cursor-pointer text-center text-lg text-white"
        onClick={onButtonContainerClick}
      >
        <div className="relative leading-[21px] font-medium">
          Create Challenge
        </div>
      </div>
    </div>
  );
};

ChallengeNameInput.propTypes = {
  className: PropTypes.string,
};

export default ChallengeNameInput;
