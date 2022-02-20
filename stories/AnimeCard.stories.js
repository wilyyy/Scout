import React from 'react';

import AnimeCard from '../components/AnimeCard';

import { ThemeConfig } from '../utils/ThemeConfig';


export default {
  title: 'Scout/Anime Card',
  component: AnimeCard,
  argTypes: {
    src: {
      name: 'Source',
      type: {name: 'string', required: true},
      defaultValue: '/anime.png',
      description: 'path to the image file',
      control: 'text'
    },

    bgcolor: {
      name: 'Background Color',
      type: {name:'color', required: true},
      control: 'color'
    },

    hcolor: {
      name: 'Header Color',
      type: {name:'color', required: true},
      control: 'color'
    },

    bcolor: {
      name: 'Body Color',
      type: {name:'color', required: true},
      control: 'color'
    },

    dcolor: { 
      name: 'Divider Color',
      type: {name:'color', required: true},
      control: 'color'
    },

    icolor: { 
      name: 'Bookmark Color',
      type: {name:'color', required: true},
      control: 'color'
    },

    cardTitle: {
      name: 'Card Title',
      type: {name: 'string'},
      defaultValue: 'Card Title',
      description: 'title of card',
      control: 'text'
    },

    cardDescription: {
      name: 'Card Description',
      type: {name: 'string'},
      defaultValue: 'Card Description',
      description: 'description of card',
      control: 'text'
    },

    cardCurEp: {
      name: 'Current Episode Count',
      type: 'number',
      defaultValue: 12,
      control: 'number'
    },

    cardTotEp: {
      name: 'Total Episode Count',
      type: 'number',
      defaultValue: 24,
      control: 'number'
    },

    cardStatus: {
      name: 'Card Status',
      type: {name: 'string'},
      defaultValue: 'Card Status',
      description: 'status of card',
      control: 'text'
    },

  },
};

const Template = (args) => <AnimeCard {...args} />;

export const Dark = Template.bind({});

Dark.parameters = {
  backgrounds: {default: 'ScoutDark'}
}

Dark.args = {
  src: 'anime.png',
  fontFamily: "Poppins",
  bgcolor: ThemeConfig['dark'].cardBackground,
  hcolor: ThemeConfig['dark'].cardHeader,
  bcolor: ThemeConfig['dark'].cardText,
  dcolor: ThemeConfig['dark'].cardText,
  icolor: ThemeConfig['dark'].text,
  cardTitle: "Attack On Titan",
  cardDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat id eget amet cursus fringilla augue."
  
};

export const Light = Template.bind({});

Light.parameters = {
  backgrounds: {default: 'ScoutLight'}
}

Light.args = {
  src: 'anime.png',
  fontFamily: "Poppins",
  bgcolor: ThemeConfig['light'].cardBackground,
  hcolor: ThemeConfig['light'].cardHeader,
  bcolor: ThemeConfig['light'].cardText,
  dcolor: ThemeConfig['light'].cardText,
  icolor: ThemeConfig['light'].text,
  cardTitle: "Attack On Titan",
  cardDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat id eget amet cursus fringilla augue."

};