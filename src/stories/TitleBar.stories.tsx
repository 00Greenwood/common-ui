import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { TitleBar } from "../components/TitleBar";

export default {
  title: "TitleBar",
  component: TitleBar,
} as ComponentMeta<typeof TitleBar>;

const Template: ComponentStory<typeof TitleBar> = (args) => (
  <TitleBar {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  title: "Title",
};
