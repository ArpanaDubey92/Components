import { h } from 'preact';
import { render, screen } from '@testing-library/preact';
import '@testing-library/jest-dom';
import PhoneDuration from './PhoneDuration';

describe('PhoneDuration Component', () => {
    test('renders the phone number correctly', () => {
        render(<PhoneDuration number="+1 (330) 440-2829" />);
        const phoneNumberElement = screen.getByText('+1 (330) 440-2829');
        expect(phoneNumberElement).toBeInTheDocument();
    });

    test('renders the phone icon correctly', () => {
        render(<PhoneDuration number="+1 (330) 440-2829" />);
        const phoneIconElement = screen.getByText('📞');
        expect(phoneIconElement).toBeInTheDocument();
    });
});
