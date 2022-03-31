import {styles} from './styles';
import * as Styles from './styles';
import {useFlavor} from '../../flavor';
import {useLanguage} from '../../languages';
import {useCrops} from '../../utils/database';
import CheckBox from '../../components/CheckBox';
import ComboBox, {Data} from '../../components/ComboBox';
import React, {useEffect, useMemo, useState} from 'react';

//*  It is the StrawCrop internal component.
//*  This (internal component) is used by Crop page to calculate a straw.
interface IStrawProps {
  setBonus: Function;
  setRealBonus: Function;
  setStrawYield: (straw: number) => void;
}
const StrawCrop: React.FC<IStrawProps> = ({
  setBonus,
  setRealBonus,
  setStrawYield,
}) => {
  //* Crops, Flavor and Language hooks delaration
  const crops = useCrops();
  const {colors} = useFlavor();
  const {string} = useLanguage();

  //* useStates declaration
  const [limed, setLimed] = useState<boolean>(false);
  const [rolled, setRolled] = useState<boolean>(false);
  const [plowed, setPlowed] = useState<boolean>(false);
  const [mulched, setMulched] = useState<boolean>(false);
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
  const [strawCrop, setStrawCrop] = useState<Data>({
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
  const [strawCropItens, setStrawCropItens] = useState<Array<Data>>([]);

  const cropsWithStraw = useMemo(() => {
    return crops.filter(item => item.strawPerHa != null);
  }, [crops]);

  //* Functions
  function validateEntryData() {
    setShowWarn(false);
    setWarnMessage('');

    if (strawCrop.id === -1) {
      setWarnMessage(string.warn_crop_origin);
      setShowWarn(true);
    } else {
      bonusCalculation();
    }
  }
  function bonusCalculation() {
    let multiplierByCare: number = 1;

    if (limed) {
      multiplierByCare += 0.15;
    }
    if (plowed) {
      multiplierByCare += 0.15;
    }
    if (rolled) {
      multiplierByCare += 0.025;
    }
    if (mulched) {
      multiplierByCare += 0.025;
    }
    if (fertilized.value === 'half_fertilized') {
      multiplierByCare += 0.225;
    }
    if (fertilized.value === 'full_fertilized') {
      multiplierByCare += 0.45;
    }
    if (removedWeeds.value === 'mec_removed_weeds') {
      multiplierByCare += 0.2;
    }
    if (removedWeeds.value === 'chem_removed_weeds') {
      multiplierByCare += 0.15;
    }

    setRealBonus(multiplierByCare);
    setBonus((multiplierByCare - 1) * 100);
  }

  //* useEffects
  useEffect(() => {
    let aux: Array<Data> = [];
    cropsWithStraw.forEach((item, index) => {
      aux.push({
        id: index,
        label: item.name,
        value: item.name,
      });
    });
    setStrawCropItens(aux);
  }, []);
  useEffect(() => {
    const auxStrawCrop = crops.find(item => item.name === strawCrop.value);
    if (auxStrawCrop && auxStrawCrop.strawPerHa != null) {
      setStrawYield(auxStrawCrop.strawPerHa);
    }
  }, [cropsWithStraw]);
  useEffect(() => {
    setShowWarn(false);
    setWarnMessage('');
    validateEntryData();
  }, [limed, plowed, rolled, mulched, fertilized, removedWeeds, strawCrop]);

  return (
    //* Render the Crop Straw internal component
    <>
      {/* //* Crop type selection */}
      <>
        <Styles.SectionTitle colors={colors}>
          {string.straw_crop_origins}:
        </Styles.SectionTitle>
        <ComboBox
          style={styles.margin5px}
          data={strawCropItens}
          value={strawCrop}
          setValue={setStrawCrop}
          modal_text={string.select_straw_by_crop_type}
          placeholder={string.straw_by_crop_type}
        />
        {showWarn && <Styles.warnMessage>{warnMessage}</Styles.warnMessage>}
      </>
      {/* //* Care Bonuses markers */}
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
    </>
  );
};

export default StrawCrop;
