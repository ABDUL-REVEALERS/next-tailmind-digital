import Link from "next/link"
import Image from "next/image"
import Logo from '../public/logo.png'

const nav = () => {
  return (
    <nav className="relative container bg-slate-100 mx-auto p-6">
        <div className="flex items-center justify-between">
            <div className="pt-2">
                <Link href="/">
                    <div className="flex hover:text-slate-500">
                        <Image src={Logo} width="50" height="50" />
                        <h1 className="text-4xl font-bold">AUCODE</h1>
                    </div>
                </Link>
            </div>
            <div className="md:flex space-x-6 drop-shadow-xl">
                <Link href="/" className="text-xl hover:text-slate-500">Home</Link>
                <Link href="#about" className="text-xl hover:text-slate-500">About</Link>
                <Link href="#service" className="text-xl hover:text-slate-500">Services</Link>

                <button className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-full py-2 px-10 font-bold">
                    Contact
                </button>
            </div>
        </div>
    </nav>
  )
}

export default nav