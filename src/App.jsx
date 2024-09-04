import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import HomePage from "./pages/HomePage";
import AdminForm from "./pages/AdminForm";
import EditForm from "./pages/EditForm";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminForm />} />
        <Route path="/3" element={<EditForm />} />
        <Route path="/detail-page/:index" element={<DetailPage />} />
      </Routes>
    </>
  );
}
export default App;
