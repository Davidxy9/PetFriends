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
          description: '-Shampoo para cachorros de pelos claros para banhos semanais, 500ML.'
        },
        {
          id: 2,
          title: 'Cama Londres Vermelha - Chics',
          img: 'https://images-americanas.b2w.io/produtos/01/00/img/1511316/8/1511316875_1GG.jpg',
          amount: 165.66,
          description: '-Cama para seu bichinho de estimação, seja ele gato ou cachorro, 100% algodão e na cor vermelha.'

        },

        {
          id: 3,
          title: 'Cama Londres Azul - Chicxs',
          img: 'https://images-americanas.b2w.io/produtos/01/00/img/2070443/4/2070443430_1GG.jpg',
          off: 'De R̶̶̶$̶̶̶3̶0̶0̶,̶̶̶3̶0̶',
          amount: 266.31,
          description: '-Cama para cachorro com tecido de alta resistência,encorpado e na cor azul.'

          
        },

        {
          id: 4,
          title: 'Comedouro para Pet - Melancia',
          img: 'https://static.riachuelo.com.br/RCHLO/13764900001/portrait/d5198f1a48c90a18b29c185d85566a14fe4a5d2f.jpg?imwidth=700',
          amount: 39.90,
          description: '-Produzido em porcelana, faciliza a alimentação do seu pet e facilita na higienização do produto.'

        },

        {
          id: 5,
          title: 'Beeps Shampoo - Melancia, 500ML',
          img: 'https://images.tcdn.com.br/img/img_prod/752354/shampoo_2_em_1_beeps_pet_society_500ml_2993_1_dc9f17a8d21d2234023d3b5bfa628959.jpg',
          amount: 37.50,
          description: '-Shampoo 2 em 1 Pet Society para cães e gatos de todas raças.'
        }

      ]
    });

    this.get('/toys', () => {
      return [
        {
          id: 6,
          title: 'Brinquedo mordedor pelúcia - Macaco rosa',
          img: 'https://www.petlove.com.br/images/products/214325/product/Brinquedo_Jambo_Mordedor_Pel%C3%BAcia_Macaco_Kelev_Rosa_1786688.jpg?1570546705',
          amount: 26.91,
          description: '-Um macaco rosa para seu pet com formato atrativo, mácio e resistente, fácil de trasnsportar.'

        },

        {
          id: 7,
          title: 'Mordedor de pelúcida Jacaré - Multi Squeaker',
          img: 'https://www.petlove.com.br/images/products/230776/product/Brinquedo_Mordedor_Pel%C3%BAcia_Jacar%C3%A9_Multi_Squeaker_2555550.jpg?1602099153',
          amount: 72.20,
          description: '-Com Cores vibrantes, melhora a atenção e perfeito para a socialização com pessoas e animais.'
        },

        {
          id: 8,
          title: 'Brinquedo Vinil Halteres Patinhas para Cães',
          img: 'https://www.petlove.com.br/images/products/232328/product/Brinquedo_Vinil_Halteres_Patinhas_para_C%C3%A3es_2562813_M.jpg?1605620063',
          amount: 13.65,
          description: '-Resistente, controla a ansiedade,material de qualidade e feito especialmente para cães!'
        },

        {
          id: 9,
          title: 'Brinquedo Interativo Pet & Go para Cães Azul',
          img: 'https://www.royalpets.com.br/media/catalog/product/cache/1/image/500x500/9df78eab33525d08d6e5fb8d27136e95/b/r/brinquedo_bud_jumper_pet_go.jpg',
          amount: 119.90,
          description: '-Uma excelente opção para manter seu pet distraído, estimulando os sentidos e garantindo total diversão.'
        },

        {
          id: 10,
          title: 'Bolinha Cravo Flexivel para Cães',
          img: 'https://http2.mlstatic.com/D_NQ_NP_778197-MLB32829215043_112019-O.webp',
          amount: 14.49,
          description: '-Para seu cão ter horas de diversão.'
        },



      ]
    });

    this.get('/beds-and-houses', () => {
      return [
        {
          id: 11,
          title: 'Mordedor de pelúcida Jacaré - Multi Squeaker',
          img: 'https://www.petlove.com.br/images/products/230776/product/Brinquedo_Mordedor_Pel%C3%BAcia_Jacar%C3%A9_Multi_Squeaker_2555550.jpg?1602099153',
          amount: 72.20,
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

        {
          id: 13,
          title: 'Mordedor de pelúcida Jacaré - Multi Squeaker',
          img: 'https://www.petlove.com.br/images/products/230776/product/Brinquedo_Mordedor_Pel%C3%BAcia_Jacar%C3%A9_Multi_Squeaker_2555550.jpg?1602099153',
          amount: 72.20,
          off: 'De R̶$̶8̶0̶,̶2̶2̶',
          description: '-Shampoo para cachorros de pelos claros para banhos semanais, 500ML'
        },

        {
          id: 14,
          title: 'Mordedor de pelúcida Jacaré - Multi Squeaker',
          img: 'https://www.petlove.com.br/images/products/230776/product/Brinquedo_Mordedor_Pel%C3%BAcia_Jacar%C3%A9_Multi_Squeaker_2555550.jpg?1602099153',
          amount: 72.20,
          off: 'De R̶$̶8̶0̶,̶2̶2̶',
          description: '-Shampoo para cachorros de pelos claros para banhos semanais, 500ML'
        },

        {
          id: 15,
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
          id: 16,
          title: 'Coleira Peitoral Melancia - Emporium Distripet',
          img: 'https://static3.tcdn.com.br/img/img_prod/719253/coleira_peitoral_melancia_emporium_distripet_757_1_20201214002038.jpg',
          amount: 60.90,
          description: '-Confeccionada em tecido super confortável, macia para deixar seu cachorro ou gato bem a vontade durante o passeio.'
        },

        {
          id: 17,
          title: 'Mordedor de pelúcida Jacaré - Multi Squeaker',
          img: 'https://www.petlove.com.br/images/products/230776/product/Brinquedo_Mordedor_Pel%C3%BAcia_Jacar%C3%A9_Multi_Squeaker_2555550.jpg?1602099153',
          amount: 72.20,
          description: '-Shampoo para cachorros de pelos claros para banhos semanais, 500ML'
        },

        {
          id: 18,
          title: 'Mordedor de pelúcida Jacaré - Multi Squeaker',
          img: 'https://www.petlove.com.br/images/products/230776/product/Brinquedo_Mordedor_Pel%C3%BAcia_Jacar%C3%A9_Multi_Squeaker_2555550.jpg?1602099153',
          amount: 72.20,
          off: 'De R̶$̶8̶0̶,̶2̶2̶',
          description: '-Shampoo para cachorros de pelos claros para banhos semanais, 500ML'
        },

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
          off: 'De R̶$̶8̶0̶,̶2̶2̶',
          description: '-Shampoo para cachorros de pelos claros para banhos semanais, 500ML'
        }
      ]
    });

    this.get('/bones-and-snacks', () => {
      return [
        {
          id: 21,
          title: 'Ração Magnus Chips - Para Cães adultos, 15kg',
          img: 'https://www.petlove.com.br/images/products/225089/product/311733.jpg?1593521736',
          amount: 77.93,
          off: 'De R̶$̶8̶0̶,̶2̶2̶',
          description: '- Ração Magnus Chips para Cães Adultos ,é a seleção de ingredientes que proporcionam um alimento com todos os nutrientes essenciais.'

        },

        {
          id: 22,
          title: 'Mordedor de pelúcida Jacaré - Multi Squeaker',
          img: 'https://www.petlove.com.br/images/products/230776/product/Brinquedo_Mordedor_Pel%C3%BAcia_Jacar%C3%A9_Multi_Squeaker_2555550.jpg?1602099153',
          amount: 72.20,
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
        },

        {
          id: 25,
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


