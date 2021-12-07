import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ButtonMui from "./ButtonMui";

export default {
  title: "React Component Library/ButtonMui",
  component: ButtonMui,
} as ComponentMeta<typeof ButtonMui>;

const Template: ComponentStory<typeof ButtonMui> = (args) => (
  <ButtonMui {...args} />
);

export const VariantOne = Template.bind({});
VariantOne.args = {
  text: "Text Button",
  variantStyle: "text",
};

export const VariantTwo = Template.bind({});
VariantTwo.args = {
  text: "Contained Button",
  variantStyle: "contained",
};

export const VariantThree = Template.bind({});
VariantThree.args = {
  text: "Outlined Button",
  variantStyle: "outlined",
};
