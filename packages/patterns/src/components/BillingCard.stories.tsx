import { Meta, StoryFn } from "@storybook/react-vite";
import { BillingCard, BillingCardProps } from './billingcard';

export default {
  title: 'Patterns/BillingCard',
  component: BillingCard,
} as Meta;

const Template: StoryFn<BillingCardProps> = (args) => <BillingCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  billing: {
    id: '1',
    name: 'Billing Info',
  },
  showPaymentHistory: true,
  showInvoices: true,
  showActions: true,
  permissions: ['edit'],
};
