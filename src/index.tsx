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
          title: 'Shampoo Tradicional I Love Pet 5 Litros',
          img: 'https://a-static.mlcdn.com.br/618x463/shampoo-para-cachorro-sanol-pelos-claros-500ml/agropesc/454/369f32cb669333f3dc4a4f868d40a6cc.jpg',
          amount: 60.90,
          type: 'suggestion'
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


