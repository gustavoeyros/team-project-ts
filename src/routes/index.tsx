import Basic from "../pages/Basic";
import { Routes, Route } from "react-router-dom";
const RoutesManager = () => {
  return (
    <Routes>
      <Route path="/" element={<Basic />} />
    </Routes>
  );
};

export default RoutesManager;
