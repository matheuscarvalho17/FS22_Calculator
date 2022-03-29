import {styles} from './styles';
import * as Styles from './styles';
import {useFlavor} from '../../flavor';
import {useLanguage} from '../../languages';
import {useCrops} from '../../utils/database';
import ComboBox, {Data} from '../../components/ComboBox';
import React, {useEffect, useMemo, useState} from 'react';

//*  It is the StrawCrop internal component.
//*  This (internal component) is used by Crop page to calculate a straw.
interface ICombobox {
  name: string;
  strawPerHa: number;
}
interface IStrawProps {
  setStrawYield: (straw: number) => void;
}
const StrawCrop: React.FC<IStrawProps> = ({setStrawYield}) => {
  //* Crops, Flavor and Language hooks delaration
  const crops = useCrops();
  const {colors} = useFlavor();
  const {string} = useLanguage();

  //* useStates declaration
  const [strawCrop, setStrawCrop] = useState<Data>({
    id: -1,
    label: null,
    value: null,
  });
  const [strawCropItens, setStrawCropItens] = useState<Array<Data>>([]);
  const cropsWithStraw = useMemo(() => {
    return crops.filter(item => item.strawPerHa != null);
  }, [crops]);

  //* useEffects
  useEffect(() => {
    const auxStrawCrop: Array<Data> = cropsWithStraw.map((item, index) => {
      return {
        id: index,
        label: item.name,
        value: item.name,
      };
    });
    setStrawCropItens(auxStrawCrop);
  }, []);
  useEffect(() => {
    const auxStrawCrop = crops.find(item => item.name === strawCrop.value);
    if (auxStrawCrop && auxStrawCrop.strawPerHa != null) {
      setStrawYield(auxStrawCrop.strawPerHa);
    }
  }, [cropsWithStraw]);

  return (
    //* Render the Crop Straw internal component
    <>
      <Styles.SectionTitle colors={colors}>
        Select the crop that will be used to calculate the straw yield:
      </Styles.SectionTitle>
      <ComboBox
        style={styles.margin5px}
        data={strawCropItens}
        value={strawCrop}
        setValue={setStrawCrop}
        modal_text="modal_text_straw"
        placeholder={'placeholder_straw'}
      />
    </>
  );
};

export default StrawCrop;
