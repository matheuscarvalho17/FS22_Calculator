import {defaultLanguage, ILanguage} from '../interface';

const strings: ILanguage = {
  ...defaultLanguage,
  // Main buttons
  crops: 'Crops',
  animals: 'Animals',
  products: 'Products',
  //Pages Title
  title: 'Farming Calculator',
  price: 'Price',
  yieldPerHa: 'yieldPerHa',
  //Crops
  barley: 'Barley',
  canola: 'Canola',
  chafft: 'Chafft',
  corn: 'Corn',
  cotton: 'Cotton',
  cotton_round_bale: 'Cotton Round Bale',
  cotton_square_bale: 'Cotton Square Bale',
  fir_tree: 'Fir Tree',
  grapes: 'Grapes',
  grass: 'Grass',
  grass_cut: 'Grass (cut)',
  hay: 'Hay',
  oat: 'Oat',
  olives: 'Olives',
  poplar_tree: 'Poplar Tree',
  potatoes: 'Potatoes',
  silage: 'Silage',
  sorghum: 'Sorghum',
  soybeans: 'Soybeans',
  straw: 'Straw',
  straw_round_bale: 'Straw Round Bale',
  straw_square_bale: 'Straw Square Bale',
  sugar_beet: 'Sugar Beet',
  sugar_beet_cut: 'Sugar Beet (cut)',
  sugarcane: 'Sugarcane',
  sunflowers: 'Sunflowers',
  wheat: 'Wheat',
  wood_chips: 'Wood Chips',
  wood_chips_round_bale: 'Wood Chips Round Bale',
  wood_chips_square_bale: 'Wood Chips Square Bale',
};

const US = {
  name: 'English',
  string: strings,
};

export {US};
