import { h } from 'preact';
import './PhoneNumber.css';

/**
 * PhoneNumber Component
 * Displays a phone icon and a formatted phone number.
 *
 * @param {object} props
 * @param {string} props.number - The phone number to display
 */
const PhoneNumber = ({ number }) => {
    return (
        <div className="phone-number-container">
           {/* <span className="phone-icon">📞</span>*/}
            <span className="phone-number">{number}</span>
        </div>
    );
};

export default PhoneNumber;
