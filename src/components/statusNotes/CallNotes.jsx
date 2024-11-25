import { h } from 'preact'; // Importing 'h' for JSX support
import { useState } from 'preact/hooks'; // Importing useState from Preact hooks
import './callnotes.css';

/**
 * UI component for capturing notes during calls
 * @param {Object} props - The component props
 * @param {string} [props.heading] - Heading text to display above the textarea
 * @param {string} [props.placeholder] - Placeholder text for the input
 * @param {string} [props.initialValue] - The initial content for the notes
 * @param {string} [props.className] - Optional CSS class
 * @param {function} [props.onInput] - Optional callback when input changes
 * @param {function} [props.onBlur] - Optional callback when input loses focus
 */
export const CallNotes = ({
                              heading = 'Call Notes',
                              placeholder = 'Enter your notes here...',
                              initialValue = '',
                              className = '',
                              onInput,
                              onBlur,
                              ...props
                          }) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (event) => {
        const newValue = event.target.value;
        setValue(newValue);
        if (onInput) onInput(newValue); // Trigger onInput callback with new value
    };

    return (
        <div className={`callnotes-container ${className}`}>
            {heading && <h3 className="callnotes-heading">{heading}</h3>}
            <textarea
                className="callnotes-textarea"
                placeholder={placeholder}
                value={value}
                onInput={handleChange} // Changed from onChange to onInput for Preact
                onBlur={onBlur}
                {...props}
            />
        </div>
    );
};
