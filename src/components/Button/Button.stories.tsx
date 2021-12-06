import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

export default {
  title: "React Component Library/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const JeSuisUnBouton = Template.bind({});
JeSuisUnBouton.args = {
  label: "Je suis un bouton",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Click ME !!",
};
