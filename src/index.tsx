import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import { App } from './App';


createServer({
  routes() {
    this.namespace = 'api';

    this.get('/products', () => {
      return [
        {
          id: 1,
          title: 'Shampoo Sanol Dog - Pelos claros 500ML',
          img: 'https://a-static.mlcdn.com.br/618x463/shampoo-para-cachorro-sanol-pelos-claros-500ml/agropesc/454/369f32cb669333f3dc4a4f868d40a6cc.jpg',
          amount: 60.90,
          type: 'suggestion'
        },
        {
          id: 2,
          title: 'Cama Londres Vermelha - Chics',
          img: 'https://images-americanas.b2w.io/produtos/01/00/img/1511316/8/1511316875_1GG.jpg',
          amount: 300.39,
          type: 'suggestion'
        },

        {
          id: 3,
          title: 'Cama Londres Azul - Chicxs',
          img: 'https://images-americanas.b2w.io/produtos/01/00/img/2070443/4/2070443430_1GG.jpg',
          off: 'De R̶̶̶$̶̶̶3̶0̶0̶,̶̶̶3̶0̶',
          amount: 266.31,
          type: 'suggestion'
          
        },

        {
          id: 4,
          title: 'Cama Londres Vermelha - Chics',
          img: 'https://images-americanas.b2w.io/produtos/01/00/img/1511316/8/1511316875_1GG.jpg',
          amount: 300.39,
          type: 'suggestion'
        },

        {
          id: 5,
          title: 'Cama Londres Vermelha - Chics',
          img: 'https://images-americanas.b2w.io/produtos/01/00/img/1511316/8/1511316875_1GG.jpg',
          amount: 300.39,
          type: 'suggestion'
        },

        {
          id: 6,
          title: 'Cama Londres Vermelha - Chics',
          img: 'https://images-americanas.b2w.io/produtos/01/00/img/1511316/8/1511316875_1GG.jpg',
          amount: 300.39,
          type: 'suggestion'
        }
      ]
    });

    this.get('/toys', () => {
      return [
        {
          id: 4,
          title: 'Mordedor de pelúcida Jacaré - Multi Squeaker',
          img: 'https://www.petlove.com.br/images/products/230776/product/Brinquedo_Mordedor_Pel%C3%BAcia_Jacar%C3%A9_Multi_Squeaker_2555550.jpg?1602099153',
          amount: 72.20,
          off: 'De R̶$̶8̶0̶,̶2̶2̶',
          type: 'toy'
        },
        {
          id: 5,
          title: 'Ração Magnus Chips - Para Cães adultos, 15kg',
          img: 'https://www.petlove.com.br/images/products/225089/product/311733.jpg?1593521736',
          amount: 87.93,
          type: 'toy'
        }
      ]
    });
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


