import { useContext, useEffect, useRef, useState } from 'react'
import './preview.css'
import { context } from '../../context/QrContext'
import LoadingEff from '../../assets/loading.gif'
import axios from 'axios'
import LoadingIcon from '../Icons/LoadingIcon'


export default function Preview() {
  const { ActiveDes, input, setInput, currentColor, currentImgType } = useContext(context)
  const [src, setSrc] = useState('')
  const [loading, setLoading] = useState(true)
  const [leadingDownload,setleadingDownload]=useState(0)
  const download =()=>{ 
    setleadingDownload(true)
    fetch(src)
    .then(response => response.blob())
    .then(blob => {
      const url = URL.createObjectURL(blob);
      const downloadLink = document.createElement("a");
      downloadLink.href = url;
      downloadLink.download = "Qr_Code";
      downloadLink.click();
      URL.revokeObjectURL(url);
      setleadingDownload(false)
    });
  }
  useEffect(() => {
    setLoading(true)
    if (!input) {
      setSrc('https://api.qrserver.com/v1/create-qr-code/?data=https://www.instagram.com/otmane_mansouri1/&qzone=5&size=200x200&format=png')
      setLoading(false)
    }
    const getQr = () => {
      axios.get('https://api.qrserver.com/v1/create-qr-code/?data=' + input + '&size=200x200&qzone=5&format=' + currentImgType + '&color=' + currentColor).then(res => {
        setSrc('https://api.qrserver.com/v1/create-qr-code/?data=' + input + '&size=200x200&&qzone=5&format=' + currentImgType + '&color=' + currentColor)
        setLoading(false)
      })
    }
    const timeOut = setTimeout(() => {
      if (input) {
        getQr()
      }
    }, 1000)

    return () => { clearTimeout(timeOut) }


  }, [input, currentColor, currentImgType])
  return (

    <div className='rounded-md my-shadow  preview p-5 w-[45%]'>
      <div>
        <div className='font-semibold text-lg pb-3'>Enter your {ActiveDes?.label}</div>
        <input value={input} onChange={e => setInput(e.target.value)} className="border-2 rounded-md w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" type="text" placeholder={ActiveDes?.label} />
      </div>
      <div>
        <div className='font-semibold text-lg pb-3 mt-5 text-center' id='preview'>Live Preview</div>
        <div className="flex justify-center ">
          <div className='w-[60%] h-[300px] relative'>
            {
              loading && <div className='absolute left-[50%] top-[50%]'>
                <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
              </div>
            }

            <img className={`w-full ${loading && 'opacity-25'}`}  src={src} />

          </div>
        </div>
      </div>
      <button onClick={download} className={`btn-coll ${leadingDownload && 'pointer-events-none opacity-90'}`}>{leadingDownload?<LoadingIcon fill="#fffffc"/>:'Download Code Qr'}  </button>
    </div>
  )
}
