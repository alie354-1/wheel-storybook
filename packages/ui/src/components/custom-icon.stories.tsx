import type { Meta, StoryObj } from "@storybook/react-vite";
import { Icon } from './icon';

const meta: Meta<typeof Icon> = {
  title: 'Components/Media/CustomIcon',
  component: Icon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A component for displaying custom SVG icons.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

const CustomSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

export const CustomIcon: Story = {
  render: () => <Icon size="xl" as={CustomSvg} />,
};
