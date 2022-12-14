import { ComponentStory, ComponentMeta } from "@storybook/react";

import App from "../App";
import "../index.css";

export default {
  title: "App",
  component: App,
} as ComponentMeta<typeof App>;

export const Default: ComponentStory<typeof App> = () => <App />;
