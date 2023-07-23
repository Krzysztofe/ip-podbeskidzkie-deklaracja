import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StepsContextProv from "./context/ContextProv";

const LoadingPage = lazy(() => import("./pages/LoadingPage"));
const IndexSteps = lazy(() => import("./pages/steps/IndexSteps"));

function App() {
  return (
    <BrowserRouter basename="/deklaracja">
      <Suspense fallback={<LoadingPage />}>
        <StepsContextProv>
          <Routes>
            <Route path="/" element={<IndexSteps />} />
          </Routes>
        </StepsContextProv>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
