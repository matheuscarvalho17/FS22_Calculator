import {PT} from './Portuguese';
import {ILanguage, US} from './English';
import {useAppContext} from '../Context';

export const listOfLanguages: any = {
  US: {language: US, name: 'English', selectionName: 'US'},
  PT: {language: PT, name: 'Português', selectionName: 'PT'},
};
export function useLanguage() {
  const {language} = useAppContext();
  let {name, string}: {name: string; string: ILanguage} =
    listOfLanguages[language].language;

  return {name, string};
}
