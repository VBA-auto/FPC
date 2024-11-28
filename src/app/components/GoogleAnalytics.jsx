"use client"; // This is necessary to ensure the component runs on the client side
import { useEffect } from "react";

const GoogleAnalytics = () => {
  useEffect(() => {
    // Load the Google Analytics script
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-K4XM8XMR";
    script.async = true;
    document.head.appendChild(script);

    // Initialize Google Analytics
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-K4XM8XMR");
    };

    // Cleanup script when the component is unmounted
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default GoogleAnalytics;
