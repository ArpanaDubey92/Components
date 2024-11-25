import { h } from 'preact';
import PhoneDiscon from './PhoneDiscon';

export default {
    title: 'Component/PhoneDiscon',
    component: PhoneDiscon,
    argTypes: {
        number: {
           control: 'text',
          //  description: 'Phone number to display',
          //  defaultValue: '00:24 min',
        },
    },
};

const Template = (args) => <PhoneDiscon {...args} />;

export const Duration = Template.bind({});
Duration.args = {
    number: '00:24 min',
};

export const Time = Template.bind({});
Time.args = {
    number: '+91-9876543210',
};
