import React from "react";
import { Youtube } from "lucide-react";

const Header = () => (
  <header style={{
    padding: "16px 24px",
    background: "rgba(15, 15, 15, 0.95)",
    position: "sticky",
    top: 0,
    zIndex: 100,
    borderBottom: "1px solid #333",
    backdropFilter: "blur(10px)",
    display: "flex",
    alignItems: "center",
    gap: "8px"
  }}>
    <Youtube color="#ff0000" fill="#ff0000" size={32} />
    <div style={{ fontSize: "20px", fontWeight: "bold", letterSpacing: "-0.5px" }}>
      YouTube <span style={{ color: "#aaa", fontWeight: "normal", fontSize: "14px", marginLeft: "4px" }}>Premium Clone</span>
    </div>
  </header>
);

export default Header;