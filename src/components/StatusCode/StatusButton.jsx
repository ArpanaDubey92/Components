import { h } from 'preact';
import { useState } from 'preact/hooks';

/**
 * A status button component that toggles between "Ready" and "Not Ready".
 */
const StatusButton = () => {
    const [status, setStatus] = useState('Not Ready'); // Initial value: "Not Ready"

    const toggleStatus = () => {
        setStatus((prev) => (prev === 'Ready' ? 'Not Ready' : 'Ready')); // Toggle logic
    };

    return (
        <button onClick={toggleStatus} style={buttonStyles}>
            {status} ▼
        </button>
    );
};

const buttonStyles = {
    padding: '10px 20px',
    backgroundColor: '#444',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
};

export default StatusButton;
