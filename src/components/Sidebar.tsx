import {AiOutlineHome, AiOutlineMenu} from 'react-icons/ai'
import {BiFoodMenu} from 'react-icons/bi'
const Sidebar = () => {
  return (
    <div className="w-full h-screen py-5 px-2 bg-white z-9 shadow-sm flex flex-col gap-10 justify-start items-center">
      <div className=''>
        <AiOutlineMenu className="cursor-pointer" size={32} />
      </div>
      <div className='flex flex-col gap-5'>
          <AiOutlineHome className="cursor-pointer hover:text-hd hover:scale-105 transition-all duration-150" size={28} />
          <BiFoodMenu className="cursor-pointer hover:text-hd hover:scale-105 transition-all duration-150" size={28} />
      </div>
    </div>
  )
}

export default Sidebar
