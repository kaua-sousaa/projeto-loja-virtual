const Button = ({ className, children, onClick }) => {
    const handleClick = (event) =>{
        console.log("botao clicado")
        if (onClick){
            onClick(event)
        }
    }
    return (
        <button onClick={handleClick} className={`bg-black text-white p-4 font-bold cursor-pointer ${className}`}>{children}</button>
    )
}

export default Button;