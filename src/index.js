import ReactDOM from "react-dom";
import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import Footer from "./Footer";

ReactDOM.render(
    <div>
        <Navbar />
        <Card />
        <Footer />
    </div>,
    document.getElementById("root")
);