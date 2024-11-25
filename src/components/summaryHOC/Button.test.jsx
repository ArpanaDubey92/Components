import { h } from 'preact';
import { render, screen, fireEvent } from '@testing-library/preact';
import { Button } from './Button';
import './Button.css';


describe('Button Component', () => {
    test('supports different sizes', () => {
        render(<Button size="large" label="Large Button" />);
        // eslint-disable-next-line testing-library/no-debugging-utils
        screen.debug(); // Logs the rendered HTML for inspection
        const buttonElement = screen.getByRole('button', { name: /Large Button/i });
        expect(buttonElement).toHaveClass('storybook-button--large');
    });

    test('applies primary mode when `primary` prop is true', () => {
        render(<Button primary label="Primary Button" />);
        const buttonElement = screen.getByRole('button', { name: /Primary Button/i });
        expect(buttonElement).toHaveClass('storybook-button--primary');
    });

    test('applies custom background color', () => {
        render(<Button backgroundColor="red" label="Colored Button" />);
        const buttonElement = screen.getByRole('button', { name: /Colored Button/i });
        expect(buttonElement).toHaveStyle('background-color: red');
    });

    test('supports different sizes', () => {
        render(<Button size="large" label="Large Button" />);
        const buttonElement = screen.getByRole('button', { name: /Large Button/i });
        expect(buttonElement).toHaveClass('storybook-button--large');
    });

    test('handles click events', () => {
        const handleClick = jest.fn();
        render(<Button label="Clickable Button" onClick={handleClick} />);
        const buttonElement = screen.getByRole('button', { name: /Clickable Button/i });
        fireEvent.click(buttonElement);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test('renders label correctly', () => {
        render(<Button label="Test Label" />);
      //  render(<Button label="Test Label" />);
        expect(screen.getByText(/Test Label/i)).toBeInTheDocument();
    });
});
