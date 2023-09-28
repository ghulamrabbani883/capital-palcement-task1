import { AiFillEdit } from "react-icons/ai";
import Paragraph from "./Paragraph";
import MultipleChoice from "./MultipleChoice";
import YesNo from "./YesNo";
import ShortAnswer from "./ShortAnswer";
import DateQuestion from "./DateQuestion";
import NumberQuestion from "./NumberQuestion";
import FileQuestion from "./FileQuestion";
import VideoQuestion from "./VideoQuestion";
import Dropdown from "./Dropdown";

const DisplayQuestion = ({ question, handleEdit, active, setQuestion }: any) => {
  return (
    <div className="w-full h-fit p-1 flex flex-col pt-3 mb-2 border-b border-gray-600 ">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-0">
          <span className="text-xs text-gray-600">{question?.type}</span>
          <span className="text-xl text-gray-900">{question?.question}</span>
        </div>
        <AiFillEdit
          className="cursor-pointer text-green-600"
          size={24}
          onClick={() => handleEdit(question.id)}
        />
      </div>
      {active === question.id && question.type === "Paragraph" && (
        <div className="">
          <Paragraph question={question} setQuestion={setQuestion}  />
        </div>
      )}
      {active === question.id && question.type === "Multiple choice" && (
        <div className="">
          <MultipleChoice question={question} setQuestion={setQuestion}  />
        </div>
      )}
      {active === question.id && question.type === "Yes/No" && (
        <div className="">
          <YesNo question={question} setQuestion={setQuestion}  />
        </div>
      )}
      {active === question.id && question.type === "Short answer" && (
        <div className="">
          <ShortAnswer question={question} setQuestion={setQuestion}  />
        </div>
      )}
      {active === question.id && question.type === "Date" && (
        <div className="">
          <DateQuestion question={question} setQuestion={setQuestion}  />
        </div>
      )}
      {active === question.id && question.type === "Number" && (
        <div className="">
          <NumberQuestion question={question} setQuestion={setQuestion}  />
        </div>
      )}
      {active === question.id && question.type === "Dropdown" && (
        <div className="">
          <Dropdown question={question} setQuestion={setQuestion}  />
        </div>
      )}
      {active === question.id && question.type === "File upload" && (
        <div className="">
          <FileQuestion question={question} setQuestion={setQuestion}  />
        </div>
      )}
      {active === question.id && question.type === "Video question" && (
        <div className="">
          <VideoQuestion question={question} setQuestion={setQuestion}  />
        </div>
      )}
    </div>
  );
};

export default DisplayQuestion;
