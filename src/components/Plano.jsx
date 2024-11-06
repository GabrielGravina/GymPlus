// Plano.js
import React from 'react';

function Plano({ imagem, titulo, descricao }) {
  return (
    <div className="relative w-full max-w-sm bg-gray-900 rounded-lg shadow-lg overflow-hidden">
      {/* Imagem de Fundo */}
      <img src={imagem} alt={titulo} className="w-full h-64 object-cover" /> {/* Aumentei a altura da imagem */}

      {/* Conteúdo com sobreposição preta */}
      <div className="p-4 bg-black bg-opacity-90 text-white absolute bottom-0 w-full h-24"> {/* Diminui a altura da parte do texto */}
        <h3 className="text-xl font-bold mb-2">{titulo}</h3>
        <p className="text-sm">{descricao}</p>
      </div>
    </div>
  );
}

export default Plano;
