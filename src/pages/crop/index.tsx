import React from 'react';
import {useStyle} from './styles';
import {useNav} from '../../utils/hooks';
import {useLanguage} from '../../languages';
import {useCrops} from '../../utils/database';
import {useRoute} from '@react-navigation/native';
import IconButton from '../../components/IconButton';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Crop: React.FC = ({}) => {
  const crops = useCrops();
  const route = useRoute();
  const Styles = useStyle();
  const {styles} = useStyle();
  const {cropId} = route.params;
  const {string} = useLanguage();
  const navigation = useNav('crop');

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
