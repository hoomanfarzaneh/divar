import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const Navbar = () => {

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="lItem">
            <button className="lButton">ثبت آگهی</button>
          </div>
          <div className="lItem">
            <label className="lLable">پشتیبانی</label>
          </div>
          <div className="lItem">
             چت   
            <ChatBubbleOutlineOutlinedIcon className="icon" />
          </div>
          <div className="lItem">
             دیوار من    
             <PersonOutlineIcon className="icon" />
          </div>
        </div>
        <div className="right">
          <div className="rItem">
              <div className="search">
                <input type="text" placeholder="جستجو در همه آگهی ها" />
                <SearchOutlinedIcon  className="icon"/>
              </div>
          </div>
          <div className="rItems">
            <KeyboardArrowDownIcon className="icon" />
            دسته ها
          </div>
          
          <div className="rItemLocation">
             تهران 
            <LocationOnOutlinedIcon  className="iconLocation" />
          </div>
          <div className="rItem">
            <img
              src="https://s100.divarcdn.com/static/thewall-assets/android-chrome-512x512.png"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;