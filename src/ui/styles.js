/** @jsx jsx */
import React from "react";

const centerView = {
  height: "100vh",
  justifyContent: "center",
  alignItems: "center",
  display: "flex"
};

const card = {
  backgroundColor: "#fff",
  width: "100%",
  padding: "24px",
  borderRadius: "8px",
  color: "#000",
  boxShadow: "2px 4px 24px 0 rgba(0, 0, 0, 0.15)",
  boxSizing: "border-box",
  fontSize: "18px"
};

const secureArea = {
  margin: 16
};

const styles = {
  centerView: centerView,
  card: card,
  secureArea: secureArea
};

export default styles;
