import { Routes, Route } from "react-router-dom";
import ResearchPage from "./Pages/Research";
import Layout from "./Components/Layout/Layout";


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/Supporting Research" element={<ResearchPage />} />
      </Routes>
    </Layout>
  );
}

export default App;