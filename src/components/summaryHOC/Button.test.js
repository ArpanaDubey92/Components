import { h } from 'preact';
import { render, screen, fireEvent } from '@testing-library/preact';
import '@testing-library/jest-dom'; // Provides additional matchers for testing
import { Button } from './Button';

describe('Button Component', () => {
    test('renders the button with the correct label', () => {
        render(<Button label="Click Me" />);
        let button;
        button = screen.getByRole('button', {name: /click me/i});
        expect(button).toBeInTheDocument();
    });

    test('applies the correct class for primary and secondary modes', () => {
        const { rerender } = render(<Button primary={true} label="Primary Button" />);
        let button = screen.getByRole('button', { name: /primary button/i });
        expect(button).toHaveClass('storybook-button--primary');

        rerender(<Button primary={false} label="Secondary Button" />);
        button = screen.getByRole('button', { name: /secondary button/i });
        expect(button).toHaveClass('storybook-button--secondary');
    });

    test('fires onClick event when clicked', () => {
        const handleClick = jest.fn();
        render(<Button label="Clickable Button" onClick={handleClick} />);
        const button = screen.getByRole('button', { name: /clickable button/i });
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
