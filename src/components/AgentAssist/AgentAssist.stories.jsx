// src/components/AgentAssist/AgentAssist.stories.jsx

import AgentAssist from './AgentAssist';

export default {
    title: 'Component/AgentAssist',
    component: AgentAssist,
    argTypes: {
        status: { control: 'text' },
        phoneNumber: { control: 'text' },
        timer: { control: 'text' },
    },
};

const Template = (args) => <AgentAssist {...args} />;

export const Default = Template.bind({});
Default.args = {
    status: 'Not Ready',
    phoneNumber: '+1 (330) 440-2829',
    timer: '00:24 min',
};
