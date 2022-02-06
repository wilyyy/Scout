import React from 'react';

import AnimeCard from '../components/AnimeCard';


export default {
  title: 'Anime Card',
  component: AnimeCard,
};

const Template = (args) => <AnimeCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  backgroundColor: '#FAD',
  src: 'https://placekitten.com/500/500',
  fontFamily: "Poppins-Regular"
};