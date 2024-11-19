import { h } from 'preact';
import PhoneNumber from './PhoneNumber';

export default {
    title: 'Components/PhoneNumber',
    component: PhoneNumber,
    argTypes: {
        number: {
            control: 'text',
            description: 'Phone number to display',
            defaultValue: '+1 (330) 440-2829',
        },
    },
};

const Template = (args) => <PhoneNumber {...args} />;

export const Default = Template.bind({});
Default.args = {
    number: '+1 (330) 440-2829',
};

export const CustomNumber = Template.bind({});
CustomNumber.args = {
    number: '+91-9876543210',
};
