import {defaultLanguage, ILanguage} from '../interface';

const strings: ILanguage = {
  ...defaultLanguage,
  // Main buttons
  crops: 'Crops',
  animals: 'Animals',
  products: 'Products',
  title: 'Farming Calculator',
  wheat: 'Wheat',
  price: 'Price',
  yieldPerHa: 'yieldPerHa',
};

const US = {
  name: 'English',
  string: strings,
};

export {US};
