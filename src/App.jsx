import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router";

function App() {
    return (
        <>
            <Navbar></Navbar>
            <Outlet />
        </>
    );
}

export default App;
