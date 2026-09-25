import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import SmartMouse from "react-smart-mouse";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SmartMouse
      defaultColor="white"
      defaultWidth="20px"
      defaultHeight="20px"
      zIndex={10}
      lerp={0.15}
      blendMode="difference"
      transitionDuration="0.3s"
      aStyle={{
        color: "white",
        width: "60px",
        height: "60px",
      }}
      buttonStyle={{
        color: "white",
        width: "60px",
        height: "60px",
      }}
      textStyle={{
        fontSize: "12px",
        fontWeight: 600,
        color: "#000",
      }}
    />
    <App />
  </StrictMode>,
);