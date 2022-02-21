import React from 'react';

import FilterModal from '../components/FilterModal';

export default {
  title: 'Filter Modal',
  component: FilterModal,
};

const Template = (args) => <FilterModal {...args} />;

export const Default = Template.bind({});
Default.args = {
};