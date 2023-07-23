import './Landing.css'
import Arrow from '../../assets/arrow.png'
export default function Landing() {
    return (
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-40">
            <div className="text-center relative">
                <h1 className="text-4xl font-bold line-height  text-gray-900 sm:text-6xl">
                    Generate and Publish <span className='text-blue-600 border-solid  border-indigo-600 my-span'>
                        Dynamic
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span> QR Codes.
                </h1>
                <p className="w-4/5	mx-auto mt-6 text-base text-gray-400 text-center">
                    Scan Qr  is a dynamic QR code generator. It allows users to eadily create customized QR codes for sharing or embedding on thier website.
                </p>
                <div>
                    <img src={Arrow} className="absolute w-28 left-12 bottom-1.5 my-img" />
                </div>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                        href="#preview"
                        className="rounded-md bg-blue-600 px-5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-blue-500		focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Get started
                    </a>
                    <a href="#" className=" rounded-md px-5 py-2.5 text-base font-semibold 
              bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        Learn more
                    </a>
                </div>
            </div>
        </div>
    )
}
