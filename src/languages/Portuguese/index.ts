import {ILanguage, US} from '../English';

const strings: ILanguage = {
  ...US,
  // Botões do Menu
  crops: 'Culturas',
  animals: 'Animais',
  products: 'Produtos',
  title: 'Calculadora de Farming',
  wheat: 'Trigo',
  price: 'Preço',
  yieldPerHa: 'yieldPerHa',
  language: 'Idioma',
};

const PT = {
  name: 'Português',
  string: strings,
};

export {PT};
