import { h } from 'preact';
import './PhoneIcon.css'; // Import CSS for styling

const PhoneIcon = ({ size = 48, color = '#000', onClick }) => {
    return (
        <div
            className="phone-icon"
            style={{ width: size, height: size }}
            onClick={onClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={color}
                width="100%"
                height="100%"
                aria-label="Phone Icon"
            >
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.36 11.36 0 003.57 1.11 1 1 0 01.89 1v3.25a1 1 0 01-.89 1 19.86 19.86 0 01-8.59-3.76A19.63 19.63 0 014.79 6.29 19.86 19.86 0 011 2.62a1 1 0 011-.89H5.2a1 1 0 011 .89 11.36 11.36 0 001.11 3.57 1 1 0 01-.21 1.11l-2.2 2.2z" />
            </svg>
        </div>
    );
};

export default PhoneIcon;
