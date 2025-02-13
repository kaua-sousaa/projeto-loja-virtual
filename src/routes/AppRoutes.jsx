import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import LoginPage from "../pages/LoginPage";
import ClothingPage from "../pages/ClothingPage";
import ProductPage from "../pages/ProductPage";
import SupportPage from "../pages/SupportPage";

const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/LoginPage" element={<LoginPage/>}/>
            <Route path="/ClothingPage" element={<ClothingPage/>}/>
            <Route path="/ProductPage" element={<ProductPage/>}/>
            <Route path="/Support" element={<SupportPage/>}/>
        </Routes>
    )
}

export default AppRoutes;