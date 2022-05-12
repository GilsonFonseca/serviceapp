import * as React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import Layout from "../Layout/Layout1";

export default function RouterMap() {
  return (
    <div className="App">
      <h1>Bem Vindo ao Digital Appointment!!</h1>
      <Layout>
        <Routes>
            <Route path="/" element={<App />} />
              {/* <Route path="about" element={<About />} /> */}
        </Routes>
      </Layout>
    </div>
  );
}