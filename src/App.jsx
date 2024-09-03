import { useEffect } from "react";
import {  Routes, Route, useNavigationType, useLocation,
} from "react-router-dom";
import Navbar from "./pages/Navbar";
import ListPage from "./pages/ListPage";
import AdminForm from "./pages/AdminForm";
import EditForm from "./pages/EditForm";
import DetailPage from "./pages/DetailPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/admin":
        title = "";
        metaDescription = "";
        break;
      case "/3":
        title = "";
        metaDescription = "";
        break;
      case "/detail-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/admin" element={<AdminForm />} />
        <Route path="/3" element={<EditForm />} />
        <Route path="/detail-page/:index" element={<DetailPage />} />
      </Routes>
    </>
  );
}
export default App;
