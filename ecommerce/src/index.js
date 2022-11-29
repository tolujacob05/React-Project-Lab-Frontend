import React from "react";
import ReactDOM from "react-dom";
import Main from "./containers/Main";
import "./App.css";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import MyMapComponent from "./containers/MyMapComponent";


const render = (status) => {
  switch (status) {
    case Status.LOADING:
      return (<>loading.....</>)
    case Status.FAILURE:
      return <>Failed</>;
    case Status.SUCCESS:
      return <MyMapComponent />;
  }
};

ReactDOM.render(
  <Wrapper apiKey={"YOUR_API_KEY"}>
    <Main />
  </Wrapper>,
  document.getElementById("root")
);
