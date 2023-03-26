import Image from "next/image"
import Webdesign from '../public/webdesign.jpg'
import Mobile from '../public/mobile.png'
import Cyber from '../public/cyber.jpg'

const services = () => {
  return (
    <section id="services" className="bg-slate-100 p-5">
        <div className="max-w-6xl px-5 mx-auto mt-10 text-center">
            <h2 className="text-4xl font-bold text-center">
                Our Services
            </h2>
            <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
                <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
                    <Image src={Webdesign} width="200px" height="200px" alt=""/>
                    <h5 className="text-lg font-bold">Website Design</h5>
                    <p>
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                    </p>
                </div>
                <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
                    <Image src={Mobile} width="200px" height="200px" alt=""/>
                    <h5 className="text-lg font-bold">Mobile Developemt</h5>
                    <p>
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                    </p>
                </div>
                <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
                    <Image src={Cyber} width="200px" height="200px" alt=""/>
                    <h5 className="text-lg font-bold">Cyber Security</h5>
                    <p>
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default services