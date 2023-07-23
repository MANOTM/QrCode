import { useContext } from 'react'
import './objet.css'
import {  context } from '../../context/QrContext'
export const Objet = ({Icon,title,label}) => {

    const {ActiveDes , change}=useContext(context) 

    return (
        <div className={`objetColl objet ${title==ActiveDes?.title && 'active'}`} onClick={()=>change({title,label})}>
            <div className="bg-slate-100 rounded-md w-12 h-12 mb-2 flex justify-center items-center">
                {Icon}
            </div>
            <div className='font-medium text-sm'>{title}</div>
        </div>
    )
}
