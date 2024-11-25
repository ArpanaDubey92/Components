/** @type { import('@storybook/preact').Preview } */
// const preview = {
//   parameters: {
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/i,
//       },
//     },
//   },
// };
export const parameters = {
  backgrounds: {
    default: 'black',
    values: [
      { name: 'black', value: '#000000' },
      { name: 'white', value: '#FFFFFF' },
      { name: 'gray', value: '#808080' },
    ],
  },
};
export default parameters;
