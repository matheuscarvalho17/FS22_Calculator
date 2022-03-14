import {defaultLanguage, ILanguage} from '../interface';

const strings: ILanguage = {
  ...defaultLanguage,
  // Botões do Menu
  crops: 'Culturas',
  animals: 'Animais',
  products: 'Produtos',
  title: 'Calculadora de Farming',
  wheat: 'Trigo',
  price: 'Preço',
  yieldPerHa: 'yieldPerHa',
};

const PT = {
  name: 'Português',
  string: strings,
};

export {PT};
