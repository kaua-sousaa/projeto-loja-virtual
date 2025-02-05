import { Search, ShoppingCart, User } from 'lucide-react'
import logo_trans from "../assets/logo_trans.png"
import { useState } from 'react'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSideBar = () => setIsOpen(!isOpen);

    return (
        <div className=" bg-black flex justify-between items-end h-20 px-10 py-7 w-full ">
            <div>
                <img src={logo_trans} alt=""/>
            </div>
            <div>
                <ul className="flex space-x-5 text-white font-bold">
                    <li><a href="">ROUPAS</a></li>
                    <li><a href="">ACESSÓRIOS</a></li>
                    <li><a href="">OFERTAS</a></li>
                    <li><a href="">ATENDIMENTO</a></li>
                </ul>
            </div>

            <div>
                <ul className="flex space-x-4">
                    <li className="text-white"><Search/></li>
                    <li className="text-white"><User/></li>
                    <li className="text-white">
                        <button className='cursor-pointer' onClick={toggleSideBar}><ShoppingCart/></button>
                    </li>
                </ul>
            </div>
            
        </div>
    )
} 

export default Header;