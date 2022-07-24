import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import HomePage from "./pages/home";
import FaqPage from "./pages/faq";
import ContactPage from "./pages/contact";
import ProofPage from "./pages/proof";
import ReferralPage from "./pages/referral";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import history from "./browserHistory";
import AuthProvider from "./Authenticate";
import SignInPage from "./pages/auth/signin";
import SignUpPage from "./pages/auth/signup";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <BrowserRouter history={history}>
          <Header />
          <Routes>
            <Route path="/" index element={<HomePage />} />
            <Route path="/signin" index element={<SignInPage />} />
            <Route path="/signup" index element={<SignUpPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/proof" element={<ProofPage />} />
            <Route path="/referral" element={<ReferralPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
