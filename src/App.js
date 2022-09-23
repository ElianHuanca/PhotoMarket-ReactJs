import { About } from "./components/About";
import { Hero } from "./components/Hero";
import Navbar from "./components/navbar";
import Support from "./components/Support";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Support/>
    </>
  )
}