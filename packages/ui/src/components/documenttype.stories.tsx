import { Meta, StoryObj } from "@storybook/react-vite";
import { DocumentType } from "./documenttype";

const meta: Meta<typeof DocumentType> = {
  title: "UI/DocumentType",
  component: DocumentType,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: {
        type: "select",
        options: [
          "document",
          "spreadsheet",
          "presentation",
          "pdf",
          "image",
          "video",
          "other",
        ],
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof DocumentType>;

export const Document: Story = {
  args: {
    type: "document",
  },
};

export const Spreadsheet: Story = {
  args: {
    type: "spreadsheet",
  },
};

export const Presentation: Story = {
  args: {
    type: "presentation",
  },
};

export const PDF: Story = {
  args: {
    type: "pdf",
  },
};

export const Image: Story = {
  args: {
    type: "image",
  },
};

export const Video: Story = {
  args: {
    type: "video",
  },
};

export const Other: Story = {
  args: {
    type: "other",
  },
};
