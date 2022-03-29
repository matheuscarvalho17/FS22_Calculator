import Grass from './grass';
import Normal from './normal';
import Cluster from './cluster';
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
import StrawCrop from './straw';

//*  It is the Crop page.
//*  This (page) allows users manage the props to calculate a yield and field.

const Crop: React.FC = ({}) => {
  //* Flavor, Language, Crops, Route and Navigation hooks declaration
  const crops = useCrops();
  const route = useRoute();
  const {colors} = useFlavor();
  const {cropId} = route.params;
  const {string} = useLanguage();
  const navigation = useNav('crop');

  //* useStates declaration
  const [bonus, setBonus] = useState<number>(0);
  const [realBonus, setRealBonus] = useState<number>(0);
  const [fieldSize, setFieldSize] = useState<string>('');
  const [yieldField, setYieldField] = useState<number>(0);
  const [bonusLabel, setBonusLabel] = useState<number>(0);
  const [multiplier, setMultiplier] = useState<number>(1);
  const [showWarn, setShowWarn] = useState<boolean>(false);
  const [targetField, setTargetField] = useState<number>(0);
  const [warnMessage, setWarnMessage] = useState<string>('');
  const [mathBySize, setMathBySize] = useState<boolean>(true);
  const [targetHarvester, setTargetHarvester] = useState<string>('');
  const [measureUnitLabel, setMeasureUnitLabel] = useState<string>('');
  const [strawYield, setStrawYield] = useState<number>(0);
  const [measureUnit, setMeasureUnit] = useState<Data>({
    id: -1,
    label: null,
    value: null,
  });
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

  //* Functions
  function validateEntryData() {
    setShowWarn(false);
    setWarnMessage('');

    if (!mathBySize) {
      if (parseFloat(targetHarvester) > 0) {
        if (measureUnit.id != -1) {
          fieldCalculation(realBonus);
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
          yieldCalculation(realBonus);
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
    setBonusLabel(bonus);
  }
  function fieldCalculation(multiplierByCare: number) {
    let fieldSize: number =
      parseFloat(targetHarvester) /
      (multiplierByCare * yieldField) /
      unitsField[measureUnit.value ? measureUnit.value : '(ha)'];

    setTargetField(fieldSize);
    setMeasureUnitLabel(measureUnit.value ? measureUnit.value : '(ha)');
  }
  function yieldCalculation(multiplierByCare: number) {
    let yieldMultiplier: number =
      parseFloat(fieldSize) *
      multiplierByCare *
      unitsField[measureUnit.value ? measureUnit.value : '(ha)'];

    setMultiplier(yieldMultiplier);
  }

  //* useEffects
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
      {/* //* The Header contains the title and the icon. */}
      <Styles.Header>
        <Styles.LeftView>
          <Styles.Title colors={colors}>{crops[cropId].name}</Styles.Title>
        </Styles.LeftView>
        <Styles.RightView>
          <Styles.Image colors={colors} source={crops[cropId].icon} />
        </Styles.RightView>
      </Styles.Header>
      {/* //* The Body is divided by sections: */}
      {/* //* Main Information, Calculation Method, Target Yield and Field Size, Care Bonuses. */}
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
              +{roundNumber(bonusLabel) + '%'}
            </Styles.TextInfosAccent>
          </Styles.DivideView>
        </>
        <Styles.ScrollBody showsVerticalScrollIndicator={false}>
          {/* //* Calculation Method */}
          <>
            <Styles.SectionTitle colors={colors}>
              {string.calculation_method}:
            </Styles.SectionTitle>
            <CheckBox
              value={mathBySize}
              setValue={() => setMathBySize(true)}
              style={styles.margin5px}
              text={string.mathBySize}
            />
            <CheckBox
              value={!mathBySize}
              setValue={() => setMathBySize(false)}
              style={styles.margin5px}
              text={string.mathByHarvest}
            />
          </>
          {/* //* Size or target and measure unit */}
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
          {/* //* Care Bonuses type*/}
          <>
            {crops[cropId].type == 'normal' && (
              <Normal setBonus={setBonus} setRealBonus={setRealBonus} />
            )}
            {crops[cropId].type == 'cluster' && (
              <Cluster setBonus={setBonus} setRealBonus={setRealBonus} />
            )}
            {crops[cropId].type == 'grass' && (
              <Grass setBonus={setBonus} setRealBonus={setRealBonus} />
            )}
            {crops[cropId].type == 'straw' && (
              <StrawCrop setStrawYield={setStrawYield} />
            )}
          </>
        </Styles.ScrollBody>
      </Styles.Body>
      {/* //*  The Footer contains buttons to go back to the previous page and calculate. */}
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
