import React from "react";
import logo from "./logo.svg";
import { Navbar } from "./Components/Navbar/Navbar";
import "./App.css";
import Homepage from "./Pages/Homepage";

function App() {
	return (
		<div className="App h-100">
			<Navbar />
			<Homepage />
		</div>
	);
}

export default App;
