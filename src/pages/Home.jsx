import Header from "../components/Header";
import ClothingRow from "../components/ClothingRow";
import blusa from "../assets/blusa.png";
import short from "../assets/short.png";
import bone from "../assets/bone.png";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import products from "../produtosTemp/ProductsTemp";

const Home = () => {

  const { cart, addCart, setCart} = useCart();
  
  const tshirts = products.filter(product => product.category === "Camisetas");
  const shorts = products.filter(product => product.category === "Shorts");
  const hats = products.filter(product => product.category === "Bonés");


  return (
    <div>
      <div className="h-8 bg-black text-red-500 text-center py-2 font-medium">
        FRETE GRÁTIS PARA COMPRAS ACIMA DE 20 MILHÕES DE REAIS.
      </div>
      <div className="sticky top-0">
        <Header cart={cart} setCart={setCart}/>
      </div>
      <div className="flex justify-center mt-16">
        <div className="bg-news-bg w-1/2 h-96">
          <h1 className="text-6xl text-center py-28">NEWS</h1>
        </div>
      </div>
      <div className="mt-10">
        <ClothingRow titulo="Blusas" products={tshirts} addCart={addCart} />
        <ClothingRow titulo="Shorts" products={shorts} addCart={addCart}/>
        <ClothingRow titulo="Bones" products={hats} addCart={addCart}/>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
