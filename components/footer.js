import Image from "next/image"
import Link from "next/link"
import Logo from '../public/logo.png'
import Youtube from '../public/youtube.png'
import Facebook from '../public/facebook.png'
import Twitter from '../public/twitter.png'


const footer = () => {
  return (
    <footer className="bg-black">
        <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
            <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">

                <div className="flex hover:text-slate-500">
                    <Image src={Logo} width="50" height="50" alt=""/>
                    <h1 className="text-4xl text-white font-bold">AUCODE</h1>
                </div>
                <div className="flex justify-center space-x-4 p-5">
                    <Link href='/'><Image src={Facebook} width="" height="" alt="" className="h-8 w-8"/></Link>
                    <Link href='/'><Image src={Youtube} width="" height="" alt="" className="h-8 w-8"/></Link>
                    <Link href='/'><Image src={Twitter} width="" height="" alt="" className="h-8 w-8"/></Link>
                </div>

                <div className="mx-auto my-6 text-center text-white">
                    Copyright &copy; 2023, all Rights reserved
                </div>

            </div>
            <div className="flex justify-around space-x-32">
                <div className="flex flex-col space-y-3 text-white">
                    <Link href="/" className="text-xl hover:text-slate-500">
                        Home
                    </Link>
                    <Link href="#about" className="text-xl hover:text-slate-500">
                        About
                    </Link>
                    <Link href="#services" className="text-xl hover:text-slate-500">
                        Services
                    </Link>
                </div>
                <div className="flex flex-col space-y-3 text-white">
                    <Link href="/" className="text-xl hover:text-slate-500">
                        Careers
                    </Link>
                    <Link href="/" className="text-xl hover:text-slate-500">
                        Community
                    </Link>
                    <Link href="/" className="text-xl hover:text-slate-500">
                        Privacy Policy
                    </Link>
                </div>
            </div>
            <div className="flex flex-col justify-between">
                <form>
                    <div className="flex space-x-3">
                        <input type="text" className="flex-1 px-4 rounded-full focus:outline-none"
                        placeholder="Sign Up for NewsLetter"/>
                        <button className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-full py-2 px-10 font-bold">
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </footer>
  )
}

export default footer