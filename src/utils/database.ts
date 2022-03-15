import {string} from '../languages';
import {ImageURISource} from 'react-native';

interface ICrop {
  name: string;
  avgPrice: number;
  yieldPerHa: number;
  icon: ImageURISource;
}
export const crops: Array<ICrop> = [
  {
    name: string.barley,
    icon: require('../assets/crops/barley.png'),
    avgPrice: 1,
    yieldPerHa: 1,
  },
  {
    name: string.canola,
    icon: require('../assets/crops/canola.png'),
    avgPrice: 1,
    yieldPerHa: 1,
  },
  {
    name: string.chafft,
    icon: require('../assets/crops/chafft.png'),
    avgPrice: 1,
    yieldPerHa: 1,
  },
  {
    name: string.corn,
    icon: require('../assets/crops/corn.png'),
    avgPrice: 1,
    yieldPerHa: 1,
  },
  {
    name: string.cotton,
    icon: require('../assets/crops/cotton.png'),
    avgPrice: 1,
    yieldPerHa: 1,
  },
  {
    name: string.cotton_round_bale,
    icon: require('../assets/crops/cotton_round_bale.png'),
    avgPrice: 1,
    yieldPerHa: 1,
  },
  {
    name: string.cotton_square_bale,
    icon: require('../assets/crops/cotton_square_bale.png'),
    avgPrice: 1,
    yieldPerHa: 1,
  },
  {
    name: string.fir_tree,
    icon: require('../assets/crops/fir_tree.png'),
    avgPrice: 1,
    yieldPerHa: 1,
  },
  {
    name: string.grapes,
    icon: require('../assets/crops/grapes.png'),
    avgPrice: 1,
    yieldPerHa: 1,
  },
  {
    name: string.grass,
    icon: require('../assets/crops/grass.png'),
    avgPrice: 1,
    yieldPerHa: 1,
  },
  {
    name: string.grass_cut,
    icon: require('../assets/crops/grass_cut.png'),
    avgPrice: 1,
    yieldPerHa: 1,
  },
  {
    name: string.hay,
    icon: require('../assets/crops/hay.png'),
    avgPrice: 1,
    yieldPerHa: 1,
  },
  {
    name: string.oat,
    icon: require('../assets/crops/oat.png'),
    avgPrice: 1,
    yieldPerHa: 1,
  },
  {
    name: string.olives,
    icon: require('../assets/crops/olives.png'),
    avgPrice: 1,
    yieldPerHa: 1,
  },
  {
    name: string.poplar_tree,
    icon: require('../assets/crops/poplar_tree.png'),
    avgPrice: 1,
    yieldPerHa: 1,
  },
  {
    name: string.potatoes,
    icon: require('../assets/crops/potatoes.png'),
    avgPrice: 1,
    yieldPerHa: 1,
  },
  {
    name: string.silage,
    icon: require('../assets/crops/silage.png'),
    avgPrice: 1,
    yieldPerHa: 1,
  },
  {
    name: string.sorghum,
    icon: require('../assets/crops/sorghum.png'),
    avgPrice: 1,
    yieldPerHa: 1,
  },
  {
    name: string.soybeans,
    icon: require('../assets/crops/soybeans.png'),
    avgPrice: 1,
    yieldPerHa: 1,
  },
  {
    name: string.straw,
    icon: require('../assets/crops/straw.png'),
    avgPrice: 1,
    yieldPerHa: 1,
  },
  {
    name: string.straw_round_bale,
    icon: require('../assets/crops/straw_round_bale.png'),
    avgPrice: 1,
    yieldPerHa: 1,
  },
  {
    name: string.straw_square_bale,
    icon: require('../assets/crops/straw_square_bale.png'),
    avgPrice: 1,
    yieldPerHa: 1,
  },
  {
    name: string.sugar_beet,
    icon: require('../assets/crops/sugar_beet.png'),
    avgPrice: 1,
    yieldPerHa: 1,
  },
  {
    name: string.sugar_beet_cut,
    icon: require('../assets/crops/sugar_beet_cut.png'),
    avgPrice: 1,
    yieldPerHa: 1,
  },
  {
    name: string.sugarcane,
    icon: require('../assets/crops/sugarcane.png'),
    avgPrice: 1,
    yieldPerHa: 1,
  },
  {
    name: string.sunflowers,
    icon: require('../assets/crops/sunflowers.png'),
    avgPrice: 1,
    yieldPerHa: 1,
  },
  {
    name: string.wheat,
    icon: require('../assets/crops/wheat.png'),
    avgPrice: 1,
    yieldPerHa: 1,
  },
  {
    name: string.wood_chips,
    icon: require('../assets/crops/wood_chips.png'),
    avgPrice: 1,
    yieldPerHa: 1,
  },
  {
    name: string.wood_chips_round_bale,
    icon: require('../assets/crops/wood_chips_round_bale.png'),
    avgPrice: 1,
    yieldPerHa: 1,
  },
  {
    name: string.wood_chips_square_bale,
    icon: require('../assets/crops/wood_chips_square_bale.png'),
    avgPrice: 1,
    yieldPerHa: 1,
  },
];
