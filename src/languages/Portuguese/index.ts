import {ILanguage, ILanguageProps, US} from '../English';

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
  bonus: 'Bônus',
  price: 'Preço',
  yieldPerHa: 'Rendimento (ha)',
  liters: 'L',
  unit: 'Un.',
  limed_stage: 'Calado',
  fertilized_stage: 'Estágio de fertilizante',
  select_fertilized: 'Selecione o estágio de fertilizante',
  no_fertilized: 'Não Fertilizado',
  half_fertilized: '50% Fertilizado',
  full_fertilized: '100% Fertilizado',
  weeds_stage: 'Estágio de ervas daninhas',
  select_removed_weeds: 'Selecione o estágio de ervas daninhas',
  no_removed_weeds: 'Ervas daninhas não removidas',
  mec_removed_weeds: 'Ervas daninhas removidas mecanicamente',
  chem_removed_weeds: 'Ervas daninhas removidas quimicamente',
  rolled_stage: 'Rolado',
  mulched_stage: 'Adubado',
  plowed_stage: 'Arado',
  difficulty: 'Dificuldade',
  select_difficulty: 'Selecione a dificuldade',
  easy: 'Fácil',
  medium: 'Médio',
  hard: 'Difícil',
  select_measure_unit: 'Selecione a unidade de medida',
  are: 'Are (a)',
  hectare: 'Hectare (ha)',
  abbr_hectare: 'ha',
  square_meters: 'Metros quadrados (m²)',
  enter_field_size: 'Digite o tamanho do campo',

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

const PT: ILanguageProps = {
  key: 'PT',
  flag: '🇧🇷',
  name: 'Português',
  string: strings,
};

export {PT};
