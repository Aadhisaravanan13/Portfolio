import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Screens/Home";

export default function Navigator() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/"  element={<Home />} />
    
    </Routes>
    </BrowserRouter>
    </>
  )
}
