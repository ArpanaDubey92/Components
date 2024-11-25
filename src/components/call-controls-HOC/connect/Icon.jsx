import { h } from 'preact';
import { useState } from 'preact/hooks';

const Icon = ({ icon1, icon2, size = 24, alt = "icon", onToggle }) => {
    const [currentIcon, setCurrentIcon] = useState(icon1);

    const handleClick = () => {
        const newIcon = currentIcon === icon1 ? icon2 : icon1;
        setCurrentIcon(newIcon);

        if (onToggle) {
           // onToggle(newIcon); // Callback to handle additional logic
        }
    };

    return (
        <img
            src={currentIcon}
            alt={alt}
            width={size}
            height={size}
            style={{ cursor: 'pointer' }} // Optional: Pointer cursor for interactivity
           // onClick={handleClick}
        />
    );
};

export default Icon;
