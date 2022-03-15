import {ILanguage, US} from './English';
import {PT} from './Portuguese';
import {language} from '../utils/storage';
export const listOfLanguages: any = {
  US: {language: US, name: 'English', selectionName: 'US'},
  PT: {language: PT, name: 'Portugues', selectionName: 'PT'},
};
let {name, string}: {name: string; string: ILanguage} =
  listOfLanguages[language].language;
export function updateLanguage() {
  name = listOfLanguages[language].language.name;
  string = listOfLanguages[language].language.string;
}

export {name, string};
