import { Config } from '../Config/Config'
import Destination from '../Destination/Destination'
import Preview from '../Preview/Preview'
import './logic.css'

export default function Logic() {

  return (
    <div className='flex gap-10  my-container p-6 rounded-md my-f-resp'>
        <Destination/>
        <Preview/>
        <Config />
    </div>
  )
}
