import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { SubSection } from "../components/SubSection";

export default {
  title: "SubSection",
  component: SubSection,
} as ComponentMeta<typeof SubSection>;

const Template: ComponentStory<typeof SubSection> = (args) => (
  <SubSection {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  title: "Title",
  items: ["Item A", "Item B", "Item C"],
};
