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
          description: '-Shampoo para cachorros de pelos claros para banhos semanais, 500ML'
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
        }

      ]
    });

    this.get('/toys', () => {
      return [
        {
          id: 8,
          title: 'Ração Magnus Chips - Para Cães adultos, 15kg',
          img: 'https://www.petlove.com.br/images/products/225089/product/311733.jpg?1593521736',
          amount: 87.93,
          type: 'toy'
        },

        {
          id: 9,
          title: 'Mordedor de pelúcida Jacaré - Multi Squeaker',
          img: 'https://www.petlove.com.br/images/products/230776/product/Brinquedo_Mordedor_Pel%C3%BAcia_Jacar%C3%A9_Multi_Squeaker_2555550.jpg?1602099153',
          amount: 72.20,
          off: 'De R̶$̶8̶0̶,̶2̶2̶',
          description: '-Shampoo para cachorros de pelos claros para banhos semanais, 500ML'
        },

        {
          id: 10,
          title: 'Mordedor de pelúcida Jacaré - Multi Squeaker',
          img: 'https://www.petlove.com.br/images/products/230776/product/Brinquedo_Mordedor_Pel%C3%BAcia_Jacar%C3%A9_Multi_Squeaker_2555550.jpg?1602099153',
          amount: 72.20,
          off: 'De R̶$̶8̶0̶,̶2̶2̶',
          description: '-Shampoo para cachorros de pelos claros para banhos semanais, 500ML'
        },

        {
          id: 11,
          title: 'Mordedor de pelúcida Jacaré - Multi Squeaker',
          img: 'https://www.petlove.com.br/images/products/230776/product/Brinquedo_Mordedor_Pel%C3%BAcia_Jacar%C3%A9_Multi_Squeaker_2555550.jpg?1602099153',
          amount: 72.20,
          off: 'De R̶$̶8̶0̶,̶2̶2̶',
          description: '-Shampoo para cachorros de pelos claros para banhos semanais, 500ML'
        },

        {
          id: 12,
          title: 'Mordedor de pelúcida Jacaré - Multi Squeaker',
          img: 'https://www.petlove.com.br/images/products/230776/product/Brinquedo_Mordedor_Pel%C3%BAcia_Jacar%C3%A9_Multi_Squeaker_2555550.jpg?1602099153',
          amount: 72.20,
          off: 'De R̶$̶8̶0̶,̶2̶2̶',
          description: '-Shampoo para cachorros de pelos claros para banhos semanais, 500ML'
        },



      ]
    });

    this.get('/beds-and-houses', () => {
      return [
        {
          id: 14,
          title: 'Mordedor de pelúcida Jacaré - Multi Squeaker',
          img: 'https://www.petlove.com.br/images/products/230776/product/Brinquedo_Mordedor_Pel%C3%BAcia_Jacar%C3%A9_Multi_Squeaker_2555550.jpg?1602099153',
          amount: 72.20,
          description: '-Shampoo para cachorros de pelos claros para banhos semanais, 500ML'
        },

        {
          id: 15,
          title: 'Mordedor de pelúcida Jacaré - Multi Squeaker',
          img: 'https://www.petlove.com.br/images/products/230776/product/Brinquedo_Mordedor_Pel%C3%BAcia_Jacar%C3%A9_Multi_Squeaker_2555550.jpg?1602099153',
          amount: 72.20,
          off: 'De R̶$̶8̶0̶,̶2̶2̶',
          description: '-Shampoo para cachorros de pelos claros para banhos semanais, 500ML'
        },

        {
          id: 16,
          title: 'Mordedor de pelúcida Jacaré - Multi Squeaker',
          img: 'https://www.petlove.com.br/images/products/230776/product/Brinquedo_Mordedor_Pel%C3%BAcia_Jacar%C3%A9_Multi_Squeaker_2555550.jpg?1602099153',
          amount: 72.20,
          off: 'De R̶$̶8̶0̶,̶2̶2̶',
          description: '-Shampoo para cachorros de pelos claros para banhos semanais, 500ML'
        },

        {
          id: 17,
          title: 'Mordedor de pelúcida Jacaré - Multi Squeaker',
          img: 'https://www.petlove.com.br/images/products/230776/product/Brinquedo_Mordedor_Pel%C3%BAcia_Jacar%C3%A9_Multi_Squeaker_2555550.jpg?1602099153',
          amount: 72.20,
          off: 'De R̶$̶8̶0̶,̶2̶2̶',
          description: '-Shampoo para cachorros de pelos claros para banhos semanais, 500ML'
        },

        {
          id: 18,
          title: 'Mordedor de pelúcida Jacaré - Multi Squeaker',
          img: 'https://www.petlove.com.br/images/products/230776/product/Brinquedo_Mordedor_Pel%C3%BAcia_Jacar%C3%A9_Multi_Squeaker_2555550.jpg?1602099153',
          amount: 72.20,
          off: 'De R̶$̶8̶0̶,̶2̶2̶',
          description: '-Shampoo para cachorros de pelos claros para banhos semanais, 500ML'
        }
      ]
    });
    
    this.get('/collars', () => {
      return [
        {
          id: 19,
          title: 'Mordedor de pelúcida Jacaré - Multi Squeaker',
          img: 'https://www.petlove.com.br/images/products/230776/product/Brinquedo_Mordedor_Pel%C3%BAcia_Jacar%C3%A9_Multi_Squeaker_2555550.jpg?1602099153',
          amount: 72.20,
          off: 'De R̶$̶8̶0̶,̶2̶2̶',
          description: '-Shampoo para cachorros de pelos claros para banhos semanais, 500ML'
        },

        {
          id: 20,
          title: 'Mordedor de pelúcida Jacaré - Multi Squeaker',
          img: 'https://www.petlove.com.br/images/products/230776/product/Brinquedo_Mordedor_Pel%C3%BAcia_Jacar%C3%A9_Multi_Squeaker_2555550.jpg?1602099153',
          amount: 72.20,
          description: '-Shampoo para cachorros de pelos claros para banhos semanais, 500ML'
        },

        {
          id: 22,
          title: 'Mordedor de pelúcida Jacaré - Multi Squeaker',
          img: 'https://www.petlove.com.br/images/products/230776/product/Brinquedo_Mordedor_Pel%C3%BAcia_Jacar%C3%A9_Multi_Squeaker_2555550.jpg?1602099153',
          amount: 72.20,
          off: 'De R̶$̶8̶0̶,̶2̶2̶',
          description: '-Shampoo para cachorros de pelos claros para banhos semanais, 500ML'
        },

        {
          id: 23,
          title: 'Mordedor de pelúcida Jacaré - Multi Squeaker',
          img: 'https://www.petlove.com.br/images/products/230776/product/Brinquedo_Mordedor_Pel%C3%BAcia_Jacar%C3%A9_Multi_Squeaker_2555550.jpg?1602099153',
          amount: 72.20,
          off: 'De R̶$̶8̶0̶,̶2̶2̶',
          description: '-Shampoo para cachorros de pelos claros para banhos semanais, 500ML'
        },

        {
          id: 24,
          title: 'Mordedor de pelúcida Jacaré - Multi Squeaker',
          img: 'https://www.petlove.com.br/images/products/230776/product/Brinquedo_Mordedor_Pel%C3%BAcia_Jacar%C3%A9_Multi_Squeaker_2555550.jpg?1602099153',
          amount: 72.20,
          off: 'De R̶$̶8̶0̶,̶2̶2̶',
          description: '-Shampoo para cachorros de pelos claros para banhos semanais, 500ML'
        }
      ]
    });

    this.get('/bones-and-snacks', () => {
      return [
        {
          id: 25,
          title: 'Mordedor de pelúcida Jacaré - Multi Squeaker',
          img: 'https://www.petlove.com.br/images/products/230776/product/Brinquedo_Mordedor_Pel%C3%BAcia_Jacar%C3%A9_Multi_Squeaker_2555550.jpg?1602099153',
          amount: 72.20,
          off: 'De R̶$̶8̶0̶,̶2̶2̶',
          description: '-Shampoo para cachorros de pelos claros para banhos semanais, 500ML'
        },

        {
          id: 26,
          title: 'Mordedor de pelúcida Jacaré - Multi Squeaker',
          img: 'https://www.petlove.com.br/images/products/230776/product/Brinquedo_Mordedor_Pel%C3%BAcia_Jacar%C3%A9_Multi_Squeaker_2555550.jpg?1602099153',
          amount: 72.20,
          description: '-Shampoo para cachorros de pelos claros para banhos semanais, 500ML'
        },


        {
          id: 28,
          title: 'Mordedor de pelúcida Jacaré - Multi Squeaker',
          img: 'https://www.petlove.com.br/images/products/230776/product/Brinquedo_Mordedor_Pel%C3%BAcia_Jacar%C3%A9_Multi_Squeaker_2555550.jpg?1602099153',
          amount: 72.20,
          off: 'De R̶$̶8̶0̶,̶2̶2̶',
          description: '-Shampoo para cachorros de pelos claros para banhos semanais, 500ML'
        },

        {
          id: 29,
          title: 'Mordedor de pelúcida Jacaré - Multi Squeaker',
          img: 'https://www.petlove.com.br/images/products/230776/product/Brinquedo_Mordedor_Pel%C3%BAcia_Jacar%C3%A9_Multi_Squeaker_2555550.jpg?1602099153',
          amount: 72.20,
          off: 'De R̶$̶8̶0̶,̶2̶2̶',
          description: '-Shampoo para cachorros de pelos claros para banhos semanais, 500ML'
        },

        {
          id: 30,
          title: 'Mordedor de pelúcida Jacaré - Multi Squeaker',
          img: 'https://www.petlove.com.br/images/products/230776/product/Brinquedo_Mordedor_Pel%C3%BAcia_Jacar%C3%A9_Multi_Squeaker_2555550.jpg?1602099153',
          amount: 72.20,
          off: 'De R̶$̶8̶0̶,̶2̶2̶',
          description: '-Shampoo para cachorros de pelos claros para banhos semanais, 500ML'
        },

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


