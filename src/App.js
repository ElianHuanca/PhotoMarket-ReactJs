/* import { About } from "./components/About";
import { Hero } from "./components/Hero";
import Navbar from "./components/navbar";
import Support from "./components/Support";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Support/> */
import React from "react";
import { AppRouter } from "./router/AppRouter";
import "./index.css";
export const App = () => {
  return (
    <>
      <AppRouter />
    </>
  );
};
