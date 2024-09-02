import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Speech from "./Components/Speech";
import Text from "./Components/Text";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/speech" element={<Speech />} />
          <Route path="/text" element={<Text />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
