import React from 'react';

import MainContentSlider from '../components/MainContentSlider';


export default {
  title: 'Scout/Main Content Slider',
  component: MainContentSlider,
};

const Template = (args) => <MainContentSlider {...args} />;

export const Default = Template.bind({});
Default.args = {
  bgimage = "/test_demonslayer.jpg",
  titletext1 = "Default",
  desctext1 = "Default",
  bottext = "Default",
};