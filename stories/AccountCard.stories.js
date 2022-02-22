import React from 'react';

import AccountCard from '../components/AccountCard';

export default {
  title: 'Account Card',
  component: AccountCard,
};

const Template = (args) => <AccountCard {...args} />;

export const Default = Template.bind({});
Default.args = {
};