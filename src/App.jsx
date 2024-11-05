import academiaImage from './images/academia_musculacao.webp';
import gymManImage from './images/gym_man.jpg';
import mapsImage from './images/maps.png';

function App() {
  return (
    <div className='flex-auto w-screen h-screen'>
      {/* Navbar com imagem de capa cobrindo toda a navbar */}
      <nav
        className="bg-cover bg-center text-white p-4 h-1/2"
        style={{
          backgroundImage: `url(${academiaImage})`, // Aplica a imagem como plano de fundo
          backgroundSize: 'cover', // Cobrir toda a navbar
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-5xl font-bold bg-slate-900 bg-opacity-30 p-2 rounded-md">GymPlus</div>
          <ul className="flex space-x-6 text-xl font-bold">
            <li className="text-xl hover:bg-slate-400 cursor-pointer bg-slate-900 bg-opacity-70 p-3 shadow-md rounded-md">Home</li>
            <li className="text-xl hover:bg-slate-400 cursor-pointer bg-slate-900 bg-opacity-70 p-3 shadow-md rounded-md">Entrar</li>
            <li className="text-xl hover:bg-slate-400 cursor-pointer bg-slate-900 bg-opacity-70 p-3 text-white shadow-md rounded-md">Sobre</li>
          </ul>
        </div>
      </nav>

      {/* Seção de boas-vindas */}
      <header className="bg-gray-800 text-white py-20">
        <h1 className="text-center text-6xl font-extrabold mb-6">Bem-vindo à Nossa Academia</h1>
        <p className="text-center text-xl font-light">Treine com os melhores equipamentos e acompanhamento profissional.</p>
      </header>

      {/* Conteúdo principal */}
      <main className="py-10">
        <section className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Nossos Serviços</h2>
          <p className="text-lg font-light mb-8">Oferecemos treinos personalizados, musculação, aulas de cardio e muito mais.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-200 text-slate-900 rounded shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Musculação</h3>
              <p className="font-light">Fortaleça seu corpo com os melhores equipamentos.</p>
              <button className="cursor-pointer border border-[#3498db] bg-transparent h-12 w-48 text-[#3498db] text-xl shadow-lg hover:bg-[#3498db] hover:text-white transition-all">
                Musculação
              </button>
            </div>
            <div className="p-6 bg-gray-200 text-slate-900 rounded shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Personal Trainer</h3>
              <p className="font-light">Acompanhamento individual para atingir seus objetivos.</p>
              <button className="cursor-pointer border border-[#3498db] bg-transparent h-12 w-48 text-[#3498db] text-xl shadow-lg hover:bg-[#3498db] hover:text-white transition-all">
                Personal Trainer
              </button>
            </div>
            <div className="p-6 bg-gray-200 text-slate-900 rounded shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Aulas de Cardio</h3>
              <p className="font-light">Queime calorias e melhore sua resistência com nossas aulas.</p>
              <button className="cursor-pointer border border-[#3498db] bg-transparent h-12 w-48 text-[#3498db] text-xl shadow-lg hover:bg-[#3498db] hover:text-white transition-all">
                Aulas de Cardio
              </button>
            </div>
          </div>
        </section>

        
        {/* Nova seção: Ver Planos de Academias */}
        <section className="container mx-auto text-center mt-10">
          <h2 className="text-4xl font-bold mb-4">Ver Planos de Academias</h2>
          <div className="flex justify-center space-x-6">
            <button className="cursor-pointer border border-[#3498db] bg-transparent h-12 w-48 text-[#3498db] text-xl shadow-lg hover:bg-[#3498db] hover:text-white transition-all">
              Ver Planos de Musculação
            </button>
            <button className="cursor-pointer border border-[#3498db] bg-transparent h-12 w-48 text-[#3498db] text-xl shadow-lg hover:bg-[#3498db] hover:text-white transition-all">
              Ver Planos de Yoga
            </button>
            <button className="cursor-pointer border border-[#3498db] bg-transparent h-12 w-48 text-[#3498db] text-xl shadow-lg hover:bg-[#3498db] hover:text-white transition-all">
              Ver Planos de Cardio
            </button>
          </div>
        </section>
        
        {/* Imagem de fundo do homem malhando */}
        <div className="text-center mt-10">
          <img src={gymManImage} alt="Homem Malhando" className="mx-auto h-96 object-cover" />
        </div>
      </main>

      {/* Nova seção: Encontre Academias */}
      <section className="container mx-auto text-center mt-2 mb-20">
          <h2 className="text-4xl font-bold mb-4">Encontre Academias</h2>
          <img src={mapsImage} alt="Mapa" className="mx-auto h-96 object-cover mt-10" />
        </section>


      {/* Rodapé */}
      <footer className="bg-gray-900 text-white py-4 text-center">
        <p>&copy; 2024 Nossa Academia. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
