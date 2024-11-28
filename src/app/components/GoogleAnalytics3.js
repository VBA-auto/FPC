"use client"; 
import { useEffect } from "react";

const GoogleAnalytics3 = () => {
 useEffect(() => {
    // Load the Google Analytics script
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=AW-732915422";
    script.async = true;
    document.head.appendChild(script);

    // Initialize Google Analytics
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "AW-732915422");

      // Add the event snippet for 'ads_conversion_Contact_Us_1'
      gtag("event", "ads_conversion_Contact_Us_1", {
        // Add your event parameters here, if any
      });
    };

    // Cleanup the script when the component is unmounted
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return null;
};

export default GoogleAnalytics3;
