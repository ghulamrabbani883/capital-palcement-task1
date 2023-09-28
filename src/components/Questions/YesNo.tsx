import  { useEffect, useId, useState } from 'react'
import { RxCross2 } from 'react-icons/rx';

const YesNo = ({
  handleSave,
  handleDelete,
  setQuestion,
  question
}: any) => {
  const qId = useId()

    const [yesNoQuestion, setYesNoQuestion] = useState("");
    const [disQualify,setDisQualify] = useState(false)
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
      setYesNoQuestion(e.target.value)
      setQuestion((prev: any) => {
        return { ...prev, id:qId, question: e.target.value };
      });
    }
    const handleDisqualify = (e:React.ChangeEvent<HTMLInputElement>)=>{
      setDisQualify(e.target.checked);
      setQuestion((prev: any) => {
        return { ...prev, disqualify: e.target.checked };
      });
    }
    useEffect(() => {
      if (question) {
        setYesNoQuestion(question.question);
        setDisQualify(question.disqualify)
      }
    }, [question]);
  return (
    <div className="w-full h-fit bg-white flex flex-col gap-5">
      <div className="">
        <p>Yes/No Question</p>
        <input
          className="w-full h-10 px-2 text-gray-800 font-normal outline-none border border-gray-800 rounded"
          type="text"
          name="paragraph"
          value={yesNoQuestion}
          onChange={handleChange}
          placeholder="Type here"
        />
      </div>
      <div className='flex gap-2'>
        <input name='disqualify' onChange={handleDisqualify} type='checkbox' checked={disQualify} />Disqualfy candidates if the answer is no
      </div>
      <div className="flex justify-between items-center">
      <div className="flex gap-3 items-center text-red-600 font-medium cursor-pointer" onClick={handleDelete}>
          <RxCross2 sze={20} />
          <span>Delete question</span>
        </div>
        <button className="w-36 h-8 rounded bg-hd text-white cursor-pointer" onClick={handleSave}>Save</button>
        </div>
    </div>
  )
}

export default YesNo
