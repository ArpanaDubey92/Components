import './TopBar.css';
import phone from '../TopBar/telephone.png'; // Adjusted path for the image
import pause from '../TopBar/pause-button.png';
const TopBar = ({ status = 'Not Ready', phoneNumber = '+1 (330) 440-2829', timer = '00:24 min' }) => {
    return (
        <div className="top-bar">
            <div className="status-section">
                <button className="status-button">
                    {status} <span className="arrow-down">▼</span>
                </button>
            </div>
            <div className="icon-section">
                <img src={pause} alt="Icon 1" className="icon"/>
                <span
                    className="icon">&#8943;</span> {/* Horizontal ellipsis */} {/* Example icon, replace with actual icon */}
              {/*  <span className="icon">&#8942;</span>  Example icon, replace with actual icon
             */}   {/* <span className="icon">&#128065;</span>  Eye icon, replace with actual icon
           */}
                <span className="vertical-line"></span>
                <img src={phone} alt="Icon 1" className="icon"/>

            </div>
            <div className="info-section">
            <span className="phone-number">{phoneNumber}</span>
                <span className="timer">{timer}</span>
            </div>
        </div>
    );
};

export default TopBar;
