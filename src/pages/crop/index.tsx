import {styles} from './styles';
import * as Styles from './styles';
import {useFlavor} from '../../flavor';
import {useNav} from '../../utils/hooks';
import {useLanguage} from '../../languages';
import {useCrops} from '../../utils/database';
import React, {useMemo, useState} from 'react';
import CheckBox from '../../components/CheckBox';
import {useRoute} from '@react-navigation/native';
import TextInput from '../../components/TextInput';
import IconButton from '../../components/IconButton';
import ComboBox, {Data} from '../../components/ComboBox';
import {roundNumber, onlyNumber} from '../../utils/masks';

const Crop: React.FC = ({}) => {
  const crops = useCrops();
  const route = useRoute();
  const {colors} = useFlavor();
  const {cropId} = route.params;
  const {string} = useLanguage();
  const navigation = useNav('crop');
  const [bonus, setBonus] = useState<number>(0);
  const [limed, setLimed] = useState<boolean>(false);
  const [rolled, setRolled] = useState<boolean>(false);
  const [plowed, setPlowed] = useState<boolean>(false);
  const [fieldSize, setFieldSize] = useState<string>('');
  const [mulched, setMulched] = useState<boolean>(false);
  const [multiplier, setMultiplier] = useState<number>(1);
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
  const [measureUnit, setMeasureUnit] = useState<Data>({
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
  const [measureUnitItens] = useState<Array<Data>>(
    useMemo(
      () => [
        {id: 0, label: string.are, value: 'a'},
        {id: 1, label: string.hectare, value: 'ha'},
        {id: 2, label: string.square_meters, value: 'm²'},
      ],
      [],
    ),
  );

  function yieldCalculation() {
    let multiplierByCare: number = 1;
    let multiplierByFieldSize: number = 0;
    let multiplierByMeasureUnit: number = 1;

    if (limed) {
      multiplierByCare = multiplierByCare + 0.15;
    }
    if (plowed) {
      multiplierByCare = multiplierByCare + 0.15;
    }
    if (rolled) {
      multiplierByCare = multiplierByCare + 0.025;
    }
    if (mulched) {
      multiplierByCare = multiplierByCare + 0.025;
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

    if (measureUnit.value === 'a') {
      multiplierByMeasureUnit = 0.01;
    }
    if (measureUnit.value === 'm²') {
      multiplierByMeasureUnit = 0.0001;
    }

    multiplierByFieldSize =
      parseInt(fieldSize) * multiplierByCare * multiplierByMeasureUnit;

    setMultiplier(multiplierByFieldSize);
    setBonus((multiplierByCare - 1) * 100);
  }

  return (
    <Styles.Container colors={colors}>
      <Styles.Header>
        <Styles.Title colors={colors}>{crops[cropId].name}</Styles.Title>
      </Styles.Header>
      <Styles.ScrollBody>
        <Styles.Body>
          <Styles.Image colors={colors} source={crops[cropId].icon} />
          <Styles.BoxList>
            <Styles.TextInfos colors={colors}>
              {string.yieldPerHa}:{' '}
              {roundNumber(multiplier * crops[cropId].yieldPerHa)}{' '}
              {crops[cropId].unit}
            </Styles.TextInfos>
            <Styles.TextInfos colors={colors}>
              {string.bonus}: +{roundNumber(bonus) + '%'}
            </Styles.TextInfos>
            <CheckBox
              value={limed}
              setValue={setLimed}
              text={string.limed_stage}
            />
            <CheckBox
              value={plowed}
              setValue={setPlowed}
              text={string.plowed_stage}
            />
            <CheckBox
              value={rolled}
              setValue={setRolled}
              text={string.rolled_stage}
            />
            <CheckBox
              value={mulched}
              setValue={setMulched}
              text={string.mulched_stage}
            />
            <ComboBox
              value={fertilized}
              data={fertilizedItems}
              setValue={setFertilized}
              placeholder={string.fertilized_stage}
              modal_text={string.select_fertilized}
            />
            <ComboBox
              value={removedWeeds}
              data={removedWeedItens}
              setValue={setRemovedWeeds}
              placeholder={string.weeds_stage}
              modal_text={string.select_removed_weeds}
            />
          </Styles.BoxList>
          <Styles.InputList>
            <Styles.LeftView>
              <TextInput
                style={styles.width95}
                value={onlyNumber(fieldSize)}
                setValue={setFieldSize}
                keyboard={'numeric'}
                placeholder={string.enter_field_size}
              />
            </Styles.LeftView>
            <Styles.RightView>
              <ComboBox
                style={styles.width95}
                value={measureUnit}
                data={measureUnitItens}
                setValue={setMeasureUnit}
                placeholderType={'value'}
                placeholder={string.abbr_hectare}
                modal_text={string.select_measure_unit}
              />
            </Styles.RightView>
          </Styles.InputList>
        </Styles.Body>
      </Styles.ScrollBody>
      <Styles.Footer>
        <IconButton
          onPress={() => {
            navigation.goBack();
          }}
          icon={<Styles.Icon colors={colors} name="arrow-back" />}
        />
        <IconButton
          onPress={() => {
            yieldCalculation();
            console.log(fieldSize);
            console.log(parseInt(fieldSize));
          }}
          icon={<Styles.Icon colors={colors} name="calculator" />}
        />
      </Styles.Footer>
    </Styles.Container>
  );
};
export default Crop;
