import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Input from "../components/Input";
import { useCart } from "../context/CartContext";

const SupportPage = () => {
  const {cart} = useCart();

  return (
    <div>
      <div>
        <Header cart={cart}/>
      </div>
      <div className="p-10 mt-12 ml-36">
        <h1 className="text-3xl font-medium mb-4">CONTATO</h1>
        <form
          action=""
          className="flex flex-col space-y-4 border-2 border-gray-300 p-8 rounded-2xl w-1/2"
        >
          <Input placeholder="NOME COMPLETO" />
          <Input type="email" placeholder="EMAIL" />
          <Input type="text" placeholder="TELEFONE" />
          <textarea
            className="border border-gray-300 p-2 rounded-md w-full h-32 resize-none"
            placeholder="DÊ UMA DESCRIÇÃO DETALHADA"
          ></textarea>

          <Button className="w-[200px]">ENVIAR</Button>
        </form>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default SupportPage;
