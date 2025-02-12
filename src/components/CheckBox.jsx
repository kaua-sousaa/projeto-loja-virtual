import { useState } from "react";

const CheckBox = ({setSelectedSize}) => {
    const [selected, setSelected] = useState(null);

    const options = ["P", "M", "G", "GG"];

    const handleSelect = (index) => {
        setSelected(index)
        setSelectedSize(index)
    }

    return (
        <div className="flex gap-2">
            {options.map((option, index) => (
                <label key={index} className="flex items-center gap-2 cursor-pointer">
                    <input 
                    type="checkbox" 
                    checked={selected === index}
                    onChange={() => handleSelect(index)} 
                    className="hidden"/>

                    <div className={`w-5 h-5 border-2 border-gray-400 flex items-center justify-center rounded-sm ${
                         selected === index ? "bg-gray-300" : "bg-white"
                    }`}>
                        
                    </div>
                    <span>{option}</span>
                </label>
            ))}
        </div>
    )
}

export default CheckBox;