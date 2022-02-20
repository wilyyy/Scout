import React from 'react';

import SettingsModal from '../components/SettingsModal';

export default {
  title: 'Scout/Settings Modal',
  component: SettingsModal
};

const Template = (args) => <SettingsModal {...args} />;

export const Dark = Template.bind({});

Dark.parameters = {
  backgrounds: {default: 'ScoutDark'}
};

Dark.args = {

};

export const Light = Template.bind({});

Light.paramters = {
  backgrounds: {default: 'ScoutLight'}
};

Light.args = {

};
