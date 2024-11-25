// src/components/TopBar/TopBar.stories.jsx

import TopBar from './TopBar';

export default {
    title: 'Component/TopBar',
    component: TopBar,
    argTypes: {
        status: { control: 'text' },
        phoneNumber: { control: 'text' },
        timer: { control: 'text' },
    },
};

const Template = (args) => <TopBar {...args} />;

export const Default = Template.bind({});
Default.args = {
    status: 'Not Ready',
    phoneNumber: '+1 (330) 440-2829',
    timer: '00:24 min',
};
