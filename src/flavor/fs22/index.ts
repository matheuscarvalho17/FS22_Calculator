import {colors} from './colors';

export interface IFlavorProps {
  key: string;
  name: string;
  colors: object;
}

const FS22: IFlavorProps = {
  key: 'FS22',
  colors: colors,
  name: 'Farming Simulador 22',
};

export {FS22};
