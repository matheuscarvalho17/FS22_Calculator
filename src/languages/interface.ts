export interface ILanguage {
  crops: string;
  animals: string;
  products: string;
  title: string;
  //crops
  wheat: string;
  //crop screen
  price: string;
  yieldPerHa: string;
}
const defaultText = 'No language selected';
export const defaultLanguage: ILanguage = {
  animals: defaultText,
  crops: defaultText,
  products: defaultText,
  title: defaultText,
  wheat: defaultText,
  price: defaultText,
  yieldPerHa: defaultText,
};
