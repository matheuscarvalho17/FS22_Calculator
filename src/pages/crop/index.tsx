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
import Normal from './normal';
import Cluster from './cluster';
import {View} from 'react-native';

const Crop: React.FC = ({}) => {
  const crops = useCrops();
  const route = useRoute();
  const {colors} = useFlavor();
  const {cropId} = route.params;
  const {string} = useLanguage();
  const navigation = useNav('crop');

  // !useState
  const [mathBySize, setMathBySize] = useState<boolean>(true);
  const [showWarn, setShowWarn] = useState<boolean>(false);
  const [warnMessage, setWarnMessage] = useState<string>('');
  const [measureUnitLabel, setMeasureUnitLabel] = useState<string>('');
  const [bonusLabel, setBonusLabel] = useState<number>(0);
  const [fieldSize, setFieldSize] = useState<string>('');
  const [targetHarvester, setTargetHarvester] = useState<string>('');
  const [bonus, setBonus] = useState<number>(0);
  const [realBonus, setRealBonus] = useState<number>(0);
  const [measureUnit, setMeasureUnit] = useState<Data>({
    id: -1,
    label: null,
    value: null,
  });
  const [multiplier, setMultiplier] = useState<number>(1);
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
  const [yieldField, setYieldField] = useState<number>(0);
  const [targetField, setTargetField] = useState<number>(0);
  // !function
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
  function handleChangeMathBySize() {
    setMathBySize(!mathBySize);
  }
  function yieldCalculation(multiplierByCare: number) {
    let yieldMultiplier: number = 0;

    yieldMultiplier =
      parseFloat(fieldSize) *
      multiplierByCare *
      unitsField[measureUnit.value ? measureUnit.value : '(ha)'];

    setMultiplier(yieldMultiplier);
  }
  function validateEntryData() {
    setShowWarn(false);
    setWarnMessage('');

    if (!mathBySize) {
      if (parseFloat(targetHarvester) > 0) {
        if (measureUnit.id != -1) {
          let bonus: number = realBonus;
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
          let bonus: number = realBonus;
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
    setBonusLabel(bonus);
  }
  // !useEffect
  useEffect(() => {
    setYieldField(crops[cropId].yieldPerHa);
  }, []);
  useEffect(() => {
    setFieldSize('');
    //setShowWarn(false);
    //setWarnMessage('');
    setTargetHarvester('');
  }, [mathBySize]);

  // !render
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
              +{roundNumber(bonusLabel) + '%'}
            </Styles.TextInfosAccent>
          </Styles.DivideView>
        </>
        <Styles.ScrollBody>
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

          {crops[cropId].type == 'normal' && (
            <Normal
              cropId={cropId}
              setBonus={setBonus}
              setMeasureUnitLabel={setMeasureUnitLabel}
              setRealBonus={setRealBonus}
              targetHarvester={targetHarvester}
              unitsField={unitsField}
            />
          )}
          {crops[cropId].type == 'cluster' && (
            <Cluster
              cropId={cropId}
              setBonus={setBonus}
              setMeasureUnitLabel={setMeasureUnitLabel}
              setRealBonus={setRealBonus}
              targetHarvester={targetHarvester}
              unitsField={unitsField}
            />
          )}
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
