import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const LoadingPage = lazy(() => import("./pages/LoadingPage"));
const IndexForm = lazy(() => import("./pages/indexForm/IndexForm"));

function App() {
  return (
    <BrowserRouter basename="/deklaracja">
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<IndexForm />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
