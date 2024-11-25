import { h } from 'preact';
import './button.css';

/**
 * Primary UI component for user interaction
 *
 * @param {object} props
 * @param {boolean} [props.primary=false] Default is `false`
 * @param {string} [props.backgroundColor]
 * @param {'small' | 'medium' | 'large'} [props.size='medium'] Default is `'medium'`
 * @param {string} props.label
 * @param {function} props.onClick
 */

export const Button = ({ label, primary, backgroundColor, size, onClick }) => {
    const classNames = [
        'storybook-button',
        primary ? 'storybook-button--primary' : 'storybook-button--secondary',
        size ? `storybook-button--${size}` : 'storybook-button--medium'
    ].join(' ');

    const style = { backgroundColor };

    return (
        <button
            className={classNames}
            style={style}
            onClick={onClick}
            aria-label={label}  // Ensuring aria-label is set correctly
        >
            {label}
        </button>
    );
};

