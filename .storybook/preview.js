export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },

  backgrounds: {
    default: 'ScoutDark',
    values: [
      {
        name: 'ScoutLight',
        value: '#EFEFEF'
      },
      {
        name: 'ScoutDark',
        value: '#1C2A36'
      }
    ]
  }
}