import Footer from "../components/Footer";
import Header from "../components/Header";
import LinhaRoupas from "../components/LinhaRoupas";
import Blusa from "../assets/blusa.png"
const RoupasPage = () => {

    return (
        <div>
            <div>
                <Header/>
            </div>
            <div className="flex justify-center">
                <div className="bg-black h-32 mt-10 w-3/4 rounded-2xl mb-10 flex justify-between items-end p-5">
                    <p className="text-white">HOME / CAMISETAS </p>
                    <select name="" id="" className="bg-white mr-10 p-2 px-5 rounded-2xl">
                        <option value="">Ordenar por: </option>
                        <option value="">Menor preço</option>
                        <option value="">Maior preço</option>
                        <option value="">A - Z</option>
                        <option value="">Z - A</option>
                    </select>
                </div>
            </div>
            <div>
                <LinhaRoupas item={Blusa}/>
                <LinhaRoupas item={Blusa}/>
                <LinhaRoupas item={Blusa}/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default RoupasPage;