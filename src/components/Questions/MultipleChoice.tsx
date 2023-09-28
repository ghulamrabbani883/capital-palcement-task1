import { useEffect, useId, useState } from "react";
import { AiOutlineMenuFold, AiOutlinePlus } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import Choice from "./Choice";

const MultipleChoice = ({ handleSave, handleDelete, setQuestion,question }: any) => {
  const qId = useId()

  const [multipleChoiceQuestion, setMultipleChoiceQuestion] = useState("");
  const [multipleChoiceOption, setMultipleChoiceOption] = useState<string[]>(
    []
  );
  const [enable, setEnable] = useState(false);
  const [maxChoice, setMaxChoice] = useState("0");
  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMultipleChoiceQuestion(e.target.value);
    setQuestion((prev: any) => {
      return { ...prev, id:qId, question: e.target.value };
    });
  };
  const handleEnable = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnable(e.target.checked);
    setQuestion((prev: any) => {
      return { ...prev, other: e.target.checked };
    });
  };
  const handleMaxChoice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxChoice(e.target.value);
    setQuestion((prev: any) => {
      return { ...prev, maxChoice: e.target.value };
    });
  };
  const handleChoiceAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMultipleChoiceOption((prev) => {
      return [...prev, e.target.value];
    });
    setQuestion((prev: any) => {
      return { ...prev, choices: multipleChoiceOption };
    });
  };
  useEffect(() => {
    if (question) {
      setMultipleChoiceQuestion(question.question);
    }
  }, [question]);
  return (
    <div className="w-full h-fit bg-white flex flex-col gap-5">
      <div className="">
        <p>Multiple Choice Question</p>
        <input
          className="w-full h-10 px-2 text-gray-800 font-normal outline-none border border-gray-800 rounded"
          type="text"
          value={multipleChoiceQuestion}
          onChange={handleQuestionChange}
          placeholder="Type here"
        />
      </div>

      <div className="flex justify-between">
        <AiOutlineMenuFold size={28} />
        <Choice />
        <AiOutlinePlus size={28} onClick={handleChoiceAdd} />
      </div>

      <div className="flex gap-2">
        <input onChange={handleEnable} type="checkbox" checked={enable} />
        Enable "Other" option
      </div>
      <div className="flex gap-2">
        <input
          className="w-full h-10 px-2 text-gray-800 font-normal outline-none border border-gray-800 rounded"
          type="number"
          value={maxChoice}
          onChange={handleMaxChoice}
          placeholder="Enter max choice allowed"
        />
      </div>
      <div className="flex justify-between items-center">
        <div
          className="flex gap-3 items-center text-red-600 font-medium cursor-pointer"
          onClick={handleDelete}
        >
          <RxCross2 sze={20} />
          <span>Delete question</span>
        </div>
        <button
          className="w-36 h-8 rounded bg-hd text-white cursor-pointer"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default MultipleChoice;
