import { h } from 'preact';
import PhoneDuration from './PhoneDuration';

export default {
    title: 'Components/PhoneDiscon',
    component: PhoneDuration,
    argTypes: {
        number: {
            control: 'text',
            description: 'Phone number to display',
            defaultValue: '00:24 min',
        },
    },
};

const Template = (args) => <PhoneDuration {...args} />;

export const Duration = Template.bind({});
Duration.args = {
    number: '00:24 min',
};

export const Time = Template.bind({});
Time.args = {
    number: '+91-9876543210',
};
