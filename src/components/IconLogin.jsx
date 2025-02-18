import { Link } from "react-router-dom";

const IconLogin = ({ isOpen }) => {

    return (
            <div className={`fixed bg-white right-7 rounded-md p-3 mt-4 text-black text-center transition-opacity duration-500 ease-in-out space-y-2  ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                <Link to="/LoginPage" className="cursor-pointer">LOGIN</Link>
                <div className="bg-gray-300 w-full h-0.5"></div>
                <Link to="/LoginPage" className="cursor-pointer">REGISTRAR-SE</Link>
            </div>      
    )
}

export default IconLogin;