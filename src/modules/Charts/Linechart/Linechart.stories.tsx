import React from "react";
import dayjs from "dayjs";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Linechart from "./Linechart";

export default {
  title: "Charts/LineChart",
  component: Linechart,
} as ComponentMeta<typeof Linechart>;

const Template: ComponentStory<typeof Linechart> = (args) => (
  <Linechart {...args} />
);

export const Default = Template.bind({});
Default.args = {
  // More on composing args: https://storybook.js.org/docs/react/writing-stories/args#args-composition
  title: "My stock chart",
  width: 900,
  height: 450,
  series: [
    {
      data: [
        [dayjs("2019-01-25").valueOf(), 0.7695],
        [dayjs("2019-01-26").valueOf(), 0.7648],
        [dayjs("2019-01-27").valueOf(), 0.7623],
      ],
    },
  ],
};
