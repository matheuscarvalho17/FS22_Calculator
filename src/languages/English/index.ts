export interface ILanguageProps {
  key: string;
  flag: string;
  name: string;
  string: object;
}

export interface ILanguage {
  // !Main buttons and Title
  crops: string;
  animals: string;
  products: string;
  language: string;
  appearance: string;
  title: string;
  // !Labels
  bonus: string;
  price: string;
  yield: string;
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
  measure_unit: string;
  select_measure_unit: string;
  are: string;
  acre: string;
  hectare: string;
  square_meter: string;
  square_foot: string;
  enter_field_size: string;
  enter_harvester_target: string;
  field_care: string;
  field_size: string;
  field_required: string;
  harvest_target: string;
  warn_yield_size: string;
  warn_harvest_target: string;
  warn_measure_unit: string;
  wip: string;
  calculation_method: string;
  mathBySize: string;
  mathByHarvest: string;
  // !Crops
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
  first_soil_preparation: string;
  first_soil_preparation_check: string;
  first_soil_preparation_not_check: string;
}
const strings: ILanguage = {
  // !Main buttons and Title
  crops: 'Crops',
  animals: 'Animals',
  products: 'Products',
  language: 'Language',
  appearance: 'Appearance',
  title: 'Farming Calculator',
  // !Labels
  price: 'Price',
  bonus: 'Bonus',
  yield: 'Yield',
  liters: 'L',
  unit: 'Un.',
  limed_stage: 'Liming',
  fertilized_stage: 'Fertilization stage',
  select_fertilized: 'Select fertilization stage',
  no_fertilized: 'Unfertilized',
  half_fertilized: '50% Fertilized',
  full_fertilized: '100% Fertilized',
  weeds_stage: 'Weeds stage',
  select_removed_weeds: 'Select the weeds stage',
  no_removed_weeds: 'Weeds not removed',
  mec_removed_weeds: 'Mechanically removed weeds',
  chem_removed_weeds: 'Chemically removed weeds',
  rolled_stage: 'Rolling',
  mulched_stage: 'Mulching',
  plowed_stage: 'Plowing',
  difficulty: 'Difficulty',
  select_difficulty: 'Select the difficulty',
  easy: 'Easy',
  medium: 'Medium',
  hard: 'Hard',
  measure_unit: 'Measure unit',
  select_measure_unit: 'Select the measure unit',
  are: 'Are (a)',
  acre: 'Acre (acre)',
  hectare: 'Hectare (ha)',
  square_meter: 'Square Meter (m²)',
  square_foot: 'Square Foot (ft²)',
  enter_harvester_target: 'Enter the harvester target',
  enter_field_size: 'Enter the field size',
  field_care: 'About field care',
  field_size: 'About field size and measure unit',
  field_required: 'Field size',
  harvest_target: 'About harvest target and measure unit',
  warn_yield_size: 'Invalid yield size',
  warn_harvest_target: 'Invalid harvest target',
  warn_measure_unit: 'Invalid measure unit',
  wip: 'Work in progress',
  calculation_method: 'Select the calculation method',
  mathBySize: 'By field size',
  mathByHarvest: 'By harvest target',
  // !Crops
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
  first_soil_preparation: 'About soil preparation',
  first_soil_preparation_check: 'First soil preparation',
  first_soil_preparation_not_check: 'Not first soil preparation',
};

const US: ILanguageProps = {
  key: 'US',
  flag: '🇺🇸',
  name: 'English',
  string: strings,
};

export {US};
