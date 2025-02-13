import Button from "./Button";

const Roupa = ( {img, showButtton = true, className} ) => {

    return (
        <div className="flex flex-col items-center">
            <div className={`bg-roupa-bg w-[310px] min-h-[410px] mb-3  ${className}`}>
                <img src={img} alt="blusa" />
                <p className="text-center">CAMISETA PRETA BÁSICA</p>
                <p className="text-center text-red-500 font-bold">R$ 99,99</p>
                <p className="text-center line-through">R$ 299,99</p>
            </div>
            {showButtton && <Button className="w-3/4">COMPRAR</Button>}
        </div>
    )
}
export default Roupa;