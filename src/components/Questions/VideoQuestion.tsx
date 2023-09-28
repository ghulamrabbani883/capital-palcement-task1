import { useEffect, useId, useState } from "react";
import { RxCross2 } from "react-icons/rx";

const VideoQuestion = ({
  handleSave,
  handleDelete,
  setQuestion,
  question
}: any) => {
  const qId = useId()

  const [videoQuestion, setVideoQuestion] = useState("");
  const [videoDescription, setVideoDescription] = useState("");
  const [videoDuration, setVideoDuration] = useState("");
  const [durationType, setDurationType] = useState("");
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setVideoQuestion(e.target.value)
    setQuestion((prev: any) => {
      return { ...prev, id:qId, question: e.target.value };
    });
  }
  const handleVideoDescription = (e:React.ChangeEvent<HTMLTextAreaElement>)=>{
    setVideoDescription(e.target.value)
    setQuestion((prev: any) => {
      return { ...prev, videoDescription:e.target.value };
    });
  }
  const handleVideoDuration = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setVideoDuration(e.target.value)
    setQuestion((prev: any) => {
      return { ...prev, videoDuration:e.target.value };
    });
  }
  const handleVideoDurationType = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setDurationType(e.target.value)
    setQuestion((prev: any) => {
      return { ...prev, videoDurationType:e.target.value };
    });
  }
  useEffect(() => {
    if (question) {
      setVideoQuestion(question.question);
      setVideoDuration(question.videoDuration)
      setVideoDescription(question.videoDescription)
      setDurationType(question.videoDurationType)
    }
  }, [question]);
  return (
    <div className="w-full h-fit bg-white flex flex-col gap-5">
      <div className="">
        <p>Video Question</p>
        <input
          className="w-full h-10 px-2 text-gray-800 font-normal outline-none border border-gray-800 rounded"
          type="text"
          name="videoQuestion"
          value={videoQuestion}
          onChange={handleChange}
          placeholder="Type here"
        />
      </div>
      <div className="">
        <textarea
          className="w-full outline-none px-2 text-gray-800 font-normal border border-gray-800 rounded"
          value={videoDescription}
          rows={3}
          onChange={handleVideoDescription}
          placeholder="Type here"
        ></textarea>
      </div>
      <div className="flex justify-between gap-2">
        <input
          className="w-full h-10 px-2 text-gray-800 font-normal outline-none border border-gray-800 rounded"
          type="number"
          value={videoDuration}
          onChange={handleVideoDuration}
          placeholder="Max duration of video"
        />
        <input
          className="w-full h-10 px-2 text-gray-800 font-normal outline-none border border-gray-800 rounded"
          type="text"
          name="durationType"
          value={durationType}
          onChange={handleVideoDurationType}
          placeholder="type Minutes / Seconds"
        />
      </div>
      <div className="flex justify-between items-center">
      <div className="flex gap-3 items-center text-red-600 font-medium cursor-pointer" onClick={handleDelete}>
          <RxCross2 sze={20} />
          <span>Delete question</span>
        </div>
        <button className="w-36 h-8 rounded bg-hd text-white cursor-pointer" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default VideoQuestion;
