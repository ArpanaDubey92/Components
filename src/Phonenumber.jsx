import { h } from 'preact';
import { useState } from 'preact/hooks';
import './Phonenumber.css';

const Phonenumber = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isValid, setIsValid] = useState(true);

    const validatePhoneNumber = (number) => {
        const regex = /^\d{10}$/; // Validates a 10-digit phone number
        setIsValid(regex.test(number));
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setPhoneNumber(value);
        validatePhoneNumber(value);
    };

    return (
        <div className="phone-number-container">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
                id="phoneNumber"
                type="text"
                value={phoneNumber}
                onChange={handleChange}
                placeholder="Enter your phone number"
            />
            {!isValid && <p className="error">Invalid phone number</p>}
        </div>
    );
};

export default Phonenumber;
