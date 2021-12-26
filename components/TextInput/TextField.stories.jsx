import React from "react";

import TextField from "./text";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Inputs/TextField",
  component: TextField,
};

const Template = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Inputs",
  placeholder: "me@gregogun.com",
};
