import { h } from 'preact';
import { render, fireEvent, screen } from '@testing-library/preact';
import '@testing-library/jest-dom'; // Provides additional matchers for testing
import PauseIconComponent from './PauseIconComponent'; // Ensure the path to the component is correct
import pauseButton from '../../../stories/assets/accessibility.svg'; // Ensure paths are correct
import playButton from '../../../stories/assets/discord.svg';

describe('PauseIconComponent', () => {
    test('renders the image with the correct initial src', () => {
        render(<PauseIconComponent />);
        const img = screen.getByAltText('checkbox');
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute('src', pauseButton);
    });

    test('toggles the image src when clicked', () => {
        render(<PauseIconComponent />);
        const img = screen.getByAltText('checkbox');

        // Initial image source should be `pauseButton`
        expect(img).toHaveAttribute('src', pauseButton);

        // Click the image to toggle
        fireEvent.click(img);

        // The source should change to `playButton`
        expect(img).toHaveAttribute('src', playButton);

        // Click the image again to toggle back
        fireEvent.click(img);

        // The source should revert to `pauseButton`
        expect(img).toHaveAttribute('src', pauseButton);
    });
});
