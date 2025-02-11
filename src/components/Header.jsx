import { Search, ShoppingCart, User } from "lucide-react";
import logo_trans from "../assets/logo_trans.png";
import { useState } from "react";
import Carrinho from "./Carrinho";
import IconLogin from "./IconLogin";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  
  const toggleChart = () => setIsOpen(!isOpen);
  const closeChart = () => setIsOpen(false);

  const toggleLogin = () => setIsOpenLogin(!isOpenLogin)
  const closeLogin = () => setIsOpenLogin(false)

  return (
    <div className=" bg-black flex justify-between items-end h-20 px-10 py-7 w-full ">
      <div>
        <a href="/">
          <img src={logo_trans} alt="" />
        </a>
      </div>
      <div>
        <ul className="flex space-x-5 text-white font-bold">
          <li>
            <a href="">ROUPAS</a>
          </li>
          <li>
            <a href="">ACESSÓRIOS</a>
          </li>
          <li>
            <a href="">OFERTAS</a>
          </li>
          <li>
            <a href="">ATENDIMENTO</a>
          </li>
        </ul>
      </div>

      <div>
        <ul className="flex space-x-4">
          <li className="text-white">
            <Search />
          </li>
          <li className="text-white">
            <button className="cursor-pointer" onClick={toggleLogin}>
              <User />
            </button>
          </li>
          <li className="text-white">
            <button className="cursor-pointer" onClick={toggleChart}>
              <ShoppingCart />
            </button>
          </li>
        </ul>
      </div>
      
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={closeChart}
        />
      )}

      {isOpenLogin && (
        <div className="fixed inset-0 bg-black/50"
        onClick={closeLogin}
        />
      )}

      <div className="absolute">
        <Carrinho isOpen={isOpen} closeChart={closeChart} />
      </div>

      <div className="absolute">
        <IconLogin isOpen={isOpenLogin}/>
      </div>
    </div>
  );
};

export default Header;
