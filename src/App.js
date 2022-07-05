import { Route, Routes } from "react-router-dom";
import Base from "./pages/Base";
import Block from "./pages/Block";
import Blocks from "./pages/Blocks";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Transactions from "./pages/Transactions";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Base />}>
        <Route index element={<Home />} />
        <Route path="/event" element={<Events />} />
        <Route path="/block">
          <Route index element={<Blocks />} />
          <Route path=":id" element={<Block />} />
        </Route>
        <Route path="/transaction" element={<Transactions />} />
      </Route>
    </Routes>
  );
}

export default App;
