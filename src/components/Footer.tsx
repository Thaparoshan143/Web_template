import { GiSelfLove } from 'react-icons/gi'

const Footer = () => {
  return (
    <footer className="w-full min-h-[10rem] flex flex-col justify-evenly items-center bg-theme text-white">
      <div className="my-[2rem]">Crafted with &nbsp; <GiSelfLove className="text-red-600 text-2xl font-bold inline"/> &nbsp; by Roshan Thapa</div>
      <span className="text-sm text-center font-light">Copyright © {new Date().getFullYear()} | All Right Reserved</span>
    </footer>
  )
}

export default Footer