import React from "react";
import Button from "./Button";

export default {
  title: "UI/atoms/button",
  component: Button,
  args: {
    children: "component content"
  }
};
const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
