import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";

const DateQuestion = ({
  handleSave,
  handleDelete,
  setQuestion,
  question
}: any) => {
  const [dateQuestion, setDateQuestion] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateQuestion(e.target.value);
    setQuestion((prev: any) => {
      return { ...prev, question: e.target.value };
    });
  };
  useEffect(() => {
    if (question) {
      setDateQuestion(question.question);
    }
  }, [question]);
  return (
    <div className="w-full h-fit bg-white flex flex-col gap-5">
      <div className="">
        <p>Date Question</p>
        <input
          className="w-full h-10 px-2 text-gray-800 font-normal outline-none border border-gray-800 rounded"
          type="text"
          name="paragraph"
          value={dateQuestion}
          onChange={handleChange}
          placeholder="Type here"
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

export default DateQuestion;
