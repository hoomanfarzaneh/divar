import { Add, Save, Share } from '@mui/icons-material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './headBar.scss'
import {Link} from 'react-router-dom'

const HeadBar = () => {
  return (
    <div className='headBar'>
        <div>
            <Link to = '/' className='link'>
            <ArrowForwardIcon className="icon"/>
            </Link>
        </div>
        <div>
            <Share className="icon"/>
            <Save className="icon" />
            <Add className="icon"/>
        </div>
    </div>
  )
}

export default HeadBar