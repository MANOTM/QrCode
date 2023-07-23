import { Config } from '../Config/Config'
import Destination from '../Destination/Destination'
import Preview from '../Preview/Preview'
import './logic.css'

export default function Logic() {

  return (
    <div className='flex gap-10 flex-wrap my-container p-6 rounded-md '>
        <Destination/>
        <Preview/>
        <Config />
    </div>
  )
}
