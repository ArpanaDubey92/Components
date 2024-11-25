import { h } from 'preact';
import ImageComponent from './ImageComponent'; // Adjust the path based on your file structure
import './ImageComponent.css';

export default {
    title: 'Component/ImageComponent',
    component: ImageComponent,
    argTypes: {
        size: {
            control: { type: 'number' },
            description: 'Size of the image (in pixels)',
        },
        src: {
            control: 'text',
            description: 'Path to the image file',
        },
        alt: {
            control: 'text',
            description: 'Alt text for the image',
        },
    },
};

const Template = (args) => <ImageComponent {...args} />;

export const DefaultImage = Template.bind({});
DefaultImage.args = {
    src: require('../../call-controls-HOC/hold/end-call.png'), // Adjust path as needed for local image in assets
    alt: 'Icon Image',
    size: 150,
};

export const SmallImage = Template.bind({});
SmallImage.args = {
    src: require('../../call-controls-HOC/hold/end-call.png'), // Adjust path as needed for local image in assets
    alt: 'Small Icon Image',
    size: 50,
};
