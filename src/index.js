import React from "react";
import ReactDOM from "react-dom";

import ImageFeed from "./imagefeed";


import "./styles.css";

function App() {
  return (
    <div className="App">
      <h4>Image feed</h4>
      <ImageFeed />
     
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
