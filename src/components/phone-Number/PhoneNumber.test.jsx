import { h } from 'preact';
import { render, screen } from '@testing-library/preact';
import PhoneNumber from './PhoneNumber';

describe('PhoneNumber Component', () => {
    test('renders without crashing', () => {
        render(<PhoneNumber number="+1 (330) 440-2829" />);
    });
});
