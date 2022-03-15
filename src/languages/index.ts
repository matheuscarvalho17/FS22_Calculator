import {ILanguage, US} from './English';
import {PT} from './Portuguese';

import {useAppContext} from '../Context';

export const listOfLanguages: any = {
  US: {language: US, name: 'English', selectionName: 'US'},
  PT: {language: PT, name: 'Português', selectionName: 'PT'},
};
// let {name, string}: {name: string; string: ILanguage} =
//   listOfLanguages[language].language;
// export function updateLanguage() {
//   name = listOfLanguages[language].language.name;
//   string = listOfLanguages[language].language.string;
// }
export function useLanguage() {
  const {language} = useAppContext();
  let {name, string}: {name: string; string: ILanguage} =
    listOfLanguages[language].language;

  return {name, string};
}
// export {name, string};
