import Tab from "./routes/tabs/tab";
import Menu from "./routes/menu/menu";
import Modal from "./routes/modal/modal";
import Carousel from "./routes/carousel/carousel";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="tabby">
      <Routes>
        <Route index element={<Tab />}></Route>
        <Route path="menu" element={<Menu />}></Route>
        <Route path="modal" element={<Modal />}></Route>
        <Route path="carousel" element={<Carousel />}></Route>
      </Routes>
    </div>
  );
}

export default App;
