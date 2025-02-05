import Facebook from "../assets/facebook.png";
import X from "../assets/X.png";
import Instagram from "../assets/instagram.png";

const Footer = () => {
  return (
    <div className="flex flex-col bg-black h-96">
      <div className="flex justify-around pt-12 flex-1">
        <div>
          <h1 className="text-center text-white text-2xl font-normal">REDES SOCIAIS</h1>
          <div className="flex mt-5 gap-4">
            <a href="">
              <img src={X} alt="" height={40} width={40}/>
            </a>
            <a href="">
              <img src={Instagram} alt="" height={40} width={40}/>
            </a>
            <a href="">
              <img src={Facebook} alt="" height={40} width={40} />
            </a>
          </div>
        </div>
        <div>
          <h1 className="text-white text-2xl font-normal">CONTATO</h1>
          <ul className="text-white space-y-3 mt-5">
            <li>Email: contato777@gmail.com</li>
            <li>Telefone: 4002-8922</li>
          </ul>
        </div>
        <div>
          <h1 className="text-white text-2xl font-normal">INSTITUCIONAL</h1>
          <ul className="text-white space-y-3 mt-5">
            <li><a href="">POLÍTICA DE PRIVACIDADE</a></li>
            <li><a href="">TERMOS E CONDIÇÕES</a></li>
            <li><a href="">SOBRE NÓS</a></li>
            <li><a href="">TROCAS E DEVOLUÇÕES</a></li>
          </ul>
        </div>
      </div>
      <div className="text-white text-center mb-4 opacity-50">
        777 - Todos os direitos reservados
      </div>
    </div>
  );
};

export default Footer;
