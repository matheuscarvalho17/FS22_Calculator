export interface ILanguage {
  // Main buttons and Title
  crops: string;
  animals: string;
  products: string;
  language: string;
  appearance: string;
  title: string;
  // Labels
  price: string;
  yieldPerHa: string;
  // Crops
  barley: string;
  canola: string;
  chafft: string;
  corn: string;
  cotton: string;
  cotton_round_bale: string;
  cotton_square_bale: string;
  fir_tree: string;
  grapes: string;
  grass: string;
  grass_cut: string;
  hay: string;
  oat: string;
  olives: string;
  poplar_tree: string;
  potatoes: string;
  silage: string;
  sorghum: string;
  soybeans: string;
  straw: string;
  straw_round_bale: string;
  straw_square_bale: string;
  sugar_beet: string;
  sugar_beet_cut: string;
  sugarcane: string;
  sunflowers: string;
  wheat: string;
  wood_chips: string;
  wood_chips_round_bale: string;
  wood_chips_square_bale: string;
}
const strings: ILanguage = {
  // Main buttons and Title
  crops: 'Crops',
  animals: 'Animals',
  products: 'Products',
  language: 'Language',
  appearance: 'Appearance',
  title: 'Farming Calculator',
  // Labels
  price: 'Price',
  yieldPerHa: 'yieldPerHa',
  // Crops
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
  key: 'US',
  name: 'English',
  string: strings,
};

export {US};
