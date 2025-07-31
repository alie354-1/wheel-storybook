import { Meta, StoryFn } from "@storybook/react-vite";
import {
  BillingControls,
  BillingControlsProps,
} from './BillingControls';
import { BillingInfo, Workspace } from './types';

export default {
  title: 'Patterns/Workspace/BillingControls',
  component: BillingControls,
} as Meta;

const Template: StoryFn<BillingControlsProps> = (args) => (
  <BillingControls {...args} />
);

const workspace: Workspace = { id: '1', name: 'Test Workspace' };
const billingInfo: BillingInfo = { id: '1', rate: 100, currency: 'USD' };

export const Default = Template.bind({});
Default.args = {
  workspace,
  billing: billingInfo,
  onInvoiceGenerate: (data) => alert(`Invoice generated: ${data.id}`),
  onPaymentProcess: (payment) => alert(`Payment processed: ${payment.id}`),
  onReportGenerate: (type) => alert(`Report generated: ${type}`),
};

export const WithAnalytics = Template.bind({});
WithAnalytics.args = {
  ...Default.args,
  showAnalytics: true,
};
