import Header from "../components/Header";
import ClothingRow from "../components/ClothingRow";
import blusa from "../assets/blusa.png";
import short from "../assets/short.png";
import bone from "../assets/bone.png";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

const Home = () => {

  const [chart, setChart] = useState([]);
  console.log(chart)
  
  useEffect(()=> {
    const storedChart = JSON.parse(localStorage.getItem("chart"))
    if (storedChart){
      setChart(storedChart)
    }
  }, [])

  useEffect(() => {
    if(chart.length > 0){
      localStorage.setItem("chart", JSON.stringify(chart))
    }
  }, [chart])
  const tshirts = [
    // Camisetas
    {
      id: 11,
      name: "Camiseta Preta Básica",
      price: "R$ 99,99",
      img: blusa,
      category: "Camisetas",
    },
    {
      id: 1,
      name: "Camiseta Preta Básica",
      price: "R$ 99,99",
      img: blusa,
      category: "Camisetas",
    },
    {
      id: 2,
      name: "Camiseta Branca Estampada",
      price: "R$ 129,99",
      img: blusa, 
      category: "Camisetas",
    },
    {
      id: 3,
      name: "Camiseta Cinza Escuro",
      price: "R$ 109,99",
      img: blusa, 
      category: "Camisetas",
    },
  ];
  const shorts = [
    // Shorts
    {
      id: 4,
      name: "Short Jeans Claro",
      price: "R$ 149,99",
      img: short,
      category: "Shorts",
    },
    {
      id: 5,
      name: "Short Preto Esportivo",
      price: "R$ 119,99",
      img: short,
      category: "Shorts",
    },
    {
      id: 6,
      name: "Short Bermuda Azul",
      price: "R$ 139,99",
      img:short,
      category: "Shorts",
    },
  ];
  const hats = [
    // Bonés
    {
      id: 7,
      name: "Boné Preto",
      price: "R$ 79,99",
      img: bone,
      category: "Bonés",
    },
    {
      id: 8,
      name: "Boné Branco",
      price: "R$ 89,99",
      img: bone,
      category: "Bonés",
    },
    {
      id: 9,
      name: "Boné Cinza",
      price: "R$ 69,99",
      img: bone,
      category: "Bonés",
    },
  ];

  const addChart = (product) => {
    setChart([...chart, product]);
    console.log(chart)
  };

  return (
    <div>
      <div className="h-8 bg-black text-red-500 text-center py-2 font-medium">
        FRETE GRÁTIS PARA COMPRAS ACIMA DE 20 MILHÕES DE REAIS.
      </div>
      <div className="sticky top-0">
        <Header chart={chart} setChart={setChart}/>
      </div>
      <div className="flex justify-center mt-16">
        <div className="bg-news-bg w-1/2 h-96">
          <h1 className="text-6xl text-center py-28">NEWS</h1>
        </div>
      </div>
      <div className="mt-10">
        <ClothingRow titulo="Blusas" products={tshirts} addChart={addChart} />
        <ClothingRow titulo="Shorts" products={shorts} addChart={addChart}/>
        <ClothingRow titulo="Bones" products={hats} addChart={addChart}/>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
