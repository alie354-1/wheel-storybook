import { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";
import { OnboardingWizard } from "./OnboardingWizard";

const meta: Meta<typeof OnboardingWizard> = {
  title: "UI/OnboardingWizard",
  component: OnboardingWizard,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  parameters: {
    mockData: [
      {
        url: "/api/user",
        method: "GET",
        status: 200,
        response: {
          id: "123",
        },
      },
      {
        url: "/api/onboarding",
        method: "POST",
        status: 200,
        response: {},
      },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof OnboardingWizard>;

export const Default: Story = {
  args: {},
};
