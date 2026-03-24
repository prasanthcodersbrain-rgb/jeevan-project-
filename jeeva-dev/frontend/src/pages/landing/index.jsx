import React, { useEffect } from "react";
import Header from "../../components/landing/Header";
import Hero from "../../components/landing/Hero";
import Features from "../../components/landing/Features";
import HowItWorks from "../../components/landing/HowItWorks";
import Waitlist from "../../components/landing/Waitlist";
import Footer from "../../components/landing/Footer";
import WaitlistForm from "../../components/landing/WaitlistForm";
import "./landing-overrides.css";

const CODE_STYLES_MARKUP = `<div class="code"><div class="w-embed"><style>
  :root {
    font-size: clamp(62.5%, calc(100vw / 37.5), 100%);
    --global-transition-duration: 240ms;
    --global-transition-easing-function: ease-in-out;
  }
  @media screen and (width >= 768px) {
    :root {
      font-size: max(62.5%, calc(100vw / 144));
    }
  }
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body:has([data-scroll-locking-element="true"]) { overflow: clip; }
  html { overscroll-behavior: none; }
  .w-embed::before, .w-embed::after { content: unset; }
</style></div></div>`;

export default function LandingPage() {
  useEffect(() => {
    document.body.className = "body luffu-react-body";
    document.body.setAttribute("data-page-scrolled-down", "false");

    const onScroll = () => {
      const scrolled = window.scrollY > 24;
      document.body.setAttribute("data-page-scrolled-down", scrolled ? "true" : "false");
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.body.className = "";
      document.body.removeAttribute("data-page-scrolled-down");
    };
  }, []);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: CODE_STYLES_MARKUP }} />
      <Header />
      <main className="main">
        <Hero />
        <Features />
        <HowItWorks />
        <Waitlist />
      </main>
      <Footer />
      <WaitlistForm />
    </>
  );
}
