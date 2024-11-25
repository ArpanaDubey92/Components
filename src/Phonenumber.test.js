import '@testing-library/jest-dom';
import { h } from 'preact';
import { render, fireEvent, screen } from '@testing-library/preact';
import Phonenumber from './Phonenumber';

test('validates phone number input and displays an error for invalid input', async () => {
    render(<Phonenumber/>);
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();
    console.log("Arpana",document.body.innerHTML);
    const [phoneNumberPrompt] = await Promise.all([screen.getByLabelText(/Enter your phone number/i)]);
    console.log("Arpana",phoneNumberPrompt);

    expect(phoneNumberPrompt).toBeInTheDocument();


});
