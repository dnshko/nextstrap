import React from "react";

import FormCard from "./index";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "UI/Card",
  component: FormCard,
};

const Template = (args) => <FormCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  border: "primary",
  bg: "primary",
  children: "body text",
};
