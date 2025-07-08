import "./page-wrapper.scss";
import Header from "../header/header";
import Footer from "../footer/footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PersonalAccount from "../../pages/personal-account/personal-account";
import LoginPage from "../../pages/login-page/login-page";
import WearPage from "../../pages/wear-page/wear-page";


function PageWrapper() {
  return (
    <>
      <Router>
        <Header />
        <main className="main">
          <Routes>
            <Route path="/wear-page" element={<WearPage />} />
            <Route path="/personal-account" element={<PersonalAccount />} />
            <Route path="/login-page" element={<LoginPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default PageWrapper;
