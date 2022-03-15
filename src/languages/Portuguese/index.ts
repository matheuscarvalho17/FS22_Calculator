import {ILanguage, US} from '../English';

const strings: ILanguage = {
  ...US.string,
  // Botões do Menu e Títulos
  crops: 'Culturas',
  animals: 'Animais',
  products: 'Produtos',
  language: 'Idioma',
  appearance: 'Aparência',
  title: 'Calculadora do Farming',
  // Rótulos
  price: 'Preço',
  yieldPerHa: 'Rendimento (Ha)',
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
  sugarcane: 'Cana de Açúcar',
  sunflowers: 'Girassol',
  wheat: 'Trigo',
  wood_chips: 'Lasca de Madeira',
  wood_chips_round_bale: 'Fardo Redondo de Lasca de Madeira',
  wood_chips_square_bale: 'Fardo Quadrado de Lasca de Madeira',
};

const PT = {
  key: 'PT',
  name: 'Português',
  string: strings,
};

export {PT};
