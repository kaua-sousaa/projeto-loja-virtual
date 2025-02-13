const Button = ({ className, children }) => {

    return (
        <button className={`bg-black text-white p-4 font-bold cursor-pointer ${className}`}>{children}</button>
    )
}

export default Button;