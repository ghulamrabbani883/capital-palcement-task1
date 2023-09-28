import { LiaToggleOnSolid, LiaToggleOffSolid } from "react-icons/lia";
import AddQuestion from "./AddQuestion";
import { getAppState, getProfile, updateData } from "../app/appSlice";
import { useAppDispatch, useAppSelector } from "../app/store";
import { useState } from "react";
import DisplayQuestion from "./Questions/DisplayQuestion";
import { handleProfileCheck, handleProfileToggle } from "../utils/utilProfile";

const Profile = () => {
  const profileInfo = useAppSelector(getProfile);
  const allInfo = useAppSelector(getAppState);
  let data = { data: allInfo };
  const dispatch = useAppDispatch();
  const [isAdding, setIsAdding] = useState(false);
  const [active, setActive] = useState("-1");

  const [question, setQuestion] = useState({
    id: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    type: "",
    question: "",
    choices: [],
    maxChoice: 0,
    disqualify: false,
    other: false,
  });

  const handleSave = () => {
    const newData = {
      ...data,
      data: {
        ...data.data,
        attributes: {
          ...data.data.attributes,
          profile: {
            ...data.data.attributes.profile,
            profileQuestions: [
              ...data.data.attributes.profile.profileQuestions,
              question,
            ],
          },
        },
      },
    };
    dispatch(updateData(newData));
    setIsAdding(false);
    setQuestion({
      id: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      type: "",
      question: "",
      choices: [],
      maxChoice: 0,
      disqualify: false,
      other: false,
    });
  };
  const handleEdit = (id: string) => {
    setActive(id)
  };
  const handleDelete = () => {
    setIsAdding(false);
  };

  return (
    <div className="w-[450px] h-fit rounded-lg bg-white pb-5">
      <div className="w-full h-10 bg-hd2 rounded-t-lg">
        <p className="inline-block align-middle ml-5 font-medium">Profile</p>
      </div>
      <div className="flex flex-col gap-3 m-5">
        <div className="flex justify-between border-b pb-2 border-b-gray-600">
          <b className="w-2/4">Education</b>
          <div className="w-1/4 flex gap-2">
            <input
              type="checkbox"
              checked={profileInfo.education.mandatory}
              onChange={() => handleProfileCheck("education", data, dispatch)}
            />
            Mandatory
          </div>
          {profileInfo.education.show ? (
            <div className="w-1/4 flex gap-2">
              <LiaToggleOnSolid
                onClick={() => handleProfileToggle("education", data, dispatch)}
                className="cursor-pointer text-hd"
                size={24}
              />
              show
            </div>
          ) : (
            <div className="w-1/4 flex gap-2">
              <LiaToggleOffSolid
                onClick={() => handleProfileToggle("education", data, dispatch)}
                className="cursor-pointer"
                size={24}
              />
              hide
            </div>
          )}
        </div>
        <div className="flex justify-between border-b pb-2 border-b-gray-600">
          <b className="w-2/4">Experience </b>
          <div className="w-1/4 flex gap-2">
            <input
              type="checkbox"
              checked={profileInfo.experience.mandatory}
              onChange={() => handleProfileCheck("experience", data, dispatch)}
            />
            Mandatory
          </div>
          {profileInfo.experience.show ? (
            <div className="w-1/4 flex gap-2">
              <LiaToggleOnSolid
                onClick={() =>
                  handleProfileToggle("experience", data, dispatch)
                }
                className="cursor-pointer text-hd"
                size={24}
              />
              show
            </div>
          ) : (
            <div className="w-1/4 flex gap-2">
              <LiaToggleOffSolid
                onClick={() =>
                  handleProfileToggle("experience", data, dispatch)
                }
                className="cursor-pointer"
                size={24}
              />
              hide
            </div>
          )}
        </div>
        <div className="flex justify-between border-b pb-2 border-b-gray-600">
          <b className="w-2/4">Resume </b>
          <div className="w-1/4 flex gap-2">
            <input
              type="checkbox"
              checked={profileInfo.resume.mandatory}
              onChange={() => handleProfileCheck("resume", data, dispatch)}
            />
            Mandatory
          </div>
          {profileInfo.resume.show ? (
            <div className="w-1/4 flex gap-2">
              <LiaToggleOnSolid
                onClick={() => handleProfileToggle("resume", data, dispatch)}
                className="cursor-pointer text-hd"
                size={24}
              />
              show
            </div>
          ) : (
            <div className="w-1/4 flex gap-2">
              <LiaToggleOffSolid
                onClick={() => handleProfileToggle("resume", data, dispatch)}
                className="cursor-pointer"
                size={24}
              />
              hide
            </div>
          )}
        </div>
        {data.data.attributes.profile.profileQuestions?.length > 1 && (
          <div className=" mt-2 pb-2 ">
            {data.data.attributes.profile.profileQuestions?.map(
              (quest: any, index: number) => {
                
                return (
                  <DisplayQuestion
                    question={quest}
                    handleEdit={handleEdit}
                    active={active}
                    setQuestion={setQuestion}
                    key={index}
                  />
                );
              }
            )}
          </div>
        )}
        <AddQuestion
          isAdding={isAdding}
          setIsAdding={setIsAdding}
          handleSave={handleSave}
          handleDelete={handleDelete}
          question={question}
          setQuestion={setQuestion}
        />
      </div>
    </div>
  );
};

export default Profile;
