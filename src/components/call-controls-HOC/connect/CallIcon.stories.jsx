import { h } from 'preact';
import Icon from './Icon';
//import Connect from '../../../stories/assets/accessibility.svg';
import Disconnect from '../../../stories/assets/discord.svg';

export default {
    title: 'Components/Icon',
    component: Icon,
    argTypes: {
       // icon1: { control: 'text', description: 'First icon path' },
        icon2: { control: 'text', description: 'Second icon path' },
        size: { control: { type: 'number' }, description: 'Size of the icon (in pixels)' },
        alt: { control: 'text', description: 'Alt text for the image' },
        onToggle: { action: 'toggled', description: 'Callback triggered on icon toggle' },
    },
};

const Template = (args) => <Icon {...args} />;

export const DefaultIcon = Template.bind({});
DefaultIcon.args = {
 //   icon1: Connect,
    icon2: Disconnect,
    size: 48,
    alt: 'Connection icon',
};

export const SmallIcon = Template.bind({});
SmallIcon.args = {
   // icon1: Connect,
    icon2: Disconnect,
    size: 24,
    alt: 'Small connection icon',
};
