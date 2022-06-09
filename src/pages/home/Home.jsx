import './home.scss'
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar'
import Featured from '../../components/featured/Featured';
const Home = () => {
  return (
    <>
    <Navbar />
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <Featured />
      </div>
    </div>
    </>
  )
}

export default Home