import { h } from 'preact';
import Dropdown from './Dropdown';

export default {
    title: 'Components/Dropdown',
    component: Dropdown,
    argTypes: {
        options: {
            control: 'array',
            description: 'List of dropdown options',
            defaultValue: ['Ready', 'Not Ready'],
        },
        onChange: {
            action: 'changed',
            description: 'Event fired when the selected option changes',
        },
    },
};

const Template = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
    options: ['Ready', 'Not Ready'], // Options for the dropdown
};
