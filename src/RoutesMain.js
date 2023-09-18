import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Signin from "./Pages/Common/Login";

export default function RoutesMain() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Signin />} />
                <Route path="/dashboard" exact element={<Dashboard />} />
                <Route path="*" element={<Navigate to={"/"} />} />
            </Routes>
        </BrowserRouter>
    )
}
