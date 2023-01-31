import Basic from "../pages/Basic";
import { Routes, Route } from "react-router-dom";
import Social from "../pages/Social";
const RoutesManager = () => {
  return (
    <Routes>
      <Route path="/" element={<Basic />} />
      <Route path="/social" element={<Social />} />
    </Routes>
  );
};

export default RoutesManager;
