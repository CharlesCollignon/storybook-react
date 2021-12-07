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
  text: "Je suis un Bouton MUI",
  variantStyle: "text",
};

export const VariantTwo = Template.bind({});
VariantTwo.args = {
  text: "Je suis un Bouton MUI",
  variantStyle: "contained",
};

export const VariantThree = Template.bind({});
VariantThree.args = {
  text: "Je suis un Bouton MUI",
  variantStyle: "outlined",
};
