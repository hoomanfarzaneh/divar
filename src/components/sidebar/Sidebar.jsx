import { AccountCircleOutlined, CreditCard, Dashboard, ExitToApp, InsertChart, LocalShipping, NotificationsNone, PsychologyOutlined, SettingsSystemDaydreamOutlined, Store } from '@mui/icons-material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './sidebar.scss';


const Sidebar = () => {
  
  return (
    <div className="sidebar">
      <div className="item">
        <ul>
          <p className="title">دسته ها</p>
          <div className='items'>
          <li >
            <Dashboard className="icon" />
            <p>املاک</p>
          </li>
          
          <li>
            <AccountCircleOutlined className="icon" />
            <p>وسایل نقلیه</p>
          </li>
          
          <li>
            <CreditCard className="icon" />
            <p>کالای دیجیتال</p>
          </li>
          <li>
            <ExitToApp className="icon" />
            <p>خانه و آشپزخانه</p>
          </li>
          <li>
            <InsertChart className="icon" />
            <p>خدمات</p>
          </li>
          <li>
            <LocalShipping className="icon" />
            <p>وسایل شخصی</p>
          </li>
          <li>
            <PsychologyOutlined className="icon" />
            <p>سرگرمی و فراغت</p>
          </li>
          <li>
            <Store className="icon" />
            <p>اجتماعی</p>
          </li>
          <li>
            <SettingsSystemDaydreamOutlined className="icon" />
            <p>تجهیزات و صنعتی</p>
          </li>
          <li>
            <NotificationsNone className="icon" />
            <p>استخدام و کاریابی</p>
          </li>
          </div>
          <hr />
          <div className='items'>
          <li>
          <KeyboardArrowDownIcon  className="icon" />
          <span>قیمت</span>
          </li>
          </div>
          <hr />
          <div className='items'>
          <li>
            <KeyboardArrowDownIcon  className="icon" />
            <span>وضعیت آگهی</span>
            </li>
          </div>
           
        </ul>
      </div>
    </div>
  )
}

export default Sidebar