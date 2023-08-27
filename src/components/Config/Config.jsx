import './config.css'
import patter from '../../data/pattern.json'
import { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { context } from '../../context/QrContext'
export const Config = () => {
    const [ShowToast,setShowToast]=useState(false)
    useEffect(()=>{
        if(ShowToast){
            setTimeout(() => {
                setShowToast(false)
            }, 1300);
        }
    },[ShowToast])
    const { colors, currentColor, setImageType, imgTypes, currentImgType, setCorrentColor } = useContext(context)
    return (
        <div className='rounded-md config w-[33%] my-shadow config p-5'>
           {ShowToast && <motion.div    animate={{opacity:[0,1,1,1,0],y:-10}}   transition={{ ease: "easeOut", duration: 1.2 }} className="fixed bottom-44 left-[38%] bg-sky-500 text-white p-2 rounded-md ">
           Sorry, we don't have that yet
            </motion.div> } 
            <div>
                <div className='flex flex-wrap gap-4'>
                <div className='my-w-resp'>
                    <div className='font-semibold text-lg pb-3'>Pattern</div>
                    <div className="flex gap-6 flex-wrap pattern">
                        {patter.map((val, key) => {
                            return (
                                <div className="rounded-md border opacity-[.8]" key={key} onClick={()=>setShowToast(true)}>
                                    <img src={val.src} className="w-12 p-2" />
                                </div>)
                        })}
                    </div>
                </div>
                <div className='my-w-resp'> 
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
                </div>

                </div>

                <div className='font-semibold text-lg pb-3 mt-7'>Image Format</div>
                <div className="flex gap-6 flex-wrap ">
                    {imgTypes.map((val, key) => {

                        return (
                            <div className={`rounded-md border p-2 cursor-pointer opacity-80 ${currentImgType == val && 'active'}`} key={key} onClick={() => setImageType(val)}>
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