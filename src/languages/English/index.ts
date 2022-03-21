export interface ILanguageProps {
  key: string;
  flag: string;
  name: string;
  string: object;
}

export interface ILanguage {
  // Main buttons and Title
  crops: string;
  animals: string;
  products: string;
  language: string;
  appearance: string;
  title: string;
  // Labels
  bonus: string;
  price: string;
  yieldPerHa: string;
  liters: string;
  unit: string;
  limed_stage: string;
  fertilized_stage: string;
  select_fertilized: string;
  no_fertilized: string;
  half_fertilized: string;
  full_fertilized: string;
  weeds_stage: string;
  select_removed_weeds: string;
  no_removed_weeds: string;
  mec_removed_weeds: string;
  chem_removed_weeds: string;
  rolled_stage: string;
  mulched_stage: string;
  plowed_stage: string;
  difficulty: string;
  select_difficulty: string;
  easy: string;
  medium: string;
  hard: string;
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
  bonus: 'Bonus',
  yieldPerHa: 'Yield (Ha)',
  liters: 'L',
  unit: 'Un.',
  limed_stage: 'Limed',
  fertilized_stage: 'Fertilizer stage',
  select_fertilized: 'Select the fertilizer stage',
  no_fertilized: 'Unfertilized',
  half_fertilized: '50% Fertilized',
  full_fertilized: '100% Fertilized',
  weeds_stage: 'Weeds stage',
  select_removed_weeds: 'Select the weeds stage',
  no_removed_weeds: 'Weeds not removed',
  mec_removed_weeds: 'Mechanically removed weeds',
  chem_removed_weeds: 'Chemically removed weeds',
  rolled_stage: 'Rolled',
  mulched_stage: 'Mulched',
  plowed_stage: 'Plowed',
  difficulty: 'Difficulty',
  select_difficulty: 'Select the difficulty',
  easy: 'Easy',
  medium: 'Medium',
  hard: 'Hard',
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
  grass_cut: 'Grass (Cut)',
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
  sugar_beet_cut: 'Sugar Beet (Cut)',
  sugarcane: 'Sugarcane',
  sunflowers: 'Sunflowers',
  wheat: 'Wheat',
  wood_chips: 'Wood Chips',
  wood_chips_round_bale: 'Wood Chips Round Bale',
  wood_chips_square_bale: 'Wood Chips Square Bale',
};

const US: ILanguageProps = {
  key: 'US',
  flag: '🇺🇸',
  name: 'English',
  string: strings,
};

export {US};
