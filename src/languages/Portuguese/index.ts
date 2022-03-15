import {ILanguage, US} from '../English';

const strings: ILanguage = {
  ...US.string,
  // Botões do Menu e Títulos
  crops: 'Culturas',
  animals: 'Animais',
  products: 'Produtos',
  language: 'Idioma',
  appearance: 'Aparência',
  title: 'Calculadora de Farming',
  // Rótulos
  price: 'Preço',
  yieldPerHa: 'yieldPerHa',
  // Culturas
  barley: 'Cevada',
  canola: 'Canola',
  chafft: 'Restolho',
  corn: 'Milho',
  cotton: 'Algodão',
  cotton_round_bale: 'Fardo Redondo de Algodão',
  cotton_square_bale: 'Fardo Quadrado de Algodão',
  fir_tree: 'Tronco de Árvore',
  grapes: 'Uvas',
  grass: 'Grama',
  grass_cut: 'Grama (Cortada)',
  hay: 'Feno',
  oat: 'Aveia',
  olives: 'Azeitona',
  poplar_tree: 'Choupo',
  potatoes: 'Batatas',
  silage: 'Silagem',
  sorghum: 'Sorgo',
  soybeans: 'Soja',
  straw: 'Palha',
  straw_round_bale: 'Fardo Redondo de Palha',
  straw_square_bale: 'Fardo Quadrado de Palha',
  sugar_beet: 'Beterraba',
  sugar_beet_cut: 'Beterraba',
  sugarcane: 'Cana de Açucar',
  sunflowers: 'Girasol',
  wheat: 'Trigo',
  wood_chips: 'Lasca de madeira',
  wood_chips_round_bale: 'Fardo Redondo de lasca de madeira',
  wood_chips_square_bale: 'Fardo Quadrado de lasca de madeira',
};

const PT = {
  key: 'PT',
  name: 'Português',
  string: strings,
};

export {PT};
