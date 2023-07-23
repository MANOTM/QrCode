import { useContext, useEffect, useState } from 'react'
import './preview.css'
import { context } from '../../context/QrContext'
import axios from 'axios'

export default function Preview() {
  const { ActiveDes ,input,setInput , currentColor,currentImgType} = useContext(context)
  const [src,setSrc]=useState('data=https://www.instagram.com/otmane_mansouri1/&size=200x200&format=jpg')
  useEffect(()=>{
    setSrc
  },[input,currentColor,currentImgType])
  return (

    <div className='rounded-md my-shadow  preview p-5 w-[45%]'>
      <div>
        <div className='font-semibold text-lg pb-3'>Enter your {ActiveDes?.label}</div>
        <input value={input} onChange={e=>setInput(e.target.value)} className="border-2 rounded-md w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" type="text" placeholder={ActiveDes?.label} />
      </div>
      <div>
        <div className='font-semibold text-lg pb-3 mt-5 text-center' id='preview'>Live Preview</div>
        <div className="flex justify-center">
          <img className='w-[55%]' src={'https://api.qrserver.com/v1/create-qr-code/?'+src} />
        </div>
      </div>
      <button className='mt-9 w-full rounded-md bg-blue-600 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500		focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Download QR Code</button>
    </div>
  )
}
