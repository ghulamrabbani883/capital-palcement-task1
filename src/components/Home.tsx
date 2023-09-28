import { useEffect } from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import { fetchData } from "../app/appSlice"
import { useAppDispatch } from "../app/store"

const Home = () => {
  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(fetchData());
  },[])
  return (
    <div className="w-full min-h-screen flex gap-2">
      <div className="w-[15%] fixed top-0 left-0">
        <Sidebar />
      </div>
      <div className="w-[85%] ml-[15%]">
        <Navbar  />
      </div>
    </div>
  )
}

export default Home
