import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";

const EditForm = ({ className = "" }) => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the challenge ID from the URL parameters
  const [challengeName, setChallengeName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [levelType, setLevelType] = useState("Easy");

  useEffect(() => {
    // Fetch the challenge data based on the ID
    const existingChallenges = JSON.parse(localStorage.getItem("challenges")) || [];
    console.log('Existing Challenges:', existingChallenges); // Debugging step
    const challenge = existingChallenges.find(challenge => challenge.id === id);
    if (challenge) {
      setChallengeName(challenge.challengeName);
      setStartDate(challenge.startDate);
      setEndDate(challenge.endDate);
      setDescription(challenge.description);
      setImage(challenge.image);
      setLevelType(challenge.levelType);
    } else {
      console.error('Challenge not found for ID:', id); // Debugging step
    }
  }, [id]);

  const onSaveClick = useCallback(() => {
    const existingChallenges = JSON.parse(localStorage.getItem("challenges")) || [];
    console.log('Before Update:', existingChallenges); // Debugging step
    const updatedChallenges = existingChallenges.map(challenge =>
      challenge.id === id ? {
        ...challenge,
        challengeName,
        startDate,
        endDate,
        description,
        image,
        levelType,
      } : challenge
    );
    console.log('Updated Challenges:', updatedChallenges); // Debugging step

    // Save the updated challenges back to localStorage
    localStorage.setItem("challenges", JSON.stringify(updatedChallenges));
    navigate("/");
  }, [navigate, challengeName, startDate, endDate, description, image, levelType, id]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[52px] box-border gap-[33px] leading-[normal] tracking-[normal] mq725:gap-4">
      <section className="self-stretch flex flex-col items-start justify-start py-0 px-0 box-border max-w-full text-left text-5xl text-black font-body-b3-regular">
        <div className="self-stretch bg-ghostwhite-100 overflow-hidden flex flex-row items-start justify-start pt-[41px] px-[89px] pb-[37px] z-[2] mq450:pl-5 mq450:pr-5 mq450:box-border">
          <b className="relative mq450:text-lgi">Edit Challenge</b>
        </div>
      </section>
      <section className="w-[995px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className={`w-[817px] flex flex-col items-start justify-start gap-[34px] max-w-full text-left text-base text-gray-1 font-body-b3-regular mq450:gap-[17px] ${className}`}>
          <div className="w-[453px] flex flex-col items-start justify-start gap-[19px] max-w-full">
            <div className="w-[163px] relative font-medium inline-block">Challenge Name</div>
            <input
              type="text"
              value={challengeName}
              onChange={(e) => setChallengeName(e.target.value)}
              className="self-stretch h-[39px] relative rounded-8xs border-silver-200 border-[1px] border-solid box-border"
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-[19px] max-w-full">
            <div className="w-[163px] relative font-medium inline-block">Start Date</div>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="rounded-8xs border-silver-200 border-[1px] border-solid box-border flex flex-row items-start justify-between pt-1.5 pb-[5px] pl-5 pr-[25px] max-w-full gap-5 z-[1] text-gray"
            />
          </div>
          <div className="w-[453px] flex flex-col items-start justify-start pt-0 px-0 pb-2.5 box-border gap-[19px] max-w-full">
            <div className="w-[163px] relative font-medium inline-block">End Date</div>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="self-stretch rounded-8xs border-silver-200 border-[1px] border-solid box-border flex flex-row items-start justify-between pt-1.5 pb-[5px] pl-5 pr-[25px] max-w-full gap-5 z-[1] text-gray"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2.5 box-border gap-[19px] max-w-full">
            <div className="w-[163px] relative font-medium inline-block">Description</div>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="self-stretch h-[252px] relative rounded-8xs border-silver-200 border-[1px] border-solid box-border"
            />
          </div>
          <div className="w-[236px] flex flex-col items-start justify-start pt-0 px-0 pb-3 box-border gap-[41px]">
            <div className="flex flex-col items-start justify-start gap-[19px]">
              <div className="w-[186px] relative font-medium inline-block">Image</div>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0]?.name || "")}
                className="rounded-8xs bg-whitesmoke-100 border-gainsboro-200 border-[1px] border-solid flex flex-row items-start justify-start pt-[11px] px-[72px] pb-2.5 gap-0.5 text-lg text-dimgray"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[19px]">
              <div className="w-[163px] relative font-medium inline-block">Level Type</div>
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
            className="rounded-3xs bg-dphigreen flex flex-row items-start justify-start py-[12.5px] px-[45px] gap-2.5 cursor-pointer text-center text-lg text-white"
            onClick={onSaveClick}
          >
            <div className="relative leading-[21px] font-medium inline-block min-w-[124px]">Save Changes</div>
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
