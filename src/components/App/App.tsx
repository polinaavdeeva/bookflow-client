import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";

const App: FC = (): React.ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<></>} />
    </Routes>
  );
};

export default App;
