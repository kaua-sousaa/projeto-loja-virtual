import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import LoginPage from "../pages/LoginPage";
import RoupasPage from "../pages/RoupasPage";

const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/LoginPage" element={<LoginPage/>}/>
            <Route path="/RoupasPage" element={<RoupasPage/>}/>
        </Routes>
    )
}

export default AppRoutes;