import React from 'react';
import * as Styles from './styles';
import {useNav} from '../../utils/hooks';
import {crops} from '../../utils/database';
import {useRoute} from '@react-navigation/native';
import {string} from '../../languages';

const Crop: React.FC = ({}) => {
  const navigation = useNav('crop');
  const route = useRoute();
  const {cropId} = route.params;
  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.Title>{crops[cropId].name}</Styles.Title>
      </Styles.Header>
      <Styles.Body>
        <Styles.TextInfos>
          {string.price}: {crops[cropId].avgPrice}
        </Styles.TextInfos>
        <Styles.TextInfos>
          {string.yieldPerHa}: {crops[cropId].yieldPerHa}
        </Styles.TextInfos>
      </Styles.Body>
    </Styles.Container>
  );
};

export default Crop;
