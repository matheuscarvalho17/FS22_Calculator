import {ILanguage, ILanguageProps, US} from '../English';

const strings: ILanguage = {
  ...US.string,
  // Main buttons and Title
  crops: '文化',
  animals: '動物',
  products: '製品',
  language: '言語',
  title: '農業計算機',
  // Labels
  // bonus: 'Bonus',
  price: '価格',
  yieldPerHa: 'ヘクタールあたりのリットル',
  // liters: 'L',
  // unit: 'Un.',
  // limed_stage: 'Limed',
  // fertilized_stage: 'Fertilizer stage',
  // select_fertilized: 'Select the fertilizer stage',
  // no_fertilized: 'Unfertilized',
  // half_fertilized: '50% Fertilized',
  // full_fertilized: '100% Fertilized',
  // weeds_stage: 'Weeds stage',
  // select_removed_weeds: 'Select the weeds stage',
  // no_removed_weeds: 'Weeds not removed',
  // mec_removed_weeds: 'Mechanically removed weeds',
  // chem_removed_weeds: 'Chemically removed weeds',
  // rolled_stage: 'Rolled',
  // mulched_stage: 'Mulched',
  // plowed_stage: 'Plowed',
  // difficulty: 'Difficulty',
  // select_difficulty: 'Select the difficulty',
  // easy: 'Easy',
  // medium: 'Medium',
  // hard: 'Hard',
  // select_measure_unit: 'Select the measure unit',
  // are: 'Are (a)',
  // hectare: 'Hectare (ha)',
  // square_meters: 'Square Meters (m²)',
  // // Crops
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
  // grass_cut: 'Grass (Cut)',
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
  // sugar_beet_cut: 'Sugar Beet (Cut)',
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
