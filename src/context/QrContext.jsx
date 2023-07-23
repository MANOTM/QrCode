import { createContext, useState } from "react"


export const context=createContext()

export const QrContext = ({children}) => {

    

    const [ActiveDes,setActiveDes]=useState({"label":"website URL", "title":'Website'})
    const colors = ['0, 0, 0','143, 143, 141', '255, 0, 0', '255, 55, 119', '255, 154, 175', '167, 47, 180', '47, 12, 160', '0, 122, 255', '0, 220, 255', '0, 191, 153', '255, 108, 0', '187, 100, 70']
    const [currentColor, setCorrentColor] = useState('0-0-0')
    const imgTypes = ['PNG', 'SVG', 'JPG',]
    const [currentImgType,setImageType]=useState('PNG')
    const [input,setInput]=useState('')

    const change =(des)=>{
        setActiveDes(des)
        setInput('')
    }

    return(
    <context.Provider value={{ActiveDes , change , input,setInput, colors, currentColor,setImageType, imgTypes,currentImgType,setCorrentColor}}>
        {children}
    </context.Provider>
    )
}
