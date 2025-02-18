import Button from "./Button";

const Roupa = ( {product, showButtton = true, className, addChart} ) => {
    
    return (
        <div className="flex flex-col items-center">
            <div className={`bg-roupa-bg w-[310px] min-h-[410px] mb-3  ${className}`}>
                <img src={product.img} alt="blusa" />
                <p className="text-center">{product.name}</p>
                <p className="text-center text-red-500 font-bold">{product.sale}</p>
                <p className="text-center line-through">{product.price}</p>
            </div>
            {showButtton && <Button className="w-3/4" onClick={() => addChart(product)}>COMPRAR</Button>}
        </div>
    )
}
export default Roupa;