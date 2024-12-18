import { h } from 'preact';
import './PhoneDuration.css';

/**
 * PhoneDiscon Component
 * Displays a phone icon and a formatted phone number.
 *
 * @param {object} props
 * @param {string} props.number - The phone number to display
 */
const PhoneDuration = ({ number }) => {
    return (
        <div className="phone-number-container">
           {/* <span className="phone-icon">📞</span>*/}
            <span className="phone-number">{number}</span>
        </div>
    );
};

export default PhoneDuration;
