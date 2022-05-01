import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { GameProvider } from "./contexts/game-context";
import {client,ApolloProvider}from "./contexts/graphql-apollo-provider";
import { BrowserRouter as Router } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


root.render(
  <StrictMode>
    <Router>
    <ApolloProvider client={client}>
    <GameProvider>
      <App />
    </GameProvider>
    </ApolloProvider>
    </Router>
  </StrictMode>
);
