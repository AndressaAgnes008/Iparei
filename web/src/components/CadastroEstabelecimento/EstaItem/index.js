import React from 'react';

import './style.css';

function EstaItem ({ estabelecimento }) {
    return (
            <li  className="esta-item">
                <header>
                  <img src={estabelecimento.foto} alt={estabelecimento.nome} />
                
                  <div className="user-info">
                    <strong>{estabelecimento.nome}</strong>
                    <span>{estabelecimento.email}</span>
                  </div>

                </header>
                <p>
                  {estabelecimento.obs}
                </p>
                <a href="http://google.com.br">Acessar informações</a>
            </li>
    );
}

export default EstaItem;