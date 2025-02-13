import CheckBox from "../components/CheckBox";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Clothing from "../components/Clothing";
import blusa from "../assets/blusa.png";
import Button from "../components/Button";
import { useState } from "react";

const ProdutoPage = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedSize);
    console.log(quantity);
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="flex justify-center space-x-40">
        <div className="mt-10">
          <Clothing img={blusa} showButtton={false} className="w-[400px]" />
        </div>
        <div className="space-y-5 mt-10 ">
          <h1 className="text-3xl font-bold">CAMISETA PRETA BÁSICA</h1>
          <p className="text-xl font-medium">R$ 199,99</p>

          <form onSubmit={handleSubmit} className="flex flex-col">
            <CheckBox setSelectedSize={setSelectedSize} />
            <p className="mt-3">Quantidade:</p>
            <div className="flex space-x-3">
              <input
                min="0"
                type="number"
                className="border border-gray-300 text-center w-[100px]"
                onChange={(e) => setQuantity(e.target.value)}
              />

              <Button className="bg-green-800 rounded-md">COMPRAR</Button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ProdutoPage;
