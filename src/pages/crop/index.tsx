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
import {roundNumber, onlyNumberAndDot} from '../../utils/masks';

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
  const [showWarn, setShowWarn] = useState<boolean>(false);
  const [warnMessage, setWarnMessage] = useState<string>('');
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
        {id: 0, label: string.are, value: '(a)'},
        {id: 1, label: string.acre, value: '(acre)'},
        {id: 2, label: string.hectare, value: '(ha)'},
        {id: 3, label: string.square_meter, value: '(m²)'},
        {id: 4, label: string.square_foot, value: '(ft²)'},
      ],
      [],
    ),
  );

  function validateEntryData() {
    setShowWarn(false);
    setWarnMessage('');

    if (parseFloat(fieldSize) > 0) {
      if (measureUnit.id != -1) {
        yieldCalculation();
      } else {
        setWarnMessage(string.warn_measure_unit);
        setShowWarn(true);
        return;
      }
    } else {
      setWarnMessage(string.warn_yield_size);
      setShowWarn(true);
      return;
    }
  }
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

    if (measureUnit.value === '(a)') {
      multiplierByMeasureUnit = 0.01;
    }
    if (measureUnit.value === '(acre)') {
      multiplierByMeasureUnit = 0.4036;
    }
    if (measureUnit.value === '(m²)') {
      multiplierByMeasureUnit = 0.0001;
    }
    if (measureUnit.value === '(ft²)') {
      multiplierByMeasureUnit = 0.0000092903;
    }

    multiplierByFieldSize =
      parseFloat(fieldSize) * multiplierByCare * multiplierByMeasureUnit;

    setMultiplier(multiplierByFieldSize);
    setBonus((multiplierByCare - 1) * 100);
  }

  return (
    <Styles.Container colors={colors}>
      <Styles.Header>
        <Styles.LeftView>
          <Styles.Title colors={colors}>{crops[cropId].name}</Styles.Title>
        </Styles.LeftView>
        <Styles.RightView>
          <Styles.Image colors={colors} source={crops[cropId].icon} />
        </Styles.RightView>
      </Styles.Header>
      <Styles.Body>
        <Styles.DivideView>
          <Styles.TextInfos colors={colors}>
            {string.yield} {measureUnit.value}:
          </Styles.TextInfos>
          <Styles.TextInfosAccent colors={colors}>
            {roundNumber(multiplier * crops[cropId].yieldPerHa)}{' '}
            {crops[cropId].unit}
          </Styles.TextInfosAccent>
        </Styles.DivideView>
        <Styles.DivideView>
          <Styles.TextInfos colors={colors}>{string.bonus}:</Styles.TextInfos>
          <Styles.TextInfosAccent colors={colors}>
            +{roundNumber(bonus) + '%'}
          </Styles.TextInfosAccent>
        </Styles.DivideView>
        <Styles.ScrollBody>
          <Styles.SectionTitle colors={colors}>
            {string.field_size}:
          </Styles.SectionTitle>
          <TextInput
            style={styles.margin5px}
            value={onlyNumberAndDot(fieldSize)}
            setValue={setFieldSize}
            keyboard={'numeric'}
            placeholder={string.enter_field_size}
          />
          <ComboBox
            style={styles.margin5px}
            value={measureUnit}
            data={measureUnitItens}
            setValue={setMeasureUnit}
            placeholder={string.measure_unit}
            modal_text={string.select_measure_unit}
          />
          {showWarn && <Styles.warnMessage>{warnMessage}</Styles.warnMessage>}
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
            value={limed}
            setValue={setLimed}
            style={styles.margin5px}
            text={string.limed_stage}
          />
          <CheckBox
            value={plowed}
            setValue={setPlowed}
            style={styles.margin5px}
            text={string.plowed_stage}
          />
          <CheckBox
            value={rolled}
            setValue={setRolled}
            style={styles.margin5px}
            text={string.rolled_stage}
          />
          <CheckBox
            value={mulched}
            setValue={setMulched}
            style={styles.margin5px}
            text={string.mulched_stage}
          />
        </Styles.ScrollBody>
      </Styles.Body>
      <Styles.Footer>
        <IconButton
          onPress={() => {
            navigation.goBack();
          }}
          icon={<Styles.Icon colors={colors} name="arrow-back" />}
        />
        <IconButton
          onPress={() => {
            validateEntryData();
          }}
          icon={<Styles.Icon colors={colors} name="calculator" />}
        />
      </Styles.Footer>
    </Styles.Container>
  );
};
export default Crop;
