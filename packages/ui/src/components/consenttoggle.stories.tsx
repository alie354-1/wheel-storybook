import { Meta, StoryObj } from "@storybook/react-vite";
import { ConsentToggle } from "./consenttoggle";

const meta: Meta<typeof ConsentToggle> = {
  title: "UI/ConsentToggle",
  component: ConsentToggle,
  tags: ["autodocs"],
  argTypes: {
    onConsentChange: { action: "consentChanged" },
    label: { control: "text" },
    initialConsent: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof ConsentToggle>;

export const Default: Story = {
  args: {
    label: "I agree to the terms and conditions",
    initialConsent: false,
  },
};

export const Consented: Story = {
  args: {
    ...Default.args,
    initialConsent: true,
  },
};
