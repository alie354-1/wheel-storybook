import { Meta, StoryFn } from "@storybook/react-vite";
import { RefreshPage, RefreshPageProps } from './RefreshPage';

export default {
  title: 'Patterns/Errors/RefreshPage',
  component: RefreshPage,
} as Meta;

const Template: StoryFn<RefreshPageProps> = (args) => <RefreshPage {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithConfirmation = Template.bind({});
WithConfirmation.args = {
  confirmBeforeRefresh: true,
};
