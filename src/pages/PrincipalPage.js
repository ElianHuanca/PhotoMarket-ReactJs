import { About } from "../components/About";
import { Hero } from "../components/Hero";
import Navbar from "../components/navbar";

export default function PrincipalPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
    </>
  );
}
