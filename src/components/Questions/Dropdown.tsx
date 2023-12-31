import { useEffect, useId, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineMenuFold, AiOutlinePlus } from "react-icons/ai";
import Choice from "./Choice";

const Dropdown = ({ handleSave, handleDelete, setQuestion, question }: any) => {
  const qId = useId()

  const [dropdownQuestion, setDropdownQuestion] = useState("");
  const [dropdownOption, setDropdownOption] = useState<string[]>([]);
  const [enable, setEnable] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDropdownQuestion(e.target.value);
    setQuestion((prev: any) => {
      return { ...prev,id:qId, question: e.target.value };
    });
  };

  const handleChoiceAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDropdownOption((prev) => {
      return [...prev, e.target.value];
    });
    setQuestion((prev: any) => {
      return { ...prev, choices: dropdownOption };
    });
  };
  const handleEnable = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnable(e.target.checked);
    setQuestion((prev: any) => {
      return { ...prev, other: e.target.checked };
    });
  };
  useEffect(() => {
    if (question) {
      setDropdownQuestion(question.question);
      setEnable(question.other)
    }
  }, [question]);


  return (
    <div className="w-full h-fit bg-white flex flex-col gap-5">
      <div className="">
        <p>Dropdown Question</p>
        <input
          className="w-full h-10 px-2 text-gray-800 font-normal outline-none border border-gray-800 rounded"
          type="text"
          name="paragraph"
          value={dropdownQuestion}
          onChange={handleChange}
          placeholder="Type here"
        />
      </div>
      <div className="">
        <p className="font-medium ml-28">Choice</p>
        <div className="flex justify-between items-center">
          <AiOutlineMenuFold size={28} />
          <Choice />
          <AiOutlinePlus size={28} onClick={handleChoiceAdd} />
        </div>
      </div>
      <div className="flex gap-2">
        <input
          name="enable"
          onChange={handleEnable}
          type="checkbox"
          checked={enable}
        />
        Enable "Other" option
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

export default Dropdown;
