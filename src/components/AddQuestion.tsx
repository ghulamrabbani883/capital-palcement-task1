import { AiOutlinePlus } from "react-icons/ai";
import Paragraph from "./Questions/Paragraph";
import ShortAnswer from "./Questions/ShortAnswer";
import Dropdown from "./Questions/Dropdown";
import MultipleChoice from "./Questions/MultipleChoice";
import YesNo from "./Questions/YesNo";
import VideoQuestion from "./Questions/VideoQuestion";
import FileQuestion from "./Questions/FileQuestion";
import DateQuestion from "./Questions/DateQuestion";
import NumberQuestion from "./Questions/NumberQuestion";

const AddQuestion = ({
  isAdding,
  setIsAdding,
  handleSave,
  handleDelete,
  question,
  setQuestion,
}: any) => {
  const questions: string[] = [
    "Paragraph",
    "Short answer",
    "Yes/No",
    "Dropdown",
    "Multiple choice",
    "Date",
    "Number",
    "File upload",
    "Video question",
  ];
  return (
    <div className="w-full h-fit bg-white flex flex-col gap-5 mt-5">
      {isAdding && (
        <div className="w-full h-fit">
          <select
            className="w-full h-10 px-3 outline-none rounded border border-gray-800 text-gray-800 font-medium"
            value={question}
            onChange={(e) =>
              setQuestion((prev: any) => {
                return { ...prev, type: e.target.value };
              })
            }
          >
            <option>Choose questions type</option>
            {questions?.map((question, index) => (
              <option
                key={index}
                className="font-normal text-gray-700"
                value={question}
              >
                {question}
              </option>
            ))}
          </select>
        </div>
      )}

      {question?.type === "Short answer" && isAdding && (
        <ShortAnswer
          handleSave={handleSave}
          handleDelete={handleDelete}
          
          setQuestion={setQuestion}
        />
      )}
      {question?.type === "Paragraph" && isAdding && (
        <Paragraph
          handleSave={handleSave}
          handleDelete={handleDelete}
          
          setQuestion={setQuestion}
        />
      )}
      {question?.type === "Dropdown" && isAdding && (
        <Dropdown
          handleSave={handleSave}
          handleDelete={handleDelete}
          
          setQuestion={setQuestion}
        />
      )}
      {question?.type === "Multiple choice" && isAdding && (
        <MultipleChoice
          handleSave={handleSave}
          handleDelete={handleDelete}
          
          setQuestion={setQuestion}
        />
      )}
      {question?.type === "Yes/No" && isAdding && (
        <YesNo
          handleSave={handleSave}
          handleDelete={handleDelete}
          
          setQuestion={setQuestion}
        />
      )}
      {question?.type === "Video question" && isAdding && (
        <VideoQuestion
          handleSave={handleSave}
          handleDelete={handleDelete}
          
          setQuestion={setQuestion}
        />
      )}
      {question?.type === "File upload" && isAdding && (
        <FileQuestion
          handleSave={handleSave}
          handleDelete={handleDelete}
          
          setQuestion={setQuestion}
        />
      )}
      {question?.type === "Date" && isAdding && (
        <DateQuestion
          handleSave={handleSave}
          handleDelete={handleDelete}
          
          setQuestion={setQuestion}
        />
      )}
      {question?.type === "Number" && isAdding && (
        <NumberQuestion
          handleSave={handleSave}
          handleDelete={handleDelete}
          
          setQuestion={setQuestion}
        />
      )}

      <div
        className="w-full h-16 flex gap-3 items-center cursor-pointer"
        onClick={() => setIsAdding(!isAdding)}
      >
        <AiOutlinePlus size={20} />
        <p>Add Questions</p>
      </div>
    </div>
  );
};

export default AddQuestion;
