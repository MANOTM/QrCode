import { createContext, useState } from "react"


export const context=createContext()

export const QrContext = ({children}) => {

    const [ActiveDes,setActiveDes]=useState({"label":"website URL", "title":'Website'})
    const colors = ['#000000', '#8f8f8d', '#ff0000', '#ff3777', '#ff9aaf', '#a72fb4', '#2f0ca0', '#007aff', '#00dcff', '#00bf99', '#ff6c00', '#bb6446']
    const [currentColor, setCorrentColor] = useState('#000000')
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
