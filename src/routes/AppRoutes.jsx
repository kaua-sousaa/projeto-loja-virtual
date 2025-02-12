import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import LoginPage from "../pages/LoginPage";
import RoupasPage from "../pages/RoupasPage";
import ProdutoPage from "../pages/ProdutoPage";

const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/LoginPage" element={<LoginPage/>}/>
            <Route path="/RoupasPage" element={<RoupasPage/>}/>
            <Route path="/ProdutoPage" element={<ProdutoPage/>}/>
        </Routes>
    )
}

export default AppRoutes;