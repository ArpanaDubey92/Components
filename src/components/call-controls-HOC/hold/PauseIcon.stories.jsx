import { h } from 'preact';
import './PauseIcon.css';
import pauseButton from '../TopBar/pause-button.png';

export default {
    title: 'Icons/PauseIcon',
    component: ({ src, size }) => <img src={src} alt="Pause Icon" width={size} height={size} />,
    argTypes: {
        size: {
            control: { type: 'number' },
            description: 'Size of the icon (in pixels)',
        },
        onClick: {
            action: 'clicked',
            description: 'Click event handler',
        },
        src: {
            control: 'text',
            description: 'Path to the image file',
        },
    },
};

const Template = (args) => <img {...args} />;

export const DefaultImage = Template.bind({});
DefaultImage.args = {
    size: 24,
    src: pauseButton, // Use the imported image path here
};

export const CustomPathImage = Template.bind({});
CustomPathImage.args = {
    size: 32,
    src: 'static/media/another-pause-button.png', // Use a custom path
};
