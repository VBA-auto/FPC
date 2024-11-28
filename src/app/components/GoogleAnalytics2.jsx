"use client"; // This is necessary to ensure the component runs on the client side
import { useEffect } from "react";

const GoogleAnalytics2 = () => {
  useEffect(() => {
    // Load the Google Analytics script
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-YGCT8E4BKF";
    script.async = true;
    document.head.appendChild(script);

    // Initialize Google Analytics
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-YGCT8E4BKF");
    };

    // Cleanup script when the component is unmounted
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default GoogleAnalytics2;
