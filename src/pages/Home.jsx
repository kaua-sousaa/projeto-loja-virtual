import Header from "../components/Header";
import ClothingRow from "../components/ClothingRow";
import blusa from "../assets/blusa.png";
import short from "../assets/short.png";
import bone from "../assets/bone.png";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <div className="h-8 bg-black text-red-500 text-center py-2 font-medium">
        FRETE GRÁTIS PARA COMPRAS ACIMA DE 20 MILHÕES DE REAIS.
      </div>
      <div className="sticky top-0">
        <Header />
      </div>
      <div className="flex justify-center mt-16">
        <div className="bg-news-bg w-1/2 h-96">
          <h1 className="text-6xl text-center py-28">NEWS</h1>
        </div>
      </div>
      <div className="mt-10">
        <ClothingRow titulo="Blusas" item={blusa} />
        <ClothingRow titulo="Shorts" item={short} />
        <ClothingRow titulo="Bones" item={bone} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
