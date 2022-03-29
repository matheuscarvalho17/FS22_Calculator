import {styles} from './styles';
import * as Styles from './styles';
import {useFlavor} from '../../flavor';
import {useNav} from '../../utils/hooks';
import {useLanguage} from '../../languages';
import {useCrops} from '../../utils/database';
import CheckBox from '../../components/CheckBox';
import {useRoute} from '@react-navigation/native';
import TextInput from '../../components/TextInput';
import IconButton from '../../components/IconButton';
import ComboBox, {Data} from '../../components/ComboBox';
import React, {useEffect, useMemo, useState} from 'react';
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
  const [yieldField, setYieldField] = useState<number>(0);
  const [multiplier, setMultiplier] = useState<number>(1);
  const [showWarn, setShowWarn] = useState<boolean>(false);
  const [targetField, setTargetField] = useState<number>(0);
  const [warnMessage, setWarnMessage] = useState<string>('');
  const [mathBySize, setMathBySize] = useState<boolean>(true);
  const [targetHarvester, setTargetHarvester] = useState<string>('');
  const [measureUnitLabel, setMeasureUnitLabel] = useState<string>('');
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
  const unitsField: {
    '(ha)': number;
    '(acre)': number;
    '(a)': number;
    '(m²)': number;
    '(ft²)': number;
  } = {
    '(ha)': 1,
    '(acre)': 0.404686,
    '(a)': 0.01,
    '(m²)': 0.0001,
    '(ft²)': 0.0000092903,
  };

  function handleChangeMathBySize() {
    setMathBySize(!mathBySize);
  }
  function validateEntryData() {
    setShowWarn(false);
    setWarnMessage('');

    if (!mathBySize) {
      if (parseFloat(targetHarvester) > 0) {
        if (measureUnit.id != -1) {
          let bonus: number = bonusCalculation();
          fieldCalculation(bonus);
        } else {
          setWarnMessage(string.warn_measure_unit);
          setShowWarn(true);
          return;
        }
      } else {
        setWarnMessage(string.warn_harvest_target);
        setShowWarn(true);
        return;
      }
    } else {
      if (parseFloat(fieldSize) > 0) {
        if (measureUnit.id != -1) {
          let bonus: number = bonusCalculation();
          yieldCalculation(bonus);
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
  }
  function bonusCalculation() {
    let multiplierByCare: number = 1;

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
    setBonus((multiplierByCare - 1) * 100);
    return multiplierByCare;
  }
  function yieldCalculation(multiplierByCare: number) {
    let yieldMultiplier: number = 0;

    yieldMultiplier =
      parseFloat(fieldSize) *
      multiplierByCare *
      unitsField[measureUnit.value ? measureUnit.value : '(ha)'];

    setMultiplier(yieldMultiplier);
  }
  function fieldCalculation(multiplierByCare: number) {
    let fieldSize: number = 0;

    fieldSize =
      yieldField /
      multiplierByCare /
      parseFloat(targetHarvester) /
      unitsField[measureUnit.value ? measureUnit.value : '(ha)'];

    setTargetField(fieldSize);
    setMeasureUnitLabel(measureUnit.value ? measureUnit.value : '(ha)');
  }

  useEffect(() => {
    setYieldField(crops[cropId].yieldPerHa);
  }, []);
  useEffect(() => {
    setFieldSize('');
    setShowWarn(false);
    setWarnMessage('');
    setTargetHarvester('');
  }, [mathBySize]);

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
        {/* //* Main informations */}
        <>
          <Styles.DivideView>
            {mathBySize ? (
              <>
                <Styles.TextInfos colors={colors}>
                  {string.yield} {measureUnit.value}:
                </Styles.TextInfos>
                <Styles.TextInfosAccent colors={colors}>
                  {roundNumber(yieldField * multiplier)} {crops[cropId].unit}
                </Styles.TextInfosAccent>
              </>
            ) : (
              <>
                <Styles.TextInfos colors={colors}>
                  {string.field_required}:
                </Styles.TextInfos>
                <Styles.TextInfosAccent colors={colors}>
                  {roundNumber(targetField)} {measureUnitLabel}
                </Styles.TextInfosAccent>
              </>
            )}
          </Styles.DivideView>
          <Styles.DivideView>
            <Styles.TextInfos colors={colors}>{string.bonus}:</Styles.TextInfos>
            <Styles.TextInfosAccent colors={colors}>
              +{roundNumber(bonus) + '%'}
            </Styles.TextInfosAccent>
          </Styles.DivideView>
        </>
        <Styles.ScrollBody>
          {/* //* Calculation method */}
          <>
            <Styles.SectionTitle colors={colors}>
              {string.calculation_method}:
            </Styles.SectionTitle>
            <CheckBox
              value={mathBySize}
              setValue={setMathBySize}
              style={styles.margin5px}
              text={string.mathBySize}
            />
            <CheckBox
              value={!mathBySize}
              setValue={handleChangeMathBySize}
              style={styles.margin5px}
              text={string.mathByHarvest}
            />
          </>
          {/* //* Input size or target and measure unit */}
          <>
            <Styles.SectionTitle colors={colors}>
              {mathBySize ? string.field_size : string.harvest_target}:
            </Styles.SectionTitle>
            {mathBySize ? (
              <TextInput
                style={styles.margin5px}
                value={onlyNumberAndDot(fieldSize)}
                setValue={setFieldSize}
                keyboard={'numeric'}
                placeholder={string.enter_field_size}
              />
            ) : (
              <TextInput
                style={styles.margin5px}
                value={onlyNumberAndDot(targetHarvester)}
                setValue={setTargetHarvester}
                keyboard={'numeric'}
                placeholder={string.enter_harvester_target}
              />
            )}
            <ComboBox
              style={styles.margin5px}
              value={measureUnit}
              data={measureUnitItens}
              setValue={setMeasureUnit}
              placeholder={string.measure_unit}
              modal_text={string.select_measure_unit}
            />
            {showWarn && <Styles.warnMessage>{warnMessage}</Styles.warnMessage>}
          </>
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
          </>
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
