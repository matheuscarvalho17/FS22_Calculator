import {FS22} from './fs22';
import {Fendt} from './fendt';
import {IColors} from './fs22/colors';
import {JohnDeere} from './johnDeere';
import {NewHolland} from './newHolland';
import {useAppContext} from '../Context';
import {MasseyFerguson} from './masseyFerguson';

export const listOfFlavors: any = {
  FS22: {flavor: FS22, selectionName: 'FS22'},
  Fendt: {flavor: Fendt, selectionName: 'Fendt'},
  JohnDeere: {flavor: JohnDeere, selectionName: 'JohnDeere'},
  NewHolland: {flavor: NewHolland, selectionName: 'NewHolland'},
  MasseyFerguson: {flavor: MasseyFerguson, selectionName: 'MasseyFerguson'},
};
export function useFlavor() {
  const {flavor} = useAppContext();
  let {name, colors}: {name: string; colors: IColors} =
    listOfFlavors[flavor].flavor;

  return {name, colors};
}
