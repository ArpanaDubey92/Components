import { h } from 'preact';
import './PhoneDiscon.css';

/**
 * PhoneDiscon Component
 * Displays a phone icon and a formatted phone number.
 *
 * @param {object} props
 * @param {string} props.number - The phone number to display
 */
const PhoneDiscon = ({ number }) => {
    return (
        <div className="phone-number-container">
           { <span className="phone-icon">📞</span>}
          {/*  <span className="phone-number">{number}</span>*/}
        </div>
    );
};

export default PhoneDiscon;
