// App.js
import BotaoPlanos from './components/BotaoPlanos';
import academiaVazia from './images/academia.jpg';
import academiaImage from './images/academia_musculacao.webp';
import gymManImage from './images/gym_man.jpg';
import mapsImage from './images/maps.png';
import ListaDePlanos from './components/ListaDePlanos';
import L from 'leaflet';
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import { CgGym } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

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
      <header className="bg-[black] text-gray-900 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-7xl font-extrabold text-white mb-4">Gym<span className='text-lighter_green'>Plus</span></h1>
          <ul className="flex space-x-6 text-xl font-bold">
            <li className="hover:bg-gray-700 cursor-pointer bg-transparent bg-opacity-70 p-3 text-white shadow-md rounded-md border-2 border-lighter_green flex justify-center items-center">
              <FaRegUser className="mr-2" />
              Entrar
            </li>
            <li className="hover:bg-gray-700 cursor-pointer bg-transparent bg-opacity-70 p-3 text-white shadow-md rounded-md border-2 border-lighter_green flex justify-center items-center">
              <CgGym className="mr-2" />
              Academias
            </li>
            <li className="hover:bg-gray-700 cursor-pointer bg-transparent bg-opacity-70 p-3 text-white shadow-md rounded-md border-2 border-lighter_green flex justify-center items-center">
              <FaInfoCircle className="mr-2" />
              Sobre
            </li>
          </ul>
        </div>
      </header>

      {/* Navbar com imagem de capa cobrindo toda a navbar */}
      <nav
        className="bg-cover bg-center text-white p-4"
        style={{
          backgroundImage: `linear-gradient(to bottom, black, transparent), url(${academiaImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '50vh'
        }}
      />

      {/* Conteúdo principal */}
      <main className="bg-gradient-to-b from-black via-[#452985] to-black py-10">
        <div className="p-8">
          <ListaDePlanos />
        </div>

        {/* Seção Ver Planos de Academias */}
        <section
          className="container mx-auto text-center pt-10 relative bg-cover bg-center h-[500px] lg:h-[600px] max-w-full"
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

        {/* Seção de Avaliação */}
        <section className="container mx-auto text-center mt-10">
          <h2 className="font-bold mb-8 text-6xl text-[#00DB36]">Avalie a academia</h2>
          <div className="p-6 bg-gradient-to-b from-[#2D8643] to-transparent text-white rounded shadow-lg">
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

        {/* Seção de contato */}
        <section className="container mx-auto text-center mt-20 mb-20 bg-gradient-to-b from-[#452985] to-transparent">
          <h2 className="text-4xl font-bold mb-10 pt-8 text-white">Entre em contato conosco!</h2>
          <div className="p-6 bg-white text-gray-700 rounded shadow-lg w-full max-w-4xl mx-auto">
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

        {/* Rodapé */}
        <footer className="bg-transparent text-gray-900 py-2 text-center mt-16">
        <p className="font-semibold text-white">© 2024 GymPlus</p>
        <div className="mt-2">
          <a href="#" className="text-white mx-6">Privacidade</a>
          <a href="#" className="text-white mx-6">Termos de Uso</a>
        </div>
      </footer>

      </main>
    </div>
  );
}

export default App;
