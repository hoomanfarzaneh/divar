import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import PermDeviceInformationIcon from '@mui/icons-material/PermDeviceInformation';
import ShareIcon from '@mui/icons-material/Share';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import './properties.scss'
import Footer from '../../components/footer/Footer'

export const Properties = () => {
  return (
    <div className='properties'>
        <div className="lSide">
          <img
            src="https://images.pexels.com/photos/18105/pexels-photo.jpg?cs=srgb&dl=pexels-karsten-madsen-18105.jpg&fm=jpg"
            alt=""
            className="siImg" 
          />
          <textarea className='siArea' placeholder='یادداشت شما'></textarea>
          <div className='siFooter'>
            <p>راهنمای خرید امن</p>
            <HelpOutlineIcon className="icon" />
          </div>
          <div className='siFooter'>
            <p>ثبت تخلف و مشکل</p>
            <PermDeviceInformationIcon className="icon" />
          </div>
        </div>
      <div className="siDesc">
        <h1 className="siTitle">لپ تاپ مک بوک اپل</h1>
        <span className="siDate">نیم ساعت پیش در تهران</span>
        <div className="siConnect">
          <div className="siIcon">
            <ShareIcon  className='siConnectIcon'/>
            <BeenhereIcon className='siConnectIcon'/>
          </div>
          <div className="siButton">
            <button className='siChatBtn'>چت</button>
            <button className='siConnectBtn'>اطلاعات تماس</button>
          </div>
        </div>
          <div className="siCondition">
            <p>در حد نو</p>
            <p className='siConditionColor'>وضعیت</p>
          </div>
          <hr />
          <div className="siCondition">
            <p>۸۵۰۰۰۰۰ تومان </p>
            <p className='siConditionColor'>قیمت</p>
          </div>
          <hr />
          <h4>توضیحات</h4>
          <p className='siDescription'>
          کاملا نو در حد آکبند بدون کوچکترین خط وخش باظاهری زیباوکاملا قدرتمند و حرفه ای مناسب جهت انجام دادن کلیه کارهای دانشجویی،انجام پروژه های مهندسی ،قابل اجرای برای نصب تمام برنامه های مهندسی پیشرفته و حسابداری   
          دارای درایو نوری و قفل کن وبکم
          مناسب کارهای سنگین و دانشجویی
          کاملاسالم بدون کوچکترین ایرادی پلمپ درحدنو        
          متعلقاتش هم به علاوه کارتن و... صحیح وسالم موجودن به علاوه یه کیف و موس تقدیم میکنم
          نو همین کانفینگ از همین برند یا برندای دیگه تو بازار بالای18قیمت دارن       
          </p>
        </div>
        <Footer />
    </div>
  )
}
