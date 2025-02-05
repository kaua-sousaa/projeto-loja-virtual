import { X } from "lucide-react";

const Carrinho = ({ isOpen, closeSideBar }) => {
    return (
        <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 p-4 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Carrinho</h2>
                <button onClick={closeSideBar}>
                    <X size={24} />
                </button>
            </div>
            <div className="mt-4">
                <p className="text-gray-600">Seu carrinho está vazio.</p>
            </div>
        </div>
    );
};

export default Carrinho;
