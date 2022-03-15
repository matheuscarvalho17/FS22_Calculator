import {string} from '../languages';

interface ICrop {
  name: string;
  icon: any;
  avgPrice: number;
  yieldPerHa: number;
}
export const crops: Array<ICrop> = [
  {
    name: string.wheat,
    icon: require('../assets/crops/wheat.png'),
    avgPrice: 1,
    yieldPerHa: 1,
  },
  {
    name: string.wheat,
    icon: require('../assets/crops/wheat.png'),
    avgPrice: 1,
    yieldPerHa: 1,
  },
];
