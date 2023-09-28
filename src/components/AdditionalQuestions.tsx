import { useState } from "react";
import { getAppState, getCustomQuestion, updateData } from "../app/appSlice";
import { useAppDispatch, useAppSelector } from "../app/store";
import AddQuestion from "./AddQuestion";
import DisplayQuestion from "./Questions/DisplayQuestion";

const AdditionalQuestions = () => {
  const additionalQuestion = useAppSelector(getCustomQuestion);
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
  const handleEdit = (id:string) => {
    setActive(id)
  };

  const handleSave = () => {
    const newData = {
      ...data,
      data: {
        ...data.data,
        attributes: {
          ...data.data.attributes,
          customisedQuestions: [
            ...data.data.attributes.customisedQuestions,
            question,
          ],
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
          Additional Questions
        </p>
      </div>
      <div className="flex flex-col gap-3 m-5">
        {additionalQuestion?.length > 1 && (
          <div className="border-b mt-2 pb-2 border-b-gray-600">
            {additionalQuestion?.map((quest: any, index:number) => {
              return (
                <DisplayQuestion
                  question={quest}
                  handleEdit={handleEdit}
                  active={active}
                  setQuestion={setQuestion}
                  key={index}
                />
              );
            })}
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

export default AdditionalQuestions;
