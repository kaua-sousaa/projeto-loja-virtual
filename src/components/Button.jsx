const Button = ({ className, children }) => {

    return (
        <button className={`bg-black text-white p-4 font-bold cursor-pointer w-3/4 ${className}`}>{children}</button>
    )
}

export default Button;