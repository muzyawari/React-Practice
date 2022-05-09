import Tab from "./routes/tabs/tab";
import Menu from "./routes/menu/menu";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="tabby">
      <Routes>
        <Route index element={<Tab />}></Route>
        <Route path="modal" element={<Menu />}></Route>
      </Routes>
    </div>
  );
}

export default App;
