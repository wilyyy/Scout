import React from 'react';

import Filter from '../components/FilterModal';

export default {
  title: 'Filter Modla',
  component: Filter,
};

const Template = (args) => <Filter {...args} />;

export const Default = Template.bind({});
Default.args = {
};