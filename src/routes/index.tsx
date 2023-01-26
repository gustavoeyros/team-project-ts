//import Basic from "../pages/Basic";
import FormStructure from "../components/FormStructure";
import { Routes, Route } from "react-router-dom";
const RoutesManager = () => {
  return (
    <Routes>
      <Route path="/" element={<FormStructure />} />
    </Routes>
  );
};

export default RoutesManager;
