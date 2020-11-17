import React from "react";
import ReactDOM from "react-dom";
import NyanCat from "./components/NyanCat";

const App = () => (
    <div>
    <h1>My React & Typescript App!</h1>
    <NyanCat message="Hello"/>
    </div>
);

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);