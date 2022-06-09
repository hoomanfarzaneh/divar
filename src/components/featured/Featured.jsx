import './featured.scss';
import {data} from '../../data';
import {Link} from 'react-router-dom'

const Featured = () => {
  return (
    <div className='featured'>
        {data.map((d)=>(
            
                <div className="card">
                    <div className="rSide">
                        <div className="title">{d.title}</div>
                        <div className="desc">
                            <div>{d.price}</div>
                            <div>{d.date}</div>
                        </div>
                    </div>
                    <Link className='link' to='/detail'>
                        <div className="lSide">
                            <img src={d.img} alt="" />
                        </div>
                    </Link>
                </div>
        
        ))}
    </div>
  )
}

export default Featured