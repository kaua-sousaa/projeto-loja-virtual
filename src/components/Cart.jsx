import { CircleX, X } from "lucide-react";
import Button from "./Button";
import { useCart } from "../context/CartContext";

const Carrinho = ({ isOpen, closeCart }) => {
  
  const {cart, setCart} = useCart()

  const removeFromCart = (index) => {
    console.log(cart);
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);

    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const handlePurchase = () => {
    alert("Itens comprados com sucesso!");
    const newCart = [];
    setCart(newCart);
  };
  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 p-4 transform transition-transform duration-500 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } overflow-y-auto   `}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Carrinho</h2>
        <button onClick={closeCart}>
          <X size={24} />
        </button>
      </div>
      {cart <= 0 ? (
        <div className="mt-4">
          <p className="text-gray-600">Seu carrinho está vazio.</p>
        </div>
      ) : (
        <div className="mt-10">
          {cart.map((product, index) => (
            <div key={index} className="flex space-y-10 justify-between ">
              <div>
                <img src={product.img} alt="" width={70} />
              </div>
              <div className="w-[160px]">
                <h1>{product.name}</h1>
                <p>{product.price}</p>
              </div>
              <CircleX
                className="cursor-pointer"
                onClick={() => removeFromCart(index)}
              />
            </div>
          ))}
          <div className="flex justify-center">
            <Button className="w-[200px]" onClick={() => handlePurchase()}>
              COMPRAR
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrinho;
