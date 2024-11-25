import { h } from 'preact';
import { render, screen } from '@testing-library/preact';
import '@testing-library/jest-dom';
import PhoneDiscon from './PhoneDiscon';

describe('PhoneDiscon Component', () => {
    test('renders the phone number correctly', () => {
        render(<PhoneDiscon number="+1 (330) 440-2829" />);
        const phoneNumberElement = screen.getByText('+1 (330) 440-2829');
        expect(phoneNumberElement).toBeInTheDocument();
    });

    test('renders the phone icon correctly', () => {
        render(<PhoneDiscon number="+1 (330) 440-2829" />);
        const phoneIconElement = screen.getByText('📞');
        expect(phoneIconElement).toBeInTheDocument();
    });
});
