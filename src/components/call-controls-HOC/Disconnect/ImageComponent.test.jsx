import { render, screen } from '@testing-library/preact';
import '@testing-library/jest-dom';
import ImageComponent from './ImageComponent';

describe('ImageComponent', () => {
    test('renders correctly with given props', () => {
        render(<ImageComponent src="example.jpg" alt="Test Image" size={150} />);
        // eslint-disable-next-line testing-library/no-debugging-utils
        screen.debug();

        // Look for an accessible <img> element with the given alt text
        const imgElement = screen.getByText(/Test Image/i);
          expect(imgElement).toBeInTheDocument();
        expect(imgElement).toHaveAttribute('src', 'example.jpg');
        expect(imgElement).toHaveAttribute('alt', 'Test Image');
        expect(imgElement).toHaveAttribute('width', '150');
        expect(imgElement).toHaveAttribute('height', '150');

    });

    test('uses default size when no size prop is provided', () => {
        render(<ImageComponent src="example.jpg" alt="Default Size Image" />);
        // eslint-disable-next-line testing-library/no-debugging-utils
        screen.debug();
        const imgElement = screen.getByRole(/Default Size Image/i);
       // const imgElement = screen.getByRole('img', { name: /default size image/i, hidden: true });
        expect(imgElement).toHaveAttribute('width', '100');
        expect(imgElement).toHaveAttribute('height', '100');
    });
});
