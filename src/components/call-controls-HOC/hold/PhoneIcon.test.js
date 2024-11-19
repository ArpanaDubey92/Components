import { h } from 'preact';
import { render, screen, fireEvent } from '@testing-library/preact';
import '@testing-library/jest-dom'; // For additional matchers like .toBeInTheDocument()
import PhoneIcon from './PhoneIcon'; // Adjust the path as necessary

describe('PhoneIcon Component', () => {
    const mockClickHandler = jest.fn();

    test('renders the phone icon with the correct size', () => {
        render(<PhoneIcon size={64} onClick={mockClickHandler} />);

        const icon = screen.getByRole('img', { name: /phone icon/i });
        expect(icon).toBeInTheDocument();
        expect(icon).toHaveAttribute('src'); // Ensures the src attribute is present
        expect(icon).toHaveAttribute('width', '64');
        expect(icon).toHaveAttribute('height', '64');
    });

    test('calls the onClick handler when clicked', () => {
        render(<PhoneIcon size={64} onClick={mockClickHandler} />);

        const icon = screen.getByRole('img', { name: /phone icon/i });
        fireEvent.click(icon);

        expect(mockClickHandler).toHaveBeenCalledTimes(1);
    });

    test('renders with a custom alt text if provided', () => {
        render(<PhoneIcon size={32} onClick={mockClickHandler} />);

        const icon = screen.getByRole('img', { name: /phone icon/i });
        expect(icon).toHaveAttribute('alt', 'Phone Icon');
    });
});
