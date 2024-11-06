export default function BotaoPlanos({ titulo, descricao, preco }) {
    return (
        <div className="text-center m-4">
            {/* Detalhes do Plano */}
            <div className="mt-4 p-4 bg-white opacity-90 rounded-md shadow-md border-2 border-lighter_green h-96 w-64 hover:bg-gray-200 cursor-pointer transition-all ">
                <button className="cursor-pointer border border-green-600  rounded-lg w-52 text-slate-100 text-xl font-semibold shadow-lg bg-nice_green hover:text-white transition-all px-4 py-2">
                    {titulo}
                </button>
                <h3 className="text-2xl font-semibold mb-2 text-green-700 mt-8">{titulo}</h3>
                <p className="text-gray-700 mb-2">{descricao}</p>
                <p className="text-gray-700 font-bold mt-8">A partir de:</p>
                <p className="mt-2">
                    <span className="font-bold text-2xl text-lighter_green">R$</span> 
                    <span className="font-bold text-lighter_green text-4xl">{preco}</span> 
                    <span className="font-bold text-2xl text-lighter_green">/mês</span>
                </p>
            </div>
        </div>
    );
}
