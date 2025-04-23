import React from "react";
import Layout from "./Layout.jsx";
import MainRouter from "../MainRouter.jsx";
import "../index.css";  // garante o CSS global

export default function App() {
  return (
    <>
      <Layout />
      <MainRouter />
    </>
  );
}
