import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PageLayout from "./Pages/PageLayout";

function App() {
  return (
    <Router>
      <Suspense fallback="">
        <PageLayout />
      </Suspense>
    </Router>
  );
}

export default App;
