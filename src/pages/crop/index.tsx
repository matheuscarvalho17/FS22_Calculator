import React from 'react';
import * as Styles from './styles';
import {useNav} from '../../utils/hooks';
import {crops} from '../../utils/database';
import {useRoute} from '@react-navigation/native';
import {string} from '../../languages';

const Crop: React.FC = ({}) => {
  const navigation = useNav('crop');
  const route = useRoute();
  const {cropid} = route.params;
  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.Title>{crops[cropid].name}</Styles.Title>
      </Styles.Header>
      <Styles.Body>
        <Styles.TextInfos>
          {string.price}: {crops[cropid].avgPrice}
        </Styles.TextInfos>
        <Styles.TextInfos>
          {string.yieldPerHa}: {crops[cropid].yieldPerHa}
        </Styles.TextInfos>
      </Styles.Body>
    </Styles.Container>
  );
};

export default Crop;
