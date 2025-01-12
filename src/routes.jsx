import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import Profile from "./pages/Profile";
import PageNotFound from "./pages/PageNotFound";

export default function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}> </Route>
                <Route path="/watch/:id" element={<Watch/>}> </Route>
                <Route path="/profile/:id" element={<Profile/>}> </Route>
                <Route path="*" element={ <PageNotFound/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}