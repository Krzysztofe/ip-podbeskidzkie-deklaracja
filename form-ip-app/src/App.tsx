import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const LoadingPage = lazy(() => import("./pages/LoadingPage"));
const IndexSteps = lazy(() => import("./pages/steps/IndexSteps"));

function App() {
  return (
    <BrowserRouter basename="/deklaracja">
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<IndexSteps />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
