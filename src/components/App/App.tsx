/* eslint-disable import/no-extraneous-dependencies */
import React, { FC } from "react";
import "./App.scss";
import { Theme, presetGpnDefault } from "@consta/uikit/Theme";
import SignUp from "../../pages/SignUp/SignUp";

const App: FC = (): React.ReactElement => {
  return (
    <Theme preset={presetGpnDefault}>
      <SignUp />
    </Theme>
  );
};

export default App;
