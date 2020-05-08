import React from "react";

import StateProvider from "./state";
import Pages from "./pages";

import "src/i18n";

const App: React.FC = () => {
  return (
    <StateProvider>
      <Pages />
    </StateProvider>
  );
};

export default App;
