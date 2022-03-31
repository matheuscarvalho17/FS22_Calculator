import {styles} from './styles';
import * as Styles from './styles';
import {ICropProps} from './normal';
import {useFlavor} from '../../flavor';
import {useLanguage} from '../../languages';
import CheckBox from '../../components/CheckBox';
import ComboBox, {Data} from '../../components/ComboBox';
import React, {useEffect, useMemo, useState} from 'react';

//*  It is the GrassCrop internal component.
//*  This (internal component) is used by Crop page to calculate a bonus prop.

const GrassCrop: React.FC<ICropProps> = ({setBonus, setRealBonus}) => {
  //* Flavor and Language hooks delaration
  const {colors} = useFlavor();
  const {string} = useLanguage();

  //* useStates declaration
  const [limed, setLimed] = useState<boolean>(false);
  const [rolled, setRolled] = useState<boolean>(false);
  const [plowed, setPlowed] = useState<boolean>(false);
  const [mulched, setMulched] = useState<boolean>(false);
  const [firstPreparation, setFirstPreparation] = useState<boolean>(true);
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

  //* Functions
  function bonusCalculation() {
    let multiplierByCare: number = 1;

    if (!firstPreparation) {
      multiplierByCare += 0.55;
    }

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
    if (fertilized.value === 'half_fertilized' && firstPreparation) {
      multiplierByCare += 0.225;
    }
    if (fertilized.value === 'full_fertilized' && firstPreparation) {
      multiplierByCare += 0.45;
    } else if (fertilized.value === 'full_fertilized' && !firstPreparation) {
      multiplierByCare += 0.225;
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
    if (!firstPreparation && fertilized.id < 1) {
      fertilizedItems.find(item => {
        if (item.value === 'half_fertilized') {
          setFertilized(item);
        }
      }, []);
    }
    setLimed(false);
    setPlowed(false);
    setRolled(false);
    setMulched(false);
  }, [firstPreparation]);
  useEffect(() => {
    bonusCalculation();
  }, [
    limed,
    plowed,
    rolled,
    mulched,
    fertilized,
    removedWeeds,
    firstPreparation,
  ]);

  return (
    //* Render the Care Bonuses internal component divided by sections
    <>
      {/* //* Soil Preparation */}
      <>
        <Styles.SectionTitle colors={colors}>
          {string.soil_preparation}:
        </Styles.SectionTitle>
        <CheckBox
          style={styles.margin5px}
          value={firstPreparation}
          setValue={() => {
            setFirstPreparation(true);
          }}
          text={string.soil_preparation_first}
        />
        <CheckBox
          style={styles.margin5px}
          value={!firstPreparation}
          setValue={() => {
            setFirstPreparation(false);
          }}
          text={string.soil_preparation_continuous}
        />
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
        {firstPreparation && (
          <>
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
          </>
        )}
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

export default GrassCrop;
