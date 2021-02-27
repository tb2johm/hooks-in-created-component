import React, { useCallback } from "react";
import Test from "./Test";

const Dashboard = (ui) => <div>{ui}</div>;
const Settings = () => <h1>Settings</h1>;

const Ui = (variables) => Dashboard(
  variables.map((t) => Test(t))
);


export const Render = (content) => {
  const UiCallback = useCallback((variables) =>
    Dashboard(
      variables.map((t) => Test(t)),
    ),[]
  );

  switch (content.type) {
    case "ui":
      // DOESN'T WORK
      // This was the first attempt done.
      // When updating the value the full Dashboard is rerendered
      const ui = content.variables.map((t) => Test(t))
      return () => Dashboard(ui);

    case "ui-callback":
      // WORKS
      // After lots of investiations and trial and error
      // we found this callback that works.
      return () => UiCallback(content.variables)

    case "ui-no-callback-but-works":
      // ALSO WORKS
      // Now I also found by chance that this also works
      return () => Ui(content.variables);

    case "settings":
      return Settings;

    default:
      return <div />;
  }
};
