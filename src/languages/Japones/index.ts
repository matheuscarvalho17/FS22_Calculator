import {ILanguage, ILanguageProps, US} from '../English';

const strings: ILanguage = {
  ...US.string,
  // Botões do Menu e Títulos
  crops: '文化',
  animals: '動物',
  products: '製品',
  language: '言語',
  title: '農業計算機',
  // Rótulos
  price: '価格',
  yieldPerHa: 'ヘクタールあたりのリットル',
  // liters: 'L',
  // unit: 'un.',
  // limed: 'Limed',
  // fertilized: 'Fertilized',
  // removed_weeds: 'Removed Weeds',
  // stone_picked: 'Stone Picked',
  // rolled: 'Rolled',
  // mulched: 'Mulched',
  // Culturas
  // barley: 'Barley',
  // canola: 'Canola',
  // chafft: 'Chafft',
  // corn: 'Corn',
  // cotton: 'Cotton',
  // cotton_round_bale: 'Cotton Round Bale',
  // cotton_square_bale: 'Cotton Square Bale',
  // fir_tree: 'Fir Tree',
  // grapes: 'Grapes',
  // grass: 'Grass',
  // grass_cut: 'Grass (cut)',
  // hay: 'Hay',
  // oat: 'Oat',
  // olives: 'Olives',
  // poplar_tree: 'Poplar Tree',
  // potatoes: 'Potatoes',
  // silage: 'Silage',
  // sorghum: 'Sorghum',
  // soybeans: 'Soybeans',
  // straw: 'Straw',
  // straw_round_bale: 'Straw Round Bale',
  // straw_square_bale: 'Straw Square Bale',
  // sugar_beet: 'Sugar Beet',
  // sugar_beet_cut: 'Sugar Beet (cut)',
  // sugarcane: 'Sugarcane',
  // sunflowers: 'Sunflowers',
  // wheat: 'Wheat',
  // wood_chips: 'Wood Chips',
  // wood_chips_round_bale: 'Wood Chips Round Bale',
  // wood_chips_square_bale: 'Wood Chips Square Bale',
};

const JP: ILanguageProps = {
  key: 'JP',
  flag: '🇯🇵',
  name: '日本',
  string: strings,
};

export {JP};
