import React from "react";

export default function PageTitle({ title }) {
  const style = {
    background: "#FFFFFF",
    fontFamily: "poppins",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "35px",
    padding:"0px 2% 3px",
    textTransform:"capitalize"
  };
  return <div style={style}>{title}</div>;
}
