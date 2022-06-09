import './detail.scss';
import { Properties } from '../../components/properties/Properties';
import HeadBar from '../../components/headbar/HeadBar';
import NavBar from '../../components/navbar/Navbar';


const Detail = () => {
  return (
    <>
    <NavBar />
    <HeadBar />
    <div className='details'>
      <Properties />
    </div>
    </>
  )
}

export default Detail