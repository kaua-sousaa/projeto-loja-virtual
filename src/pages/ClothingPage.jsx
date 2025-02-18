import Footer from "../components/Footer";
import Header from "../components/Header";
import ClothingRow from "../components/ClothingRow";
import { useCart } from "../context/CartContext";
import products from "../produtosTemp/ProductsTemp";

const ClothingPage = () => {
  const { addCart} = useCart()

  const tshirts = products.filter(product => product.category === "Camisetas");

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="flex justify-center">
        <div className="bg-black h-32 mt-10 w-3/4 rounded-2xl mb-10 flex justify-between items-end p-5">
          <p className="text-white">HOME / CAMISETAS </p>
          <select name="" id="" className="bg-white mr-10 p-2 px-5 rounded-2xl">
            <option value="">Ordenar por: </option>
            <option value="">Menor preço</option>
            <option value="">Maior preço</option>
            <option value="">A - Z</option>
            <option value="">Z - A</option>
          </select>
        </div>
      </div>
      <div>
        <ClothingRow titulo="Blusas" products={tshirts} addCart={addCart} />
        <ClothingRow titulo="Blusas" products={tshirts} addCart={addCart} />
        <ClothingRow titulo="Blusas" products={tshirts} addCart={addCart} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ClothingPage;
