interface ICrop {
  name: string;
  icon: any;
  avgPrice: number;
  yieldPerHa: number;
}
export const crops: Array<ICrop> = [
  {
    name: 'wheat',
    icon: require('../assets/crops/wheat.png'),
    avgPrice: 1,
    yieldPerHa: 1,
  },
  {
    name: 'wheat',
    icon: require('../assets/crops/wheat.png'),
    avgPrice: 1,
    yieldPerHa: 1,
  },
];
