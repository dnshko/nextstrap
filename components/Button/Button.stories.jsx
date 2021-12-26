import React from "react";

import FormButton from "./index";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "UI/FormButton",
  component: FormButton,
};

const Template = (args) => <FormButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: "primary",
  size: "lg",
  children: "Button",
};
