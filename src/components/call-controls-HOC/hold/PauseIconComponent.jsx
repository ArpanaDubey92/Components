import { h } from 'preact';
import { useState } from 'preact/hooks';
import './PauseIcon.css';
import pauseButton from '../../../stories/assets/accessibility.svg'; // Ensure these paths are correct
import playButton from '../../../stories/assets/discord.svg';
function PauseIcon() {
    const images = [pauseButton, playButton];
    const [imageIndex, setImageIndex] = useState(0);

    const checkboxToggle = () => {
        setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <>
            <img
                className='loginCheckbox'
                src={images[imageIndex]}
                alt='checkbox'
                onClick={checkboxToggle}
            />
        </>
    );
}
/*const PauseIcon = ({ size = 24, onClick }) => {
    const [iconSrc, setIconSrc] = useState(pauseButton);

    const handleClick = () => {
        setIconSrc((prevSrc) => {
            const newSrc = prevSrc === pauseButton ? playButton : pauseButton;
            console.log('Icon Source Changing From:', prevSrc, 'To:', newSrc);
            return newSrc;
        });
        if (onClick) onClick();
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
};*/

export default PauseIcon;