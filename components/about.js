import Image from "next/image"
import AboutImg from '../public/Abdul.jpg'

const about = () => {
  return (
    <section id="about" className="bg-slate-100 p-5">
        <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
            <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
                <Image src={AboutImg} width="400" height="300" alt="" className="rounded-full object-cover"/>
            </div>
            <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
                <p className="text-2xl">About Us</p>
                <h1 className="max-w-md text-3xl font-bold text-center md:text-5xl md:text-left">Boost Your Business With Us</h1>
                <p className="max-w-sm text-center text-slate-500 md:text-left">
                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                </p>
                <div className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-full w-1/3 cursor-pointer py-2 px-10 font-bold">
                    More Details...
                </div>
            </div>
        </div>
    </section>
  )
}

export default about