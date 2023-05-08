import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import React, { useState } from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import DataPrivacy from "./components/useCases/DataPrivacy";
import DeepTech from "./components/useCases/DeepTech";
import LanguageTranslation from "./components/useCases/LanguageTranslation";
import IndustryDetails from "./components/industry/IndustryDetails";
import ContactUs from "./components/contactUs/ContactUs";
import Publications from "./components/publications/Publications";
import Teams from "./components/teams/Teams";

// import LoginApp from "./components/LoginApp";
// import  from "react/cjs/react.production.min";

function App() {
  const [TryingToLogin, setTryingToLogin] = useState(false);
  return (
    <React.Fragment>
      <HashRouter>
        <Navbar />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header setTryingToLogin={setTryingToLogin} />
                <Main />
              </>
            }
          />
            <Route
            exact
            path="/publications"
            element={
              <Publications/>
            }
          />
           <Route
            exact
            path="/teams"
            element={
              <Teams/>
            }
          />
          <Route
            exact
            path="/contactUs"
            element={
              <ContactUs/>
            }
          />
          <Route
            exact
            path="/industry/:type"
            element={
              <IndustryDetails />
            }
          />
          <Route
            exact
            path="/deepTech"
            element={
            <DeepTech />
            }
          />
          <Route
            exact
            path="/dataPrivacy"
            element={
              <DataPrivacy />
            }
          />
          <Route
            exact
            path="/languageTranslation"
            element={
              <LanguageTranslation />
            }
          />
        </Routes>
      </HashRouter>
      <Footer />
    </React.Fragment>
  );
}

export default App;
