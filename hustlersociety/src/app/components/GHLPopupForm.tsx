"use client";

import { useEffect } from "react";

export default function GHLPopupForm() {
  useEffect(() => {
    // Dynamically load the GHL script on the client side
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up to avoid duplicate scripts if unmounted
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="relative flex justify-center items-center py-10">
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/KPR1tIJKO8JvEMqA3EMb"
        style={{
          display: "none",
          width: "100%",
          height: "100%",
          border: "none",
          borderRadius: "15px",
        }}
        id="popup-KPR1tIJKO8JvEMqA3EMb"
        data-layout="{'id':'POPUP'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="leadCollected"
        data-deactivation-value=""
        data-form-name="Opt-in form"
        data-height="500"
        data-layout-iframe-id="popup-KPR1tIJKO8JvEMqA3EMb"
        data-form-id="KPR1tIJKO8JvEMqA3EMb"
        title="Opt-in form"
      ></iframe>
    </div>
  );
}
