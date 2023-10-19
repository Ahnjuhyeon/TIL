// import { useState, useEffect } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import LandingPage from "./page";
// Create a client
const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <p>yapp</p>
        <LandingPage />
      </QueryClientProvider>
    </>
  );
}

export default App;
