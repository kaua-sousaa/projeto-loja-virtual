const IconLogin = ({ isOpen }) => {

    return (
            <div className={`fixed bg-white right-7 rounded-md p-3 mt-4 text-black text-center transition-opacity duration-500 ease-in-out space-y-2  ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                <a href="/LoginPage" className="cursor-pointer">LOGIN</a>
                <div className="bg-gray-300 w-full h-0.5"></div>
                <a href="/LoginPage" className="cursor-pointer">REGISTRAR-SE</a>
            </div>      
    )
}

export default IconLogin;