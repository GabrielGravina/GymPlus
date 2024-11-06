import academiaImage from './images/academia_musculacao.webp';
import gymManImage from './images/gym_man.jpg';
import mapsImage from './images/maps.png';

function App() {
  return (
    <div className="flex-auto w-screen h-screen">

      {/* Seção de boas-vindas */}
      <header className="bg-[#00DB36] text-gray-900 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-6xl font-extrabold text-white">GymPlus</h1>
          <ul className="flex space-x-6 text-xl font-bold">
            <li className="hover:bg-gray-700 cursor-pointer bg-gray-600 bg-opacity-70 p-3 text-white shadow-md rounded-md">Home</li>
            <li className="hover:bg-gray-700 cursor-pointer bg-gray-600 bg-opacity-70 p-3 text-white shadow-md rounded-md">Entrar</li>
            <li className="hover:bg-gray-700 cursor-pointer bg-gray-600 bg-opacity-70 p-3 text-white shadow-md rounded-md">Contato</li>
          </ul>
        </div>
      </header>

      {/* Navbar com imagem de capa */}
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
              <p className=" font-semibold  text-black">Acompanhe feedbacks de alunos da academia que você deseja frequentar.</p>
              <button className="cursor-pointer font-semibold border border-[#2D8643] bg-transparent h-12 w-full max-w-[250px] text-black text-xl shadow-lg hover:bg-[#2D8643] hover:text-white transition-all mt-2">
                Feedback
              </button>
            </div>
            <div className="p-6 bg-[#00DB36] text-gray-900 rounded shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Ver atividades</h3>
              <p className=" font-semibold  text-black">Veja as atividades que a academia que você deseja entrar disponibiliza.</p>
              <button className="cursor-pointer font-semibold border border-[#2D8643] bg-transparent h-12 w-full max-w-[250px] text-xl shadow-lg hover:bg-[#2D8643] hover:text-white transition-all mt-2 text-black">
                Atividades
              </button>
            </div>
            <div className="p-6 bg-[#00DB36] text-gray-900 rounded shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Ver horários</h3>
              <p className=" font-semibold  text-black">Veja o horário das atividades da academia que você deseja entrar.</p>
              <button className="cursor-pointer font-semibold border border-[#2D8643] bg-transparent h-12 w-full max-w-[250px] text-xl shadow-lg hover:bg-[#2D8643] hover:text-white transition-all mt-2 text-black">
                Horários
              </button>
            </div>
          </div>
        </section>

        {/* Seção de Cadastro */}
        <section className="container mx-auto text-center mt-10">
          <h2 className="text-4xl font-bold mb-10 text-[#00DB36]">Faça parte do GymPlus!</h2>
          <div className="flex justify-center space-x-6">
            <button className="cursor-pointer border border-[#2D8643] bg-transparent h-auto w-52 p-4 text-white text-lg shadow-lg hover:bg-[#2D8643] font-semibold hover:text-white transition-all">
              Entrar como aluno
            </button>
            <button className="cursor-pointer border border-[#2D8643] bg-transparent h-auto w-52 p-4 text-white text-lg shadow-lg hover:bg-[#2D8643] font-semibold hover:text-white transition-all">
              Entrar como professor
            </button>
            <button className="cursor-pointer border border-[#2D8643] bg-transparent h-auto w-52 p-4 text-white text-lg shadow-lg hover:bg-[#2D8643] font-semibold hover:text-white transition-all">
              Entrar como academia
            </button>
          </div>
        </section>

        {/* Imagem de fundo do homem malhando */}
        <div className="text-center mt-10">
          <img src={gymManImage} alt="Homem Malhando" className="mx-auto h-96 object-cover" />
        </div>

        {/* Seção de Planos e Assinaturas */}
        <section className="container mx-auto text-center mt-20 mb-10">
          <h2 className="text-4xl font-bold mb-10 text-[#00DB36]">Nossos Planos</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-10">
            {/* Plano Básico */}
            <div className="p-6 bg-[#2D8643] text-white rounded shadow-lg max-w-sm mx-auto">
              <h3 className="text-3xl font-bold mb-4">Plano Básico</h3>
              <ul className="text-lg font-semibold space-y-2 text-left">
                <li>✔️ Acesso à localização de academias</li>
                <li>✔️ Agendar com personal</li>
                <li>✔️ Acesso à atividades</li>
                <li>✔️ Acesso à horários</li>
                <li>✔️ Montar o treino</li>
                <li><span className="text-red-500">❌</span> Integração com smartwatches</li>
              </ul>
              <div className="mt-4 p-4 bg-[#70B77E] text-center text-lg font-semibold rounded">
                Gratuito
              </div>
            </div>

            {/* Plano Premium */}
            <div className="p-6 bg-[#2D8643] text-white rounded shadow-lg max-w-sm mx-auto">
              <h3 className="text-3xl font-bold mb-4">Plano Premium</h3>
              <ul className="text-lg font-semibold space-y-2 text-left">
                <li>✔️ Acesso à localização de academias</li>
                <li>✔️ Agendar com personal</li>
                <li>✔️ Acesso à atividades</li>
                <li>✔️ Acesso à horários</li>
                <li>✔️ Montar o treino</li>
                <li><span className="text-green-500">✔️</span> Integração com smartwatches</li>
              </ul>
              <div className="mt-4 p-4 bg-[#70B77E] text-center text-lg font-semibold rounded">
                R$ 9,99
              </div>
            </div>
          </div>
        </section>

        {/* Mapa */}
        <section className="container mx-auto text-center mt-20">
          <h2 className="text-4xl font-bold mb-10 text-[#00DB36]">Encontre Academias Perto de Você</h2>
          <div className="relative w-full h-96">
            <img src={mapsImage} alt="Mapa" className="object-cover w-full h-full rounded-md" />
          </div>
        </section>

        {/* Contato */}
        <section className="container mx-auto text-center mt-20 mb-10">
          <h2 className="text-4xl font-bold mb-10 text-[#00DB36]">Entre em Contato</h2>
          <div className="bg-[#70B77E] p-6 rounded-lg max-w-md mx-auto text-left">
            <form>
              <div className="mb-4">
                <label className="block text-lg font-semibold text-white mb-2" htmlFor="name">Nome</label>
                <input type="text" id="name" className="w-full p-3 rounded-md bg-[#5C8B56] text-white placeholder:text-white" placeholder="Seu Nome" />
              </div>
              <div className="mb-4">
                <label className="block text-lg font-semibold text-white mb-2" htmlFor="email">E-mail</label>
                <input type="email" id="email" className="w-full p-3 rounded-md bg-[#5C8B56] text-white placeholder:text-white" placeholder="Seu E-mail" />
              </div>
              <div className="mb-4">
                <label className="block text-lg font-semibold text-white mb-2" htmlFor="message">Mensagem</label>
                <textarea id="message" className="w-full p-3 rounded-md bg-[#5C8B56] text-white placeholder:text-white" rows="4" placeholder="Sua mensagem..."></textarea>
              </div>
              <button type="submit" className="bg-[#2D8643] text-white py-2 px-4 rounded-md text-xl font-semibold hover:bg-[#1E6A3B] transition-all">Enviar</button>
            </form>
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;
