import React, { useCallback } from "react";
import Test from "./Test";

const Dashboard = (ui) => {
  return <div>{ui}</div>;
};

const Ui = () => {
  return <div>{["a", "b"].map((t) => Test(t))}</div>;
};

const Settings = () => <h1>Settings</h1>;

const Render = (content) => {
  const ui = useCallback(() => ["a", "b"].map((t) => Test(t)), []);
  switch (content) {
    case "ui":
      //WORKS
      //return Ui;

      //DOESN'T WORK
      return ui;
    case "settings":
      return Settings;
    default:
      return <div />;
  }
};

export default Render;
