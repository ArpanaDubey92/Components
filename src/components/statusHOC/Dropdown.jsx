import { h } from 'preact';
import { useState } from 'preact/hooks';
import './Dropdown.css'; // Import the CSS file for styling

const Dropdown = ({ options, onChange }) => {
    const [selected, setSelected] = useState(options[0]); // Set the first option as the default selected

    const handleChange = (event) => {
        const value = event.target.value;
        setSelected(value);
        onChange(value); // Notify the parent component
    };

    return (
        <div className="dropdown-container">
            <select value={selected} onChange={handleChange} className="dropdown">
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;
