import { LiaToggleOnSolid, LiaToggleOffSolid } from "react-icons/lia";
import AddQuestion from "./AddQuestion";
import { useAppDispatch, useAppSelector } from "../app/store";
import { getAppState, getPersonalInfo, updateData } from "../app/appSlice";
import {  useState } from "react";
import {
  handlePersonalInfoCheck,
  handlePersonalInfoToggle,
} from "./../utils/utilPersonalInfo";
import DisplayQuestion from "./Questions/DisplayQuestion";

const PersonalInfo = () => {
  const personalInfo = useAppSelector(getPersonalInfo);
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

  const handleEdit = (id: string) => {
    setActive(id)
  };

  const handleSave = () => {
    const newData = {
      ...data,
      data: {
        ...data.data,
        attributes: {
          ...data.data.attributes,
          personalInformation: {
            ...data.data.attributes.personalInformation,
            personalQuestions: [
              ...data.data.attributes.personalInformation.personalQuestions,
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
  const handleDelete = () => {
    setIsAdding(false);
  };

  return (
    <div className="w-[450px] h-fit rounded-lg bg-white pb-5">
      <div className="w-full h-10 bg-hd2 rounded-t-lg">
        <p className="inline-block align-middle ml-5 font-medium">
          Personal Information
        </p>
      </div>
      <div className="flex flex-col gap-3 m-5">
        <div className="flex justify-between border-b pb-2 border-b-gray-600">
          <b>First Name</b>
          <p></p>
        </div>
        <div className="flex justify-between border-b pb-2 border-b-gray-600">
          <b>Last Name</b>
          <p></p>
        </div>
        <div className="flex justify-between border-b pb-2 border-b-gray-600">
          <b>Email</b>
          <p></p>
        </div>
        <div className="flex justify-between border-b pb-2 border-b-gray-600">
          <b className="w-2/4">
            Phone
            <span className="text-gray-700 font-light">
              (without dial code)
            </span>
          </b>
          <div className="w-1/4 flex gap-2">
            <input
              type="checkbox"
              checked={personalInfo.phoneNumber.internalUse}
              onChange={() =>
                handlePersonalInfoCheck("phoneNumber", data, dispatch)
              }
            />
            internal
          </div>
          {personalInfo.phoneNumber.show ? (
            <div className="w-1/4 flex gap-2">
              <LiaToggleOnSolid
                onClick={() =>
                  handlePersonalInfoToggle("phoneNumber", data, dispatch)
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
                  handlePersonalInfoToggle("phoneNumber", data, dispatch)
                }
                className="cursor-pointer"
                size={24}
              />
              hide
            </div>
          )}
        </div>
        <div className="flex justify-between border-b pb-2 border-b-gray-600">
          <b className="w-2/4">Nationality </b>
          <div className="w-1/4 flex gap-2">
            <input
              type="checkbox"
              checked={personalInfo.nationality.internalUse}
              onChange={() =>
                handlePersonalInfoCheck("nationality", data, dispatch)
              }
            />
            internal
          </div>
          {personalInfo.nationality.show ? (
            <div className="w-1/4 flex gap-2">
              <LiaToggleOnSolid
                onClick={() =>
                  handlePersonalInfoToggle("nationality", data, dispatch)
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
                  handlePersonalInfoToggle("nationality", data, dispatch)
                }
                className="cursor-pointer"
                size={24}
              />
              hide
            </div>
          )}
        </div>
        <div className="flex justify-between border-b pb-2 border-b-gray-600">
          <b className="w-2/4">Current Residence </b>
          <div className="w-1/4 flex gap-2">
            <input
              type="checkbox"
              checked={personalInfo.currentResidence.internalUse}
              onChange={() =>
                handlePersonalInfoCheck("currentResidence", data, dispatch)
              }
            />
            internal
          </div>
          {personalInfo.currentResidence.show ? (
            <div className="w-1/4 flex gap-2">
              <LiaToggleOnSolid
                onClick={() =>
                  handlePersonalInfoToggle("currentResidence", data, dispatch)
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
                  handlePersonalInfoToggle("currentResidence", data, dispatch)
                }
                className="cursor-pointer"
                size={24}
              />
              hide
            </div>
          )}
        </div>
        <div className="flex justify-between border-b pb-2 border-b-gray-600">
          <b className="w-2/4">Id Number </b>
          <div className="w-1/4 flex gap-2">
            <input
              type="checkbox"
              checked={personalInfo.idNumber.internalUse}
              onChange={() =>
                handlePersonalInfoCheck("idNumber", data, dispatch)
              }
            />
            internal
          </div>
          {personalInfo.idNumber.show ? (
            <div className="w-1/4 flex gap-2">
              <LiaToggleOnSolid
                onClick={() =>
                  handlePersonalInfoToggle("idNumber", data, dispatch)
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
                  handlePersonalInfoToggle("idNumber", data, dispatch)
                }
                className="cursor-pointer"
                size={24}
              />
              hide
            </div>
          )}
        </div>
        <div className="flex justify-between border-b pb-2 border-b-gray-600">
          <b className="w-2/4">Date of Birth </b>
          <div className="w-1/4 flex gap-2">
            <input
              type="checkbox"
              checked={personalInfo.dateOfBirth.internalUse}
              onChange={() =>
                handlePersonalInfoCheck("dateOfBirth", data, dispatch)
              }
            />
            internal
          </div>
          {personalInfo.dateOfBirth.show ? (
            <div className="w-1/4 flex gap-2">
              <LiaToggleOnSolid
                onClick={() =>
                  handlePersonalInfoToggle("dateOfBirth", data, dispatch)
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
                  handlePersonalInfoToggle("dateOfBirth", data, dispatch)
                }
                className="cursor-pointer"
                size={24}
              />
              hide
            </div>
          )}
        </div>
        <div className="flex justify-between border-b pb-2 border-b-gray-600">
          <b className="w-2/4">Gender</b>
          <div className="w-1/4 flex gap-2">
            <input
              type="checkbox"
              checked={personalInfo.gender.internalUse}
              onChange={() => handlePersonalInfoCheck("gender", data, dispatch)}
            />
            internal
          </div>
          {personalInfo.gender.show ? (
            <div className="w-1/4 flex gap-2">
              <LiaToggleOnSolid
                onClick={() =>
                  handlePersonalInfoToggle("gender", data, dispatch)
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
                  handlePersonalInfoToggle("gender", data, dispatch)
                }
                className="cursor-pointer"
                size={24}
              />
              hide
            </div>
          )}
        </div>
        {data.data.attributes.personalInformation.personalQuestions?.length > 1 && (
          <div className="mt-2 pb-2 ">
            {data.data.attributes.personalInformation.personalQuestions?.map(
              (quest: any, index:number) => {
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

export default PersonalInfo;
