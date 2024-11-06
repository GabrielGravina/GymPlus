import React, { useState } from 'react';
import academiaImage from './images/academia_musculacao.webp';
import gymManImage from './images/gym_man.jpg';
import mapsImage from './images/maps.png';

function App() {
  const [rating, setRating] = useState({ equipment: 0, maintenance: 0, instructors: 0, cleanliness: 0 });

  const handleMouseOver = (e, feature) => {
    const stars = e.target.parentNode.children;
    Array.from(stars).forEach((star, index) => {
      if (index <= e.target.dataset.index) {
        star.classList.add('text-yellow-400');
      } else {
        star.classList.remove('text-yellow-400');
      }
    });
  };

  const handleMouseOut = (feature) => {
    // Não remover a cor amarela das estrelas clicadas
    const stars = document.querySelectorAll(`.star-${feature}`);
    stars.forEach((star, index) => {
      if (rating[feature] <= index) {
        star.classList.remove('text-yellow-400');
        star.classList.add('text-gray-400');
      }
    });
  };

  const handleClick = (feature, index) => {
    setRating({ ...rating, [feature]: index + 1 });
  };

  return (
    <div className='flex-auto w-screen h-screen'>
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

      {/* Navbar com imagem de capa cobrindo toda a navbar */}
      <nav
        className="bg-cover bg-center text-white p-4 h-1/2"
        style={{
          backgroundImage: `url(${academiaImage})`, // Aplica a imagem como plano de fundo
          backgroundSize: 'cover', // Cobrir toda a navbar
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
              <button className="cursor-pointer font-semibold border border-[#2D8643] bg-transparent h-12 w-full max-w-[250px] text-black text-xl shadow-lg hover:bg-[#2D8643] hover:text-white transition-all mt-2">
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

        {/* Nova seção: Cadastro */}
        <section className="container mx-auto text-center mt-10">
          <h2 className="text-4xl font-bold mb-10 text-[#00DB36]">Faça parte do GymPlus!</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-[#00DB36] text-gray-900 rounded shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Como aluno</h3>
              <p className="font-semibold text-black">Acesse todos os serviços e acompanhe seu progresso de forma simples.</p>
              <button className="cursor-pointer font-semibold border border-[#2D8643] bg-transparent h-12 w-full max-w-[250px] text-black text-xl shadow-lg hover:bg-[#2D8643] hover:text-white transition-all mt-2">
                Entrar como Aluno
              </button>
            </div>
            <div className="p-6 bg-[#00DB36] text-gray-900 rounded shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Como professor</h3>
              <p className="font-semibold text-black">Adicione suas aulas, agende treinos e ajude seus alunos a evoluirem!</p>
              <button className="cursor-pointer font-semibold border border-[#2D8643] bg-transparent h-12 w-full max-w-[250px] text-black text-xl shadow-lg hover:bg-[#2D8643] hover:text-white transition-all mt-2">
                Entrar como Professor
              </button>
            </div>
            <div className="p-6 bg-[#00DB36] text-gray-900 rounded shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Como academia</h3>
              <p className="font-semibold text-black">Gerencie sua academia, receba feedbacks, crie planos e melhore seus serviços.</p>
              <button className="cursor-pointer font-semibold border border-[#2D8643] bg-transparent h-12 w-full max-w-[250px] text-black text-xl shadow-lg hover:bg-[#2D8643] hover:text-white transition-all mt-2">
                Entrar como Academia
              </button>
            </div>
          </div>
        </section>

        {/* Seção de Avaliação */}
        <section className="container mx-auto text-center mt-10">
          <h2 className="text-4xl font-bold mb-4 text-[#00DB36]">Avalie a academia</h2>
          <div className="p-6 bg-[#00DB36] text-white rounded shadow-lg">
            <div className="mb-6">
              <label htmlFor="academyName" className="block text-lg font-semibold mb-2">
                Digite a academia em que você treina
              </label>
              <input
                id="academyName"
                type="text"
                className="w-full p-4 bg-gray-200 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Ex: Academia XYZ"
              />
            </div>

            {/* Avaliação de Qualidade */}
            {['equipment', 'maintenance', 'instructors', 'cleanliness'].map((feature) => (
              <div key={feature} className="mb-6 flex items-center justify-between">
                <label htmlFor={feature} className="block text-lg font-semibold mb-2 capitalize w-1/2 text-left">
                  Qualidade {feature === 'equipment' ? 'dos equipamentos: ' : feature === 'maintenance' ? 'da manutenção: ' : feature === 'instructors' ? 'dos instrutores: ' : 'da limpeza: '}
                </label>
                <div
                  id={feature}
                  className="flex items-center space-x-2 w-1/2 justify-end"
                  onMouseOut={() => handleMouseOut(feature)}
                >
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      className={`star-${feature} star cursor-pointer text-2xl ${rating[feature] > index ? 'text-yellow-400' : 'text-gray-400'}`}
                      data-index={index}
                      onMouseOver={(e) => handleMouseOver(e, feature)}
                      onClick={() => handleClick(feature, index)}
                    >
                      {rating[feature] > index ? '★' : '☆'}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Seção de contato */}
      <section className="container mx-auto text-center mt-10 mb-20">
        <h2 className="text-4xl font-bold mb-10 text-[#00DB36]">Entre em contato conosco!</h2>
        <div className="p-6 bg-[#2D8643] text-white rounded shadow-lg w-full max-w-4xl mx-auto">
          <form>
            <div className="mb-6">
              <label htmlFor="name" className="block text-lg font-semibold mb-2">Nome</label>
              <input id="name" type="text" className="w-full p-4 bg-gray-200 text-gray-700 rounded-md" placeholder="Seu nome" />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
              <input id="email" type="email" className="w-full p-4 bg-gray-200 text-gray-700 rounded-md" placeholder="Seu email" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-lg font-semibold mb-2">Mensagem</label>
              <textarea id="message" rows="4" className="w-full p-4 bg-gray-200 text-gray-700 rounded-md" placeholder="Sua mensagem"></textarea>
            </div>
            <button type="submit" className="w-full p-4 bg-[#00DB36] text-white font-semibold rounded-md shadow-lg hover:bg-[#2D8643] transition-all">Enviar</button>
          </form>
        </div>
      </section>

      {/* Rodapé com imagem */}
      <footer className="bg-[#2D8643] text-gray-900 py-6 text-center mt-8">
        <p className="font-semibold text-white">© 2024 GymPlus</p>
        <div className="mt-2">
          <a href="#" className="text-white mx-3">Privacidade</a>
          <a href="#" className="text-white mx-3">Termos de Uso</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
