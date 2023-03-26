import Image from "next/image"
import Youtube from '../public/youtube.png'
import Facebook from '../public/facebook.png'
import Twitter from '../public/twitter.png'
import Link from "next/link"


const features = () => {
  return (
    <div className="flex bg-slate-100 space-x-6 md:justify-center p-6 px-4">
        
        <Link href="/">
            <div className="flex items-center space-x-3">
                <Image src={Youtube} width="" height='' alt="" className="h-10 w-10 object-cover rounded-full"/>
                <label className="block text-2xl">
                    Youtube
                </label>
            </div>
        </Link>

       
        <div className="flex items-center space-x-3">
            <Image src={Facebook} width="" height='' alt="" className="h-10 w-10 object-cover rounded-full"/>
            <label className="block text-2xl">
                Facebook
            </label>
        </div>
        <div className="flex items-center space-x-3">
            <Image src={Twitter} width="" height='' alt="" className="h-10 w-10 object-cover rounded-full"/>
            <label className="block text-2xl">
                Twitter
            </label>
        </div>
    </div>
  )
}

export default features