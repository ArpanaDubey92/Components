import { CallNotes } from './CallNotes';
import { fn } from '@storybook/test';

// Meta configuration for CallNotes
const meta = {
    title: 'Components/CallNotes',
    component: CallNotes,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        placeholder: { control: 'text' },
    },
    args: {
        onInput: fn(),
    },
};

export default meta;

// Primary Story
export const Default = {
    args: {
        placeholder: 'Add notes here...',
    },
};

// Additional Variants
export const WithCustomPlaceholder = {
    args: {
        placeholder: 'Custom placeholder text...',
    },
};

export const Empty = {
    args: {
        placeholder: '',
    },
};
