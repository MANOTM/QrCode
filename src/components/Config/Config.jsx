import './config.css'
import patter from '../../data/pattern.json'
import { useContext } from 'react'
import { context } from '../../context/QrContext'
export const Config = () => {
    const { colors, currentColor, setImageType, imgTypes, currentImgType, setCorrentColor } = useContext(context)

    return (
        <div className='rounded-md config w-[33%] my-shadow config p-5'>
            <div>
                <div className='font-semibold text-lg pb-3'>Pattern</div>
                <div className="flex gap-6 flex-wrap pattern">
                    {patter.map((val, key) => {
                        return (
                            <div className="rounded-md border opacity-[.8]" key={key}>
                                <img src={val.src} className="w-12 p-2" />
                            </div>)
                    })}
                </div>

                <div className='font-semibold text-lg pb-3 mt-7'>Color</div>
                <div className="flex gap-6 flex-wrap ">
                    {colors.map((val, key) => {
                        return (
                            <div className={`rounded-md border p-2 cursor-pointer ${currentColor.split("-").join(", ") == val && 'active'}`} key={key} onClick={() => setCorrentColor(val.split(", ").join("-"))}>
                                <div className='w-8 h-8 rounded-md' style={{ background: 'rgb('+val+')' }}>
                                </div>
                            </div>)
                    })}
                </div>

                <div className='font-semibold text-lg pb-3 mt-7'>Image Format</div>
                <div className="flex gap-6 flex-wrap ">
                    {imgTypes.map((val, key) => {
                        return (
                            <div className={`rounded-md border p-2 cursor-pointer opacity-80 ${currentImgType == val && 'active'}`} key={key} onClick={() => setImageType(val.toLocaleLowerCase())}>
                                <div className='w-8 h-5 rounded-md'>
                                    {val}
                                </div>
                            </div>)
                    })}
                </div>

            </div>
        </div>
    )
} 