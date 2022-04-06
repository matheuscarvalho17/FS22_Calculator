import {JP} from './Japones';
import {PT} from './Portuguese';
import {ILanguage, US} from './English';
import {useAppContext} from '../utils/Context';

export const listOfLanguages: any = {
  US: {language: US},
  PT: {language: PT},
  JP: {language: JP},
};
export function useLanguage() {
  const {language} = useAppContext();
  let {name, string}: {name: string; string: ILanguage} =
    listOfLanguages[language].language;

  return {name, string};
}
