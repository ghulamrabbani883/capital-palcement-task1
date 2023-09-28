import { useState } from "react";
import ProgramDetails from "../pages/ProgramDetails";
import ApplicationForm from "../pages/ApplicationForm";
import WorkFlow from "../pages/WorkFlow";
import Preview from "../pages/Preview";

const Navbar = () => {
  const [active, setActive] = useState("application-form");
  return (
    <nav className="w-full h-fit">
      <div className="w-full h-16 bg-white mb-1"></div>
      <div className="w-full h-16 bg-white flex justify-between items-center">
        <p
          onClick={() => setActive("program")}
          className={`flex-1 h-full flex items-center justify-center cursor-pointer border-r-2 border-r-gray-500 ${
            active === "program" ? "bg-hd text-white " : ""
          }`}
        >
          Program Details
        </p>
        <p
          onClick={() => setActive("application-form")}
          className={`flex-1 h-full flex items-center justify-center cursor-pointer border-r-2 border-r-gray-500 ${
            active === "application-form" ? "bg-hd text-white" : ""
          }`}
        >
          Application form
        </p>
        <p
          onClick={() => setActive("workflow")}
          className={`flex-1 h-full flex items-center justify-center cursor-pointer border-r-2 border-r-gray-500 ${
            active === "workflow" ? "bg-hd text-white" : ""
          }`}
        >
          WorkFlow
        </p>
        <p
          onClick={() => setActive("preview")}
          className={`flex-1 h-full flex items-center justify-center cursor-pointer ${
            active === "preview" ? "bg-hd text-white" : ""
          }`}
        >
          Preview
        </p>
      </div>
      <div className="w-full h-fit">
        {active === "program" && <ProgramDetails />}
        {active === "application-form" && <ApplicationForm />}
        {active === "workflow" && <WorkFlow />}
        {active === "preview" && <Preview />}
      </div>
    </nav>
  );
};

export default Navbar;
