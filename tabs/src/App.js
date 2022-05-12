import Tab from "./routes/tabs/tab";
import Menu from "./routes/menu/menu";
import Modal from "./routes/modal/modal";
import Carousel from "./routes/carousel/carousel";
import Calculator from "./routes/calculator/calculator";
import Popup from "./routes/popup/popup";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="tabby">
      <Routes>
        <Route index element={<Tab />}></Route>
        <Route path="menu" element={<Menu />}></Route>
        <Route path="modal" element={<Modal />}></Route>
        <Route path="carousel" element={<Carousel />}></Route>
        <Route path="calculator" element={<Calculator />}></Route>
        <Route path="popup" element={<Popup />}></Route>
      </Routes>
    </div>
  );
}

export default App;
