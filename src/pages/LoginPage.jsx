import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Input from "../components/Input";

const LoginPage = () => {
  return (
    <div>
      <div className="sticky top-0">
        <Header />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl text-center mt-5">LOGIN</h1>
        <div className="border-2 mt-4 border-gray-200 p-10 rounded-md">
          <form action="" className="flex flex-col space-y-3 items-center">
            <Input placeholder="EMAIL" />
            <Input placeholder="SENHA" />
            <Button className="w-[300px] mt-3 rounded-md">LOGIN</Button>
          </form>
        </div>
      </div>

      <div className="flex flex-col items-center mt-20">
        <h1 className="text-3xl text-center mt-5">REGISTRAR-SE</h1>
        <div className="border-2 mt-4 border-gray-200 p-10 rounded-md">
          <form action="">
            <div className="flex gap-10">
              <div className="flex flex-col space-y-3">
                <Input placeholder="EMAIL" />
                <Input placeholder="SENHA" />
                <Input placeholder="CONFIRMAR SENHA" />
                <Input placeholder="CPF" />
              </div>
              <div className="flex flex-col space-y-3">
                <Input placeholder="DATA DE NASCIMENTO" />
                <Input placeholder="NOME" />
                <Input placeholder="SOBRENOME" />
                <Input placeholder="TELEFONE" />
              </div>
            </div>
            <div className="flex justify-center mt-10 space-x-2 items-center">
                <input type="checkbox" name="" id="" />
                <span>Concordo em vender a alma para a loja</span>
            </div>
            <div className="flex justify-center mt-3">
              <Button className="w-[300px] mt-3 rounded-md">REGISTRAR-SE</Button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default LoginPage;
