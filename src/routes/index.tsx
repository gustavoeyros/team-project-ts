import Basic from "../pages/Basic";
import { Routes, Route } from "react-router-dom";
import Social from "../pages/Social";
import CertificatesForm from "../components/CertificatesForm";
const RoutesManager = () => {
  return (
    <Routes>
      <Route path="/" element={<Basic />} />
      <Route path="/social" element={<Social />} />
      <Route path="/certificates" element={<CertificatesForm />} />
    </Routes>
  );
};

export default RoutesManager;
