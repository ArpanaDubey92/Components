import { h } from 'preact';
import './PhoneNumber.css';

/**
 * PhoneDiscon Component
 * Displays a phone icon and a formatted phone number.
 *
 * @param {object} props
 * @param {string} props.number - The phone number to display
 */
const PhoneNumber = ({ number }) => {
    console.log('PhoneNumber component received number:', number);
    if (!number) return null;

    return (
        <div className="phone-number-container">
            📞 {number}
        </div>
    );
};

export default PhoneNumber;


/*

const PhoneNumber = ({ number }) => {
    return (
        <div className="phone-number-container">
           {/!* <span className="phone-icon">📞</span>*!/}
            <span className="phone-number">{number}</span>
        </div>
    );
};

export default PhoneNumber;*/
