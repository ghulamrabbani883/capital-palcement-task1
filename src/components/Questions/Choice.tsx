import { useState } from "react";

const Choice = () => {
    const [choice, setChoice] = useState("");
    return (
      <div className="">
        <input
        className="w-full h-10 outline-none border border-gray-800 font-normal rounded px-2"
          type="text"
          name="choice"
          value={choice}
          onChange={(e) => setChoice(e.target.value)}
          placeholder="Type here"
        />
      </div>
    );
}

export default Choice
