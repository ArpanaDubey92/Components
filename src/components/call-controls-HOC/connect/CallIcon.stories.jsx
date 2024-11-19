import { h } from 'preact';
import './CallIcon.css';
import PhoneIcon from "./telephone.png";

export default {
    title: 'Icons/PhoneIcon',
    component: PhoneIcon,
    argTypes: {
        size: {
            control: 'number',
            description: 'Size of the icon (in pixels)',
            defaultValue: 48,
        },
        onClick: {
            action: 'clicked',
            description: 'Click event handler',
        },
    },
};

const Template = (args) => <PhoneIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
    size: 48,
    onClick: () => alert('Phone icon clicked!'),
};
