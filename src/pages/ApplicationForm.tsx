import AdditionalQuestions from "../components/AdditionalQuestions"
import CoverImage from "../components/CoverImage"
import PersonalInfo from "../components/PersonalInfo"
import Profile from "../components/Profile"

const ApplicationForm = () => {
  return (
    <div className="w-full h-fit flex flex-col gap-5 py-10 px-16">
      <CoverImage />
      <PersonalInfo />
      <Profile />
      <AdditionalQuestions />
    </div>
  )
}

export default ApplicationForm
