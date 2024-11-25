import { h } from 'preact';
import { useState } from 'preact/hooks';
import pauseButton from '../../../stories/assets/accessibility.svg';
import playButton from '../../../stories/assets/discord.svg';
import './PauseIcon.css';
export default {
    title: 'Component/PauseIcon',
    argTypes: {
        size: {
            control: { type: 'number' },
            description: 'Size of the icon (in pixels)',
        },
    },
};

const Template = (args) => {
    const [imageSrc, setImageSrc] = useState(pauseButton);

    const handleClick = () => {
        setImageSrc((prevSrc) => (prevSrc === pauseButton ? playButton : pauseButton));
    };

    return (
        <img
            {...args}
            src={imageSrc}
            alt="checkbox"
            onClick={handleClick} // Toggle image on click
            style={{ cursor: 'pointer' }} // Ensure it's clear the image is clickable
        />
    );
};

export const DefaultImage = Template.bind({});
DefaultImage.args = {
    size: 24, // Default size
};
