import initStoryshots from '@storybook/addon-storyshots';

initStoryshots({
    // Optionally, specify the snapshot serializer for Preact
    snapshotSerializers: ['@storybook/addon-storyshots-puppeteer'],
});
