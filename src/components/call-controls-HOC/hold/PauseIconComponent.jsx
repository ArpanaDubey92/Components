import { h } from 'preact';
import { useState } from 'preact/hooks';
import './PauseIcon.css';
import pauseButton from '../TopBar/pause-button.png'; // Default pause button image
import playButton from '../TopBar/telephone.png';  // Alternate image (e.g., play button)

const PauseIcon = ({ size = 24, onClick }) => {
    const [iconSrc, setIconSrc] = useState(pauseButton); // Initial state with pause button

    const handleClick = () => {
        setIconSrc((prevSrc) => (prevSrc === pauseButton ? playButton : pauseButton)); // Toggle image
        if (onClick) onClick(); // Trigger the click event if provided
    };

    return (
        <img
            src={iconSrc}
            alt="Pause Icon"
            className="pause-icon"
            width={size}
            height={size}
            onClick={handleClick}
        />
    );
};

export default PauseIcon;
