import { Route, Routes } from "react-router-dom";
import Base from "./pages/Base";
import Events from "./pages/Events";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Base />}>
        <Route index element={<Home />} />
        <Route path="/event" element={<Events />} />
      </Route>
    </Routes>
  );
}

export default App;
