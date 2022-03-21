import {useStyle} from './styles';
import {useNav} from '../../utils/hooks';
import {useLanguage} from '../../languages';
import Button from '../../components/Button';
import {useCrops} from '../../utils/database';
import {roundNumber} from '../../utils/masks';
import React, {useMemo, useState} from 'react';
import CheckBox from '../../components/CheckBox';
import {useRoute} from '@react-navigation/native';
import IconButton from '../../components/IconButton';
import ComboBox, {Data} from '../../components/ComboBox';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Crop: React.FC = ({}) => {
  const crops = useCrops();
  const route = useRoute();
  const Styles = useStyle();
  const {styles} = useStyle();
  const {cropId} = route.params;
  const {string} = useLanguage();
  const navigation = useNav('crop');
  const [multiplier, setMultiplier] = useState<number>(1);
  const [bonus, setBonus] = useState<number>(0);
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

  function yieldCalculation() {
    let percentual: number = 1;

    if (limed) {
      percentual = percentual + 0.15;
    }
    if (plowed) {
      percentual = percentual + 0.15;
    }
    if (rolled) {
      percentual = percentual + 0.025;
    }
    if (mulched) {
      percentual = percentual + 0.025;
    }
    if (fertilized.value === 'half_fertilized') {
      percentual = percentual + 0.225;
    }
    if (fertilized.value === 'full_fertilized') {
      percentual = percentual + 0.45;
    }
    if (removedWeeds.value === 'mec_removed_weeds') {
      percentual = percentual + 0.2;
    }
    if (removedWeeds.value === 'chem_removed_weeds') {
      percentual = percentual + 0.15;
    }
    setMultiplier(percentual);
    setBonus((percentual - 1) * 100);
  }

  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.Title>{crops[cropId].name}</Styles.Title>
      </Styles.Header>
      <Styles.ScrollBody>
        <Styles.Body>
          <Styles.Image source={crops[cropId].icon} />
          <Styles.BoxList>
            <Styles.TextInfos>
              {string.yieldPerHa}:{' '}
              {roundNumber(multiplier * crops[cropId].yieldPerHa)}{' '}
              {crops[cropId].unit}
            </Styles.TextInfos>
            <Styles.TextInfos>
              {string.bonus}: {roundNumber(bonus) + '%'}
            </Styles.TextInfos>
            <CheckBox
              value={limed}
              setValue={() => setLimed(!limed)}
              text={string.limed_stage}
              onPress={() => {}}
            />
            <CheckBox
              value={plowed}
              setValue={() => setPlowed(!plowed)}
              text={string.plowed_stage}
              onPress={() => {}}
            />
            <CheckBox
              value={rolled}
              setValue={() => setRolled(!rolled)}
              text={string.rolled_stage}
              onPress={() => {}}
            />
            <CheckBox
              value={mulched}
              setValue={() => setMulched(!mulched)}
              text={string.mulched_stage}
              onPress={() => {}}
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
        </Styles.Body>
      </Styles.ScrollBody>
      <Styles.Footer>
        <IconButton
          onPress={() => {
            navigation.goBack();
          }}
          icon={<Ionicons name="arrow-back" style={styles.icon} />}
        />
        <IconButton
          onPress={() => {
            yieldCalculation();
          }}
          icon={<Ionicons name="calculator" style={styles.icon} />}
        />
      </Styles.Footer>
    </Styles.Container>
  );
};
export default Crop;
