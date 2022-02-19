import React from 'react';

import AnimeCard from '../components/AnimeCard';

export default {
  title: 'Anime Card',
  component: AnimeCard,
};

const Template = (args) => <AnimeCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'anime.png',
  fontFamily: "Poppins-Regular",
  bodyOpacity: 0.7,
  dividerOpacity: 0.2
};