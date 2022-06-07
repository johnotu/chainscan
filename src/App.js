import { Route, Routes } from "react-router-dom";
import Base from "./pages/Base";
// import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Base />}>
        {/* <Route index element={<Home />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
