import React, {useEffect, useMemo, useState} from 'react';
import {useStyle} from './styles';
import {useNav} from '../../utils/hooks';
import {useLanguage} from '../../languages';
import {useCrops} from '../../utils/database';
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
  const [difficulty, setDifficulty] = useState<Data>({
    id: -1,
    label: null,
    value: null,
  });

  const [difficultyItems] = useState<Array<Data>>(
    useMemo(
      () => [
        {id: 0, label: string.easy, value: 'easy'},
        {id: 1, label: string.medium, value: 'medium'},
        {id: 2, label: string.hard, value: 'hard'},
      ],
      [],
    ),
  );

  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.Title>{crops[cropId].name}</Styles.Title>
      </Styles.Header>
      <Styles.ScrollBody>
        <Styles.Body>
          <Styles.Image source={crops[cropId].icon} />
          <Styles.TextInfos>
            {string.price}: {crops[cropId].avgPriceEasy}
          </Styles.TextInfos>
          <Styles.TextInfos>
            {string.yieldPerHa}: {crops[cropId].yieldPerHa} {crops[cropId].unit}
          </Styles.TextInfos>
          <Styles.CheckBoxList>
            <ComboBox
              value={difficulty}
              data={difficultyItems}
              setValue={setDifficulty}
              placeholder={string.difficulty}
              modal_text={string.select_difficulty}
            />
            <CheckBox text={string.limed} onPress={() => {}} />
            <CheckBox text={string.fertilized} onPress={() => {}} />
            <CheckBox text={string.removed_weeds} onPress={() => {}} />
            <CheckBox text={string.stone_picked} onPress={() => {}} />
            <CheckBox text={string.rolled} onPress={() => {}} />
            <CheckBox text={string.mulched} onPress={() => {}} />
          </Styles.CheckBoxList>
        </Styles.Body>
      </Styles.ScrollBody>
      <Styles.Footer>
        <IconButton
          onPress={() => {
            navigation.goBack();
          }}
          icon={<Ionicons name="arrow-back" style={styles.icon} />}
        />
      </Styles.Footer>
    </Styles.Container>
  );
};
export default Crop;
