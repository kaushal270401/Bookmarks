import { QueryClient, QueryClientProvider } from "react-query";
import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./component/Home";
import Table from "./component/Table";
import Bookmark from "./component/Bookmark";

function App() {
  const queryClient = new QueryClient();
  // const Home = lazy(() => import("./component/Home"));
  // const Table = lazy(() => import("./component/Table"));

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route
              path="table"
              element={
                <React.Suspense fallback={<>... Loading</>}>
                  <Table />
                </React.Suspense>
              }
            />
            <Route
              path="table/:id/bookmark"
              element={
                <React.Suspense fallback={<>... Loading</>}>
                  <Bookmark />
                </React.Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
