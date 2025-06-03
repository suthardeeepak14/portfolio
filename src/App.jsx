import { Toaster } from "react-hot-toast";
import CookieConsent from "react-cookie-consent";

import Layout from "./components/Layout";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <Layout>
      <Toaster position="top-right" />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />

   
      <CookieConsent
        location="bottom"
        buttonText="Got it!"
        cookieName="deepak-cookie-consent"
        containerClasses="bg-zinc-900 text-white flex justify-between items-center rounded-lg  shadow-lg"
        contentClasses="text-sm"
        buttonClasses="bg-red-500 hover:bg-red-600 text-white rounded "
        buttonStyle={{
          background: "#ef4444", 
          color: "#fff",
          borderRadius: "0.25rem",
          border: "none",
          boxShadow: "none",
          fontWeight: "bold",
          cursor: "pointer",
          padding: "8px 16px",
          
        }}
        expires={30} 
      >
        This website uses cookies to ensure you get the best experience.
        <a
          href="https://www.cookiesandyou.com/"
          className="text-red-300 underline ml-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
      </CookieConsent>
    </Layout>
  );
}

export default App;
