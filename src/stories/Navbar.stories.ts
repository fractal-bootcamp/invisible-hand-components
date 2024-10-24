import type { Meta, StoryObj } from "@storybook/react";

import Navbar from "@/components/Navbar";

const meta = {
  title: "Navbar",
  component: Navbar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  // args: {
  //   primary: true,
  //   label: "Button",
  // },
};
