/** @jsx jsx */
import React from "react";

const centerView = {
  height: "100vh",
  justifyContent: "center",
  alignItems: "center",
  display: "flex"
};

const center = {
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
  fontSize: "18px",
  margin: "auto",
  maxWidth: 400
};

const title = {
  fontSize: "32px",
  fontWeight: "bold",
  marginBottom: "16px",
  textAlign: "center"
};

const secureArea = {
  margin: 16
};

const styles = {
  centerView: centerView,
  card: card,
  secureArea: secureArea,
  center: center,
  title: title
};

export default styles;
