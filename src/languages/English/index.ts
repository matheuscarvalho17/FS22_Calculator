export interface ILanguage {
  crops: string;
  animals: string;
  products: string;
  title: string;
  language: string;
  //crops
  wheat: string;
  //crop screen
  price: string;
  yieldPerHa: string;
}
const strings: ILanguage = {
  // Main buttons
  crops: 'Crops',
  animals: 'Animals',
  products: 'Products',
  title: 'Farming Calculator',
  wheat: 'Wheat',
  price: 'Price',
  yieldPerHa: 'yieldPerHa',
  language: 'Language',
};

const US = {
  name: 'English',
  string: strings,
};

export {US};
