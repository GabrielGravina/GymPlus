// ListaDePlanos.js
import React from 'react';
import Plano from './Plano';
import academiaImage from '../images/academia_musculacao.webp';
import gymManImage from '../images/gym_man.jpg';
import mapsImage from '../images/maps.png';
import womanGym from '../images/young-women-gym.jpg'
import nutricionista from '../images/nutricionista.jpg'
import personalTrainer from '../images/personalTrainer.jpg'
import feedback from '../images/feedback.jpg'

function ListaDePlanos() {
  const planos = [
    {
      imagem: nutricionista,
      titulo: 'Acompanhamento nutricional',
      descricao: 'Tenha acesso aos melhores nutricionistas para te ajudar a alcançar seus objetivos.',
    },
    {
        imagem: womanGym,
        titulo: 'Ver atividades',
        descricao: 'Veja as atividades que a academia que você deseja entrar disponibiliza.',
      },
    {
      imagem: mapsImage,
      titulo: 'Encontre Academias',
      descricao: 'Tenha acesso a milhares de academias na palma da sua mão.',
    },
    {
      imagem: academiaImage,
      titulo: 'Treine onde quiser',
      descricao: 'Com os planos Plus e Mega Plus, você tem a flexibilidade de treinar na academia mais próxima. Escolha a mais conveniente para você!',
    },
    {
        imagem: personalTrainer,
        titulo: 'Treinadores de qualidade',
        descricao: 'Encontre os melhores profissionais para acompanhar e te guiar no seu progresso.'
    },
    {
        imagem: feedback,
        titulo: 'Feedback',
        descricao: 'Acompanhe feedbacks dos alunos da academia que você deseja frequentar'
    }
  ];

  return (
    <>
        <h2 className="text-6xl text-center text-[#00DB36] font-bold mb-8">Nossos Serviços</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 justify-items-center mx-auto max-w-5xl">

            
        {planos.map((plano, index) => (
            <Plano 
            key={index} 
            imagem={plano.imagem} 
            titulo={plano.titulo} 
            descricao={plano.descricao} 
            />
            ))}
        </div>
    </>
  );
}

export default ListaDePlanos;
