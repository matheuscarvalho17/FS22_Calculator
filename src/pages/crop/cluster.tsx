import React, {useEffect, useMemo, useState} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import * as Styles from './styles';
import {useFlavor} from '../../flavor';
import {useCrops} from '../../utils/database';
import {useRoute} from '@react-navigation/native';
import {useLanguage} from '../../languages';
import {useNav} from '../../utils/hooks';
import ComboBox, {Data} from '../../components/ComboBox';
import CheckBox from '../../components/CheckBox';
import TextInput from '../../components/TextInput';
// import { Container } from './styles';
interface ICluster {
  cropId: number;
  setMeasureUnitLabel: Function;
  unitsField: {
    '(ha)': number;
    '(acre)': number;
    '(a)': number;
    '(m²)': number;
    '(ft²)': number;
  };
  targetHarvester: string;
  setBonus: Function;
  setRealBonus: Function;
}
const Cluster: React.FC<ICluster> = ({
  cropId,
  setMeasureUnitLabel,
  unitsField,
  targetHarvester,
  setBonus,
  setRealBonus,
}) => {
  // !adubagem, rolagem, calagem
  // !hooks
  const crops = useCrops();
  const route = useRoute();
  const {colors} = useFlavor();
  const {string} = useLanguage();
  const navigation = useNav('crop');

  // !useState

  //const [bonus, setBonus] = useState<number>(0);
  const [limed, setLimed] = useState<boolean>(false);
  const [rolled, setRolled] = useState<boolean>(false);
  const [plowed, setPlowed] = useState<boolean>(false);

  const [mulched, setMulched] = useState<boolean>(false);

  const [fertilized, setFertilized] = useState<Data>({
    id: -1,
    label: null,
    value: null,
  });
  const [removedWeeds, setRemovedWeeds] = useState<Data>({
    id: -1,
    label: null,
    value: null,
  });

  const [fertilizedItems] = useState<Array<Data>>(
    useMemo(
      () => [
        {id: 0, label: string.no_fertilized, value: 'no_fertilized'},
        {id: 1, label: string.half_fertilized, value: 'half_fertilized'},
        {id: 2, label: string.full_fertilized, value: 'full_fertilized'},
      ],
      [],
    ),
  );
  const [removedWeedItens] = useState<Array<Data>>(
    useMemo(
      () => [
        {id: 0, label: string.no_removed_weeds, value: 'no_removed_weeds'},
        {id: 1, label: string.mec_removed_weeds, value: 'mec_removed_weeds'},
        {id: 2, label: string.chem_removed_weeds, value: 'chem_removed_weeds'},
      ],
      [],
    ),
  );

  // !functions

  function bonusCalculation() {
    let multiplierByCare: number = 1;

    if (plowed) {
      multiplierByCare = multiplierByCare + 0.35;
    }

    if (fertilized.value === 'half_fertilized') {
      multiplierByCare = multiplierByCare + 0.225;
    }
    if (fertilized.value === 'full_fertilized') {
      multiplierByCare = multiplierByCare + 0.45;
    }
    if (removedWeeds.value === 'mec_removed_weeds') {
      multiplierByCare = multiplierByCare + 0.2;
    }
    if (removedWeeds.value === 'chem_removed_weeds') {
      multiplierByCare = multiplierByCare + 0.15;
    }
    setBonus((multiplierByCare - 1) * 100);
    setRealBonus(multiplierByCare);
    return multiplierByCare;
  }

  // !useEffect
  useEffect(() => {
    bonusCalculation();
  }, [fertilized, removedWeeds, limed, plowed, rolled, mulched]);
  return (
    <View>
      {/* //* Calculation method */}

      {/* //* Field Care */}
      <>
        <Styles.SectionTitle colors={colors}>
          {string.field_care}:
        </Styles.SectionTitle>
        <ComboBox
          style={styles.margin5px}
          value={fertilized}
          data={fertilizedItems}
          setValue={setFertilized}
          placeholder={string.fertilized_stage}
          modal_text={string.select_fertilized}
        />
        <ComboBox
          style={styles.margin5px}
          value={removedWeeds}
          data={removedWeedItens}
          setValue={setRemovedWeeds}
          placeholder={string.weeds_stage}
          modal_text={string.select_removed_weeds}
        />
        <CheckBox
          value={plowed}
          setValue={setPlowed}
          style={styles.margin5px}
          text={string.plowed_stage}
        />
      </>
    </View>
  );
};

export default Cluster;
