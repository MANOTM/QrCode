import './destination.css'
import { Objet } from '../Objet/Objet'
import EmailIcon from '../Icons/EmailIcon'
import DocsIcon from '../Icons/DocsIcon'
import LinkIcon from '../Icons/LinkIcon'
import YoutubIcon from '../Icons/YoutubIcon'
import MessageIcon from '../Icons/MessageIcon'
import FacebookIcon from '../Icons/FacebookIcon'
import UploadIcon from '../Icons/UploadIcon'
import InstagramIcon from '../Icons/InstagramIcon'
import WifiIcon from '../Icons/WifiIcon' 

export default function Destination() {  
  return (
    <div className='destination my-shadow p-5 rounded-md' >
        <div className='font-semibold text-lg pb-3 ml-4'>Destination</div>
        <div className="flex gap-2 flex-wrap">
            <Objet label="Website URL" title='Website' Icon={<LinkIcon/>}/>
            <Objet label="URL of document" title='Google Docs' Icon={<DocsIcon/>}/>
            <Objet label="Chaine youtube" title='Youtube' Icon={<YoutubIcon/>}/> 
            <Objet label="Facebook URL" title='Facebook' Icon={<FacebookIcon/>}/> 
            <Objet label="Upload link" title='Upload' Icon={<UploadIcon/>}/> 
            <Objet label="Instagram profile URL" title='Instagram' Icon={<InstagramIcon/>}/> 
            <Objet label="Message" title='Message' Icon={<MessageIcon/>}/> 
            <Objet label="Email" title='Email' Icon={<EmailIcon/>}/> 
            <Objet label="Wifi key" title='Wifi' Icon={<WifiIcon/>}/> 
        </div>
    </div>
  )
}
