import { ChevronLeft, ChevronRight } from "lucide-react";
import Clothing from "./Clothing";

const ClothingRow = ({ products, titulo, addCart }) => {
  return (
    <div>
      <h1 className="text-4xl text-center mb-7">{titulo}</h1>
      <div className="flex justify-between items-center mx-14">
        <div>
          <button className="cursor-pointer">
            <ChevronLeft size={56} />
          </button>
        </div>
        <div className="flex gap-8 md:gap-20 lg:gap-40 space-y-9">
          {products.map((product, index) => (
            <div key={index}>
              <Clothing product={product} addCart={addCart} />
            </div>
          ))}
        </div>
        <div>
          <button className="cursor-pointer">
            <ChevronRight size={56} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClothingRow;
