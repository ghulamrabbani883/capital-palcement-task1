import { useRef, useState } from "react";
import { AiOutlineUpload } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineSave } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../app/store";
import { getAppState, updateData } from "../app/appSlice";

const CoverImage = () => {
  const [isSelectedFile, SetisSelectedFile] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const allInfo = useAppSelector(getAppState);
  let data = { data: allInfo };
  const dispatch = useAppDispatch();
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    files && SetisSelectedFile(URL.createObjectURL(files[0]));
  };

  const handleSaveImage = () => {
    const newData = {
      ...data,
      data: {
        ...data.data,
        attributes: {
          ...data.data.attributes,
          coverImage: isSelectedFile && isSelectedFile,
        },
      },
    };
    dispatch(updateData(newData));
  };
  return (
    <div className="w-[450px] h-fit rounded-lg bg-white pb-5">
      <div className="w-full h-10 bg-hd2 rounded-t-lg">
        <p className="inline-block align-middle ml-5 font-medium">
          Upload Cover Image
        </p>
      </div>
      {isSelectedFile ? (
        <div className="w-full h-[280px] pb-10">
          <img
            className="w-full h-full"
            src={isSelectedFile}
            alt={isSelectedFile}
          />
          <div className="flex justify-between items-center px-5">
            <p
              className="flex gap-3 items-center mt-5 text-red-600 font-medium cursor-pointer"
              onClick={() => SetisSelectedFile("")}
            >
              <RxCross2 sze={28} />
              <span>Delete & re-upload</span>
            </p>
            <p
              className="flex gap-3 items-center mt-5 text-green-600 font-medium cursor-pointer"
              onClick={handleSaveImage}
            >
              <AiOutlineSave sze={28} />
              <span>Save</span>
            </p>
          </div>
        </div>
      ) : (
        <div className="m-5 border-2 border-dotted border-gray-800 p-3">
          <div
            className="flex justify-center items-center flex-col gap-4"
            onClick={() => inputRef.current?.click()}
          >
            <AiOutlineUpload className="" size={28} />
            <b className="text-gray-900">Upload Cover Image</b>
            <p className="text-gray-600 font-medium text-md">
              16:9 ratio is recommended. Max image size 1mb
            </p>
          </div>
          <input
            type="file"
            id="coverImage"
            ref={inputRef}
            value={isSelectedFile}
            onChange={handleFileChange}
            accept="image/*"
            hidden
          />
        </div>
      )}
    </div>
  );
};

export default CoverImage;
