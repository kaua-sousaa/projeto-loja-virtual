import { CircleX, X } from "lucide-react";

const Carrinho = ({ isOpen, closeChart, chart, setChart }) => {
    
  const removeFromChart = (index) => {
    console.log(chart);
    const newChart = [...chart]
    newChart.splice(index, 1);
    setChart(newChart);

    localStorage.setItem("chart", JSON.stringify(newChart));
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 p-4 transform transition-transform duration-500 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Carrinho</h2>
        <button onClick={closeChart}>
          <X size={24} />
        </button>
      </div>
      <div></div>
      {chart <= 0 ? (
        <div className="mt-4">
          <p className="text-gray-600">Seu carrinho está vazio.</p>
        </div>
      ) : (
        <div className="mt-10">
          {chart.map((product, index) => (
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
                onClick={() => removeFromChart(index)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Carrinho;
