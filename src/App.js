import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from "./component/layout/layout";
import Notice from "./component/notice/notice";
import Patent from "./component/patent/patent";
import Right from "./component/right/right";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}></Route>
        <Route path="/notice" element={<Notice/>}></Route>
        <Route path="/patent" element={<Patent/>}></Route>
        <Route path="/right" element={<Right/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
