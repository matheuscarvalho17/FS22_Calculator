import React from 'react';
import {styles} from './styles';
import * as Styles from './styles';
import {string} from '../../languages';
import {useNav} from '../../utils/hooks';
import {crops} from '../../utils/database';
import {useRoute} from '@react-navigation/native';
import IconButton from '../../components/IconButton';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Crop: React.FC = ({}) => {
  const navigation = useNav('crop');
  const route = useRoute();
  const {cropId} = route.params;

  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.Title>{crops[cropId].name}</Styles.Title>
      </Styles.Header>
      <Styles.ScrollBody>
        <Styles.Body>
          <Styles.Image source={crops[cropId].icon} />
          <Styles.TextInfos>
            {string.price}: {crops[cropId].avgPrice}
          </Styles.TextInfos>
          <Styles.TextInfos>
            {string.yieldPerHa}: {crops[cropId].yieldPerHa}
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
