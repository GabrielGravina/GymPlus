import BotaoPlanos from './components/BotaoPlanos';
import academiaVazia from './images/academia.jpg';
import academiaImage from './images/academia_musculacao.webp';
import gymManImage from './images/gym_man.jpg';
import mapsImage from './images/maps.png';

function App() {
  return (
    <div className='flex-auto w-screen h-screen'>

      {/* Seção de boas-vindas */}
      <header className="bg-[#00DB36] text-gray-900 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-6xl font-extrabold text-white">GymPlus</h1>
          <ul className="flex space-x-6 text-xl font-bold">
            <li className="hover:bg-gray-700 cursor-pointer bg-gray-600 bg-opacity-70 p-3 text-white shadow-md rounded-md">Home</li>
            <li className="hover:bg-gray-700 cursor-pointer bg-gray-600 bg-opacity-70 p-3 text-white shadow-md rounded-md">Entrar</li>
            <li className="hover:bg-gray-700 cursor-pointer bg-gray-600 bg-opacity-70 p-3 text-white shadow-md rounded-md">Sobre</li>
          </ul>
        </div>
      </header>

      {/* Navbar com imagem de capa cobrindo toda a navbar */}
      <nav
        className="bg-cover bg-center text-white p-4 h-1/2"
        style={{
          backgroundImage: `url(${academiaImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Conteúdo principal */}
      <main className="py-10">
        <section className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-[#00DB36]">Nossos Serviços</h2>
          <p className="text-xl font-light mb-8 text-white">Oferecemos treinos personalizados, localização de academias próximas, horários de funcionamento das atividades, feedbacks e muito mais.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-[#00DB36] text-gray-900 rounded shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Academias</h3>
              <p className="font-semibold text-black">Veja informações sobre as academias próximas a você, buscando facilitar a sua decisão.</p>
              <button className="cursor-pointer font-semibold border border-[#2D8643] bg-transparent h-12 w-full max-w-[250px] text-black text-xl shadow-lg hover:bg-[#2D8643] hover:text-white transition-all mt-2">
                Encontrar Academias
              </button>
            </div>
            <div className="p-6 bg-[#00DB36] text-gray-900 rounded shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Monte o seu treino</h3>
              <p className="font-semibold text-black">Fortaleça seu corpo com os melhores equipamentos nas academias que mais façam sentido para você.</p>
              <button className="cursor-pointer font-semibold border border-[#2D8643] bg-transparent h-12 w-full max-w-[250px] text-black text-xl shadow-lg hover:bg-[#2D8643] hover:text-white transition-all mt-2">
                Treino
              </button>
            </div>
            <div className="p-6 bg-[#00DB36] text-gray-900 rounded shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Personal Trainer</h3>
              <p className="font-semibold text-black">Encontre um profissional com um acompanhamento individual que faça sentido para atingir seus objetivos.</p>
              <button className="cursor-pointer font-semibold border border-[#2D8643] bg-transparent h-12 w-full max-w-[250px] text-black text-xl shadow-lg hover:bg-[#2D8643] hover:text-white transition-all mt-2">
                Personal Trainer
              </button>
            </div>
            <div className="p-6 bg-[#00DB36] text-gray-900 rounded shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Feedback</h3>
              <p className="font-semibold text-black">Acompanhe feedbacks de alunos da academia que você deseja frequentar.</p>
              <button className="cursor-pointer font-semibold border border-[#2D8643] bg-transparent h-12 w-full max-w-[250px] text-black text-xl shadow-lg hover:bg-[#2D8643] hover:text-white transition-all mt-2">
                Feedback
              </button>
            </div>
            <div className="p-6 bg-[#00DB36] text-gray-900 rounded shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Ver atividades</h3>
              <p className="font-semibold text-black">Veja as atividades que a academia que você deseja entrar disponibiliza.</p>
              <button className="cursor-pointer font-semibold border border-[#2D8643] bg-transparent h-12 w-full max-w-[250px] text-black text-xl shadow-lg hover:bg-[#2D8643] hover:text-white transition-all mt-2">
                Atividades
              </button>
            </div>
            <div className="p-6 bg-[#00DB36] text-gray-900 rounded shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Ver horários</h3>
              <p className="font-semibold text-black">Veja o horário das atividades da academia que você deseja entrar.</p>
              <button className="cursor-pointer font-semibold border border-[#2D8643] bg-transparent h-12 w-full max-w-[250px] text-xl shadow-lg hover:bg-[#2D8643] hover:text-white transition-all mt-2 text-black">
                Horários
              </button>
            </div>
          </div>
        </section>

        {/* Seção Ver Planos de Academias com padding-top */}
        <section
          className="container mx-auto text-center pt-10 relative bg-cover bg-center h-[500px] lg:h-[600px]"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0)), url(${academiaVazia})`
          }}
        >
          <h2 className="text-5xl font-extrabold mb-4 text-white">Ver Planos de Academias</h2>
          <div className="flex justify-center items-center">
            <BotaoPlanos 
                titulo="Plano Básico" 
                descricao="Acesso limitado a horários fora de pico" 
                preco="49,90" 
            />
            <BotaoPlanos 
                titulo="Plano Standard" 
                descricao="Acesso em qualquer horário" 
                preco="79,90" 
            />
            <BotaoPlanos 
                titulo="Plano Premium" 
                descricao="Acesso ilimitado + Aulas de grupo" 
                preco="99,90" 
            />
          </div>
        </section>

      </main>

      {/* Nova seção: Encontre Academias */}
      <section className="container mx-auto text-center mt-2 mb-20">
        <h2 className="text-4xl font-bold mb-4 text-[#00DB36]">Encontre academias próximas à você!</h2>
        <img src={mapsImage} alt="Mapa" className="mx-auto h-96 object-cover mt-10" />
      </section>

      {/* Rodapé */}
      <footer className="bg-[#2D8643] text-white py-4 text-center">
        <p>&copy; 2024 GymPlus. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
